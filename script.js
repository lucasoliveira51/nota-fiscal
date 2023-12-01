function emitirNotaFiscal() {

    var nomeCliente = document.getElementById('nomeCliente').value;

    var valorServico = parseFloat(document.getElementById('valorServico').value);

    var imposto = valorServico * 0.2;

    var notaFiscal = `
        <h1>Nota Fiscal</h1>
        <p><strong>Cliente:</strong> ${nomeCliente}</p>
        <p><strong>Valor do Serviço:</strong> R$ ${valorServico.toFixed(2)}</p>
        <p><strong>Imposto (20%):</strong> R$ ${imposto.toFixed(2)}</p>
        <p><strong>Total:</strong> R$ ${(valorServico + imposto).toFixed(2)}</p>
    `;

    document.getElementById('notaFiscalResultado').innerHTML = notaFiscal;
}