document.addEventListener("DOMContentLoaded", function () {
    // Usuario y contraseña predefinidos
    const usuarioValido = "admin";
    const contraseñaValida = "123456";

    // Obtener el formulario y el mensaje
    const form = document.getElementById("loginForm");
    const mensaje = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores ingresados por el usuario
        const usuarioIngresado = document.getElementById("uname").value;
        const contraseñaIngresada = document.getElementById("pass").value;

        // Verificar credenciales
        if (usuarioIngresado === usuarioValido && contraseñaIngresada === contraseñaValida) {
            mensaje.textContent = "Inicio de sesión exitoso.";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "Usuario o contraseña incorrectos.";
            mensaje.style.color = "red";
        }
    });
});
