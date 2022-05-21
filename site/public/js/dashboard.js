var contador = 0;

function abrir() {
  contador++;
  if (contador == 1) {
    document.getElementById("abrirMenu").style.width = "22%";
    document.getElementById("menu").style.margin = "0px 0px 0px -70%";
    document.getElementById("user").style.fontSize = "160px";
    document.getElementById("option1").classList.add("active");
    document.getElementById("option2").classList.add("active");
    document.getElementById("option3").classList.add("active");
    document.getElementById("option4").classList.add("active");
    document.getElementById("html").style.overflow = "hidden";
  } else if (contador > 1) {
    document.getElementById("abrirMenu").style.width = "7%";
    document.getElementById("menu").style.margin = "0px 0px 50px 0px";
    document.getElementById("user").style.fontSize = "4rem";
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option4").classList.remove("active");
    contador = 0;
  }
}

function fechar() {
  document.getElementById("abrirMenu").style.width = "7%";
  document.getElementById("menu").style.margin = "0px 0px 50px 0px";
  document.getElementById("user").style.fontSize = "4rem";
  document.getElementById("option1").classList.remove("active");
  document.getElementById("option2").classList.remove("active");
  document.getElementById("option3").classList.remove("active");
  document.getElementById("option4").classList.remove("active");
  contador = 0;
}

// CHARTS DAsHBOARD






