const yearUpdate = new Date(); 
document.querySelector('#year').textContent = yearUpdate.getFullYear();

const hamburgerElement = document.querySelector('#navigationButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});