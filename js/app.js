let quantiaSobrandoPista = 100;
let quantiaSobrandoSuperior = 200;
let quantiaSobrandoInferior = 400;

function comprar(){ 
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
   
    if (ingresso === 'pista') {
        if (quantiaSobrandoPista >= quantidade) {
            quantiaSobrandoPista -= quantidade;
            alert('Compra efetuada com sucesso!')
        } else {
            alert('Quantidade indisponivel de ingressos');
            document.getElementById('qtd').value = 0;
            return;
        }
    } else if (ingresso === 'superior') {
        if (quantiaSobrandoSuperior >= quantidade) {
            quantiaSobrandoSuperior -= quantidade;
          alert('Compra efetuada com sucesso!')
        } else {
            alert('Quantidade indisponivel de ingressos');
            document.getElementById('qtd').value = 0;
            return;
        }
    } else if (ingresso === 'inferior') {
        if (quantiaSobrandoInferior >= quantidade) {
            quantiaSobrandoInferior -= quantidade;
            alert('Compra efetuada com sucesso!')
        } else {
            alert('Quantidade indisponivel de ingressos');
            document.getElementById('qtd').value = 0;
            return;
        }
    }
    
    let sobraPista = document.getElementById('qtd-pista');
    let sobraSuperior = document.getElementById('qtd-superior');
    let sobraInferior = document.getElementById('qtd-inferior');

    sobraPista.textContent = `${quantiaSobrandoPista}`;
    sobraSuperior.textContent = `${quantiaSobrandoSuperior}`;
    sobraInferior.textContent = `${quantiaSobrandoInferior}`;
    document.getElementById('qtd').value = 0;
}
