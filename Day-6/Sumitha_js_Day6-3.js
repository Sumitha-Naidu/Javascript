var name = prompt("Enter your name : ");
document.write("Hii "+name+"!!!<Br>");

const darkmode = document.getElementById('dark');
darkmode.onclick = function changeColor(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
setInterval(clock=>{
    let date = new Date();
    let t = date.toLocaleTimeString();
    document.getElementById('time').innerText = t;
},1000);
