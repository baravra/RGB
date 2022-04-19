
function cor(){
    // puxando o valor das cores
    var vermelho = document.querySelectorAll("#rangeRed")[0];
    var verde = document.querySelectorAll("#rangeGreen")[0];
    var azul = document.querySelectorAll("#rangeBlue")[0];

    //colocando valor nos inputs
    document.querySelectorAll("#textRed")[0].value = vermelho.value
    document.querySelectorAll("#textGreen")[0].value = verde.value
    document.querySelectorAll("#textBlue")[0].value = azul.value

    var cor = "rgb(" + vermelho.value + "," + verde.value + "," + azul.value +")";
    var div = document.getElementById("color")
    div.style.backgroundColor = cor
    console.log(cor)

}