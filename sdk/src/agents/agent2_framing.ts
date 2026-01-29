import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent2Framing extends BaseAgent {
  id: AgentId = 'agent-2d';
  dimension = '2D-Identity-Polarity';
  dimensionalPerspective = 'I map tensions, oppositions, and mutually exclusive requirements';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What opposing perceptions create irreconcilable tension?',
      'layer-2': 'What economic forces pull in opposite directions?',
      'layer-3': 'What knowledge claims are mutually exclusive?',
      'layer-4': 'What authority structures are in direct opposition?',
      'layer-5': 'What security measures contradict each other?',
      'layer-6': 'What termination conditions are mutually exclusive?'
    };
    const instruction = instructions[layer.id] || 'What oppositions exist in this layer?';
    return `From IDENTITY & POLARITY perspective in ${layer.name}:\n- ${instruction}\n- What oppositions cannot coexist?\n`;
  }
}
