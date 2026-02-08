---
applyTo: "**/tests/**"
---

For user-space integration tests (C++20):

- If your tree does not use `tests/`, update `applyTo` to match your integration test path.
- Use C++20 as the default language standard for integration test code unless the existing harness requires otherwise.
- Keep tests deterministic and hermetic: explicit setup/teardown, no hidden host dependencies.
- Validate full user -> kernel -> hypervisor behavior through public interfaces, not internal implementation details.
- Assert both success and failure semantics, including explicit error codes and expected side effects.
- Cover boundary conditions (sizes, alignment, permissions, feature flags, and invalid inputs), not only happy paths.
- Make each test self-cleaning on all exit paths (success, failure, timeout) to avoid cross-test contamination.
- Prefer event/predicate-based waiting with bounded timeouts over fixed sleeps; avoid flaky timing assumptions.
- Keep fixtures and helpers small, reusable, and versioned with the interface they exercise.
- Use table-driven or parameterized cases where behavior matrices exist.
- Include diagnostics that speed triage (input params, observed errno/status, and relevant IDs) without noisy logs.
- Add regression tests for every bug fix that crosses the user/kernel/hypervisor boundary.
- Prefer test-driven design: define the failing scenario first, then implement or adjust production code.
- Structure every test as Arrange/Act/Assert (comments or helper sections are acceptable) with a single clear Act step.
