var c = ["blue", "black", "yellow", "green","red"];
var i = 0;
function change(){
    document.body.bgColor = c[i];
    i=(i+1)%c.length;
    setTimeout(change,5000);   
}
