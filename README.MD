# Intranet

# Fluxo
- 1° server.ts
- 2° routes.ts
- 3° Controller
- 4° Service
- 5° Repositore 
- 6° Database

## Regras
- Geral
    - O usuário precisa estar autenticado na aplicação
- Cadastro de usuário
    - Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    - Não é permitido cadastrar usuário sem e-mail

### Regras do Módulo de Elogios
- Cadastro de Tipos de Elogios
    - Não é permitido cadastrar mais de uma tipo de elogio com o mesmo nome
    - Não é permitido cadastrar tipo de elogio sem nome
    - Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de Elogios
    - Não é permitido um usuário cadastrar um elogio para si mesmo
    - Não é permitido cadastrar elogios para usuários inválidos