document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.toggle-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.add('navbar-links-active');
    document.querySelector('.navbar-links').classList.remove('navbar-links-inactive');
  })
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
});

