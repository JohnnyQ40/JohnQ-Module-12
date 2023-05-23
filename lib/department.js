const dbPool = require('./connection');

class Department {

    static getAllDepartments() {
        return new Promise((resolve, reject) => {
            dbPool.query('SELECT * FROM departments', (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results);
                    }
                });
            });
        }
    static addDepartment(name) {
        return new Promise((resolve, reject) => {
            dbPool.query('INSERT INTO departments (name) VALUES (?)', [name], (error, results) => {
                if (error) {
                    reject(error)
                    } else {
                    resolve(results.insertId);
                    }
                });
            });
        }
    }

module.exports = Department;