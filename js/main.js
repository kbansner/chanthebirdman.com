var vid = document.getElementById("bgvid");
var message = document.getElementById("message");
var pauseButton = document.querySelector("#videoButton");

function vidFade() {
  vid.classList.add("stop");
}

vid.addEventListener('ended', function() {
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stop");
  if (vid.paused) {
    vid.play();
    window.scrollTo(0,0);
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play Video";
  }
})
$(document).ready(function(){
  vid.pause();
  message.classList.add('show');
});

/* A simple and scalable hamburger menu using css transitions. */
var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});

$('.draw-opener').on('click', function(){
  $('.draw').toggleClass('open');
});
