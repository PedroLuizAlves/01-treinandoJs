const nome =prompt("Digite seu primeiro nome:")
const sobrenome=prompt("DIgite seu sobrenome:")
const AreaDeEstudo=prompt("Qual sua area de estudo?")
const idade=prompt("Ano de nascimento:")

// O comando "\n serve para pular linha"

alert(
    "cadastro concluido! \n" +
    "\n Nome completo: " + nome + " " + sobrenome + 
    "\n Area de Estudo: " + AreaDeEstudo +
    "\n Idade: " + (2024 - idade)
)