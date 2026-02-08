---
applyTo: "**/kernel/**"
---

For kernel-space C code:

- If your tree does not use `kernel/`, update `applyTo` to match your module path.
- Use kernel APIs only; do not use libc assumptions, floating point, VLAs, or recursion in core paths.
- Preserve UAPI/ABI and userspace-visible behavior (ioctl layout, struct packing, error semantics).
- Return kernel-style errors (`-Exxx`) consistently and propagate failures explicitly.
- Validate all userspace inputs and lengths; use `copy_from_user`/`copy_to_user` patterns and check return values.
- Be explicit about context rules: do not sleep in atomic/IRQ contexts; choose GFP flags based on call context.
- Keep locking and memory ordering explicit. Document lock ordering and pair barriers/atomics correctly.
- Keep interrupt/trap-adjacent paths short, deterministic, and allocation-averse.
- Manage lifetimes and ownership explicitly (refcounting, pinning, cleanup on all exit paths).
- Prefer fixed-size buffers and overflow-safe helpers; avoid unchecked pointer arithmetic.
- Keep logging concise and rate-limited where needed; avoid noisy logs on hot paths.
- For behavior changes, update tests first when feasible (KUnit or integration coverage) and verify new failure modes.
- When generating tests, structure cases as Arrange/Act/Assert with one primary behavior under test.
