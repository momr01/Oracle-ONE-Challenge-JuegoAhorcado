const ahorcadoCanvas = document.querySelector("canvas");
let pincel = ahorcadoCanvas.getContext("2d");
pincel.lineWidth = 5;
pincel.strokeStyle = "#0A3871";

function dibujo(num) {
  switch (num) {
    case 0:
      dibujarLinea(250, 350, 250, 100);
      break;
    case 1:
      dibujarLinea(250, 100, 350, 100);
      break;
    case 2:
      dibujarLinea(350, 100, 350, 130);
      break;
    case 3:
      dibujarCirculo();
      break;
    case 4:
      dibujarLinea(350, 190, 350, 280);
      break;
    case 5:
      dibujarLinea(350, 210, 320, 250);
      break;
    case 6:
      dibujarLinea(350, 210, 380, 250);
      break;
    case 7:
      dibujarLinea(350, 280, 320, 320);
      break;
    case 8:
      dibujarLinea(350, 280, 380, 320);
      break;
  }
}

function dibujarLinea(fromx, fromy, tox, toy) {
  pincel.beginPath();
  pincel.moveTo(fromx, fromy);
  pincel.lineTo(tox, toy);
  pincel.stroke();
}

function dibujarCirculo() {
  pincel.beginPath();
  pincel.arc(350, 160, 30, 0, 2 * 3.14);
  pincel.stroke();
}

//base
pincel.beginPath();
pincel.moveTo(200, 350);
pincel.lineTo(400, 350);
pincel.stroke();
