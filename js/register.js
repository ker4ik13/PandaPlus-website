const navBurger = document.getElementById('nav__burger'),
    menu = document.getElementById('nav__wrapper');

navBurger.addEventListener('click', () => {
    menu.classList.toggle('active'),
    navBurger.classList.toggle('active');
});