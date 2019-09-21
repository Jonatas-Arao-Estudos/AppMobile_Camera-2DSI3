$(document).ready(function(){
  $("#fotoAcoes").hide();
});
$(document).on("click","#clickCamera",function(){
  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation:true,
    saveToPhotoAlbum:true
  });

  function onSuccess(imageURI) {
      var image = document.getElementById('imagem');
      image.src = imageURI;
      $("#openCamera").hide();
      $("#fotoAcoes").show();
  }

  function onFail(message) {
      navigator.notification.alert('Erro ao capturar imagem: ' + message);
  }
});

$(document).on("change","#opacidade",function(){
  var opacidade = "opacity("+$('#opacidade').val()+"%)";
  $("#imagem").css("filter", opacidade);
});

$(document).on("change","#saturacao",function(){
  var saturacao = "saturate("+$('#saturacao').val()+"%)";
  $("#imagem").css("filter", saturacao);
});

$(document).on("change","#escalacinza",function(){
  var escalacinza = "grayscale("+$('#escalacinza').val()+"%)";
  $("#imagem").css("filter", escalacinza);
});

$(document).on("change","#desfoque",function(){
  var desfoque = "blur("+$('#desfoque').val()+"px)";
  $("#imagem").css("filter", desfoque);
});

$(document).on("change","#matiz",function(){
  var matiz = "hue-rotate("+$('#matiz').val()+"deg)";
  $("#imagem").css("filter", matiz);
});

$(document).on("click","#voltar",function(){
      $("#openCamera").show();
      $("#fotoAcoes").hide();
});