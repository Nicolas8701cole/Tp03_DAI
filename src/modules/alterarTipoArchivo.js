import fs from 'fs/promises'

async function alterarTipoArchivo() {
    try {
        const contenido = await fs.readFile('./src/productos.json', 'utf8')
        const productos = JSON.parse(contenido)
        let contenidoNuevo = []
        for (const prod of productos) {
            if (typeof prod === 'string' && prod.trim()) { // Salteamos líneas vacías
                let lineaPosible = linea.split('=')
                let tipo = lineaPosible[0].trim() //Tomo el primer elemento del array y saca espacio
                let contenido = lineaPosible[1]?.trim() // "?" en teoría evita que el código rompa en caso de undefined

                if (tipo && contenido) {
                    contenidoNuevo.push(`${nombre}, ${precio}`).join('\n')
                }
            }
            else if (prod.nombre && prod.precio) {
                contenidoNuevo.push(`${prod.nombre}, ${prod.precio}`)
            }

        }
        const textoFinal = contenidoNuevo.join('\n');
        await fs.writeFile('./src/productos.csv', textoFinal)
        console.log("Archivo creado correctamente.")
        console.log("nombre,precio")
        for(const cadaUno of contenidoNuevo){
            console.log(cadaUno)
        }

    }
    catch (err) {
        console.error('Error:', err);
    }
}
export default alterarTipoArchivo
