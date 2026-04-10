function analizarTexto(texto) {
    const caracteres = texto.length
    const palabras = texto.split(' ')
    let cantidadPalabras = 0
    let vocales = 0
    let consonantes = 0
    for (let palabra of palabras){
        cantidadPalabras++
    }
    for (let letras of texto) {
        if ("aeiou".includes(letras)){
            vocales++
        }
        else if(letras >= 'a' && letras <= 'z'){
            consonantes++
        }
    }
    return{
        caracteres: caracteres,
        palabras: cantidadPalabras,
        vocales: vocales,
        consonantes: consonantes
    }
}
console.log(analizarTexto("Hola mundo"))