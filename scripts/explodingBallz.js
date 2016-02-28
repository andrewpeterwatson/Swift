var canvasDot = document.getElementById('eruption');
var ctxBall = canvasDot.getContext('2d');
var dotArray = [];
var dotArray2 = [];

function Dot() {
    var dot = {
        y : canvasDot.height / 2,
        x : canvasDot.width / 2,
        speedX : Math.random() * ( - 5 * 5) + 15,
        speedY : Math.random() * ( - 5 * 5) + -10,
        traject : 0,
        drawDot : function () {

            this.x += this.speedX;
            this.y += this.speedY;

            ctxBall.beginPath();
            ctxBall.arc(this.x, this.y, 6, 5, Math.PI * 2);
            ctxBall.fillStyle = 'orange';
            ctxBall.fill();
            ctxBall.closePath();
        }
    };
    return dot;
}

function Dot2() {
    var dot2 = {
        y : canvasDot.height / 2,
        x : canvasDot.width / 2,
        speedX : Math.random() * ( - 5 * 5) + 15,
        speedY : Math.random() * ( - 5 * 5) + -10,
        traject : 0,
        drawDot : function () {

            this.x += this.speedX;
            this.y += this.speedY;

            ctxBall.beginPath();
            ctxBall.arc(this.x, this.y, 6, 5, Math.PI * 2);
            ctxBall.fillStyle = 'red';
            ctxBall.fill();
            ctxBall.closePath();
        }
    };
    return dot2;
}

function drawDot() {
    ctxBall.clearRect(0, 0, canvasDot.width, canvasDot.height);
    for (var i = 0; i < dotArray.length; i++) {
        dotArray[i].drawDot();
        dotArray[i].traject++;
        if (dotArray[i].traject > 100) {
            dotArray.splice(i, 1);
        }
    }
    for (var i = 0; i < dotArray2.length; i++) {
        dotArray2[i].drawDot();
        dotArray2[i].traject++;
        if (dotArray2[i].traject > 100) {
            dotArray2.splice(i, 1);
        }
    }
    dotArray.push(new Dot());
    dotArray2.push(new Dot2());
}

drawDot();
var interval = setInterval(drawDot, 150);
