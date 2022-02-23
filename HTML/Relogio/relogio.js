function verHora(){

    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    document.getElementById('horario').innerHTML =  '${horas} : ${minutos} : ${segundos}'

}