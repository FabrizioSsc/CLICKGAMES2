// Função para mostrar o slide com base no índice
function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.carousel-inner');
    const items = slides.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    // Garante que o índice esteja dentro dos limites
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    // Atualiza a posição dos slides
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides.dataset.currentIndex = index; // Armazena o índice atual no dataset
}

// Função para mostrar o slide anterior ou próximo
function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.carousel-inner');
    const items = slides.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    // Obtém o índice atual do dataset ou assume 0 se não estiver presente
    let currentIndex = parseInt(slides.dataset.currentIndex) || 0;

    // Calcula o novo índice
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    showSlide(carouselId, newIndex);
}

// Inicializa todos os carrosséis na página
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        showSlide(carousel.id, 0); // Exibe o primeiro slide
    });
});
