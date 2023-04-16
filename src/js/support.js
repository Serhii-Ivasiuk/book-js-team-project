import { arrayFunds } from './utility/array_funds';
import { refs } from './utility/refs';

// import Swiper JS
import Swiper from 'swiper';
const listMarkup = createCardMarcup(arrayFunds);

refs.fundsContainer.insertAdjacentHTML('beforeend', listMarkup);

refs.sliderBtn.addEventListener('click', hendleListSliderClick);

function createCardMarcup(array) {
  const result = array
    .map(({ title, url, img }, index) => {
      return `<li class='support_items swiper-slide'>
         <p>${index < 11 ? '0' + (index + 1) : index }</p>
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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  slidesOffsetAfter: 100,
  speed: 200,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 6,
    },
  }
});

function hendleListSliderClick(){
  swiper.slideNext();
}
