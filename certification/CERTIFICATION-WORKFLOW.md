\# CERTIFICATION-WORKFLOW.md



\## Purpose



This document defines the complete workflow for 9DA certification, from initial compliance through signature generation, publication, verification, and revocation.



This is the authoritative process specification.



---



\## Certification Levels



Certifications are issued at three levels:



1\. \*\*9DA-Aware\*\* - Self-declared, no verification

2\. \*\*9DA-Compliant\*\* - Self-verified, evidence-based

3\. \*\*9DA-Certified\*\* - Authority-signed, cryptographically verified



See `BADGE-SPEC.md` for badge specifications.



---



\## Workflow Overview



```

┌─────────────────┐

│ Project submits │

│ for compliance  │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Generate report │

│ (9da-verify)    │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Validate report │

│ against schemas │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Review process  │

│ (if Certified)  │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Sign report     │

│ (if approved)   │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Publish cert    │

│ to registry     │

└────────┬────────┘

&nbsp;        │

&nbsp;        ▼

┌─────────────────┐

│ Issue badge     │

│ credentials     │

└─────────────────┘

```



---



\## Phase 1: Pre-Certification



\### Prerequisites



Before seeking certification, projects must:



1\. \*\*Adopt 9DA Structure\*\*

&nbsp;  - Create `docs/` directory

&nbsp;  - Add governance references

&nbsp;  - Implement ADR process



2\. \*\*Implement Compliance Requirements\*\*

&nbsp;  - All ADRs validate against `adr.schema.json`

&nbsp;  - Dependencies declared per `DEPENDENCY-MATRIX.md`

&nbsp;  - Architecture follows layer rules

&nbsp;  - Ethics constraints preserved



3\. \*\*Document Evidence\*\*

&nbsp;  - Create `9DA-COMPLIANCE.md` in repository

&nbsp;  - List all ADRs

&nbsp;  - Declare dependencies

&nbsp;  - Reference ethics review (if applicable)



4\. \*\*Self-Test\*\*

&nbsp;  - Run `9da-verify` locally

&nbsp;  - Fix all validation errors

&nbsp;  - Ensure schemas pass



---



\## Phase 2: Compliance Report Generation



\### Input Requirements



\*\*For 9DA-Compliant:\*\*

\- Repository URL

\- Commit hash

\- ADR directory path

\- Dependency declaration



\*\*For 9DA-Certified (additional):\*\*

\- Contact email

\- Organization name

\- Intended use case

\- Ethics self-assessment



---



\### Generate Report



\*\*Command:\*\*

```bash

9da-verify compliance generate \\

&nbsp; --repo https://github.com/user/project \\

&nbsp; --commit a1b2c3d4 \\

&nbsp; --output compliance-report.json

```



\*\*Output:\*\*  

JSON file conforming to `compliance-report.schema.json`



\*\*Example:\*\*

```json

{

&nbsp; "report\_identity": {

&nbsp;   "report\_id": "CR-0001-PROJECT",

&nbsp;   "report\_type": "Release-Compliance",

&nbsp;   "generated\_at": "2026-01-24T12:00:00Z"

&nbsp; },

&nbsp; "subject": {

&nbsp;   "name": "Example Project",

&nbsp;   "version": "1.0.0",

&nbsp;   "scope": "Single-Repository"

&nbsp; },

&nbsp; "governing\_references": {

&nbsp;   "architecture": "9DA-Core/ARCHITECTURE.md",

&nbsp;   "dependency\_matrix": "9DA-Core/DEPENDENCY-MATRIX.md",

&nbsp;   "ethics": "9DA-Core/ETHICS.md",

&nbsp;   "release\_process": "9DA-Core/RELEASE-PROCESS.md",

&nbsp;   "metrics": "9DA-Core/METRICS.md"

&nbsp; },

&nbsp; "compliance\_evaluations": {

&nbsp;   "architecture": { "validated": true, "violations": 0 },

&nbsp;   "dependencies": { "validated": true, "cycles\_detected": 0 },

&nbsp;   "adrs": { "coverage\_complete": true, "unaccepted\_count": 0 },

&nbsp;   "ethics": { "validated": true, "violations": 0 },

&nbsp;   "integration\_tests": { "pass\_rate": 100 },

&nbsp;   "metrics": { "thresholds\_met": true }

&nbsp; },

&nbsp; "violations": \[],

&nbsp; "evidence": {

&nbsp;   "ci\_runs": \["https://github.com/user/project/actions/runs/123"],

&nbsp;   "artifacts": \[]

&nbsp; },

&nbsp; "certification\_status": {

&nbsp;   "compliant": true,

&nbsp;   "certification\_level": "9DA-Compliant"

&nbsp; },

&nbsp; "audit\_metadata": {

&nbsp;   "audited\_by": "9da-verify-cli",

&nbsp;   "auditor\_role": "CI-System",

&nbsp;   "audit\_date": "2026-01-24"

&nbsp; }

}

```



