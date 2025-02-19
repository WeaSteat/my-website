// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-links-hidden');
    } else {
        // Add a small delay to allow the transition to start
        setTimeout(() => {
            navLinks.classList.add('nav-links-hidden');
        }, 500); // Matches your transition duration
    }

    burger.classList.toggle('active');
});

// Ініціалізація Bootstrap каруселей
$(document).ready(function () {
    // Для головної каруселі
    $('#productCarousel').carousel({
        interval: 3000 // Зміна слайдів кожні 3 секунди
    });

    // Для кастомізації індикаторів (якщо потрібно)
    $('#productCarousel').on('slid.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var indicators = $('.carousel-indicators li');

        indicators.removeClass('active');
        indicators.eq(idx).addClass('active');
    });

    // Функція для адаптації зображення
    function changeImage() {
        var img = document.getElementById("main-image");
        if (window.innerWidth <= 425) {
            img.src = "img/ssg.jpg";
            img.style.width = "400px";
            img.style.height = "400px";
        } else {
            img.src = "img/sausages.jpg";
            img.style.width = "100%";
            img.style.height = "100%";
        }
    }

    // Виклик зміни зображення
    changeImage();
    window.onresize = changeImage;
});
