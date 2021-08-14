// nomeVariavel:tipo
function enviarEmailOld(nome, email, telefone) {
    console.log("Ol\u00E1 " + nome + " seu email \u00E9 " + email + " e seu telefone \u00E9 " + telefone);
}
function enviarEmailNew(_a) {
    var nome = _a.nome, email = _a.email, telefone = _a.telefone;
    console.log("Ol\u00E1 " + nome + " seu email \u00E9 " + email + " e seu telefone \u00E9 " + telefone);
}
enviarEmailNew({ nome: "Henrique", email: "hdfmacedo@gmail.com", telefone: "51996114125" });
