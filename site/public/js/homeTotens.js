var contador = 0;

function abrir() {
  contador++;
  if (contador == 1) {
    document.getElementById("abrirMenu").style.width = "20%";
    document.getElementById("menu").style.margin = "0px 0px 0px -70%";
    document.getElementById("user").style.fontSize = "160px";
    document.getElementById("option1").classList.add("active");
    document.getElementById("option2").classList.add("active");
    document.getElementById("option3").classList.add("active");
    document.getElementById("html").style.overflow = "hidden";
  } else if (contador > 1) {
    document.getElementById("abrirMenu").style.width = "100px";
    document.getElementById("menu").style.margin = "0px 0px 50px 0px";
    document.getElementById("user").style.fontSize = "4rem";
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    contador = 0;
  }
}

function fechar() {
  document.getElementById("abrirMenu").style.width = "100px";
  document.getElementById("menu").style.margin = "0px 0px 50px 0px";
  document.getElementById("user").style.fontSize = "4rem";
  document.getElementById("option1").classList.remove("active");
  document.getElementById("option2").classList.remove("active");
  document.getElementById("option3").classList.remove("active");
  contador = 0;
}

function listarTotem() {
  fetch("/usuarios//listarTotem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (resposta) {
    const containerTotem = document.querySelector(".container_totens");
    const totens = await resposta.json();
    for (let i = 0; i < totens.length; i++) {
      console.log(totens[i]);
      let idTotens = document.createElement("div");
      let sistema = document.createElement("div");
      let fabricante = document.createElement("div");
      let ipTotem = document.createElement("div");
      let content = document.createElement("div")
      let divIcone = document.createElement("div")
      let divDados = document.createElement("div")
      let divbuttons = document.createElement("div")

      content.setAttribute("class", "content");
      divIcone.setAttribute("class", "icone_totem");
      divDados.setAttribute("class", "dados");


      idTotens.innerHTML = "<h5>ID: </h5> " + totens[i].idTotem;
      sistema.innerHTML = "<h5>sistema: </h5> " + totens[i].sistema;
      fabricante.innerHTML = "<h5>fabricante: </h5> " + totens[i].fabricante;
      ipTotem.innerHTML = "<h5>ipTotem: </h5> " + totens[i].ipTotem;
      divIcone.innerHTML = `<i class="fa-solid fa-display"></i> `


      divDados.append(idTotens, sistema, fabricante, ipTotem);

      content.append(divIcone, divDados, divbuttons);


      containerTotem.appendChild(content);
    }
  });
}

window.addEventListener("load", listarTotem);