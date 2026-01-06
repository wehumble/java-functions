const { createLoginTracker } = require('./index');
console.log("Type of createLoginTracker:", typeof createLoginTracker);

const mockUser = { username: "test", password: "pass123" };
const loginFunc = createLoginTracker(mockUser);
console.log("Type of returned function:", typeof loginFunc);
console.log("Test with wrong password:", loginFunc("wrong"));
console.log("Test with correct password:", loginFunc("pass123"));
