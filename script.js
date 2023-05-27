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

  /*-------*/
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const text = document.getElementById('text');
  const formfield = document.getElementById('form');
  const formData = {
    name: '',
    email: '',
    text: ''
  };
  formfield.addEventListener('submit', () => {
    formData.name = name.value;
    formData.email = email.value;
    formData.text = text.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
  window.onload = () => {
   const inputData = JSON.parse(localStorage.getItem('formData'));
   if (inputData) {
     name.value = inputData.name; 
     email.value = inputData.email;
     text.value = inputData.text;
    }
 };
 /*---Form validation----*/
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
