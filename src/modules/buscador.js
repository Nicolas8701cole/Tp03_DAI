import fs from 'fs/promises'

async function buscarProducto(params) {
    try {
        if (params && String(params).trim().length > 0) {
            const contenido = await fs.readFile('./src/productos.json', 'utf8')
            const productos = JSON.parse(contenido)
            productos.forEach(prod => {
                if (prod.nombre == params) {
                    console.log("Producto encontrado" + "\n Nombre:" + prod.nombre + "\n Precio:" + prod.precio )
                }
            })
        }
        else {
            console.error("Error: Falta rellenar campos")
        }

    }
    catch (err) {
        console.error('Error:', err);
    }
}
export default buscarProducto
