//Haz tú validación en javascript acá

const botonEnviar = document.querySelector(".formcontato__botao");

// botonenviar deshabilitado con fondo gris
function DeshabilitarEnviar() {
  botonEnviar.style.backgroundColor = "#ccc";
  botonEnviar.disabled = true;
}


//verificar los inputs y habilitar boton enviar
const camposContacto = document.querySelectorAll(".campo_contacto");

for (let i = 0; i < camposContacto.length; i++) {
  camposContacto[i].onkeyup = () => {
  if (camposContacto[0].value && camposContacto[1].value && camposContacto[2].value && camposContacto[3].value) {
    console.log("todos tienen datos");
    botonEnviar.style.backgroundColor = "#2a7ae4";
    botonEnviar.removeAttribute("disabled");
  } else{
    botonEnviar.style.backgroundColor = "#cccccc";
    botonEnviar.disabled = true;
  }
} 
}

// Event Listener del boton
botonEnviar.addEventListener("click", validar);

//funcion validar datos
function validar(){
  const nombre = document.querySelector(".formcontato__input[name='nombre']").value;
  const email = document.querySelector(".formcontato__input[name='email']").value;
  const asunto = document.querySelector(".formcontato__input[name='asunto']").value;
  const mensaje = document.querySelector(".formcontato__textarea").value;
  
  //validar que los campos no esten vacios
  if (nombre.trim() == "" || email.trim() == "" || asunto.trim() == "" || mensaje.trim() == ""){
    alert("Por favor complete todos los campos");
    return false;
  }
  // Validar longitud maxima del nombre
  if (nombre.length > 50){
    alert("El nombre no puede tener más de 50 carácteres");
    return false;
  }
 // Validar el formato del email
  const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validarEmail.test(email)) {
    alert('El email no es válido');
    return false;
  }
  // Validar longitud maxima del asunto
  if (asunto.length > 50){
    alert("El asunto no puede tener más de 50 carácteres");
    return false;
  }
  // Validar longitud maxima de mensaje
  if (mensaje.length > 300){
    alert("El mensaje no puede tener más de 300 carácteres");
    return false;
  }
}

//se llama a la funcion para deshabilitar boton
DeshabilitarEnviar();