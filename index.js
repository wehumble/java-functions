// Define the createLoginTracker function
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const correctPassword = userInfo.password;
  
  // Return the inner arrow function
  return (passwordAttempt) => {
    attemptCount++;
    
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    } else if (passwordAttempt === correctPassword) {
      return 'Login successful';
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

// Export the function - USE THIS SIMPLE EXPORT
module.exports = { createLoginTracker };
