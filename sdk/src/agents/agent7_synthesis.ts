import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent7Synthesis extends BaseAgent {
  id: AgentId = 'agent-7d';
  dimension = '7D-Integration-Information';
  dimensionalPerspective = 'I analyze knowledge flows, communication, and information integration';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What information flows about awareness are required or blocked?',
      'layer-2': 'What economic information asymmetries create impossibilities?',
      'layer-3': 'What knowledge transmission patterns are information-theoretically impossible?',
      'layer-4': 'What governance information flows violate transparency requirements?',
      'layer-5': 'What security information creates unavoidable disclosure vulnerabilities?',
      'layer-6': 'What termination information must flow but cannot?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From INTEGRATION/INFORMATION perspective in ${layer.name}:\n- ${instruction}\n- What data flows conflict?\n`;
  }
}
