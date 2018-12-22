var video = document.querySelector("video");
var playButton = document.querySelector("#play");

video.addEventListener('ended', function() {
  // only functional if "loop" is removed
  video.pause();
  video.classList.add("stop");
});

playButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    window.scrollTo(0,0);
    video.classList.remove("stop");
  } else {
    video.pause();
  }
});

$(document).ready(function(){
  var width = $(document).width();
  if (width < 600)
    $(video).append('<source src="./videos/phone-angles-music.mp4" type="video/mp4">');
  else
    $(video).append('<source src="./videos/desktop-angles-music.mp4" type="video/mp4">');
});

$(document).ready(function(){
  $(window).scroll(function(){
    var s = $(this).scrollTop()
    if (s > 100) {
      playButton.classList.add('hide');
      video.pause();
    }
    else {
      playButton.classList.remove('hide');
    }
  })
});

playButton.addEventListener('click', function(){
  playButton.classList.toggle('paused');
});
