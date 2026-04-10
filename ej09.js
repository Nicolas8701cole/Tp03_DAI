function analizarContrasenia(texto) {
    let tieneMayus = false
    let tieneNum = false
    let debuelve
    if (texto.length >= 8) {
        for (let letra of texto) {
            if (letra !== letra.toUpperCase() && letra.toLowerCase()) {
                tieneMayus = true
            }
            if (!isNaN(letra) && letra !== ' ') {
                tieneNum = true
            }
        }
    }
    if (tieneMayus && tieneNum) {
        debuelve = "Password válida"
    }
    else {
        debuelve = "Password inválida"
    }
    return debuelve
}
console.log(analizarContrasenia("HolaPedritos"))
console.log(analizarContrasenia("HolaPedritos54"))