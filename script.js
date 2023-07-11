const menuBtn = document.querySelector('.menu-icon-box');
const menuBox = document.querySelector('.links-box-mobile');
const greetingsBox = document.querySelector('.hello-text-box');

menuBtn.addEventListener('click', () => {
    menuBox.classList.toggle('active');
});

const greetings = greetingsBox.children;
const greetingsLength = greetings.length;
let index = 0;
const textInTimer = 1400;
const textOutTimer = 2800;

function animateText() {
    for (let i = 0; i < greetingsLength; i++) {
        greetings[i].classList.remove("text-in", "text-out");
    }
    greetings[index].classList.add("text-in");

    setTimeout(function () {
        greetings[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == greetingsLength - 1) {
            index = 0;
        }
        else {
            index++;
        }
        animateText();
    }, textInTimer);
}

window.onload = animateText;
