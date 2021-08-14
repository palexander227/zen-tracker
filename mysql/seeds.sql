INSERT INTO department (id, name) 
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Research and Development"),
       (4, "Human Resources");

INSERT INTO role (id, title, salary, department_id) 
VALUES (1,"Manager", 65000.00, 1),
       (2, "Engineer 1", 60000.00, 2),
       (3, "Engineer 2", 70000.00, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Paul", "Johnson", 1, 1),
       (2, "Wayne", "Shorter", 2, 1),
       (3, "Anna", "Klien", 3, 1);