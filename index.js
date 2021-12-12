const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

class employeeDirectory {

  initialPrompt() {
    inquirer
      .prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee role',
          'reset database'
        ]
      })
      .then(({ choice }) => {
        switch (choice) {
          case 'view all departments':
            this.viewDepartments();
            break;
          case 'view all roles':
            this.viewRoles();
            break;
          case 'view all employees':
            this.viewEmployees();
            break;
          case 'add a department':
            this.addDepartment();
            break;
          case 'add a role':
            this.addRole();
            break;
          case 'add an employee':
            this.addEmployee();
            break;
          case 'update an employee role':
            this.updateEmployee();
            break;
          case 'reset database':
            this.resetDatabase();
            break;
        }
      })
  }

  viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log('test');
      }
      cTable(rows);
    })
  }

  viewRoles() {

  }

  viewEmployees() {

  }

  addDepartment() {

  }

  addRole() {

  }

  addEmployee() {

  }

  updateEmployee() {

  }

  resetDatabase() {

  }
}

