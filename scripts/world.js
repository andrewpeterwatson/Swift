var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");

var canvas6 = document.getElementById("myCanvas6");
var ctx6 = canvas6.getContext("2d");

var canvas5 = document.getElementById("myCanvas5");
var ctx5 = canvas5.getContext("2d");

// var canvas6 = document.getElementById("fireballs");
// var ctx6 = canvas6.getContext("2d");

var img1 = document.createElement('img');
img1.src='media/img/mountainRange.png'
var img2 = document.createElement('img');
img2.src='media/img/volcano.png'
var img3 = document.createElement('img');
img3.src='media/img/background.png'
var img4 = document.createElement('img');
img4.src='media/img/playerPlane.png'
var img5 = document.createElement('img');
img5.src='media/img/canyonWall.png'

var mountainHeight = 600;
var groundHeight = 300;
var skyHeight = 960;
var imgWidth = 1300;
var imgOne = 0;
var imgTwo = 0;
var imgThree = 0;
var imgFour = 0;
var imgFive = 0;

// var dx = 2;
var dy = 2;
var x = Math.random() * 1000;
var y = 0;
var bally = 0;
var timer = 0;
var randNum = Math.random() * 13;



var rightPressed = false;
var leftPressed = false;


 

function draw1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    drawBackgroundImgOne();

  if(rightPressed && imgOne < 80) {
      imgOne += 1.75;
  }
  else if(leftPressed && imgOne > -80) {
      imgOne -= 1.75;
  };

};
function draw2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  drawBackgroundImgTwo();

  if(rightPressed && imgTwo < 60) {
    imgTwo += 1.25;
  }
  else if(leftPressed && imgTwo > -60) {
    imgTwo -= 1.25;
  };

};
function draw3() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  drawBackgroundImgThree();

  if(rightPressed && imgThree < 100) {
    imgThree += 1;
  }
  else if(leftPressed && imgThree > -100) {
    imgThree -= 1;
  };

};
function draw4() {
  ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
  drawBackgroundImgFour();

  if(rightPressed && imgFour < 100) {
    imgFour += 1;
  }
  else if(leftPressed && imgFour > -100) {
    imgFour -= 1;
  };

};
function draw5() {
  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
  drawBackgroundImgFive();

  if(rightPressed && imgFive < 98) {
    imgFive += 2.15;
  }
  else if(leftPressed && imgFive > -98) {
    imgFive -= 2.15;
  };

};



function drawBackgroundImgOne() {
  ctx1.drawImage(img1,imgOne - 50, canvas1.height-350, imgWidth, groundHeight);

}
function drawBackgroundImgTwo() {
  ctx2.drawImage(img2,imgTwo - 200, canvas2.height-mountainHeight, imgWidth, mountainHeight);

}
function drawBackgroundImgThree() {
  ctx3.drawImage(img3,imgThree -50, canvas3.height-skyHeight, imgWidth, skyHeight);

}
function drawBackgroundImgFour() {
  ctx6.drawImage(img4,imgFour -50, canvas6.height-skyHeight, 1000, 1100);

}
function drawBackgroundImgFive() {
  ctx5.drawImage(img5,imgFive - 100, canvas5.height-skyHeight, 1000, 1200);

}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(drawAll, 26);
// while (timer < 10) {
//   setupCircles();
//   timer++;
//
// }

function drawAll() {
  draw1();
  draw2();
  draw3();
  draw4();
  draw5();
  // drawA();

}
