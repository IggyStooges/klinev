import Swiper from 'swiper'

export default function runSwiper() {
  const achievmentList = document.querySelector('.achievment__list').cloneNode(true);

  if (achievmentList) {
    const achievmentSlider = document.querySelector('.achievment__slider');
    const achievs = document.querySelectorAll('.achievment__achieve');
    const slides = achievmentList.querySelectorAll('div');
    const overlay = document.querySelector('.overlay');

    achievmentSlider.appendChild(achievmentList);
    achievmentList.classList = 'swiper-wrapper';

    slides.forEach(element => {
      element.classList = 'swiper-slide';
    });

    achievs.forEach((element, index) => {
      element.addEventListener('click', () => {
        achievmentSlider.classList.add('achievment__slider--open');

      })

      const swiper = new Swiper('.swiper-container', {
        loop: true,
        initialSlide: index,
        observer: true,
        observeParents: true
      });

      if (overlay) {
        overlay.addEventListener('click', () => achievmentSlider.classList.remove('achievment__slider--open'));
      }

      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) {
          achievmentSlider.classList.remove('achievment__slider--open');
        }
      })

    });
  }
}
