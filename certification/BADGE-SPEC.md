\# BADGE-SPEC.md



\## Purpose



This document defines the specification for 9DA compliance badges, their visual representation, issuance criteria, display rules, and revocation linkage.



Badges represent verifiable compliance, not aspirational goals.



---



\## Badge Levels



\### Level 0: No Badge



\*\*Status:\*\* Not compliant  

\*\*Display:\*\* None allowed  

\*\*Meaning:\*\* Project has not demonstrated compliance



\*\*Prohibitions:\*\*

\- Cannot use "9DA" in marketing

\- Cannot claim any compliance

\- Cannot display any badge



---



\### Level 1: 9DA-Aware



\*\*Status:\*\* Partial adoption  

\*\*Badge Color:\*\* Gray  

\*\*Badge Text:\*\* `9DA-AWARE`



\*\*Requirements:\*\*

\- Declared intent to adopt 9DA

\- Started ADR process

\- Referenced 9DA-Core in README

\- No compliance verification required



\*\*Allowed:\*\*

\- Display badge in README

\- State "adopting 9DA governance"

\- Link to 9DA-Core



\*\*Prohibited:\*\*

\- Claim compliance

\- Use in marketing as certification

\- Imply verification



\*\*Visual:\*\*

```

┌─────────────────┐

│   9DA-AWARE     │

│   \[In Progress] │

└─────────────────┘

```



\*\*SVG Badge:\*\* (to be provided)



---



\### Level 2: 9DA-Compliant



\*\*Status:\*\* Structurally compliant  

\*\*Badge Color:\*\* Blue  

\*\*Badge Text:\*\* `9DA-COMPLIANT`



\*\*Requirements:\*\*

\- All ADRs validate against schema

\- Dependency matrix compliance verified

\- Architecture invariants preserved

\- Ethics constraints respected

\- Self-assessment passed



\*\*Allowed:\*\*

\- Display badge in README

\- State "9DA-compliant"

\- Reference compliance in docs



\*\*Prohibited:\*\*

\- Claim certification (requires signature)

\- Use for commercial claims without certification

\- Display without maintaining compliance



\*\*Visual:\*\*

```

┌─────────────────┐

│ 9DA-COMPLIANT   │

│ \[Verified]      │

└─────────────────┘

```



\*\*SVG Badge:\*\* (to be provided)



\*\*Verification:\*\*

\- Self-assessed (no signature required)

\- Must pass all schema validations

\- Must document compliance evidence



---



\### Level 3: 9DA-Certified



\*\*Status:\*\* Cryptographically certified  

\*\*Badge Color:\*\* Green  

\*\*Badge Text:\*\* `9DA-CERTIFIED`



\*\*Requirements:\*\*

\- All Level 2 requirements

\- Formal compliance report generated

\- Report signed by 9DA authority

\- Signature verifiable via public key

\- Listed in certification registry



\*\*Allowed:\*\*

\- Display badge in README

\- State "9DA-certified"

\- Use in marketing materials

\- Display certification ID

\- Link to signed compliance report



\*\*Prohibited:\*\*

\- Modify badge design

\- Display if certification revoked

\- Transfer certification to other projects



\*\*Visual:\*\*

```

┌─────────────────────────┐

│   9DA-CERTIFIED         │

│   \[ID: CERT-0001-2026]  │

│   \[Valid: 2026-Q1]      │

└─────────────────────────┘

```



\*\*SVG Badge:\*\* (to be provided)



\*\*Verification:\*\*

\- Compliance report at specified URL

\- Cryptographic signature present

\- Signature validates against public key

\- Not in revocation registry



---



\## Badge Visual Specifications



\### Design Elements



\*\*Typography:\*\*

\- Font: `Inter` or `Roboto Mono`

\- Size: Title 16px, Subtitle 12px

\- Weight: Bold for title, Regular for subtitle



\*\*Colors:\*\*

\- \*\*9DA-Aware:\*\* `#6B7280` (gray)

\- \*\*9DA-Compliant:\*\* `#3B82F6` (blue)

\- \*\*9DA-Certified:\*\* `#10B981` (green)



\*\*Dimensions:\*\*

\- Width: 200px

\- Height: 60px

\- Corner radius: 4px

\- Border: 2px solid (same color as background)



\*\*Layout:\*\*

```

┌─────────────────────────┐

│ ← 10px padding         │

│                         │

│  9DA-CERTIFIED          │  ← Title (16px bold)

│  \[ID: CERT-XXXX-YYYY]   │  ← Subtitle (12px)

│  \[Valid: YYYY-QX]       │  ← Status (12px)

│                         │

│         ← 10px padding  │

└─────────────────────────┘

```



