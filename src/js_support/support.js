 import { arrayFunds } from "./array_funds";

 const fundsContainer = document.querySelector('.support_list');
 const listMuarkup = createCardMarcup(arrayFunds);

 fundsContainer.insertAdjacentHTML("afterend", listMuarkup);

 function createCardMarcup(array) {
   console.log(array);
    const result = array.map(({title, url, img}, index) => {
        return`<li class='support_items'>
         <p>${index + 1}</p>
         <a class='support_link' href='${url}' target='_blank'>
            <img
              class='gallery__image'
              src='${img}'
              alt='${title}'
            />
         </a>
     </li>`;
    }).join("");
   return result;
 }
