function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("output").innerHTML = minutes + ":" + seconds + " minutes left!!";
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function start() {
    var minutes = document.getElementById("timer").value;
    minutes = minutes*60
    console.log(minutes);
        display = document.querySelector('#time');
    startTimer(minutes);
};
