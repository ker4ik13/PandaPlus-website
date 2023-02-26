const cardItem = document.querySelector('.card__item'),
    cardItems = document.querySelectorAll('card__item'),
    cardItemActive = document.querySelector('.card__item.active'),
    navUserName = document.getElementById('nav__userName'),
    navSettings = document.getElementById('nav__settings'),
    navBurger = document.getElementById('nav__burger'),
    menu = document.getElementById('nav__wrapper');

/* Offers */


/* Scroll */
$('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate({
        scrollTop: elementOffset - 80
    }, 1000)
})

/* Burger menu */

navBurger.addEventListener('click', () => {
    menu.classList.toggle('active'),
    navBurger.classList.toggle('active');
});





/* Dont working cards on second page */

/* cardItem.addEventListener('click', () => {
    cardItem.classList.add('active');
});
 */


