import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent3Phenomenology extends BaseAgent {
  id: AgentId = 'agent-3d';
  dimension = '3D-Structure';
  dimensionalPerspective = 'I examine spatial, relational, and organizational patterns';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What spatial patterns in awareness are required or violated?',
      'layer-2': 'What economic network structures enable or prevent this?',
      'layer-3': 'What knowledge distribution patterns are structurally impossible?',
      'layer-4': 'What organizational hierarchies are required or prohibited?',
      'layer-5': 'What security architectures create structural vulnerabilities?',
      'layer-6': 'What dissolution structures are topologically impossible?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From STRUCTURE perspective in ${layer.name}:\n- ${instruction}\n- What topologies are incompatible?\n`;
  }
}
