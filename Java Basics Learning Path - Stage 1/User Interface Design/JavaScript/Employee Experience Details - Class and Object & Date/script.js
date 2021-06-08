class Employee 
{
    constructor(name,designation,year_of_experience){
        this.name=name;
        this.designation=designation;
        this.year_of_experience=year_of_experience;
    }
    
}

function displayEmployee(name,designation,year_of_experience){
    var e=new createEmployee(name, designation, year_of_experience);
    if(validateObject(e)){
        var today=new Date();
        var year=parseInt(today.getFullYear());
        var z=parseInt(e.year_of_experience);
        var str=e.name+" is serving the position of "+e.designation+" since 20"+z;
    }
    return str;
    
}
function createEmployee(name, designation, year_of_experience)
{
    var emp = new Employee(name, designation, year_of_experience);
    return emp;
}

function validateObject(employee)
{
    return (employee instanceof Employee);
}