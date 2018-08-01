const logoImage = document.getElementById('logo-img');
const header = document.querySelector('#header');

header.addEventListener('mouseover', function() {
    logoImage.src = 'images/In-White-54px-TM.png';
});

header.addEventListener('mouseout', function() {
    logoImage.src = 'images/In-2C-54px-TM.png';
});

let slideIndex = 1;
showDivs(slideIndex);

function showDivs(currentSlide) {
    let i;
    const review = document.getElementsByClassName('review');
    const dots = document.getElementsByClassName('slider-button');
    slideIndex = currentSlide;

    Array.from(review).forEach(item => item.style.display = 'none');
    Array.from(dots).forEach(item => item.classList.remove('active-slider-button'));
    review[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active-slider-button');
}

document.querySelector('#slider-button-1').addEventListener('click', function() {
    showDivs(1);
});
document.querySelector('#slider-button-2').addEventListener('click', function() {
    showDivs(2);
});
document.querySelector('#slider-button-3').addEventListener('click', function() {
    showDivs(3);
});
document.querySelector('#slider-button-4').addEventListener('click', function() {
    showDivs(4);
});