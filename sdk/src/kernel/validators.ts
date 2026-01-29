import { TaskContext, TerminationArtifact } from './types';

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateTaskContext(task: TaskContext): void {
  if (!task.id || task.id.trim().length === 0) throw new ValidationError('Task ID is required');
  if (!task.description || task.description.trim().length === 0) throw new ValidationError('Task description is required');
  if (!Array.isArray(task.constraints)) throw new ValidationError('Task constraints must be an array');
}

export function validateTerminationArtifact(artifact: TerminationArtifact): boolean {
  if (!artifact.invariantCore || !artifact.terminationReason || !artifact.machineReadable) return false;
  if (artifact.machineReadable.status !== 'TERMINATED') return false;
  if (!Array.isArray(artifact.nonPrescriptiveOptions)) return false;
  for (const option of artifact.nonPrescriptiveOptions) {
    if (isPrescriptive(option.option)) return false;
  }
  if (!artifact.closure || indicatesContinuation(artifact.closure)) return false;
  return true;
}

function isPrescriptive(text: string): boolean {
  const patterns = [/\bmust\s+implement\b/i, /\bshould\s+adopt\b/i, /\brecommend\s+that\s+you\b/i];
  return patterns.some(p => p.test(text));
}

function indicatesContinuation(text: string): boolean {
  const patterns = [/\bnext\s+steps?\b/i, /\bfurther\s+analysis\b/i, /\bto\s+be\s+continued\b/i];
  return patterns.some(p => p.test(text));
}
