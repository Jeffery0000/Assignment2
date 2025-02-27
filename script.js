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