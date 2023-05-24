const dbConnection = require('./connection');

class Department {

    static getAllDepartments() {
        return dbConnection
        .promise()
        .query(`
        SELECT
            *
        FROM department`)
        .then(([rows, fields]) => rows)
        .catch((error) => {
            throw error;
        });
    }
    static addDepartment(name) {
        return new Promise((resolve, reject) => {
            dbConnection.query('INSERT INTO department (name) VALUES (?)', [name], (error, results) => {
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