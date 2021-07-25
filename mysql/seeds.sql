INSERT INTO department (id, name) 
VALUES (1, "Sales");

INSERT INTO role (id, title, salary, department_id) 
VALUES (1,"Manager", 20.00, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Paul", "Johnson", 1, 1);
