import inquirer from 'inquirer';
import { Database } from './lib/Database.js';

const db = new Database();

async function mainMenu() {
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            await db.viewDepartments();
            break;
        case 'View all roles':
            await db.viewRoles();
            break;
        case 'View all employees':
            await db.viewEmployees();
            break;
        // Continue implementing other cases
        case 'Exit':
            console.log('Exiting the application.');
            process.exit();
    }

    await mainMenu(); // Recall the menu unless exiting
}

mainMenu();
