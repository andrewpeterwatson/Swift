var easyEl = document.getElementById('easy');
var mediumEl = document.getElementById('medium');
var hardEl = document.getElementById('hard');

function inMovement() {
  TweenMax.to('.info', 1, {left: 800})
};
function outMovement() {
  TweenMax.to('.info', 1, {left:-1600});

}


setTimeout(inMovement, 0);
// var eventRemover = function() {
//     easyEl.removeEventListener('click', easyBtnFunc);
//     mediumEl.removeEventListener('click', medBtnFunc);
//     hardEl.removeEventListener('click', hardBtnFunc);
// }

function easyBtnFunc() {
  event.preventDefault();
  // eventRemover();
  outMovement();
  noOfDrops = 25;
  start = false;
  starting();
  setTimeout(setup, 1000);
  easyEl.disabled = true;
}
function medBtnFunc() {
  event.preventDefault();
  // eventRemover();
  outMovement();
  start = false;
  starting();
  noOfDrops = 50;
  setTimeout(setup, 1000);
  mediumEl.disabled = true;

}
function hardBtnFunc() {
  event.preventDefault();
  // eventRemover();
  outMovement();
  start = false;
  starting();
  noOfDrops = 100;
  setTimeout(setup, 1000);
  hardEl.disabled = true;

}

easyEl.addEventListener('click', easyBtnFunc);

mediumEl.addEventListener('click', medBtnFunc);

hardEl.addEventListener('click', hardBtnFunc);
