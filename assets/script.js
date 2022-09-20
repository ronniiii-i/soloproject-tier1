const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menu = document.querySelector('nav ul');
const topA = document.querySelector('.top-arrow');

burger.addEventListener('click', () => {
    burger.classList.toggle('h')
    line1.classList.toggle('rot1');
    line3.classList.toggle('rot2');
    line2.classList.toggle('disappear');
    menu.classList.toggle('show');
})

var ScrollY = window.scrollY;
window.onscroll = function(e) {
    if(ScrollY < window.scrollY){
        topA.style.display = 'flex';
    } else {        
        topA.style.display = 'none';
    }        
    // oldScrollY = window.scrollY;
}