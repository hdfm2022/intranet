import express from "express";

// @types/express (precisa instalar separado, pra ter as tipagens)
const app = express();

/** 
 * GET          => Buscar informações
 * POST         => Inserir (criar) uma informação
 * PUT          => Alterar uma informação
 * DELETE       => Deletar um dado
 * PATCH        => Alterar uma informação específica (somente a senha do usuário, não todo ele)
*/

 /**
  * Tipos de parametros
  *  Routes Params => http://localhost:3000/produtos/3/ 
  *  Querys Params => http://localhost:3000/produtos?name=teclado&max=100000
  *  Body Params   => {
  *     "name": "teclado"
  *    , "description" : "teclado rgb"
  * }
  * Usado para post/put/patch. Nunca get/delete.
  */

app.get("/test", (request, response) => {
    return response.send("Teste GET")
})

app.post('/test-post', (request, response) => {
    return response.send("Teste POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running Intranet"));