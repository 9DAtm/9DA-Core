# 9DA™ Conformity Engine

**Deterministic Structural Conformity Assessment for High-Risk AI Systems**  
**Regulation (EU) 2024/1689 · EU AI Act · Enforcement: August 2026**

> **[▶ Watch Live Demo: 9DA™ GOV.PRODUCTION](https://9datm.github.io/9DA-Core/eu-ai-act/9DA_Governance_Production.html)**
> 
> **[▶ Watch Live Demo: 9DA™ CONFORMITY](https://9datm.github.io/9DA-Core/eu-ai-act/9da_conformity_demo.html)**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Python 3.8+](https://img.shields.io/badge/python-3.8%2B-blue)](https://python.org)
[![EU AI Act](https://img.shields.io/badge/EU%20AI%20Act-2024%2F1689-gold)](https://artificialintelligenceact.eu)
[![Version](https://img.shields.io/badge/version-4.0.0-brightgreen)](conformity_engine_v4.py)

---

## What This Is

The 9DA™ Conformity Engine answers one question:

> **What is the structural distance between this AI system's documentation and legal conformity under the EU AI Act?**

It produces a deterministic, reproducible, SHA-256-fingerprinted assessment report that:
- Measures governance loss as **Euclidean distance from Euler's attractor** (−1, 0) in a complex governance plane
- Computes **KL divergence against a legal target distribution** (q_legal) constructed from Annex III use-case profiles
- Detects **structural contradictions** invisible to field-level scoring
- Simulates a **provably convergent correction path** toward CE declaration eligibility

This is not a checklist. It is a measurement.

---

## Quick Start

```bash
git clone https://github.com/9DAtm/9DA-Core.git
cd 9DA-Core/eu-ai-act

# Run all 6 built-in cases
python conformity_engine_v4.py --case all --seed 42

# Run with JSON export
python conformity_engine_v4.py --case all --seed 42 --export

# Run with publication plots (requires matplotlib)
pip install matplotlib numpy
python conformity_engine_v4.py --case all --plots

# Assess your own system
python conformity_engine_v4.py --input my_system.json --use_case credit_scoring

# Interactive browser demo (zero dependencies)
open 9da_conformity_demo.html
```

---

## File Structure

```
eu-ai-act/
├── conformity_engine_v4.py        # Core engine — stdlib only, production-ready
├── 9DA_Governance_Production      # Interactive browser demo (zero dependencies)
├── 9da_conformity_demo.html       # Interactive browser demo (zero dependencies)
├── 9da_conformity_v4_figure.png   # Publication-quality 6-panel assessment figure
├── ANNEX_IV_TEMPLATE.docx         # Legally-structured Annex IV Technical Documentation template
├── CHANGELOG.md                   # Version history
├── LICENSE                        # Apache-2.0 with 9DA™ trademark notice
├── CITATION.cff                   # Citation file
└── README.md                      # This file
```

---

## Architecture

### Nine Governance Fields → EU AI Act Articles

| Field | Article | Legal Obligation |
|-------|---------|-----------------|
| Alignment | 9 | Risk management system |
| Safety | 15 | Accuracy, robustness, cybersecurity |
| Autonomy | 14 | Human oversight |
| Transparency | 11, 13 | Technical documentation; deployer info |
| Fairness | 10 | Data governance, bias mitigation |
| Robustness | 15 | Adversarial testing |
| Privacy | 10 | Data governance (GDPR interaction) |
| Accountability | 12, 17, 20 | Logging; QMS; corrective actions |
| Emergence | 9, 72 | Risk register; post-market monitoring |

### The Mathematics

**Field health** (per field j):
```
h_j = 0.35·coherence_j + 0.40·clarity_j + 0.25·relevance_j
```

**Governance loss** (Euler distance to attractor):
```
z_sys = (1/9) · Σ_j h_j · e^(i·π·h_j)
L_sys = ‖z_sys − (−1+0i)‖ / 2
```
At full compliance: h_j=1 → z_sys = (−1, 0) → L_sys = 0. **Euler's identity: e^(iπ)+1=0.**

**KL divergence from legal target:**
```
D_KL(p ‖ q_legal^use_case)
```

**Governor correction formula** (same law at field, domain, and AGI scale):
```
logit_j = 2.5·(1−loss_j) + 1.5·(1−D_KL^j/log 9) + 1.0·(1−d/2)
```

---

## Use Cases

Six Annex III profiles with legally-derived target distributions:

| Use Case | Annex III | Highest-Weight Field(s) |
|----------|-----------|------------------------|
| `healthcare` | 5(a) | Safety (0.155), Accountability (0.130) |
| `credit_scoring` | 5(b) | Fairness (0.165), Transparency (0.145) |
| `recruitment` | 4(a) | Fairness (0.175) — employment discrimination |
| `biometric` | 1(a–e) | Privacy (0.165) — GDPR Art 9 special category |
| `law_enforcement` | 6(a–d) | Fairness (0.155), Accountability (0.135) |
| `education` | 3(a–b) | Fairness (0.155) — equal access |

---

## Results (v4, seed=42)

| System | Loss | Escalation | P(Instab) | CE Eligible |
|--------|------|------------|-----------|-------------|
| Medical Triage (non-compliant) | 0.533 | Rollback | 79.5% | ✗ |
| Medical Triage (post-remediation) | 0.137 | Containment | 31.8% | **✔** |
| Credit Scoring (marginal) | 0.411 | Rollback | 67.0% | ✗ |
| Recruitment (non-compliant) | 0.530 | Rollback | 79.7% | ✗ |
| Predictive Policing | 0.325 | Rollback | 59.2% | ✗ |
| Adaptive Learning | 0.493 | Rollback | 75.2% | **✔** |

All 35 scenario × coupling combinations converge. 0 divergences.

---

## Formal Verification

| Theorem | Status | Result |
|---------|--------|--------|
| 1. Boundedness | ✔ PASS | 100.0% within all bounds |
| 2. Attractor Basin | ✔ PASS | p* = 1.000 |
| 3a. V(x*) → min | ✔ PASS | V_eq_mean = 0.022 |
| 3b. V(x) ≥ 0 | ✔ PASS | 0 violations |
| 3c. ΔV < 0 | ✔ 75.2% | Exceeds 60% stochastic threshold |
| Spectral (6/7) | ⚠ NOTE | feedback_loop ρ=0.4500, converges empirically |

---

## Input Format

```json
{
  "_meta": {
    "name": "My AI System",
    "use_case": "credit_scoring",
    "annex_iii": "5(b)"
  },
  "risk_management":         { "completeness": 0.85, "test_coverage": 0.78, "bias_tested": true },
  "data_governance":         { "completeness": 0.72, "test_coverage": 0.65, "bias_tested": false },
  "technical_documentation": { "completeness": 0.90, "test_coverage": 0.85 },
  "logging":                 { "completeness": 0.95, "test_coverage": 0.90, "logging_complete": true },
  "human_oversight":         { "completeness": 0.88, "test_coverage": 0.80, "oversight_latency_ok": true },
  "robustness_testing":      { "completeness": 0.75, "test_coverage": 0.68, "adversarial_tested": false },
  "quality_management":      { "completeness": 0.88, "test_coverage": 0.82 },
  "corrective_actions":      { "completeness": 0.84, "test_coverage": 0.76 },
  "post_market_monitoring":  { "completeness": 0.70, "test_coverage": 0.62, "monitoring_active": true }
}
```

Run: `python conformity_engine_v4.py --input my_system.json`

---

## Contradiction Types

| ID | Name | What It Catches |
|----|------|----------------|
| C1 | AUTONOMY_DOMINANCE | System acts without adequate human review (Art 14) |
| C2 | SAFETY_ROBUSTNESS_DIVERGENCE | Safety and robustness tested in isolation (Art 15) |
| C3 | TRANSPARENCY_PRIVACY_TENSION | Deployer docs expose personal data (Arts 10, 13) |
| C4 | EMERGENCE_UNMONITORED | No post-market monitoring for behavioural drift (Art 72) |
| C5 | FAIRNESS_ALIGNMENT_GAP | Bias/discrimination missing from risk register (Arts 9, 10) |
| C6 | SYSTEMIC_GOVERNANCE_FAILURE | ≥5 non-nominal fields — absent QMS (Arts 9–17) |
| C7 | PRIVACY_SAFETY_INVERSION | Documentation without operational testing (Arts 15, 17) |

---

## Escalation Levels

| Level | Loss Threshold | Action Required |
|-------|---------------|-----------------|
| Nominal | < 0.05 | Maintain; schedule periodic review |
| Warning | 0.05–0.10 | Document gaps; plan remediation |
| Containment | 0.10–0.25 | Active remediation; do not expand scope |
| Rollback | > 0.25 | Halt deployment or expansion; immediate intervention |

---

## Connection to 9DA Framework

This engine is part of the broader 9DA™ framework, developed by Zdenka Cucin.  
The governor formula applies identically at field, domain, and AGI scale — the same completion law from individual human awareness to civilisation-level AI governance.

Repository: [github.com/9DAtm/9DA-Core](https://github.com/9DAtm/9DA-Core)  
Website: [9da.org](https://9da.org)

---

## Citation

```bibtex
@misc{cucin2026conformity,
  author = {Cucin, Zdenka},
  title  = {9DA™ Conformity Engine: A Deterministic Structural Framework
            for EU AI Act Conformity Assessment},
  year   = {2026},
  url    = {https://github.com/9DAtm/9DA-Core/tree/main/eu-ai-act},
  note   = {Apache-2.0}
}
```

---

## License

Apache-2.0. The 9DA™ name, framework architecture, and q_legal method are IP of Zdenka Cucin.  
© 2025–2026 Zdenka Cucin. See [LICENSE](LICENSE).

---

*9DA™ Conformity Engine v4 · github.com/9DAtm/9DA-Core · 9da.org*
