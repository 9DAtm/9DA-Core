export const INVARIANTS = {
  NO_PRESCRIPTIONS: 'Agents must not issue commands, prescriptions, or authoritative directives',
  NO_OVERRIDE: 'Agent outputs are immutable once produced; no agent has authority over others',
  PRESERVE_CONTRADICTIONS: 'All contradictions detected must be preserved in final output',
  MANDATORY_TERMINATION: 'Every execution must terminate with a TerminationArtifact',
  NON_SOLUTION_VALID: 'Detection of structural impossibility is a valid and expected outcome',
  NO_CONTINUATION: 'Once terminated, no further analysis or recommendations are permitted',
  DETERMINISTIC_COHERENCE: 'Coherence calculations must be reproducible',
  LAYER_ORDERING: 'Layers must execute in sequence: 1→2→3→4→5→6',
  DIMENSIONAL_INTEGRITY: 'Each agent maintains its dimensional perspective across all layers',
  SYNTHESIS_NON_PRESCRIPTIVE: 'Layer synthesis identifies patterns but cannot recommend actions'
} as const;

export class InvariantViolation extends Error {
  constructor(invariant: string, details: string) {
    super(`INVARIANT VIOLATION: ${invariant}\n${details}`);
    this.name = 'InvariantViolation';
  }
}

export function enforceInvariant(condition: boolean, invariant: string, details: string): void {
  if (!condition) {
    throw new InvariantViolation(invariant, details);
  }
}

export const CONTRADICTION_CEILING = 50;
export const COHERENCE_FLOOR = 0.1;
