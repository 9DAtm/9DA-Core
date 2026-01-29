/**
 * Constraint Transformation Resolver
 * Converts fault clusters into minimal constraint transformations
 */

import { FaultCluster, SolutionPlan, RequiredChange, TransformationType } from './types';

export class ConstraintTransformationResolver {
  
  resolve(clusters: FaultCluster[], originalConstraints: string[]): SolutionPlan[] {
    const solutions: SolutionPlan[] = [];
    const blockingClusters = clusters.filter(c => c.blocking);
    
    if (blockingClusters.length === 0) return [];
    
    // Generate solutions for each blocking cluster
    blockingClusters.forEach((cluster, index) => {
      const transformations = this.generateTransformations(cluster, originalConstraints);
      
      transformations.forEach((transformation, tIndex) => {
        solutions.push({
          solution_id: `SOLUTION_${String.fromCharCode(65 + solutions.length)}`,
          title: transformation.title,
          resolves_clusters: [cluster.cluster_id],
          required_human_changes: transformation.changes,
          expected_result: {
            faults_after: 0,
            approval_possible: true
          }
        });
      });
    });
    
    // Try to generate combined solutions if multiple clusters exist
    if (blockingClusters.length > 1) {
      const combined = this.generateCombinedSolution(blockingClusters, originalConstraints);
      if (combined) solutions.push(combined);
    }
    
    return solutions;
  }
  
  private generateTransformations(cluster: FaultCluster, constraints: string[]): Array<{title: string; changes: RequiredChange[]}> {
    const transformations: Array<{title: string; changes: RequiredChange[]}> = [];
    
    // Analyze root cause to determine transformation type
    const rootCause = cluster.root_cause.toLowerCase();
    
    // Strategy 1: Scope Reduction
    if (rootCause.includes('scale') || rootCause.includes('universal') || rootCause.includes('population')) {
      transformations.push({
        title: 'Reduce Scope to Bounded Context',
        changes: [{
          change_type: 'SCOPE_REDUCTION',
          description: `Limit scope from universal/population-scale to a bounded pilot context (e.g., "single community" or "specific demographic")`
        }]
      });
    }
    
    // Strategy 2: Guarantee Relaxation
    if (rootCause.includes('must') || rootCause.includes('cannot') || rootCause.includes('require')) {
      const affectedConstraints = constraints.filter(c => 
        c.toLowerCase().includes('must') || c.toLowerCase().includes('cannot')
      );
      
      if (affectedConstraints.length > 0) {
        transformations.push({
          title: 'Relax Absolute Guarantees',
          changes: [{
            change_type: 'CONSTRAINT_REWRITE',
            description: `Change "${affectedConstraints[0]}" from absolute requirement to conditional goal (e.g., "Must" → "Should aim to")`,
            specific_constraint: affectedConstraints[0]
          }]
        });
      }
    }
    
    // Strategy 3: External Dependency Declaration
    if (rootCause.includes('capture') || rootCause.includes('authority') || rootCause.includes('institutional')) {
      transformations.push({
        title: 'Externalize Authority Dependencies',
        changes: [{
          change_type: 'EXTERNAL_DEPENDENCY_DECLARATION',
          description: 'Explicitly declare which external authorities/institutions are required and under what constraints they operate'
        }]
      });
    }
    
    // Strategy 4: Temporal Staging
    if (rootCause.includes('simultaneous') || rootCause.includes('concurrent') || rootCause.includes('all at once')) {
      transformations.push({
        title: 'Stage Implementation Over Time',
        changes: [{
          change_type: 'TEMPORAL_STAGING',
          description: 'Break into sequential phases where contradictory constraints apply at different stages'
        }]
      });
    }
    
    // Strategy 5: Role Separation
    if (rootCause.includes('conflict') && rootCause.includes('role')) {
      transformations.push({
        title: 'Separate Conflicting Roles',
        changes: [{
          change_type: 'ROLE_SEPARATION',
          description: 'Assign contradictory responsibilities to distinct entities with clear boundaries'
        }]
      });
    }
    
    // Default: Generic constraint relaxation
    if (transformations.length === 0) {
      transformations.push({
        title: 'Remove Most Restrictive Constraint',
        changes: [{
          change_type: 'CONSTRAINT_REWRITE',
          description: `Identify and relax the constraint causing "${cluster.root_cause}"`
        }]
      });
    }
    
    return transformations;
  }
  
  private generateCombinedSolution(clusters: FaultCluster[], constraints: string[]): SolutionPlan | null {
    // Generate a solution that addresses all clusters simultaneously
    const allChanges: RequiredChange[] = [];
    
    clusters.forEach(cluster => {
      const transformations = this.generateTransformations(cluster, constraints);
      if (transformations.length > 0) {
        allChanges.push(...transformations[0].changes);
      }
    });
    
    if (allChanges.length === 0) return null;
    
    return {
      solution_id: `SOLUTION_COMBINED`,
      title: 'Address All Conflicts Simultaneously',
      resolves_clusters: clusters.map(c => c.cluster_id),
      required_human_changes: allChanges,
      expected_result: {
        faults_after: 0,
        approval_possible: true
      }
    };
  }
}
