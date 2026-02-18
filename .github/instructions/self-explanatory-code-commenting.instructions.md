# Self-Explanatory Code and Commenting Instructions

## Purpose
Guidelines for writing code that is clear and self-documenting, with comments used judiciously to explain the "why" rather than the "what".

## Core Philosophy

**Code should be written to be read by humans first, machines second.**

The best comment is no comment at all – when the code itself is clear enough that comments would be redundant.

## When Code Should Be Self-Explanatory

### 1. Variable Names
**Bad:**
```typescript
const d = 86400000; // milliseconds in a day
const t = Date.now() + d;
```

**Good:**
```typescript
const MILLISECONDS_IN_DAY = 86400000;
const tomorrowTimestamp = Date.now() + MILLISECONDS_IN_DAY;
```

### 2. Function Names
**Bad:**
```typescript
// Processes the data
function process(data: any[]): any {
  return data.filter(x => x.active).map(x => x.value);
}
```

**Good:**
```typescript
function getActiveUserValues(users: User[]): number[] {
  return users
    .filter(user => user.active)
    .map(user => user.value);
}
```

### 3. Boolean Expressions
**Bad:**
```typescript
if (user.age >= 18 && user.status === 'verified' && !user.banned) {
  // grant access
}
```

**Good:**
```typescript
const isEligibleForAccess = user.age >= 18 
  && user.status === 'verified' 
  && !user.banned;

if (isEligibleForAccess) {
  grantAccess(user);
}
```

### 4. Magic Numbers
**Bad:**
```typescript
if (temperature > 98.6) {
  alert('Fever detected');
}
```

**Good:**
```typescript
const NORMAL_BODY_TEMP_F = 98.6;

if (temperature > NORMAL_BODY_TEMP_F) {
  alert('Fever detected');
}
```

## When Comments Are Necessary

### 1. Complex Algorithms
When the implementation is inherently complex:
```typescript
// Boyer-Moore string search algorithm for efficient pattern matching
// Time complexity: O(n/m) best case, O(n*m) worst case
function boyerMooreSearch(text: string, pattern: string): number {
  // Implementation...
}
```

### 2. Business Logic Explanations
When the code implements a business rule:
```typescript
// Per IRS regulations, contractors working >600 hours 
// or earning >$600 must receive 1099 forms
if (hours > 600 || earnings > 600) {
  generateForm1099(contractor);
}
```

### 3. Non-Obvious Trade-offs
When you make a conscious design decision:
```typescript
// Using setTimeout instead of setInterval to prevent
// overlapping executions if API call takes longer than interval
function scheduleNextPoll() {
  setTimeout(async () => {
    await fetchData();
    scheduleNextPoll();
  }, POLL_INTERVAL);
}
```

### 4. Workarounds and Hacks
When you have to work around a limitation:
```typescript
// WORKAROUND: API v2 has a bug where empty arrays are returned as null
// Remove this check once v3 is deployed (see ticket #1234)
const items = response.data ?? [];
```

### 5. TODO and FIXME
For temporary issues:
```typescript
// TODO: Add caching once Redis is configured (ticket #5678)
function getUserProfile(id: string): Promise<Profile> {
  return database.query('SELECT * FROM users WHERE id = ?', [id]);
}

// FIXME: This fails when username contains special characters
// Needs input sanitization (security issue #9012)
function searchUsers(username: string) {
  return database.query(`SELECT * FROM users WHERE username LIKE '%${username}%'`);
}
```

### 6. API Documentation
For public APIs and interfaces:
```typescript
/**
 * Validates a user's email address and sends confirmation.
 * 
 * @param email - The email address to validate
 * @param userId - The user's unique identifier
 * @returns Promise resolving to validation status
 * @throws {ValidationError} If email format is invalid
 * @throws {RateLimitError} If too many attempts in short period
 * 
 * @example
 * ```typescript
 * await validateEmail('user@example.com', 'user-123');
 * ```
 */
async function validateEmail(email: string, userId: string): Promise<ValidationStatus> {
  // Implementation...
}
```

