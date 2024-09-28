// JavaScript source code
// Toggle mobile menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Form submission (example only, use server-side handling for real forms)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
    form.reset();
});