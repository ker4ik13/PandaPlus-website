const cardItem = document.querySelector('.card__item'),
    cardItems = document.querySelectorAll('card__item'),
    navUserName = document.getElementById('nav__userName'),
    navSettings = document.getElementById('nav__settings'),
    navBurger = document.getElementById('nav__burger'),
    menu = document.getElementById('nav__wrapper');

/* Cards */

let card1 = document.querySelector('.card1'),
    card2 = document.querySelector('.card2'),
    card3 = document.querySelector('.card3'),
    card4 = document.querySelector('.card4');

card1.addEventListener('click', () => {
    card1.classList.toggle('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
    card4.classList.remove('active');
})
card2.addEventListener('click', () => {
    card2.classList.toggle('active');
    card1.classList.remove('active');
    card3.classList.remove('active');
    card4.classList.remove('active');
})
card3.addEventListener('click', () => {
    card3.classList.toggle('active');
    card1.classList.remove('active');
    card2.classList.remove('active');
    card4.classList.remove('active');
})
card4.addEventListener('click', () => {
    card4.classList.toggle('active');
    card1.classList.remove('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
})

/* Scroll */
$('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    menu.classList.remove('active'),
    navBurger.classList.remove('active');

    $('html, body').animate({
        scrollTop: elementOffset - 80
    }, 1000)
})

/* Burger menu */

navBurger.addEventListener('click', () => {
    menu.classList.toggle('active'),
    navBurger.classList.toggle('active');
});


/* Offers */

let offerBtn1 = document.querySelector('.add1'),
    offerBtn2 = document.querySelector('.add2'),
    offerBtn3 = document.querySelector('.add3'),
    offerBtn4 = document.querySelector('.add4'),
    offerAdded1 = document.querySelector('.offer__added1'),
    offerAdded2 = document.querySelector('.offer__added2'),
    offerAdded3 = document.querySelector('.offer__added3'),
    offerAdded4 = document.querySelector('.offer__added4'),
    offerText1 = document.querySelector('.offer__text1'),
    offerText2 = document.querySelector('.offer__text2'),
    offerText3 = document.querySelector('.offer__text3'),
    offerText4 = document.querySelector('.offer__text4'),
    offerPrice1 = document.querySelector('.offer__price1'),
    offerPrice2 = document.querySelector('.offer__price2'),
    offerPrice3 = document.querySelector('.offer__price3'),
    offerPrice4 = document.querySelector('.offer__price4');

offerBtn1.addEventListener('click', () => {
    offerBtn1.classList.toggle('rotated');
    offerAdded1.classList.toggle('added');
    offerText1.classList.toggle('none');
    offerPrice1.classList.toggle('deleted');
    offerBtn2.classList.remove('rotated');
    offerBtn3.classList.remove('rotated');
    offerBtn4.classList.remove('rotated');
    offerAdded2.classList.remove('added');
    offerAdded3.classList.remove('added');
    offerAdded4.classList.remove('added');
    offerText2.classList.remove('none');
    offerText3.classList.remove('none');
    offerText4.classList.remove('none');
    offerPrice2.classList.remove('deleted');
    offerPrice3.classList.remove('deleted');
    offerPrice4.classList.remove('deleted');
})
offerBtn2.addEventListener('click', () => {
    offerBtn2.classList.toggle('rotated');
    offerAdded2.classList.toggle('added');
    offerText2.classList.toggle('none');
    offerPrice2.classList.toggle('deleted');
    offerBtn1.classList.remove('rotated');
    offerBtn3.classList.remove('rotated');
    offerBtn4.classList.remove('rotated');
    offerAdded1.classList.remove('added');
    offerAdded3.classList.remove('added');
    offerAdded4.classList.remove('added');
    offerText1.classList.remove('none');
    offerText3.classList.remove('none');
    offerText4.classList.remove('none');
    offerPrice1.classList.remove('deleted');
    offerPrice3.classList.remove('deleted');
    offerPrice4.classList.remove('deleted');
})
offerBtn3.addEventListener('click', () => {
    offerBtn3.classList.toggle('rotated');
    offerAdded3.classList.toggle('added');
    offerText3.classList.toggle('none');
    offerPrice3.classList.toggle('deleted');
    offerBtn2.classList.remove('rotated');
    offerBtn1.classList.remove('rotated');
    offerBtn4.classList.remove('rotated');
    offerAdded2.classList.remove('added');
    offerAdded1.classList.remove('added');
    offerAdded4.classList.remove('added');
    offerText2.classList.remove('none');
    offerText1.classList.remove('none');
    offerText4.classList.remove('none');
    offerPrice2.classList.remove('deleted');
    offerPrice1.classList.remove('deleted');
    offerPrice4.classList.remove('deleted');
})
offerBtn4.addEventListener('click', () => {
    offerBtn4.classList.toggle('rotated');
    offerAdded4.classList.toggle('added');
    offerText4.classList.toggle('none');
    offerPrice4.classList.toggle('deleted');
    offerBtn2.classList.remove('rotated');
    offerBtn3.classList.remove('rotated');
    offerBtn1.classList.remove('rotated');
    offerAdded2.classList.remove('added');
    offerAdded3.classList.remove('added');
    offerAdded1.classList.remove('added');
    offerText2.classList.remove('none');
    offerText3.classList.remove('none');
    offerText1.classList.remove('none');
    offerPrice2.classList.remove('deleted');
    offerPrice3.classList.remove('deleted');
    offerPrice1.classList.remove('deleted');
})



/* Dont working cards on second page */

/* cardItem.addEventListener('click', () => {
    cardItem.classList.add('active');
});
 */