---



\### Validate Report



\*\*Command:\*\*

```bash

9da-verify compliance validate compliance-report.json

```



\*\*Checks:\*\*

\- JSON structure valid

\- Schema compliance

\- All required fields present

\- No violations listed (for certification)

\- Evidence links valid



\*\*Output:\*\*

```

✓ Report structure valid

✓ Schema validation passed

✓ No compliance violations

✓ Evidence complete

✓ Report ready for submission

```



---



\## Phase 3: Submission (9DA-Certified Only)



\### Submission Methods



\*\*Option A: GitHub Issue\*\*

1\. Open issue in `9DAtm/9DA-Core`

2\. Template: "Certification Request"

3\. Attach: `compliance-report.json`

4\. Include: Repository URL, contact info



\*\*Option B: Email\*\*

1\. Send to: certification@9da.org (TBD)

2\. Subject: "9DA Certification Request - \[PROJECT]"

3\. Attach: `compliance-report.json`

4\. Include: Repository access if private



---



\### Initial Review



\*\*Timeline:\*\* Within 7 days



\*\*Reviewer:\*\* 9DA Certification Authority



\*\*Checks:\*\*

1\. Report validates against schema

2\. Repository accessible

3\. Evidence links functional

4\. No obvious violations

5\. Ethics review complete (if applicable)



\*\*Outcomes:\*\*

\- \*\*Approved for signature\*\* → Proceed to Phase 4

\- \*\*Requires clarification\*\* → Request additional info

\- \*\*Rejected\*\* → Provide detailed reason



---



\## Phase 4: Signing Process



\### Authority Signature



\*\*Signing Authority:\*\* @9DAtm



\*\*Signing Key:\*\*

\- Algorithm: `ed25519`

\- Key location: `9DA-Core/certification/PUBLIC-KEYS/9DA-2026-Q1.pub`

\- Key rotation: Quarterly



\*\*Signature Generation:\*\*

```bash

\# Generate SHA256 hash of report

sha256sum compliance-report.json > report.hash



\# Sign hash with private key

openssl pkeyutl -sign \\

&nbsp; -inkey 9DA-2026-Q1.pem \\

&nbsp; -in report.hash \\

&nbsp; -out compliance-report.sig

```



---



\### Signature Structure



\*\*File:\*\* `compliance-report.sig.json`



```json

{

&nbsp; "certification\_id": "CERT-0001-2026",

&nbsp; "report\_hash\_sha256": "a1b2c3d4...",

&nbsp; "certification\_level": "9DA-Certified",

&nbsp; "scope": "Single-Repository",

&nbsp; "signed\_by": "9DA-Core-Maintainer",

&nbsp; "public\_key\_fingerprint": "SHA256:abcdef...",

&nbsp; "signature\_algorithm": "ed25519",

&nbsp; "signature": "base64\_encoded\_signature",

&nbsp; "valid\_from": "2026-01-24",

&nbsp; "valid\_until": "2026-04-24",

&nbsp; "revocation\_status": "Not-Revoked"

}

```



---



\### Signature Validation



\*\*Anyone can verify:\*\*



```bash

\# Download report and signature

wget https://example.com/compliance-report.json

wget https://example.com/compliance-report.sig.json



\# Download public key

wget https://github.com/9DAtm/9DA-Core/certification/PUBLIC-KEYS/9DA-2026-Q1.pub



\# Verify signature

9da-verify cert verify \\

&nbsp; --report compliance-report.json \\

&nbsp; --signature compliance-report.sig.json \\

&nbsp; --public-key 9DA-2026-Q1.pub

```



\*\*Output:\*\*

```

✓ Report hash matches signature

✓ Signature valid for public key

✓ Certificate not revoked

✓ Certificate within validity period

✓ Certification valid

```



---



