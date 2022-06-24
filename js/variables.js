//elementos html
const letrasErroneasContainer = document.querySelector(
  "#letras-incorrectas-container"
);
const textoResultadoCont = document.querySelector("#resultado-container");
const textoResultado = document.querySelector("#texto-resultado");
const palabraContainer = document.querySelector("#palabra-container");
const input = document.querySelector("#nueva-palabra");
const btnNuevoJuego = document.querySelector("#btn-nuevo-juego");
const btnDesistir = document.querySelector("#btn-desistir");
const btnIniciarJuego = document.querySelector("#btn-iniciar-juego");
const btnAgregarPalabra = document.querySelector("#btn-agregar-palabra");
const btnGuardar = document.querySelector("#btn-guardar");
const btnCancelar = document.querySelector("#btn-cancelar");
const errorForm = document.querySelector("#error-texto");
const alertaError = document.querySelector("#alert-error-ingreso");

const listaOriginal = [
  "ADIVINANZA",
  "CALCINACION",
  "PAISAJISMO",
  "TUMULTOSO",
  "LLAMATIVO",
];
let nuevasPalabras = [];
let listaConNuevas = [];
const soloLetras = new RegExp("^[A-Z ]+$");
let letrasErroneas = [];
let indicesIngresadosCorrectos = [];
let continuarJugando = true;
let letrasErroneasUnicas;
let newArrayLetrasOk;
let teclado;
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
