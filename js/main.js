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
formulario.addEventListener("submit", async function (event) {
    //evitamos que la pagina se recargue
    event.preventDefault();

    //obtenemos los valores que escribio el usuario

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    //validaciones
    if (nombre === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Por favor, escribe un correo válido.");
        return;
    }

    if (mensaje.length < 10) {
        alert("Cuéntanos un poco más sobre lo que necesitas (mínimo 10 caracteres).");
        return;
    }

    //si todo se encuentra bien enviamos a formspree
    try {
        const respuesta = await fetch(formulario.action, {
            method: "POST",
            body: new FormData(formulario),
            headers: { Accept: "application/json" },
        });

        if (respuesta.ok) {
            alert("¡gracias! Tu solicitud fue enviada correctamente.")
            formulario.reset();
        } else {
            alert("Hubo un problema al enviar. Intenta de nuevo.")
        }
    } catch (error) {
        alert("Error de conexión. Revisa tu internet e inténtalo nuevamente.")
    }

});

//animacion al hacer scroll

//agarramos las secciones con la clase "aparece"
const secciones = document.querySelectorAll(".aparece");

//crear el observador que vigila cuando entran en pantalla
const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }    
    });
});

//se le dice al observador que vigile cada seccion
secciones.forEach(function(seccion) {
    observador.observe(seccion);
});