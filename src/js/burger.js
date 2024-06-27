// Wait for the DOM to fully load before running the initBurger function
document.addEventListener('DOMContentLoaded', initBurger);

function initBurger() {
    // Select the burger menu button
    const burger = document.querySelector('.menu__burger');
    // Select the menu list
    const menu = document.querySelector('.menu__list');

    // Add a click event listener to the burger button
    burger.addEventListener('click', () => {
        // Toggle the 'show' class on the menu list to show/hide it
        menu.classList.toggle('show');
    });
}
