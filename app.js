console.log('sistema de Calculo');

//impor da biblioteca de entradas de dados

var readline = require('readline');

//objetos para manipular a entradas de dados
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});
entradaDados.question('Digite nome do aluno\n', function(nome) {
    let nomeAluno = nome;
    entradaDados.question('Qual o primeiro valor\n', function(valor1) {
        let primeiroValor = (valor1);

        entradaDados.question('Qual é o segundo valor\n', function(valor2) {
            let segundoValor = (valor2)

            console.log('escolha qual operação aritmétrica deseja');
            console.log('soma');
            console.log('multiplicação');
            console.log('subtração');
            console.log('divisão');


            entradaDados.question('Qual operação aritmétrica você deseja??\n', function(operaçoes) {
                let operacao = (operaçoes)

                let opr = 0;
                if (operacao == '' || primeiroValor == '' || segundoValor == '') {
                    console.log(nome, 'ERRO: é nescessão que todas os campos sejam preenchidos');
                } else if (isNaN(primeiroValor.replace(',', '.')) || isNaN(segundoValor.replace(',', '.'))) /* inNum -> não é um numero*/ {
                    console.log(nome, 'ERRO: é necessario que todos os dados digitados sejam um numero')
                } else {
                    if (operacao == 'soma') {
                        opr = (Number(primeiroValor.replace(',', '.')) + Number(segundoValor.replace(',', '.')))
                        console.log(opr);
                    }
                    if (operacao == 'subtração') {
                        opr = (Number(primeiroValor.replace(',', '.')) - Number(segundoValor.replace(',', '.')))
                        console.log(opr);
                    }
                    if (operacao == 'multiplicação') {
                        opr = (Number(primeiroValor.replace(',', '.')) * Number(segundoValor.replace(',', '.')))
                        console.log(opr);
                    }
                    if (operacao == 'divisão') {
                        opr = (Number(primeiroValor.replace(',', '.')) / Number(segundoValor.replace(',', '.')))
                        console.log(opr);
                    }


                }







            });

        });

    });
});