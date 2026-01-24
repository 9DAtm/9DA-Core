\# DEPENDENCY-MATRIX.md



\## Purpose



This document defines \*\*allowed, forbidden, and enforced dependency directions\*\* across the 9DA ecosystem.



It exists to make architectural entanglement, circular dependencies, and layer violations \*\*structurally impossible\*\*.



Any dependency not explicitly permitted here is forbidden by default.



---



\## Scope and Authority



\- \*\*Applies To:\*\* All repositories in the 9DA organization

\- \*\*Enforcement Level:\*\* CI-enforced, ecosystem-wide

\- \*\*Override Priority:\*\* Supersedes local build or tooling configurations



No repository may introduce, infer, or rely on undeclared dependencies.



---



\## Dependency Model



9DA enforces a \*\*one-way dependency flow\*\* aligned with the tri-layer architecture:



\*\*Conceptual → Logical → Physical\*\*



Reverse dependencies are prohibited.



---



\## Repository Classification



| Repository Name | Layer | Dependency Role |

|-----------------|-------|-----------------|

| 9DA-Core | Conceptual | Root authority |

| 9DA-Specifications | Conceptual | Theory source |

| 9DA-Design-Documents | Logical | Translation layer |

| 9DA-SDK | Physical | Executable library |

| 9DA-Reference-Implementation | Physical | Demonstrative |

| 9DA-Tools | Physical | Supporting tooling |

| 9DA-Examples | Physical | Non-authoritative |

| .github | Meta | Enforcement only |



---



\## Allowed Dependency Matrix



Legend:

\- ✅ Allowed

\- ❌ Forbidden

\- ⚠️ Conditional (explicit declaration + ADR required)



| FROM \\ TO | Core | Specs | Design Docs | SDK | Ref Impl | Tools | Examples |

|----------|------|-------|-------------|-----|----------|-------|----------|

| \*\*9DA-Core\*\* | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

| \*\*9DA-Specifications\*\* | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

| \*\*9DA-Design-Documents\*\* | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

| \*\*9DA-SDK\*\* | ✅ | ⚠️ | ✅ | ❌ | ❌ | ⚠️ | ❌ |

| \*\*9DA-Reference-Implementation\*\* | ✅ | ⚠️ | ✅ | ✅ | ❌ | ⚠️ | ❌ |

| \*\*9DA-Tools\*\* | ✅ | ⚠️ | ✅ | ⚠️ | ❌ | ❌ | ❌ |

| \*\*9DA-Examples\*\* | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ |



---



\## Dependency Rules (Non-Negotiable)



\### 1. No Upward Execution Dependency



\- Conceptual and Logical repositories must never depend on executable code.

\- Any import, build, or runtime dependency from Conceptual or Logical layers to Physical layers is invalid.



---



\### 2. Core Is Dependency-Silent



\- `9DA-Core` must have \*\*zero inbound or outbound code dependencies\*\*.

\- It may only be referenced via documentation links.



---



\### 3. Conditional Dependencies Require Explicit Justification



Any ⚠️ conditional dependency requires:

\- Explicit declaration in README

\- ADR approval

\- Justification of why abstraction boundary is preserved

\- CI validation



Absent any of the above, the dependency is forbidden.



---



\### 4. No Circular Dependencies



\- Cycles across repositories are prohibited.

\- CI must fail on any detected cycle, direct or transitive.



---



\### 5. Examples Are Non-Authoritative



\- `9DA-Examples` may depend on others.

\- No repository may depend on `9DA-Examples`.



---



\## Declaration Requirements



Each repository README must include:



\- Declared dependencies (explicit list)

\- Declared non-dependencies (explicit exclusions)

\- Layer position



Undeclared dependencies are treated as violations.



---



\## CI Enforcement Expectations



CI must:



\- Parse imports/build files

\- Compare against this matrix

\- Fail on:

&nbsp; - Undeclared dependencies

&nbsp; - Forbidden directions

&nbsp; - Conditional dependencies without ADR

&nbsp; - Cyclic dependency graphs



Manual review is not sufficient.



---



\## Violation Handling



Dependency violations trigger:



1\. Immediate CI failure

2\. Mandatory architectural review

3\. ADR requirement if remediation is proposed

4\. Rejection if violation cannot be structurally resolved



Repeated violations may escalate to repository invalidation.



---



\## Final Constraint



If a dependency cannot be justified within this matrix, the architecture is wrong.



The matrix does not adapt to the code.



The code adapts to the matrix.

