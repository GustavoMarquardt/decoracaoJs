// funcão para chamar as outras sei lá kkkkkkkk
$(function () {
  $("#btn-login").click(function () {
    login();
  });
});

function login() {
  event.preventDefault(); // cancela o envio do formulário para não recarregar a tela
  var email = $("#email").val(); //pega valores do formulário
  var senha = $("#senha").val(); //pega valores do formulário
  //console.log(email, senha);

  $.ajax({
   
    url: "http://localhost/JqueryTeste/API/loginApi.php", //url para onde será enviado os dados
    type: "POST", //tipo de envio
    data: {
      email: email,
      senha: senha,
    }, //dados que serão enviados
    success: function (data) {

      var json = JSON.parse(data);
      console.log(json.status);
      if (json.status == "falha") {
        alert("Login ou senha incorretos");
      } else {
        window.location.href = "JqueryTeste/Html/admInicial.html";
      }
    },
  });
}
