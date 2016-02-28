var easyEl = document.getElementById('easy');


function inMovement() {
  TweenMax.to('.info', 1, {left: 1325})
};
function outMovement() {
  TweenMax.to('.info', 1, {left:-1600});

}


setTimeout(inMovement, 0);


function easyBtnFunc() {
  event.preventDefault();
  outMovement();
  noOfDrops = 5;
  starting();
  setTimeout(setup, 1000);
  easyEl.disabled = true;
}


easyEl.addEventListener('click', easyBtnFunc);
