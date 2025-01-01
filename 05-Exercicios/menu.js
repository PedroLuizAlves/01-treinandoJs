let opcao = ""

do {
    opcao=prompt("Escolha uma das opções abaixo: " + 
        "\n1.Opção um" +
        "\n2.Opção dois" +
        "\n3.Opção tres" +
        "\n4.Opção quatro" +
        "\n5.Encerrar programa"
    )
    switch (opcao){
        case "1":alert("Você escolheu a opção um.")
        break
        case "2":alert("Você escolheu a opção dois.")
        break
        case "3":alert("Voce escolheu a opção três.")
        break
        case "4":alert("Você escolheu a opção quatro.")
        break
        case "5":alert("Você escolheu encerrar.")
        break
        default :alert("Opção invalida!")
        break
    }
} while (opcao !== "5"){
    alert("Encerrando Programa...")
}