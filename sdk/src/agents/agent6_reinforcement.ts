import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent6Reinforcement extends BaseAgent {
  id: AgentId = 'agent-6d';
  dimension = '6D-Constraint-Dynamics';
  dimensionalPerspective = 'I explore constraint interactions, feedback loops, and dynamic stability';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What awareness constraints reinforce or undermine each other?',
      'layer-2': 'What economic constraints create reinforcing cycles?',
      'layer-3': 'What knowledge constraints compound or cancel?',
      'layer-4': 'What governance constraints reinforce authoritarian drift?',
      'layer-5': 'What security constraints create escalating vulnerability?',
      'layer-6': 'What termination constraints prevent clean closure?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From CONSTRAINT DYNAMICS perspective in ${layer.name}:\n- ${instruction}\n- What feedback loops are unstable?\n`;
  }
}
