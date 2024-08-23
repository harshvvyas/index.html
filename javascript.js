const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 90)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

window.onescroll= () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.hero-text, .Skills-content', {origin: 'left'});
ScrollReveal().reveal('.hero-img, .Services-content', {origin: 'right'});
ScrollReveal().reveal('.scroll, .portfolio-btn,', {origin: 'bottom'});
ScrollReveal().reveal('.scroll, .portfolio-content,', {origin: 'right'});