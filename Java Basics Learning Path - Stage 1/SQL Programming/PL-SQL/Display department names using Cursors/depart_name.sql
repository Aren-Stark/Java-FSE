set serveroutput on;
DECLARE
DEPARTMENT_NAME VARCHAR2(25);
CURSOR dep_cursor IS SELECT DEPARTMENT_NAME FROM Department;
BEGIN
OPEN dep_cursor;
FETCH dep_cursor into DEPARTMENT_NAME;
DBMS_OUTPUT.PUT_LINE('Department Names are :');
begin
  for cur in (select distinct(department_name) from department order by department_name asc) loop
    dbms_output.put_line(cur.department_name);
  end loop;
end;

CLOSE dep_cursor;
END;