\## Phase 5: Publication



\### Registry Entry



\*\*Location:\*\* `9DA-Core/certification/registry.json`



\*\*Entry added:\*\*

```json

{

&nbsp; "cert\_id": "CERT-0001-2026",

&nbsp; "project": "Example Project",

&nbsp; "repository": "https://github.com/user/project",

&nbsp; "level": "9DA-Certified",

&nbsp; "issued\_date": "2026-01-24",

&nbsp; "valid\_until": "2026-04-24",

&nbsp; "report\_url": "https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.json",

&nbsp; "signature\_url": "https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.sig.json",

&nbsp; "status": "Active"

}

```



---



\### Artifact Publication



\*\*Files published in 9DA-Core repo:\*\*



```

9DA-Core/certification/

├── CERT-0001-2026.json          ← Compliance report

├── CERT-0001-2026.sig.json      ← Signature

└── registry.json                ← Registry entry

```



\*\*Public URLs:\*\*

\- Report: `https://github.com/9DAtm/9DA-Core/blob/main/certification/CERT-0001-2026.json`

\- Signature: `https://github.com/9DAtm/9DA-Core/blob/main/certification/CERT-0001-2026.sig.json`



---



\### Notification



Project notified via:

1\. GitHub issue response (if submitted via issue)

2\. Email (if submitted via email)

3\. PR to project repo adding badge (optional)



\*\*Notification includes:\*\*

\- Certificate ID

\- Badge image and markdown

\- Validity period

\- Recertification date

\- Display guidelines



---



\## Phase 6: Display



\### Badge Installation



Project adds to README.md:



```markdown

\[!\[9DA-Certified](https://github.com/9DAtm/9DA-Core/badges/certified.svg)](https://github.com/9DAtm/9DA-Core)



\*\*Certificate:\*\* \[CERT-0001-2026](https://github.com/9DAtm/9DA-Core/blob/main/certification/CERT-0001-2026.json)  

\*\*Valid:\*\* 2026-Q1 (Jan 24 - Apr 24)  

\*\*Verify:\*\* `9da-verify cert check CERT-0001-2026`

```



---



\### Compliance Documentation



Project maintains `9DA-COMPLIANCE.md`:



```markdown

\# 9DA Compliance



This project is certified as 9DA-compliant.



\## Certificate Details



\- \*\*Certificate ID:\*\* CERT-0001-2026

\- \*\*Level:\*\* 9DA-Certified

\- \*\*Issued:\*\* 2026-01-24

\- \*\*Valid Until:\*\* 2026-04-24

\- \*\*Compliance Report:\*\* \[Link]

\- \*\*Signature:\*\* \[Link]



\## Verification



```bash

9da-verify cert check CERT-0001-2026

```



\## Maintained Compliance



\- All ADRs validate against schema

\- Dependencies declared in DEPENDENCY-MATRIX

\- Architecture layer rules followed

\- Ethics constraints preserved

\- Quarterly recertification scheduled

```



---



\## Phase 7: Monitoring and Recertification



\### Ongoing Compliance



\*\*Project responsibilities:\*\*

\- Maintain all certification requirements

\- Keep ADRs up to date

\- Report significant changes

\- Monitor revocation registry



\*\*9DA responsibilities:\*\*

\- Monitor for reported violations

\- Update revocation registry

\- Issue recertification reminders

\- Rotate signing keys quarterly



---



\### Recertification



\*\*Required:\*\* Every 90 days (quarterly)



\*\*Process:\*\*

1\. Generate new compliance report (30 days before expiry)

2\. Submit for recertification

3\. Review and sign (expedited if no changes)

4\. Update registry

5\. New certificate ID issued



\*\*Grace period:\*\* 14 days after expiry



\*\*Expired certificates:\*\*

\- Badge must be removed

\- Compliance claims invalid

\- Must recertify from scratch



---



\## Phase 8: Revocation



\### Revocation Triggers



Certification revoked if:

\- Governance violation (Level 3+)

\- Ethics violation confirmed

\- Compliance drift detected

\- Badge misuse

\- Fraud discovered



\*\*Process:\*\* Per `ESCALATION.md`



---



\### Revocation Execution



\*\*Steps:\*\*

1\. Investigation confirms violation

2\. Decision to revoke made

3\. Entry added to revocation registry

4\. Project notified (if contactable)

5\. Public notice issued

6\. Certificate status updated



