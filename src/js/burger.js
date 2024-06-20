document.addEventListener('DOMContentLoaded', initBurger)
function initBurger(){
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__list');
    burger.addEventListener('click', ()=>{
        menu.classList.toggle('show');
    });
}