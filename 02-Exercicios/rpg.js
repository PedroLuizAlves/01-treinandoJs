const persona1 =prompt("Nome do personagem 1:")
const poderDeAtaque =parseFloat(prompt("Digite seu dano de ataque:"))

const persona2 =prompt("Nome do personagem 2:")
let pontosDeVida= parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa= parseFloat(prompt("Qual poder de defesa?"))
const escudo =prompt("O adversario utiliza escudo?(Sim ou Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && escudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) /2
}

pontosDeVida -= danoCausado

alert(persona1 + " causou " + danoCausado + " pontos de dano em " + persona2)
alert(
    persona1 + "\nPoder de Ataque: " + poderDeAtaque + "\n\n" + persona2 + "\nPontos de vida: " + pontosDeVida + "\nPoder de defesa: " + poderDeDefesa + " \npossui escudo: " + escudo
)