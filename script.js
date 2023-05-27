document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.toggle-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.add('navbar-links-active');
    document.querySelector('.navbar-links').classList.remove('navbar-links-inactive');
  });
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link1').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link2').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link3').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });

  window.addEventListener('beforeunload', () => {
    const data = {
      name: '',
      email: '',
      text: '',
    };

    if ((document.querySelector('#name').value) || document.querySelector('#name').value === '') {
      data.name = document.querySelector('#name').value;
    }
    if ((document.querySelector('#email').value) || document.querySelector('#email').value === '') {
      data.email = document.querySelector('#email').value;
    }

    JSON.stringify(data);
    localStorage.setItem('data', JSON.stringify(data));
  });

  const form = document.querySelector('#form');
  form.addEventListener('submit', (event) => {
    const emailInput = document.querySelector('#email').value;
    const SubmitEmail = emailInput.toLowerCase();
    if ((emailInput !== SubmitEmail)) {
      document.querySelector('.failed').classList.add('failed');
      document.querySelector('.failed').classList.remove('validate-email-disabled');
      event.preventDefault();
    } else {
      document.querySelector('.failed').classList.add('validate-email-disabled');
      document.querySelector('.failed').classList.remove('failed');
      form.onSubmit();
    }
  });
});
