create or replace procedure p_ins_dept(par_dname in varchar2, par_loc in varchar2) is l_deptno number;
begin
   select max(DEPARTMENT_ID) into l_deptno from Department;
   insert into Department (DEPARTMENT_ID, DEPARTMENT_NAME, LOCATION_ID) values (nvl(l_deptno, 0) + 10, par_dname, par_loc);
end;
/
exec p_ins_dept('TESTING', 'CHN-102');
