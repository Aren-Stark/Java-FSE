function wordPlay(number){
    var a=[];
   if(number>50)
   return "Range is High";
   else if(number<1)
   return "Not Valid";
   else
   {
       for(var i=1;i<=number;i++)
       {
           if(i%5==0&&i%3==0)
           a.push(" Jump");
           else if(i%3==0)
            a.push(" Tap");
           else if(i%5==0)
           a.push(" Clap");
           else
           a.push(" "+i);
       }
       return a.join('');
   }
}
