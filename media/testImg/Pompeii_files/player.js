var canvas4 = document.getElementById("fireballs");
var ctx4 = canvas4.getContext("2d");

var ctx = document.getElementById("canvasPlayer");
var canvas = ctx.getContext("2d");

var heroHealth = 30;
var score = 0;
var imgBg;
var imgDrops;
var ballHeight = 80;
var ballWidth = 80;
var ballX = 0;
var ballY = 0;
var fallingDrops = [];
// var fate = -1;
var noOfDrops;




function drawBallz() {
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);


    for (var i=0; i< noOfDrops; i++) {
      ctx4.drawImage (fallingDrops[i].image, fallingDrops[i].ballX, fallingDrops[i].ballY, ballHeight, ballWidth); //The rain drop
      fallingDrops[i].ballY += fallingDrops[i].speed; //Set the falling speed
      if (fallingDrops[i].ballY > 750) {  //Repeat the raindrop when it falls out of view
        fallingDrops[i].ballY = - 25 //Account for the image size
        fallingDrops[i].ballX = Math.random() * 1300;    //Make it appear randomly along the width
      }

    }
}

function setup() {

  if (canvas4.getContext) {
          ctx4 = canvas4.getContext('2d');

  setInterval(drawBallz, 36);

  function FireBall() {
    this.height = ballHeight;
    this.width = ballWidth;
    this.speed = Math.random() * 4;
    this.image = new Image();
    this.image.src = 'http://vignette4.wikia.nocookie.net/mario/images/f/fa/494px-Fireball_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20131129222802';
  }

  for (var i = 0; i < noOfDrops; i++) {
      var fallingDr = new FireBall();
      // fallingDr["image"] =  new Image();

      fallingDr["ballX"] = Math.random() * 1300;
      fallingDr["ballY"] = - 1000;
      // fallingDr["speed"] = Math.random() * 9;
      fallingDrops.push(fallingDr);
      }

  }
}
setup();

var start = true;

var FPS = 30;

function starting() {
    setInterval(function() {
      update();
      draw();
    }, 1000/FPS);

};

function update() {}
function draw() {}

var textX = 50;
var textY = 50;

function update() {
  textX += 1;
  textY += 1;
}
var player = {
  color: "black",
  x: 220,
  y: 270,
  width: 10,
  height: 10,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

function draw() {
  canvas.clearRect(0, 0, 1000, 750);
  player.draw();
  playerBullets.forEach(function(bullet) {
  bullet.draw();
});
}
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = true;
    } else if(e.keyCode === 37) {
        leftPressed = true;
    } else if(e.keyCode === 32) {
      spacePressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = false;
    } else if(e.keyCode === 37) {
        leftPressed = false;
    } else if(e.keyCode === 32) {
      spacePressed = false;

    }

}
var pool = 0;
function update() {
  if (spacePressed) {
    if (pool < 5) {
    player.shoot();
    console.log(playerBullets[0].active);
    }
  } else if (leftPressed) {
      player.x -= 5;
    } else if (rightPressed) {
      player.x += 5;
    }
    score ++;
    checkCollisions();
    playerBullets.forEach(function(bullet) {
    bullet.update();
  });
}
var playerBullets = [];
function Bullet(I) {
  I.active = true;
  I.xVelocity = 0;
  I.yVelocity = -I.speed;
  I.width = 3;
  I.height = 3;
  I.color = "black";
  I.inBounds = function() {
    return I.x >= 0 && I.x <= 1000 &&
      I.y >= 0 && I.y <= 750;
  };

  I.draw = function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;
    I.active = I.active && I.inBounds();
    if (!I.active) {
      pool = 0;
      playerBullets = [];
      console.log(pool, playerBullets);
    } else {
      pool++;
    }
  };

  return I;
}
player.shoot = function() {
  var bulletPosition = this.midpoint();
  playerBullets.push(Bullet({
    speed: 10,
    x: bulletPosition.x,
    y: bulletPosition.y
  }));
};

player.midpoint = function() {
  return {
    x: this.x + this.width/2,
    y: this.y + this.height/2
  };
};

function gameOver() {
  var gameOv = document.getElementById('gameOverScreen')
  var endMessage = document.createElement('p')
  var scoreNum = document.createElement('p')
  gameOv.className = 'gameOverScreenBlack';
  scoreNum.className = 'overMessage';
  scoreNum.innerHTML = 'SCORE: ' + score;
  endMessage.className = 'overMessage';
  endMessage.innerHTML = 'GAME OVER';
  gameOv.appendChild(endMessage);
  gameOv.appendChild(scoreNum);

};


  playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });

  // function collisionDetection(object1,obeject2) {
  //   return (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
	// 	object1.y < object2.y + object2.height && object1.y + object1.height > object2.y)
  // }
  function checkCollisions() {
    // for (var i = 0; i < playerBullets.length; i++) {
    //     for (var i = 0; i < fallingDrops.length; i++) {
    //       if (playerBullets[i].x < fallingDrops[i].x + fallingDrops[i].width  && playerBullets[i].x + playerBullets[i].width  > fallingDrops[i].x &&
    //     		playerBullets[i].y < fallingDrops[i].y + fallingDrops[i].height && playerBullets[i].y + playerBullets[i].height > fallingDrops[i].y)
    //         {
    //           console.log("lava dead");
    //     };
    //   };
    // };
    for (var i = 0; i < fallingDrops.length; i++) {
      if (fallingDrops[i].ballY < player.y + player.height && fallingDrops[i].ballY + fallingDrops[i].height > player.y) {
        console.log("player died");
        heroHealth -= 1;
        }
      }
      if (heroHealth < 0) {
        fallingDrops = null;
        gameOver();
        noOfDrops = 0;
        // player.explode();
      }
    }
