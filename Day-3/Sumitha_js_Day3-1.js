function check(a)
{
    var num = document.getElementById('age').value;
    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is an Even number';
    }else{
        document.getElementById('result').innerHTML = num + ' is an Odd number';
    }
}