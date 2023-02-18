function validateName(){
    var camponombre = document.getElementById('Nombre');
    var nombreok = /^[A-Za-z\s]+$/;
    var nombreno = document.getElementById('nameError');

    if(camponombre.value == 0){
        nombreno.innerHTML = "Rellene este campo";
        camponombre.classList.add("novalido");
        camponombre.classList.add("errorIcono_");
        return false;
        
    }
    else if(nombreok.test(camponombre.value)){
        camponombre.classList.remove("novalido");
        camponombre.classList.remove("errorIcono_");
        nombreno.innerHTML = "";
        camponombre.classList.add("valido");
        camponombre.classList.add("aciertoIcono_");
        return true;
    }
    else {
        nombreno.innerHTML = "Nombre inválido";
        camponombre.classList.add("novalido");
        camponombre.classList.add("errorIcono_");
        return false;
    }

}
function validateEmail(){
    var campoemail = document.getElementById('Email');
    var emailok = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var emailno = document.getElementById('emailError');
    if(campoemail.value == 0){
        emailno.innerHTML = "Rellene este campo";
        campoemail.classList.add("novalido");
        campoemail.classList.add("errorIcono_");
        return false;     
    }
    else if(emailok.test(campoemail.value)){
        campoemail.classList.remove("novalido");
        campoemail.classList.remove("errorIcono_");
        emailno.innerHTML = "";
        campoemail.classList.add("valido");
        campoemail.classList.add("aciertoIcono_");
        return true;
    }
    else {
        emailno.innerHTML = "Email inválido";
        campoemail.classList.add("novalido");
        campoemail.classList.add("errorIcono_");
        return false;
    }
}
function validateClave(){
    var campoclave = document.getElementById('Clave');
    var claveok = /^[\s\S]{1,8}$/;
    var claveno = document.getElementById('claveError');
    if(campoclave.value == 0){
        claveno.innerHTML = "Rellene este campo";
        campoclave.classList.add("novalido");
        campoclave.classList.add("errorIcono_");
        return false; 
    }
    else if(claveok.test(campoclave.value)){
        campoclave.classList.remove("novalido");
        campoclave.classList.remove("errorIcono_");
        claveno.innerHTML = "";
        campoclave.classList.add("valido");
        campoclave.classList.add("aciertoIcono_");
        return true;
    }
    else {(campoclave.lenght<8)
        claveno.innerHTML = "No debe de tener más de 8 caracteres";
        campoclave.classList.add("novalido");
        campoclave.classList.add("errorIcono_");
        return false;
    }

}
function validateConfirmar(){
    var campoclave = document.getElementById('Clave');
    var confirmarok = document.getElementById('Confirmar')
    var confirmarno = document.getElementById('confirmarError');
    if(confirmarok.value == 0){
        confirmarno.innerHTML = "Rellene este campo";
        confirmarok.classList.add("novalido");
        confirmarok.classList.add("errorIcono_");
        return false;   
    }
    else if(campoclave.value == confirmarok.value){
        confirmarok.classList.remove("novalido");
        confirmarok.classList.remove("errorIcono_");
        confirmarno.innerHTML = "";
        confirmarok.classList.add("valido");
        confirmarok.classList.add("aciertoIcono_");
        return true;
    }

    else {
        confirmarno.innerHTML = "Las contraseñas no coinciden";
        confirmarok.classList.add("novalido");
        confirmarok.classList.add("errorIcono_");
        return false;
    }
}


function validateFinal() {

    if(validateConfirmar() && validateClave() && validateEmail() && validateName()) {
        alert("La inscripción ha sido correcta");
        return true; }

    else {
        return false;
    }
}
