const primeiroNumero =prompt("Digite o primeiro valor:")
const segundoNumero =prompt ("Digite o segundo valor:")

const x = parseFloat(primeiroNumero)
const y = parseFloat(segundoNumero)

const soma = (x) + (y)
const subtracao = (x) - (y)
const multiplicacao = (x) * (y)
const divisao = (x) / (y)

alert (
    "Resultados: \n" + 
    "\n Soma:" + (soma) +
    "\n Subtracao: " + (subtracao) +
    "\n Multiplicacao: " + (multiplicacao) +
    "\n Divisao: " + (divisao)
)