import { arrayFunds } from './utility/array_funds';
import { refs } from './utility/refs';
import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper';

const listMarkup = createCardMarcup(arrayFunds);

refs.fundsContainer.insertAdjacentHTML('beforeend', listMarkup);

function createCardMarcup(array) {
  const result = array
    .map(({ title, url, img, img_2x }, index) => {
      return `<li class='support_items swiper-slide'>
         <p>${index < 11 ? '0' + (index + 1) : index}</p>
         <a class='support_link' href='${url}' target='_blank'>
            <img
              class='gallery__image'
              srcset='${img}, ${img_2x}'
              src='${img}'
              alt='${title}'
            />
         </a>
     </li>`;
    })
    .join('');
  return result;
}

new Swiper('.support-slider', {
  modules: [Navigation],

  direction: 'vertical',
  rewind: true,
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,

  breakpoints: {
    767.98: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },
});
