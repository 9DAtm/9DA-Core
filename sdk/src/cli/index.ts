#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { Executor } from '../runtime/executor';
import { TaskContext, ExecutionMode } from '../kernel/types';
import { LLMProviderFactory } from '../llm/providers';

const program = new Command();

program.name('9da').description('9DA Termination-Safe Intelligence Runtime').version('1.0.0');

program.command('run').description('Execute task').argument('<task>', 'Path to task JSON')
  .option('-o, --output <path>', 'Output directory', './runs')
  .option('--live <provider>', 'Use LIVE mode with specified provider (anthropic|openai)')
  .action(async (taskPath: string, options: any) => {
    try {
      const task: TaskContext = JSON.parse(fs.readFileSync(taskPath, 'utf-8'));
      console.log(`\n9DA RUNTIME\nTask: ${task.id}\n`);
      
      let llmProvider;
      let executionMode = ExecutionMode.MOCK;
      
      if (options.live) {
        executionMode = ExecutionMode.LIVE;
        llmProvider = LLMProviderFactory.create(options.live);
        console.log(`[LIVE MODE] Using ${options.live} provider\n`);
      } else {
        llmProvider = LLMProviderFactory.getDefault();
        console.log('[MOCK MODE] Running without API keys\n');
      }
      
      const executor = new Executor({ llmProvider, executionMode });
      const result = await executor.execute(task);
      
      console.log('\n' + '='.repeat(80));
      console.log('\n1. CORE OF THE PROBLEM\n' + result.artifact.invariantCore);
      console.log('\n2. WHY THIS DOES NOT RESOLVE\n' + result.artifact.nonResolutionExplanation);
      console.log('\n3. MACHINE-READABLE SUMMARY\n' + JSON.stringify(result.artifact.machineReadable, null, 2));
      console.log('\n4. OPTIONS TO SOLUTIONS');
      result.artifact.nonPrescriptiveOptions.forEach((opt: any, i: number) => console.log(`\nOption ${i+1}: ${opt.option}`));
      console.log('\n5. CLOSURE\n' + result.artifact.closure);
      console.log('\n' + '='.repeat(80));
      
      const outputDir = options.output;
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const outputPath = path.join(outputDir, `9da-${task.id}-${timestamp}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(result.artifact, null, 2));
      console.log(`\nArtifact saved: ${outputPath}`);
      console.log(`Exit code: ${result.exitCode}\n`);
      process.exit(result.exitCode);
    } catch (error: any) {
      console.error('\nERROR:', error.message);
      process.exit(3);
    }
  });

program.command('validate').description('Validate artifact').argument('<artifact>', 'Path to artifact JSON')
  .action((artifactPath: string) => {
    try {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf-8'));
      console.log('\nValidating artifact...');
      if (artifact.machineReadable?.status === 'TERMINATED') {
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
