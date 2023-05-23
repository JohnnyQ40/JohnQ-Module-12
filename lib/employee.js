const dbPool = require('./connection');

class Employee {

    static getAllEmployees() {
        return new Promise((resolve, reject) => {
            dbPool.query('SELECT * FROM employees', (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results);
                    }
                });
            });
        }
    static addEmployee(firstName, lastName, roleID, managerID) {
        return new Promise((resolve, reject) => {
            dbPool.query('INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES (?, ?, ?, ?)', [firstName, lastName, roleID, managerID], (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results.insertId);
                    }
                });
            });
        }
    }

module.exports = Employee;