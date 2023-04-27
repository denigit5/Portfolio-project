const navHamburger = document.getElementsByClassName('nav-hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

navHamburger.addEventListener('click', () => {
  navbarLinks.ClassLists.toggle('active');
})