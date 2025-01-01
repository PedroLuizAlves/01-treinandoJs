const numero=parseFloat(prompt("Digite um numero: "))
let resultado= ""

for( let fator=1; fator <= 10; fator++){
  resultado += "- " + numero + " x " +  fator + " = " + (numero * fator) + " \n"
}
alert("O resultado é: \n" + resultado)