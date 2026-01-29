# 9DA Core

**Find contradictions in complex plans before they break**

9DA analyzes proposals, policies, and system designs from 9 perspectives simultaneously — like having 9 expert reviewers check your work for hidden conflicts you missed.

---

## What Does 9DA Actually Do?

**In 3 sentences:**
1. You give 9DA a plan, policy, or design with multiple constraints
2. 9DA finds contradictions between your requirements that humans miss
3. 9DA either helps you fix them (Approval Mode) or proves they can't be fixed (Termination Mode)

**Real-world example:**
- **Input:** "Design a healthcare system that prevents burnout AND maximizes efficiency AND keeps costs low AND provides universal coverage"
- **9DA Output:** "Constraints 2 and 3 mathematically conflict. Here are 5 ways to resolve this..."

---

## Two Modes — Two Purposes

### 🔧 Approval Mode (Help Me Fix It)

**Use when:** You want to improve your plan until it works

**How it works:**
1. Upload your proposal
2. 9DA finds all contradictions
3. 9DA suggests specific fixes
4. You apply a fix and re-run
5. Repeat until approved (zero contradictions)

**Example:**
```bash
9da run my-policy.json --mode=approval
```

**Output:** "NOT APPROVED — 12 contradictions found. Here are 5 ways to fix them..."

---

### 🔬 Termination Mode (Prove It's Impossible)

**Use when:** You need mathematical proof that something can't work

**How it works:**
1. Upload a complex problem
2. 9DA analyzes from 9 dimensions
3. 9DA proves which constraints are mathematically incompatible
4. Provides evidence of structural impossibility

**Example:**
```bash
9da run complex-problem.json --mode=termination
```

**Output:** "TERMINATED — Structural impossibility detected. Constraints A, D, and F cannot coexist. Here's why..."

---

## Quick Start (5 Minutes)

### 1. Install the SDK

```bash
cd sdk
npm install
npm run build
```

**No API keys needed** — works offline in MOCK mode by default.

### 2. Test Approval Mode

```bash
node dist/cli/index-dual.js run examples/community-garden-simple.json --mode=approval
```

**You'll see:**
- 9 agents analyzing your constraints
- Contradictions found
- Specific solutions to fix them

### 3. Test Termination Mode

```bash
node dist/cli/index-dual.js run examples/preventive-health-burnout.json --mode=termination
```

**You'll see:**
- Deep analysis across 54 dimensions (9 agents × 6 layers)
- Proof of why certain goals conflict
- Mathematical evidence of impossibility

---

## Real Use Cases

### ✅ Government & Policy

**Problem:** "Our climate policy has 20 requirements from different agencies. Do they conflict?"

**9DA Solution:**
- Approval Mode: Finds conflicts, suggests fixes until policy is coherent
- Termination Mode: Proves which requirements are fundamentally incompatible

---

### ✅ Product Design

**Problem:** "Our product spec has security, speed, and budget constraints. Will they work together?"

**9DA Solution:**
- Approval Mode: Identifies trade-offs, suggests modifications
- Output: "Change constraint X from absolute to conditional, then approved"

---

### ✅ Academic Research

**Problem:** "Does this theoretical framework have internal contradictions?"

**9DA Solution:**
- Termination Mode: Mathematical proof of consistency or impossibility
- Output: Court/audit-level evidence

---

### ✅ System Architecture

**Problem:** "Our microservices design has 15 requirements. Are they compatible?"

**9DA Solution:**
- Approval Mode: Iteratively refine until zero contradictions
- Termination Mode: Prove impossibility if needed

---

## How 9DA Analyzes

**9 Fixed Dimensions (Always Applied):**
1. **Essence** — What's the irreducible core?
2. **Identity & Polarity** — What tensions exist?
3. **Structure** — What spatial patterns conflict?
4. **Temporality** — What timeline dependencies clash?
5. **Probability** — What risks contradict?
6. **Constraint Dynamics** — What feedback loops break?
7. **Integration** — What information flows conflict?
8. **Universality** — What scale requirements clash?
9. **Termination** — What closure conditions contradict?

