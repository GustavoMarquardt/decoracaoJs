$(function () {
    console.log('teste');
  $.ajax({
    url: "http://localhost/JqueryTeste/API/loadIndex.php",
  }).done(function (data) {
    console.log(data);
  });


});
