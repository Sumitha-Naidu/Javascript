var quoteList = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "Take your first step with confidence. You do not have to look at the whole staircase. Climb the first step.",
    "The whole life of a fool is equal to the one day life of a wise man.",
    "The bored man sees the danger in every opportunity. The achiever sees opportunity in every danger.",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "Do one thing every day that scares you.",
    "Impossible is just an opinion.",
    "One day or day one. You decide.",
    "Hustle in silence and let your success make the noise.",
    "Some people want it to happen, some wish it would happen, others make it happen.",
    "It is better to work hard than to rust."
];

var colorList = ["Red","Green","Blue","Black","Yellow","Orange","Golden","Gray","Pink"];

function generate(){
    var quote = Math.floor(Math.random()*quoteList.length);
    var color = Math.floor(Math.random()*colorList.length);
    document.getElementById("display").innerHTML = quoteList[quote].fontcolor(colorList[color]);
}