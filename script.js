var chances = 0;
var numeroPensado = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroPensado) {
    elementoResultado.innerHTML =
      "Você acertou , o número pensado era " + numeroPensado;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = " você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou!";
  }

  chances++;
  if (chances >= 3 && chute != numeroPensado) {
    elementoResultado.innerHTML =
      "GAME OVER!<br>Atualize a página e tente novamente.";
  }
}