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

nombreIngresado === usuario && contraseñaIngresada === contraseña ? alert( `Bienvenida, ${usuario}`) : alert("Los datos ingresados no son correctos")

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

edadIngresada >=18 ? alert("Usted es mayor de edad ") : alert("Usted es menor de edad")

/////EJERCICIO 6 ///////

let horaActual = prompt("Por favor, diga qué hora es")

if (horaActual >= 5 && horaActual < 12) {
    alert("¡Buen día!")
}
else if (horaActual >=12 && horaActual <= 20) {
    alert("¡Buenas tardes!")
}
else {
    alert("¡Buenas noches!")
};
///EJERCICIO 7 ///////

let notaAlumno = prompt("Ingrese su nota. Escriba un número del 0 al 10")

if (notaAlumno >= 9){
    alert("La nota es excelente")
}
else if (notaAlumno < 9 && notaAlumno >= 6) {
    alert("La nota es buena")
}
else {
    alert("El exámen no está aprobado")
}