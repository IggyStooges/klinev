import anime from 'animejs'
import runSlider from './slider.js'

const aboutItems = document.querySelectorAll('.about__item');
const aboutDesciptions = document.querySelectorAll('.about__desciption');
const aboutTriangle = document.querySelectorAll('.about__triangle');

runSlider();

aboutItems.forEach((element, index) => {
  element.addEventListener('click', () => {
    aboutDesciptions[index].classList.toggle('closed');
    aboutTriangle[index].classList.toggle('rotate');
  })
});

anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) {
    return i * 250
  },
  direction: 'alternate',
  loop: true
});
