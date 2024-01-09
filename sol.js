/*--- FUNCIONES MENU PRINCIPAL ---*/

function mostrarGrupo() {
  document.getElementById("grupoTexto").style.opacity = 1;
}
function ocultarGrupo() {
  document.getElementById("grupoTexto").style.opacity = 0;
}


//EFECTO HOVER HISTORIA
function iconoHistoria() {
  document.getElementById("menuH").style.opacity = 1;
  document.getElementById("foto1").style.opacity = 0.15;
  document.getElementById("foto1").style.transform = "scale(1.05)";
  document.getElementById("iconoH").style.top = "29vh";
  document.getElementById("iconoH").style.filter = "invert(0)";
} function iconoHistoriaR() {
  document.getElementById("menuH").style.opacity = 0;
  document.getElementById("foto1").style.opacity = 1;
  document.getElementById("foto1").style.transform = "scale(1)";
  document.getElementById("iconoH").style.top = "35vh";
  document.getElementById("iconoH").style.filter = "invert(1)";
}
//EFECTO HOVER RESEÑAS
function iconoReseñas() {
  document.getElementById("menuR").style.opacity = 1;
  document.getElementById("foto3").style.opacity = 0.15;
  document.getElementById("foto3").style.transform = "scale(1.05)";
  document.getElementById("iconoR").style.top = "29vh";
  document.getElementById("iconoR").style.filter = "invert(0)";
} function iconoReseñasR() {
  document.getElementById("menuR").style.opacity = 0;
  document.getElementById("foto3").style.opacity = 1;
  document.getElementById("foto3").style.transform = "scale(1)";
  document.getElementById("iconoR").style.top = "35vh";
  document.getElementById("iconoR").style.filter = "invert(1)";
}
//EFECTO HOVER MAPA
function iconoMapa() {
  document.getElementById("menuM").style.opacity = 1;
  document.getElementById("foto4").style.opacity = 0.15;
  document.getElementById("foto4").style.transform = "scale(1.05)";
  document.getElementById("iconoM").style.top = "67vh";
  document.getElementById("iconoM").style.filter = "invert(0)";
} function iconoMapaR() {
  document.getElementById("menuM").style.opacity = 0;
  document.getElementById("foto4").style.opacity = 1;
  document.getElementById("foto4").style.transform = "scale(1)";
  document.getElementById("iconoM").style.top = "70.5vh";
  document.getElementById("iconoM").style.filter = "invert(1)";
}
//EFECTO HOVER VIDEO
function iconoVideo() {
  document.getElementById("menuV").style.opacity = 1;
  document.getElementById("foto2").style.opacity = 0.15;
  document.getElementById("foto2").style.transform = "scale(1.05)";
  document.getElementById("iconoV").style.top = "67vh";
  document.getElementById("iconoV").style.filter = "invert(0)";
} function iconoVideoR() {
  document.getElementById("menuV").style.opacity = 0;
  document.getElementById("foto2").style.opacity = 1;
  document.getElementById("foto2").style.transform = "scale(1)";
  document.getElementById("iconoV").style.top = "70.5vh";
  document.getElementById("iconoV").style.filter = "invert(1)";
}


//FUNCIONES PARA CAMBIAR DE SECCIÓN 
function irHISTORIA() {
  document.getElementById("menu").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("menu").style.display="none";
  }, 500);
  setTimeout(function() {
    document.getElementById("HISTORIA").style.opacity = 1;
    document.getElementById("SUBPAGINA").style.display ="block";
    document.getElementById("SUBPAGINA").style.opacity = 1;
    document.getElementById("Casa").style.opacity = 1;
    document.getElementById("Casa").style.display = "block";
  }, 1000);
}
function irRESEÑAS() {
  document.getElementById("menu").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("menu").style.display="none";
  }, 500);
  setTimeout(function() {
    document.getElementById("RESEÑAS").style.opacity = 1;
    document.getElementById("SUBPAGINA").style.display ="block";
    document.getElementById("SUBPAGINA").style.opacity = 1;
    document.getElementById("Casa").style.opacity = 1;
    document.getElementById("Casa").style.display = "block";
  }, 1000);
}
function irMAPA() {
  document.getElementById("menu").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("menu").style.display="none";
  }, 500);
  setTimeout(function() {
    document.getElementById("MAPA").style.opacity = 1;
    document.getElementById("SUBPAGINA").style.display ="block";
    document.getElementById("SUBPAGINA").style.opacity = 1;
    document.getElementById("Casa").style.opacity = 1;
    document.getElementById("Casa").style.display = "block";
  }, 1000);
}
function irVIDEO() {
  document.getElementById("menu").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("menu").style.display="none";
  }, 500);
  setTimeout(function() {
    document.getElementById("VIDEO").style.opacity = 1;
    document.getElementById("SUBPAGINA").style.display ="block";
    document.getElementById("SUBPAGINA").style.opacity = 1;
    document.getElementById("Casa").style.opacity = 1;
    document.getElementById("Casa").style.display = "block";
  }, 1000);
}

//FUNCIÓN PARA VOLVER A MENU PRINCIPAL
function CASA() {
  //OCULTAR SUBPAGINA Y BOTÓN
  document.getElementById("SUBPAGINA").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("SUBPAGINA").style.display="none";
  }, 500);
  document.getElementById("VIDEO").style.opacity = 0;
  document.getElementById("RESEÑAS").style.opacity = 0;
  document.getElementById("MAPA").style.opacity = 0;
  document.getElementById("HISTORIA").style.opacity = 0;
  //MOSTRAR MENU
  document.getElementById("menu").style.display="block";
  setTimeout(function() {
    document.getElementById("menu").style.opacity = 1;
  }, 500);
}