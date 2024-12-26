// const veiculo1 =prompt("digite a velocidade do primeiro carro:")
// const veiculo2 =prompt("Digite a velocidade do segundo carro:")

// const x=parseFloat(veiculo1)
// const y=parseFloat(veiculo2)

// if (x > y){
//     alert("Veiculo 1 é mais veloz!")
// } else if (x == y){
//     alert("Os veiculos tem a mesma velocidade!")
// } else if(x < y){
//     alert("Veiculo 2 é mais veloz!")
// }else {
//     alert("não sei como chegar aqui..")
// }

const veiculo1 =prompt("Digite o nome do veiculo 1:")
const velocidade1 =parseFloat (prompt("Digite a velocidade do viculo 1:"))

const veiculo2 =prompt("Digite o nome do veiculo 2:")
const velocidade2 =parseFloat (prompt("Digite a velocidade do viculo 2:"))

if (velocidade1 > velocidade2){
    alert(veiculo1 + " " + "É mais veloz que" +" "+ veiculo2)
} else if (velocidade2 > velocidade1){
    alert(veiculo2 +" "+"é mais veloz que"+" "+ veiculo1)
}else {
    alert(veiculo1 + " " + "tem a mesma volocidade que" + " " + veiculo2)
}