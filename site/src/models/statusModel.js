var database = require("../database/config");

function listarStatus() {
    var instrucao = `
          SELECT * FROM registro;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  module.exports = {
    listarStatus
  };