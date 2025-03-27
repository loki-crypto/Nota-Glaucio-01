function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
    } else {
        return valorTotal; 
    }
}

function exibirResumo(valorTotal, valorComDesconto) {
    console.log(`Resumo da Compra:`);
    console.log(`Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}

const precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
const quantidade = parseInt(prompt("Digite a quantidade comprada:"));

const valorTotal = calcularTotal(precoUnitario, quantidade);
const valorComDesconto = aplicarDesconto(valorTotal);

exibirResumo(valorTotal, valorComDesconto);