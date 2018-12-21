var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#play");

vid.addEventListener('ended', function() {
  // only functional if "loop" is removed
  vid.pause();
  vid.classList.add("stop");
});

pauseButton.addEventListener("click", function() {
  if (vid.paused) {
    vid.play();
    window.scrollTo(0,0);
    vid.classList.remove("stop");
  } else {
    vid.pause();
  }
})


$(document).ready(function(){
  $(window).scroll(function(){
    var s = $(this).scrollTop()
    //console.log('s', s);
    if (s > 100) {
      pauseButton.classList.add('hide');
      vid.pause();
    }
    else {
      pauseButton.classList.remove('hide');
    }
  })
});

var playButton = document.getElementById('play');
playButton.addEventListener('click', function(){
  playButton.classList.toggle('toggle');
});
