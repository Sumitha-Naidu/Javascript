sales = prompt("Enter the amount of sales this year : ");
var comm;
if(sales>0 && sales<=5000){
    comm = sales*0.02;
}
else if(sales>5001 && sales<=10000){
    comm = sales*0.05;
}
else if(sales>10001 && sales<=20000){
    comm = sales*0.07;
}
else if(sales>20000){
    comm = sales*0.1;
}
console.log("The commission is : "+comm);