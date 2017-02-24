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

function wallpaperize(o) {
    document.getElementById("body").style.backgroundImage = 'url("pictures/wallpapers/forest-patrol.jpg")';
}

window.onscroll = p_headScroll;