---
applyTo: "**"
---

# Context Engineering

When asking GitHub Copilot for assistance, follow these guidelines to get the most accurate and relevant help.

## Provide Sufficient Context

- Describe the goal clearly: what you are trying to accomplish, not just how
- Reference relevant files using the `#file:` syntax in your prompt
- Specify the language, framework, and any relevant libraries
- Include any constraints, requirements, or edge cases to consider

## Structure Your Prompts

- Start with a high-level description of the task
- Break complex requests into smaller, focused steps
- Mention any existing patterns or conventions to follow (e.g., "follow the pattern in `#file:config/.eslintrc.json`")
- Specify the expected output format when relevant (e.g., JSON, TypeScript interface, shell command)

## Reference Existing Code

- Use `#file:` references to point Copilot at related implementations
- Mention similar functions, components, or modules that already exist
- Describe how the new code should integrate with what already exists

## Clarify Scope

- State explicitly what should NOT be changed when modifying existing code
- Indicate whether backward compatibility is required
- Specify whether tests, documentation, or configuration files need updating
