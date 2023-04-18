!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.b7d5ba4e.js","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","lxDUL":"shopping-list.9257e4e2.js"}')),o("1h2Gi");var r=o("1h2Gi"),a=o("kVdBw");function s(){var e="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",t=document.createElement("ul");t.classList.add("bookshelf__list"),(0,r.getTopBooks)().then((function(n){if(!Boolean(n.length))return e="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n          There are no data to display, please select another category\n        </h1>",a.refs.mainSectionCategories.innerHTML=e;var i=n.map((function(e){var t=e.list_name,n=e.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(t,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(n.map((function(e){var t=e._id,n=e.book_image_height,i=e.book_image_width,o=e.author,r=e.book_image,a=e.title;return"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(t,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(r,"' alt=\"Here must be book's name\"\n                      width='").concat(i,"'\n                      height='").concat(n,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(a,"</h3>\n                    <p class='book-card__author'>").concat(o,"</p>\n                  </div>\n                </li>")})).join(""),"\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(t,"'>see more</button>\n         </li>\n      ")})).join("");t.innerHTML=i,a.refs.mainSectionCategories.innerHTML=e,a.refs.mainSectionCategories.appendChild(t)})).catch((function(e){console.log(e.message)}))}s();a=o("kVdBw"),r=o("1h2Gi");function c(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var i=n.join(" ");return"".concat(i,' <span class="bookcase__filter">').concat(t,"</span>")}a=o("kVdBw");function l(e){e.preventDefault();var t=e.target.dataset.categoryName;if(t){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(t,'"]')).classList.add("categories__active"),a.refs.sectionCategory.scrollIntoView({behavior:"smooth",block:"start"});var n=document.createElement("h1"),i=document.createElement("ul");n.classList.add("bookcase__cda"),n.innerHTML=c(t),i.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,r.getBooksByCategory)(t).then((function(e){if(!Boolean(e.length))return n="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n            There are no data to display, please select another category\n          </h1>",a.refs.mainSectionCategories.innerHTML=n;var t=e.map((function(e){var t=e.book_image,n=e.book_image_height,i=e.book_image_width,o=e.author,r=e.title,a=(e.buy_links,e._id);return"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(a,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(t,"'\n        alt=\"Here must be book's name\"\n        width='").concat(i,"'\n        height = '").concat(n,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(r,"</h3>\n    <p class='book-card__author'>").concat(o,"</p>\n  </div>\n</li>")})).join("");i.innerHTML=t,a.refs.sectionCategory.innerHTML="",a.refs.sectionCategory.appendChild(n),a.refs.sectionCategory.appendChild(i)})).catch((function(e){return console.log(e.message)})):s()}}(0,r.getCategoryList)().then((function(e){var t=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).join("");a.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",a.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e.message)})),a.refs.categoriesList.addEventListener("click",l),a.refs.mainSectionCategories.addEventListener("click",l),o("9hn33"),o("xpKCW"),o("9A7sA"),o("ivz30"),o("kgvtT");var u=o("bpxeT"),h=o("2TvXO"),d=(a=o("kVdBw"),u=o("bpxeT"),o("8MBJY")),f=(o("ge8co"),o("a2hTj")),p=(o("jh8P3"),o("fVNic"),o("eYQtU")),g=o("jmhxu"),v=(o("1t1Wn"),o("8nrFW")),k=(o("l5bVx"),o("4c7YB")),y=o("2MbLg"),_=(h=o("2TvXO"),o("MjY8E")),m=o("6ExWU"),b=o("kZfxc"),E=o("2xDiJ"),T=function(){"use strict";function t(n){e(d)(this,t),this.uid=n}return e(f)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
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
var L="9.19.0",w=new(0,b.Logger)("@firebase/firestore");
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
 */function R(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(w.logLevel<=b.LogLevel.DEBUG){var r,a=i.map(S);(r=w).debug.apply(r,["Firestore (".concat(L,"): ").concat(t)].concat(e(v)(a)))}}function A(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(w.logLevel<=b.LogLevel.ERROR){var r,a=i.map(S);(r=w).error.apply(r,["Firestore (".concat(L,"): ").concat(t)].concat(e(v)(a)))}}function S(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(L,") INTERNAL ASSERTION FAILED: ")+e;throw A(t),new Error(t)}function D(e,t){e||I()}
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
var N="invalid-argument",C="failed-precondition",x=function(t){"use strict";e(p)(i,t);var n=e(y)(i);function i(t,o){var r;return e(d)(this,i),(r=n.call(this,t,o)).code=t,r.message=o,r.toString=function(){return"".concat(r.name,": [code=").concat(r.code,"]: ").concat(r.message)},e(g)(r)}return i}(E.FirebaseError),B=function t(n,i){"use strict";e(d)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},O=function(){"use strict";function t(){e(d)(this,t)}return e(f)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(T.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),U=function(){"use strict";function t(n){var i=this;e(d)(this,t),this.auth=null,n.onInit((function(e){i.auth=e}))}return e(f)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(D("string"==typeof t.accessToken),new B(t.accessToken,new T(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),F=function(){"use strict";function t(n,i,o){e(d)(this,t),this.t=n,this.i=i,this.o=o,this.type="FirstParty",this.user=T.FIRST_PARTY,this.u=new Map}return e(f)(t,[{key:"h",value:function(){return this.o?this.o():null}},{key:"headers",get:function(){this.u.set("X-Goog-AuthUser",this.t);var e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}]),t}(),M=function(){"use strict";function t(n,i,o){e(d)(this,t),this.t=n,this.i=i,this.o=o}return e(f)(t,[{key:"getToken",value:function(){return Promise.resolve(new F(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(T.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),P=function t(n){"use strict";e(d)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},H=function(){"use strict";function t(n){var i=this;e(d)(this,t),this.l=n,this.appCheck=null,n.onInit((function(e){i.appCheck=e}))}return e(f)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(D("string"==typeof e.token),new P(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),z=function(){"use strict";function t(n,i){e(d)(this,t),this.projectId=n,this.database=i||"(default)"}return e(f)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
var q,V;
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
(V=q||(q={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";function j(e,t){return e<t?-1:e>t?1:0}
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
var Y=function(t){"use strict";e(p)(i,t);var n=e(y)(i);function i(){var t;return e(d)(this,i),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(g)(t)}return i}(e(k)(Error)),K=Symbol.iterator,G=function(){"use strict";function t(n){e(d)(this,t),this.binaryString=n}return e(f)(t,[{key:K,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return j(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Y("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();G.EMPTY_BYTE_STRING=new G("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var J=function(){"use strict";function t(n,i,o,r,a){e(d)(this,t),this.key=n,this.value=i,this.color=null!=o?o:t.RED,this.left=null!=r?r:t.EMPTY,this.right=null!=a?a:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(f)(t,[{key:"copy",value:function(e,n,i,o,r){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=o?o:this.left,null!=r?r:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var i=this,o=n(e,i.key);return(i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===o?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),0===n(e,o.key)){if(o.right.isEmpty())return t.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw I();if(this.right.isRed())throw I();var e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}]),t}();
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
 */J.EMPTY=null,J.RED=!0,J.BLACK=!1,J.EMPTY=new(function(){"use strict";function t(){e(d)(this,t),this.size=0}return e(f)(t,[{key:"key",get:function(){throw I()}},{key:"value",get:function(){throw I()}},{key:"color",get:function(){throw I()}},{key:"left",get:function(){throw I()}},{key:"right",get:function(){throw I()}},{key:"copy",value:function(e,t,n,i,o){return this}},{key:"insert",value:function(e,t,n){return new J(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var X=new Map;var W=function(){"use strict";function t(n){var i;if(e(d)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new x(N,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new x(N,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new x(N,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(f)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),Z=function(){"use strict";function t(n,i,o,r){e(d)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=o,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W({}),this._settingsFrozen=!1}return e(f)(t,[{key:"app",get:function(){if(!this._app)throw new x(C,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new x(C,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new O;switch(e.type){case"firstParty":return new M(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new x(N,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=X.get(e))&&(R("ComponentProvider","Removing Datastore"),X.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var Q;
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
 */Q="".concat(_.SDK_VERSION,"_lite"),L=Q,(0,_._registerComponent)(new(0,m.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,i=t.options,o=e.getProvider("app").getImmediate(),r=new Z(new U(e.getProvider("auth-internal")),new H(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new x(N,'"projectId" not provided in firebase.initializeApp.');return new z(e.options.projectId,t)}(o,n),o);return i&&r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,_.registerVersion)("firestore-lite","3.10.0",""),(0,_.registerVersion)("firestore-lite","3.10.0","esm2017");r=o("1h2Gi"),a=o("kVdBw");function $(e){e.currentTarget===e.target&&te()}function ee(e){"Escape"===e.key&&te()}function te(){a.refs.popupBackdrop.classList.add("is-hidden"),a.refs.popupCloseBtn.removeEventListener("click",te),a.refs.popupBackdrop.removeEventListener("click",$),a.refs.addToLocalBtn.removeEventListener("click",ge),window.removeEventListener("keydown",ee),document.body.style.overflow=""}var ne;ne=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6ztcb");var ie;ie=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("1iaLI");var oe;oe=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("f8I3T");var re;re=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("3ZLqn");var ae;ae=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9Cr2S");var se;se=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("8Aq8R");var ce,le=document.querySelector(".bookcase"),ue=[],he=[],de=[];function fe(){return(fe=e(u)(e(h).mark((function t(n){var i,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.closest(".book-card__link")){e.next=3;break}return e.abrupt("return");case 3:return ve(),i=n.target.closest(".book-card__link").dataset.id,de=i,e.next=8,(0,r.getBookDetail)(i);case 8:o=e.sent,s=pe(o),de={bookId:i,bookData:o},a.refs.popupCardContainer.innerHTML=s,he.forEach((function(e){ue.push(e.bookId)})),ue.includes(de.bookId)?(a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1"):(a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0"),o.buy_links,document.body.style.overflow="hidden",a.refs.popupBackdrop.classList.remove("is-hidden"),a.refs.popupCloseBtn.addEventListener("click",te),a.refs.popupBackdrop.addEventListener("click",$),a.refs.addToLocalBtn.addEventListener("click",ge),window.addEventListener("keydown",ee);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function pe(t){var n=t.title,i=t.author,o=t.book_image_height,r=t.book_image_width,a=t.book_image,s=t.description,c=t.buy_links;s||(s="N/A"),i||(i="N/A"),n||(n="N/A");var l="",u="",h="";return c.forEach((function(e){"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(u=e.url),"Bookshop"===e.name&&(h=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(a,"\n      alt='").concat(n,"'\n      width=").concat(r,"\n      heigth=").concat(o,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(n,'</h2>\n      <h3 class="card__book-author ">').concat(i,'</h3>\n      <p class="card__book-text ">\n        ').concat(s,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(l,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(ne),",\n                ").concat(e(ie),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ne),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(u,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(oe),",\n                ").concat(e(re),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(oe),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(h,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ae),",\n                ").concat(e(se),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ae),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}function ge(){he.some((function(e){return e.bookId===de.bookId}))?(he=he.filter((function(e){return e.bookId!==de.bookId})),a.refs.addToLocalBtn.innerHTML="add to shopping list",a.refs.popupDesc.style.opacity="0",ve()):(he.push(de),a.refs.addToLocalBtn.innerHTML="remove from the shopping list",a.refs.popupDesc.style.opacity="1",ve())}function ve(){localStorage.setItem("books-id",JSON.stringify(he)),ue=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):(ce=localStorage.getItem("books-id"),he=JSON.parse(ce)),le.addEventListener("click",(function(e){return fe.apply(this,arguments)})),o("8zUhP"),o("8e9SS")}();
//# sourceMappingURL=index.b7d5ba4e.js.map