---



\## Badge Issuance



\### For 9DA-Aware



\*\*Process:\*\*

1\. Project adopts 9DA governance

2\. References 9DA-Core in README

3\. Downloads badge from 9DA-Core repo

4\. Displays with proper attribution



\*\*No verification required\*\*



---



\### For 9DA-Compliant



\*\*Process:\*\*

1\. Project implements 9DA requirements

2\. Runs schema validation locally

3\. Generates self-assessment report

4\. Documents evidence in repository

5\. Downloads compliant badge

6\. Displays with link to evidence



\*\*Self-verification required\*\*



---



\### For 9DA-Certified



\*\*Process:\*\*

1\. Project meets all compliance requirements

2\. Generates compliance report via 9da-verify tool

3\. Submits report for certification

4\. 9DA authority validates report

5\. Report is cryptographically signed

6\. Signature published in registry

7\. Certificate ID issued

8\. Badge downloaded with certificate ID

9\. Displayed with link to signed report



\*\*External verification required\*\*



\*\*Timeline:\*\*

\- Submission to review: 7 days

\- Review to signature: 3 days

\- Total: ~10 days



\*\*Cost:\*\*

\- Free for open source projects

\- (Commercial certification fees TBD)



---



\## Badge Display Rules



\### Placement



\*\*Allowed locations:\*\*

\- Project README.md (top section)

\- Documentation homepage

\- Repository about/description

\- Project website

\- Marketing materials (Certified only)



\*\*Prohibited locations:\*\*

\- Product UI (9DA governs structure, not products)

\- Email signatures (personal claims not allowed)

\- Social media as personal accomplishment



---



\### Required Attribution



All badges must link to:

```markdown

\[!\[9DA-Certified](badge-image-url)](https://github.com/9DAtm/9DA-Core)

```



For certified badges, also link to:

```markdown

Certification: \[CERT-0001-2026](https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.json)

```



---



\### Prohibited Modifications



\*\*Cannot:\*\*

\- Change badge colors

\- Alter badge text

\- Resize disproportionately

\- Add custom text or icons

\- Modify design elements

\- Create derivative badges



\*\*Can:\*\*

\- Scale proportionally

\- Add drop shadow for contrast

\- Adjust opacity if over image



---



\## Badge Verification



\### For Viewers



Anyone can verify a badge claim:



\*\*9DA-Aware:\*\*

\- Check if 9DA-Core is referenced

\- No formal verification



\*\*9DA-Compliant:\*\*

\- Check for compliance evidence in repo

\- Run schema validators

\- Verify ADR structure



\*\*9DA-Certified:\*\*

1\. Note the certificate ID from badge

2\. Visit: `https://github.com/9DAtm/9DA-Core/certification/\[CERT-ID].json`

3\. Verify signature using public key

4\. Check revocation registry

5\. Confirm validity period



\*\*Command-line verification:\*\*

```bash

9da-verify cert check \[CERT-ID]

```



---



\## Revocation and Expiry



\### Revocation Triggers



Certifications are revoked if:

\- Governance violation discovered (Level 3+)

\- Compliance drift detected

\- Ethical violation confirmed

\- Badge misuse or fraud



\*\*Process:\*\*

1\. Violation detected/reported

2\. Investigation per ESCALATION.md

3\. If confirmed → revocation

4\. Entry added to revocation registry

5\. Badge must be removed within 7 days

6\. Public notice issued



---



\### Expiry



\*\*9DA-Aware:\*\*

\- No expiry (aspirational)



\*\*9DA-Compliant:\*\*

\- No expiry

\- Must maintain compliance

\- Self-monitoring required



\*\*9DA-Certified:\*\*

\- Valid for: 90 days (1 quarter)

\- Must recertify quarterly

\- Expired certificates invalid

\- Grace period: 14 days



\*\*Recertification:\*\*

\- Required every quarter

\- Validates continued compliance

\- May catch drift or violations

\- Same process as initial certification



---



\## Badge Registry



\### Public Registry



\*\*Location:\*\* `https://github.com/9DAtm/9DA-Core/certification/registry.json`



\*\*Contents:\*\*

