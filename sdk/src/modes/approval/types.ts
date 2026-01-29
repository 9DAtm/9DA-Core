/**
 * 9DA Approval Mode Types
 * Engine B: Iterative improvement toward zero-fault approval
 */

export type ApprovalStatus = 'APPROVED' | 'NOT_APPROVED';
export type EvaluationMode = 'SingleDomain' | 'MultiDomain';

export type TransformationType = 
  | 'SCOPE_REDUCTION'
  | 'CONSTRAINT_REWRITE'
  | 'EXTERNAL_DEPENDENCY_DECLARATION'
  | 'TEMPORAL_STAGING'
  | 'ROLE_SEPARATION';

export interface FaultCluster {
  cluster_id: string;
  layer: {
    name: string;
    source: 'USER_DEFINED' | '9DA_REFERENCE';
    scope: 'SingleDomain' | 'CrossDomain';
  };
  root_cause: string;
  faults: string[];
  blocking: boolean;
}

export interface RequiredChange {
  change_type: TransformationType;
  description: string;
  specific_constraint?: string;
}

export interface SolutionPlan {
  solution_id: string;
  title: string;
  resolves_clusters: string[];
  required_human_changes: RequiredChange[];
  expected_result: {
    faults_after: number;
    approval_possible: boolean;
  };
}

export interface HumanReadableSolution {
  solution_id: string;
  title: string;
  what_to_change: string[];
  why_this_works: string[];
  what_this_enables: string[];
  tradeoffs: string[];
}

export interface ApprovalArtifact {
  approval_status: ApprovalStatus;
  evaluation_mode: EvaluationMode;
  fault_summary?: {
    total_faults: number;
    clusters: FaultCluster[];
  };
  solutions?: {
    machine_readable: SolutionPlan[];
    human_readable: HumanReadableSolution[];
  };
  next_step: string;
  timestamp: string;
}

export interface ApprovalContext {
  taskId: string;
  description: string;
  constraints: string[];
  domain: string;
  iteration: number;
}
