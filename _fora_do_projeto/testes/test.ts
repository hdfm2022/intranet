// nomeVariavel:tipo

interface Usuario {
    nome: string, email: string, telefone: string, opcional?: string
}

function enviarEmailOld(nome: string, email: string, telefone: string) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

function enviarEmailNew({nome, email, telefone}: Usuario) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmailNew({nome: "Henrique", email: "hdfmacedo@gmail.com", telefone: "51996114125"})