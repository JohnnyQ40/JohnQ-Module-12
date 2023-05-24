const dbConnection = require('./connection');

class Employee {

    static getAllEmployees() {
                return dbConnection
                .promise()
                .query(`
                SELECT 
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title,
            department.name AS department,
            role.salary,
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
            JOIN role on employee.role_id = role.id
            JOIN department on role.department_id = department.id
            LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        `)
                .then(([rows, fields]) => rows)
                .catch((error) => {
                    throw error;
                });
            }
    static addEmployee(firstName, lastName, roleID, managerID) {
        return new Promise((resolve, reject) => {
            dbConnection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleID, managerID], (error, results) => {
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