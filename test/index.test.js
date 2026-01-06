const { createLoginTracker } = require('../index');

describe('createLoginTracker function', () => {
  test('should return a function', () => {
    const mockUser = { username: "user1", password: "password123" };
    const loginFunc = createLoginTracker(mockUser);
    expect(typeof loginFunc).toBe('function');
  });

  test('should track failed login attempts', () => {
    const mockUser = { username: "user1", password: "password123" };
    const login = createLoginTracker(mockUser);
    
    expect(login("wrong")).toBe('Attempt 1: Login failed');
    expect(login("wrong")).toBe('Attempt 2: Login failed');
    expect(login("wrong")).toBe('Attempt 3: Login failed');
  });

  test('should lock after 3 failed attempts', () => {
    const mockUser = { username: "user1", password: "password123" };
    const login = createLoginTracker(mockUser);
    
    login("wrong1");
    login("wrong2");
    login("wrong3");
    
    expect(login("wrong4")).toBe('Account locked due to too many failed login attempts');
  });

  test('should allow successful login', () => {
    const mockUser = { username: "user1", password: "password123" };
    const login = createLoginTracker(mockUser);
    
    expect(login("password123")).toBe('Login successful');
  });

  test('should allow successful login after some failures', () => {
    const mockUser = { username: "user1", password: "password123" };
    const login = createLoginTracker(mockUser);
    
    expect(login("wrong")).toBe('Attempt 1: Login failed');
    expect(login("password123")).toBe('Login successful');
  });
});
