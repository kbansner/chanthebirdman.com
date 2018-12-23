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

function orientationChangeAction() {
  pauseVideo();
  if (window.orientation === 0) {
    video.setAttribute('playsinline', 'true');
    video.innerHTML = '<video playsinline><source src="./videos/phone-angles-music.m4v" type="video/mp4"></video>';
  }
  else {
    video.removeAttribute('playsinline');
    video.innerHTML = '<source src="./videos/desktop-angles-music.mp4" type="video/mp4">';
  }
  video = document.querySelector('video');
}
window.addEventListener('orientationchange', orientationChangeAction);
// Initial execution
if ("onorientationchange" in window) orientationChangeAction();

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

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    playButton.classList.add('hide');
    pauseVideo();
  }
  else {
    playButton.classList.remove('hide');
  }
});
