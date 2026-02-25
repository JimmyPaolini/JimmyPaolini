---
applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx"
---

# Self-Explanatory Code and Commenting

Write code that communicates intent clearly through its structure and naming, minimizing the need for explanatory comments.

## Prefer Descriptive Names Over Comments

- Choose variable, function, and class names that make their purpose obvious
- A well-named function rarely needs a comment explaining what it does
- Avoid abbreviations that are not universally understood

## When to Write Comments

Write a comment only when the code alone cannot convey the full picture:

- **Why**, not what: explain the reasoning behind a non-obvious decision
- Known limitations or workarounds: document edge cases, browser quirks, or temporary hacks with a `// TODO:` or `// HACK:` tag
- Public API documentation: use JSDoc for exported functions and types

## Comment Style

- Keep comments concise and on a single line where possible
- Do not restate what the code already says (e.g., avoid `// increment counter` before `count++`)
- Remove commented-out code; use version control to recover old code instead

## JSDoc for Exported Symbols

```ts
/**
 * Formats a date value as an ISO 8601 string.
 *
 * @param date - The date to format
 * @returns ISO 8601 formatted string, e.g. "2024-01-15"
 */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}
```

## Avoid Magic Numbers and Strings

- Extract magic values into named constants
- Place constants near the code that uses them, or in a dedicated `constants.ts` file
