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



function Nombre() {
    let nombre;
    do {
        nombre = prompt("Ingresa tu nombre (mínimo 3 caracteres):");
        if (nombre.length < 3) alert("Nombre inválido. Intenta de nuevo.");
    } while (nombre.length < 3);
    return nombre;
}

function Correo() {
    let correo;
    do {
        correo = prompt("Ingresa tu correo electrónico:");
        if (!correo.includes("@") || !correo.includes(".")) {
            alert("Correo inválido");
        }
    } while (!correo.includes("@") || !correo.includes("."));
    return correo;
}

function Edad() {
    let edad;
    do {
        edad = parseInt(prompt("Ingresa tu edad (debe ser un número mayor a 0):"));
        if (edad <= 0) {
            alert("Edad inválida. Debe ser un número mayor a 0.");
        }
    } while (!edad > 0);
    return edad;
}

function Contraseña() {
    let contraseña;
    do {
        contraseña = prompt("Ingresa tu contraseña (mínimo 8 caracteres):");
        if (contraseña.length < 8) {
            alert("Contraseña inválida. Debe tener al menos 8 caracteres.");
        }
    } while (!contraseña.length >= 8);
    return contraseña;
}

function Formulario() {
    let datos = {
        nombre: Nombre(),
        correo: Correo(),
        edad: Edad(),
        contraseña: Contraseña(),
    };

    console.log("Todos los datos son válidos.");
    console.log("Datos ingresados:");
    console.log(`Nombre: ${datos.nombre}`);
    console.log(`Correo: ${datos.correo}`);
    console.log(`Edad: ${datos.edad}`);
    console.log(`Contraseña: ${datos.contraseña}`); 
}

Formulario()






let numero = prompt("Introduce un número: ");
numero = parseInt(numero, 10);

if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Introduce un número válido.");
}

20







const frutas2 = ["Manzana", "Plátano", "Naranja", "Fresa", "Uva"];

for (let fruta of frutas2) {
    console.log(fruta);
}






function Nombre() {
    let nombre;
    do {
        nombre = prompt("Ingresa tu nombre (mínimo 3 caracteres):");
        if (!isNaN(nombre)||nombre.length < 3) alert("Nombre inválido. Intenta de nuevo.");
    } while (!isNaN(nombre)||nombre.length < 3);
    return nombre;
}

function Correo() {
    let correo;
    do {
        correo = prompt("Ingresa tu correo electrónico:");
        if (!correo.includes("@") || !correo.includes(".")) {
            alert("Correo inválido");
        }
    } while (!correo.includes("@") || !correo.includes("."));
    return correo;
}

function Edad() {
    let edad;
    do {
        edad = parseInt(prompt("Ingresa tu edad (debe ser un número mayor a 0):"));
        if (isNaN(edad) || edad <= 0) {
            alert("Edad inválida. Debe ser un número mayor a 0.");
        }
    } while (isNaN(edad) || edad <= 0);
    return edad;
}


function Formulario() {
    let datos = {
        nombre: Nombre(),
        correo: Correo(),
        edad: Edad(),
    };

    console.log("Todos los datos son válidos.");
    console.log("Datos ingresados:");
    console.log(`Nombre: ${datos.nombre}`);
    console.log(`Correo: ${datos.correo}`);
    console.log(`Edad: ${datos.edad}`);
}

Formulario()


var parrafo= document.createElement("h3");
var contenido = document.createTextNode("hola");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);
alert(document.body.innerHTML)




var parrafo =document.getElementById("mi");
parrafo.innerHTML="Nuevo <strong>contendido</strong>";
parrafo.style.backgroundColor="red";
*/
alert(document.getElementsByTagName("img").length)

var a=document.getElementsByTagName("img")
alert(a[a.length-1].src)


