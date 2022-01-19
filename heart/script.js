var heart = document.querySelector('.center-div'),
  hearbeat = document.getElementById('heartbeat');

heart.addEventListener('click', function() {
  if (!heart.classList.contains('active')) {
    heart.classList.add('active');
    heartbeat.play();
  } else {
    heart.classList.remove('active');
    heartbeat.pause();
    heartbeat.currentTime = 0;
  }
}, false);