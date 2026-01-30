# 9DA SDK

**Contradiction detection engine — finds conflicts in complex plans**

Run 9DA locally to find contradictions in policies, designs, and multi-constraint problems.

---

## What You Can Do

### 🎯 Approval Mode (Default)
**Goal:** Fix your plan until it works

**You get:**
- List of all contradictions
- Specific solutions to fix each one
- Ability to iterate until approved

**Example:**
```bash
node dist/cli/index-dual.js run examples/my-policy.json
```

**Output:** "NOT APPROVED — 8 contradictions. Here are 3 ways to fix them..."

---

### 🔬 Termination Mode
**Goal:** Prove something is mathematically impossible

**You get:**
- Mathematical proof of impossibility
- Exact contradictions that break it
- Evidence for audits/courts

**Example:**
```bash
node dist/cli/index-dual.js run examples/complex-problem.json --mode=termination
```

**Output:** "TERMINATED — Constraints A, C, F are structurally incompatible. Here's why..."

---

## Quick Start (3 Steps)

### 1. Install

```bash
npm install
npm run build
```

**Takes:** 2 minutes  
**Requires:** Node.js 18+  
**No API keys needed** — works offline

---

### 2. Run Example (Approval Mode)

```bash
node dist/cli/index-dual.js run examples/community-garden-simple.json
```

**You'll see:**
- 9 agents analyzing your constraints
- Contradictions found
- Solutions suggested
- Artifact saved to `./runs/`

**Takes:** 30 seconds

---

### 3. Run Example (Termination Mode)

```bash
node dist/cli/index-dual.js run examples/preventive-health-burnout.json --mode=termination
```

**You'll see:**
- Deep 54-dimensional analysis
- Proof of impossibility
- Mathematical evidence
- Artifact saved to `./runs/`

**Takes:** 1 minute

---

## How to Use Your Own Data

### Create a Task File

Save as `my-task.json`:

```json
{
  "id": "my-task-001",
  "description": "Brief description of what you're trying to do",
  "constraints": [
    "First requirement",
    "Second requirement",
    "Third requirement",
    "Fourth requirement"
  ],
  "domain": "Your Domain (e.g., Policy, Architecture, Product)",
  "timestamp": "2026-01-29T00:00:00Z"
}
```

### Run Analysis

```bash
# Approval mode (find fixes)
node dist/cli/index-dual.js run my-task.json

# Termination mode (prove impossibility)
node dist/cli/index-dual.js run my-task.json --mode=termination
```

### Get Results

**Location:** `./runs/9da-[mode]-[id]-[timestamp].json`

**Contains:**
- All contradictions found
- Solutions (if approval mode)
- Mathematical proof (if termination mode)
- Complete analysis from 9 dimensions

---

## Examples Included

### 1. Community Garden (Simple)
**File:** `examples/community-garden-simple.json`

**Constraints:** 6 compatible requirements

**Expected Result:**
- Approval Mode: APPROVED quickly
- Few or zero contradictions

**Good for:** Learning how approval works

---

### 2. Healthcare Policy (Complex)
**File:** `examples/preventive-health-burnout.json`

**Constraints:** 10 conflicting requirements

**Expected Result:**
- Approval Mode: NOT APPROVED with solutions
- Termination Mode: Proves impossibility

**Good for:** Seeing deep analysis in action

---

## Understanding the Output

### Approval Mode Output

```json
{
  "approval_status": "NOT_APPROVED",
  "evaluation_mode": "MultiDomain",
  "fault_summary": {
    "total_faults": 12,
    "clusters": [...]
  },
  "solutions": [
    {
      "solution_id": "SOLUTION_A",
      "title": "Reduce Scope to Bounded Context",
      "what_to_change": [
        "Limit universality to pilot context"
      ],
      "why_this_works": [
        "Removes scale contradiction"
      ],
      "what_this_enables": [
        "Zero-fault approval possible"
      ],
      "tradeoffs": [
        "Reduced scope — not universal"
      ]
    }
  ]
}
```

**Key fields:**
- `approval_status` — APPROVED or NOT_APPROVED
- `fault_summary` — What's broken
- `solutions` — How to fix it

