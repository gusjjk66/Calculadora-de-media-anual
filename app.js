function Media() {
  var n1 = document.getElementById("nota1").value;
  var n2 = document.getElementById("nota2").value;
  var n3 = document.getElementById("nota3").value;
  var n4 = document.getElementById("nota4").value;

  var notaTotal =
    parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4);
  var mediaFinal = notaTotal / 4;

  console.log(mediaFinal);
  var exibir = document.getElementById("texto");
  var exibirNotaNaTela = "Sua média foi " + mediaFinal;
  exibir.innerHTML = exibirNotaNaTela;

  if (mediaFinal >= 60) {
    var exibirApOuR = document.getElementById("aprovado");
    var exibirAprovadoNaTela = "Parabéns, você foi aprovado!!!";
    exibirApOuR.innerHTML = exibirAprovadoNaTela;
  } else if (mediaFinal < 60) {
    var exibirReOuAp = document.getElementById("aprovado");
    var exibirReprovado = "Infelizmente você foi reprovado :(";
    exibirReOuAp.innerHTML = exibirReprovado;
  }
}
