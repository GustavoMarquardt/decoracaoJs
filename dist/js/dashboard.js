$(function () {
  getAlldados();
  getAllAcessos();
  getMostPesquisado();
  $(".nav-link").mouseover(function () {
    $(this).css("background-color", "white");
  });
  $(".nav-link").mouseout(function () {
    $(this).css("background-color", "transparent");
  });
});

function getMostPesquisado() {
  $.ajax({
    url: "http://localhost/JqueryTeste/API/getAllProdut.php",
    method: "GET",
    success: function (data) {
      json = JSON.parse(data);
      if (json.status == "sucesso") {
        for (var i = 0; i < json.produtos.length; i++) {
          $(".mostPesquisadoNome").prepend(
            "<div class>" + json.produtos[i].nome + "</div>"
          );
          //$(".mostPesquisadoQuant").prepend(json.produtos[i].QuantidadePesquisa);
        }
      }
    },
  });
}

function getAllAcessos() {
  $.ajax({
    url: "http://localhost/JqueryTeste/API/getAllAcessos.php",
    method: "GET",
    success: function (data) {
      var json = JSON.parse(data);
      var now = dataAtualFormatada();
      var comecoMes = dataNoDay();
      var quantidadeAcessos = 0;
      for (var i = 0; i < json.acessos.length; i++) {
        if (
          (now > json.acessos[i].data && comecoMes < json.acessos[i].data) ||
          now == json.acessos[i].data
        ) {
          quantidadeAcessos++;
        }
      }
      $(".quantidadeAcessos").html(quantidadeAcessos);
      $(".quantidadeAcessosgeral").html(json.acessos.length);
    },
  });
}

function dataNoDay() {
  var data = new Date(),
    dia = 0,
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  return anoF + "-" + mesF + "-" + diaF;
}

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  return anoF + "-" + mesF + "-" + diaF;
}

function getAlldados() {
  $.ajax({
    url: "http://localhost/JqueryTeste/API/getAllProdut.php",
    type: "GET",
    success: function (data) {
      var json = JSON.parse(data);

      $(".quantidadeProdutos").html(json.produtos.length);
      var maior = 0;
      var nomeMaior = "";
      for (var i = 0; i < json.produtos.length; i++) {
        if (json.produtos[i].QuantidadePesquisa > maior) {
          console.log(
            json.produtos[i].QuantidadePesquisa,
            "e maior que ",
            maior
          );
          maior = json.produtos[i].QuantidadePesquisa;
          nomeMaior = json.produtos[i].nome;
        }
      }
      $(".mostPesquisado").html(nomeMaior);
    },
  });
}
