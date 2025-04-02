let inventario = [];
//Funcion para menu
function mostrarMenu() {
    return parseInt(prompt(
        "Opciones diponibles \n" +
        "1. Agregar producto \n" +
        "2. Mostrar prodcutos \n" +
        "3. Buscar producto por nombre \n" +
        "4. Eliminar producto\n"+
        "5. Salir \n" +
        "Elije una opcion"

    ));
}
function agregarProducto() {
    let nombre = prompt("Introduce el nombre del producto:");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto: "));
    let precio = parseInt(prompt("Introduce el precio del producto"));

    if (cantidad > 0 && precio > 0) {
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado");
    } else {
        alert("La cantidad y precio debe ser numeros positivos");
    }
}

function mostrarProducto() {

    if (inventario.length === 0) {
        alert("No hay productos");

    } else {
        let mensaje = "Productos en inventario \n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ${i + 1} \n` + `Nombre: ${inventario[i].nombre}` + ` Cantidad: ${inventario[i].cantidad}` + ` Precio: ${inventario[i].precio}\n`
                + "--------------------------------\n"
                ;
        }
        alert(mensaje);
    }
}

function buscarProducto() {
    let nombreBuscado = prompt("Introduce el nombre del producto a buscar:");
    let productoEncontrado = inventario.find(producto => producto.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (productoEncontrado) {
        alert(`Producto encontrado: \n Nombre: ${productoEncontrado.nombre} ${productoEncontrado.cantidad} ${productoEncontrado.precio}`);
    } else {
        alert("Producto no encontrado");
    }
}

function eliminarProducto() {
    let nombreEliminar = prompt("Introduce el nombre del producto a eliminar:");
    let index = inventario.findIndex(producto => producto.nombre.toLowerCase() === nombreEliminar.toLowerCase());

    if (index !== -1) {
        inventario.splice(index, 1);
        alert("Producto eliminado exitosamente");
    } else {
        alert("Producto no encontrado");
    }
}

function inicarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                eliminarProducto();
                break;
            case 5:
                alert("Saliendo del programa ....");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
        }
    }
    alert("Programa Finalizado");

}

inicarPrograma();