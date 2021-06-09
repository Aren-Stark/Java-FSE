$(document).ready(function(){

    var $checkboxes = $('#form input[type="checkbox"]');
        
    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        if(countCheckedCheckboxes===1)
        $('#result').text(countCheckedCheckboxes +" box is checked");
        else
        $('#result').text(countCheckedCheckboxes +" boxes are checked");
    });

});