function display()
{
    var a= document.getElementById("sname").value;
    var b=document.getElementById("course").value;
    if(a!="")
    document.getElementById("greet").innerHTML="Hi,"+a+". You have successfully registered for the "+b+" course.";

    else
    document.getElementById("greet").innerHTML="Name cannot be empty";
}