---

### Termination Mode Output

```json
{
  "status": "TERMINATED",
  "reason": "CONTRADICTION_CEILING",
  "task": {
    "id": "health-001",
    "description": "..."
  },
  "summary": {
    "totalContradictions": 54,
    "globalCoherence": 0.35
  },
  "termination": {
    "type": "CONTRADICTION_CEILING",
    "explanation": "Structural impossibility detected"
  }
}
```

**Key fields:**
- `status` — TERMINATED
- `reason` — Why it terminated
- `totalContradictions` — How many conflicts
- `termination.explanation` — What broke

---

## Modes Explained

### MOCK Mode (Default)

**What it is:** Runs without AI APIs

**How it works:**
- Uses deterministic placeholder analysis
- Fast (seconds)
- Works offline
- No API costs

**When to use:**
- Testing
- Development
- Learning
- Quick prototypes

**How to run:**
```bash
node dist/cli/index-dual.js run task.json
# No flags needed — MOCK is default
```

---

### LIVE Mode (Production)

**What it is:** Uses real AI models

**How it works:**
- Calls Anthropic or OpenAI APIs
- Deep analysis
- Requires internet
- Costs API tokens

**When to use:**
- Production analysis
- Final reports
- Audit documentation
- High-stakes decisions

**How to run:**
```bash
# Set API key
export ANTHROPIC_API_KEY="sk-ant-..."

# Run with LIVE mode
node dist/cli/index-dual.js run task.json --live anthropic
```

**Supported providers:**
- `anthropic` — Claude Sonnet
- `openai` — GPT-4

---

## Command Reference

### Basic Usage

```bash
node dist/cli/index-dual.js run <file> [options]
```

### Options

| Option | Description | Example |
|--------|-------------|---------|
| `--mode=approval` | Help fix contradictions (default) | `--mode=approval` |
| `--mode=termination` | Prove impossibility | `--mode=termination` |
| `--live=anthropic` | Use Anthropic API | `--live=anthropic` |
| `--live=openai` | Use OpenAI API | `--live=openai` |

### Examples

```bash
# Approval mode (MOCK)
node dist/cli/index-dual.js run task.json

# Termination mode (MOCK)
node dist/cli/index-dual.js run task.json --mode=termination

# Approval mode (LIVE with Anthropic)
node dist/cli/index-dual.js run task.json --live anthropic

# Termination mode (LIVE with OpenAI)
node dist/cli/index-dual.js run task.json --mode=termination --live openai
```

---

## Exit Codes

### Approval Mode
- `0` — APPROVED (success!)
- `1` — NOT APPROVED (solutions provided)
- `2` — Invalid input
- `3` — Runtime error

### Termination Mode
- `0` — Clean termination (analysis complete)
- `1` — Contradiction ceiling reached
- `2` — Invalid input
- `3` — Runtime error

---

## How 9DA Analyzes

### 9 Fixed Dimensions (Always)

Every analysis uses these 9 perspectives:

1. **Essence** — Irreducible core
2. **Identity & Polarity** — Tensions
3. **Structure** — Spatial patterns
4. **Temporality** — Time dependencies
5. **Probability** — Risks
6. **Constraint Dynamics** — Feedback loops
7. **Integration** — Information flows
8. **Universality** — Scale effects
9. **Termination** — Closure conditions

**These never change.**

---

### 6 Reference Layers (Default)

If you don't specify custom layers, 9DA uses:

1. Awareness & Sensemaking
2. Economic & Incentive
3. Education & Knowledge
4. Governance & Authority
5. Security & Adversarial
6. Termination & Dissolution

**Result:** 9 dimensions × 6 layers = **54 perspectives**

---

### Custom Layers (Advanced)

You can define your own layers in the task file:

```json
{
  "id": "custom-001",
  "description": "My task",
  "constraints": [...],
  "layers": [
    {
      "id": "tech-1",
      "name": "Technical Layer",
      "description": "Technical constraints",
      "source": "USER_DEFINED"
    },
    {
      "id": "business-1",
      "name": "Business Layer",
      "description": "Business requirements",
      "source": "USER_DEFINED"
    }
  ]
}
```

