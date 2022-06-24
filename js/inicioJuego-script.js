//LOCALSTORAGE
const palabrasDelStorage = localStorage.getItem("nuevasPalabras");

if (palabrasDelStorage != null) {
  const arrayStorage = palabrasDelStorage.split(",");
  listaConNuevas = listaOriginal.concat(arrayStorage);
} else {
  listaConNuevas = listaOriginal;
}

const numAleatorio = Math.floor(
  Math.random() * (listaConNuevas.length - 1 + 1)
);
const palabraElegida = listaConNuevas[numAleatorio];
console.log(palabraElegida);
const arrayLetrasPalabraElegida = palabraElegida.split("");

console.log(listaConNuevas);

//crear cada espacio para cada letra
crearDivsLetras(arrayLetrasPalabraElegida);

//al presionar una letra, comienza el juego
document.addEventListener("keypress", (e) => {
  const letraIngresada = e.key || teclado;
  const validar = soloLetras.test(letraIngresada);

  if (validar) {
    ocultarAlerta();
    comienzaElJuego(letraIngresada);
  } else {
    mostrarAlerta();
  }
});

function mostrarAlerta() {
  alertaError.classList.remove("no-mostrar");
  alertaError.classList.add("msg-error-ingreso");
}

function ocultarAlerta() {
  alertaError.classList.remove("msg-error-ingreso");
  alertaError.classList.add("no-mostrar");
}

btnNuevoJuego.addEventListener("click", () => {
  window.location.reload();
});

btnDesistir.addEventListener("click", () => {
  window.location.href = "../index.html";
});

function comienzaElJuego(letraIngresada) {
  if (continuarJugando) {
    let indices = [];

    const letraExiste = verificarSiExisteElEnArray(
      arrayLetrasPalabraElegida,
      letraIngresada
    );

    if (!letraExiste) {
      letrasErroneas.push(letraIngresada);
    }

    agregarIndexDeLetrasOk(
      arrayLetrasPalabraElegida,
      letraIngresada,
      indicesIngresadosCorrectos,
      indices
    );

    console.log(letrasErroneas);
    console.log(indices);

    letrasErroneasUnicas = eliminarDuplicadosArray(letrasErroneas);
    //
    //letrasErroneasUnicas.slice(",");
    let letrasErrEsp = letrasErroneasUnicas.join(" ");
    letrasErroneasContainer.textContent = letrasErrEsp;

    if (indices.length > 0) {
      indices.forEach((indice) => {
        crearPLetraCorrecta(indice, letraIngresada);
      });
    }
  }

  console.log(indicesIngresadosCorrectos);
  console.log(arrayLetrasPalabraElegida);

  finDelJuego(
    indicesIngresadosCorrectos,
    arrayLetrasPalabraElegida,
    letrasErroneasUnicas
  );

  for (let i = 0; i < letrasErroneasUnicas.length; i++) {
    dibujo(i);
  }
}

//funcion para crear el container de cada letra a adivinar
function crearDivsLetras(array) {
  array.forEach((letra) => {
    console.log(letra);
    const div = document.createElement("div");
    div.classList.add("letra-div");
    palabraContainer.appendChild(div);
  });
}
