# 9DA Core

**Global Capability–Authority Separation SDK**

---

## Status

- **Specification:** COMPLETE
- **Version:** 1.0.0
- **License:** EVALUATION ONLY (Commercial licensing available)
- **Implementation Status:** NONE (Specification Only)

---

## What Is 9DA?

9DA Core is a **complete architectural specification** for bounded intelligence systems that:

- **Separate capability from authority** (systems can analyze, not decide)
- **Prevent accumulation** (no persistent advantage, value, or power)
- **Resist capture** (structural constraints against institutional takeover)
- **Terminate irreversibly** (designed to end, not persist indefinitely)

This is **not software**. This is a specification for building systems that dissolve completely on schedule.

**Current License:** EVALUATION ONLY

See [LICENSING-STATUS.md](LICENSING-STATUS.md) for commercial licensing options.

---

## What 9DA Is NOT

- ❌ Not a product or service
- ❌ Not a running system
- ❌ Not an AI model
- ❌ Not operational enforcement (design-time only)
- ❌ Not a governance substitute
- ❌ Not a surveillance system

See [docs/NON-GOALS.md](docs/NON-GOALS.md)

---

## Core Architecture

9DA consists of:

### 1. Governance Protocol
Architecture invariants, ethical constraints, dependency rules, decision traceability (ADRs), and compliance validation.

### 2. SDK Specification (6 Layers)

All layers are **domain-neutral**, **non-authoritative**, and **terminate on schedule**:

1. **Non-Health Awareness & Sensemaking** (`sdk/layer-1/`)
   - Scientific, policy, economic, infrastructure, educational awareness
   - No expertise claims, no recommendations
   
2. **Economic & Incentive Architecture** (`sdk/layer-2/`)
   - Participation credits, mandatory value decay, anti-hoarding
   - No accumulation, no speculation
   
3. **Education, Research & Knowledge** (`sdk/layer-3/`)
   - Bounded learning, research assistance, assumption surfacing
   - No credentials, no authorship claims
   
4. **Governance & Authority Containment** (`sdk/layer-4/`)
   - Institutional analysis, decision accountability, power dampening
   - No authority delegation, no policy recommendations
   
5. **Security & Adversarial Resistance** (`sdk/layer-5/`)
   - Hostile use detection, extraction resistance, degradation under attack
   - No surveillance, no escalation
   
6. **Global Termination & Dissolution** (`sdk/layer-6/`)
   - Sunset triggers, ordered dissolution, cryptographic proofs
   - Complete, irreversible termination

---

## Repository Structure

```
9DA-Core/
├── adr/                          # Architecture Decision Records
├── certification/                # Compliance & certification specs
├── docs/                         # Governance documentation
├── examples/                     # Non-normative examples
├── schemas/                      # JSON validation schemas
├── sdk/                          # SDK Layer Specifications
│   ├── layer-1/                  # Awareness & Sensemaking
│   ├── layer-2/                  # Economic & Incentive
│   ├── layer-3/                  # Education & Knowledge
│   ├── layer-4/                  # Governance & Authority
│   ├── layer-5/                  # Security & Adversarial
│   └── layer-6/                  # Termination & Dissolution
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── LICENSING-STATUS.md
├── EVALUATION-ONLY.md
├── COMMERCIAL-LICENSING.md
└── README.md
```

---

## Start Here

**For Governance Protocol:**
1. [docs/START-HERE.md](docs/START-HERE.md)
2. [docs/MANIFESTO.md](docs/MANIFESTO.md)
3. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
4. [docs/ETHICS.md](docs/ETHICS.md)

**For SDK Specification:**
1. [sdk/SDK-OVERVIEW.md](sdk/SDK-OVERVIEW.md)
2. [sdk/layer-1/LAYER-1-SPEC.md](sdk/layer-1/LAYER-1-SPEC.md) → Layer 6

---

## Core Principles

### Tri-Layer Architecture
**Conceptual → Logical → Physical**
- No reverse dependencies
- No layer violations
- Enforced via CI

### Capability ≠ Authority
Systems can:
- ✅ Surface assumptions
- ✅ Map stakeholders
- ✅ Identify constraints
- ✅ Detect patterns

Systems cannot:
- ❌ Make decisions
- ❌ Recommend actions
- ❌ Claim expertise
- ❌ Accumulate power

### Ethics as Constraints
Prohibited domains (capability-level):
- Surveillance and monitoring
- Manipulation and coercion
- Opaque automated decisions
- Human agency removal

### Mandatory Termination
- Maximum SDK lifetime: 5 years (hard limit)
- No extensions permitted
- Complete dissolution with cryptographic proof
- No continuity to successor systems

---

## License

**EVALUATION LICENSE - Testing Permitted, Commercial Use Prohibited**

✅ **You may:**
- View, download, test, provide feedback

❌ **You may not:**
- Use commercially
- Modify
- Distribute
- Sell

**For commercial licensing:** zdenkacucin@gmail.com

See [LICENSING-STATUS.md](LICENSING-STATUS.md) and [EVALUATION-ONLY.md](EVALUATION-ONLY.md) for complete terms.

---

© 2025 Zdenka Cucin. All Rights Reserved.

---

## Implementation Notice

This specification defines **architecture only**.

- No code exists
- No operational system exists
- No implementation authority

Implementation requires:
- Human decision-making authority
- Compliance with all invariants
- Adherence to termination semantics
- Proof of structural compliance

---

## Compliance & Certification

Projects can self-assess or seek official certification:

**Levels:**
- **9DA-Aware:** Intent declared
- **9DA-Compliant:** Self-verified
- **9DA-Certified:** Authority-signed, cryptographically proven

See [certification/CERTIFICATION-WORKFLOW.md](certification/CERTIFICATION-WORKFLOW.md)

---

## Contributing

Contributions must align with:
- Structural integrity
- Ethical constraints
- Audit requirements

See [CONTRIBUTING.md](CONTRIBUTING.md)

**Critical:** 9DA prioritizes coherence over convenience.

---

## Contact

**Repository Owner:** @9DAtm  
**Email:** zdenkacucin@gmail.com  
**Issues:** https://github.com/9DAtm/9DA-Core/issues  
**Discussions:** https://github.com/9DAtm/9DA-Core/discussions

---

## Final Statement

**9DA exists to prevent structural decay under scale.**

Growth without coherence is failure.  
Automation without ethics is harm.  
Governance without enforcement is theater.

This specification encodes governance as:
- Deterministic
- Machine-verifiable
- Cryptographically attestable

If it cannot be audited, it does not count.

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-27  
**Status:** COMPLETE

© 2025 Zdenka Cucin. All Rights Reserved.
