const dbPool = require('./connection');

class Role {

    static getAllRoles() {
        return new Promise((resolve, reject) => {
            dbPool.query('SELECT * FROM roles', (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results);
                    }
                });
            });
        }
    static addEmployee(title, salary, departmentId) {
        return new Promise((resolve, reject) => {
            dbPool.query('INSERT INTO roles (title, salary, departmentId) VALUES (?, ?, ?)', [title, salary, departmentId], (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results.insertId);
                    }
                });
            });
        }
    }

module.exports = Role;