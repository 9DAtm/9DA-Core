#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { Executor } from '../runtime/executor';
import { ApprovalEngine } from '../modes/approval/engine';
import { TaskContext, ExecutionMode } from '../kernel/types';
import { LLMProviderFactory } from '../llm/providers';

const program = new Command();

program.name('9da').description('9DA Dual-Mode Intelligence Runtime').version('2.0.0');

program.command('run').description('Execute task')
  .argument('<task>', 'Path to task JSON')
  .option('-o, --output <path>', 'Output directory', './runs')
  .option('--mode <mode>', 'Execution mode: termination | approval', 'approval')
  .option('--live <provider>', 'Use LIVE mode with specified provider (anthropic|openai)')
  .action(async (taskPath: string, options: any) => {
    try {
      const task: TaskContext = JSON.parse(fs.readFileSync(taskPath, 'utf-8'));
      
      if (options.mode === 'termination') {
        await runTerminationMode(task, options);
      } else {
        await runApprovalMode(task, options);
      }
    } catch (error: any) {
      console.error('\nERROR:', error.message);
      process.exit(3);
    }
  });

async function runTerminationMode(task: TaskContext, options: any) {
  console.log(`\n9DA RUNTIME — TERMINATION MODE\nTask: ${task.id}\n`);
  
  let llmProvider;
  if (options.live) {
    llmProvider = LLMProviderFactory.create(options.live);
    console.log(`[LIVE MODE] Using ${options.live} provider\n`);
  } else {
    llmProvider = LLMProviderFactory.getDefault();
    console.log('[MOCK MODE] Running without API keys\n');
  }
  
  const executor = new Executor({ llmProvider, executionMode: ExecutionMode.MOCK });
  const result = await executor.execute(task);
  
  console.log('\n' + '='.repeat(80));
  console.log('TERMINATION ARTIFACT');
  console.log('='.repeat(80));
  console.log('\n1. CORE OF THE PROBLEM\n' + result.artifact.invariantCore);
  console.log('\n2. WHY THIS DOES NOT RESOLVE\n' + result.artifact.nonResolutionExplanation);
  console.log('\n3. MACHINE-READABLE SUMMARY\n' + JSON.stringify(result.artifact.machineReadable, null, 2));
  console.log('\n4. NON-PRESCRIPTIVE OPTIONS');
  result.artifact.nonPrescriptiveOptions.forEach((opt: any, i: number) => 
    console.log(`\nOption ${i+1}: ${opt.option}`)
  );
  console.log('\n5. CLOSURE\n' + result.artifact.closure);
  console.log('\n' + '='.repeat(80));
  
  saveArtifact(options.output, task.id, 'termination', result.artifact);
  process.exit(result.exitCode);
}

async function runApprovalMode(task: TaskContext, options: any) {
  console.log(`\n9DA RUNTIME — APPROVAL MODE\nTask: ${task.id}\n`);
  
  let llmProvider;
  if (options.live) {
    llmProvider = LLMProviderFactory.create(options.live);
    console.log(`[LIVE MODE] Using ${options.live} provider\n`);
  } else {
    llmProvider = LLMProviderFactory.getDefault();
    console.log('[MOCK MODE] Running without API keys\n');
  }
  
  const executor = new Executor({ llmProvider, executionMode: ExecutionMode.MOCK });
  const executionResult = await executor.execute(task);
  
  const approvalEngine = new ApprovalEngine();
  const approvalArtifact = await approvalEngine.evaluate(
    {
      taskId: task.id,
      description: task.description,
      constraints: task.constraints,
      domain: task.domain,
      iteration: 1
    },
    executionResult.artifact.allAnalyses,
    executionResult.artifact.layerSyntheses
  );
  
  console.log('\n' + '='.repeat(80));
  console.log('APPROVAL ARTIFACT');
  console.log('='.repeat(80));
  
  console.log(`\nSTATUS: ${approvalArtifact.approval_status}`);
  console.log(`MODE: ${approvalArtifact.evaluation_mode}`);
  
  if (approvalArtifact.approval_status === 'NOT_APPROVED') {
    console.log(`\n📋 FAULT SUMMARY`);
    console.log(`Total Faults: ${approvalArtifact.fault_summary?.total_faults}`);
    console.log(`\nFault Clusters:`);
    approvalArtifact.fault_summary?.clusters.forEach(cluster => {
      console.log(`\n  ${cluster.cluster_id} — ${cluster.layer.name}`);
      console.log(`  Root Cause: ${cluster.root_cause}`);
      console.log(`  Faults: ${cluster.faults.length}`);
    });
    
    console.log(`\n\n✅ CONSTRUCTIVE SOLUTIONS\n`);
    approvalArtifact.solutions?.human_readable.forEach(solution => {
      console.log(`\n${solution.solution_id} — ${solution.title}\n`);
      console.log('What to change:');
      solution.what_to_change.forEach(c => console.log(`  • ${c}`));
      console.log('\nWhy this works:');
      solution.why_this_works.forEach(w => console.log(`  • ${w}`));
      console.log('\nWhat this enables:');
      solution.what_this_enables.forEach(e => console.log(`  • ${e}`));
      console.log('\nTrade-offs:');
      solution.tradeoffs.forEach(t => console.log(`  • ${t}`));
    });
  } else {
    console.log('\n✅ APPROVED — Zero faults. Ready for implementation.');
  }
  
  console.log(`\n\n📍 NEXT STEP\n${approvalArtifact.next_step}`);
  console.log('\n' + '='.repeat(80));
  
  saveArtifact(options.output, task.id, 'approval', approvalArtifact);
  process.exit(approvalArtifact.approval_status === 'APPROVED' ? 0 : 1);
}

function saveArtifact(outputDir: string, taskId: string, mode: string, artifact: any) {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = path.join(outputDir, `9da-${mode}-${taskId}-${timestamp}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(artifact, null, 2));
  console.log(`\nArtifact saved: ${outputPath}`);
}

program.command('validate').description('Validate artifact').argument('<artifact>', 'Path to artifact JSON')
  .action((artifactPath: string) => {
    try {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf-8'));
      console.log('\nValidating artifact...');
      
      if (artifact.approval_status) {
        console.log('✓ Valid approval artifact\n');
        process.exit(0);
      } else if (artifact.machineReadable?.status === 'TERMINATED') {
        console.log('✓ Valid termination artifact\n');
        process.exit(0);
      } else {
        console.log('✗ Invalid artifact\n');
        process.exit(1);
      }
    } catch (error: any) {
      console.error('\nERROR:', error.message);
      process.exit(1);
    }
  });

program.parse();
