const navLink = document.querySelector('.nav-menu .nav-link')
const menuOpenButton = document.querySelector('#menu-open-button')
const menuCloseButton = document.querySelector('#menu-close-button')

menuOpenButton.addEventListener("click", () => {
    // Toggle for Mobile Menu
    document.body.classList.toggle('show-mobile-menu')
})
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// Close menu when the link in menu is click
navLink.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click())
})

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});