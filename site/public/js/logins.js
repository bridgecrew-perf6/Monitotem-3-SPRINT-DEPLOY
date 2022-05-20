  function mudar_usuario() {
      window.location = "loginUsuario.html"
  }
  function mudar_empresa() {
    window.location = "index.html"
}

  // LOGIN
  function entrarEmpresa() {
        

    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    }

    

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        
        console.log("ESTOU NO THEN DO entrar()!")
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_EMPRESA = json.emailEmpresa;
                sessionStorage.NOME_EMPRESA = json.nomeEmpresa;
                sessionStorage.ID_EMPRESA = json.idEmpresa;

                setTimeout(function () {
                    window.location = "homeEmpresa.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
              
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


// LOGIN USUARIO
function entrarUsuario() {
        

    var emailUsuarioVar = ipt_email_login_usuario.value;
    var senhaUsuarioVar = ipt_senha_login_usuario.value;

     console.log("FORM LOGIN: ", emailUsuarioVar);
     console.log("FORM SENHA: ", senhaUsuarioVar);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailUsuarioVar == "" || senhaUsuarioVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    }
    
    if (emailUsuarioVar.indexOf("@") == -1 || emailUsuarioVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    }

    fetch("/usuarios/autenticarUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailUsuarioVar,
            senhaServer: senhaUsuarioVar
        })
    }).then(function (resposta) {
        
        console.log("ESTOU NO THEN DO entrar()!")
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.emailUsuario;
                sessionStorage.NOME_USUARIO = json.nomeUsuario;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "homeDashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
              
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}