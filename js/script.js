// Toggle Class Active
const navbarNav = document.querySelector ('.navbar-nav')

// Ketika Hamburger Menu di Klik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}