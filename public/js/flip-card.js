let init = function() {

  document.getElementById('flip').addEventListener('click', function() {
    let card = document.querySelector('.active').childNodes[1];
    console.log(card);
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);