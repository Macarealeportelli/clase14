//ejercicio 1
const sumar = (nro1, nro2) => {
    return nro1 + nro2
}

console.log (sumar (2,3))
console.log (sumar (1.2, 3.4))
console.log (sumar (3, -5))

//ejercicio 2

const restar = (nro1, nro2) => {
    return nro1 - nro2
}

console.log (restar (3,2))
console.log (restar (10, 5.5))
console.log (restar (3, 5))

//ejercicio 3

const multiplicar = (nro1, nro2) => {
    return nro1 * nro2
}

console.log (multiplicar (2,3))
console.log (multiplicar (4, 0.5))

//ejercicio 4
const dividir = (nro1, nro2) => {
    return nro1 / nro2
}

console.log (dividir (2,3))
console.log (dividir (1.2, 3.4))
console.log (dividir (3, -5))

//ejercicio 5

const calcularAreaTriangulo = (base , altura) => {
    let multiplica = base*altura
    return multiplica/2
}

console.log (calcularAreaTriangulo(3, 4))
console.log (calcularAreaTriangulo(5, 6))

//ejercicio 6

let mensajeAGritar = prompt("Ingrese un saludo")

const gritar = (saludo) => {
    return `¡${saludo}!`
}
    
console.log(gritar(mensajeAGritar)) 

//ejercicio 7

let nombre = prompt ("Por favor escriba su nombre")
let apellido = prompt ("Ahora escriba su apellido")

const obtenerNombreCompleto = (nombre, apellido)=>{
    return `${nombre} ${apellido}`
}

console.log (obtenerNombreCompleto (nombre,apellido))

//ejercicio 8

let nombre8 = prompt ("¿Cuál es tu nombre?")

const saludarConNombre = (nombre8)=>{
    return `Hola ${nombre8}, un gusto conocerte`
}

console.log (saludarConNombre(nombre8))

//ejercicio 9

const saludarGritando=(nombre, apellido)=>{
   let nombreCompleto=obtenerNombreCompleto(nombre, apellido)
   let saludo = saludarConNombre(nombreCompleto)
   let grito= gritar (saludo)
   return grito
}

console.log (saludarGritando(nombre, apellido))


//ejercicio 17
const obtenerCompetencia =(a,b)=>{
    return `${a}  vs. ${b}`
}

console.log (obtenerCompetencia ("JavaScript", "Python"))
console.log (obtenerCompetencia ("Coca", "Pepsi"))
console.log (obtenerCompetencia ("Perros", "Gatos"))

//ejercicio 18

const generarEmail=(usuario,dominio)=>{
    return `${usuario}@${dominio}`
}

console.log(generarEmail("macarenarealeportelli", "gmail.com"))

//ejercicio 19

const calcularPuntaje =(a, b, c)=>{
  let facil= (a*3)
  let normal= (b*5)
  let dificil= (c*10)
  return facil+normal+dificil
}

console.log(calcularPuntaje (3,0,0))
console.log(calcularPuntaje (0,2,1))
console.log(calcularPuntaje (5,1,2))