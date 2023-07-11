const menuBtn = document.querySelector('.menu-icon-box');
const menuBox = document.querySelector('.links-box-mobile');

menuBtn.addEventListener('click', () => {
    menuBox.classList.toggle('active');
});