const menuItem = document.getElementById('nav__menu--item');

document.querySelector(['data-scroll']).addEventListener('click', function(event) {
    event.preventDefault();
    let elementId = this.data('scroll');
    console.log(elementId);

})