# StartupKit Findings Register (P1-P14)

## Closure Rule

A point may move to `closed` only when all three evidence links are present:

1. **artifact_proof** (code/doc change)
2. **behavior_proof** (happy-path run)
3. **resilience_proof** (failure-path run)

If any dependency in `depends_on` is still open, the point remains open even if all three evidence links exist.

## Register

| id | title | owner | due | depends_on | status | artifact_proof | behavior_proof | resilience_proof |
|---|---|---|---|---|---|---|---|---|
| P1 | Portability: remove absolute path usage | @mohamedameen | 2026-04-21 | - | closed | `docs/register-evidence/P1/artifact.md` | `docs/register-evidence/P1/behavior.md` | `docs/register-evidence/P1/resilience.md` |
| P2 | Installer correctness: deterministic init/upgrade/report | @mohamedameen | 2026-04-21 | P1 | closed | `docs/register-evidence/P2/artifact.md` | `docs/register-evidence/P2/behavior.md` | `docs/register-evidence/P2/resilience.md` |
| P3 | Consistency: canonical source-of-truth paths | @mohamedameen | 2026-04-21 | P1 | closed | `docs/register-evidence/P3/artifact.md` | `docs/register-evidence/P3/behavior.md` | `docs/register-evidence/P3/resilience.md` |
| P4 | Packaging: remove self-dependency | @mohamedameen | 2026-04-21 | - | closed | `docs/register-evidence/P4/artifact.md` | `docs/register-evidence/P4/behavior.md` | `docs/register-evidence/P4/resilience.md` |
| P5 | Session state robustness via machine-readable block | @mohamedameen | 2026-04-21 | P1,P3 | closed | `docs/register-evidence/P5/artifact.md` | `docs/register-evidence/P5/behavior.md` | `docs/register-evidence/P5/resilience.md` |
| P6 | Hard gate: broken references | @mohamedameen | 2026-04-21 | P3 | closed | `docs/register-evidence/P6/artifact.md` | `docs/register-evidence/P6/behavior.md` | `docs/register-evidence/P6/resilience.md` |
| P7 | Hard gate: absolute local paths | @mohamedameen | 2026-04-21 | P1 | closed | `docs/register-evidence/P7/artifact.md` | `docs/register-evidence/P7/behavior.md` | `docs/register-evidence/P7/resilience.md` |
| P8 | Hard gate: contract drift | @mohamedameen | 2026-04-21 | P3,P5,P12 | closed | `docs/register-evidence/P8/artifact.md` | `docs/register-evidence/P8/behavior.md` | `docs/register-evidence/P8/resilience.md` |
| P9 | Hard gate: missing required artifacts | @mohamedameen | 2026-04-21 | P3 | closed | `docs/register-evidence/P9/artifact.md` | `docs/register-evidence/P9/behavior.md` | `docs/register-evidence/P9/resilience.md` |
| P10 | Exception path with owner/expiry/rollback | @mohamedameen | 2026-04-21 | P6,P7,P8,P9 | closed | `docs/register-evidence/P10/artifact.md` | `docs/register-evidence/P10/behavior.md` | `docs/register-evidence/P10/resilience.md` |
| P11 | CI invokes doctor and smoke checks | @mohamedameen | 2026-04-21 | P6,P7,P8,P9 | closed | `docs/register-evidence/P11/artifact.md` | `docs/register-evidence/P11/behavior.md` | `docs/register-evidence/P11/resilience.md` |
| P12 | quick/standard/deep modes in heavy skills | @mohamedameen | 2026-04-21 | P5 | closed | `docs/register-evidence/P12/artifact.md` | `docs/register-evidence/P12/behavior.md` | `docs/register-evidence/P12/resilience.md` |
| P13 | Required output contracts | @mohamedameen | 2026-04-21 | P12 | closed | `docs/register-evidence/P13/artifact.md` | `docs/register-evidence/P13/behavior.md` | `docs/register-evidence/P13/resilience.md` |
| P14 | Doctor command rollout and adoption | @mohamedameen | 2026-04-21 | P6,P7,P8,P9,P11 | closed | `docs/register-evidence/P14/artifact.md` | `docs/register-evidence/P14/behavior.md` | `docs/register-evidence/P14/resilience.md` |
