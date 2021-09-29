function dolar() {
  criarConvercao(converter("dolar"));
}

function euro() {
  criarConvercao(converter("euro"));
}

function bitcoin() {
  criarConvercao(converter("bitcoin"));
}

function criarConvercao(tipoConversor) {
  var localConvercao = document.getElementById("localConvercao");
  var campo = "<input type='number' class='campo' id='valor' size='2' /><br>";
  var botao =
    "<input type='submit' id='btmVerificar' onclick='" + tipoConversor + "' value='Converter' />";
  localConvercao.innerHTML = campo + botao;
  console.log(localConvercao);
}

function converter(moeda) {
  var tipoConversor = "";
  if (moeda == "dolar") {
    tipoConversor = "conversorDolar()";
  } else if (moeda == "euro") {
    tipoConversor = "conversorEuro()";
  } else {
    tipoConversor = "conversorBitCoin()";
  }
  return tipoConversor;
}

function conversorDolar() {
  var localValor = document.getElementById("valorConvertido");
  var pegandoValor = document.getElementById("valor").value;
  var convertendoValor = pegandoValor * 5.34;
  convertendoValor = parseInt(convertendoValor);
  var mostrandoValor = "<div id='valorConvertido'><h2> O valor é R$:" + convertendoValor +"</h2>";
  localValor.innerHTML = mostrandoValor;
}

function conversorEuro() {
  var localValor = document.getElementById("valorConvertido");
  var pegandoValor = document.getElementById("valor").value;
  var convertendoValor = pegandoValor * 6.25;
  convertendoValor = parseInt(convertendoValor);
  var mostrandoValor = "<div id='valorConvertido'><h2> O valor é R$:" + convertendoValor +"</h2>";
  localValor.innerHTML = localValor.innerHTML + mostrandoValor;
}

function conversorBitCoin() {
  var localValor = document.getElementById("valorConvertido");
  var pegandoValor = document.getElementById("valor").value;
  var convertendoValor = pegandoValor * 233169.03;
  var mostrandoValor = "<div id='valorConvertido'><h2> O valor é R$:" + convertendoValor +"</h2>";
  localValor.innerHTML = localValor.innerHTML + mostrandoValor;
}