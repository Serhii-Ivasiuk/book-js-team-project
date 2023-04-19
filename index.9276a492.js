function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.9276a492.js","jcnh0":"shoping-list-bg@1x.2c75914c.png","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","amO9v":"empty_pic.dcf0d48a.jpg","2Hrug":"shopping-list.d91cd7a0.js"}')),s("7me8F");var o=s("7me8F"),r=s("in2tx");r=s("in2tx");function a(){!r.refs.spinner.classList.contains("done")&&r.refs.spinner.classList.add("done"),document.body.style.overflow=""}var l;function c(){const t=document.createElement("img");t.src=e(l),t.classList.add("not-found");const n=document.createElement("div");n.classList.add("warning-message");return n.innerHTML="<p> There are no data to display, please select another category.</p>",n.appendChild(t),n}function h(){const e=document.createElement("ul");e.classList.add("bookshelf__list"),r.refs.spinner.classList.contains("done")&&r.refs.spinner.classList.remove("done"),document.body.style.overflow="hidden",(0,o.getTopBooks)().then((t=>{if(!Boolean(t.length))return r.refs.mainSectionCategories.innerHTML="",r.refs.mainSectionCategories.appendChild(c());const n=t.map((({list_name:e,books:t})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${e}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${t.map((({_id:e,book_image_height:t,book_image_width:n,author:i,book_image:s,title:o})=>`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${e}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${s}' alt="Here must be book's name"\n                      width='${n}'\n                      height='${t}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${o||"N/A"}</h3>\n                    <p class='book-card__author'>${i||"N/A"}</p>\n                  </div>\n                </li>`)).join("")}\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${e}'>see more</button>\n         </li>\n      `)).join("");e.innerHTML=n,r.refs.mainSectionCategories.innerHTML="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>",r.refs.mainSectionCategories.appendChild(e)})).catch((e=>{console.log(e.message)})).finally(a)}l=new URL(s("kyEFX").resolve("jcnh0"),import.meta.url).toString(),s("in2tx"),h(),r.refs.logo.addEventListener("click",(()=>{h()}));r=s("in2tx"),o=s("7me8F");function d(e){let t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];let n=e.split(" ");return n.pop(),`${n.join(" ")} <span class="bookcase__filter">${t}</span>`}r=s("in2tx");function u(e){e.preventDefault();const t=e.target.dataset.categoryName;if(!t)return;document.querySelector(".categories__active").classList.remove("categories__active");document.querySelector(`[data-category-name="${t}"]`).classList.add("categories__active"),function(e,t="start"){e.scrollIntoView({behavior:"smooth",position:t})}(r.refs.sectionCategory);let n=document.createElement("h1");const i=document.createElement("ul");n.classList.add("bookcase__cda"),n.innerHTML=d(t),i.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,o.getBooksByCategory)(t).then((e=>{if(!Boolean(e.length))return r.refs.mainSectionCategories.innerHTML="",r.refs.mainSectionCategories.appendChild(c());const t=e.map((({book_image:e,book_image_height:t,book_image_width:n,author:i,title:s,buy_links:o,_id:r})=>`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${r}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${e}'\n        alt="Here must be book's name"\n        width='${n}'\n        height = '${t}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${s||"N/A"}</h3>\n    <p class='book-card__author'>${i||"N/A"}</p>\n  </div>\n</li>`)).join("");i.innerHTML=t,r.refs.sectionCategory.innerHTML="",r.refs.sectionCategory.appendChild(n),r.refs.sectionCategory.appendChild(i)})).catch((e=>console.log(e.message))):h()}(0,o.getCategoryList)().then((e=>{const t=e.map((e=>`\n        <li class = 'categories__item'>\n          <button type="button" data-category-name='${e}' class='categories__name'>${e}</button>\n        </li>`)).join("");r.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",r.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e.message))),r.refs.categoriesList.addEventListener("click",u),r.refs.mainSectionCategories.addEventListener("click",u),s("eHzQI"),s("dTazW"),s("8QtOa"),s("fn969"),s("4GINZ");r=s("in2tx");var p=s("ix4Jr"),g=s("4a6xH"),f=s("7vF8m"),m=s("ffjl9");
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
class _{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
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
let k="9.19.0";
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
 */const v=new(0,f.Logger)("@firebase/firestore");function y(e,...t){if(v.logLevel<=f.LogLevel.DEBUG){const n=t.map(E);v.debug(`Firestore (${k}): ${e}`,...n)}}function b(e,...t){if(v.logLevel<=f.LogLevel.ERROR){const n=t.map(E);v.error(`Firestore (${k}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function w(e="Unexpected state"){const t=`FIRESTORE (${k}) INTERNAL ASSERTION FAILED: `+e;throw b(t),new Error(t)}function L(e,t){e||w()}class T extends m.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_.UNAUTHENTICATED)))}shutdown(){}}class A{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(L("string"==typeof e.accessToken),new S(e.accessToken,new _(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class I{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class D{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new I(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(_.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e){this.l=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(L("string"==typeof e.token),new N(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class C{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new C("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof C&&e.projectId===this.projectId&&e.database===this.database}}
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
var x,U;
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
(U=x||(x={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";function H(e,t){return e<t?-1:e>t?1:0}
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
class O extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new O("Invalid base64 string: "+e):e}}(e);return new $(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);class P{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:P.RED,this.left=null!=i?i:P.EMPTY,this.right=null!=s?s:P.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new P(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return P.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return P.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}P.EMPTY=null,P.RED=!0,P.BLACK=!1,P.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,i,s){return this}insert(e,t,n){return new P(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
const B=new Map;class M{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new T("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class z{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new M({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new M(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new R;switch(e.type){case"firstParty":return new D(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=B.get(e);t&&(y("ComponentProvider","Removing Datastore"),B.delete(e),t.terminate())}(this),Promise.resolve()}}new RegExp("[~\\*/\\[\\]]");var j;j=`${p.SDK_VERSION}_lite`,k=j,(0,p._registerComponent)(new(0,g.Component)("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const i=e.getProvider("app").getImmediate(),s=new z(new A(e.getProvider("auth-internal")),new F(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new C(e.options.projectId,t)}(i,t),i);return n&&s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),(0,p.registerVersion)("firestore-lite","3.10.0",""),(0,p.registerVersion)("firestore-lite","3.10.0","esm2017");o=s("7me8F"),r=s("in2tx");function X(e){e.currentTarget===e.target&&q()}function K(e){"Escape"===e.key&&q()}function q(){r.refs.popupBackdrop.classList.add("is-hidden"),r.refs.popupCloseBtn.removeEventListener("click",q),r.refs.popupBackdrop.removeEventListener("click",X),r.refs.addToLocalBtn.removeEventListener("click",se),window.removeEventListener("keydown",K),document.body.style.overflow=""}var Y;Y=new URL(s("kyEFX").resolve("3OouQ"),import.meta.url).toString();var G;G=new URL(s("kyEFX").resolve("ctt8U"),import.meta.url).toString();var V;V=new URL(s("kyEFX").resolve("1XqBp"),import.meta.url).toString();var J;J=new URL(s("kyEFX").resolve("gK52N"),import.meta.url).toString();var Q;Q=new URL(s("kyEFX").resolve("lT7aj"),import.meta.url).toString();var W;W=new URL(s("kyEFX").resolve("ifLYX"),import.meta.url).toString();var Z;Z=new URL(s("kyEFX").resolve("amO9v"),import.meta.url).toString();const ee=document.querySelector(".bookcase");let te=[],ne=[],ie=[];function se(){ne.some((e=>e.bookId===ie.bookId))?(ne=ne.filter((e=>e.bookId!==ie.bookId)),r.refs.addToLocalBtn.innerHTML="add to shopping list",r.refs.popupDesc.style.opacity="0",oe()):(ne.push(ie),r.refs.addToLocalBtn.innerHTML="remove from the shopping list",r.refs.popupDesc.style.opacity="1",oe())}function oe(){localStorage.setItem("books-id",JSON.stringify(ne)),te=[]}null===localStorage.getItem("books-id")?localStorage.setItem("books-id",JSON.stringify([])):function(){const e=localStorage.getItem("books-id");ne=JSON.parse(e)}(),ee.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.closest(".book-card__link"))return;oe();const n=t.target.closest(".book-card__link").dataset.id;ie=n;const i=await(0,o.getBookDetail)(n),s=function({title:t,author:n,book_image_height:i,book_image_width:s,book_image:o,description:r,buy_links:a}){o||(o=e(Z),i=500,s=330);r||(r="This book has no description.");n||(n="The author of this book is unknown.");t||(t="the title of this book is unknown.");let l="",c="",h="";return a.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(c=e.url),"Bookshop"===e.name&&(h=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${o}\n      alt='${t}'\n      width=${s}\n      heigth=${i}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${t}</h2>\n      <h3 class="card__book-author ">${n}</h3>\n      <p class="card__book-text ">\n        ${r}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${l}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(Y)},\n                ${e(G)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(Y)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${c}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(V)},\n                ${e(J)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(V)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${h}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(Q)},\n                ${e(W)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(Q)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(i);ie={bookId:n,bookData:i},r.refs.popupCardContainer.innerHTML=s,ne.forEach((e=>{te.push(e.bookId)})),te.includes(ie.bookId)?(r.refs.addToLocalBtn.innerHTML="remove from the shopping list",r.refs.popupDesc.style.opacity="1"):(r.refs.addToLocalBtn.innerHTML="add to shopping list",r.refs.popupDesc.style.opacity="0");i.buy_links;document.body.style.overflow="hidden",r.refs.popupBackdrop.classList.remove("is-hidden"),r.refs.popupCloseBtn.addEventListener("click",q),r.refs.popupBackdrop.addEventListener("click",X),r.refs.addToLocalBtn.addEventListener("click",se),window.addEventListener("keydown",K)})),s("56a1K"),s("iuRNH");r=s("in2tx");window.addEventListener("scroll",(function(){const e=r.refs.sidebar.offsetHeight,t=r.refs.content.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;0===n&&(r.refs.sidebar.scrollTop=0),n+window.innerHeight>=t&&(r.refs.sidebar.scrollTop=e-window.innerHeight+t-n)}));
//# sourceMappingURL=index.9276a492.js.map
