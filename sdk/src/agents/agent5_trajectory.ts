import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent5Trajectory extends BaseAgent {
  id: AgentId = 'agent-5d';
  dimension = '5D-Probability';
  dimensionalPerspective = 'I assess likelihood, risk, and uncertainty distributions';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What probabilistic awareness patterns make this effectively impossible?',
      'layer-2': 'What economic risk distributions are incompatible with constraints?',
      'layer-3': 'What knowledge uncertainty makes this probabilistically infeasible?',
      'layer-4': 'What governance failure probabilities violate requirements?',
      'layer-5': 'What security threat probabilities cannot be bounded?',
      'layer-6': 'What termination probabilities create impossible conditions?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From PROBABILITY perspective in ${layer.name}:\n- ${instruction}\n- What likelihood constraints conflict?\n`;
  }
}
