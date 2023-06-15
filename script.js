// Utilizo la siguiente función para calcular el índice de masa corporal:
function calcularIMC() {
  // Obtlos valores de peso y estatura del usuario
  var peso = parseFloat(document.getElementById("peso").value);
  var estatura = parseFloat(document.getElementById("estatura").value) / 100;

  // Calculo el índice de masa corporal:
  var imc = peso / (estatura * estatura);

  // Redondear el resultado a 2 decimales
  imc = imc.toFixed(2);

  // Enseguida, evaluo el rango del índice de masa corporal y muestro el resultado y la observación correspondiente:
  if (imc < 16) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Delgadez severa";
  } else if (imc >= 16 && imc <= 16.99) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Delgadez moderada";
  } else if (imc >= 17 && imc <= 18.49) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Delgadez aceptable";
  } else if (imc >= 18.5 && imc <= 24.99) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Peso normal";
  } else if (imc >= 25 && imc <= 29.99) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Sobrepeso";
  } else if (imc >= 30 && imc <= 34.99) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Obesidad tipo 1";
  } else if (imc >= 35 && imc <= 40) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Obesidad tipo 2";
  } else if (imc >= 40 && imc <= 49.99) {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Obesidad tipo 3 (Obesidad mórbida)";
  } else {
    document.getElementById("resultado").innerHTML = "Su índice de masa corporal es: " + imc + " Observación: Obesidad tipo 4 o extrema";
  }
}
