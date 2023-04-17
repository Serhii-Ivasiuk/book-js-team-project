import { arrayFunds } from './array_funds';
import { refs } from '../js/utility/refs';

// import Swiper JS

import Swiper, { Navigation } from 'swiper';
// import Swiper from 'swiper';

const listMarkup = createCardMarcup(arrayFunds);

refs.fundsContainer.insertAdjacentHTML('beforeend', listMarkup);

function createCardMarcup(array) {
  const result = array
    .map(({ title, url, img }, index) => {
      return `<li class='support_items swiper-slide'>
         <p>${index < 11 ? '0' + (index + 1) : index}</p>
         <a class='support_link' href='${url}' target='_blank'>
            <img
              class='gallery__image'
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
  loop: true,
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
