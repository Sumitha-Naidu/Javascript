let ran;
do{
    ran = prompt("Enter a number : ");
}while(ran <= 0);
var list = [];
for (var i = 1; i <= ran; i++) {
    list.push(i);
}
console.log("Array of Numbers : "+list);

let odd = list.filter(num => num%2 != 0);
console.log("Only Odd numbers from List  : "+odd);

let cube = odd.map((cub)=>cub**3);
console.log("Cube of the Odd numbers : "+cube);