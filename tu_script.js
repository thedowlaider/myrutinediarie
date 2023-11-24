document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos con la clase 'cards'
    const cards = document.querySelectorAll('.cards');

    // Agrega un event listener a cada tarjeta
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Elimina la tarjeta actual al hacer clic
            this.remove();

            // Reorganiza las tarjetas restantes
            cards.forEach(function (card, index) {
                card.style.order = index + 1;
            });
        });
    });
});
