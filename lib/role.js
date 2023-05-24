const dbConnection = require('./connection');

class Role {

    static getAllRoles() {
        return dbConnection
                .promise()
                .query(`
                SELECT
                    role.id,
                    role.title,
                    role.salary,
                    department.name AS department
                FROM role
                    JOIN department on role.department_id = department.id`)
                .then(([rows, fields]) => rows)
                .catch((error) => {
                    throw error;
                });
        }
    static addRole(title, salary, departmentId) {
        return new Promise((resolve, reject) => {
            dbConnection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (error, results) => {
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