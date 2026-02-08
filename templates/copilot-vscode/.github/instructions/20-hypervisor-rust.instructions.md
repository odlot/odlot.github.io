---
applyTo: "**/hypervisor/**"
---

For bare-metal hypervisor Rust code:

- If your tree does not use `hypervisor/`, update `applyTo` to match your Rust hypervisor path.
- Assume `#![no_std]`; do not use `std` APIs.
- Avoid allocation by default. If `alloc` is enabled, keep allocation sites explicit and justified.
- No panics on runtime paths. Return explicit error values and keep panic usage for unrecoverable faults only.
- Keep `unsafe` minimal and local. Each `unsafe` block must document invariants and caller/callee contracts.
- Use explicit MMIO and memory-ordering semantics. Do not replace volatile or barrier-sensitive code with ordinary loads/stores.
- Preserve AArch64 assumptions behind feature gates and architecture-specific modules.
- Avoid hidden control flow and implicit side effects in low-level paths (interrupt, trap, page table, context switch).
- Keep ABI boundaries explicit (`repr(C)`, layout assumptions, calling convention) and compatible with C/assembly interfaces.
- Prefer fixed-size/static storage for core paths. Avoid global mutable state without clear synchronization rules.
- Keep dependencies small and deterministic; avoid pulling in crates that assume OS services or unwinding.
- For behavior changes, update tests first when feasible (unit/harness/integration) and include negative-path coverage.
- When generating tests, structure cases as Arrange/Act/Assert with explicit preconditions and outcomes.
