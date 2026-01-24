\# Contributing to 9DA



Thank you for your interest in contributing to the 9DA Governance Protocol.



9DA is a \*\*governance framework\*\*, not a typical software project. Contributions must align with structural integrity, ethical constraints, and audit requirements.



---



\## Before Contributing



\### Understand the Principles



Read these documents in order:

1\. `START-HERE.md`

2\. `docs/MANIFESTO.md`

3\. `docs/ARCHITECTURE.md`

4\. `docs/ETHICS.md`

5\. `docs/GOVERNANCE.md`



\*\*Critical:\*\* 9DA prioritizes coherence over convenience. Contributions that weaken structural integrity will be rejected.



---



\## Types of Contributions



\### 1. Documentation Improvements



\*\*Acceptable:\*\*

\- Typo fixes

\- Clarification of existing concepts

\- Example additions

\- Link corrections

\- Formatting improvements



\*\*Not Acceptable:\*\*

\- Changing definitions

\- Weakening constraints

\- Adding ambiguity

\- Removing requirements



\*\*Process:\*\*

\- Submit PR directly

\- No ADR required

\- Quick review



---



\### 2. Architectural Proposals



\*\*Requires ADR:\*\*

\- Architecture invariant changes

\- Dependency matrix modifications

\- New schema introductions

\- Governance process changes



\*\*Process:\*\*

1\. Copy `adr/ADR-TEMPLATE.md`

2\. Fill all required sections

3\. Validate against `schemas/adr.schema.json`

4\. Submit PR with ADR

5\. Participate in review discussion

6\. Wait for acceptance decision



\*\*Timeline:\*\*

\- Minimum 7-day review period

\- Final arbiter approval required



---



\### 3. Schema Changes



\*\*Requires:\*\*

\- ADR with versioning impact

\- Backward compatibility analysis

\- Migration guide if breaking

\- Validation against existing documents



\*\*Process:\*\*

1\. Propose ADR for schema change

2\. Document impact on ecosystem

3\. Provide migration path

4\. Submit PR with schema + ADR

5\. Await acceptance



---



\### 4. Tooling Contributions



\*\*Guidelines:\*\*

\- Tools must enforce governance, not bypass it

\- Tools must be auditable

\- Tools must not introduce operational control

\- Tools must validate against schemas



\*\*Process:\*\*

1\. Discuss in GitHub Issues first

2\. Propose via ADR if significant

3\. Implement following approval

4\. Submit PR with tests

5\. Document usage



---



\### 5. Ethics Reviews



\*\*When Required:\*\*

\- New capability introduction

\- Scope expansion

\- Potential prohibited domain overlap



\*\*Process:\*\*

1\. Open Issue with `ethics-review` label

2\. Fill out ethics review template

3\. Document capability boundaries

4\. Wait for ethics review completion

5\. Incorporate findings into ADR



\*\*Timeline:\*\*

\- Review within 7 days

\- Resolution required before merge



---



\## Contribution Process



\### Step 1: Check Existing Work



Before starting:

\- Search existing Issues

\- Check open PRs

\- Review ADR directory

\- Look for related discussions



\### Step 2: Discuss Major Changes



For significant work:

\- Open GitHub Issue

\- Tag appropriately

\- Describe proposal

\- Get feedback before coding



\### Step 3: Make Changes



\*\*For documentation:\*\*

\- Edit directly

\- Test markdown rendering

\- Check links



\*\*For structural changes:\*\*

\- Create ADR first

\- Validate schemas

\- Test against examples

\- Update documentation



\### Step 4: Submit PR



\*\*PR Requirements:\*\*

\- Clear title and description

\- Reference related issues/ADRs

\- All checks passing

\- No merge conflicts



\*\*PR Description Should Include:\*\*

\- What changed

\- Why it changed

\- What ADR justifies it (if applicable)

\- Impact assessment

\- Testing performed



\### Step 5: Review Process



\*\*Expect:\*\*

\- Constructive feedback

\- Requests for clarification

\- Possible revision requests

\- Governance alignment checks



\*\*Timeline:\*\*

\- Initial response: 3-7 days

