//coerção de tipos(conversão)

//coerção explicita (manual)

const numero = 10

console.log(numero, typeof numero)

const numeroEmformatoDeString = String(numero)

console.log(numeroEmformatoDeString, typeof numeroEmformatoDeString)

console.log(Number('12312345'))
console.log(parseFloat('12312345.333'))
console.log(parseInt('12312345.33'))
console.log(Boolean(1))

console.clear()

// coerção implícita ( automática)

console.log('10' + 10)                  //entende que é texto
console.log('10' - 1)                   //entende que é número
console.log(10 - 'ara')                 //not a number - reconhece que não é um némero

