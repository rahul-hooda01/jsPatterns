// databaseConnection.js
const mysql = require('mysql2');

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mydb'
      });
      DatabaseConnection.instance = this;
    }
    return DatabaseConnection.instance;
  }

  // Method to get the connection
  getConnection() {
    return this.connection;
  }
}

const instance = new DatabaseConnection();
Object.freeze(instance);

module.exports = instance;
