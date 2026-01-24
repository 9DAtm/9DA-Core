\# ADR-TEMPLATE.md



\*\*ADR ID:\*\* ADR-XXXX  

\*\*Title:\*\* Concise statement of the architectural decision  

\*\*Status:\*\* Proposed | Accepted | Superseded | Deprecated  

\*\*Date:\*\* YYYY-MM-DD  

\*\*Authors:\*\* @github-handles  

\*\*Related RFCs:\*\* RFC-XXXX (if applicable)  

\*\*Supersedes:\*\* ADR-XXXX (optional, omit if none)  

\*\*Impacts Repositories:\*\* Explicit list required  



---



\## Decision Classification



\- \*\*Change Type:\*\* Conceptual | Logical | Physical  

\- \*\*Scope:\*\* Local | Cross-Repository | Ecosystem-Wide  

\- \*\*Breaking Change:\*\* Yes | No  



If \*\*Breaking Change = Yes\*\*, a migration plan is mandatory.



---



\## Context and Problem Statement



Describe the structural problem being addressed.



Constraints:

\- Must reference existing architecture, not hypothetical futures.

\- Must identify the failure mode if no decision is taken.

\- Must cite affected invariants from `ARCHITECTURE.md`.



---



\## Forces and Constraints



List the non-negotiable forces influencing this decision:



\- Architectural invariants that must be preserved

\- Ethical constraints from `ETHICS.md`

\- Dependency direction constraints

\- Performance, scalability, or auditability limits



Any force not listed here is assumed irrelevant.



---



\## Options Considered



\### Option A



\- Description

\- Advantages

\- Structural costs

\- Failure modes

\- Reason for rejection or acceptance



\### Option B



\- Description

\- Advantages

\- Structural costs

\- Failure modes

\- Reason for rejection or acceptance



At least two options are required. "Do nothing" counts as an option only if explicitly analyzed.



---



\## Decision



State the selected option clearly and unambiguously.



This section must:

\- Declare what changes and what remains invariant

\- Identify which layer(s) are affected

\- Declare whether this decision is reversible



---



\## Consequences



\### Positive Consequences



\- Explicit benefits with scope and limits



\### Negative Consequences



\- Known trade-offs

\- New constraints introduced

\- Technical debt incurred (if any)



Unknown consequences must be labeled explicitly as such.



---



\## Cross-Repository Impact Assessment



For each impacted repository:



\- \*\*Repository Name\*\*

&nbsp; - Nature of impact

&nbsp; - Required changes

&nbsp; - Version implications

&nbsp; - Required coordination actions



If a repository is impacted but not listed, this ADR is invalid.



---



\## Dependency and Compatibility Analysis



\- New dependencies introduced: Yes | No  

\- Dependencies removed: Yes | No  

\- Dependency direction remains compliant with `DEPENDENCY-MATRIX.md`: Yes | No  



If \*\*No\*\*, this ADR must not be accepted.



---



\## Migration Plan (Required for Breaking Changes)



\- Affected versions

\- Migration steps

\- Backward compatibility window

\- Rollback strategy



Link to `MIGRATION.md` if applicable.



---



\## Validation Plan



Define how this decision will be validated:



\- Tests to be added or modified

\- Integration tests affected

\- Metrics to monitor post-merge

\- Failure conditions that trigger rollback



Validation must be automatable where possible.



---



\## Ethics Review



\- Does this decision introduce new ethical risk vectors? Yes | No  

\- Does it expand system capability into restricted domains? Yes | No  



If \*\*Yes\*\* to either, explain mitigation or why the decision is invalid.



---



\## Escalation and Approval



\- Required reviewers

\- Community review period (start/end)

\- Final decision authority



This ADR is not valid until formally accepted and merged.



---



\## Audit Trail



\- Link to discussion threads

\- CI runs validating this ADR

\- Acceptance commit hash



---



\## Final Constraint



If any section above is incomplete, ambiguous, or unverifiable, this ADR must be rejected automatically.

