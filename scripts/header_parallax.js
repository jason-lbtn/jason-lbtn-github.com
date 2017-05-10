var header = document.getElementById('header');

function scroll_parallax() {
  header.style.backgroundPosition = "0px " + (-250 + window.pageYOffset / 4) + "px";
}

window.onscroll = scroll_parallax.bind(this);
