!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t),t("iE7OH").register(JSON.parse('{"EVgbq":"index.ee3c772c.js","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","lxDUL":"shopping-list.8956b1f1.js"}')),t("1h2Gi");var c=t("1h2Gi"),r=t("kVdBw");function s(){var e="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",n=document.createElement("ul");n.classList.add("bookshelf__list"),(0,c.getTopBooks)().then((function(o){if(!Boolean(o.length))return e="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n          There are no data to display, please select another category\n        </h1>",r.refs.mainSectionCategories.innerHTML=e;var a=o.map((function(e){var n=e.list_name,o=e.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(n,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(o.map((function(e){var n=e._id,o=e.book_image_height,a=e.book_image_width,t=e.author,c=e.book_image,r=e.title;return"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(n,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(c,"' alt=\"Here must be book's name\"\n                      width='").concat(a,"'\n                      height='").concat(o,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(r,"</h3>\n                    <p class='book-card__author'>").concat(t,"</p>\n                  </div>\n                </li>")})).join(""),"\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(n,"'>see more</button>\n         </li>\n      ")})).join("");n.innerHTML=a,r.refs.mainSectionCategories.innerHTML=e,r.refs.mainSectionCategories.appendChild(n)})).catch((function(e){console.log(e.message)}))}s();r=t("kVdBw"),c=t("1h2Gi");function i(e){var n=e.split(" ");if(1===n.length)return n;n=n[n.length-1];var o=e.split(" ");o.pop();var a=o.join(" ");return"".concat(a,' <span class="bookcase__filter">').concat(n,"</span>")}r=t("kVdBw");function l(e){e.preventDefault();var n=e.target.dataset.categoryName;if(n){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(n,'"]')).classList.add("categories__active"),r.refs.sectionCategory.scrollIntoView({behavior:"smooth",block:"start"});var o=document.createElement("h1"),a=document.createElement("ul");o.classList.add("bookcase__cda"),o.innerHTML=i(n),a.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,c.getBooksByCategory)(n).then((function(e){if(!Boolean(e.length))return o="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n            There are no data to display, please select another category\n          </h1>",r.refs.mainSectionCategories.innerHTML=o;var n=e.map((function(e){var n=e.book_image,o=e.book_image_height,a=e.book_image_width,t=e.author,c=e.title,r=(e.buy_links,e._id);return"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(r,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(n,"'\n        alt=\"Here must be book's name\"\n        width='").concat(a,"'\n        height = '").concat(o,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(c,"</h3>\n    <p class='book-card__author'>").concat(t,"</p>\n  </div>\n</li>")})).join("");a.innerHTML=n,r.refs.sectionCategory.innerHTML="",r.refs.sectionCategory.appendChild(o),r.refs.sectionCategory.appendChild(a)})).catch((function(e){return console.log(e.message)})):s()}}(0,c.getCategoryList)().then((function(e){var n=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).join("");r.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",r.refs.categoriesList.insertAdjacentHTML("beforeend",n)})).catch((function(e){return console.log(e.message)})),r.refs.categoriesList.addEventListener("click",l),r.refs.mainSectionCategories.addEventListener("click",l),t("9hn33"),t("hqhs8"),t("9A7sA"),t("ivz30"),t("kgvtT");var d=t("bpxeT"),_=t("2TvXO");r=t("kVdBw");t("587DK");c=t("1h2Gi"),r=t("kVdBw");function p(e){e.currentTarget===e.target&&g()}function u(e){"Escape"===e.key&&g()}function g(){r.refs.popupBackdrop.classList.add("is-hidden"),r.refs.popupCloseBtn.removeEventListener("click",g),r.refs.popupBackdrop.removeEventListener("click",p),window.removeEventListener("keydown",u),document.body.style.overflow=""}var b;b=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("6ztcb");var k;k=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("1iaLI");var h;h=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("f8I3T");var f;f=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("3ZLqn");var m;m=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("9Cr2S");var v;function L(){return(L=e(d)(e(_).mark((function n(o){var a,t,s;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),o.target.closest(".book-card__link")){e.next=3;break}return e.abrupt("return");case 3:return a=o.target.closest(".book-card__link").dataset.id,e.next=6,(0,c.getBookDetail)(a);case 6:t=e.sent,s=y(t),r.refs.popupCardContainer.innerHTML=s,document.body.style.overflow="hidden",r.refs.popupBackdrop.classList.remove("is-hidden"),r.refs.popupCloseBtn.addEventListener("click",g),r.refs.popupBackdrop.addEventListener("click",p),window.addEventListener("keydown",u);case 14:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function y(n){var o=n.title,a=n.author,t=n.book_image_height,c=n.book_image_width,r=n.book_image,s=n.description,i=n.buy_links;s||(s="N/A"),a||(a="N/A"),o||(o="N/A");var l="",d="",_="";return i.forEach((function(e){"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(d=e.url),"Bookshop"===e.name&&(_=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(r,"\n      alt='").concat(o,"'\n      width=").concat(c,"\n      heigth=").concat(t,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(o,'</h2>\n      <h3 class="card__book-author ">').concat(a,'</h3>\n      <p class="card__book-text ">\n        ').concat(s,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(l,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(b),",\n                ").concat(e(k),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(b),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(d,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(h),",\n                ").concat(e(f),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(h),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(_,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(m),",\n                ").concat(e(v),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(m),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}v=t("aNJCr").getBundleURL("EVgbq")+t("iE7OH").resolve("8Aq8R"),document.querySelector(".bookcase").addEventListener("click",(function(e){return L.apply(this,arguments)})),t("8zUhP"),t("8e9SS")}();
//# sourceMappingURL=index.ee3c772c.js.map