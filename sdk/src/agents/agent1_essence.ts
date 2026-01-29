import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent1Essence extends BaseAgent {
  id: AgentId = 'agent-1d';
  dimension = '1D-Essence';
  dimensionalPerspective = 'I distill to irreducible core and identify fundamental invariants';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What is the essential nature of awareness in this problem?',
      'layer-2': 'What is the irreducible economic core?',
      'layer-3': 'What is the essential knowledge structure?',
      'layer-4': 'What is the fundamental governance invariant?',
      'layer-5': 'What is the essential security invariant?',
      'layer-6': 'What is the fundamental termination constraint?'
    };
    const instruction = instructions[layer.id] || 'What is the essential nature of this layer?';
    return `From ESSENCE perspective in ${layer.name}:\n- ${instruction}\n- What cannot be reduced further?\n`;
  }
}
