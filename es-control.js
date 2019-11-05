///////EJERCICIO 1 ///////

let nombreIngresado = prompt("¿Cuál es tu nombre?")
let contraseñaIngresada = prompt("Ingrese la contraseña")

let usuario = "AdaLove"
let contraseña = "ada2019"
/* if (nombreIngresado == usuario && contraseñaIngresada == contraseña){
    alert( `Bienvenida, ${usuario}`)
}
else{
    alert("Los datos ingresados no son correctos")
}*/

nombreIngresado === usuario && contraseñaIngresada === contraseña ? alert(`Bienvenida, ${usuario}`) : alert("Los datos ingresados no son correctos")

///////EJERCICIO 2 ///////

let numeroIngresado = prompt("Ingrese un número")
let numero = numeroIngresado % 2

/* if (numero == 0 ){
    alert("El número es par")
}
else {
    alert("El número ingresado es impar")
}*/

numero === 0 ? alert("El numero es par") : alert("El número es impar")

///////EJERCICIO 3 ///////

let edadIngresada = prompt("Por favor, ingrese su edad")

/*if (edadIngresada >= 18){
    alert("Usted es mayor de edad")
}
else{
    alert("Usted es menor de edad")
}*/

edadIngresada >= 18 ? alert("Usted es mayor de edad ") : alert("Usted es menor de edad")

///////EJERCICIO 6 ///////

let horaActual = prompt("Por favor, diga qué hora es")

if (horaActual >= 5 && horaActual < 12) {
    alert("¡Buen día!")
}
else if (horaActual >= 12 && horaActual <= 20) {
    alert("¡Buenas tardes!")
}
else {
    alert("¡Buenas noches!")
};

///////EJERCICIO 7 ///////

let notaAlumno = prompt("Ingrese su nota. Escriba un número del 0 al 10")

if (notaAlumno >= 9) {
    alert("La nota es excelente")
}
else if (notaAlumno < 9 && notaAlumno >= 6) {
    alert("La nota es buena")
}
else {
    alert("El exámen no está aprobado")
}

///////EJERCICIO 8 ///////

let diaDeLaSemana = prompt("Por favor, ingrese un día de la semana")

if (diaDeLaSemana === "lunes") {
    alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
}
else if (diaDeLaSemana === "martes") {
    alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
}
else if (diaDeLaSemana === "miércoles") {
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
}
else if (diaDeLaSemana === "jueves") {
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
}
else if (diaDeLaSemana === "viernes") {
    alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
}
else if (diaDeLaSemana === "sábado") {
    alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
}
else if (diaDeLaSemana === "domingo") {
    alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
}
else {
    alert("Ud. no ingresó un día válido")
}

///////EJERCICIO 8 CON SWITCH ///////

let diaDeLaSemana = prompt("Ingrese un día de la semana")

switch (diaDeLaSemana) {
    case "lunes":
        alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
        break;
    case "martes":
        alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
        break;
    case "miercoles":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
        break;
    case "jueves":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
        break;
    case "viernes":
        alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
        break;
    case "sábado":
        alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
        break;
    case "domingo":
        alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
        break;
    default:
        alert("Ud. no ingresó un día válido")
        break;
}