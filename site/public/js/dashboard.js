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


function listarTotem() {
  fetch("/usuarios//listarTotem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (resposta) {
    const containerTotem = document.querySelector(".container_content");
    const totens = await resposta.json();
    for (let i = 0; i < totens.length; i++) {
      let content = document.createElement("div");
      let content_id = document.createElement("div");
      let content_status = document.createElement("span");
      let content_action = document.createElement("span");

      fetch("/status/getStatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async function (resposta) {
        const status = await resposta.json();
        content_status.innerHTML = status[i].statusRegistro;
      });

      content_action.onclick = function teste() {
        fetch("/usuarios//listarTotem", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async function (resposta) {
          const totens = await resposta.json();
          leolindo = totens[i].idTotem;
          console.log(leolindo);
        });
      }

      content_id.innerHTML = `<i class="fa-solid fa-display"></i>${totens[i].idTotem}`;

      content_action.innerHTML =
        '<i class="fa-solid fa-circle-exclamation"></i>';

      content.setAttribute("class", "content");
      content_id.setAttribute("class", "content_id");
      content_status.setAttribute("class", "content_status");
      content_action.setAttribute("class", "content_action");

      content.append(content_id, content_status, content_action);

      containerTotem.appendChild(content);
    }
  });
  
}


window.addEventListener("load", listarTotem);