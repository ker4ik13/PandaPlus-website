/* Burger menu */

let navBurger = document.getElementById('nav__burger'),
    menu = document.getElementById('nav__wrapper');

navBurger.addEventListener('click', () => {
    menu.classList.toggle('active'),
    navBurger.classList.toggle('active');
});

/* Settings page tabs */

const generalSettingsBtn = document.querySelector('.general_settings--btn'),
    profileSettingsBtn = document.querySelector('.profile__settings--btn'),
    accountSettingsBtn = document.querySelector('.account__settings--btn');

let sidebarRightNone = document.querySelector('.sidebar__right-none'),
    generalSettings = document.querySelector('.general_settings'),
    profileSettings = document.querySelector('.profile__settings'),
    accountSettings = document.querySelector('.account__settings');

generalSettingsBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    generalSettingsBtn.classList.add('active');
    profileSettingsBtn.classList.remove('active');
    accountSettingsBtn.classList.remove('active');
    sidebarRightNone.style.display = 'none';
    profileSettings.style.display = 'none';
    accountSettings.style.display = 'none';
    generalSettings.style.display = 'flex';
})
profileSettingsBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    profileSettingsBtn.classList.add('active');
    generalSettingsBtn.classList.remove('active');
    accountSettingsBtn.classList.remove('active');
    sidebarRightNone.style.display = 'none';
    generalSettings.style.display = 'none';
    accountSettings.style.display = 'none';
    profileSettings.style.display = 'flex';
})
accountSettingsBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    accountSettingsBtn.classList.add('active');
    profileSettingsBtn.classList.remove('active');
    generalSettingsBtn.classList.remove('active');
    sidebarRightNone.style.display = 'none';
    generalSettings.style.display = 'none';
    profileSettings.style.display = 'none';
    accountSettings.style.display = 'flex';
})

/* switch dark mode */

let switchMode = document.getElementById('darkmodeButton');

switchMode.onclick = function() {
    let theme = document.getElementById('theme');

    if(theme.getAttribute('href') == '../css/style.css') {
        theme.href = '../css/darkmode-style.css';
    } else {
        theme.href = '../css/style.css';
    }
}