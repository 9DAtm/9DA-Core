import { LLMProvider, LLMConfig } from '../kernel/types';

export abstract class BaseLLMProvider implements LLMProvider {
  abstract name: string;
  abstract generate(prompt: string, config?: LLMConfig): Promise<string>;
  protected defaultConfig: LLMConfig = { temperature: 0.7, maxTokens: 2000 };
  protected mergeConfig(config?: LLMConfig): LLMConfig { return { ...this.defaultConfig, ...config }; }
}

export class OpenAIProvider extends BaseLLMProvider {
  name = 'OpenAI';
  private apiKey: string;
  private client: any;

  constructor(apiKey?: string) {
    super();
    this.apiKey = apiKey || process.env.OPENAI_API_KEY || '';
    if (!this.apiKey) throw new Error('OpenAI API key required. Use --live openai and set OPENAI_API_KEY environment variable');
    try {
      const OpenAI = require('openai');
      this.client = new OpenAI({ apiKey: this.apiKey });
    } catch (e) {
      throw new Error('OpenAI package not installed. Run: npm install openai');
    }
  }

  async generate(prompt: string, config?: LLMConfig): Promise<string> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.client.chat.completions.create({
      model: finalConfig.model || 'gpt-4-turbo-preview',
      messages: [{ role: 'user', content: prompt }],
      temperature: finalConfig.temperature,
      max_tokens: finalConfig.maxTokens
    });
    return response.choices[0]?.message?.content || '';
  }
}

export class AnthropicProvider extends BaseLLMProvider {
  name = 'Anthropic';
  private apiKey: string;
  private client: any;

  constructor(apiKey?: string) {
    super();
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || '';
    if (!this.apiKey) throw new Error('Anthropic API key required. Use --live anthropic and set ANTHROPIC_API_KEY environment variable');
    try {
      const Anthropic = require('@anthropic-ai/sdk');
      this.client = new Anthropic({ apiKey: this.apiKey });
    } catch (e) {
      throw new Error('Anthropic package not installed. Run: npm install @anthropic-ai/sdk');
    }
  }

  async generate(prompt: string, config?: LLMConfig): Promise<string> {
    const finalConfig = this.mergeConfig(config);
    const response = await this.client.messages.create({
      model: finalConfig.model || 'claude-3-5-sonnet-20241022',
      max_tokens: finalConfig.maxTokens || 4000,
      temperature: finalConfig.temperature,
      messages: [{ role: 'user', content: prompt }]
    });
    return response.content[0]?.text || '';
  }
}

export class MockProvider extends BaseLLMProvider {
  name = 'Mock';
  
  async generate(prompt: string): Promise<string> {
    const lines = prompt.split('\n');
    const dimension = lines.find(l => l.includes('analyzing from'))?.split(':')[1]?.trim() || 'Unknown';
    const layer = lines.find(l => l.includes('Layer:'))?.split(':')[1]?.trim() || 'Unknown';
    return `ANALYSIS:\nMock analysis for ${dimension} in ${layer}. Structural contradictions detected.\n\nCONTRADICTIONS:\nMock contradiction: Incompatible constraints in ${layer}\n\nCOHERENCE: 0.5`;
  }
}

export class LLMProviderFactory {
  static create(providerName: string, apiKey?: string): LLMProvider {
    switch (providerName.toLowerCase()) {
      case 'openai': return new OpenAIProvider(apiKey);
      case 'anthropic':
      case 'claude': return new AnthropicProvider(apiKey);
      case 'mock':
      case 'test': return new MockProvider();
      default: throw new Error(`Unknown LLM provider: ${providerName}`);
    }
  }
  
  static getDefault(): LLMProvider {
    return new MockProvider();
  }
}