**Result:** 9 dimensions × 2 custom layers = **18 perspectives**

---

## Solution Types (Approval Mode)

9DA suggests exactly 5 types of fixes:

### 1. Scope Reduction
**What:** Limit universal requirements to bounded contexts

**Example:** "All citizens" → "Pilot in 3 cities"

---

### 2. Constraint Rewrite
**What:** Change absolute requirements to conditional

**Example:** "Must be free" → "Free for income < $50k"

---

### 3. External Dependency Declaration
**What:** Make hidden dependencies explicit

**Example:** Add "Requires federal funding approval"

---

### 4. Temporal Staging
**What:** Break simultaneous requirements into phases

**Example:** "Launch in 2026" → "Phase 1: 2026, Phase 2: 2028"

---

### 5. Role Separation
**What:** Assign contradictory responsibilities to different actors

**Example:** "Single authority" → "Authority A for X, Authority B for Y"

---

## Troubleshooting

### Build Errors

**Error:** `Cannot find module 'commander'`

**Fix:**
```bash
npm install
```

---

**Error:** `dist/cli/index-dual.js not found`

**Fix:**
```bash
npm run build
```

---

### Runtime Errors

**Error:** "Anthropic API key required"

**Cause:** Running LIVE mode without API key

**Fix:**
```bash
export ANTHROPIC_API_KEY="your-key-here"
```

Or switch to MOCK mode (remove `--live` flag)

---

**Error:** TypeScript compilation errors

**Cause:** Missing or incorrect files

**Fix:** Re-download complete SDK from repository

---

## File Structure

```
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
│   ├── planetary-governance-proposal.json
│   └── community-garden-simple.json
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── TERMINATION_SEMANTICS.md


```

**Generated folders (ignored by Git):**
- `dist/` — Compiled JavaScript
- `node_modules/` — Dependencies
- `runs/` — Analysis outputs

---

## Next Steps

### 1. Try Examples
```bash
# Simple approval
node dist/cli/index-dual.js run examples/community-garden-simple.json

# Complex termination
node dist/cli/index-dual.js run examples/preventive-health-burnout.json --mode=termination
```

### 2. Analyze Your Own Data
Create `my-task.json` and run:
```bash
node dist/cli/index-dual.js run my-task.json
```

### 3. Review Outputs
Check `./runs/` for analysis artifacts

### 4. Iterate
- Apply suggested solutions
- Re-run until APPROVED
- Use termination proof if impossible

---

## Advanced Usage

### Custom Configuration

Edit `src/config/default.config.json`:

```json
{
  "executionMode": "MOCK",
  "parallelExecution": true,
  "timeoutMs": 300000
}
```

---

### Programmatic Use

```typescript
import { Executor } from './src/runtime/executor';
import { ApprovalEngine } from './src/modes/approval/engine';

const executor = new Executor();
const result = await executor.execute(taskContext);

const approvalEngine = new ApprovalEngine();
const artifact = await approvalEngine.evaluate(
  approvalContext,
  result.analyses,
  result.layerSyntheses
);
```

---

## Performance

### MOCK Mode
- **Time:** 10-60 seconds
- **Memory:** ~100 MB
- **Network:** None

### LIVE Mode (Anthropic)
- **Time:** 2-10 minutes
- **Memory:** ~200 MB
- **Network:** ~1 MB per analysis
- **Cost:** ~$0.10-0.50 per run

---

## Requirements

- **Node.js:** 18.0.0 or higher
- **RAM:** 512 MB minimum
- **Disk:** 100 MB for SDK
- **Network:** Not required (MOCK mode)

---

## Support

- **Issues:** GitHub Issues
- **Documentation:** See `../docs/`
- **Examples:** See `./examples/`

---

## License

See `../LICENSING-STATUS.md`

**Summary:**
- ✅ Free for evaluation and development
- ✅ MOCK mode free
- ⚠️ Production use requires certification

---

**Version:** 1.0.0  
**Last Updated:** 2026-01-29

© 2025 Zdenka Cucin. All Rights Reserved.
