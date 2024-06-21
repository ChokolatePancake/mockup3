document.addEventListener('DOMContentLoaded', initBurger)
function initBurger(){
    const burger = document.querySelector('.content__burger');
    const menu = document.querySelector('.content__left-block');
    burger.addEventListener('click', ()=>{
        menu.classList.toggle('shows');
    });
}