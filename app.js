
//TABLAS DE MULTIPLICACION

const inputNum = document.getElementById("num")
const tablaMulti = document.getElementById("tabla-multi")

const multi = () => {

    const numeroUser = parseInt(inputNum.value)

    let template = '';

    for (i = 0; i <= 10; i++) {
        console.log(template += numeroUser + 'x' + i + '=' + numeroUser * i + '<br>');
    }
    tablaMulti.innerHTML = template;
}

