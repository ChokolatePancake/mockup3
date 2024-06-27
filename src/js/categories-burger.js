document.addEventListener('DOMContentLoaded', initBurger);

// Same as for previous burger but this is for content categories
function initBurger() {
    // Select the burger menu icon
    const burger = document.querySelector('.content__burger');
    // Select the menu element that you want to toggle
    const menu = document.querySelector('.content__left-block');

    // Add a click event listener to the burger menu icon
    burger.addEventListener('click', () => {
        // Toggle the 'shows' class on the menu to show/hide it
        menu.classList.toggle('shows');
    });
}
