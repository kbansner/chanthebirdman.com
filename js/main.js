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

function doOnOrientationChange() {
  pauseVideo();
  if (window.orientation === 0) {
    $(video).replaceWith('<video playsinline><source src="./videos/phone-angles-music.m4v" type="video/mp4"></video>');
  }
  else {
    $(video).replaceWith('<video><source src="./videos/desktop-angles-music.mp4" type="video/mp4"></video>');
  }
  video = document.querySelector('video');
}
window.addEventListener('orientationchange', doOnOrientationChange);
// Initial execution
if ("onorientationchange" in window) doOnOrientationChange();

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
