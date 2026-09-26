const boton = document.getElementById("abrir");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

boton.addEventListener("click", () => {

    // Ocultar la pantalla inicial
    inicio.style.display = "none";

    // Mostrar el ramo
    regalo.classList.add("visible");

    // Subir al inicio del regalo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