**6 Reference Layers (Customizable):**
- Awareness & Sensemaking
- Economic & Incentive
- Education & Knowledge
- Governance & Authority
- Security & Adversarial
- Termination & Dissolution

**Result:** 9 dimensions × 6 layers = 54 analytical perspectives

---

## Example: Community Garden (Simple)

**Input:**
```json
{
  "id": "garden-001",
  "description": "Design a local community garden",
  "constraints": [
    "Must be accessible to local residents",
    "Must be sustainable",
    "Must provide educational value",
    "Must be low-cost"
  ]
}
```

**9DA Output (Approval Mode):**
```
STATUS: APPROVED

All constraints are compatible.
Zero contradictions found.
Garden design is coherent.
```

---

## Example: Healthcare Policy (Complex)

**Input:**
```json
{
  "id": "health-001",
  "description": "Design preventive healthcare approach",
  "constraints": [
    "Prevent burnout in healthcare workers",
    "Maximize efficiency",
    "Maintain universal coverage",
    "Keep costs below current baseline",
    "Increase preventive care",
    "Reduce administrative burden",
    "Improve patient outcomes",
    "Scale to national level",
    "Implement within 2 years",
    "No new taxes"
  ]
}
```

**9DA Output (Approval Mode):**
```
STATUS: NOT APPROVED

54 contradictions found across 6 clusters.

CLUSTER C1 — Economic Layer
Root Cause: Cost constraints conflict with coverage goals
Faults: 12

SOLUTION A — Temporal Staging
What to change:
  • Break "2-year implementation" into phases
  • Stage universal coverage over 5 years
  • Front-load preventive care investments

Why this works:
  • Removes temporal impossibility
  • Allows budget to scale with coverage

What this enables:
  • Zero-fault approval possible
  • Implementation can proceed

Trade-offs:
  • Longer timeline (2 years → 5 years)
  • Partial coverage in years 1-3

NEXT STEP: Apply solution and re-run for approval
```

---

## Installation Options

### 1. MOCK Mode (Default — No API Keys)

Works completely offline. Perfect for:
- Testing
- Development
- Educational use
- Proof of concept

```bash
node dist/cli/index-dual.js run task.json
```

### 2. LIVE Mode (Production — Requires API Key)

Uses real AI models for deeper analysis:

```bash
# Anthropic
export ANTHROPIC_API_KEY="your-key"
node dist/cli/index-dual.js run task.json --live anthropic

# OpenAI
export OPENAI_API_KEY="your-key"
node dist/cli/index-dual.js run task.json --live openai
```

---

## Who Should Use 9DA?

**Perfect for:**
- ✅ Government policy teams
- ✅ System architects
- ✅ Academic researchers
- ✅ Product designers
- ✅ Regulators and auditors
- ✅ Anyone with complex multi-constraint problems

**Not suitable for:**
- ❌ Simple yes/no decisions
- ❌ Single-constraint optimization
- ❌ Real-time applications
- ❌ Creative brainstorming (use other tools)

---

## Key Principles

### 🔒 No Prescriptions
9DA finds contradictions and suggests transformations.  
It never tells you what to do.

### 🎯 Humans Decide
9DA is a tool for human decision-makers.  
Final choices remain with named humans.

### 📊 Audit-Grade Evidence
Every analysis is deterministic and reproducible.  
Court/audit-level defensibility.

### ⏱️ Mandatory Termination
Every 9DA session terminates.  
No persistent memory. No accumulating authority.

### 🧮 Mathematical Rigor
Contradictions are proven, not guessed.  
Binary outcomes: approved or not approved.

---

## Repository Structure9DA-Core/
├── adr/
├── certification/
├── docs/
├── examples/
├── schemas/
├── sdk/
├── .gitignore
├── CODE_OF_CONDUCT.md
├── COMMERCIAL-LICENSING.md
├── CONTRIBUTING.md
├── EVALUATION-ONLY.md
├── LICENSE
├── LICENSING-STATUS.md
└── README.md



