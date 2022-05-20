var database = require("../database/config");


function medidasTotem(idTotem, limiteLinhas) {
    var instrucao = `
          SELECT usoMemoria, dataRegitro FROM registro where fk_totem = 44 
          order by id_registro desc limit ${idTotem,limiteLinhas};
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }