btnCancelar.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../index.html";
});

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();

  const value = input.value;
  const texto = value.toUpperCase();
  const validar = soloLetras.test(texto);

  if (validar && texto.length <= 8 && texto.length > 0) {
    nuevasPalabras.push(texto);

    const valLocalStorage = localStorage.getItem("nuevasPalabras");

    if (valLocalStorage == null) {
      localStorage.setItem("nuevasPalabras", nuevasPalabras);
    } else {
      const arrayLocalStorage = valLocalStorage.split(",");
      nuevasPalabras = nuevasPalabras.concat(arrayLocalStorage);
      localStorage.setItem("nuevasPalabras", nuevasPalabras);
    }

    window.location.href = "./iniciarJuego.html";
  } else {
    errorForm.textContent = "***Error. Ingrese una palabra válida.***";
  }
});
