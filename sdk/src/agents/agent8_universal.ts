import { BaseAgent } from './base';
import { AgentId, Layer } from '../kernel/types';

export class Agent8Universal extends BaseAgent {
  id: AgentId = 'agent-8d';
  dimension = '8D-Universality';
  dimensionalPerspective = 'I examine scale independence, fractal patterns, and universal constraints';

  protected getDimensionalInstructions(layer: Layer): string {
    const instructions: Record<string, string> = {
      'layer-1': 'What awareness patterns must hold universally but cannot at all scales?',
      'layer-2': 'What economic universals break at required scales?',
      'layer-3': 'What knowledge universals are scale-dependent and incompatible?',
      'layer-4': 'What governance principles cannot scale to required levels?',
      'layer-5': 'What security universals fail across scale transitions?',
      'layer-6': 'What termination universals are scale-incompatible?'
    };
    const instruction = instructions[layer.id] || 'Generic analysis for this layer?';
    return `From UNIVERSALITY perspective in ${layer.name}:\n- ${instruction}\n- What must be universal but cannot be?\n`;
  }
}
