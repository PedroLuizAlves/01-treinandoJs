const nome=prompt("Qual o nome do turista?")
let cidades= ""
let contagem= 0

let continuar=prompt("Você ja visitou alguma cidade? (sim/não)")

while (continuar === "sim"){
    let cidade=prompt("Qual o nome da cidade?")
    cidades += "-" + cidade + "\n"
    contagem++
    continuar =prompt("Ja visitou alguma outra cidade? (sim/não)")
}

alert(
    "Turista: " + nome + "\n" +
    "Numero de cidades visitadas: " + contagem +
    "\nCidades visitadas: \n" + cidades
)