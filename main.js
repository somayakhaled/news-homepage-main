let navBar = document.querySelector('ul');
let openNav = document.querySelector('.menu');
let closeNav = document.querySelector('.close');

openNav.addEventListener('click', () => {
    navBar.classList.add('open');
})
closeNav.addEventListener('click', ()=> {
    navBar.classList.remove('open');
})