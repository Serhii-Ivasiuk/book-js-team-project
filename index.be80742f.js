function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){t[e]=o},o.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.be80742f.js","jcnh0":"shoping-list-bg@1x.2c75914c.png","amO9v":"empty_pic.dcf0d48a.jpg","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","2Hrug":"shopping-list.c3371be4.js"}')),a("7me8F");var s=a("7me8F"),i=a("in2tx"),r=a("7Y9D8");i=a("in2tx");function c(){!i.refs.spinner.classList.contains("done")&&i.refs.spinner.classList.add("done"),document.body.style.overflow=""}var l;function d(){const o=document.createElement("img");o.src=e(l),o.classList.add("not-found");const n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(o),n}l=new URL(a("kyEFX").resolve("jcnh0"),import.meta.url).toString(),a("in2tx");var p;function _(){const o=document.createElement("ul");o.classList.add("bookshelf__list"),i.refs.spinner.classList.contains("done")&&i.refs.spinner.classList.remove("done"),document.body.style.overflow="hidden",(0,s.getTopBooks)().then((n=>{if(!Boolean(n.length))return i.refs.mainSectionCategories.innerHTML="",i.refs.mainSectionCategories.appendChild(d());const t=n.map((({list_name:o,books:n})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${o}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${n.map((({_id:o,book_image_height:n,book_image_width:t,author:a,book_image:s,title:i})=>(s||(s=e(p),n=500,t=330),`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${o}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${s}' alt="Here must be book's name"\n                      width='${t}'\n                      height='${n}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${i||"Unknown title"}</h3>\n                    <p class='book-card__author'>${a||"Unknown author"}</p>\n                  </div>\n                </li>`))).join("")}\n                \n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${o}'>see more</button>\n         </li>\n      `)).join("");o.innerHTML=t,i.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",i.refs.mainSectionCategories.appendChild(o)})).catch((o=>{e(r).Notify.failure("Network error, please try again later")})).finally(c)}p=new URL(a("kyEFX").resolve("amO9v"),import.meta.url).toString(),_(),i.refs.logo.addEventListener("click",(()=>{_()}));i=a("in2tx"),s=a("7me8F");function u(e){let o=e.split(" ");if(1===o.length)return o;o=o[o.length-1];let n=e.split(" ");return n.pop(),`${n.join(" ")} <span class="bookcase__filter">${o}</span>`}i=a("in2tx"),r=a("7Y9D8");function f(o){o.preventDefault();const n=o.target.dataset.categoryName;if(!n)return;document.querySelector(".categories__active").classList.remove("categories__active");document.querySelector(`[data-category-name="${n}"]`).classList.add("categories__active"),function(e,o="start"){e.scrollIntoView({behavior:"smooth",position:o})}(i.refs.sectionCategory);let t=document.createElement("h1");const a=document.createElement("ul");t.classList.add("bookcase__cda"),t.innerHTML=u(n),a.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,s.getBooksByCategory)(n).then((o=>{if(!Boolean(o.length))return i.refs.mainSectionCategories.innerHTML="",i.refs.mainSectionCategories.appendChild(d());const n=o.map((({book_image:o,book_image_height:n,book_image_width:t,author:a,title:s,buy_links:i,_id:r})=>(o||(o=e(p),n=500,t=330),`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${r}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${o}'\n        alt="Here must be book's name"\n        width='${t}'\n        height = '${n}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${s||"Unknown title"}</h3>\n    <p class='book-card__author'>${a||"Unknown author"}</p>\n  </div>\n</li>`))).join("");a.innerHTML=n,i.refs.sectionCategory.innerHTML="",i.refs.sectionCategory.appendChild(t),i.refs.sectionCategory.appendChild(a)})).catch((o=>e(r).Notify.failure("Network error, please try again later"))):_()}(0,s.getCategoryList)().then((e=>{const o=e.map((e=>`\n        <li class = 'categories__item'>\n          <button type="button" data-category-name='${e}' class='categories__name'>${e}</button>\n        </li>`)).join("");i.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",i.refs.categoriesList.insertAdjacentHTML("beforeend",o)})).catch((o=>e(r).Notify.failure("Network error, please try again later"))),i.refs.categoriesList.addEventListener("click",f),i.refs.mainSectionCategories.addEventListener("click",f),a("eHzQI"),a("dTazW"),a("8QtOa"),a("fn969"),a("4GINZ");i=a("in2tx");a("jMLQ6");s=a("7me8F"),r=a("7Y9D8"),i=a("in2tx");function k(e){e.currentTarget===e.target&&m()}function g(e){"Escape"===e.key&&m()}function m(){i.refs.popupBackdrop.classList.add("is-hidden"),i.refs.popupCloseBtn.removeEventListener("click",m),i.refs.popupBackdrop.removeEventListener("click",k),i.refs.addToLocalBtn.removeEventListener("click",T),window.removeEventListener("keydown",g),document.body.style.overflow=""}var h;h=new URL(a("kyEFX").resolve("3OouQ"),import.meta.url).toString();var b;b=new URL(a("kyEFX").resolve("ctt8U"),import.meta.url).toString();var v;v=new URL(a("kyEFX").resolve("1XqBp"),import.meta.url).toString();var y;y=new URL(a("kyEFX").resolve("gK52N"),import.meta.url).toString();var w;w=new URL(a("kyEFX").resolve("lT7aj"),import.meta.url).toString();var L;L=new URL(a("kyEFX").resolve("ifLYX"),import.meta.url).toString();const H=document.querySelector(".bookcase");let E=[],$=[],S=[];function T(){$.some((e=>e.bookId===S.bookId))?($=$.filter((e=>e.bookId!==S.bookId)),i.refs.addToLocalBtn.innerHTML="add to shopping list",i.refs.popupDesc.style.opacity="0",x()):($.push(S),i.refs.addToLocalBtn.innerHTML="remove from the shopping list",i.refs.popupDesc.style.opacity="1",x())}function x(){localStorage.setItem("books-id",JSON.stringify($)),E=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):function(){const e=localStorage.getItem("books-id");$=JSON.parse(e)}(),H.addEventListener("click",(async function(o){try{if(o.preventDefault(),!o.target.closest(".book-card__link"))return;x();const n=o.target.closest(".book-card__link").dataset.id;S=n;const t=await(0,s.getBookDetail)(n),a=function({title:o,author:n,book_image_height:t,book_image_width:a,book_image:s,description:i,buy_links:r}){s||(s=e(p),t=500,a=330);i||(i="This book has no description yet. We will add it soon.");n||(n="Unknown author");o||(o="Unknown title");let c="",l="",d="";return r.forEach((e=>{"Amazon"===e.name&&(c=e.url),"Apple Books"===e.name&&(l=e.url),"Bookshop"===e.name&&(d=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${s}\n      alt='${o}'\n      width=${a}\n      heigth=${t}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${o}</h2>\n      <h3 class="card__book-author ">${n}</h3>\n      <p class="card__book-text ">\n        ${i}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${c}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(h)},\n                ${e(b)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(h)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${l}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(v)},\n                ${e(y)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(v)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${d}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(w)},\n                ${e(L)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(w)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(t);S={bookId:n,bookData:t},i.refs.popupCardContainer.innerHTML=a,$.forEach((e=>{E.push(e.bookId)})),E.includes(S.bookId)?(i.refs.addToLocalBtn.innerHTML="remove from the shopping list",i.refs.popupDesc.style.opacity="1"):(i.refs.addToLocalBtn.innerHTML="add to shopping list",i.refs.popupDesc.style.opacity="0");t.buy_links;document.body.style.overflow="hidden",i.refs.popupBackdrop.classList.remove("is-hidden"),i.refs.popupCloseBtn.addEventListener("click",m),i.refs.popupBackdrop.addEventListener("click",k),i.refs.addToLocalBtn.addEventListener("click",T),window.addEventListener("keydown",g)}catch(o){e(r).Notify.failure("Network error, please try again later")}})),a("56a1K"),a("iuRNH");i=a("in2tx");window.addEventListener("scroll",(function(){const e=i.refs.sidebar.offsetHeight,o=i.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(i.refs.sidebar.scrollTop=0),n+window.innerHeight>=o&&(i.refs.sidebar.scrollTop=e-window.innerHeight+o-n)}));
//# sourceMappingURL=index.be80742f.js.map
