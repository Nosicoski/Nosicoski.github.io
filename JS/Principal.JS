function copiarCorreo() {
    // Seleccionar el elemento con el correo electrónico
    var correo = document.getElementById("correo");

    // Crear un área de texto temporal
    var areaTexto = document.createElement("textarea");
    areaTexto.value = correo.innerText;
    document.body.appendChild(areaTexto);

    // Seleccionar y copiar el texto dentro del área de texto
    areaTexto.select();
    document.execCommand("copy");

    // Eliminar el área de texto temporal
    document.body.removeChild(areaTexto);

    // Mostrar la alerta personalizada
    var alerta = document.getElementById("alerta");
    var mensaje = document.getElementById("mensaje");
    mensaje.innerText = "¡Correo copiado al portapapeles!";
    alerta.classList.add("mostrar");

    // Ocultar la alerta después de unos segundos
    setTimeout(function() {
        alerta.classList.remove("mostrar");
    }, 1000);
}



function enviarMensajeWhatsApp() {
    var numeroTelefono = "3512806715"; // Tu número de teléfono sin el signo "+" ni espacios
    var mensaje = "Hola, estoy interesado en ..."; // Puedes cambiar el mensaje predeterminado si lo deseas

    // Construir el enlace de WhatsApp
    var url = "https://wa.me/" + numeroTelefono + "?text=" + encodeURIComponent(mensaje);

    // Redirigir al usuario a WhatsApp
    window.location.href = url;
}