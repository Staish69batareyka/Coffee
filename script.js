const menuOpenButton = document.querySelector('#menu-open-button')
const menuCloseButton = document.querySelector('#menu-close-button')

menuOpenButton.addEventListener("click", () => {
    // Toggle for Mobile Menu
    document.body.classList.toggle('show-mobile-menu')
})
menuCloseButton.addEventListener("click", () => menuOpenButton.click())