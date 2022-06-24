//funcion para eliminar duplicados de array
function eliminarDuplicadosArray(array) {
  const dataArr = new Set(array);
  const arraySinDuplicados = [...dataArr];
  return arraySinDuplicados;
}

//funcion para verificar si elemento existe en un array
function verificarSiExisteElEnArray(array, variable) {
  const existe = array.find((element) => element == `${variable}`);
  return existe;
}

//funcion para crear el elemento p y que se muestre la letra adivinada
function crearPLetraCorrecta(i, letra) {
  const div = document.querySelector(`#palabra-container :nth-child(${i + 1})`);
  const p = document.createElement("p");
  p.textContent = letra;
  div.appendChild(p);
}

//funcion para crear el mensaje ganaste / perdiste
function crearMensaje(texto, clase) {
  textoResultadoCont.classList.add("resultado-container");
  textoResultado.textContent = texto;
  textoResultado.classList.add(clase);
  continuarJugando = false;
}

//funcion para mostrar el mensaje ganaste / perdiste
function finDelJuego(array1, array2, array3) {
  if (array1.length == array2.length) {
    crearMensaje("Ganaste, Felicidades!", "mensaje-ganaste");
  }

  if (array3.length == 9) {
    crearMensaje("Fin del juego!", "mensaje-perdiste");
  }
}

//funcion para agregar index a arrays que luego seran comparados
function agregarIndexDeLetrasOk(arrPalabra, letra, arrIndicesOk, arrIndices) {
  for (let i = 0; i < arrPalabra.length; i++) {
    if (letra == arrPalabra[i]) {
      console.log("SI");

      const existe = verificarSiExisteElEnArray(arrIndicesOk, i);
      //console.log(`existe ${existe}`);
      if (existe == undefined) {
        arrIndices.push(i);
        arrIndicesOk.push(i);
      }
    }
  }
}
