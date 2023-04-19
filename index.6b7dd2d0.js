function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.6b7dd2d0.js","jcnh0":"shoping-list-bg@1x.2c75914c.png","amO9v":"empty_pic.dcf0d48a.jpg","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","2Hrug":"shopping-list.413b09de.js"}')),s("7me8F");var o=s("7me8F"),r=s("in2tx");r=s("in2tx");function a(){!r.refs.spinner.classList.contains("done")&&r.refs.spinner.classList.add("done"),document.body.style.overflow=""}var l;function c(){const t=document.createElement("img");t.src=e(l),t.classList.add("not-found");const n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}l=new URL(s("kyEFX").resolve("jcnh0"),import.meta.url).toString(),s("in2tx");var h;function d(){const t=document.createElement("ul");t.classList.add("bookshelf__list"),r.refs.spinner.classList.contains("done")&&r.refs.spinner.classList.remove("done"),document.body.style.overflow="hidden",(0,o.getTopBooks)().then((n=>{if(!Boolean(n.length))return r.refs.mainSectionCategories.innerHTML="",r.refs.mainSectionCategories.appendChild(c());const i=n.map((({list_name:t,books:n})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${t}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${n.map((({_id:t,book_image_height:n,book_image_width:i,author:s,book_image:o,title:r})=>(o||(o=e(h),n=500,i=330),`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${t}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${o}' alt="Here must be book's name"\n                      width='${i}'\n                      height='${n}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${r||"Unknown title"}</h3>\n                    <p class='book-card__author'>${s||"Unknown author"}</p>\n                  </div>\n                </li>`))).join("")}\n                \n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${t}'>see more</button>\n         </li>\n      `)).join("");t.innerHTML=i,r.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",r.refs.mainSectionCategories.appendChild(t)})).catch((e=>{console.log(e.message)})).finally(a)}h=new URL(s("kyEFX").resolve("amO9v"),import.meta.url).toString(),d(),r.refs.logo.addEventListener("click",(()=>{d()}));r=s("in2tx"),o=s("7me8F");function u(e){let t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];let n=e.split(" ");return n.pop(),`${n.join(" ")} <span class="bookcase__filter">${t}</span>`}r=s("in2tx");function p(t){t.preventDefault();const n=t.target.dataset.categoryName;if(!n)return;document.querySelector(".categories__active").classList.remove("categories__active");document.querySelector(`[data-category-name="${n}"]`).classList.add("categories__active"),function(e,t="start"){e.scrollIntoView({behavior:"smooth",position:t})}(r.refs.sectionCategory);let i=document.createElement("h1");const s=document.createElement("ul");i.classList.add("bookcase__cda"),i.innerHTML=u(n),s.classList.add("bookshelf__content","book-card__list"),"All categories"!==n?(0,o.getBooksByCategory)(n).then((t=>{if(!Boolean(t.length))return r.refs.mainSectionCategories.innerHTML="",r.refs.mainSectionCategories.appendChild(c());const n=t.map((({book_image:t,book_image_height:n,book_image_width:i,author:s,title:o,buy_links:r,_id:a})=>(t||(t=e(h),n=500,i=330),`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${a}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${t}'\n        alt="Here must be book's name"\n        width='${i}'\n        height = '${n}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${o||"Unknown title"}</h3>\n    <p class='book-card__author'>${s||"Unknown author"}</p>\n  </div>\n</li>`))).join("");s.innerHTML=n,r.refs.sectionCategory.innerHTML="",r.refs.sectionCategory.appendChild(i),r.refs.sectionCategory.appendChild(s)})).catch((e=>console.log(e.message))):d()}(0,o.getCategoryList)().then((e=>{const t=e.map((e=>`\n        <li class = 'categories__item'>\n          <button type="button" data-category-name='${e}' class='categories__name'>${e}</button>\n        </li>`)).join("");r.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",r.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e.message))),r.refs.categoriesList.addEventListener("click",p),r.refs.mainSectionCategories.addEventListener("click",p),s("eHzQI"),s("dTazW"),s("8QtOa"),s("fn969"),s("4GINZ");r=s("in2tx");var g=s("ix4Jr"),f=s("4a6xH"),m=s("7vF8m"),_=s("ffjl9");
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
class k{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");
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
 */const y=new(0,m.Logger)("@firebase/firestore");function b(e,...t){if(y.logLevel<=m.LogLevel.DEBUG){const n=t.map(w);y.debug(`Firestore (${v}): ${e}`,...n)}}function E(e,...t){if(y.logLevel<=m.LogLevel.ERROR){const n=t.map(w);y.error(`Firestore (${v}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function L(e="Unexpected state"){const t=`FIRESTORE (${v}) INTERNAL ASSERTION FAILED: `+e;throw E(t),new Error(t)}function T(e,t){e||L()}class S extends _.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class R{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(k.UNAUTHENTICATED)))}shutdown(){}}class I{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(T("string"==typeof e.accessToken),new R(e.accessToken,new k(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class D{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=k.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class F{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new D(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(k.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C{constructor(e){this.l=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(T("string"==typeof e.token),new N(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
var U,H;
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
(H=U||(U={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";function O(e,t){return e<t?-1:e>t?1:0}
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
class $ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class P{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new $("Invalid base64 string: "+e):e}}(e);return new P(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new P(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}P.EMPTY_BYTE_STRING=new P("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);class B{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:B.RED,this.left=null!=i?i:B.EMPTY,this.right=null!=s?s:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new B(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return B.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L();if(this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1,B.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,n,i,s){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
const M=new Map;class z{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new S("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class j{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"firstParty":return new F(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=M.get(e);t&&(b("ComponentProvider","Removing Datastore"),M.delete(e),t.terminate())}(this),Promise.resolve()}}new RegExp("[~\\*/\\[\\]]");var X;X=`${g.SDK_VERSION}_lite`,v=X,(0,g._registerComponent)(new(0,f.Component)("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const i=e.getProvider("app").getImmediate(),s=new j(new I(e.getProvider("auth-internal")),new C(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new x(e.options.projectId,t)}(i,t),i);return n&&s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),(0,g.registerVersion)("firestore-lite","3.10.0",""),(0,g.registerVersion)("firestore-lite","3.10.0","esm2017");o=s("7me8F"),r=s("in2tx");function K(e){e.currentTarget===e.target&&Y()}function q(e){"Escape"===e.key&&Y()}function Y(){r.refs.popupBackdrop.classList.add("is-hidden"),r.refs.popupCloseBtn.removeEventListener("click",Y),r.refs.popupBackdrop.removeEventListener("click",K),r.refs.addToLocalBtn.removeEventListener("click",se),window.removeEventListener("keydown",q),document.body.style.overflow=""}var G;G=new URL(s("kyEFX").resolve("3OouQ"),import.meta.url).toString();var V;V=new URL(s("kyEFX").resolve("ctt8U"),import.meta.url).toString();var J;J=new URL(s("kyEFX").resolve("1XqBp"),import.meta.url).toString();var Q;Q=new URL(s("kyEFX").resolve("gK52N"),import.meta.url).toString();var W;W=new URL(s("kyEFX").resolve("lT7aj"),import.meta.url).toString();var Z;Z=new URL(s("kyEFX").resolve("ifLYX"),import.meta.url).toString();const ee=document.querySelector(".bookcase");let te=[],ne=[],ie=[];function se(){ne.some((e=>e.bookId===ie.bookId))?(ne=ne.filter((e=>e.bookId!==ie.bookId)),r.refs.addToLocalBtn.innerHTML="add to shopping list",r.refs.popupDesc.style.opacity="0",oe()):(ne.push(ie),r.refs.addToLocalBtn.innerHTML="remove from the shopping list",r.refs.popupDesc.style.opacity="1",oe())}function oe(){localStorage.setItem("books-id",JSON.stringify(ne)),te=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):function(){const e=localStorage.getItem("books-id");ne=JSON.parse(e)}(),ee.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.closest(".book-card__link"))return;oe();const n=t.target.closest(".book-card__link").dataset.id;ie=n;const i=await(0,o.getBookDetail)(n),s=function({title:t,author:n,book_image_height:i,book_image_width:s,book_image:o,description:r,buy_links:a}){o||(o=e(h),i=500,s=330);r||(r="This book has no description yet. We will add it soon.");n||(n="Unknown author");t||(t="Unknown title");let l="",c="",d="";return a.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(c=e.url),"Bookshop"===e.name&&(d=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${o}\n      alt='${t}'\n      width=${s}\n      heigth=${i}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${t}</h2>\n      <h3 class="card__book-author ">${n}</h3>\n      <p class="card__book-text ">\n        ${r}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${l}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(G)},\n                ${e(V)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(G)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${c}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(J)},\n                ${e(Q)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(J)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${d}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(W)},\n                ${e(Z)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(W)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(i);ie={bookId:n,bookData:i},r.refs.popupCardContainer.innerHTML=s,ne.forEach((e=>{te.push(e.bookId)})),te.includes(ie.bookId)?(r.refs.addToLocalBtn.innerHTML="remove from the shopping list",r.refs.popupDesc.style.opacity="1"):(r.refs.addToLocalBtn.innerHTML="add to shopping list",r.refs.popupDesc.style.opacity="0");i.buy_links;document.body.style.overflow="hidden",r.refs.popupBackdrop.classList.remove("is-hidden"),r.refs.popupCloseBtn.addEventListener("click",Y),r.refs.popupBackdrop.addEventListener("click",K),r.refs.addToLocalBtn.addEventListener("click",se),window.addEventListener("keydown",q)})),s("56a1K"),s("iuRNH");r=s("in2tx");window.addEventListener("scroll",(function(){const e=r.refs.sidebar.offsetHeight,t=r.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(r.refs.sidebar.scrollTop=0),n+window.innerHeight>=t&&(r.refs.sidebar.scrollTop=e-window.innerHeight+t-n)}));
//# sourceMappingURL=index.6b7dd2d0.js.map
