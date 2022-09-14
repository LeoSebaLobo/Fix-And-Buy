

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


function producto (id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    
    const producto1 = new producto (1, "Funda1", 2299, "Funda")
    const producto2 = new producto (2, "Funda2", 3899, "Funda")
    const producto3 = new producto (3, "Funda3", 3499, "Funda")
    const producto4 = new producto (4, "Funda4", 3799, "Funda")
    const producto5 = new producto (5, "Funda5", 5299, "Funda")
    const producto6 = new producto (6, "Funda6", 999, "Funda")
    const producto7 = new producto (7, "Funda7", 1499, "Funda")
    const producto8 = new producto (8, "Funda8", 1999, "Funda")
    const producto9 = new producto (9, "Accesorio1", 1199, "Accesorio")
    const producto10 = new producto (10, "Accesorio2", 999, "Accesorio")
    const producto11 = new producto (11, "Accesorio3", 1999, "Accesorio")
    const producto12 = new producto (12, "Accesorio4", 499, "Accesorio")
    const producto13 = new producto (13, "Accesorio5", 499, "Accesorio")
    const producto14 = new producto (14, "Accesorio6", 2199, "Accesorio")
    const producto15 = new producto (15, "Accesorio7", 17499, "Accesorio")
    const producto16 = new producto (16, "Accesorio8", 4499, "Accesorio")
    const producto17 = new producto (17, "Auricular1", 6199, "Auricular")
    const producto18 = new producto (18, "Auricular2", 22499, "Auricular")
    const producto19 = new producto (19, "Auricular3", 2199, "Auricular")
    const producto20 = new producto (20, "Auricular4", 23799, "Auricular")
    const producto21 = new producto (21, "Auricular5", 1899, "Auricular")
    const producto22 = new producto (22, "Auricular6", 1899, "Auricular")
    const producto23 = new producto (23, "Auricular7", 7899, "Auricular")
    const producto24 = new producto (24, "Auricular8", 5199, "Auricular")
    const producto25 = new producto (25, "Parlante1", 3199, "Parlante")
    const producto26 = new producto (26, "Parlante2", 29999, "Parlante")
    const producto27 = new producto (27, "Parlante3", 13199, "Parlante")
    const producto28 = new producto (28, "Parlante4", 8199, "Parlante")
    const producto29 = new producto (29, "Parlante5", 14999, "Parlante")
    const producto30 = new producto (30, "Parlante6", 5699, "Parlante")
    const producto31 = new producto (31, "Parlante7", 2699, "Parlante")
    const producto32 = new producto (32, "Parlante8", 5499, "Parlante")

let filtroPrecio1 = producto.filter((producto) => producto.precio > 2500);
let filtroPrecio2 = producto.filter((producto) => producto.precio > 5000);
let filtroPrecio3 = producto.filter((producto) => producto.precio < 5000);
let filtroCategoria1 = producto.filter((producto) => producto.categoria = "Funda");
let filtroCategoria2 = producto.filter((producto) => producto.categoria = "Accesorio");
let filtroCategoria3 = producto.filter((producto) => producto.categoria = "Auricular");
let filtroCategoria4 = producto.filter((producto) => producto.categoria = "Parlante");

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

productos = prompt(`Ingrese el objeto que quiere comprar y tipee ESC al finalizar:
1 - Auricular
2 - Parlantes
3 - Accesorio
4 - Fundas
5 - Celular`)
}
alert(`El total de su compra es de ${totalCompra}$`)

const carritoCompras = []

carritoCompras.push("Auricular")
carritoCompras.push("Parlante")
carritoCompras.push("Accesorio")
carritoCompras.push("Fundas")
carritoCompras.push("Celular")
