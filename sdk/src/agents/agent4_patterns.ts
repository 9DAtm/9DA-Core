import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent4Patterns extends BaseAgent {
  id: AgentId = 'agent-4d';
  dimension = '4D-Temporality';
  dimensionalPerspective = 'I track evolution, path dependencies, and temporal constraints';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What temporal evolution of awareness is required or impossible?',
      'layer-2': 'What economic path dependencies create temporal locks?',
      'layer-3': 'What knowledge evolution timelines are incompatible?',
      'layer-4': 'What governance transitions are temporally impossible?',
      'layer-5': 'What security evolution creates irreversible vulnerabilities?',
      'layer-6': 'What termination timelines are mutually exclusive?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From TEMPORALITY perspective in ${layer.name}:\n- ${instruction}\n- What sequence orderings conflict?\n`;
  }
}
