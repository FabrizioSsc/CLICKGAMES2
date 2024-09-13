document.querySelectorAll('.carrossel').forEach(carrossel => {
    const container = carrossel.querySelector('.carrossel-container');
    const nextButton = carrossel.querySelector('.seta.direita');
    const prevButton = carrossel.querySelector('.seta.esquerda');
    const images = container.querySelectorAll('img');
    const imageWidth = images[0].clientWidth + 10; // Inclui a margem
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        const totalImages = images.length;
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    });
});
