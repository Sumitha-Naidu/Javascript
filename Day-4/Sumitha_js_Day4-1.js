for(i=1;i<=100;i++)
{
    if(i%3==0)
    {
        document.write(i+" fizz<br>");
        if(i%5==0)
        {
            document.write(i+" fizzbuzz<br>");
        }
    }
    else if(i%5==0)
    {
        document.write(i+" buzz<br>");
    }
}