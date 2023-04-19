!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.8cbc8232.js","izqLI":"shoping-list-bg@1x.2c75914c.png","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","5VkSf":"empty_pic.dcf0d48a.jpg","lxDUL":"shopping-list.af65186c.js"}')),o("1h2Gi");var r=o("1h2Gi"),s=o("kVdBw");s=o("kVdBw");function a(){!s.refs.spinner.classList.contains("done")&&s.refs.spinner.classList.add("done"),document.body.style.overflow=""}var c;function l(){var t=document.createElement("img");t.src=e(c),t.classList.add("not-found");var n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}function u(){var e=document.createElement("ul");e.classList.add("bookshelf__list"),s.refs.spinner.classList.contains("done")&&s.refs.spinner.classList.remove("done"),document.body.style.overflow="hidden",(0,r.getTopBooks)().then((function(t){if(!Boolean(t.length))return s.refs.mainSectionCategories.innerHTML="",s.refs.mainSectionCategories.appendChild(l());var n=t.map((function(e){var t=e.list_name,n=e.books;return"\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>".concat(t,"</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ").concat(n.map((function(e){var t=e._id,n=e.book_image_height,i=e.book_image_width,o=e.author,r=e.book_image,s=e.title;return"<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='".concat(t,"'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='").concat(r,"' alt=\"Here must be book's name\"\n                      width='").concat(i,"'\n                      height='").concat(n,"'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>").concat(s||"N/A","</h3>\n                    <p class='book-card__author'>").concat(o||"N/A","</p>\n                  </div>\n                </li>")})).join(""),"\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='").concat(t,"'>see more</button>\n         </li>\n      ")})).join("");e.innerHTML=n,s.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",s.refs.mainSectionCategories.appendChild(e)})).catch((function(e){console.log(e.message)})).finally(a)}c=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("izqLI"),o("kVdBw"),u(),s.refs.logo.addEventListener("click",(function(){u()}));s=o("kVdBw"),r=o("1h2Gi");function h(e){var t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];var n=e.split(" ");n.pop();var i=n.join(" ");return"".concat(i,' <span class="bookcase__filter">').concat(t,"</span>")}s=o("kVdBw");function d(e){e.preventDefault();var t=e.target.dataset.categoryName;if(t){document.querySelector(".categories__active").classList.remove("categories__active"),document.querySelector('[data-category-name="'.concat(t,'"]')).classList.add("categories__active"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";e.scrollIntoView({behavior:"smooth",position:t})}(s.refs.sectionCategory);var n=document.createElement("h1"),i=document.createElement("ul");n.classList.add("bookcase__cda"),n.innerHTML=h(t),i.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,r.getBooksByCategory)(t).then((function(e){if(!Boolean(e.length))return s.refs.mainSectionCategories.innerHTML="",s.refs.mainSectionCategories.appendChild(l());var t=e.map((function(e){var t=e.book_image,n=e.book_image_height,i=e.book_image_width,o=e.author,r=e.title,s=(e.buy_links,e._id);return"<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='".concat(s,"'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='").concat(t,"'\n        alt=\"Here must be book's name\"\n        width='").concat(i,"'\n        height = '").concat(n,"'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>").concat(r||"N/A","</h3>\n    <p class='book-card__author'>").concat(o||"N/A","</p>\n  </div>\n</li>")})).join("");i.innerHTML=t,s.refs.sectionCategory.innerHTML="",s.refs.sectionCategory.appendChild(n),s.refs.sectionCategory.appendChild(i)})).catch((function(e){return console.log(e.message)})):u()}}(0,r.getCategoryList)().then((function(e){var t=e.map((function(e){return"\n        <li class = 'categories__item'>\n          <button type=\"button\" data-category-name='".concat(e,"' class='categories__name'>").concat(e,"</button>\n        </li>")})).join("");s.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",s.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e.message)})),s.refs.categoriesList.addEventListener("click",d),s.refs.mainSectionCategories.addEventListener("click",d),o("9hn33"),o("xpKCW"),o("9A7sA"),o("ivz30"),o("kgvtT");var f=o("bpxeT"),p=o("2TvXO"),g=(s=o("kVdBw"),f=o("bpxeT"),o("8MBJY")),v=(o("ge8co"),o("a2hTj")),k=(o("jh8P3"),o("fVNic"),o("eYQtU")),y=o("jmhxu"),_=(o("1t1Wn"),o("8nrFW")),m=(o("l5bVx"),o("4c7YB")),b=o("2MbLg"),E=(p=o("2TvXO"),o("MjY8E")),w=o("6ExWU"),L=o("kZfxc"),T=o("2xDiJ"),R=function(){"use strict";function t(n){e(g)(this,t),this.uid=n}return e(v)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();R.UNAUTHENTICATED=new R(null),R.GOOGLE_CREDENTIALS=new R("google-credentials-uid"),R.FIRST_PARTY=new R("first-party-uid"),R.MOCK_USER=new R("mock-user");
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
var S="9.19.0",A=new(0,L.Logger)("@firebase/firestore");
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
 */function I(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(A.logLevel<=L.LogLevel.DEBUG){var r,s=i.map(C);(r=A).debug.apply(r,["Firestore (".concat(S,"): ").concat(t)].concat(e(_)(s)))}}function N(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(A.logLevel<=L.LogLevel.ERROR){var r,s=i.map(C);(r=A).error.apply(r,["Firestore (".concat(S,"): ").concat(t)].concat(e(_)(s)))}}function C(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(S,") INTERNAL ASSERTION FAILED: ")+e;throw N(t),new Error(t)}function B(e,t){e||D()}
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
var x="invalid-argument",O="failed-precondition",H=function(t){"use strict";e(k)(i,t);var n=e(b)(i);function i(t,o){var r;return e(g)(this,i),(r=n.call(this,t,o)).code=t,r.message=o,r.toString=function(){return"".concat(r.name,": [code=").concat(r.code,"]: ").concat(r.message)},e(y)(r)}return i}(T.FirebaseError),U=function t(n,i){"use strict";e(g)(this,t),this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},F=function(){"use strict";function t(){e(g)(this,t)}return e(v)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(R.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),M=function(){"use strict";function t(n){var i=this;e(g)(this,t),this.auth=null,n.onInit((function(e){i.auth=e}))}return e(v)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(B("string"==typeof t.accessToken),new U(t.accessToken,new R(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),P=function(){"use strict";function t(n,i,o){e(g)(this,t),this.t=n,this.i=i,this.o=o,this.type="FirstParty",this.user=R.FIRST_PARTY,this.u=new Map}return e(v)(t,[{key:"h",value:function(){return this.o?this.o():null}},{key:"headers",get:function(){this.u.set("X-Goog-AuthUser",this.t);var e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}]),t}(),z=function(){"use strict";function t(n,i,o){e(g)(this,t),this.t=n,this.i=i,this.o=o}return e(v)(t,[{key:"getToken",value:function(){return Promise.resolve(new P(this.t,this.i,this.o))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(R.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),q=function t(n){"use strict";e(g)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},V=function(){"use strict";function t(n){var i=this;e(g)(this,t),this.l=n,this.appCheck=null,n.onInit((function(e){i.appCheck=e}))}return e(v)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(B("string"==typeof e.token),new q(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),j=function(){"use strict";function t(n,i){e(g)(this,t),this.projectId=n,this.database=i||"(default)"}return e(v)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
var Y,J;
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
(J=Y||(Y={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";function K(e,t){return e<t?-1:e>t?1:0}
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
var G=function(t){"use strict";e(k)(i,t);var n=e(b)(i);function i(){var t;return e(g)(this,i),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(y)(t)}return i}(e(m)(Error)),X=Symbol.iterator,W=function(){"use strict";function t(n){e(g)(this,t),this.binaryString=n}return e(v)(t,[{key:X,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return K(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new G("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();W.EMPTY_BYTE_STRING=new W("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var Z=function(){"use strict";function t(n,i,o,r,s){e(g)(this,t),this.key=n,this.value=i,this.color=null!=o?o:t.RED,this.left=null!=r?r:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(v)(t,[{key:"copy",value:function(e,n,i,o,r){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=o?o:this.left,null!=r?r:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var i=this,o=n(e,i.key);return(i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===o?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var i,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),0===n(e,o.key)){if(o.right.isEmpty())return t.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw D();if(this.right.isRed())throw D();var e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}]),t}();
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
 */Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1,Z.EMPTY=new(function(){"use strict";function t(){e(g)(this,t),this.size=0}return e(v)(t,[{key:"key",get:function(){throw D()}},{key:"value",get:function(){throw D()}},{key:"color",get:function(){throw D()}},{key:"left",get:function(){throw D()}},{key:"right",get:function(){throw D()}},{key:"copy",value:function(e,t,n,i,o){return this}},{key:"insert",value:function(e,t,n){return new Z(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var Q=new Map;var $=function(){"use strict";function t(n){var i;if(e(g)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new H(x,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(i=n.ssl)||void 0===i||i;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new H(x,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new H(x,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(v)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),ee=function(){"use strict";function t(n,i,o,r){e(g)(this,t),this._authCredentials=n,this._appCheckCredentials=i,this._databaseId=o,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $({}),this._settingsFrozen=!1}return e(v)(t,[{key:"app",get:function(){if(!this._app)throw new H(O,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new H(O,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new F;switch(e.type){case"firstParty":return new z(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new H(x,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Q.get(e))&&(I("ComponentProvider","Removing Datastore"),Q.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var te;
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
 */te="".concat(E.SDK_VERSION,"_lite"),S=te,(0,E._registerComponent)(new(0,w.Component)("firestore/lite",(function(e,t){var n=t.instanceIdentifier,i=t.options,o=e.getProvider("app").getImmediate(),r=new ee(new M(e.getProvider("auth-internal")),new V(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new H(x,'"projectId" not provided in firebase.initializeApp.');return new j(e.options.projectId,t)}(o,n),o);return i&&r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,E.registerVersion)("firestore-lite","3.10.0",""),(0,E.registerVersion)("firestore-lite","3.10.0","esm2017");r=o("1h2Gi"),s=o("kVdBw");function ne(e){e.currentTarget===e.target&&oe()}function ie(e){"Escape"===e.key&&oe()}function oe(){s.refs.popupBackdrop.classList.add("is-hidden"),s.refs.popupCloseBtn.removeEventListener("click",oe),s.refs.popupBackdrop.removeEventListener("click",ne),s.refs.addToLocalBtn.removeEventListener("click",_e),window.removeEventListener("keydown",ie),document.body.style.overflow=""}var re;re=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6ztcb");var se;se=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("1iaLI");var ae;ae=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("f8I3T");var ce;ce=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("3ZLqn");var le;le=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9Cr2S");var ue;ue=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("8Aq8R");var he;he=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("5VkSf");var de,fe=document.querySelector(".bookcase"),pe=[],ge=[],ve=[];function ke(){return(ke=e(f)(e(p).mark((function t(n){var i,o,a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.closest(".book-card__link")){e.next=3;break}return e.abrupt("return");case 3:return me(),i=n.target.closest(".book-card__link").dataset.id,ve=i,e.next=8,(0,r.getBookDetail)(i);case 8:o=e.sent,a=ye(o),ve={bookId:i,bookData:o},s.refs.popupCardContainer.innerHTML=a,ge.forEach((function(e){pe.push(e.bookId)})),pe.includes(ve.bookId)?(s.refs.addToLocalBtn.innerHTML="remove from the shopping list",s.refs.popupDesc.style.opacity="1"):(s.refs.addToLocalBtn.innerHTML="add to shopping list",s.refs.popupDesc.style.opacity="0"),o.buy_links,document.body.style.overflow="hidden",s.refs.popupBackdrop.classList.remove("is-hidden"),s.refs.popupCloseBtn.addEventListener("click",oe),s.refs.popupBackdrop.addEventListener("click",ne),s.refs.addToLocalBtn.addEventListener("click",_e),window.addEventListener("keydown",ie);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ye(t){var n=t.title,i=t.author,o=t.book_image_height,r=t.book_image_width,s=t.book_image,a=t.description,c=t.buy_links;s||(s=e(he),o=500,r=330),a||(a="This book has no description."),i||(i="The author of this book is unknown."),n||(n="the title of this book is unknown.");var l="",u="",h="";return c.forEach((function(e){"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(u=e.url),"Bookshop"===e.name&&(h=e.url)})),'<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src='.concat(s,"\n      alt='").concat(n,"'\n      width=").concat(r,"\n      heigth=").concat(o,'\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">').concat(n,'</h2>\n      <h3 class="card__book-author ">').concat(i,'</h3>\n      <p class="card__book-text ">\n        ').concat(a,'\n      </p>\n      <div class="book-shop__thumb">\n        <a href="').concat(l,'" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ').concat(e(re),",\n                ").concat(e(se),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(re),'"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="').concat(u,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(ae),",\n                ").concat(e(ce),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(ae),'"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="').concat(h,'" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ').concat(e(le),",\n                ").concat(e(ue),'\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="').concat(e(le),'"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>')}function _e(){ge.some((function(e){return e.bookId===ve.bookId}))?(ge=ge.filter((function(e){return e.bookId!==ve.bookId})),s.refs.addToLocalBtn.innerHTML="add to shopping list",s.refs.popupDesc.style.opacity="0",me()):(ge.push(ve),s.refs.addToLocalBtn.innerHTML="remove from the shopping list",s.refs.popupDesc.style.opacity="1",me())}function me(){localStorage.setItem("books-id",JSON.stringify(ge)),pe=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):(de=localStorage.getItem("books-id"),ge=JSON.parse(de)),fe.addEventListener("click",(function(e){return ke.apply(this,arguments)})),o("8zUhP"),o("8e9SS");s=o("kVdBw");window.addEventListener("scroll",(function(){var e=s.refs.sidebar.offsetHeight,t=s.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(s.refs.sidebar.scrollTop=0),n+window.innerHeight>=t&&(s.refs.sidebar.scrollTop=e-window.innerHeight+t-n)}))}();
//# sourceMappingURL=index.8cbc8232.js.map
