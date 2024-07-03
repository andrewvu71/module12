INSERT INTO departments (name) VALUES ('IT'), ('HR'), ('Sales');

INSERT INTO roles (title, salary, department_id) VALUES 
('Developer', 70000, 1),
('HR Manager', 65000, 2),
('Sales Representative', 55000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
('Teest1', 'Test 1', 1, NULL),
('Test2', 'Test 2', 2, NULL),
('Test3', 'BTest3', 3, NULL);
