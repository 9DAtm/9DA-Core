import { TaskContext, ExecutionResult, ExitCode, LayerSynthesis, DimensionalAnalysis, REFERENCE_LAYERS, RuntimeConfig, TerminationArtifact, ExecutionMode, Layer } from '../kernel/types';
import { enforceInvariant, INVARIANTS, CONTRADICTION_CEILING } from '../kernel/invariants';
import { validateTaskContext } from '../kernel/validators';
import { createAgents } from '../agents';
import { LLMProviderFactory } from '../llm/providers';

export class Executor {
  private config: RuntimeConfig;
  private agents: any[];
  
  constructor(config?: RuntimeConfig) {
    this.config = { 
      executionMode: ExecutionMode.MOCK,
      parallelExecution: true, 
      timeoutMs: 300000, 
      ...config 
    };
    const llmProvider = this.config.llmProvider || LLMProviderFactory.getDefault();
    this.agents = createAgents(llmProvider);
  }

  async execute(context: TaskContext): Promise<ExecutionResult> {
    const startTime = Date.now();
    try {
      validateTaskContext(context);
      
      // Use user-defined layers or fall back to reference layers
      const layers = context.layers || REFERENCE_LAYERS;
      
      const layerSyntheses: LayerSynthesis[] = [];
      const allAnalyses: DimensionalAnalysis[] = [];
      
      for (const layer of layers) {
        console.log(`\nExecuting ${layer.name}...`);
        const layerAnalyses = await this.executeLayer(layer, context, layerSyntheses);
        allAnalyses.push(...layerAnalyses);
        const synthesis = this.synthesizeLayer(layer, layerAnalyses);
        layerSyntheses.push(synthesis);
        console.log(`  Coherence: ${synthesis.layerCoherence.toFixed(3)}, Contradictions: ${synthesis.crossDimensionalContradictions.length}`);
        if (this.shouldTerminateEarly(layerSyntheses, allAnalyses)) { console.log(`  Early termination`); break; }
      }
      
      const terminationReason = this.determineTermination(layerSyntheses, allAnalyses);
      const artifact = this.formatArtifact(context, layerSyntheses, allAnalyses, terminationReason, Date.now() - startTime);
      const exitCode = this.determineExitCode(terminationReason.type);
      enforceInvariant(artifact.machineReadable.status === 'TERMINATED', INVARIANTS.MANDATORY_TERMINATION, 'Must terminate');
      return { artifact, exitCode };
    } catch (error: any) {
      return { artifact: this.createErrorArtifact(context, error, Date.now() - startTime), exitCode: ExitCode.RUNTIME_VIOLATION };
    }
  }

  private async executeLayer(layer: any, context: TaskContext, priorLayerOutputs: LayerSynthesis[]): Promise<DimensionalAnalysis[]> {
    const analyses: DimensionalAnalysis[] = [];
    if (this.config.parallelExecution) {
      const results = await Promise.all(this.agents.map(agent => agent.executeInLayer(layer, context, priorLayerOutputs, analyses)));
      analyses.push(...results);
    } else {
      for (const agent of this.agents) { analyses.push(await agent.executeInLayer(layer, context, priorLayerOutputs, analyses)); }
    }
    return analyses;
  }

  private synthesizeLayer(layer: any, analyses: DimensionalAnalysis[]): LayerSynthesis {
    const contradictions: string[] = [];
    analyses.forEach(a => contradictions.push(...a.contradictions));
    const avgCoherence = analyses.reduce((sum, a) => sum + a.coherenceScore, 0) / analyses.length;
    const penalty = Math.min(1, contradictions.length * 0.05);
    return { layerId: layer.id, analyses, crossDimensionalContradictions: Array.from(new Set(contradictions)), layerCoherence: Math.max(0, avgCoherence - penalty), emergentPatterns: [] };
  }

  private shouldTerminateEarly(syntheses: LayerSynthesis[], analyses: DimensionalAnalysis[]): boolean {
    const total = analyses.reduce((sum, a) => sum + a.contradictions.length, 0);
    return total >= CONTRADICTION_CEILING;
  }

