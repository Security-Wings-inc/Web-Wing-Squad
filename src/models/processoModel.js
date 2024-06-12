var database = require("../database/config");

function getAllProcess() {
    var instrucao = `
        SELECT 
            pr.idProcesso,
            pr.nomeAmigavel,
            pr.processoName AS nome_do_processo,
            c.categorias AS categoria_do_processo
        FROM 
            processos pr
        JOIN 
            categoria c ON pr.fkCategoria = c.idCategoria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function setProcess(idProcesso, isAllowed, idEmpresa, created_at) {
    const instrucao = `
        MERGE INTO permissoes AS target
        USING (SELECT '${idEmpresa}' AS fkEmpresa, '${idProcesso}' AS fkProcesso, '${isAllowed}' AS isAllowed, '1' AS isVisible, '${created_at}' AS created_at) AS source
        ON target.fkEmpresa = source.fkEmpresa AND target.fkProcesso = source.fkProcesso
        WHEN MATCHED THEN
            UPDATE SET 
                isAllowed = source.isAllowed,
                created_at = source.created_at,
                isVisible = source.isVisible
        WHEN NOT MATCHED THEN
            INSERT (fkEmpresa, fkProcesso, isAllowed, isVisible, created_at)
            VALUES (source.fkEmpresa, source.fkProcesso, source.isAllowed, source.isVisible, source.created_at);
    `;
    try {
        await database.executar(instrucao);
        console.log("Permissão inserida/atualizada com sucesso.");
        return true;
    } catch (error) {
        console.log("Erro ao inserir/atualizar a permissão:", error);
        return false;
    }
}

function allowed(idEmpresa) {
    var instrucao = `
        SELECT *
        FROM permissoes
        WHERE idPermissao IN (
            SELECT MAX(idPermissao)
            FROM permissoes
            WHERE fkEmpresa = '${idEmpresa}'
            GROUP BY fkProcesso
        )
        ORDER BY created_at DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ocult(idEmpresa, idProcesso) {
    var instrucao = `
        UPDATE permissoes
        SET isVisible = 0
        WHERE fkProcesso = '${idProcesso}' AND fkEmpresa = '${idEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getAllProcess,
    setProcess,
    allowed,
    ocult
};
