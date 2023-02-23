const cardItem = document.querySelector('.card__item'),
    cardItems = document.querySelectorAll('card__item'),
    cardItemActive = document.querySelector('.card__item.active'),
    navUserName = document.getElementById('nav__userName'),
    navSettings = document.getElementById('nav__settings')

    navUserName.addEventListener('click', () =>  {
    navSettings.classList.toggle('active')
})
