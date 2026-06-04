console.log("Javascript esta funcionando");

// agarramos los elementos que necesitamos
const boton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

// escuchamos el click en el boton
boton.addEventListener("click", function() {
    //al hacer click agregamos o quitamos la clase activa
    menu.classList.toggle("activo");
});