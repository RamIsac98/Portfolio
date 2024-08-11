// Espera a que la página se cargue completamente
window.onload = function() {
    // Selecciona todos los elementos que necesitan la clase 'visible'
    const elementsToAnimate = [
        document.getElementById('logo'),
        document.getElementById('title'),
        document.getElementById('description'),
        document.getElementById('about-container'),
        document.getElementById('footer')
    ];

    // Agrega la clase 'visible' a cada elemento con un pequeño retraso
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            if (element) {
                element.classList.add('visible');
            }
        }, index * 200); // Retraso de 200ms entre cada elemento
    });
};
