/**
 * Fault Clustering Engine
 * Groups related contradictions by root cause
 */

import { DimensionalAnalysis, LayerSynthesis } from '../../kernel/types';
import { FaultCluster } from './types';

export class FaultClusteringEngine {
  
  cluster(analyses: DimensionalAnalysis[], layerSyntheses: LayerSynthesis[]): FaultCluster[] {
    const clusters: FaultCluster[] = [];
    const allContradictions = this.extractAllContradictions(analyses, layerSyntheses);
    
    if (allContradictions.length === 0) return [];
    
    // Group by layer
    const byLayer = this.groupByLayer(allContradictions, layerSyntheses);
    
    byLayer.forEach((layerGroup, layerName) => {
      const rootCause = this.inferRootCause(layerGroup.contradictions);
      
      clusters.push({
        cluster_id: `C${clusters.length + 1}`,
        layer: {
          name: layerName,
          source: '9DA_REFERENCE',
          scope: layerGroup.contradictions.length > 3 ? 'CrossDomain' : 'SingleDomain'
        },
        root_cause: rootCause,
        faults: layerGroup.contradictions,
        blocking: true
      });
    });
    
    return clusters;
  }
  
  private extractAllContradictions(analyses: DimensionalAnalysis[], layerSyntheses: LayerSynthesis[]): string[] {
    const contradictions: string[] = [];
    
    analyses.forEach(a => {
      contradictions.push(...a.contradictions);
    });
    
    layerSyntheses.forEach(s => {
      contradictions.push(...s.crossDimensionalContradictions);
    });
    
    return Array.from(new Set(contradictions));
  }
  
  private groupByLayer(contradictions: string[], layerSyntheses: LayerSynthesis[]): Map<string, {contradictions: string[]}> {
    const grouped = new Map<string, {contradictions: string[]}>();
    
    layerSyntheses.forEach(synthesis => {
      const layerContradictions = synthesis.crossDimensionalContradictions;
      
      if (layerContradictions.length > 0) {
        const layerName = synthesis.layerId.replace('layer-', 'Layer ');
        grouped.set(layerName, { contradictions: layerContradictions });
      }
    });
    
    // If no layer-specific grouping, create single cluster
    if (grouped.size === 0 && contradictions.length > 0) {
      grouped.set('General', { contradictions });
    }
    
    return grouped;
  }
  
  private inferRootCause(contradictions: string[]): string {
    // Analyze contradiction patterns to infer root cause
    const text = contradictions.join(' ').toLowerCase();
    
    if (text.includes('scale') && text.includes('impossible')) {
      return 'Scaling requirements exceed structural capacity';
    }
    
    if (text.includes('economic') && text.includes('viable')) {
      return 'Economic viability contradicts other constraints';
    }
    
    if (text.includes('authority') || text.includes('capture')) {
      return 'Institutional capture prevention conflicts with coordination requirements';
    }
    
    if (text.includes('universal') && text.includes('behavior')) {
      return 'Universal behavior change requirement contradicts non-coercion constraint';
    }
    
    if (text.includes('medicalize') || text.includes('clinical')) {
      return 'Non-medicalization constraint conflicts with health intervention requirements';
    }
    
    if (text.includes('temporal') || text.includes('sequence')) {
      return 'Temporal ordering creates path dependency conflicts';
    }
    
    if (text.includes('simultaneous')) {
      return 'Simultaneous requirements are mutually exclusive';
    }
    
    // Default
    return 'Multiple constraints create irreconcilable tensions';
  }
}
