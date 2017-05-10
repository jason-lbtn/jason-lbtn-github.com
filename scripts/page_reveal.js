(function(){
  var config = {
    viewFactor : 0.15,
    duration   : 800,
    distance   : "0px",
    scale      : 0.8,
    rotate: { x: 0, y: 0, z: 15 },
    reset: true
  }

  window.sr = new ScrollReveal(config)
})()

var block = {
  viewOffset: { top: 128 }
}

sr.reveal('.interest_element', block, 100);
sr.reveal('.skill_element', block, 100);
sr.reveal('.project_element', 100);
sr.reveal('.language_element', 100);
sr.reveal('.contest_element', 100);
sr.reveal('.trip_element', 100);
