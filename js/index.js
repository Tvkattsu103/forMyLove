(function() {
  
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
      audio = new Audio('Beautiful-In-White-Shayne.mp3');
  console.log('wat', card);
  openB.addEventListener('click', function () {
    audio.play();
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    audio.pause();
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
