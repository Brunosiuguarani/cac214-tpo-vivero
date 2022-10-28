
function validacionformulario(){
    let formulario = document.getElementById('contact-form');
    if (formulario.nombre.value.length > 20) {
        alert("Error nombre muy largo")
        return false 
    }
    if (formulario.nombre.value.length == 0) {
        alert("Ingrese un nombre")
        return false 
    }

    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(formulario.email.value) ){alert('El Email no es válido')
    return false
    }
    
    if (formulario.mensaje.value.length == 0){
        alert('Ingrese su consulta')
        return false
    }
 return true
}

