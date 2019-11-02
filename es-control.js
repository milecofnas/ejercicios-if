let nombreIngresado = prompt("¿Cuál es tu nombre?")
let contraseñaIngresada = prompt("Ingrese la contraseña")

let usuario = "AdaLove"
let contraseña = "ada2019"
if (nombreIngresado == usuario && contraseñaIngresada == contraseña){
    alert( `Bienvenida, ${usuario}`)
}
else{
    alert("Los datos ingresados no son correctos")
}

let numeroIngresado = prompt("Ingrese un número")
let numero = numeroIngresado % 2 

if (numero == 0 ){
    alert("El número es par")
}
else {
    alert("El número ingresado es impar")
}

let edadIngresada = prompt("Por favor, ingrese su edad")
if (edadIngresada >= 18){
    alert("Usted es mayor de edad")
}
else{
    alert("Usted es menor de edad")
}
