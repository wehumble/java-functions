const { createLoginTracker } = require('./index');

console.log("=== Testing createLoginTracker ===\n");

// Test 1: Should return a function
const mockUser = { username: "test", password: "secret" };
const loginFunc = createLoginTracker(mockUser);
console.log("Test 1 - Returns function:", typeof loginFunc === 'function' ? "✓ PASS" : "✗ FAIL");

// Test 2: Should track attempts
const login1 = createLoginTracker({ username: "u1", password: "p1" });
console.log("\nTest 2 - Track attempts:");
console.log("  Wrong attempt 1:", login1("wrong"));
console.log("  Wrong attempt 2:", login1("wrong"));
console.log("  Wrong attempt 3:", login1("wrong"));
console.log("  After 3 wrong:", login1("wrong"));

// Test 3: Should allow correct login
const login2 = createLoginTracker({ username: "u2", password: "correct" });
console.log("\nTest 3 - Correct login:");
console.log("  First attempt correct:", login2("correct"));

// Test 4: Should allow correct after wrong
const login3 = createLoginTracker({ username: "u3", password: "pass" });
console.log("\nTest 4 - Correct after wrong:");
console.log("  Wrong:", login3("wrong"));
console.log("  Then correct:", login3("pass"));

console.log("\n=== All tests completed ===");
