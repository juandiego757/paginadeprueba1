document.addEventListener('DOMContentLoaded', ()=> {
const navToggle = document.getElementById ('navToggle');
const navMenu = document.getElementById('nuvMenu');
navtoggle.addEventListener ('click', () => {
navMenu.classList.toggle('active') ;
});
});
document.querySelectorAll('.nav-menu a').forEach(link => { 
link.addEventListener('click', () => {
navMenu.classList.remove('active');
});
});
const

