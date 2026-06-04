console.log("Javascript esta funcionando");

// agarramos los elementos que necesitamos
const boton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

// escuchamos el click en el boton
boton.addEventListener("click", function() {
    //al hacer click agregamos o quitamos la clase activa
    menu.classList.toggle("activo");
});

// validacion del formulario

//agarramos el formulario
const formulario = document.querySelector(".formulario");

//escuchamos el evento del submit
formulario.addEventListener("submit", function (event) {
    //evitamos que la pagina se recargue
    event.preventDefault();

    //obtenemos los valores que escribio el usuario

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    //validaciones
    if (nombre === "") {
        alert ("porfavor, escribe tu nombre");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("porfavor escribe un coreo valido.");
        return;
    }

    if (mensaje.length < 10) {
        alert("cuentanos un poco mas sobre lo que necesitas (minino 10 caracteres)");
        return;
    }

    //si todo se encuentra bien
    alert("Gracias!, Tu solicirud fue enviada correctamente");
    formulario.reset();

});