const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

function initialPrompt() {
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
        'update an employee role'
      ]
    })
    .then(({ choice }) => {
      switch (choice) {
        case 'view all departments':
          viewDepartments();
          break;
        case 'view all roles':
          viewRoles();
          break;
        case 'view all employees':
          viewEmployees();
          break;
        case 'add a department':
          addDepartment();
          break;
        case 'add a role':
          addRole();
          break;
        case 'add an employee':
          addEmployee();
          break;
        case 'update an employee role':
          updateEmployee();
          break;
        case 'reset database':
          resetDatabase();
          break;
      }
    })
}

function viewDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function viewRoles() {
  const sql = `SELECT *
  FROM role
  LEFT JOIN department On role.department_id = department.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function viewEmployees() {
  const sql = `SELECT * 
  FROM employee
  LEFT JOIN role On employee.role_id = role.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function addDepartment() {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params = inquirer.prompt(
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'name'
    }
  );

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function addRole() {
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
  const params = inquirer.prompt(
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'name'
    }
  );

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function addEmployee() {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  const params = inquirer.prompt(
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'name'
    }
  );

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

function updateEmployee() {
  const sql = `UPDATE employee SET ? = ? WHERE id = ?`;
  const params = inquirer.prompt(
    {
      type: 'input',
      message: 'What would you like to do?',
      name: 'name'
    }
  );

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.log('err');
    }
    console.table(rows);
  });
}

initialPrompt();