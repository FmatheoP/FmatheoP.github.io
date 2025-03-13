let ventana = document.getElementById("ventana");
let vista = document.getElementById("vista");
let botonVentana = document.getElementById("activar");
let botonPopup0 = document.getElementById("popup0");
let botonPopup1 = document.getElementById("popup1");
let botonPopup2 = document.getElementById("popup2");
let botonPopup3 = document.getElementById("popup3");
let botonPopup4 = document.getElementById("popup4");
let botonPopup5 = document.getElementById("popup5");
let botonPopup6 = document.getElementById("popup6");
let botonPopup7 = document.getElementById("popup7");


let activo = false;

// Activar o desactivar la ventana flotante
botonVentana.addEventListener("click", () => {
    activo = !activo;
    ventana.style.display = activo ? "block" : "none";
});

// Seguir al mouse y centrar la ventana
document.addEventListener("mousemove", (event) => {
    if (activo) {
        let x = event.clientX - ventana.offsetWidth / 2;
        let y = event.clientY - ventana.offsetHeight / 2;

        ventana.style.left = `${x}px`;
        ventana.style.top = `${y}px`;

        vista.style.left = `-${x}px`;
        vista.style.top = `-${y}px`;
    }
});

// Crear ventana emergente con "Hola Mundo"
botonPopup0.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/DG/Prueba de color.jpeg", "_blank", "width=300,height=200");
});
botonPopup1.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/BJS/coloresRandom/coloresAleatorios.html", "_blank", "width=300,height=200");
});
botonPopup2.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/BJS/coloresRgb/colorRGB.html", "_blank", "width=300,height=200");
});
botonPopup3.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/BJS/listadoTareas/listaPendientes.html", "_blank", "width=300,height=200");
});
botonPopup4.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/AN/2opcion.mp4", "_blank", "width=300,height=200");
});
botonPopup5.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/AN/clip1.mp4", "_blank", "width=300,height=200");
});
botonPopup6.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/AN/clip2.mp4", "_blank", "width=300,height=200");
});
botonPopup7.addEventListener("click", () => {
    let nuevaVentana = window.open("/final/portafolio/AN/motion clip3.mp4", "_blank", "width=300,height=200");
});