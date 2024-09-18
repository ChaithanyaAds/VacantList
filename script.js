document.addEventListener('DOMContentLoaded', () => {
    const hoardings = document.querySelectorAll('.hoarding');

    hoardings.forEach(hoarding => {
        const images = hoarding.querySelectorAll('.image-container img');
        const nextBtn = hoarding.querySelector('.next');
        const prevBtn = hoarding.querySelector('.prev');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => {
                img.style.display = 'none';
                img.classList.remove('active');
            });
            images[index].style.display = 'block';
            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

        // Initialize the first image
        showImage(currentIndex);
    });
});
