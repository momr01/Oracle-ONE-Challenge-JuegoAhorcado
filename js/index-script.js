btnIniciarJuego.addEventListener("click", () => {
  window.location.href = "./html/iniciarJuego.html";
});

btnAgregarPalabra.addEventListener("click", () => {
  window.location.href = "./html/agregarPalabra.html";
});


/*window.addEventListener("load", () => {
  const widthPantallaCelular = window.matchMedia("(max-width: 480px)");
  if (widthPantallaCelular.matches) {
    agregarTeclado();
  }
});



function agregarTeclado(){
  //const divTeclado=document.querySelector(".teclado__container")

  const divTeclado = document.createElement('div');
  const btn = document.createElement("button");
  btn.innerText="Hola";
  divTeclado.appendChild(btn);
  document.body.insertBefore(divTeclado, palabraContainer);


}*/