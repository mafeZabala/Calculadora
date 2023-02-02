/* contiene el resultado o la operacion */
let resultadoParcial = ""
/* la operacion que se esta realizando */
let operacionRealizada= document.getElementById("operacion")
/*Contiene el resultado */
let resultado = document.getElementById("resultado")
/* operador seleccionado */
let operadorSeleccionado = ""
/* numeor ingresado */
let numeroIngresado = ""
/* saber si seleccionaron un numero o una operacion
*/
let ultimoDigitoSeleccionado =""
let contenedorPrincipal = document.getElementById("contenedor")
/* voy a concatenar el numero y operacion  */ 
function operador(num){
    numeroIngresado += num
    resultadoParcial += num
  
    /* guardamos la ultima tecla seleccionada por ultima vez */
    if(ultimoDigitoSeleccionado =="operacionRealizada"){
        ultimoDigitoSeleccionado =="numeroIngresado"
    }
  
    operacionRealizada.innerHTML= resultadoParcial
}
window.addEventListener("keydown",(element)=>{
    const arrayNumeros=['1','2','3','4','5','6','7','8','9','0']
    const arraySignos=['+','-','*','/']
    if(element.key ==="Backspace"){
        limpiar()
    }
    if(arrayNumeros.includes(element.key)){
        operador(element.key)
    }
    if(arraySignos.includes(element.key)){
        operacion(element.key)
    }
    if(element.key === "Enter"){
        calculoMatematico() 
    }
})

/* limpiar */
function limpiar(){
    operadorSeleccionado =""
    resultadoParcial=""
    resultado.innerHTML =""
    numeroIngresado=""
    operacionRealizada.innerHTML=0
}
function operacion(operacion){
    /* guardo la operacion que se eligio */
    operadorSeleccionado = operacion
    /* actualiza la letra que presionaron */
    ultimoDigitoSeleccionado="operacionRealizada"
    /* se realiza la operacion */
    resultadoParcial += operacion
    numeroIngresado=0
    operacionRealizada.innerHTML= resultadoParcial
}
/*  */
function calculoMatematico () {
    /* eval: es para evaluar la formula que esta en un forma string */
    resultadoParcial = eval(resultadoParcial)
    resultado.innerHTML = resultadoParcial
   
    /* se convierte en string por si la formula continua */
    resultadoParcial= resultadoParcial.toString()
    numeroIngresado = ''
    operacionRealizada.innerHTML = resultadoParcial
    console.log({resultadoParcial, numeroIngresado})
}