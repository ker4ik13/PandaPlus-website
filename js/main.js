const cardItem = document.querySelector('.card__item'),
    cardItems = document.querySelectorAll('card__item'),
    cardItemActive = document.querySelector('.card__item.active'),
    navUserName = document.getElementById('userName'),
    navSettings = document.getElementById('nav__settings')

    userName.addEventListener('click', () =>  {
    navSettings.classList.toggle('active')
})
