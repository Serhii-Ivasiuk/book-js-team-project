function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t),t("kyEFX").register(JSON.parse('{"5ZPII":"index.e157de86.js","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","2Hrug":"shopping-list.7698f429.js"}')),t("7me8F");var s=t("7me8F"),i=t("in2tx");function r(){let e="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>";const n=document.createElement("ul");n.classList.add("bookshelf__list"),(0,s.getTopBooks)().then((o=>{if(!Boolean(o.length))return e="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n          There are no data to display, please select another category\n        </h1>",i.refs.mainSectionCategories.innerHTML=e;const a=o.map((({list_name:e,books:n})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${e}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${n.map((({_id:e,book_image_height:n,book_image_width:o,author:a,book_image:t,title:s})=>`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${e}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${t}' alt="Here must be book's name"\n                      width='${o}'\n                      height='${n}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${s}</h3>\n                    <p class='book-card__author'>${a}</p>\n                  </div>\n                </li>`)).join("")}\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${e}'>see more</button>\n         </li>\n      `)).join("");n.innerHTML=a,i.refs.mainSectionCategories.innerHTML=e,i.refs.mainSectionCategories.appendChild(n)})).catch((e=>{console.log(e.message)}))}r();i=t("in2tx"),s=t("7me8F");function c(e){let n=e.split(" ");if(1===n.length)return n;n=n[n.length-1];let o=e.split(" ");return o.pop(),`${o.join(" ")} <span class="bookcase__filter">${n}</span>`}i=t("in2tx");const l=document.querySelector(".categories__list"),d=document.querySelector(".bookcase");function _(e){e.preventDefault();const n=e.target.dataset.categoryName;if(!n)return;let o=document.createElement("h1");const a=document.createElement("ul");o.classList.add("bookcase__cda"),o.innerHTML=c(n),a.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,s.getBooksByCategory)(n).then((e=>{if(!Boolean(e.length))return o="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n            There are no data to display, please select another category\n          </h1>",i.refs.mainSectionCategories.innerHTML=o;const n=e.map((({book_image:e,book_image_height:n,book_image_width:o,author:a,title:t,buy_links:s,_id:i})=>`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${i}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${e}'\n        alt="Here must be book's name"\n        width='${o}'\n        height = '${n}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${t}</h3>\n    <p class='book-card__author'>${a}</p>\n  </div>\n</li>`)).join("");a.innerHTML=n,d.innerHTML="",d.appendChild(o),d.appendChild(a)})).catch((e=>console.log(e.message))):r()}(0,s.getCategoryList)().then((e=>{const n=e.map((e=>`\n        <li class = 'categories__item'>\n          <a href='#' data-category-name='${e}' class='categories__name'>${e}</a>\n        </li>`)).join("");l.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <a href='#' class='categories__name categories__active' data-category-name='All categories'>All categories</a>\n       </li>",l.insertAdjacentHTML("beforeend",n)})).catch((e=>console.log(e.message))),l.addEventListener("click",_),i.refs.mainSectionCategories.addEventListener("click",_),t("eHzQI"),t("jUhQ3"),t("8QtOa"),t("fn969"),t("4GINZ");i=t("in2tx");t("jMLQ6");s=t("7me8F"),i=t("in2tx");function p(e){e.currentTarget===e.target&&g()}function k(e){"Escape"===e.key&&g()}function g(){i.refs.popupBackdrop.classList.add("is-hidden"),i.refs.popupCloseBtn.removeEventListener("click",g),i.refs.popupBackdrop.removeEventListener("click",p),window.removeEventListener("keydown",k),document.body.style.overflow=""}var u;u=new URL(t("kyEFX").resolve("3OouQ"),import.meta.url).toString();var m;m=new URL(t("kyEFX").resolve("ctt8U"),import.meta.url).toString();var h;h=new URL(t("kyEFX").resolve("1XqBp"),import.meta.url).toString();var b;b=new URL(t("kyEFX").resolve("gK52N"),import.meta.url).toString();var f;f=new URL(t("kyEFX").resolve("lT7aj"),import.meta.url).toString();var v;v=new URL(t("kyEFX").resolve("ifLYX"),import.meta.url).toString();document.querySelector(".bookcase").addEventListener("click",(async function(n){if(n.preventDefault(),!n.target.closest(".book-card__link"))return;const o=n.target.closest(".book-card__link").dataset.id,a=function({title:n,author:o,book_image_height:a,book_image_width:t,book_image:s,description:i,buy_links:r}){i||(i="N/A");o||(o="N/A");n||(n="N/A");let c="",l="",d="";return r.forEach((e=>{"Amazon"===e.name&&(c=e.url),"Apple Books"===e.name&&(l=e.url),"Bookshop"===e.name&&(d=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${s}\n      alt='${n}'\n      width=${t}\n      heigth=${a}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${n}</h2>\n      <h3 class="card__book-author ">${o}</h3>\n      <p class="card__book-text ">\n        ${i}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${c}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(u)},\n                ${e(m)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(u)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${l}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(h)},\n                ${e(b)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(h)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${d}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(f)},\n                ${e(v)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(f)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(await(0,s.getBookDetail)(o));i.refs.popupCardContainer.innerHTML=a,document.body.style.overflow="hidden",i.refs.popupBackdrop.classList.remove("is-hidden"),i.refs.popupCloseBtn.addEventListener("click",g),i.refs.popupBackdrop.addEventListener("click",p),window.addEventListener("keydown",k)})),t("56a1K"),t("iuRNH");
//# sourceMappingURL=index.e157de86.js.map