## Anti-Patterns

### 1. Redundant Comments
**Bad:**
```typescript
// Increment counter by 1
counter++;

// Check if user is null
if (user === null) {
  // Return error
  return error;
}
```

### 2. Commented-Out Code
**Bad:**
```typescript
function processData(data: any[]) {
  // const filtered = data.filter(x => x.active);
  // const sorted = filtered.sort((a, b) => a.date - b.date);
  return data.map(x => x.value);
}
```
Use version control instead. Delete commented code.

### 3. Outdated Comments
**Bad:**
```typescript
// Returns user's full name
function getUserInfo(id: string): UserProfile {
  // Function was refactored but comment wasn't updated
  return { id, email, phone, address, preferences };
}
```

### 4. Misleading Comments
**Bad:**
```typescript
// Validates user input
function processUserInput(input: string): boolean {
  // Actually does sanitization, not validation
  return input.replace(/[<>]/g, '');
}
```

## Code Organization for Clarity

### 1. Function Size
Keep functions small and focused:
```typescript
// Good: Each function does one thing
function getActiveUsers(users: User[]): User[] {
  return users.filter(isActive);
}

function isActive(user: User): boolean {
  return user.status === 'active' && !user.suspended;
}
```

### 2. Early Returns
Reduce nesting with early returns:
```typescript
// Better
function processOrder(order: Order): Result {
  if (!order.isValid()) {
    return Result.error('Invalid order');
  }
  
  if (!order.inStock()) {
    return Result.error('Out of stock');
  }
  
  return order.process();
}
```

### 3. Descriptive Types
Use type aliases for clarity:
```typescript
type UserId = string;
type Timestamp = number;
type EmailAddress = string;

function sendNotification(
  userId: UserId, 
  email: EmailAddress, 
  scheduledAt: Timestamp
): Promise<void> {
  // Implementation is clearer with descriptive types
}
```

## Documentation Comments (JSDoc/TSDoc)

### When to Use
- Public API functions
- Complex return types
- Non-obvious parameters
- Important classes and interfaces

### Format
```typescript
/**
 * Brief one-line description.
 * 
 * Longer description with details about behavior,
 * edge cases, or important considerations.
 * 
 * @param param1 - Description of first parameter
 * @param param2 - Description of second parameter
 * @returns Description of return value
 * @throws {ErrorType} When this error occurs
 * 
 * @example
 * ```
 * const result = functionName(arg1, arg2);
 * ```
 * 
 * @see relatedFunction
 * @since v2.0.0
 */
```

## Testing as Documentation

Well-written tests serve as executable documentation:
```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid email', async () => {
      const user = await service.createUser('test@example.com');
      expect(user.email).toBe('test@example.com');
    });
    
    it('should throw error for invalid email format', async () => {
      await expect(
        service.createUser('invalid-email')
      ).rejects.toThrow(ValidationError);
    });
    
    it('should send confirmation email after creation', async () => {
      await service.createUser('test@example.com');
      expect(emailService.send).toHaveBeenCalled();
    });
  });
});
```

## README and Documentation Files

Project-level documentation should explain:
- **What**: What the project does
- **Why**: Why it exists / problem it solves
- **How**: How to use it
- **When**: When to use it vs alternatives

## Checklist

### Before Adding a Comment
- [ ] Could the code be rewritten to be clearer?
- [ ] Would better naming make the comment unnecessary?
- [ ] Is this explaining "why" rather than "what"?
- [ ] Will this comment stay accurate as code changes?
- [ ] Is this documenting a public API?

### Code Review
- [ ] Are function/variable names descriptive?
- [ ] Is complex logic broken into smaller pieces?
- [ ] Are magic numbers replaced with constants?
- [ ] Are comments explaining "why" not "what"?
- [ ] Is there no commented-out code?
- [ ] Are all comments accurate and up-to-date?

## Remember

> "Code is read far more often than it is written." - Guido van Rossum

Write code that is a pleasure to read. Use comments sparingly to explain context that code cannot express.
