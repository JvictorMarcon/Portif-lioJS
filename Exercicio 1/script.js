const salario = document.getElementById("salario")
const resultado = document.getElementById("resultado")


function calcular() {
    if (salario.value <= 0) {
        alert("Por favor digite um valor válido")
        salario.value = NaN
    }
    else {
        let horas_semana = Number(document.getElementById("horasSemana").value)
        let horas_fds = Number(document.getElementById("horasFimSemana").value)

        const valor_hora = Number(salario.value) / 200
        const valor_horas_semana = valor_hora * 1.5
        const valor_hora_fds = valor_hora * 2
        const valor_final = (valor_horas_semana * horas_semana) + (valor_hora_fds * horas_fds)

        resultado.value = `R$ ${valor_final.toFixed(2)}`
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
    elementoDataHora.innerHTML = `Hoje é ${dataFormatada} | ${horaFormatada}`;
}

// Executamos a função assim que a página carrega
atualizarRelogio();

// (Opcional) Fazemos o relógio atualizar a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);