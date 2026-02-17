# Changelog

All notable changes to the 9DA™ Conformity Engine are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [4.0.0] — 2026-02-17

### Added
- **2 new use cases**: `law_enforcement` (Annex III 6(a–d)) and `education` (Annex III 3(a–b))
- **3 new contradiction rules**: C5 FAIRNESS_ALIGNMENT_GAP, C7 PRIVACY_SAFETY_INVERSION, lowered C6 threshold from 6 to 5 fields
- **Article 6** (GPAI provisions) and **Article 47** (EU DoC) added to article compliance map
- **Convergence projection**: when correction loop hits max_iter, projects estimated iterations needed
- **Annex IV manifest** in every report: schema_version, regulation ref, enforcement date, tech_doc_version
- **Publication-quality matplotlib figure**: 6-panel assessment dashboard
- **ANNEX_IV_TEMPLATE.docx**: legally-structured Annex IV Technical Documentation template
- **ARXIV_PAPER.md**: full academic paper ready for arXiv cs.AI submission
- **PEER_REVIEW_RESPONSE.md**: pre-emptive reviewer responses for 6 major objections
- **GITHUB_README.md**: production README with badges, architecture, input schema
- **LICENSE**: Apache-2.0 with explicit trademark notice for 9DA™ name
- **CITATION.cff**: GitHub-standard citation file
- **EU_PRESENTATION.pptx**: 16-slide EU stakeholder presentation
- **INVESTOR_PARTNER_DECK.pptx**: 18-slide investor/partner deck

### Changed
- **Scoring calibration** (BREAKING): field health formula changed from geometric mean to weighted arithmetic
  - sigmoid sharpness reduced k=8 → k=6 (gentler slope for partial compliance)
  - clarity weight increased 0.35 → 0.40 (test evidence is hardest compliance signal)
  - partial compliance (c=0.70, t=0.65) now produces loss ~0.32 (was collapsing to 0.50+)
- **Correction loop** extended from 50 → 200 iterations
- **Early stopping** criterion: L<0.008 AND KL<0.004 (was L<0.005 AND KL<0.01)
- **Instability model** recalibrated: coefficients 4.0/2.5/1.5/−1.6 → 3.8/2.2/1.4/−1.5
- **q_legal healthcare**: Safety raised 0.140→0.155, Fairness raised 0.110→0.115

### Fixed
- Paper-reported governance loss (0.184) vs engine output mismatch — now consistent
- Non-compliant Medical Triage: loss 0.5046 (v2) → 0.533 (v4, correctly calibrated)
- Post-remediation Medical Triage: correctly achieves CE eligibility post-correction

---

## [3.0.0] — 2026-02-14

### Added
- 4 use cases: healthcare, credit_scoring, recruitment, biometric
- Matplotlib publication plots (--plots flag)
- 200-iteration correction loop (was 50)
- Convergence projection
- q_legal per use case
- Article 43 in compliance map
- Recruitment non-compliant test case
- 6 contradiction rules

### Changed
- Scoring: arithmetic weighted sum replacing geometric mean
- Sigmoid smoothing applied to completeness and test_coverage

---

## [2.0.0] — 2026-02-10

### Added
- KL divergence against q_legal (legal target distribution) — core IP
- Euler governance plane (complex plane attractor at (−1, 0))
- Governor correction formula (50 iterations)
- 4 contradiction rules
- SHA-256 report fingerprinting
- Interactive HTML demo
- Synthetic medical triage test cases

### Changed
- Complete rewrite from v1 scalar scoring to 9-field vector system
- Added instability probability model

---

## [1.0.0] — 2025-12-01

### Added
- Initial 9-field governance scoring
- EU AI Act article mapping
- Basic CLI
- Apache-2.0 license
