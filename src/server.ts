import express from "express";

// @types/express
const app = express();

/** 
 * GET          => Buscar informações
 * POST         => Inserir (criar) uma informação
 * PUT          => Alterar uma informação
 * DELETE       => Deletar um dado
 * PATCH        => Alterar uma informação específica (somente a senha do usuário, não todo ele)
*/

app.get("/test", (request, response) => {
    return response.send("Olá")
})

app.post('/test-post', (request, response) => {
    return response.send("Hello World")
})



// http://localhost:3000
app.listen(3000, () => console.log("Server is running Intranet"));