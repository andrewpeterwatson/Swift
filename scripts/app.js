

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var playerHeight = 10;
var playerWidth = 10;
var playerX = (canvas.width - playerWidth) / 2;
var bulletHeight = 10;
var bulletWidth = 10;
var bulletX = (canvas.width - bulletWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBullet() {
    ctx.beginPath();
    ctx.rect(playerX, y, bulletWidth, bulletHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


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


function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, canvas.height - playerHeight, playerWidth, playerHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullet();


    if(rightPressed && playerX < canvas.width - playerWidth) {
        playerX += 7;
    } else if(leftPressed && playerX > 0) {
        playerX -= 7;
    }
    

    x += dx;
    y += dy;
}


setInterval(draw, 10);
