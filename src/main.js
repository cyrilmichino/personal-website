const navbar = document.getElementsById("main-menu");
const hamburger = document.getElementById("hamburger");
const closeToggle = document.getElementsById("close-toggle")

function showMenu() {
    hamburger.addEventListener('click')
    navbar.classList.toggle("hide-mobile");
}
function hideMenu() {
    closeToggle.addEventListener('click')
    navbar.classList.toggle("hide-mobile");
}