---
## SDK Structure (9DA-Core/sdk/)
sdk/
├── src/
│   ├── agents/
│   │   ├── agent1_essence.ts
│   │   ├── agent2_framing.ts
│   │   ├── agent3_phenomenology.ts
│   │   ├── agent4_patterns.ts
│   │   ├── agent5_trajectory.ts
│   │   ├── agent6_reinforcement.ts
│   │   ├── agent7_synthesis.ts
│   │   ├── agent8_universal.ts
│   │   ├── agent9_termination.ts
│   │   ├── base.ts
│   │   └── index.ts
│   ├── cli/
│   │   ├── index.ts
│   │   └── index-dual.ts
│   ├── config/
│   │   └── default.config.json
│   ├── kernel/
│   │   ├── invariants.ts
│   │   ├── types.ts
│   │   └── validators.ts
│   ├── llm/
│   │   └── providers.ts
│   ├── modes/
│   │   └── approval/
│   │       ├── types.ts
│   │       ├── clustering.ts
│   │       ├── resolver.ts
│   │       └── engine.ts
│   ├── runtime/
│   │   └── executor.ts
│   └── index.ts
├── examples/
│   ├── preventive-health-burnout.json
│   ├── agi-governance-test.json
│   └── community-garden-simple.json
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── TERMINATION_SEMANTICS.md

---

## Getting Started

### For Users (Try It Now)
1. Go to `sdk/` folder
2. Read `sdk/README.md`
3. Run examples
4. Test your own constraints

### For Developers (Build Systems)
1. Read `docs/ARCHITECTURE.md`
2. Review `schemas/`
3. Study `sdk/src/`
4. Build compliant systems

### For Organizations (Certification)
1. Read `certification/CERTIFICATION-WORKFLOW.md`
2. Evaluate governance fit
3. Apply for certification
4. Deploy in production

---

## Documentation

### Quick Start
- `sdk/README.md` — SDK usage guide
- `sdk/examples/` — Example inputs
- `TERMINATION_SEMANTICS.md` — Core rules

### Deep Dive
- `docs/ARCHITECTURE.md` — System design
- `docs/MANIFESTO.md` — Philosophy & principles
- `docs/ETHICS.md` — Ethical framework

### Compliance
- `certification/` — Certification process
- `LICENSING-STATUS.md` — Usage rights
- `COMMERCIAL-LICENSING.md` — Production use

---

## Common Questions

### "Do I need AI expertise?"
No. 9DA is designed for domain experts (policy makers, architects, researchers) not AI specialists.

### "Does it work offline?"
Yes. MOCK mode requires no internet or API keys.

### "How accurate is it?"
9DA uses mathematical logic, not probabilistic guessing. Contradictions are proven, not estimated.

### "Can I customize it?"
Yes. Define custom layers, adjust agent instructions, modify transformation types. (Requires certification for production use.)

### "Is it open source?"
Specification is public. Implementation requires certification. See `LICENSING-STATUS.md`.

---

## What Makes 9DA Different

| Traditional Tools | 9DA |
|-------------------|-----|
| Recommends actions | Finds contradictions only |
| Optimizes for outcomes | Proves mathematical impossibility |
| Black box | Fully auditable |
| Persists and learns | Terminates after each run |
| Automates decisions | Supports human decisions |
| Probabilistic | Deterministic |

---

## Status

- **Specification:** ✅ Complete
- **SDK:** ✅ Functional (MOCK mode)
- **Certification:** ✅ Available
- **Production Use:** Requires certification

---

## License & Usage

**Evaluation:** Free (this repository)  
**Development:** Free (MOCK mode)  
**Production:** Certification required

See `LICENSING-STATUS.md` for details.

---

## Support & Contact

- **Issues:** Use GitHub Issues for bugs/questions
- **Documentation:** See `docs/` folder
- **Certification:** See `certification/CERTIFICATION-WORKFLOW.md`
- **Author:** Zdenka Cucin

---

## Final Note

9DA exists to help humans make better decisions by finding contradictions before they cause failures.

It doesn't think for you. It doesn't decide for you. It doesn't optimize for you.

It finds what breaks — so you can fix it or prove it can't be fixed.

That's it.

---

**Version:** 1.0.0  
**Last Updated:** 2026-01-29
**Status:** COMPLETE

© 2025 Zdenka Cucin. All Rights Reserved.

