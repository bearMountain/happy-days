// scripts.js file
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.photo').forEach((element) => {
        element.addEventListener('click', () => {
            const photoId = element.getAttribute('data-photo-id');
            window.location.href = `./detail.html?photoId=${photoId}`;
        });
    });
});
