//Operadores booleanos

const numero = 10

console.log(numero > 20)
console.log(10 == '10')           // == só compara no conteudo
console.log(10 === '10')           // === compara conteudo e tipo de variavel

console.clear()

console.log(10!= 10)
console.log(10 != '10')
console.log(10 !== '10')


//conjunções lógicas

let idade = 22
let tenhoCNH = true


//AND = &&

const possoDirigir  =  idade >= 18 &&  tenhoCNH === true

console.log ("posso dirigir", possoDirigir)

//OR = ||

idade = 18

const votoFacultativo = idade < 18 || idade >= 70
console.log(votoFacultativo)

// NOT = !


const estouGostandoDoCurso = false
console.log('está gostando do curso', !estouGostandoDoCurso)