import { AgentInterface, AgentId, Layer, TaskContext, DimensionalAnalysis, LayerSynthesis, LLMProvider } from '../kernel/types';
import { enforceInvariant, INVARIANTS } from '../kernel/invariants';

export abstract class BaseAgent implements AgentInterface {
  abstract id: AgentId;
  abstract dimension: string;
  abstract dimensionalPerspective: string;
  protected llm: LLMProvider;

  constructor(llm: LLMProvider) {
    this.llm = llm;
  }

  async executeInLayer(layer: Layer, context: TaskContext, priorLayerOutputs: LayerSynthesis[], currentLayerOutputs: DimensionalAnalysis[]): Promise<DimensionalAnalysis> {
    const prompt = this.buildPrompt(layer, context, priorLayerOutputs, currentLayerOutputs);
    const rawAnalysis = await this.llm.generate(prompt, { temperature: 0.7, maxTokens: 2000 });
    const parsed = this.parseAnalysis(rawAnalysis);
    
    enforceInvariant(!this.isPrescriptive(parsed.analysis), INVARIANTS.NO_PRESCRIPTIONS, `Agent ${this.id} produced prescriptive content in ${layer.id}`);
    
    return {
      agentId: this.id,
      layerId: layer.id,
      dimension: `${this.dimension}-${layer.name}`,
      analysis: parsed.analysis,
      contradictions: parsed.contradictions,
      coherenceScore: parsed.coherenceScore,
      timestamp: new Date().toISOString()
    };
  }

  protected buildPrompt(layer: Layer, context: TaskContext, priorLayerOutputs: LayerSynthesis[], currentLayerOutputs: DimensionalAnalysis[]): string {
    let prompt = `You are analyzing from: ${this.dimension}\nFocus: ${this.dimensionalPerspective}\n\n`;
    prompt += `Layer: ${layer.name} - ${layer.description}\n\n`;
    prompt += `Task: ${context.description}\n\nConstraints:\n${context.constraints.map(c => `- ${c}`).join('\n')}\n\n`;
    
    if (priorLayerOutputs.length > 0) {
      prompt += `Prior Layers:\n`;
      priorLayerOutputs.forEach(s => prompt += `${s.layerId}: Coherence ${s.layerCoherence.toFixed(2)}\n`);
      prompt += '\n';
    }
    
    prompt += this.getDimensionalInstructions(layer);
    prompt += `\n\nRULES:\n- Do NOT prescribe solutions\n- ANALYZE from your perspective\n- IDENTIFY contradictions\n\n`;
    prompt += `Output format:\nANALYSIS:\n[Your analysis]\n\nCONTRADICTIONS:\n[List contradictions]\n\nCOHERENCE: [0.0-1.0]\n`;
    
    return prompt;
  }

  protected abstract getDimensionalInstructions(layer: Layer): string;

  protected parseAnalysis(raw: string): { analysis: string; contradictions: string[]; coherenceScore: number } {
    const lines = raw.split('\n');
    let section: 'analysis' | 'contradictions' | 'coherence' = 'analysis';
    let analysis = '';
    const contradictions: string[] = [];
    let coherenceScore = 0.5;
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.toUpperCase().startsWith('ANALYSIS:')) { section = 'analysis'; continue; }
      if (trimmed.toUpperCase().startsWith('CONTRADICTIONS:')) { section = 'contradictions'; continue; }
      if (trimmed.toUpperCase().startsWith('COHERENCE:')) {
        const match = trimmed.match(/(\d+\.?\d*)/);
        if (match) coherenceScore = Math.max(0, Math.min(1, parseFloat(match[1])));
        continue;
      }
      if (section === 'analysis' && trimmed) analysis += line + '\n';
      else if (section === 'contradictions' && trimmed) contradictions.push(trimmed.replace(/^[-*]\s*/, ''));
    }
    
    return { analysis: analysis.trim(), contradictions: contradictions.filter(c => c.length > 0), coherenceScore };
  }

  protected isPrescriptive(text: string): boolean {
    const patterns = [/\bmust\s+implement\b/i, /\bshould\s+adopt\b/i, /\brecommend\s+that\s+you\b/i];
    return patterns.some(p => p.test(text));
  }
}
