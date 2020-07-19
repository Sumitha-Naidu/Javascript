function getPrime(){  
    var ran = document.getElementById("num").value;
    for(var i=2;i<=ran;i++)
    {
        var flag=true;
        for(var j=2;j<=i;j++)
        {
            if(i%j==0 && i!=j)
            {
                flag=false;
            }
        }
        if(flag==true)
        {
            document.write(i+"<br>");
        }
    }
}