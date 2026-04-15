// script.js
function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    let timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    if(title) typeEffect(title, 100);
});
