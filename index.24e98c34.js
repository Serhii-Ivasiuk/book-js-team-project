function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.24e98c34.js","jcnh0":"shoping-list-bg@1x.2c75914c.png","amO9v":"empty_pic.dcf0d48a.jpg","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","2Hrug":"shopping-list.42a049b1.js"}')),r("7me8F");var s=r("7me8F"),o=r("in2tx"),a=r("7Y9D8");o=r("in2tx");function l(){!o.refs.spinner.classList.contains("done")&&o.refs.spinner.classList.add("done"),o.refs.spinner.replaceChildren(),document.body.style.overflow=""}var c;function h(){const t=document.createElement("img");t.src=e(c),t.classList.add("not-found");const n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}c=new URL(r("kyEFX").resolve("jcnh0"),import.meta.url).toString(),r("in2tx");var d;function u(){const t=document.createElement("ul");t.classList.add("bookshelf__list"),o.refs.spinner.classList.contains("done")&&o.refs.spinner.classList.remove("done"),o.refs.spinner.insertAdjacentHTML("afterbegin",'\n  <div class="book">\n    <div class="inner">\n      <div class="left"></div>\n      <div class="middle"></div>\n      <div class="right"></div>\n    </div>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>'),document.body.style.overflow="hidden",(0,s.getTopBooks)().then((n=>{if(!Boolean(n.length))return o.refs.mainSectionCategories.innerHTML="",o.refs.mainSectionCategories.appendChild(h());const i=n.map((({list_name:t,books:n})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${t}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${n.map((({_id:t,book_image_height:n,book_image_width:i,author:r,book_image:s,title:o})=>(s||(s=e(d),n=500,i=330),`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${t}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${s}' alt="Here must be book's name"\n                      width='${i}'\n                      height='${n}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${o||"Unknown title"}</h3>\n                    <p class='book-card__author'>${r||"Unknown author"}</p>\n                  </div>\n                </li>`))).join("")}\n\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${t}'>see more</button>\n         </li>\n      `)).join("");t.innerHTML=i,o.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",o.refs.mainSectionCategories.appendChild(t)})).catch((t=>{e(a).Notify.failure("Network error, please try again later")})).finally(l)}d=new URL(r("kyEFX").resolve("amO9v"),import.meta.url).toString(),u(),o.refs.logo.addEventListener("click",(()=>{u()}));o=r("in2tx"),s=r("7me8F");function p(e){let t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];let n=e.split(" ");return n.pop(),`${n.join(" ")} <span class="bookcase__filter">${t}</span>`}o=r("in2tx"),a=r("7Y9D8");function g(t){t.preventDefault();const n=t.target.dataset.categoryName;if(!n)return;document.querySelector(".categories__active").classList.remove("categories__active");document.querySelector(`[data-category-name="${n}"]`).classList.add("categories__active"),function(e,t="start"){e.scrollIntoView({behavior:"smooth",position:t})}(o.refs.sectionCategory);let i=document.createElement("h1");const r=document.createElement("ul");i.classList.add("bookcase__cda"),i.innerHTML=p(n),r.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,s.getBooksByCategory)(n).then((t=>{if(!Boolean(t.length))return o.refs.mainSectionCategories.innerHTML="",o.refs.mainSectionCategories.appendChild(h());const n=t.map((({book_image:t,book_image_height:n,book_image_width:i,author:r,title:s,buy_links:o,_id:a})=>(t||(t=e(d),n=500,i=330),`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${a}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${t}'\n        alt="Here must be book's name"\n        width='${i}'\n        height = '${n}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${s||"Unknown title"}</h3>\n    <p class='book-card__author'>${r||"Unknown author"}</p>\n  </div>\n</li>`))).join("");r.innerHTML=n,o.refs.sectionCategory.innerHTML="",o.refs.sectionCategory.appendChild(i),o.refs.sectionCategory.appendChild(r)})).catch((t=>e(a).Notify.failure("Network error, please try again later"))):u()}(0,s.getCategoryList)().then((e=>{const t=e.map((e=>`\n        <li class = 'categories__item'>\n          <button type="button" data-category-name='${e}' class='categories__name'>${e}</button>\n        </li>`)).sort(((e,t)=>e.localeCompare(t))).join("");o.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",o.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((t=>e(a).Notify.failure("Network error, please try again later"))),o.refs.categoriesList.addEventListener("click",g),o.refs.mainSectionCategories.addEventListener("click",g),r("eHzQI"),r("dTazW"),r("8QtOa"),r("fn969"),r("4GINZ");o=r("in2tx"),a=r("7Y9D8");var f=r("ix4Jr"),m=r("4a6xH"),_=r("7vF8m"),k=r("ffjl9");
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
class y{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}y.UNAUTHENTICATED=new y(null),y.GOOGLE_CREDENTIALS=new y("google-credentials-uid"),y.FIRST_PARTY=new y("first-party-uid"),y.MOCK_USER=new y("mock-user");
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
let v="9.19.0";
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
 */const b=new(0,_.Logger)("@firebase/firestore");function E(e,...t){if(b.logLevel<=_.LogLevel.DEBUG){const n=t.map(w);b.debug(`Firestore (${v}): ${e}`,...n)}}function L(e,...t){if(b.logLevel<=_.LogLevel.ERROR){const n=t.map(w);b.error(`Firestore (${v}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${v}) INTERNAL ASSERTION FAILED: `+e;throw L(t),new Error(t)}function S(e,t){e||T()}class R extends k.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(y.UNAUTHENTICATED)))}shutdown(){}}class D{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(S("string"==typeof e.accessToken),new A(e.accessToken,new y(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class N{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=y.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class F{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new N(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(y.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.l=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(S("string"==typeof e.token),new C(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class x{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new x("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof x&&e.projectId===this.projectId&&e.database===this.database}}
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
var B,O;
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
(O=B||(B={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";function $(e,t){return e<t?-1:e>t?1:0}
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
class H extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class M{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new H("Invalid base64 string: "+e):e}}(e);return new M(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new M(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}M.EMPTY_BYTE_STRING=new M("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);class P{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:P.RED,this.left=null!=i?i:P.EMPTY,this.right=null!=r?r:P.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new P(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return P.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return P.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw T();if(this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}P.EMPTY=null,P.RED=!0,P.BLACK=!1,P.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,i,r){return this}insert(e,t,n){return new P(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
const z=new Map;class j{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new R("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new R("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new R("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class X{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new R("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new I;switch(e.type){case"firstParty":return new F(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new R("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=z.get(e);t&&(E("ComponentProvider","Removing Datastore"),z.delete(e),t.terminate())}(this),Promise.resolve()}}new RegExp("[~\\*/\\[\\]]");var Y;Y=`${f.SDK_VERSION}_lite`,v=Y,(0,f._registerComponent)(new(0,m.Component)("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const i=e.getProvider("app").getImmediate(),r=new X(new D(e.getProvider("auth-internal")),new U(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new R("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new x(e.options.projectId,t)}(i,t),i);return n&&r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),(0,f.registerVersion)("firestore-lite","3.10.0",""),(0,f.registerVersion)("firestore-lite","3.10.0","esm2017");s=r("7me8F"),a=r("7Y9D8"),o=r("in2tx");function K(e){e.currentTarget===e.target&&G()}function q(e){"Escape"===e.key&&G()}function G(){o.refs.popupBackdrop.classList.add("is-hidden"),o.refs.popupCloseBtn.removeEventListener("click",G),o.refs.popupBackdrop.removeEventListener("click",K),o.refs.addToLocalBtn.removeEventListener("click",se),window.removeEventListener("keydown",q),document.body.style.overflow=""}var V;V=new URL(r("kyEFX").resolve("3OouQ"),import.meta.url).toString();var J;J=new URL(r("kyEFX").resolve("ctt8U"),import.meta.url).toString();var Q;Q=new URL(r("kyEFX").resolve("1XqBp"),import.meta.url).toString();var W;W=new URL(r("kyEFX").resolve("gK52N"),import.meta.url).toString();var Z;Z=new URL(r("kyEFX").resolve("lT7aj"),import.meta.url).toString();var ee;ee=new URL(r("kyEFX").resolve("ifLYX"),import.meta.url).toString();const te=document.querySelector(".bookcase");let ne=[],ie=[],re=[];function se(){const t=ie.some((e=>e.bookId===re.bookId));if(null===localStorage.getItem("user"))return function(){if(null===localStorage.getItem("user"))return o.refs.addToLocalBtn.setAttribute("disabled","true"),o.refs.addToLocalBtn.style.backgroundColor="#b4afaf",o.refs.addToLocalBtn.style.color="#ffffff",setTimeout((()=>{o.refs.addToLocalBtn.removeAttribute("disabled"),o.refs.addToLocalBtn.style="none"}),2e3),e(a).Notify.failure("Please register or sign in to your account to use this feature.",{timeout:2e3})}();t?(ie=ie.filter((e=>e.bookId!==re.bookId)),o.refs.addToLocalBtn.innerHTML="add to shopping list",o.refs.popupDesc.style.opacity="0",oe()):(ie.push(re),o.refs.addToLocalBtn.innerHTML="remove from the shopping list",o.refs.popupDesc.style.opacity="1",oe())}function oe(){localStorage.setItem("books-id",JSON.stringify(ie)),ne=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):function(){const e=localStorage.getItem("books-id");ie=JSON.parse(e)}(),te.addEventListener("click",(async function(t){try{if(t.preventDefault(),!t.target.closest(".book-card__link"))return;oe();const n=t.target.closest(".book-card__link").dataset.id;re=n;const i=await(0,s.getBookDetail)(n),r=function({title:t,author:n,book_image_height:i,book_image_width:r,book_image:s,description:o,buy_links:a}){s||(s=e(d),i=500,r=330);o||(o="This book has no description yet. We will add it soon.");n||(n="Unknown author");t||(t="Unknown title");let l="",c="",h="";return a.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(c=e.url),"Bookshop"===e.name&&(h=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${s}\n      alt='${t}'\n      width=${r}\n      heigth=${i}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${t}</h2>\n      <h3 class="card__book-author ">${n}</h3>\n      <p class="card__book-text ">\n        ${o}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${l}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(V)},\n                ${e(J)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(V)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${c}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(Q)},\n                ${e(W)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(Q)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${h}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(Z)},\n                ${e(ee)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(Z)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(i);re={bookId:n,bookData:i},o.refs.popupCardContainer.innerHTML=r,ie.forEach((e=>{ne.push(e.bookId)})),ne.includes(re.bookId)?(o.refs.addToLocalBtn.innerHTML="remove from the shopping list",o.refs.popupDesc.style.opacity="1"):(o.refs.addToLocalBtn.innerHTML="add to shopping list",o.refs.popupDesc.style.opacity="0"),null===localStorage.getItem("user")&&(o.refs.addToLocalBtn.innerHTML="add to shopping list",o.refs.popupDesc.style.opacity="0");i.buy_links;document.body.style.overflow="hidden",o.refs.popupBackdrop.classList.remove("is-hidden"),o.refs.popupCloseBtn.addEventListener("click",G),o.refs.popupBackdrop.addEventListener("click",K),o.refs.addToLocalBtn.addEventListener("click",se),window.addEventListener("keydown",q)}catch(t){e(a).Notify.failure("Network error, please try again later")}})),r("56a1K"),r("iuRNH");
//# sourceMappingURL=index.24e98c34.js.map