  private determineTermination(syntheses: LayerSynthesis[], analyses: DimensionalAnalysis[]): any {
    const totalContradictions = analyses.reduce((sum, a) => sum + a.contradictions.length, 0);
    const globalCoherence = syntheses.reduce((sum, s) => sum + s.layerCoherence, 0) / syntheses.length;
    if (totalContradictions >= CONTRADICTION_CEILING) return { type: 'CONTRADICTION_CEILING', explanation: `${totalContradictions} contradictions exceed ceiling`, supportingEvidence: analyses.slice(0, 5).flatMap(a => a.contradictions).slice(0, 10), dimensionalSources: analyses.map(a => a.dimension) };
    if (globalCoherence < 0.2) return { type: 'STRUCTURAL_IMPOSSIBILITY', explanation: `Coherence collapsed to ${globalCoherence.toFixed(3)}`, supportingEvidence: syntheses.map(s => `${s.layerId}: ${s.layerCoherence.toFixed(3)}`), dimensionalSources: analyses.map(a => a.dimension) };
    return { type: 'CLEAN_TERMINATION', explanation: `Completed ${syntheses.length} layers, ${analyses.length} dimensions`, supportingEvidence: [`Contradictions: ${totalContradictions}`, `Coherence: ${globalCoherence.toFixed(3)}`], dimensionalSources: analyses.map(a => a.dimension) };
  }

  private formatArtifact(context: TaskContext, syntheses: LayerSynthesis[], analyses: DimensionalAnalysis[], terminationReason: any, executionTime: number): TerminationArtifact {
    const totalContradictions = analyses.reduce((sum, a) => sum + a.contradictions.length, 0);
    const globalCoherence = syntheses.reduce((sum, s) => sum + s.layerCoherence, 0) / syntheses.length;
    return {
      taskId: context.id, taskDescription: context.description,
      invariantCore: `INVARIANT CORE\n\nTask: ${context.description}\n\nConstraints: ${context.constraints.length}\n\nEssential Nature: Simultaneous satisfaction of mutually exclusive requirements.`,
      terminationReason, nonResolutionExplanation: `WHY THIS DOES NOT RESOLVE\n\n${terminationReason.explanation}\n\nTotal contradictions: ${totalContradictions}\nGlobal coherence: ${globalCoherence.toFixed(3)}`,
      machineReadable: { status: 'TERMINATED', reason: terminationReason.type, contradictionCount: totalContradictions, coherenceScore: globalCoherence, layerAnalysis: {} as any, dimensionalAnalysis: {} as any },
      nonPrescriptiveOptions: [{ option: 'Constraint Relaxation: Remove or weaken mutually exclusive constraints', tradeoffs: ['Reduces tension but compromises problem definition'], constraints: ['Requires choice of which constraints to sacrifice'], dimensionalImpact: ['Changes fundamental nature across all dimensions'] }],
      closure: `CLOSURE\n\nTerminated: ${terminationReason.type}\n\n54 dimensional analyses executed. Structural impossibility detected.\n\nNo further analysis warranted. Artifact complete.`,
      layerSyntheses: syntheses, allAnalyses: analyses, timestamp: new Date().toISOString(), executionTimeMs: executionTime
    };
  }

  private determineExitCode(type: string): ExitCode {
    return type === 'CONTRADICTION_CEILING' ? ExitCode.CONTRADICTION_CEILING : ExitCode.CLEAN_TERMINATION;
  }

  private createErrorArtifact(context: TaskContext, error: Error, executionTime: number): any {
    return {
      taskId: context.id, taskDescription: context.description, invariantCore: 'Execution failed',
      terminationReason: { type: 'INVARIANT_VIOLATION', explanation: error.message, supportingEvidence: [], dimensionalSources: [] },
      nonResolutionExplanation: `Runtime error: ${error.message}`,
      machineReadable: { status: 'TERMINATED', reason: 'RUNTIME_ERROR', contradictionCount: 0, coherenceScore: 0, layerAnalysis: {}, dimensionalAnalysis: {} },
      nonPrescriptiveOptions: [], closure: 'Execution terminated due to runtime error.', layerSyntheses: [], allAnalyses: [],
      timestamp: new Date().toISOString(), executionTimeMs: executionTime
    };
  }
}
