var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");

// var canvas4 = document.getElementById("fireballs");
// var ctx4 = canvas4.getContext("2d");

var img1 = document.createElement('img');
img1.src='http://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Grass-Grounds-Coverings-PNG-Clipart/Green_Grass_Ground_Picture.png?m=1399672800'
var img2 = document.createElement('img');
img2.src='http://latale.animemaestro.com/extracts/images/BACKGROUND/04S_BG_05_MOUNTAIN.PNG'
var img3 = document.createElement('img');
img3.src='https://w-dog.net/wallpapers/3/4/476000168363953/space-planet-satellite-sun-star-river-canyon-rock-sunset-dawn.jpg'

var mountainHeight = 600;
var groundHeight = 300;
var skyHeight = 960;
var imgWidth = 1300;
var imgOne = 0;
var imgTwo = 0;
var imgThree = 0;
// var dx = 2;
var dy = 2;
var x = Math.random() * 1000;
var y = 0;
var bally = 0;
var timer = 0;
var randNum = Math.random() * 13;



var rightPressed = false;
var leftPressed = false;

// var imgBg;
// var imgDrops;
// var x = 0;
// var y = 0;
// var fallingDrops = [];
// var fate = parseInt(prompt('Pick your fate (pick a number between 1 and 100)'));
// var noOfDrops = fate;
//
//
//
//
// function draw() {
//   ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
//
//
//     for (var i=0; i< noOfDrops; i++)
//     {
//     ctx4.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y, 80, 80); //The rain drop
//
//     fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
//     if (fallingDrops[i].y > 750) {  //Repeat the raindrop when it falls out of view
//     fallingDrops[i].y = -25 //Account for the image size
//     fallingDrops[i].x = Math.random() * 1300;    //Make it appear randomly along the width
//     }
//
//     }
// }
//
// function setup() {
//
//   if (canvas4.getContext) {
//           ctx4 = canvas4.getContext('2d');
//
//   setInterval(draw, 36);
//   for (var i = 0; i < noOfDrops; i++) {
//       var fallingDr = new Object();
//       fallingDr["image"] =  new Image();
//   fallingDr.image.src = 'http://vignette4.wikia.nocookie.net/mario/images/f/fa/494px-Fireball_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20131129222802';
//
//       fallingDr["x"] = Math.random() * 1300;
//       fallingDr["y"] = -1000;
//       fallingDr["speed"] = Math.random() * 9;
//       fallingDrops.push(fallingDr);
//       }
//
//   }
// }
//
//
//
//
// setup();
 

function draw1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    drawBackgroundImgOne();

  if(rightPressed && imgOne < 48) {
      imgOne += 1.75;
  }
  else if(leftPressed && imgOne > -48) {
      imgOne -= 1.75;
  };

};
function draw2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  drawBackgroundImgTwo();

  if(rightPressed && imgTwo < 48) {
    imgTwo += 1.5;
  }
  else if(leftPressed && imgTwo > -48) {
    imgTwo -= 1.5;
  };

};
function draw3() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  drawBackgroundImgThree();

  if(rightPressed && imgThree < 48) {
    imgThree += 1;
  }
  else if(leftPressed && imgThree > -48) {
    imgThree -= 1;
  };

};


function drawBackgroundImgOne() {
  ctx1.drawImage(img1,imgOne - 50, canvas1.height-groundHeight, imgWidth, groundHeight);

}
function drawBackgroundImgTwo() {
  ctx2.drawImage(img2,imgTwo - 50, canvas2.height-mountainHeight, imgWidth, mountainHeight);

}
function drawBackgroundImgThree() {
  ctx3.drawImage(img3,imgThree -50, canvas3.height-skyHeight, imgWidth, skyHeight);

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

setInterval(drawAll, 2);
// while (timer < 10) {
//   setupCircles();
//   timer++;
//
// }

function drawAll() {
  draw1();
  draw2();
  draw3();
  // drawA();

}
