document.getElementById("btn-id").onclick = function(){
/* Supporting Older IE Browsers */
var request;
if(window.XMLHttpRequest){
request = new XMLHttpRequest();
}
else {
request = new  ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'employee.json');
request.onreadystatechange = function(){
if((request.readyState === 4) && (request.status === 200)){
var items = JSON.parse(request.responseText);
console.log(items);
var output = "<ul>";
for(var key in items){
output += "<li>" + items[key].bio + "</li>";
}
output += "</ul>";
document.getElementById("err-id").innerHTML = output;
}
};		request.send();
  document.getElementById("err-id").innerHTML = "Error Message: Not found";
}