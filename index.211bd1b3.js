!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.211bd1b3.js","izqLI":"shoping-list-bg@1x.2c75914c.png","5VkSf":"empty_pic.dcf0d48a.jpg","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","lxDUL":"shopping-list.af65186c.js"}')),o("1h2Gi");var r=o("1h2Gi"),s=o("kVdBw");s=o("kVdBw");function a(){!s.refs.spinner.classList.contains("done")&&s.refs.spinner.classList.add("done"),document.body.style.overflow=""}var c;function l(){var t=document.createElement("img");t.src=e(c),t.classList.add("not-found");var n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}c=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("izqLI"),o("kVdBw");var u;function h(){var t=document.createElement("ul");t.classList.add("bookshelf__list"),s.refs.spinner.classList.contains("done")&&s.refs.spinner.classList.remove("done"),document.body.style.overflow="hidden",(0,r.getTopBooks)().then((function(n){if(!Boolean(n.length))return s.refs.mainSectionCategories.innerHTML="",s.refs.mainSectionCategories.appendChild(l());var i=n.map((function(t){var n=t.list_name,i=t.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(n,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(i.map((function(t){var n=t._id,i=t.book_image_height,o=t.book_image_width,r=t.author,s=t.book_image,a=t.title;return s||(s=e(u),i=500,o=330),"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(n,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(s,"' alt=\"Here must be book's name\"\n                      width='").concat(o,"'\n                      height='").concat(i,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(a||"Unknown title","</h3>\n                    <p class='book-card__author'>").concat(r||"Unknown author","</p>\n                  </div>\n                </li>")})).join(""),"\n                \n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(n,"'>see more</button>\n         </li>\n      ")})).join("");t.innerHTML=i,s.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",s.refs.mainSectionCategories.appendChild(t)})).catch((function(e){console.log(e.message)})).finally(a)}u=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("5VkSf"),h(),s.refs.logo.addEventListener("click",(function(){h()}));s=o("kVdBw"),r=o("1h2Gi");function d(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var i=n.join(" ");return"".concat(i,' <span class="bookcase__filter">').concat(t,"</span>")}s=o("kVdBw");function f(t){t.preventDefault();var n=t.target.dataset.categoryName;if(n){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(n,'"]')).classList.add("categories__active"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";e.scrollIntoView({behavior:"smooth",position:t})}(s.refs.sectionCategory);var i=document.createElement("h1"),o=document.createElement("ul");i.classList.add("bookcase__cda"),i.innerHTML=d(n),o.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,r.getBooksByCategory)(n).then((function(t){if(!Boolean(t.length))return s.refs.mainSectionCategories.innerHTML="",s.refs.mainSectionCategories.appendChild(l());var n=t.map((function(t){var n=t.book_image,i=t.book_image_height,o=t.book_image_width,r=t.author,s=t.title,a=(t.buy_links,t._id);return n||(n=e(u),i=500,o=330),"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(a,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(n,"'\n        alt=\"Here must be book's name\"\n        width='").concat(o,"'\n        height = '").concat(i,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(s||"Unknown title","</h3>\n    <p class='book-card__author'>").concat(r||"Unknown author","</p>\n  </div>\n</li>")})).join("");o.innerHTML=n,s.refs.sectionCategory.innerHTML="",s.refs.sectionCategory.appendChild(i),s.refs.sectionCategory.appendChild(o)})).catch((function(e){return console.log(e.message)})):h()}}(0,r.getCategoryList)().then((function(e){var t=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).join("");s.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",s.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e.message)})),s.refs.categoriesList.addEventListener("click",f),s.refs.mainSectionCategories.addEventListener("click",f),o("9hn33"),o("xpKCW"),o("9A7sA"),o("ivz30"),o("kgvtT");var p=o("bpxeT"),g=o("2TvXO"),v=(s=o("kVdBw"),p=o("bpxeT"),o("8MBJY")),k=(o("ge8co"),o("a2hTj")),y=(o("jh8P3"),o("fVNic"),o("eYQtU")),_=o("jmhxu"),m=(o("1t1Wn"),o("8nrFW")),b=(o("l5bVx"),o("4c7YB")),E=o("2MbLg"),w=(g=o("2TvXO"),o("MjY8E")),L=o("6ExWU"),T=o("kZfxc"),R=o("2xDiJ"),S=function(){"use strict";function t(n){e(v)(this,t),this.uid=n}return e(k)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();S.UNAUTHENTICATED=new S(null),S.GOOGLE_CREDENTIALS=new S("google-credentials-uid"),S.FIRST_PARTY=new S("first-party-uid"),S.MOCK_USER=new S("mock-user");
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
var A="9.19.0",I=new(0,T.Logger)("@firebase/firestore");
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
 */function C(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(I.logLevel<=T.LogLevel.DEBUG){var r,s=i.map(N);(r=I).debug.apply(r,["Firestore (".concat(A,"): ").concat(t)].concat(e(m)(s)))}}function D(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(I.logLevel<=T.LogLevel.ERROR){var r,s=i.map(N);(r=I).error.apply(r,["Firestore (".concat(A,"): ").concat(t)].concat(e(m)(s)))}}function N(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(A,") INTERNAL ASSERTION FAILED: ")+e;throw D(t),new Error(t)}function U(e,t){e||B()}
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
var x="invalid-argument",O="failed-precondition",H=function(t){"use strict";e(y)(i,t);var n=e(E)(i);function i(t,o){var r;return e(v)(this,i),(r=n.call(this,t,o)).code=t,r.message=o,r.toString=function(){return"".concat(r.name,": [code=").concat(r.code,"]: ").concat(r.message)},e(_)(r)}return i}(R.FirebaseError),F=function t(n,i){"use strict";e(v)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},M=function(){"use strict";function t(){e(v)(this,t)}return e(k)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(S.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),P=function(){"use strict";function t(n){var i=this;e(v)(this,t),this.auth=null,n.onInit((function(e){i.auth=e}))}return e(k)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(U("string"==typeof t.accessToken),new F(t.accessToken,new S(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),z=function(){"use strict";function t(n,i,o){e(v)(this,t),this.t=n,this.i=i,this.o=o,this.type="FirstParty",this.user=S.FIRST_PARTY,this.u=new Map}return e(k)(t,[{key:"h",value:function(){return this.o?this.o():null}},{key:"headers",get:function(){this.u.set("X-Goog-AuthUser",this.t);var e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}]),t}(),q=function(){"use strict";function t(n,i,o){e(v)(this,t),this.t=n,this.i=i,this.o=o}return e(k)(t,[{key:"getToken",value:function(){return Promise.resolve(new z(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(S.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),V=function t(n){"use strict";e(v)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},j=function(){"use strict";function t(n){var i=this;e(v)(this,t),this.l=n,this.appCheck=null,n.onInit((function(e){i.appCheck=e}))}return e(k)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(U("string"==typeof e.token),new V(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Y=function(){"use strict";function t(n,i){e(v)(this,t),this.projectId=n,this.database=i||"(default)"}return e(k)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
var J,K;
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
(K=J||(J={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";function G(e,t){return e<t?-1:e>t?1:0}
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
var X=function(t){"use strict";e(y)(i,t);var n=e(E)(i);function i(){var t;return e(v)(this,i),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(_)(t)}return i}(e(b)(Error)),W=Symbol.iterator,Z=function(){"use strict";function t(n){e(v)(this,t),this.binaryString=n}return e(k)(t,[{key:W,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return G(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new X("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();Z.EMPTY_BYTE_STRING=new Z("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var Q=function(){"use strict";function t(n,i,o,r,s){e(v)(this,t),this.key=n,this.value=i,this.color=null!=o?o:t.RED,this.left=null!=r?r:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(k)(t,[{key:"copy",value:function(e,n,i,o,r){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=o?o:this.left,null!=r?r:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var i=this,o=n(e,i.key);return(i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===o?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),0===n(e,o.key)){if(o.right.isEmpty())return t.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw B();if(this.right.isRed())throw B();var e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}]),t}();
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
 */Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1,Q.EMPTY=new(function(){"use strict";function t(){e(v)(this,t),this.size=0}return e(k)(t,[{key:"key",get:function(){throw B()}},{key:"value",get:function(){throw B()}},{key:"color",get:function(){throw B()}},{key:"left",get:function(){throw B()}},{key:"right",get:function(){throw B()}},{key:"copy",value:function(e,t,n,i,o){return this}},{key:"insert",value:function(e,t,n){return new Q(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var $=new Map;var ee=function(){"use strict";function t(n){var i;if(e(v)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new H(x,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new H(x,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new H(x,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(k)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),te=function(){"use strict";function t(n,i,o,r){e(v)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=o,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ee({}),this._settingsFrozen=!1}return e(k)(t,[{key:"app",get:function(){if(!this._app)throw new H(O,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new H(O,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ee(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new M;switch(e.type){case"firstParty":return new q(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new H(x,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=$.get(e))&&(C("ComponentProvider","Removing Datastore"),$.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var ne;
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
 */ne="".concat(w.SDK_VERSION,"_lite"),A=ne,(0,w._registerComponent)(new(0,L.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,i=t.options,o=e.getProvider("app").getImmediate(),r=new te(new P(e.getProvider("auth-internal")),new j(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new H(x,'"projectId" not provided in firebase.initializeApp.');return new Y(e.options.projectId,t)}(o,n),o);return i&&r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,w.registerVersion)("firestore-lite","3.10.0",""),(0,w.registerVersion)("firestore-lite","3.10.0","esm2017");r=o("1h2Gi"),s=o("kVdBw");function ie(e){e.currentTarget===e.target&&re()}function oe(e){"Escape"===e.key&&re()}function re(){s.refs.popupBackdrop.classList.add("is-hidden"),s.refs.popupCloseBtn.removeEventListener("click",re),s.refs.popupBackdrop.removeEventListener("click",ie),s.refs.addToLocalBtn.removeEventListener("click",_e),window.removeEventListener("keydown",oe),document.body.style.overflow=""}var se;se=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6ztcb");var ae;ae=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("1iaLI");var ce;ce=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("f8I3T");var le;le=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("3ZLqn");var ue;ue=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9Cr2S");var he;he=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("8Aq8R");var de,fe=document.querySelector(".bookcase"),pe=[],ge=[],ve=[];function ke(){return(ke=e(p)(e(g).mark((function t(n){var i,o,a;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.closest(".book-card__link")){e.next=3;break}return e.abrupt("return");case 3:return me(),i=n.target.closest(".book-card__link").dataset.id,ve=i,e.next=8,(0,r.getBookDetail)(i);case 8:o=e.sent,a=ye(o),ve={bookId:i,bookData:o},s.refs.popupCardContainer.innerHTML=a,ge.forEach((function(e){pe.push(e.bookId)})),pe.includes(ve.bookId)?(s.refs.addToLocalBtn.innerHTML="remove from the shopping list",s.refs.popupDesc.style.opacity="1"):(s.refs.addToLocalBtn.innerHTML="add to shopping list",s.refs.popupDesc.style.opacity="0"),o.buy_links,document.body.style.overflow="hidden",s.refs.popupBackdrop.classList.remove("is-hidden"),s.refs.popupCloseBtn.addEventListener("click",re),s.refs.popupBackdrop.addEventListener("click",ie),s.refs.addToLocalBtn.addEventListener("click",_e),window.addEventListener("keydown",oe);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ye(t){var n=t.title,i=t.author,o=t.book_image_height,r=t.book_image_width,s=t.book_image,a=t.description,c=t.buy_links;s||(s=e(u),o=500,r=330),a||(a="This book has no description yet. We will add it soon."),i||(i="Unknown author"),n||(n="Unknown title");var l="",h="",d="";return c.forEach((function(e){"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(h=e.url),"Bookshop"===e.name&&(d=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(s,"\n      alt='").concat(n,"'\n      width=").concat(r,"\n      heigth=").concat(o,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(n,'</h2>\n      <h3 class="card__book-author ">').concat(i,'</h3>\n      <p class="card__book-text ">\n        ').concat(a,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(l,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(se),",\n                ").concat(e(ae),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(se),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(h,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ce),",\n                ").concat(e(le),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ce),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(d,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ue),",\n                ").concat(e(he),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ue),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}function _e(){ge.some((function(e){return e.bookId===ve.bookId}))?(ge=ge.filter((function(e){return e.bookId!==ve.bookId})),s.refs.addToLocalBtn.innerHTML="add to shopping list",s.refs.popupDesc.style.opacity="0",me()):(ge.push(ve),s.refs.addToLocalBtn.innerHTML="remove from the shopping list",s.refs.popupDesc.style.opacity="1",me())}function me(){localStorage.setItem("books-id",JSON.stringify(ge)),pe=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):(de=localStorage.getItem("books-id"),ge=JSON.parse(de)),fe.addEventListener("click",(function(e){return ke.apply(this,arguments)})),o("8zUhP"),o("8e9SS");s=o("kVdBw");window.addEventListener("scroll",(function(){var e=s.refs.sidebar.offsetHeight,t=s.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(s.refs.sidebar.scrollTop=0),n+window.innerHeight>=t&&(s.refs.sidebar.scrollTop=e-window.innerHeight+t-n)}))}();
//# sourceMappingURL=index.211bd1b3.js.map
