document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '32') {
      document.getElementById("fire").src="media/testImg/toonbomb.jpg";

    } else if (e.keyCode == '37') {
      document.getElementById("arrows").src="media/testImg/left.jpg";

    } else if (e.keyCode == '39') {
      document.getElementById("arrows").src="media/testImg/right.jpg";
    };
};

function restoreImage() {
  document.getElementById("arrows").src="media/testImg/up.jpg";
};
