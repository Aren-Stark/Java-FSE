var feedbacks = [];
function addFeedback(){
 //Fill the required logic
 
 var feed = document.getElementById("feedback").value;
 feedbacks.push(feed);
 document.getElementById("feedback").innerHTML = "";
 document.getElementById("result").innerHTML = "<h2>Feedback Details</h2><h5>Successfully Added Feedback Details!</h5>"
}

function displayFeedback(){
    //Fill the required logic
    //document.write(feedbacks);
    var result = "<h2>Feedback Details</h2>";
    var n = 1;
    for(var i in feedbacks)
    {
        result += "Feedback "+n+"<br/>"+feedbacks[i]+"<br/>";
        n++;
    }
    
    document.getElementById("result").innerHTML = result;
    
    feedbacks = [];
}