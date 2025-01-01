let dinheiro=parseFloat(prompt("Qual é o saldo inicial disponíve?"))
let opcao= ""

do {
    opcao=prompt("Seu saldo é: " + dinheiro + "R$" +"\nAgora escolha uma das opções: \n" +
        "\n1. Para adicionar mais dinheiro." +
        "\n2. Para remover dinheiro." +
        "\n3. Para sair."
    )
    switch (opcao){
        case "1": dinheiro+=parseFloat(prompt("Seu saldo é de: "+ dinheiro + "R$" + "\nQuanto quer adicionar na conta?"))
        break
        case "2": dinheiro-=parseFloat(prompt("Seu saldo é de: "+ dinheiro + "R$" + "\nQuanto quer remover da conta?"))
        break
        case "3": alert("Finalizando programa!")
        break
        default : alert("Opção invalida! Selecione (1), (2) ou (3)")
    }
} while (opcao !== "3"){
    alert("Encerrando programa...")
}