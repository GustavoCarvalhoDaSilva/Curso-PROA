var nome = prompt("Digite seu nome: ");
alert(`Olá ${nome} é um prazer ter você por aqui!`)
var saldo = 100.0;


function inicio(){
    
    var escolha = Number.parseInt(prompt(`Selecione uma opção
    1) Saldo
    2) Ver extrato
    3) Saque
    4) depósito
    5) Fazer tranferência
    6) Sair`));

    switch(escolha){
        case 1:
            ver_saldo()
            break;
        case 2:
            ver_extrato()
            break;
        case 3:
            sacar()
            break;
        case 4:
            fazer_deposito()
            break;
        case 5:
            fazer_tranferencia()
            break;
        case 6:
            sair()
            break;
        default:
            erro()
    }
}

    function ver_saldo(){
        senha()
        alert(`Seu saldo é R$${saldo} reais`)
        inicio()
    }
    function fazer_deposito(){
        var deposito = Number.parseFloat(prompt("Digite o valor do seu deposito: "));
        if(isNaN(deposito) || deposito == ""){
            alert("Informe um número");
            fazer_deposito();
        }else{
            saldo = saldo + deposito;
            ver_saldo()
        }
    }
    function sacar(){
        senha()
        var saque = parseFloat(prompt("Digite o valor do saque: "));
        if(isNaN(saque) || saque == "" || saque < 0){
            alert("Por favor, informe um número:");
            sacar()
        }else if(saldo < saque){
            alert("Operação não autorizada");
            alert("Saldo indisponivel, confira seu saldo")
            ver_saldo()
        }else{
            saldo = saldo - saque
            ver_saldo()
        }
    }
    function ver_extrato(){
        senha()
        alert(`Saldo anterior : R$ 500 reais
                ------------------------
                Compras anteriores
                ------------------------
                Tenis Hocks : R$ 200
                Blusa Nike : R$ 100
                MacDonalds : R$ 100`)
                inicio()
    }
    function fazer_tranferencia(){
        var tran = parseInt(prompt("Informe o número da conta: "));
        if(isNaN(tran) || tran == ""){
            alert("Digite apenas números")
            fazer_tranferencia()
        }else{
            var vt = parseFloat(prompt("Informe o valor da tranferência: "));
            if(vt > saldo || vt <= 0){
                alert("Operação não autorizada")
                fazer_tranferencia()
            }else if(isNaN(vt) || vt == ""){
                alert("Operação não autorizada")
                fazer_tranferencia()
            }else{
                var nsaldo = saldo - vt
                saldo = nsaldo
                ver_saldo()
            }
        }
    }
    function senha(){
        var senha = parseInt(prompt("Digite a sua senha"));
        if(senha == "3589"){
            alert("Acesso permitido")
        }else{
            alert(`Senha inválida, Acesso negado`)
            inicio()
        }
    }
    function erro(){
        alert("Informe um número de 1 a 6")
        inicio()
    }
    
    function sair(){
        var confirma = confirm("Tem certeza que quer sair ?");
        if(confirma){
            alert(`${nome}, foi um prazer ter você por aqui`)
            window.close()
        }else{
            inicio()
        }
    }
inicio()
