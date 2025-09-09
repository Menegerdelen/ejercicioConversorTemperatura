

// mostrar resultado y valiudando
const resultadoTemperaturas = (  ) => {

    // guardar los datos ingresadfos por el usuario
    const datosCelcius = document.getElementById('datosCelsius').value;
    // parseando string a number
    const cGrados = parseFloat(datosCelcius)

    // mensaje de error y mostrar resultado
    const mostrarResultado = document.getElementById('mostrarResultado')

    // comprobar si el valor ingresado es numero
    if( isNaN( cGrados ) ){
        // mensaje de error
        const msjError = 'Error al ingresar datos, vuelva a ingresar un numero ej: 32.'
        // si la entrada no es numero mostramos el mensaje de error
        mostrarResultado.innerHTML = msjError
        return;
    } 
    
    // formulas para convertir
    const  kGrados = 273.15 + cGrados;
    const  fGrados = ( 1.8 * cGrados ) + 32

    // mensaje del  resultado
    const resultado = `Los C° ingresados son: ${cGrados}, equivalen a K°: ${kGrados.toFixed(2)}, y a F°: ${fGrados.toFixed(2)}.`
    
    // mostrar elr esultado en el html
    mostrarResultado.innerHTML = resultado;
}

// dom del boton donde se realizara la accion
const btnCalcular = document.getElementById('calcular')

// creando el evento
btnCalcular.addEventListener('click', resultadoTemperaturas)





