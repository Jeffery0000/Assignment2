const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const featuredRentButtons = document.querySelectorAll('.featuredRentButton');

loginButton.addEventListener('click', () => {
    alert('Logged in');
});

registerButton.addEventListener('click', () => {
    alert('Registered');
});

featuredRentButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const movieTitle = button.parentElement.querySelector('.featuredTitle').textContent;
        alert(`Rented: ${movieTitle}`);
    });
});

const heroImages = ['hero1.jpg', 'hero2.jpg'];
const heroImage = document.querySelector('.heroImage');
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
      
    }, 800); 
}, 5000);