const burgerMenu = document.querySelector('#menu');
const learnBtn = document.querySelector('#learn')
const hidediv = document.querySelector('.sub_div')
const burgerSubMenu = document.querySelector('.mobile_display')
burgerMenu.addEventListener('click' , displayNav);

function displayNav(){
    learnBtn.style.backgroundColor = 'gold'
    hidediv.style.display = 'none'
    burgerSubMenu.style.display = 'flex'
}
