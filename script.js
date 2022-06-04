// primeira variavel é para entrada do valor ganho por mês
var valorMes = document.querySelector("#total-mes");

// segunda variavel é para entrada do valor por hora 
var horasDia = document.querySelector("#horas-dia");


// terceira variavel é para a resposta do calculo
var reposta = document.querySelector("#resposta");

//função para calcular
function calcularValorDia() {

    var total = (valorMes.valueAsNumber * horasDia.valueAsNumber) * 12
    resposta.textContent = total.toFixed(2)
    console.log(total)
}