```json

{

&nbsp; "version": "1.0",

&nbsp; "last\_updated": "2026-01-24",

&nbsp; "certifications": \[

&nbsp;   {

&nbsp;     "cert\_id": "CERT-0001-2026",

&nbsp;     "project": "Example Project",

&nbsp;     "repository": "https://github.com/example/project",

&nbsp;     "level": "9DA-Certified",

&nbsp;     "issued\_date": "2026-01-24",

&nbsp;     "valid\_until": "2026-04-24",

&nbsp;     "report\_url": "https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.json",

&nbsp;     "signature\_url": "https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.sig",

&nbsp;     "status": "Active"

&nbsp;   }

&nbsp; ],

&nbsp; "revoked": \[

&nbsp;   {

&nbsp;     "cert\_id": "CERT-0000-2025",

&nbsp;     "revoked\_date": "2026-01-20",

&nbsp;     "reason": "Governance violation",

&nbsp;     "reference": "https://github.com/9DAtm/9DA-Core/issues/999"

&nbsp;   }

&nbsp; ]

}

```



---



\## Misuse and Enforcement



\### Prohibited Uses



\*\*Cannot:\*\*

\- Display badge without meeting requirements

\- Forge certification signatures

\- Modify badge after issuance

\- Transfer badge to other projects

\- Display revoked badge

\- Claim certification without signature



\*\*Violations result in:\*\*

\- Permanent ban from certification

\- Public notice of fraud

\- Revocation of all certifications

\- Possible legal action



---



\### Reporting Misuse



To report badge misuse:

1\. Open issue: `9DAtm/9DA-Core/issues`

2\. Tag: `badge-misuse`

3\. Include: Screenshot, URL, evidence

4\. Timeline: Review within 7 days



\*\*Enforcement:\*\*

\- Takedown request (if hosted on GitHub)

\- Public notice of violation

\- Revocation registry entry

\- DMCA if necessary



---



\## Badge Assets



\### Download Locations



\*\*SVG formats:\*\*

```

https://github.com/9DAtm/9DA-Core/badges/aware.svg

https://github.com/9DAtm/9DA-Core/badges/compliant.svg

https://github.com/9DAtm/9DA-Core/badges/certified.svg

```



\*\*PNG formats (for legacy):\*\*

```

https://github.com/9DAtm/9DA-Core/badges/aware.png

https://github.com/9DAtm/9DA-Core/badges/compliant.png

https://github.com/9DAtm/9DA-Core/badges/certified.png

```



\*\*Sizes:\*\*

\- Standard: 200x60px

\- Large: 400x120px

\- Small: 100x30px



---



\## Markdown Examples



\### 9DA-Aware



```markdown

\[!\[9DA-Aware](https://github.com/9DAtm/9DA-Core/badges/aware.svg)](https://github.com/9DAtm/9DA-Core)



This project is adopting 9DA governance principles.

```



---



\### 9DA-Compliant



```markdown

\[!\[9DA-Compliant](https://github.com/9DAtm/9DA-Core/badges/compliant.svg)](https://github.com/9DAtm/9DA-Core)



This project is structurally compliant with 9DA governance.



\*\*Compliance Evidence:\*\* \[/docs/9DA-COMPLIANCE.md](/docs/9DA-COMPLIANCE.md)

```



---



\### 9DA-Certified



```markdown

\[!\[9DA-Certified](https://github.com/9DAtm/9DA-Core/badges/certified.svg)](https://github.com/9DAtm/9DA-Core)



This project is cryptographically certified as 9DA-compliant.



\*\*Certificate:\*\* \[CERT-0001-2026](https://github.com/9DAtm/9DA-Core/certification/CERT-0001-2026.json)  

\*\*Valid:\*\* 2026-Q1 (Jan 24 - Apr 24)  

\*\*Verify:\*\* `9da-verify cert check CERT-0001-2026`

```



---



\## Future Badge Levels



\*\*Under consideration:\*\*

\- 9DA-Audited (third-party audit)

\- 9DA-Exemplary (best practices)

\- 9DA-Ecosystem (multiple repos)



\*\*Not planned:\*\*

\- Badge levels beyond certification

\- Commercial-only badge tiers

\- Pay-for-badge schemes



---



\## Final Constraint



Badges represent \*\*verifiable reality\*\*, not \*\*declared intent\*\*.



Display without compliance is fraud.



Fraud is enforced per ESCALATION.md Level 4.



---



\*\*Document Version:\*\* 1.0  

\*\*Last Updated:\*\* 2026-01-24  

\*\*Status:\*\* FINAL (ADR required for changes)  

\*\*Schema Compliance:\*\* N/A (normative specification)

