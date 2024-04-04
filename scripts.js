// scripts.js file
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.photo').forEach((element) => {
        element.addEventListener('click', () => {
            window.location.href = './detail.html'; // Your detail page URL
        });
    });
});