\*\*Timeline:\*\*

\- Investigation: Per ESCALATION.md

\- Revocation: Immediate upon confirmation

\- Notice: Within 24 hours



---



\### Revocation Registry Entry



\*\*File:\*\* `9DA-Core/certification/REVOCATION-REGISTRY/revocations.json`



```json

{

&nbsp; "revocations": \[

&nbsp;   {

&nbsp;     "cert\_id": "CERT-0001-2026",

&nbsp;     "revoked\_date": "2026-02-15",

&nbsp;     "reason": "Governance violation - undeclared dependency",

&nbsp;     "severity": "Level-2",

&nbsp;     "reference": "https://github.com/9DAtm/9DA-Core/issues/123",

&nbsp;     "permanent": false,

&nbsp;     "reinstatement\_conditions": "Fix dependency declaration, resubmit"

&nbsp;   }

&nbsp; ]

}

```



---



\### Post-Revocation



\*\*Project must:\*\*

\- Remove badge within 7 days

\- Stop claiming certification

\- Fix violation

\- Resubmit for certification (if eligible)



\*\*Registry shows:\*\*

\- Status: "Revoked"

\- Reason: Public explanation

\- Reference: Link to evidence



\*\*Reinstatement:\*\*

\- Possible for Level 2-3 violations if remediated

\- Not possible for Level 4 (fraud)

\- Requires full recertification process



---



\## Workflow Automation



\### CI/CD Integration



Projects can automate compliance checking:



```yaml

\# .github/workflows/9da-compliance.yml

name: 9DA Compliance Check



on:

&nbsp; pull\_request:

&nbsp; push:

&nbsp;   branches: \[main]



jobs:

&nbsp; compliance:

&nbsp;   runs-on: ubuntu-latest

&nbsp;   steps:

&nbsp;     - uses: actions/checkout@v4

&nbsp;     

&nbsp;     - name: Install 9da-verify

&nbsp;       run: npm install -g @9da/verify

&nbsp;     

&nbsp;     - name: Generate compliance report

&nbsp;       run: 9da-verify compliance generate --output report.json

&nbsp;     

&nbsp;     - name: Validate report

&nbsp;       run: 9da-verify compliance validate report.json

&nbsp;     

&nbsp;     - name: Check revocation status

&nbsp;       if: env.CERT\_ID != ''

&nbsp;       run: 9da-verify cert check ${{ env.CERT\_ID }}

```



---



\## Cost Structure



\### Free Tier



\*\*9DA-Aware:\*\*

\- No cost



\*\*9DA-Compliant:\*\*

\- No cost

\- Self-verification



\*\*9DA-Certified (Open Source):\*\*

\- No cost for public repositories

\- Open source projects

\- Non-commercial use



---



\### Commercial Tier (TBD)



For commercial/private projects:

\- Certification fee: TBD

\- Quarterly recertification: TBD

\- Expedited review: TBD

\- Private audit trail: TBD



\*\*Revenue model:\*\*  

Support ecosystem maintenance and tooling development.



---



\## Support and Questions



\*\*Certification questions:\*\*

\- GitHub Discussions: `9DAtm/9DA-Core/discussions`

\- Tag: `certification`



\*\*Technical issues:\*\*

\- GitHub Issues: `9DAtm/9DA-Core/issues`

\- Tag: `certification-workflow`



\*\*Private inquiries:\*\*

\- Email: certification@9da.org (TBD)



---



\## Timeline Summary



| Phase | Activity | Duration |

|-------|----------|----------|

| Pre-Certification | Implement compliance | Varies |

| Report Generation | Run 9da-verify | Minutes |

| Submission | File request | 1 day |

| Review | Authority validation | 7 days |

| Signing | Cryptographic signature | 1 day |

| Publication | Registry update | 1 day |

| \*\*Total\*\* | \*\*Submission to badge\*\* | \*\*~10 days\*\* |



---



\## Final Constraint



Certification represents \*\*verified compliance at a point in time\*\*.



Compliance is not permanent. It requires ongoing maintenance.



Badge display without valid certification is fraud.



Fraud is enforced with zero tolerance.



---



\*\*Document Version:\*\* 1.0  

\*\*Last Updated:\*\* 2026-01-24  

\*\*Status:\*\* FINAL (ADR required for changes)  

\*\*Schema Compliance:\*\* N/A (normative process specification)

