let enviarCarro = document.querySelector(".botonCarrito")
console.log(enviarCarro)


enviarCarro.addEventListener("click", avisar)


function avisar() {
    alert("Su producto fue enviado al carrito de compras")
}

let productos = prompt(`Ingrese el objeto que quiere comprar y tipee ESC al finalizar:
1 - Auricular
2 - Parlante
3 - Accesorio
4 - Fundas
5 - Celular`)

function productosOpcion(productos) {
    if (productos !=1 || productos !=2 || productos !=3 || productos !=4 || productos !=5){
        alert("DEBE INGRESAR UN VALOR DEL 1 al 5");
        }
}

let suma = " "
let totalCompra = 


class Producto {
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}   
const productosDisponibles = [
    new Producto(1, "Funda1", 2299, "Funda"),
    new Producto(2, "Funda2", 3899, "Funda"),
    new Producto(3, "Funda3", 3499, "Funda"),
    new Producto (5, "Funda5", 5299, "Funda"),
    new Producto (4, "Funda4", 3799, "Funda"),
    new Producto (6, "Funda6", 999, "Funda"),
    new Producto (7, "Funda7", 1499, "Funda"),
    new Producto (8, "Funda8", 1999, "Funda"),
    new Producto (9, "Accesorio1", 1199, "Accesorio"),
    new Producto (10, "Accesorio2", 999, "Accesorio"),
    new Producto (11, "Accesorio3", 1999, "Accesorio"),
    new Producto (12, "Accesorio4", 499, "Accesorio"),
    new Producto (13, "Accesorio5", 499, "Accesorio"),
    new Producto (14, "Accesorio6", 2199, "Accesorio"),
    new Producto (15, "Accesorio7", 17499, "Accesorio"),
    new Producto (16, "Accesorio8", 4499, "Accesorio"),
    new Producto (17, "Auricular1", 6199, "Auricular"),
    new Producto (18, "Auricular2", 22499, "Auricular"),
    new Producto (19, "Auricular3", 2199, "Auricular"),
    new Producto (20, "Auricular4", 23799, "Auricular"),
    new Producto (21, "Auricular5", 1899, "Auricular"),
    new Producto (22, "Auricular6", 1899, "Auricular"),
    new Producto (23, "Auricular7", 7899, "Auricular"),
    new Producto (24, "Auricular8", 5199, "Auricular"),
    new Producto (25, "Parlante1", 3199, "Parlante"),
    new Producto (26, "Parlante2", 29999, "Parlante"),
    new Producto (27, "Parlante3", 13199, "Parlante"),
    new Producto (28, "Parlante4", 8199, "Parlante"),
    new Producto (29, "Parlante5", 14999, "Parlante"),
    new Producto (30, "Parlante6", 5699, "Parlante"),
    new Producto (31, "Parlante7", 2699, "Parlante"),
    new Producto (32, "Parlante8", 5499, "Parlante"),

]

let filtroPrecio1 = productosDisponibles.filter((producto) => producto.precio > 2500);
let filtroPrecio2 = productosDisponibles.filter((producto) => producto.precio > 5000);
let filtroPrecio3 = productosDisponibles.filter((producto) => producto.precio < 5000);
let filtroCategoria1 = productosDisponibles.filter((producto) => producto.categoria = "Funda");
let filtroCategoria2 = productosDisponibles.filter((producto) => producto.categoria = "Accesorio");
let filtroCategoria3 = productosDisponibles.filter((producto) => producto.categoria = "Auricular");
let filtroCategoria4 = productosDisponibles.filter((producto) => producto.categoria = "Parlante");

while (productos != "ESC"){

switch (productos){
    case "1":
        suma = 400;
    break;
    case "2":
        suma = 1500;
    break;
    case "3":
        suma = 1650;
    break;
    case "4":
        suma = 1900;
    break;
    case "5":
        suma = 2200;
    break
    default :
        suma = 0;
        productosOpcion(productos);
    break;
}



totalCompra += suma

alert(`El total de su compra es de ${totalCompra}$`)

const carritoCompras = []

carritoCompras.push("Auricular")
carritoCompras.push("Parlante")
carritoCompras.push("Accesorio")
carritoCompras.push("Fundas")
carritoCompras.push("Celular")
