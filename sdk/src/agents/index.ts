import { Agent1Essence } from './agent1_essence';
import { Agent2Framing } from './agent2_framing';
import { Agent3Phenomenology } from './agent3_phenomenology';
import { Agent4Patterns } from './agent4_patterns';
import { Agent5Trajectory } from './agent5_trajectory';
import { Agent6Reinforcement } from './agent6_reinforcement';
import { Agent7Synthesis } from './agent7_synthesis';
import { Agent8Universal } from './agent8_universal';
import { Agent9Termination } from './agent9_termination';
import { BaseAgent } from './base';
import { LLMProvider } from '../kernel/types';

export function createAgents(llmProvider: LLMProvider): BaseAgent[] {
  return [
    new Agent1Essence(llmProvider),
    new Agent2Framing(llmProvider),
    new Agent3Phenomenology(llmProvider),
    new Agent4Patterns(llmProvider),
    new Agent5Trajectory(llmProvider),
    new Agent6Reinforcement(llmProvider),
    new Agent7Synthesis(llmProvider),
    new Agent8Universal(llmProvider),
    new Agent9Termination(llmProvider)
  ];
}

export { Agent1Essence, Agent2Framing, Agent3Phenomenology, Agent4Patterns, Agent5Trajectory, Agent6Reinforcement, Agent7Synthesis, Agent8Universal, Agent9Termination, BaseAgent };
