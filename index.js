const inquirer = require('inquirer');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');
const displayTable = require('./lib/table');

const mainMenu = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do',
        choices: [
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'View all employees',
            'Add an employee',
            'Exit',
        ],
    },
];

async function handleMainMenu() {
    const { action } = await inquirer.prompt(mainMenu);

    switch(action) {
        case 'View all departments':
            const allDepartments = await Department.getAllDepartments();
            displayTable('Departments', allDepartments);
            //console.log(allDepartments);
            break;

        case 'View all roles':
            const allRoles = await Role.getAllRoles();
            displayTable('Roles', allRoles);
            //console.log(allRoles);
            break;

        case 'View all employees':
            const allEmployees = await Employee.getAllEmployees();
            displayTable('Employees', allEmployees);
            //console.log(allEmployees);
            break;

        case 'Add a department':
            const departmentName = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the department:',
                },
            ]);
            const newDepartment = await Department.addDepartment(departmentName.name);
            console.log(`New department added with ID: ${newDepartment}`);
            break;

        case 'Add a role':
            const roleDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the title of the roll:',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary of the roll:',
                },
                {
                    type: 'input',
                    name: 'departmentId',
                    message: 'Enter the departmentId of the roll:',
                },
            ]);
            const newRole = await Role.addRole(
                roleDetails.title,
                roleDetails.salary,
                roleDetails.departmentId
                );
            console.log(`New role added with ID: ${newRole}`);
            break;

        case 'Add an employee':
            const employeeDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:',
                },
                {
                    type: 'input',
                    name: 'roleId',
                    message: 'Enter the role ID of the employee:',
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Enter the managerID of the employee:',
                },
            ]);
            const newEmployee = await Employee.addEmployee(
                employeeDetails.firstName,
                employeeDetails.lastName,
                employeeDetails.roleId,
                employeeDetails.managerId || null
            );
            console.log(`New employee added with ID: ${newEmployee}`);
            break;

        case 'Exit':
            console.log('bye bye <3');
            process.exit();
    }

    handleMainMenu();
}

function startApplication() {
    console.log('Welcome to the Database System!')
    handleMainMenu();
}

startApplication();