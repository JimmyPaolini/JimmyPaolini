# Context Engineering Instructions

## Purpose

These instructions guide the creation and maintenance of context for AI-assisted development tools, ensuring they have the right information to assist effectively.

## Principles

### 1. Provide Relevant Context

- Include file paths that are directly related to the task
- Add documentation that explains the "why" behind decisions
- Reference related issues, PRs, or discussions

### 2. Be Specific and Concise

- Avoid overwhelming with too much information
- Focus on what's immediately relevant
- Use clear, unambiguous language

### 3. Structure Information Hierarchically

- Start with high-level overview
- Provide detailed information as needed
- Use clear headings and organization

### 4. Keep Context Up-to-Date

- Update documentation when code changes
- Remove outdated information
- Maintain accuracy over completeness

## Best Practices

### File References

When referencing files, use:

- Relative paths from repository root
- Specific line numbers when relevant
- Clear descriptions of file purpose

### Code Examples

- Keep examples minimal and focused
- Show input and expected output
- Include edge cases when relevant

### Technical Decisions

Document:

- Why a particular approach was chosen
- What alternatives were considered
- Any trade-offs made

### Dependencies

- List external dependencies explicitly
- Explain why each dependency is needed
- Note version constraints if important

## Anti-Patterns to Avoid

- Don't include entire file contents when a summary would suffice
- Avoid jargon without explanation
- Don't assume knowledge of internal conventions
- Don't omit necessary error handling details

## Context Types

### Task Context

- Clear objective statement
- Success criteria
- Scope boundaries (what's included/excluded)

### Code Context

- Relevant file paths
- Function/class relationships
- Data flow descriptions

### Domain Context

- Business logic explanations
- User requirements
- System constraints

## Review Checklist

- [ ] Is the context focused on the current task?
- [ ] Are all file references valid?
- [ ] Is the language clear and unambiguous?
- [ ] Are examples helpful and accurate?
- [ ] Is outdated information removed?
