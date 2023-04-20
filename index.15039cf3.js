!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.15039cf3.js","izqLI":"shoping-list-bg@1x.2c75914c.png","5VkSf":"empty_pic.dcf0d48a.jpg","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","lxDUL":"shopping-list.8c2925cb.js"}')),r("1h2Gi");var o=r("1h2Gi"),a=r("kVdBw"),s=r("6JpON");a=r("kVdBw");function l(){!a.refs.spinner.classList.contains("done")&&a.refs.spinner.classList.add("done"),a.refs.spinner.replaceChildren(),document.body.style.overflow=""}var c;function u(){var t=document.createElement("img");t.src=e(c),t.classList.add("not-found");var n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}c=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("izqLI"),r("kVdBw");var h;function d(){var t=document.createElement("ul");t.classList.add("bookshelf__list"),a.refs.spinner.classList.contains("done")&&a.refs.spinner.classList.remove("done"),a.refs.spinner.insertAdjacentHTML("afterbegin",'\n  <div class="book">\n    <div class="inner">\n      <div class="left"></div>\n      <div class="middle"></div>\n      <div class="right"></div>\n    </div>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>'),document.body.style.overflow="hidden",(0,o.getTopBooks)().then((function(n){if(!Boolean(n.length))return a.refs.mainSectionCategories.innerHTML="",a.refs.mainSectionCategories.appendChild(u());var i=n.map((function(t){var n=t.list_name,i=t.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(n,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(i.map((function(t){var n=t._id,i=t.book_image_height,r=t.book_image_width,o=t.author,a=t.book_image,s=t.title;return a||(a=e(h),i=500,r=330),"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(n,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(a,"' alt=\"Here must be book's name\"\n                      width='").concat(r,"'\n                      height='").concat(i,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(s||"Unknown title","</h3>\n                    <p class='book-card__author'>").concat(o||"Unknown author","</p>\n                  </div>\n                </li>")})).join(""),"\n\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(n,"'>see more</button>\n         </li>\n      ")})).join("");t.innerHTML=i,a.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",a.refs.mainSectionCategories.appendChild(t)})).catch((function(t){e(s).Notify.failure("Network error, please try again later")})).finally(l)}h=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("5VkSf"),d(),a.refs.logo.addEventListener("click",(function(){d()}));a=r("kVdBw"),o=r("1h2Gi");function f(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var i=n.join(" ");return"".concat(i,' <span class="bookcase__filter">').concat(t,"</span>")}a=r("kVdBw"),s=r("6JpON");function p(t){t.preventDefault();var n=t.target.dataset.categoryName;if(n){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(n,'"]')).classList.add("categories__active"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";e.scrollIntoView({behavior:"smooth",position:t})}(a.refs.sectionCategory);var i=document.createElement("h1"),r=document.createElement("ul");i.classList.add("bookcase__cda"),i.innerHTML=f(n),r.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,o.getBooksByCategory)(n).then((function(t){if(!Boolean(t.length))return a.refs.mainSectionCategories.innerHTML="",a.refs.mainSectionCategories.appendChild(u());var n=t.map((function(t){var n=t.book_image,i=t.book_image_height,r=t.book_image_width,o=t.author,a=t.title,s=(t.buy_links,t._id);return n||(n=e(h),i=500,r=330),"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(s,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(n,"'\n        alt=\"Here must be book's name\"\n        width='").concat(r,"'\n        height = '").concat(i,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(a||"Unknown title","</h3>\n    <p class='book-card__author'>").concat(o||"Unknown author","</p>\n  </div>\n</li>")})).join("");r.innerHTML=n,a.refs.sectionCategory.innerHTML="",a.refs.sectionCategory.appendChild(i),a.refs.sectionCategory.appendChild(r)})).catch((function(t){return e(s).Notify.failure("Network error, please try again later")})):d()}}(0,o.getCategoryList)().then((function(e){var t=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).sort((function(e,t){return e.localeCompare(t)})).join("");a.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",a.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((function(t){return e(s).Notify.failure("Network error, please try again later")})),a.refs.categoriesList.addEventListener("click",p),a.refs.mainSectionCategories.addEventListener("click",p),r("9hn33"),r("xpKCW"),r("9A7sA"),r("ivz30"),r("kgvtT");var g=r("bpxeT"),v=r("2TvXO"),k=(a=r("kVdBw"),s=r("6JpON"),g=r("bpxeT"),r("8MBJY")),y=(r("ge8co"),r("a2hTj")),_=(r("jh8P3"),r("fVNic"),r("eYQtU")),m=r("jmhxu"),b=(r("1t1Wn"),r("8nrFW")),E=(r("l5bVx"),r("4c7YB")),L=r("2MbLg"),T=(v=r("2TvXO"),r("MjY8E")),w=r("6ExWU"),S=r("kZfxc"),R=r("2xDiJ"),A=function(){"use strict";function t(n){e(k)(this,t),this.uid=n}return e(y)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();A.UNAUTHENTICATED=new A(null),A.GOOGLE_CREDENTIALS=new A("google-credentials-uid"),A.FIRST_PARTY=new A("first-party-uid"),A.MOCK_USER=new A("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var N="9.19.0",I=new(0,S.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(I.logLevel<=S.LogLevel.DEBUG){var o,a=i.map(B);(o=I).debug.apply(o,["Firestore (".concat(N,"): ").concat(t)].concat(e(b)(a)))}}function D(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(I.logLevel<=S.LogLevel.ERROR){var o,a=i.map(B);(o=I).error.apply(o,["Firestore (".concat(N,"): ").concat(t)].concat(e(b)(a)))}}function B(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(N,") INTERNAL ASSERTION FAILED: ")+e;throw D(t),new Error(t)}function x(e,t){e||U()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O="invalid-argument",H="failed-precondition",F=function(t){"use strict";e(_)(i,t);var n=e(L)(i);function i(t,r){var o;return e(k)(this,i),(o=n.call(this,t,r)).code=t,o.message=r,o.toString=function(){return"".concat(o.name,": [code=").concat(o.code,"]: ").concat(o.message)},e(m)(o)}return i}(R.FirebaseError),M=function t(n,i){"use strict";e(k)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},P=function(){"use strict";function t(){e(k)(this,t)}return e(y)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(A.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),z=function(){"use strict";function t(n){var i=this;e(k)(this,t),this.auth=null,n.onInit((function(e){i.auth=e}))}return e(y)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(x("string"==typeof t.accessToken),new M(t.accessToken,new A(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),q=function(){"use strict";function t(n,i,r){e(k)(this,t),this.t=n,this.i=i,this.o=r,this.type="FirstParty",this.user=A.FIRST_PARTY,this.u=new Map}return e(y)(t,[{key:"h",value:function(){return this.o?this.o():null}},{key:"headers",get:function(){this.u.set("X-Goog-AuthUser",this.t);var e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}]),t}(),V=function(){"use strict";function t(n,i,r){e(k)(this,t),this.t=n,this.i=i,this.o=r}return e(y)(t,[{key:"getToken",value:function(){return Promise.resolve(new q(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(A.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),j=function t(n){"use strict";e(k)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},J=function(){"use strict";function t(n){var i=this;e(k)(this,t),this.l=n,this.appCheck=null,n.onInit((function(e){i.appCheck=e}))}return e(y)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(x("string"==typeof e.token),new j(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Y=function(){"use strict";function t(n,i){e(k)(this,t),this.projectId=n,this.database=i||"(default)"}return e(y)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var K,G;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(G=K||(K={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";function X(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var W=function(t){"use strict";e(_)(i,t);var n=e(L)(i);function i(){var t;return e(k)(this,i),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(m)(t)}return i}(e(E)(Error)),Z=Symbol.iterator,Q=function(){"use strict";function t(n){e(k)(this,t),this.binaryString=n}return e(y)(t,[{key:Z,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return X(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new W("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();Q.EMPTY_BYTE_STRING=new Q("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $=function(){"use strict";function t(n,i,r,o,a){e(k)(this,t),this.key=n,this.value=i,this.color=null!=r?r:t.RED,this.left=null!=o?o:t.EMPTY,this.right=null!=a?a:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(y)(t,[{key:"copy",value:function(e,n,i,r,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=o?o:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===n(e,r.key)){if(r.right.isEmpty())return t.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw U();if(this.right.isRed())throw U();var e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$.EMPTY=null,$.RED=!0,$.BLACK=!1,$.EMPTY=new(function(){"use strict";function t(){e(k)(this,t),this.size=0}return e(y)(t,[{key:"key",get:function(){throw U()}},{key:"value",get:function(){throw U()}},{key:"color",get:function(){throw U()}},{key:"left",get:function(){throw U()}},{key:"right",get:function(){throw U()}},{key:"copy",value:function(e,t,n,i,r){return this}},{key:"insert",value:function(e,t,n){return new $(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ee=new Map;var te=function(){"use strict";function t(n){var i;if(e(k)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new F(O,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new F(O,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new F(O,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(y)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),ne=function(){"use strict";function t(n,i,r,o){e(k)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new te({}),this._settingsFrozen=!1}return e(y)(t,[{key:"app",get:function(){if(!this._app)throw new F(H,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new F(H,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new te(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new P;switch(e.type){case"firstParty":return new V(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new F(O,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=ee.get(e))&&(C("ComponentProvider","Removing Datastore"),ee.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new RegExp("[~\\*/\\[\\]]");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ie;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie="".concat(T.SDK_VERSION,"_lite"),N=ie,(0,T._registerComponent)(new(0,w.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,i=t.options,r=e.getProvider("app").getImmediate(),o=new ne(new z(e.getProvider("auth-internal")),new J(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new F(O,'"projectId" not provided in firebase.initializeApp.');return new Y(e.options.projectId,t)}(r,n),r);return i&&o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,T.registerVersion)("firestore-lite","3.10.0",""),(0,T.registerVersion)("firestore-lite","3.10.0","esm2017");o=r("1h2Gi"),s=r("6JpON"),a=r("kVdBw");function re(e){e.currentTarget===e.target&&ae()}function oe(e){"Escape"===e.key&&ae()}function ae(){a.refs.popupBackdrop.classList.add("is-hidden"),a.refs.popupCloseBtn.removeEventListener("click",ae),a.refs.popupBackdrop.removeEventListener("click",re),a.refs.addToLocalBtn.removeEventListener("click",me),window.removeEventListener("keydown",oe),document.body.style.overflow=""}var se;se=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("6ztcb");var le;le=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("1iaLI");var ce;ce=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("f8I3T");var ue;ue=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("3ZLqn");var he;he=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("9Cr2S");var de;de=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("8Aq8R");var fe,pe=document.querySelector(".bookcase"),ge=[],ve=[],ke=[];function ye(){return(ye=e(g)(e(v).mark((function t(n){var i,r,l;return e(v).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),n.target.closest(".book-card__link")){t.next=4;break}return t.abrupt("return");case 4:return be(),i=n.target.closest(".book-card__link").dataset.id,ke=i,t.next=9,(0,o.getBookDetail)(i);case 9:r=t.sent,l=_e(r),ke={bookId:i,bookData:r},a.refs.popupCardContainer.innerHTML=l,ve.forEach((function(e){ge.push(e.bookId)})),ge.includes(ke.bookId)?(a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1"):(a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0"),null===localStorage.getItem("user")&&(a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0"),r.buy_links,document.body.style.overflow="hidden",a.refs.popupBackdrop.classList.remove("is-hidden"),a.refs.popupCloseBtn.addEventListener("click",ae),a.refs.popupBackdrop.addEventListener("click",re),a.refs.addToLocalBtn.addEventListener("click",me),window.addEventListener("keydown",oe),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(0),e(s).Notify.failure("Network error, please try again later");case 28:case"end":return t.stop()}}),t,null,[[0,25]])})))).apply(this,arguments)}function _e(t){var n=t.title,i=t.author,r=t.book_image_height,o=t.book_image_width,a=t.book_image,s=t.description,l=t.buy_links;a||(a=e(h),r=500,o=330),s||(s="This book has no description yet. We will add it soon."),i||(i="Unknown author"),n||(n="Unknown title");var c="",u="",d="";return l.forEach((function(e){"Amazon"===e.name&&(c=e.url),"Apple Books"===e.name&&(u=e.url),"Bookshop"===e.name&&(d=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(a,"\n      alt='").concat(n,"'\n      width=").concat(o,"\n      heigth=").concat(r,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(n,'</h2>\n      <h3 class="card__book-author ">').concat(i,'</h3>\n      <p class="card__book-text ">\n        ').concat(s,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(c,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(se),",\n                ").concat(e(le),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(se),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(u,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ce),",\n                ").concat(e(ue),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ce),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(d,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(he),",\n                ").concat(e(de),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(he),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}function me(){var t=ve.some((function(e){return e.bookId===ke.bookId}));if(null===localStorage.getItem("user"))return function(){if(null===localStorage.getItem("user"))return a.refs.addToLocalBtn.setAttribute("disabled","true"),a.refs.addToLocalBtn.style.backgroundColor="#b4afaf",a.refs.addToLocalBtn.style.color="#ffffff",setTimeout((function(){a.refs.addToLocalBtn.removeAttribute("disabled"),a.refs.addToLocalBtn.style="none"}),2e3),e(s).Notify.failure("Please register or sign in to your account to use this feature.",{timeout:2e3})}();t?(ve=ve.filter((function(e){return e.bookId!==ke.bookId})),a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0",be()):(ve.push(ke),a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1",be())}function be(){localStorage.setItem("books-id",JSON.stringify(ve)),ge=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):(fe=localStorage.getItem("books-id"),ve=JSON.parse(fe)),pe.addEventListener("click",(function(e){return ye.apply(this,arguments)})),r("8zUhP"),r("8e9SS")}();
//# sourceMappingURL=index.15039cf3.js.map
