import anime from 'animejs'
import runSlider from './slider.js'
import runSwiper from './achievement.js'

const aboutItems = document.querySelectorAll('.about__item');
const aboutDesciptions = document.querySelectorAll('.about__desciption');
const aboutTriangle = document.querySelectorAll('.about__triangle');

runSlider();
runSwiper();

aboutItems.forEach((element, index) => {
  element.addEventListener('click', () => {
    aboutDesciptions[index].classList.toggle('closed');
    aboutTriangle[index].classList.toggle('rotate');
  })
});
