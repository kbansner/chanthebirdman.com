var video = document.querySelector('video');
var playButton = document.querySelector('#play');

video.addEventListener('ended', function() {
  // only functional if "loop" is removed
  video.classList.add('stop');
  pauseVideo();
});

playButton.addEventListener('click', function() {
  if (video.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
});

var width = $(document).width();
if (width < 600)
  $(video).append('<source src="./videos/phone-angles-music.m4v" type="video/mp4">');
else
  $(video).append('<source src="./videos/desktop-angles-music.mp4" type="video/mp4">');

function playVideo(){
  window.scrollTo(0,0);
  video.play();
  video.classList.remove('stop');
  playButton.classList.add('playing');
}

function pauseVideo(){
  video.pause();
  playButton.classList.remove('playing');
}

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if (scrollTop > 100) {
      playButton.classList.add('hide');
      pauseVideo();
    }
    else {
      playButton.classList.remove('hide');
    }
  })
});
