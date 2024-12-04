// console.log('hola mundo'); 

// let x = 2; 

 
 

// let nombre = 'Pablo'; 

 
 

// let numeroentero=9; 

// let ndecimal=9.5; 

// let puntuacion=99; 

// let tienemascota=true; 

// let unavariable; 

// let nulo=null; 

 
 
 

// console.log(nombre); 

// console.log(puntuacion); 

// console.log(tienemascota); 

// console.log(unavariable); 

// console.log(nulo); 

 
 

// const numPI =3.1416; 

// console.log(numPI) 

 
 
 

// let edad =18; 

// let nombra = "pepe"; 

// console.log("hola soy +"+nombra+", tengo"+edad) 

 
 
 
 
 

// alert("bienbenino"); 

// var numero = prompt("meter numero"); 

// alert(numero+2); 

// numero= parseInt(numero); 

// alert(numero*2); 

 
 
 

// for (let index = 0; index < 10; index++) { 

// console.log(index) 

// } 

// let numeros= [1,2,3,4,5,6,7,8,9]; 

// for (let index = 0; index < numeros.length; index++) { 

// const element = numeros[index]; 

// console.log(element+"esto viene de una rray") 

// } 

// let carName = "Volvo";
// alert(carName); 
// let x=50;
// alert(x); 
// {
//     let x,y;
//     x=5;
//     y=10;
//     alert(x+y);
//     let z = x+y;
//     alert(z);
// }


/*
var Var = "var1";
let Let = "let1";


console.log("Var:", Var); 
console.log("Let:", Let); 


if (true) {
    var Var = "var2";
    let Let = "let2";

    console.log("Var:", Var);
    console.log("Let:", Let);
}

console.log("Var:", Var);
console.log("Let:", Let);

console.log("Let no se ha volcado ");

*/

let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");

numero1 = parseInt(numero1, 10);
numero2 = parseInt(numero2, 10);

let suma = numero1 + numero2;

alert("La suma de los dos números es: " + suma);

if (suma > 10) {
    console.log("La suma es mayor a 10.");
} else if (suma === 10) {
    console.log("La suma es igual a 10.");
} else {
    console.log("La suma es menor a 10.");
}


function validarNombre(nombre) {
    return nombre.length >= 3;
}

function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

function validarEdad(edad) {
    return !isNaN(edad) && edad > 0;
}

function validarContrasena(contrasena) {
    return contrasena.length >= 8;
}

function simuladorDeFormulario() {
    let nombre, correo, edad, contrasena;

    do {
        nombre = prompt("Introduce tu nombre (al menos 3 caracteres):");
        if (!validarNombre(nombre)) {
            alert("Error: El nombre debe tener al menos 3 caracteres.");
        }
    } while (!validarNombre(nombre));

    do {
        correo = prompt("Introduce tu correo electrónico (debe incluir @ y un dominio):");
        if (!validarCorreo(correo)) {
            alert("Error: El correo electrónico no es válido.");
        }
    } while (!validarCorreo(correo));

    do {
        edad = prompt("Introduce tu edad (debe ser un número mayor a 0):");
        edad = parseInt(edad, 10);
        if (!validarEdad(edad)) {
            alert("Error: La edad debe ser un número mayor a 0.");
        }
    } while (!validarEdad(edad));

    do {
        contrasena = prompt("Introduce tu contraseña (al menos 8 caracteres):");
        if (!validarContrasena(contrasena)) {
            alert("Error: La contraseña debe tener al menos 8 caracteres.");
        }
    } while (!validarContrasena(contrasena));

    console.log("Todos los datos son válidos.");
    console.log("Resumen de la información ingresada:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Edad:", edad);
    console.log("Contraseña: (oculta por seguridad)");
}

simuladorDeFormulario();




let numero = prompt("Introduce un número para ver su tabla de multiplicar:");
numero = parseInt(numero, 10);

if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, introduce un número válido.");
}

20

const frutas = ["Manzana", "Plátano", "Naranja", "Fresa", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


// Función para validar el nombre
function validarNombre() {
    let nombre;
    do {
        nombre = prompt("Introduce tu nombre (al menos 3 caracteres):");
        if (nombre.length < 3) {
            alert("Error: El nombre debe tener al menos 3 caracteres.");
        }
    } while (nombre.length < 3);
    return nombre;
}

// Función para validar el correo electrónico
function validarCorreo() {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let correo;
    do {
        correo = prompt("Introduce tu correo electrónico (debe incluir @ y un dominio):");
        if (!regexCorreo.test(correo)) {
            alert("Error: El correo electrónico no es válido.");
        }
    } while (!regexCorreo.test(correo));
    return correo;
}

// Función para validar la edad
function validarEdad() {
    let edad;
    do {
        edad = prompt("Introduce tu edad (debe ser un número mayor a 0):");
        edad = parseInt(edad, 10);
        if (isNaN(edad) || edad <= 0) {
            alert("Error: La edad debe ser un número mayor a 0.");
        }
    } while (isNaN(edad) || edad <= 0);
    return edad;
}

// Función principal
function validarFormulario() {
    const nombre = validarNombre();
    const correo = validarCorreo();
    const edad = validarEdad();

    console.log("Todos los datos son válidos.");
    console.log("Resumen de la información ingresada:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Edad:", edad);
}

// Llamar a la función principal
validarFormulario();
