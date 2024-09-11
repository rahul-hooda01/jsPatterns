class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getSensitiveData() {
        return "Here is some sensitive data";
    }
}

class UserProxy {
    constructor(user) {
        this.user = user;
    }

    getSensitiveData() {
        if (this.user.role === "admin") {
            return this.user.getSensitiveData();
        } else {
            return "Access denied: You don't have permission to view this data.";
        }
    }
}

// Creating a user with admin role
const admin = new User("Alice", "admin");
console.log('admin--', admin);
const adminProxy = new UserProxy(admin);
console.log('adminProxy--', adminProxy);
console.log(adminProxy.getSensitiveData());  // Output: Here is some sensitive data

// Creating a user with guest role
const guest = new User("Bob", "guest");
const guestProxy = new UserProxy(guest);
console.log(guestProxy.getSensitiveData());  // Output: Access denied: You don't have permission to view this data.
