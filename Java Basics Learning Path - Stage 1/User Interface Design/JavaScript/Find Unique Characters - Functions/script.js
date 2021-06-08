function modifyString(str)
{
    str.trim();
 var a=str.split(' '). join('');
 
 return a.toLowerCase();
}

function uniqueCharacters(str)
{
 var string=modifyString(str);
 var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
            unique += string[i];
        }
    }
    return unique;
}  