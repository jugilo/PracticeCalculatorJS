let VALOR_ACOMULADO = []

function extraerValoresClase(objeto){
    let arraySigno = []
    for(let i = 0; i<objeto.length; i++){
        arraySigno[i]=objeto[i].value
    }
    return  arraySigno
}

function agregarOperador(boton){
    if(VALOR_ACOMULADO[VALOR_ACOMULADO.length]==="*" || VALOR_ACOMULADO[VALOR_ACOMULADO.length]==="/" || VALOR_ACOMULADO[VALOR_ACOMULADO.length]==="+" || VALOR_ACOMULADO[VALOR_ACOMULADO.length]==="-"){
        return
    }else{
        let valorBoton = boton.value
        VALOR_ACOMULADO.push(valorBoton)
        const id = document.getElementById('espacio')
        const acum = document.getElementById('acomulado')
        acum.innerHTML = acum.innerHTML + id.innerHTML + boton.value
        id.innerHTML = ''
        console.log(VALOR_ACOMULADO)
    }
}

const agregarNumero = (boton) =>{
    let valorBoton = boton.value
    VALOR_ACOMULADO.push(valorBoton)
    const id = document.getElementById('espacio')
    id.innerHTML = id.textContent + valorBoton
    console.log(VALOR_ACOMULADO)
}

const borrar = () =>{
    VALOR_ACOMULADO.pop()
    const espacio = document.getElementById('espacio')
    let result = espacio.textContent
    let array = result.split('')
    array.pop()
    const res = array.join("")
    espacio.innerHTML = res
    console.log(VALOR_ACOMULADO)
    if(espacio.innerHTML === ''){
        const acum = document.getElementById('acomulado')
        espacio.innerHTML = acum.innerHTML
        acum.innerHTML = ''
    }
}


const resultado = () => {
    const id = document.getElementById('espacio')
    const arrayEspacio = id.textContent.split('')
    if(arrayEspacio[0]==='+' || arrayEspacio[0]==='-' || arrayEspacio[0]==='*' || arrayEspacio[0]==='/'){
        alert("Error en la operacion, tienes un operador al final de la expresión")
        id.textContent('')
    }else if(arrayEspacio[arrayEspacio.length-1]==='+' || arrayEspacio[arrayEspacio.length-1]==='-' || arrayEspacio[arrayEspacio.length-1]==='*' || arrayEspacio[arrayEspacio.length-1]==='/'){
        alert("Error en la operacion, tienes un operador al final de la expresión")
    }
    const arraySignos = extraerValoresClase(document.getElementsByClassName('signo'))
    console.log(arrayEspacio)
    console.log(arraySignos)
}
