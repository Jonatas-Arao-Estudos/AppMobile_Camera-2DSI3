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
  filtroImagem();
});

$(document).on("change","#saturacao",function(){
  filtroImagem();
});

$(document).on("change","#escalacinza",function(){
  filtroImagem();
});

$(document).on("change","#desfoque",function(){
  filtroImagem();
});

$(document).on("change","#matiz",function(){
  filtroImagem();
});

$(document).on("click","#voltar",function(){
      $("#openCamera").show();
      $("#fotoAcoes").hide();
});

function filtroImagem(change){
  var opacidade = "opacity("+$('#opacidade').val()+"%)";
  var saturacao = "saturate("+$('#saturacao').val()+"%)";
  var escalacinza = "grayscale("+$('#escalacinza').val()+"%)";
  var desfoque = "blur("+$('#desfoque').val()+"px)";
  var matiz = "hue-rotate("+$('#matiz').val()+"deg)";
  var filtro = opacidade + " " + saturacao + " " + escalacinza + " " + desfoque + " " + matiz;
  $("#imagem").css("filter", filtro);
}