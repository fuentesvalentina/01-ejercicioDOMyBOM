let numeroMagico;

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  alert("¡El juego ha comenzado! Se ha generado un número aleatorio entre 1 y 100. ¡Adivina el número!");
}

function validarNumero() {
  let numeroIngresado = parseInt(document.getElementById('numeroInput').value);

  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numeroIngresado === numeroMagico) {
    alert("¡Felicidades! Has adivinado el número.");
  } else if (numeroIngresado < numeroMagico) {
    alert("El número que ingresaste es menor al número mágico. ¡Sigue intentando!");
  } else {
    alert("El número que ingresaste es mayor al número mágico. ¡Sigue intentando!");
  }
}

document.getElementById('comenzarBtn').addEventListener('click', comenzarJuego);
document.getElementById('enviarBtn').addEventListener('click', validarNumero);
