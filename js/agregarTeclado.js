window.addEventListener("load", () => {
  const widthPantallaCelular = window.matchMedia("(max-width: 480px)");
  if (widthPantallaCelular.matches) {
    agregarTeclado();
  }
});

function agregarTeclado() {
  alphabet.forEach((letra,index) => {
    const divTeclado = document.querySelector(".divTeclado");
    const div = document.createElement("div");
    const btn = document.createElement("button");
    const text = document.createTextNode(letra);
    btn.appendChild(text);
    //btn.innerText = letra;
    btn.classList.add("btn-letra-teclado",`order${index}`)
    div.appendChild(btn);
    divTeclado.appendChild(div);
    
   

  
})

for(let i=0;i<alphabet.length;i++){
    const letraTeclado = document.querySelector(`.order${i}`);
letraTeclado.addEventListener("click", (e)=>{
  console.log(e.target.textContent);

  teclado = e.target.textContent;
  comienzaElJuego(e.target.textContent);

});
}


}




