declare
r number(5);
area number(7,2);
pi constant number (3,2):=3.14;
begin
r:=3;
while r<=7
loop
area:=pi*power(r,2);
insert into Circle values(r,area );
r:=r+1;
end loop;
end;
/