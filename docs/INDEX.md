# INDEX.md

## Purpose

This document provides the authoritative index of all repositories in the 9DA ecosystem, their layer assignments, lifecycle status, and relationships.

If a repository is not listed here, it is not part of the 9DA ecosystem.

---

## Repository Classification

All repositories are classified by:
- **Layer:** Conceptual | Logical | Physical | Meta
- **Status:** Stable | Evolving | Planned | Deprecated
- **Authority:** Authoritative | Reference | Supporting

---

## Core Repositories

### 9DA-Core

**Layer:** Conceptual  
**Status:** Stable  
**Authority:** Authoritative  
**URL:** https://github.com/9DAtm/9DA-Core

**Purpose:**  
Governance protocol root. Defines architecture invariants, ethical constraints, dependency rules, and certification mechanics.

**Contains:**

**Root Files:**
- README.md
- LICENSE
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- .gitignore

**Folders:**

`/adr/`
- ADR-0001-GOVERNANCE-LOCK.md
- ADR-0001-example.md
- ADR-TEMPLATE.md

`/certification/`
- BADGE-SPEC.md
- CERTIFICATION-WORKFLOW.md
- REVOCATION-REGISTRY/
  - revocations.json

`/docs/`
- ARCHITECTURE.md
- DEPENDENCY-MATRIX.md
- ESCALATION.md
- ETHICS.md
- GOVERNANCE.md
- INDEX.md
- INTEGRATION-TESTS.md
- MANIFESTO.md
- METRICS.md
- NON-GOALS.md
- RELEASE-PROCESS.md
- START-HERE.md

`/examples/`
- certification-signature.example.json
- compliance-report.example.json

`/schemas/`
- adr.schema.json
- architecture-invariants.schema.json
- compliance-report.schema.json
- dependency-matrix.schema.json
- ethics-capability.schema.json
- release-readiness.schema.json

**Dependencies:**  
None (dependency-silent)

**Dependents:**  
All other 9DA repositories

**Version:** 1.0.0-governance  
**Last Updated:** 2026-01-24

---

### 9DA-Specifications

**Layer:** Conceptual  
**Status:** Planned  
**Authority:** Authoritative  
**URL:** https://github.com/9DAtm/9DA-Specifications

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Formal specifications and theory. Defines what the system should do at a conceptual level.

**Contains:**
- Formal specifications
- Theoretical models
- Mathematical definitions
- Conceptual invariants

**Dependencies:**
- 9DA-Core (documentation only)

**Dependents:**
- 9DA-Design-Documents
- 9DA-SDK

**Version:** Not yet created  
**Planned:** Q2 2026

---

### 9DA-Design-Documents

**Layer:** Logical  
**Status:** Planned  
**Authority:** Authoritative  
**URL:** https://github.com/9DAtm/9DA-Design-Documents

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Translation layer between theory and implementation. Design decisions, patterns, and logical architecture.

**Contains:**
- Design documents
- Architecture diagrams
- Pattern libraries
- Translation guides

**Dependencies:**
- 9DA-Core (documentation)
- 9DA-Specifications (documentation)

**Dependents:**
- 9DA-SDK
- 9DA-Reference-Implementation

**Version:** Not yet created  
**Planned:** Q2 2026

---

### 9DA-SDK

**Layer:** Physical  
**Status:** Planned  
**Authority:** Authoritative  
**URL:** https://github.com/9DAtm/9DA-SDK

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Software Development Kit. Executable libraries for building 9DA-compliant systems.

**Contains:**
- Validation libraries
- Schema validators
- ADR parsers
- Compliance generators
- Certification tools

**Dependencies:**
- 9DA-Core (documentation)
- 9DA-Specifications (conditional, ADR-gated)
- 9DA-Design-Documents (documentation)

**Dependents:**
- 9DA-Reference-Implementation
- 9DA-Tools
- External adopters

**Version:** Not yet created  
**Planned:** Q3 2026

---

### 9DA-Reference-Implementation

**Layer:** Physical  
**Status:** Planned  
**Authority:** Reference  
**URL:** https://github.com/9DAtm/9DA-Reference-Implementation

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Demonstrative implementation showing 9DA compliance in practice.

**Contains:**
- Working example system
- Compliance demonstrations
- Integration examples
- Test suites

**Dependencies:**
- 9DA-Core (documentation)
- 9DA-Specifications (conditional)
- 9DA-Design-Documents (documentation)
- 9DA-SDK (runtime)

**Dependents:**
- None (reference only)

**Version:** Not yet created  
**Planned:** Q4 2026

---

### 9DA-Tools

**Layer:** Physical  
**Status:** Planned  
**Authority:** Supporting  
**URL:** https://github.com/9DAtm/9DA-Tools

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Supporting tooling for verification, validation, and compliance checking.

**Contains:**
- 9da-verify CLI
- CI/CD integrations
- GitHub Actions
- Validation scripts

**Dependencies:**
- 9DA-Core (documentation)
- 9DA-SDK (conditional, ADR-gated)

**Dependents:**
- External adopters
- CI/CD pipelines

**Version:** Not yet created  
**Planned:** Q3 2026

---

### 9DA-Examples

**Layer:** Physical  
**Status:** Planned  
**Authority:** Reference  
**URL:** https://github.com/9DAtm/9DA-Examples

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Non-authoritative examples and tutorials.

**Contains:**
- Tutorial projects
- Example integrations
- Adoption guides
- Best practices

**Dependencies:**
- 9DA-Core (documentation)
- 9DA-SDK (conditional)
- Any other repository (conditional)

