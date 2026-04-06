import dayjs from 'dayjs'

function mostrarHoraYFechaYDefault() {
    const ahora = dayjs()

    console.log("Fecha actual: " + ahora.format('DD/MM/YYYY'))
    console.log("Hora actual: " + ahora.format('HH:mm'))
    console.log("Horario  bonito: " + ahora.format('dddd, 06 [de] MMMM [de] YYYY'))
    const fechaFormateada = dayjs('1967-07-06')
    console.log("Horario formateado: " + fechaFormateada.format('dddd, DD [de] MMMM [de] YYYY'))

}


export default mostrarHoraYFechaYDefault