
function aplicarEstiloclaro(){
    document.getElementById('pruebaid').href = 'estilo1_claro.css';
}
function aplicarEstilooscuro(){
    document.getElementById('pruebaid').href = 'estilo2_oscuro.css';
}


//var boton= document.getElementById("boton")
//boton.addEventListener


function generarWeb(){
    var div1 = document.getElementById("div1");


    var header1 = document.createElement("header");
    var h1 = document.createElement("h1");
    var contenidotitulo = document.createTextNode("Mi Increíble Sitio Web de David");
    h1.appendChild(contenidotitulo);
    header1.appendChild(h1);


    var nav1 = document.createElement("nav")
    var ul1 = document.createElement("ul")
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    var li3 = document.createElement("li")
    var contenidoli1 = document.createTextNode("Inicio")
    var contenidoli2 = document.createTextNode("Galeria")
    var contenidoli3 = document.createTextNode("Contacto")
    li1.appendChild(contenidoli1)
    li2.appendChild(contenidoli2)
    li3.appendChild(contenidoli3)
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    nav1.appendChild(ul1)
    header1.appendChild(nav1)
    div1.appendChild(header1)


    var main1 = document.createElement("main")
    var section1 = document.createElement("section")
    var h2 = document.createElement("h2")
    var p2 = document.createElement("p")
    var contenidoh2 = document.createTextNode("Sección Principal")
    var contenidop2 = document.createTextNode("Más contenido de ejemplo para ilustrar")
    h2.appendChild(contenidoh2)
    p2.appendChild(contenidop2)
    main1.appendChild(section1)
    section1.appendChild(h2)
    section1.appendChild(p2)
    div1.appendChild(main1)


    var footer1 = document.createElement("footer")
    var p3 = document.createElement("p")
    var contenidop3 = document.createTextNode("© 2025 Mi Web. Todos los derechos reservados.")


    p3.appendChild(contenidop3)
    footer1.appendChild(p3)
    div1.appendChild(footer1)
    }

    function vaciarWeb(){
        let mains = document.getElementsByTagName("main");
        for(let i = mains.length-1 ; i >= 0 ; i--){
          let main = mains[mains.length-1];
          main.remove(main)
        }


        let footers = document.getElementsByTagName("footer");
        for(let i = footers.length-1 ; i >= 0 ; i--){
          let footer = footers[footers.length-1];
          footer.remove(footer)
        }
        let headers = document.getElementsByTagName("header");
        for(let i = headers.length-1 ; i >= 0 ; i--){
          let header = headers[headers.length-1];
          header.remove(header)
        }
    }

