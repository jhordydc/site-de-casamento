// Exemplo de animação simples
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";

        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 200);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('imageCarousel');
    const carouselItems = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    function showCarouselItem(index) {
        const newPosition = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentIndex);
    }

    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (ajuste conforme necessário)

  
});
