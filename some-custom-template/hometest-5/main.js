document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');

    toggleButton.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });
});
