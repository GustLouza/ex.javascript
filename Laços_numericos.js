// LAÇO NÚMERICO - FOR

// O PROBLEMA



// Acumulador

let acumulador = 0

acumulador = acumulador + 10

acumulador += 2

acumulador++

console.log(acumulador)

console.clear()


// Estrutura for

for (let i = 0; i <= 10; i++){
    console.log('repetição', i )
}

console.clear()


let nota;
let soma = 0

for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`informe a nota ${i} do aluno`))

    soma = soma + nota
}

console.log(`A media do aluno é ${soma/3}.`)
