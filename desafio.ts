// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?


let indice:number = 13;
let k:number = 0;
let soma:number = 0;
while(k < indice){
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

console.log('*********************************************************');
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacci = (num: number): string => {
    let x = 0;
    let y = 1;
    let temp;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (y < num) {
        temp = x + y;
        x = y;
        y = temp;
    }

    if (y === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

console.log(fibonacci(34))

console.log('*********************************************************');
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

interface FaturamentoMensal {
    faturamentoDiario: number[];
}

function calculoDoFaturamento(faturamentoMensal: FaturamentoMensal) {
    // Filtrando os dias com faturamento para ignorar os dias com valor 0
    const faturamento = faturamentoMensal.faturamentoDiario.filter(valor => valor > 0);
    
    if (faturamento.length === 0) {
        return "Não houve faturamento no mês.";
    }

    // Calculando o menor e maior valor de faturamento
    const menorValor = Math.min(...faturamento);
    const maiorValor = Math.max(...faturamento);

    // Calculando a soma total do faturamento para calcular a média
    const somaDoFaturamento = faturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaDoFaturamento / faturamento.length;

    // Contando quantos dias tiveram faturamento acima da média
    const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia,
        mediaMensal
    };
}

// Exemplo de JSON de entrada
const faturamentoMensal: FaturamentoMensal = {
    "faturamentoDiario": [1200.50, 3200.30, 0, 2500.00, 0, 3000.10, 4500.25, 0, 0, 1800.45, 0, 0, 2100.70, 3700.55, 4100.00, 0, 0, 0, 4900.00, 2300.60, 0, 2700.90, 0, 5000.75, 3200.40, 0, 0, 1500.80, 2800.35, 0, 0]
};

const resultado = calculoDoFaturamento(faturamentoMensal);

if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
    console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
    console.log(`Média mensal: ${resultado.mediaMensal.toFixed(2)}`);
}

console.log('*********************************************************');
// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

interface FaturamentoDoEstado {
    estado: string;
    valor: number;
}

function calculoPctRepresentacao(faturamentoPorEstado: FaturamentoDoEstado[]) {

    // Calcula o faturamento total
    const faturamentoTotal = faturamentoPorEstado.reduce((acc, estado) => acc + estado.valor, 0);

    // Calcula e exibe o percentual de cada estado
    faturamentoPorEstado.forEach(estado => {
        const percentual = (estado.valor / faturamentoTotal) * 100;
        console.log(`${estado.estado}: ${percentual.toFixed(2)}%`);
    });
}

// Dados de faturamento por estado
const faturamentoMensalDoEstado: FaturamentoDoEstado[] = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
];

calculoPctRepresentacao(faturamentoMensalDoEstado);


console.log('*********************************************************');
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// Definir a string que será invertida
let originalString: string = "exemplo de string";

// Inicializar uma string vazia para armazenar a string invertida
let reversedString: string = "";

// Percorrer a string original de trás para frente
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}

// Exibir a string original e a string invertida
console.log("String original:", originalString);
console.log("String invertida:", reversedString);
