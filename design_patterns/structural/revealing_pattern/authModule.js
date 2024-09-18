// Suppose you're building a simple authentication system that tracks login attempts.
// You may want to keep sensitive details (like the count of attempts) private but allow specific actions to be public.

const AuthModule = (function() {
    let loginAttempts = 0;

    function login(username, password) {
        loginAttempts++;
        // Simulated login process (simplified)
        if (username === 'admin' && password === '123') {
            return 'Login successful!';
        }
        return 'Login failed!';
    }

    function getAttempts() {
        return loginAttempts;
    }

    function resetAttempts() {
        loginAttempts = 0;
    }

    return {
        login: login,
        getAttempts: getAttempts,
        resetAttempts: resetAttempts
    };
})();

console.log(AuthModule.login('admin', '123')); // Login successful!
console.log(AuthModule.getAttempts()); // 1
AuthModule.resetAttempts();
console.log(AuthModule.getAttempts()); // 0


// Explanation:
// Private State: The loginAttempts variable is private,
//                 ensuring it can't be modified from outside except through the public methods.

// Public Methods: login, getAttempts, and resetAttempts are revealed,
//                 forming the public interface for interacting with the module.