\- Full review: 7-14 days

\- Major proposals: 14-30 days



\### Step 6: Merge



\*\*Merged when:\*\*

\- All review feedback addressed

\- CI checks passing

\- ADR accepted (if required)

\- Final arbiter approval (for governance changes)



---



\## Development Setup



\### Prerequisites



\*\*For documentation:\*\*

\- Markdown editor

\- Git



\*\*For schema work:\*\*

\- Node.js 20+

\- `ajv-cli` for validation



\*\*For tooling:\*\*

\- See `tools/verifier/README.md`



\### Local Validation



```bash

\# Install validators

npm install -g ajv-cli



\# Validate ADR

ajv validate -s schemas/adr.schema.json -d adr/ADR-XXXX.json



\# Validate compliance report

ajv validate -s schemas/compliance-report.schema.json -d examples/compliance-report.example.json



\# Validate all schemas

for schema in schemas/\*.schema.json; do

&nbsp; echo "Validating $schema"

&nbsp; ajv compile -s "$schema"

done

```



---



\## PR Guidelines



\### Title Format



```

\[Type] Brief description



Examples:

\[Docs] Fix typo in ARCHITECTURE.md

\[ADR] Propose new certification level

\[Schema] Add optional field to compliance report

\[Tool] Implement 9da-verify signature checking

```



\### Types



\- `\[Docs]` - Documentation only

\- `\[ADR]` - Architectural Decision Record

\- `\[Schema]` - Schema modification

\- `\[Tool]` - Tooling change

\- `\[Fix]` - Bug fix

\- `\[Test]` - Test additions/fixes



\### Branch Naming



```

type/short-description



Examples:

docs/fix-ethics-typo

adr/propose-badge-levels

schema/add-revocation-field

```



\### Commit Messages



```

Type: Brief summary



Detailed explanation of what changed and why.



Refs: #123

ADR: ADR-0001

```



---



\## What We Look For



\### In Documentation PRs



✅ Clarity improvements

✅ Consistency with existing docs

✅ Proper markdown formatting

✅ Working links



❌ Changing meanings

❌ Weakening constraints

❌ Adding opinions as facts



\### In ADR Proposals



✅ Complete template usage

✅ Schema validation

✅ Impact analysis

✅ Clear rationale

✅ Alternatives considered

✅ Ethics review (if applicable)



❌ Incomplete sections

❌ Missing justification

❌ Bypassing invariants

❌ Unclear consequences



\### In Code Contributions



✅ Schema validation

✅ Error handling

✅ Documentation

✅ Tests

✅ Audit trail integration



❌ Operational control

❌ Hidden mechanisms

❌ Bypassing validation

❌ Unauditable behavior



---



\## Code of Conduct



All contributors must follow our \[Code of Conduct](CODE\_OF\_CONDUCT.md).



\*\*Key points:\*\*

\- Be respectful and professional

\- Focus on structural merit

\- No harassment or discrimination

\- Report violations appropriately



---



\## Recognition



Contributors will be:

\- Listed in PR and commit history

\- Acknowledged in CHANGELOG

\- Credited in related ADRs

\- Invited to discussions



Significant contributors may be:

\- Invited as reviewers

\- Given triage permissions

\- Acknowledged in releases



---



\## Questions



\*\*General questions:\*\*

\- GitHub Discussions

\- Tag: `question`



\*\*Technical issues:\*\*

\- GitHub Issues

\- Tag: `help wanted`



\*\*Private inquiries:\*\*

\- Email: governance@9da.org (TBD)



---



\## License



By contributing, you agree that your contributions will be licensed under the Apache License 2.0, the same license as this project.



See \[LICENSE](LICENSE) for full text.



---



\## Final Note



9DA values contributions that strengthen structural integrity, not those that add flexibility.



If your contribution cannot be justified within the governance framework, it will be rejected.



This is intentional. This is the point.



Quality over quantity. Coherence over features. Integrity over convenience.



---



\*\*Document Version:\*\* 1.0  

\*\*Last Updated:\*\* 2026-01-24  

\*\*Status:\*\* FINAL (ADR required for changes)

