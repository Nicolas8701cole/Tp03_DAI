import fs from 'fs/promises' 


async function leerArchivo() {
    try{
        const contenido = await fs.readFile('./src/productos.json', 'utf8')//utf8 el formato
        const productos = JSON.parse(contenido)
        productos.forEach(prod => {
        console.log(prod.nombre + ": " +  prod.precio + "\n ESPACIO")
        })
    }
    catch(err){
    console.error('Error:', err);
    }
}

leerArchivo()