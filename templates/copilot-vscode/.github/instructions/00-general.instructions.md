---
applyTo: "**"
---

Follow existing repository patterns and naming.

- Keep patches focused on the requested scope.
- If multiple instruction files apply, follow the narrowest `applyTo` scope and call out conflicts.
- Prefer test-driven design for behavior changes: add or update a failing test first when feasible, then implement the fix.
- Add or update tests when behavior changes.
- Write tests in explicit Arrange/Act/Assert structure (clear setup, single action, explicit assertions).
- Explicitly call out assumptions, edge cases, and compatibility impact.
- Do not add dependencies unless requested.
