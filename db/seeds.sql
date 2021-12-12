INSERT INTO department
  (name)
VALUES
  ('Department1'),
  ('Department2'),
  ('Department3');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('T1', 100, 1),
  ('T2', 200, 2),
  ('T3', 300, 3);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('F1', 'L1', 1, NULL),
  ('F2', 'L2', 2, 1),
  ('F3', 'L3', 3, 1),
  ('F4', 'L4', 1, 2),
  ('F5', 'L5', 2, 2),
  ('F6', 'L6', 3, 3),
  ('F7', 'L7', 1, 3),
  ('F8', 'L8', 2, 4),
  ('F9', 'L9', 3, 4);
  
  