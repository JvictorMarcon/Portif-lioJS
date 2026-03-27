let salario = document.getElementById("salario")
let resultado = document.getElementById("resultado")

function calcular_aumento(){
    if (salario.value < 0){
        resultado.value = "Não são permitidos valores negativos"
        salario.value = ""
    }
    else if (salario.value <= 1200){
        resultado.value = `R$ ${(Number(salario.value) * 1.16).toFixed(2)}`
    }
    else if (salario.value <= 2100){
        resultado.value = `R$ ${(Number(salario.value) * 1.13).toFixed(2)}`
    }
    else if (salario.value <=3000){
        resultado.value = `R$ ${(Number(salario.value) * 1.1).toFixed(2)}`
    }
    else{
        resultado.value = `R$ ${(Number(salario.value) * 1.05).toFixed(2)}`
    }
    
}
function atualizarRelogio() {
            // 1. Criamos uma nova instância do objeto Date (pega o agora)
            const agora = new Date();

            // 2. Formatamos a data para o padrão brasileiro (dia/mes/ano)
            const dataFormatada = agora.toLocaleDateString('pt-BR');

            // 3. Formatamos a hora para o padrão brasileiro (00:00:00)
            const horaFormatada = agora.toLocaleTimeString('pt-BR');

            // 4. Selecionamos o elemento HTML onde queremos exibir a informação
            const elementoDataHora = document.getElementById("data-hora");

            // 5. Inserimos o texto formatado dentro do elemento
            elementoDataHora.innerHTML = `Hoje é ${dataFormatada} | ${horaFormatada}`}
        

        // Executamos a função assim que a página carrega
        atualizarRelogio();

        // (Opcional) Fazemos o relógio atualizar a cada 1 segundo (1000 milissegundos)
        setInterval(atualizarRelogio, 1000)