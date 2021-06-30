create or replace procedure check_age_eligibility(
    v_id in employee.empid%type, 
    v_name in employee.empname%type, 
    v_age in employee.age%type
)
as
begin 
    if v_age >=18 then
        insert into employee(empid,empname,age)values(v_id, v_name, v_age);
        dbms_output.put_line('Age valid - Record inserted');
    else
        dbms_output.put_line('Age invalid - Record not inserted');
    end if;
end; 
/