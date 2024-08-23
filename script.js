var typed = new Typed(".input",{
    strings:["Web Designer.","Web Developer","Photographer."],
    typeSpeed:130,
    backspeed:80,
    loop:true,
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}

