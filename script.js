// document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector(".menu-icon");
    const xMenu = document.querySelector(".close-menu img");
    const entireMenu = document.getElementById('side-menu');

    menuIcon.addEventListener('click', evt =>{
        entireMenu.classList.remove('nasconditi');
    });

    xMenu.addEventListener('click', evt => {
        entireMenu.classList.add('nasconditi');
    })





    // }