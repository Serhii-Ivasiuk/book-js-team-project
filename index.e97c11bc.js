!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.e97c11bc.js","izqLI":"shoping-list-bg@1x.2c75914c.png","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","5VkSf":"empty_pic.dcf0d48a.jpg","lxDUL":"shopping-list.9b867f23.js"}')),r("1h2Gi");var o,s=r("1h2Gi"),a=r("kVdBw");function c(){var t=document.createElement("img");t.src=e(o),t.classList.add("not-found");var n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}function l(){var e=document.createElement("ul");e.classList.add("bookshelf__list"),(0,s.getTopBooks)().then((function(t){if(!Boolean(t.length))return a.refs.mainSectionCategories.innerHTML="",a.refs.mainSectionCategories.appendChild(c());var n=t.map((function(e){var t=e.list_name,n=e.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(t,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(n.map((function(e){var t=e._id,n=e.book_image_height,i=e.book_image_width,r=e.author,o=e.book_image,s=e.title;return"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(t,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(o,"' alt=\"Here must be book's name\"\n                      width='").concat(i,"'\n                      height='").concat(n,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(s||"N/A","</h3>\n                    <p class='book-card__author'>").concat(r||"N/A","</p>\n                  </div>\n                </li>")})).join(""),"\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(t,"'>see more</button>\n         </li>\n      ")})).join("");e.innerHTML=n,a.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",a.refs.mainSectionCategories.appendChild(e)})).catch((function(e){console.log(e.message)}))}o=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("izqLI"),r("kVdBw"),l(),a.refs.logo.addEventListener("click",(function(){l()}));a=r("kVdBw"),s=r("1h2Gi");function u(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var i=n.join(" ");return"".concat(i,' <span class="bookcase__filter">').concat(t,"</span>")}a=r("kVdBw");function h(e){e.preventDefault();var t=e.target.dataset.categoryName;if(t){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(t,'"]')).classList.add("categories__active"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";e.scrollIntoView({behavior:"smooth",position:t})}(a.refs.sectionCategory);var n=document.createElement("h1"),i=document.createElement("ul");n.classList.add("bookcase__cda"),n.innerHTML=u(t),i.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,s.getBooksByCategory)(t).then((function(e){if(!Boolean(e.length))return a.refs.mainSectionCategories.innerHTML="",a.refs.mainSectionCategories.appendChild(c());var t=e.map((function(e){var t=e.book_image,n=e.book_image_height,i=e.book_image_width,r=e.author,o=e.title,s=(e.buy_links,e._id);return"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(s,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(t,"'\n        alt=\"Here must be book's name\"\n        width='").concat(i,"'\n        height = '").concat(n,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(o||"N/A","</h3>\n    <p class='book-card__author'>").concat(r||"N/A","</p>\n  </div>\n</li>")})).join("");i.innerHTML=t,a.refs.sectionCategory.innerHTML="",a.refs.sectionCategory.appendChild(n),a.refs.sectionCategory.appendChild(i)})).catch((function(e){return console.log(e.message)})):l()}}(0,s.getCategoryList)().then((function(e){var t=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).join("");a.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",a.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e.message)})),a.refs.categoriesList.addEventListener("click",h),a.refs.mainSectionCategories.addEventListener("click",h),r("9hn33"),r("xpKCW"),r("9A7sA"),r("ivz30"),r("kgvtT");var d=r("bpxeT"),f=r("2TvXO"),p=(a=r("kVdBw"),d=r("bpxeT"),r("8MBJY")),g=(r("ge8co"),r("a2hTj")),v=(r("jh8P3"),r("fVNic"),r("eYQtU")),k=r("jmhxu"),y=(r("1t1Wn"),r("8nrFW")),_=(r("l5bVx"),r("4c7YB")),m=r("2MbLg"),b=(f=r("2TvXO"),r("MjY8E")),E=r("6ExWU"),w=r("kZfxc"),T=r("2xDiJ"),L=function(){"use strict";function t(n){e(p)(this,t),this.uid=n}return e(g)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();L.UNAUTHENTICATED=new L(null),L.GOOGLE_CREDENTIALS=new L("google-credentials-uid"),L.FIRST_PARTY=new L("first-party-uid"),L.MOCK_USER=new L("mock-user");
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
var A="9.19.0",R=new(0,w.Logger)("@firebase/firestore");
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
 */function S(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(R.logLevel<=w.LogLevel.DEBUG){var o,s=i.map(I);(o=R).debug.apply(o,["Firestore (".concat(A,"): ").concat(t)].concat(e(y)(s)))}}function N(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];if(R.logLevel<=w.LogLevel.ERROR){var o,s=i.map(I);(o=R).error.apply(o,["Firestore (".concat(A,"): ").concat(t)].concat(e(y)(s)))}}function I(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(A,") INTERNAL ASSERTION FAILED: ")+e;throw N(t),new Error(t)}function D(e,t){e||C()}
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
var B="invalid-argument",x="failed-precondition",O=function(t){"use strict";e(v)(i,t);var n=e(m)(i);function i(t,r){var o;return e(p)(this,i),(o=n.call(this,t,r)).code=t,o.message=r,o.toString=function(){return"".concat(o.name,": [code=").concat(o.code,"]: ").concat(o.message)},e(k)(o)}return i}(T.FirebaseError),H=function t(n,i){"use strict";e(p)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},U=function(){"use strict";function t(){e(p)(this,t)}return e(g)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(L.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),F=function(){"use strict";function t(n){var i=this;e(p)(this,t),this.auth=null,n.onInit((function(e){i.auth=e}))}return e(g)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(D("string"==typeof t.accessToken),new H(t.accessToken,new L(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),M=function(){"use strict";function t(n,i,r){e(p)(this,t),this.t=n,this.i=i,this.o=r,this.type="FirstParty",this.user=L.FIRST_PARTY,this.u=new Map}return e(g)(t,[{key:"h",value:function(){return this.o?this.o():null}},{key:"headers",get:function(){this.u.set("X-Goog-AuthUser",this.t);var e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}]),t}(),P=function(){"use strict";function t(n,i,r){e(p)(this,t),this.t=n,this.i=i,this.o=r}return e(g)(t,[{key:"getToken",value:function(){return Promise.resolve(new M(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(L.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),z=function t(n){"use strict";e(p)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},q=function(){"use strict";function t(n){var i=this;e(p)(this,t),this.l=n,this.appCheck=null,n.onInit((function(e){i.appCheck=e}))}return e(g)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(D("string"==typeof e.token),new z(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),V=function(){"use strict";function t(n,i){e(p)(this,t),this.projectId=n,this.database=i||"(default)"}return e(g)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
var j,Y;
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
(Y=j||(j={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";function J(e,t){return e<t?-1:e>t?1:0}
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
var K=function(t){"use strict";e(v)(i,t);var n=e(m)(i);function i(){var t;return e(p)(this,i),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(k)(t)}return i}(e(_)(Error)),G=Symbol.iterator,X=function(){"use strict";function t(n){e(p)(this,t),this.binaryString=n}return e(g)(t,[{key:G,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return J(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new K("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();X.EMPTY_BYTE_STRING=new X("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var W=function(){"use strict";function t(n,i,r,o,s){e(p)(this,t),this.key=n,this.value=i,this.color=null!=r?r:t.RED,this.left=null!=o?o:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(g)(t,[{key:"copy",value:function(e,n,i,r,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=o?o:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===n(e,r.key)){if(r.right.isEmpty())return t.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw C();if(this.right.isRed())throw C();var e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}]),t}();
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
 */W.EMPTY=null,W.RED=!0,W.BLACK=!1,W.EMPTY=new(function(){"use strict";function t(){e(p)(this,t),this.size=0}return e(g)(t,[{key:"key",get:function(){throw C()}},{key:"value",get:function(){throw C()}},{key:"color",get:function(){throw C()}},{key:"left",get:function(){throw C()}},{key:"right",get:function(){throw C()}},{key:"copy",value:function(e,t,n,i,r){return this}},{key:"insert",value:function(e,t,n){return new W(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var Z=new Map;var Q=function(){"use strict";function t(n){var i;if(e(p)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new O(B,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new O(B,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new O(B,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(g)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),$=function(){"use strict";function t(n,i,r,o){e(p)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Q({}),this._settingsFrozen=!1}return e(g)(t,[{key:"app",get:function(){if(!this._app)throw new O(x,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new O(x,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Q(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new U;switch(e.type){case"firstParty":return new P(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new O(B,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Z.get(e))&&(S("ComponentProvider","Removing Datastore"),Z.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var ee;
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
 */ee="".concat(b.SDK_VERSION,"_lite"),A=ee,(0,b._registerComponent)(new(0,E.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,i=t.options,r=e.getProvider("app").getImmediate(),o=new $(new F(e.getProvider("auth-internal")),new q(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new O(B,'"projectId" not provided in firebase.initializeApp.');return new V(e.options.projectId,t)}(r,n),r);return i&&o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,b.registerVersion)("firestore-lite","3.10.0",""),(0,b.registerVersion)("firestore-lite","3.10.0","esm2017");s=r("1h2Gi"),a=r("kVdBw");function te(e){e.currentTarget===e.target&&ie()}function ne(e){"Escape"===e.key&&ie()}function ie(){a.refs.popupBackdrop.classList.add("is-hidden"),a.refs.popupCloseBtn.removeEventListener("click",ie),a.refs.popupBackdrop.removeEventListener("click",te),a.refs.addToLocalBtn.removeEventListener("click",ye),window.removeEventListener("keydown",ne),document.body.style.overflow=""}var re;re=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("6ztcb");var oe;oe=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("1iaLI");var se;se=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("f8I3T");var ae;ae=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("3ZLqn");var ce;ce=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("9Cr2S");var le;le=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("8Aq8R");var ue;ue=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("5VkSf");var he,de=document.querySelector(".bookcase"),fe=[],pe=[],ge=[];function ve(){return(ve=e(d)(e(f).mark((function t(n){var i,r,o;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.closest(".book-card__link")){e.next=3;break}return e.abrupt("return");case 3:return _e(),i=n.target.closest(".book-card__link").dataset.id,ge=i,e.next=8,(0,s.getBookDetail)(i);case 8:r=e.sent,o=ke(r),ge={bookId:i,bookData:r},a.refs.popupCardContainer.innerHTML=o,pe.forEach((function(e){fe.push(e.bookId)})),fe.includes(ge.bookId)?(a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1"):(a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0"),r.buy_links,document.body.style.overflow="hidden",a.refs.popupBackdrop.classList.remove("is-hidden"),a.refs.popupCloseBtn.addEventListener("click",ie),a.refs.popupBackdrop.addEventListener("click",te),a.refs.addToLocalBtn.addEventListener("click",ye),window.addEventListener("keydown",ne);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ke(t){var n=t.title,i=t.author,r=t.book_image_height,o=t.book_image_width,s=t.book_image,a=t.description,c=t.buy_links;s||(s=e(ue),r=500,o=330),a||(a="N/A"),i||(i="N/A"),n||(n="N/A");var l="",u="",h="";return c.forEach((function(e){"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(u=e.url),"Bookshop"===e.name&&(h=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(s,"\n      alt='").concat(n,"'\n      width=").concat(o,"\n      heigth=").concat(r,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(n,'</h2>\n      <h3 class="card__book-author ">').concat(i,'</h3>\n      <p class="card__book-text ">\n        ').concat(a,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(l,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(re),",\n                ").concat(e(oe),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(re),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(u,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(se),",\n                ").concat(e(ae),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(se),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(h,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ce),",\n                ").concat(e(le),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ce),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}function ye(){pe.some((function(e){return e.bookId===ge.bookId}))?(pe=pe.filter((function(e){return e.bookId!==ge.bookId})),a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0",_e()):(pe.push(ge),a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1",_e())}function _e(){localStorage.setItem("books-id",JSON.stringify(pe)),fe=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):(he=localStorage.getItem("books-id"),pe=JSON.parse(he)),de.addEventListener("click",(function(e){return ve.apply(this,arguments)})),r("8zUhP"),r("8e9SS");a=r("kVdBw");window.addEventListener("scroll",(function(){var e=a.refs.sidebar.offsetHeight,t=a.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(a.refs.sidebar.scrollTop=0),n+window.innerHeight>=t&&(a.refs.sidebar.scrollTop=e-window.innerHeight+t-n)}))}();
//# sourceMappingURL=index.e97c11bc.js.map
