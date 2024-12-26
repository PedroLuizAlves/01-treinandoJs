const medida=parseFloat(prompt("Escreva um valor em metros quadrados:"))
const unidade=prompt("Escreva para qual unidade de medida quer converter:" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
)

switch (unidade){
    case "1":alert (medida * 1000)
    break
    case "2":alert (medida * 100)
    break
    case "3":alert (medida * 10)
    break
    case  "4":alert (medida / 10)
    break
    case  "5": alert (medida / 100)
    break
    case "6":alert (medida / 1000)
    break
    default: alert("Opção invalida.")
}