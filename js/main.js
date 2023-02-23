const cardItem = document.querySelector('.card__item'),
    cardItems = document.querySelectorAll('card__item'),
    cardItemActive = document.querySelector('.card__item.active'),
    navUserName = document.getElementById('nav__userName'),
    navSettings = document.getElementById('nav__settings');

    navUserName.addEventListener('click', () =>  {
    navSettings.classList.toggle('open')
})

let switchMode = document.getElementById('darkmodeButton');

switchMode.onclick = function() {
    let theme = document.getElementById('theme');

    if(theme.getAttribute('href') == '../css/style.css') {
        theme.href = '../css/darkmode-style.css';
    } else {
        theme.href = '../css/style.css';
    }
}

