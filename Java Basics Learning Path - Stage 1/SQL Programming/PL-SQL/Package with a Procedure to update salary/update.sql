CREATE OR REPLACE PACKAGE EMP_Designation AS
PROCEDURE EMP_Details
(
psr_design Employee.Designation%TYPE
, psr_Incentive NUMBER
);
END emp_designation;
/

CREATE OR REPLACE PACKAGE BODY EMP_Designation AS
PROCEDURE EMP_Details
(
psr_design employee.designation%TYPE
, psr_Incentive NUMBER
)
IS
BEGIN
UPDATE employee SET Employee.Salary = Employee.Salary + psr_Incentive
WHERE Designation = psr_design;
dbms_output.put_line(SQL%ROWCOUNT || ' employee(s) are updated.');
END EMP_Details;
END;
/