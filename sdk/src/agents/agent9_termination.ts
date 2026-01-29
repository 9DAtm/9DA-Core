import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent9Termination extends BaseAgent {
  id: AgentId = 'agent-9d';
  dimension = '9D-Termination';
  dimensionalPerspective = 'I identify closure conditions, dissolution mechanisms, and endpoints';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What awareness termination conditions are required or impossible?',
      'layer-2': 'What economic closure mechanisms are mutually exclusive?',
      'layer-3': 'What knowledge dissolution patterns conflict?',
      'layer-4': 'What governance termination conditions cannot be satisfied?',
      'layer-5': 'What security dissolution creates perpetual vulnerability?',
      'layer-6': 'What meta-termination conditions are self-contradictory?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From TERMINATION perspective in ${layer.name}:\n- ${instruction}\n- What endpoints are impossible?\n`;
  }
}
