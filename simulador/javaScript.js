function simular(){
    let nome = document.getElementById('nome').value;
    let mensalidade = parseFloat(document.getElementById('mensalidade').value);
    let tempo = parseFloat(document.getElementById('tempo').value);
    let mont = 0;
    let taxa = 4.048;

    mont = parseFloat(mensalidade*Math.pow((1 + taxa),tempo));
    alert(parseFloat(mont.toFixed(2)));


    document.querySelector('#resultado').innerHTML = `Olá ${nome} juntando R$ ${mensalidade} todo mês, você terá R$ ${mont.toFixed(2)} em ${tempo} anos`
}