let quantidade_funcionarios = document.getElementById("quant_funcionarios")
let quantidade_dias = document.getElementById("quant_dias")
let resultado = document.getElementById("resultado")

function calcular_valor() {
    // Convertendo para número uma vez para facilitar
    let func = Number(quantidade_funcionarios.value)
    let dias = Number(quantidade_dias.value)


    if (dias < 0 || func < 0) {
        resultado.value = "Não são permitidos valores negativos"
        quantidade_dias.value = ""
        quantidade_funcionarios.value = ""
    }
    else if (func >= 150) {
        resultado.value = `R$ ${(3.6 * dias).toFixed(2)}`
    }
    else if (func >= 100) {
        resultado.value = `R$ ${(3.8 * dias.toFixed(2))}`
    }
    else if (func >= 50) {
        resultado.value = `R$ ${(4.1 * dias).toFixed(2)}`
    }
    else if (func >= 1) {
        resultado.value = `R$ ${(4.5 * dias).toFixed(2)}`
    }
    else {
        alert("Quantidade inválida (zero ou vazio)")
    }
}
function atualizarRelogio() {
    // 1. Criamos uma nova instância do objeto Date (pega o agora)
    const agora = new Date();

    // 2. Formatamos a data para o padrão brasileiro (dia/mes/ano)
    const dataFormatada = agora.toLocaleDateString('pt-BR')

    // 3. Formatamos a hora para o padrão brasileiro (00:00:00)
    const horaFormatada = agora.toLocaleTimeString('pt-BR')

    // 4. Selecionamos o elemento HTML onde queremos exibir a informação
    const elementoDataHora = document.getElementById("data-hora")

    // 5. Inserimos o texto formatado dentro do elemento
    elementoDataHora.innerHTML = `Hoje é ${dataFormatada} | ${horaFormatada}`
}

// Executamos a função assim que a página carrega
atualizarRelogio();

// (Opcional) Fazemos o relógio atualizar a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000)