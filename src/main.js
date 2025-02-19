function toggleMenu() {
    var navbar = document.getElementById("main-menu");
    var overlay = document.getElementById("overlay");
    navbar.classList.toggle("hide-mobile");
    overlay.classList.toggle("hide-mobile");
}

var typed = new Typed('#toggle-text', {
    strings: ['a Data Scientist', 'an Entrepreneur','a Data Consultant'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });