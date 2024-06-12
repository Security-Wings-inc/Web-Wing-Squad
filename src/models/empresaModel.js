var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `SELECT idEmpresa, nome, email FROM Empresa WHERE email = '${email}' AND senha = '${senha}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function cadastrar(nomeEmpresa, cnpj, telefone, cidade, bairro, uf, rua, cep, comp) {
    try {
        // Inserir na tabela Empresa
        const queryEmpresa = `INSERT INTO Empresa (nome, cnpj, telefone) VALUES ('${nomeEmpresa}', '${cnpj}', '${telefone}')`;
        console.log("Executando a instrução SQL: \n" + queryEmpresa);
        await database.executar(queryEmpresa);

        // Obter o ID da empresa inserida
        const resultado = await database.executar(`SELECT SCOPE_IDENTITY() AS id`);
        const idEmpresaInserida = resultado[0].id;

        // Inserir na tabela Endereco
        const queryEndereco = `INSERT INTO Endereco (cidade, bairro, uf, rua, cep, complemento, fkEmpresa) VALUES ('${cidade}', '${bairro}', '${uf}', '${rua}', '${cep}', '${comp}', ${idEmpresaInserida})`;
        console.log("Executando a instrução SQL do Endereço: \n" + queryEndereco);
        await database.executar(queryEndereco);

        console.log("Empresa e endereço cadastrados com sucesso.");
    } catch (error) {
        console.error("Erro ao cadastrar a empresa: ", error);
    }
}




module.exports = {
    autenticar,
    cadastrar
};