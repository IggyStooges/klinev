const slides = document.querySelectorAll('.slider__slide')

function toggleSlides() {
  let activeSlide = document.querySelector('.active');
  if (activeSlide) {
    const parent = activeSlide.parentNode;
    activeSlide.classList.remove('active');
    if (activeSlide.nextElementSibling) {
      activeSlide.nextElementSibling.classList.add('active');
    } else {
      parent.firstElementChild.classList.add('active');
    }
  }
}

export default function runSlider() {
  setInterval(toggleSlides, 4000);
}
