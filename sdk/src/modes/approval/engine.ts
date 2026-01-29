/**
 * Approval Decision Engine
 * Determines approval status and generates artifacts
 */

import { ApprovalArtifact, ApprovalContext, FaultCluster, SolutionPlan, HumanReadableSolution } from './types';
import { FaultClusteringEngine } from './clustering';
import { ConstraintTransformationResolver } from './resolver';
import { DimensionalAnalysis, LayerSynthesis } from '../../kernel/types';

export class ApprovalEngine {
  private clusteringEngine: FaultClusteringEngine;
  private resolver: ConstraintTransformationResolver;
  
  constructor() {
    this.clusteringEngine = new FaultClusteringEngine();
    this.resolver = new ConstraintTransformationResolver();
  }
  
  async evaluate(
    context: ApprovalContext,
    analyses: DimensionalAnalysis[],
    layerSyntheses: LayerSynthesis[]
  ): Promise<ApprovalArtifact> {
    
    // Step 1: Cluster faults
    const clusters = this.clusteringEngine.cluster(analyses, layerSyntheses);
    const totalFaults = clusters.reduce((sum, c) => sum + c.faults.length, 0);
    
    // Step 2: Check approval criteria
    const isApproved = this.checkApproval(totalFaults, clusters);
    
    if (isApproved) {
      return this.generateApprovedArtifact(context);
    }
    
    // Step 3: Generate solutions
    // CRITICAL: In approval mode, faults NEVER cause termination
    // They ALWAYS trigger solution generation
    const machineSolutions = this.resolver.resolve(clusters, context.constraints);
    const humanSolutions = this.generateHumanReadable(machineSolutions, clusters);
    
    // GUARANTEE: Every NOT_APPROVED result includes constructive solutions
    if (machineSolutions.length === 0) {
      // Fallback: generate generic constraint relaxation if resolver produces nothing
      machineSolutions.push({
        solution_id: 'SOLUTION_FALLBACK',
        title: 'Constraint Relaxation Required',
        resolves_clusters: clusters.map(c => c.cluster_id),
        required_human_changes: [{
          change_type: 'CONSTRAINT_REWRITE',
          description: 'Review and relax the most restrictive constraints causing contradictions'
        }],
        expected_result: { faults_after: 0, approval_possible: true }
      });
      humanSolutions.push({
        solution_id: 'SOLUTION_FALLBACK',
        title: 'Constraint Relaxation Required',
        what_to_change: ['Review constraint set and identify most restrictive requirements'],
        why_this_works: ['Reduces tension between contradictory constraints'],
        what_this_enables: ['Path to zero-fault approval'],
        tradeoffs: ['Some original requirements may need to be conditional rather than absolute']
      });
    }
    
    return this.generateNotApprovedArtifact(context, clusters, totalFaults, machineSolutions, humanSolutions);
  }
  
  private checkApproval(faultCount: number, clusters: FaultCluster[]): boolean {
    // APPROVAL RULE: Zero faults mandatory
    if (faultCount !== 0) return false;
    
    // Check no blocking clusters
    if (clusters.some(c => c.blocking)) return false;
    
    return true;
  }
  
  private generateApprovedArtifact(context: ApprovalContext): ApprovalArtifact {
    return {
      approval_status: 'APPROVED',
      evaluation_mode: 'SingleDomain',
      next_step: 'Proposal approved. Ready for implementation.',
      timestamp: new Date().toISOString()
    };
  }
  
  private generateNotApprovedArtifact(
    context: ApprovalContext,
    clusters: FaultCluster[],
    totalFaults: number,
    machineSolutions: SolutionPlan[],
    humanSolutions: HumanReadableSolution[]
  ): ApprovalArtifact {
    
    return {
      approval_status: 'NOT_APPROVED',
      evaluation_mode: clusters.length > 1 ? 'MultiDomain' : 'SingleDomain',
      fault_summary: {
        total_faults: totalFaults,
        clusters: clusters
      },
      solutions: {
        machine_readable: machineSolutions,
        human_readable: humanSolutions
      },
      next_step: 'Human applies one solution and re-runs for approval',
      timestamp: new Date().toISOString()
    };
  }
  
  private generateHumanReadable(solutions: SolutionPlan[], clusters: FaultCluster[]): HumanReadableSolution[] {
    return solutions.map(solution => {
      const relevantClusters = clusters.filter(c => solution.resolves_clusters.includes(c.cluster_id));
      
      return {
        solution_id: solution.solution_id,
        title: solution.title,
        what_to_change: solution.required_human_changes.map(c => c.description),
        why_this_works: relevantClusters.map(c => `Removes: ${c.root_cause}`),
        what_this_enables: ['Zero-fault approval becomes possible', 'Implementation can proceed'],
        tradeoffs: this.inferTradeoffs(solution)
      };
    });
  }
  
  private inferTradeoffs(solution: SolutionPlan): string[] {
    const tradeoffs: string[] = [];
    
    solution.required_human_changes.forEach(change => {
      switch (change.change_type) {
        case 'SCOPE_REDUCTION':
          tradeoffs.push('Reduced universality - does not apply to all contexts');
          break;
        case 'CONSTRAINT_REWRITE':
          tradeoffs.push('Weakened guarantee - conditional rather than absolute');
          break;
        case 'EXTERNAL_DEPENDENCY_DECLARATION':
          tradeoffs.push('External dependency introduced - requires coordination');
          break;
        case 'TEMPORAL_STAGING':
          tradeoffs.push('Delayed full benefit - phased implementation required');
          break;
        case 'ROLE_SEPARATION':
          tradeoffs.push('Increased coordination complexity - multiple actors required');
          break;
      }
    });
    
    return tradeoffs;
  }
}
