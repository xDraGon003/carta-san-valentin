document.addEventListener("click", (e) => {
    // Crear el elemento del corazón
    const corazon = document.createElement("span");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💜";

    // Posicionarlo donde se hizo clic
    corazon.style.left = `${e.clientX}px`;
    corazon.style.top = `${e.clientY}px`;

    // Añadirlo al body
    document.body.appendChild(corazon);

    // Eliminarlo después de que termine la animación (1 segundo)
    setTimeout(() => {
        corazon.remove();
    }, 1000);
});

$(document).ready(function () {
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Hacer visible la carta con una animación ondulante
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Animación de ondulación
        });
    });
}); 
