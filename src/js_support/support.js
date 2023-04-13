import { arrayFunds } from './array_funds';
// import Swiper JS
import Swiper from 'swiper';
const fundsContainer = document.querySelector( '.support_list' );
const listMuarkup = createCardMarcup( arrayFunds );

fundsContainer.insertAdjacentHTML( 'beforeend', listMuarkup );

function createCardMarcup( array ) {
  const result = array.map( ( { title, url, img }, index ) => {
    return `<li class='support_items swiper-slide'>
         <p>${ index + 1 }</p>
         <a class='support_link' href='${ url }' target='_blank'>
            <img
              class='gallery__image'
              src='${ img }'
              alt='${ title }'
            />
         </a>
     </li>`;
  } ).join( '' );
  return result;
}

new Swiper( '.support-slider', {
  // Optional parameters
  direction: 'vertical',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
} );

