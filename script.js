const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const featuredRentButtons = document.querySelectorAll('.featured-rent-button');

loginButton.addEventListener('click', () => {
    alert('Logged in');
});

registerButton.addEventListener('click', () => {
    alert('Registered');
});

featuredRentButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const movieTitle = button.parentElement.querySelector('.featured-title').textContent;
        alert(`Rented: ${movieTitle}`);
    });
});

const heroImages = ['hero1.jpg', 'hero2.jpg'];
const heroImage = document.querySelector('.hero-image');
let currentIndex = 0;

setInterval(() => {
    heroImage.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % heroImages.length;
        heroImage.src = heroImages[currentIndex];
        heroImage.addEventListener('load', function onLoad() {
            heroImage.style.opacity = 1;
            heroImage.removeEventListener('load', onLoad);
        });

    }, 500);
}, 5000);