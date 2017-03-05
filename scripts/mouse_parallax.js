var forms = new Array(10);

function getForms() {
    var i;
    for (i = 0; i < 10; i += 1) {
        forms[i] = document.getElementById("o" + i);
    }
}

function p_headScroll() {
    var title = document.getElementById('title');
    var parall = document.getElementById('o8');
    var anger = document.getElementById('o2');
    var code = document.getElementById('o1');
    title.style.top = -(window.pageYOffset / 3)+'px';
    parall.style.top = (window.pageYOffset / 3)+'px';
    anger.style.top = window.pageYOffset / 5 +'px';
    code.style.top = window.pageYOffset / 2 +'px';
}

$("#header").mousemove(function(event) {
    $("#header").css({"background-color": "rgb("+.5 * window.pageYOffset+","+0.5*event.pageY+","+.2 * event.pageX+")"});
});


window.onscroll = p_headScroll;