# Prompt Engineering Instructions

## Purpose
Guidelines for crafting effective prompts when working with AI assistants, ensuring clear communication and optimal results.

## Core Principles

### 1. Be Clear and Specific
- State exactly what you want
- Avoid ambiguous language
- Include relevant constraints

**Bad:** "Fix the code"
**Good:** "Fix the TypeScript compilation error in user.service.ts by adding the missing return type annotation"

### 2. Provide Context
- Explain the current situation
- Describe what you've tried
- Mention relevant files or systems

### 3. Define Success Criteria
- What does "done" look like?
- How will you verify the result?
- What should not change?

### 4. Break Down Complex Tasks
- Divide large requests into steps
- Complete one step before moving to the next
- Validate intermediate results

## Prompt Structure

### Basic Template
```
[Context]
Current situation and relevant background

[Task]
What needs to be done

[Constraints]
Limitations and requirements

[Success Criteria]
How to verify completion
```

### Example
```
[Context]
We have an Express.js API with JWT authentication. The /api/users endpoint currently allows any authenticated user to view all users.

[Task]
Implement role-based access control (RBAC) so only users with the 'admin' role can access the /api/users endpoint.

[Constraints]
- Don't modify the JWT token structure
- Maintain backward compatibility with existing tokens
- Add middleware that can be reused for other endpoints

[Success Criteria]
- Admin users can access /api/users
- Non-admin users receive 403 Forbidden
- Existing tests still pass
- New tests verify RBAC behavior
```

## Prompt Patterns

### Code Review Pattern
```
Review the following code for:
1. [Specific aspect 1]
2. [Specific aspect 2]
3. [Specific aspect 3]

[Code snippet]

Focus on [specific concern] and suggest improvements.
```

### Debugging Pattern
```
I'm experiencing [problem description].

Current behavior:
- [What's happening]

Expected behavior:
- [What should happen]

Context:
- [Relevant code/config]
- [Steps taken]
- [Error messages]

Help me identify and fix the root cause.
```

### Implementation Pattern
```
Implement [feature] that:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

Technical approach:
- [Technology/pattern to use]

File structure:
- [Where to add code]

Acceptance criteria:
- [How to verify]
```

### Refactoring Pattern
```
Refactor [component/function] to:
- [Goal 1]
- [Goal 2]

Without changing:
- [Behavior to preserve]
- [API to maintain]

Consider:
- [Design pattern]
- [Best practice]
```

## Tips for Better Prompts

### Do
- Include file paths and line numbers
- Provide relevant error messages
- Specify programming language
- Mention version numbers
- Share what you've already tried
- Ask for explanations when learning

### Don't
- Assume context from previous conversations
- Use vague terms like "better" or "improve"
- Ask multiple unrelated questions at once
- Omit error messages or logs
- Forget to specify the programming language

## Common Scenarios

### "I need to understand this code"
```
Explain what this [language] code does:
[Code snippet]

Specifically, I don't understand:
1. [Specific line/concept]
2. [Another unclear part]

Please explain at a [beginner/intermediate/advanced] level.
```

### "Something is broken"
```
This [component] isn't working as expected.

What I'm seeing:
- [Actual behavior]
- [Error messages]

What I expect:
- [Expected behavior]

Environment:
- [Versions, platform, etc.]

Code:
- [Relevant snippets]
```

### "I want to add a feature"
```
Add a feature to [component] that allows users to [capability].

Requirements:
1. [Functional requirement]
2. [Non-functional requirement]

Integration points:
- [Existing code to work with]

Constraints:
- [Limitations]

Definition of done:
- [Verification steps]
```

### "I'm learning something new"
```
I'm learning [topic] and need help with [specific concept].

What I understand so far:
- [Current knowledge]

What I'm confused about:
- [Specific questions]

Please explain with:
- Simple examples
- Comparison to [familiar concept]
- Common pitfalls to avoid
```

## Iterative Refinement

### First Prompt
Start with a clear, focused request

### Follow-up Prompts
- "Can you explain [specific part] in more detail?"
- "How would this handle [edge case]?"
- "What are the trade-offs of this approach?"
- "Can you show an example of [specific scenario]?"

### Course Correction
- "That's not quite what I meant. Let me clarify..."
- "I need to add a constraint: [new requirement]"
- "Let's focus on [specific aspect] first"

## Anti-Patterns to Avoid

### The XY Problem
- Don't ask about your attempted solution
- Ask about your actual goal
- Explain what you're trying to achieve

### Information Overload
- Don't paste entire files
- Extract relevant sections
- Summarize when possible

### Assumption Dependency
- Don't assume AI remembers context
- Restate key information
- Be explicit about requirements

### Vague Requests
- "Make it better" → Specify what to improve
- "Fix this" → Describe the problem
- "Optimize" → Define optimization goals

## Checklist for Good Prompts

- [ ] Clear objective stated
- [ ] Relevant context provided
- [ ] Specific requirements listed
- [ ] Success criteria defined
- [ ] Constraints mentioned
- [ ] File paths included (if applicable)
- [ ] Error messages shared (if debugging)
- [ ] Language/framework specified
- [ ] Examples given (if helpful)
- [ ] Single, focused task

## Advanced Techniques

### Chain of Thought
Ask the AI to "think step by step" for complex problems

### Role Assignment
"Act as a [role] and help me with [task]"

### Comparative Analysis
"Compare [approach A] vs [approach B] for [use case]"

### Constraint Exploration
"What are the trade-offs of [approach]?"

## Remember

The quality of your prompts directly affects the quality of the assistance you receive. Invest time in crafting clear, specific prompts for better results.
