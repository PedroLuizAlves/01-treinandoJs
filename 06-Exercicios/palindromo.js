const palavra= prompt("Digie uma palavra: ")
let invertida=""

//o length é usado para definir a string inteira independente de seu tamanho
for (let i=palavra.length -1; i>=0; i --){
    invertida += palavra[i]
}
if (palavra === invertida){
    alert("A palavra é um palindromo!")
} else {
    alert("A palavra não é um palindromo! \n" + palavra + " !== " + invertida)
}