document.addEventListener('DOMContentLoaded', (event) => {
    const hero = document.getElementById('hero');
    let scrollThreshold = 100; // Adjust this value to control when the effect triggers
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            hero.classList.add('darken');
            hero.classList.add('show-content');
        } else {
            hero.classList.remove('darken');
            hero.classList.remove('show-content');
        }
    });
});

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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form
            alert('Thank you for your message. We will get back to you soon!');
            form.reset();
        }
    });
}

function validateForm() {
    // Add form validation logic here
    return true;
}
