$('#btn-id').click(function()
{
    $.getJSON('https://reqres.in/api/users?page=2',function(object)
        {
            var arr=object.data;
            for(var i=0;i<arr.length;i++)
            {
                $('#data-id').append('<li>'+arr[i]['id']+' -- '+arr[i]['email']+'</li>');
            }
        }
    );
});