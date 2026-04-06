import fs from 'fs/promises'


async function agregarProducto(nombre, precio) {
    try {
        if (nombre && String(nombre).trim().length > 0 && precio != null && precio != undefined && String(precio).trim().length > 0) {
            const contenido = await fs.readFile('./src/productos.json', 'utf8')
            const productos = JSON.parse(contenido)
            productos.push({ nombre, precio })
            await fs.writeFile('./src/productos.json', JSON.stringify(productos, null, 2))
            productos.forEach(prod => {
                console.log(prod.nombre + ": " + prod.precio + "\n ESPACIO")
            })
        }
        else{
            console.error("Error: Falta rellenar campos")
        }

    }
    catch (err) {
        console.error('Error:', err);
    }
}

export default agregarProducto