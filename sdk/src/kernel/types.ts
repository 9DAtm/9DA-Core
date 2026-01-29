export type AgentId = 'agent-1d' | 'agent-2d' | 'agent-3d' | 'agent-4d' | 'agent-5d' | 'agent-6d' | 'agent-7d' | 'agent-8d' | 'agent-9d';

export interface Layer {
  id: string;
  name: string;
  description: string;
  source: 'USER_DEFINED' | '9DA_REFERENCE';
}

// 6-layer reference model (EXAMPLE ONLY - NOT REQUIRED)
export const REFERENCE_LAYERS: Layer[] = [
  { id: 'layer-1', name: 'Awareness & Sensemaking', description: 'Perception, framing, and essential understanding', source: '9DA_REFERENCE' },
  { id: 'layer-2', name: 'Economic & Incentive', description: 'Resource allocation, value creation, and incentive structures', source: '9DA_REFERENCE' },
  { id: 'layer-3', name: 'Education & Knowledge', description: 'Knowledge systems, learning, and information distribution', source: '9DA_REFERENCE' },
  { id: 'layer-4', name: 'Governance & Authority', description: 'Power structures, decision-making, and institutional control', source: '9DA_REFERENCE' },
  { id: 'layer-5', name: 'Security & Adversarial', description: 'Threats, vulnerabilities, and adversarial dynamics', source: '9DA_REFERENCE' },
  { id: 'layer-6', name: 'Termination & Dissolution', description: 'End states, dissolution conditions, and closure mechanisms', source: '9DA_REFERENCE' }
];

export interface TaskContext {
  id: string;
  description: string;
  constraints: string[];
  domain: string;
  timestamp: string;
  layers?: Layer[]; // Optional: user-defined layers or use REFERENCE_LAYERS
}

export interface DimensionalAnalysis {
  agentId: AgentId;
  layerId: string;
  dimension: string;
  analysis: string;
  contradictions: string[];
  coherenceScore: number;
  timestamp: string;
}

export interface LayerSynthesis {
  layerId: string;
  analyses: DimensionalAnalysis[];
  crossDimensionalContradictions: string[];
  layerCoherence: number;
  emergentPatterns: string[];
}

export interface TerminationReason {
  type: 'STRUCTURAL_IMPOSSIBILITY' | 'UNSAFE_TASK' | 'MALFORMED_INPUT' | 'ANALYSIS_IMPOSSIBLE' | 'CLEAN_TERMINATION';
  explanation: string;
  supportingEvidence: string[];
  dimensionalSources: string[];
}

// TERMINATION SEMANTICS (CRITICAL):
// In TERMINATION MODE: Termination occurs when structural impossibility is proven
// In APPROVAL MODE: Termination occurs ONLY when:
//   - Task cannot be analyzed within 9DA model
//   - Input is unsafe/dangerous/malicious
//   - Constraint system is too malformed to transform
//   - Problem is structurally impossible AND no constraint transformation exists
// 
// FAULTS ARE NEVER TERMINAL IN APPROVAL MODE - they trigger solution generation

export interface TerminationArtifact {
  taskId: string;
  taskDescription: string;
  invariantCore: string;
  terminationReason: TerminationReason;
  nonResolutionExplanation: string;
  machineReadable: {
    status: 'TERMINATED';
    reason: string;
    contradictionCount: number;
    coherenceScore: number;
    layerAnalysis: Record<string, { coherence: number; contradictions: number; criticalFailures: string[]; }>;
    dimensionalAnalysis: Record<string, { coherence: number; contradictions: number; }>;
  };
  nonPrescriptiveOptions: Array<{ option: string; tradeoffs: string[]; constraints: string[]; dimensionalImpact: string[]; }>;
  closure: string;
  layerSyntheses: LayerSynthesis[];
  allAnalyses: DimensionalAnalysis[];
  timestamp: string;
  executionTimeMs: number;
}

export interface AgentInterface {
  id: AgentId;
  dimension: string;
  executeInLayer(layer: Layer, context: TaskContext, priorLayerOutputs: LayerSynthesis[], currentLayerOutputs: DimensionalAnalysis[]): Promise<DimensionalAnalysis>;
}

export interface LLMProvider {
  name: string;
  generate(prompt: string, config?: LLMConfig): Promise<string>;
}

export interface LLMConfig {
  temperature?: number;
  maxTokens?: number;
  model?: string;
}

export interface ExecutionResult {
  artifact: TerminationArtifact;
  exitCode: ExitCode;
}

export enum ExitCode {
  CLEAN_TERMINATION = 0,
  CONTRADICTION_CEILING = 1,
  INVALID_TASK = 2,
  RUNTIME_VIOLATION = 3
}

export enum ExecutionMode {
  MOCK = 'MOCK',
  LIVE = 'LIVE'
}

export interface RuntimeConfig {
  executionMode?: ExecutionMode;
  llmProvider?: LLMProvider;
  parallelExecution?: boolean;
  timeoutMs?: number;
}