**Dependents:**
- None (examples are non-authoritative)

**Version:** Not yet created  
**Planned:** Q4 2026

---

## Meta Repositories

### .github

**Layer:** Meta  
**Status:** Planned  
**Authority:** Supporting  
**URL:** https://github.com/9DAtm/.github

⚠️ **REPOSITORY DOES NOT EXIST YET**

**Purpose:**  
Organization-wide GitHub configuration, templates, and automation.

**Contains:**
- Organization README
- GitHub Actions workflows
- Issue templates
- PR templates
- Community health files

**Dependencies:**
- 9DA-Core (documentation only)

**Dependents:**
- All repositories (via GitHub features)

**Version:** Not yet created  
**Planned:** Q1 2026

---

## Repository Relationships

### Dependency Flow

```
9DA-Core (Conceptual, dependency-silent) ✅
    ↓
9DA-Specifications (Conceptual) ⚠️
    ↓
9DA-Design-Documents (Logical) ⚠️
    ↓
9DA-SDK (Physical) ⚠️
    ↓
9DA-Reference-Implementation (Physical) ⚠️
9DA-Tools (Physical) ⚠️
9DA-Examples (Physical) ⚠️
```

**Legend:**
- ✅ = Repository exists
- ⚠️ = Planned but not yet created

### Documentation References

All repositories reference `9DA-Core` for:
- Governance rules
- Ethical constraints
- Architecture invariants
- ADR process
- Certification requirements

### Conditional Dependencies

Conditional dependencies (marked ⚠️ in docs/DEPENDENCY-MATRIX.md) require:
- Explicit ADR
- Justification of boundary preservation
- CI validation

---

## Lifecycle Status Definitions

### Stable
- Production-ready
- Breaking changes require major version
- Governance locked (ADR required)
- Actively maintained

### Evolving
- Under active development
- Structure may change
- Not yet governance-locked
- Breaking changes allowed with notice

### Planned
- Not yet created
- Design in progress
- Repository placeholder may exist
- Creation date estimated

### Deprecated
- No longer maintained
- Superseded by another repository
- Kept for historical reference
- No new development

---

## Repository Creation Process

New repositories require:

1. **ADR Proposal**
   - Justification of need
   - Layer assignment
   - Dependency declaration
   - Ethics review (if applicable)

2. **Index Update**
   - Add to this document
   - Update docs/DEPENDENCY-MATRIX.md
   - Update ecosystem diagram (if exists)

3. **Initial Structure**
   - README.md with governance reference
   - LICENSE (matching 9DA-Core: Apache-2.0)
   - CONTRIBUTING.md
   - Dependency declaration

4. **Certification**
   - Initial compliance check
   - Schema validation
   - Integration test inclusion

---

## Repository Removal Process

Repositories may be deprecated if:
- Superseded by better implementation
- No longer aligned with governance
- Maintenance burden exceeds value
- Ethics violation cannot be remediated

**Process:**
1. ADR proposing deprecation
2. Migration guide provided
3. Status changed to "Deprecated"
4. Archive on GitHub
5. Update this index

**Critical:**  
Repositories are never deleted. They are archived for audit trail.

---

## Version Alignment

Synchronized releases require version alignment:

| Repository | v1.0 | v1.1 | v2.0 |
|-----------|------|------|------|
| 9DA-Core | ✓ | - | - |
| 9DA-Specifications | Planned | - | - |
| 9DA-Design-Documents | Planned | - | - |
| 9DA-SDK | Planned | - | - |
| 9DA-Reference-Implementation | Planned | - | - |
| 9DA-Tools | Planned | - | - |
| 9DA-Examples | Planned | - | - |

**Legend:**
- ✓ = Released
- Planned = Not yet created
- Version number = Released at that version

---

## External Dependencies

9DA ecosystem repositories may depend on:
- Standard libraries (e.g., Node.js core, Python stdlib)
- JSON Schema validators (e.g., ajv)
- Cryptographic libraries (for signatures)
- Documentation tools (e.g., Markdown renderers)

**All external dependencies must be:**
- Declared explicitly
- Justified via ADR if conditional
- Open source and auditable
- Stable and maintained

---

## Compliance Status

| Repository | ADR Compliance | Schema Validation | Ethics Review | Certified |
|-----------|---------------|-------------------|---------------|-----------|
| 9DA-Core | ✓ | ✓ | ✓ | Self-governing |
| 9DA-Specifications | N/A | N/A | N/A | Planned |
| 9DA-Design-Documents | N/A | N/A | N/A | Planned |
| 9DA-SDK | N/A | N/A | N/A | Planned |
| 9DA-Reference-Implementation | N/A | N/A | N/A | Planned |
| 9DA-Tools | N/A | N/A | N/A | Planned |
| 9DA-Examples | N/A | N/A | N/A | Planned |

---

## Contact and Maintenance

**Ecosystem Owner:** @9DAtm  
**Repository:** https://github.com/9DAtm/9DA-Core  
**Issues:** https://github.com/9DAtm/9DA-Core/issues  
**Discussions:** https://github.com/9DAtm/9DA-Core/discussions  
**Email:** zdenkacucin@gmail.com

---

## Final Note

This index is the authoritative source of truth for the 9DA ecosystem structure.

If a repository claims to be "9DA" but is not listed here, it is not part of the ecosystem and not governed by these rules.

All repository additions, changes, or removals require updating this document via ADR.

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-24  
**Status:** FINAL (ADR required for changes)  
**Schema Compliance:** N/A (normative governance text)
