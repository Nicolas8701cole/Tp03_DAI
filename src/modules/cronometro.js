function cronometro(){
    let cuenta = 10
    const intervalo = setInterval((() => {
        console.log(cuenta)
        if (cuenta === 0){
            clearInterval(intervalo)
            setTimeout(() => {
                console.log("Buuuum")
            }, 100)
        }
        cuenta--
    }), 1000)
}
export default cronometro