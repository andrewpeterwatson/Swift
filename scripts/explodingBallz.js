var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var dotArray = [];

function Dot() {
    var dot = {
        y : canvas.height / 2,
        x : canvas.width / 2,
        speedX : Math.random() * ( - 5 * 5) + 15,
        speedY : Math.random() * ( - 5 * 5) + -10,
        traject : 0,
        draw : function () {

            this.x += this.speedX;
            this.y += this.speedY;

            ctx.beginPath();
            ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.closePath();
        }
    };
    return dot;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < dotArray.length; i++) {
        dotArray[i].draw();
        dotArray[i].traject++;
        if (dotArray[i].traject > 20) {
            dotArray.splice(i, 1);
        }
    }
    dotArray.push(new Dot());
}

draw();
var interval = setInterval(draw, 100);
