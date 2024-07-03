import pg from 'pg';

export class Database {
    constructor() {
        this.pool = new pg.Pool({
            user: 'yourUsername',
            host: 'localhost',
            database: 'employee_tracker',
            password: 'yourPassword',
            port: 5432,
        });
    }

    async viewDepartments() {
        const res = await this.pool.query('SELECT * FROM departments ORDER BY id');
        console.table(res.rows);
    }

    async viewRoles() {
        const res = await this.pool.query('SELECT * FROM roles ORDER BY id');
        console.table(res.rows);
    }

    async viewEmployees() {
        const res = await this.pool.query(`
            SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, m.first_name AS manager_first_name, m.last_name AS manager_last_name
            FROM employees e
            JOIN roles r ON e.role_id = r.id
            JOIN departments d ON r.department_id = d.id
            LEFT JOIN employees m ON e.manager_id = m.id
            ORDER BY e.id
        `);
        console.table(res.rows);
    }

    // Methods for adding to the database...
}
