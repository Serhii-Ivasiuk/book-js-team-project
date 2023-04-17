function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.296342b7.js","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","2Hrug":"shopping-list.667dcbf2.js"}')),s("7me8F");var r=s("7me8F"),o=s("in2tx");function a(){let e="<h1 class='bookcase__cda'>\n          Best Sellers <span class='bookcase__filter'>Books</span>\n        </h1>";const t=document.createElement("ul");t.classList.add("bookshelf__list"),(0,r.getTopBooks)().then((n=>{if(!Boolean(n.length))return e="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n          There are no data to display, please select another category\n        </h1>",o.refs.mainSectionCategories.innerHTML=e;const i=n.map((({list_name:e,books:t})=>`\n          <li class='bookshelf__item'>\n            <h2 class='bookshelf__title'>${e}</h2>\n            <ul class='bookshelf__content book-card__list'>\n              ${t.map((({_id:e,book_image_height:t,book_image_width:n,author:i,book_image:s,title:r})=>`<li class='book-card__item'>\n                  <a class='book-card__link' href='#' data-id='${e}'>\n                    <div class='book-card__wrapper'>\n                      <img class='book-card__image' src='${s}' alt="Here must be book's name"\n                      width='${n}'\n                      height='${t}'>\n                      <div class='book-card__overlay'>\n                        <p class='book-card__quick-view-text'>quick view</p>\n                      </div>\n                    </div>\n                  </a>\n                  <div class='book-card__wrap'>\n                    <h3 class='book-card__name'>${r}</h3>\n                    <p class='book-card__author'>${i}</p>\n                  </div>\n                </li>`)).join("")}\n        </ul>\n            <button class='bookshelf__btn' type='button' data-see-more data-category-name='${e}'>see more</button>\n         </li>\n      `)).join("");t.innerHTML=i,o.refs.mainSectionCategories.innerHTML=e,o.refs.mainSectionCategories.appendChild(t)})).catch((e=>{console.log(e.message)}))}a();o=s("in2tx"),r=s("7me8F");function l(e){let t=e.split(" ");if(1===t.length)return t;t=t[t.length-1];let n=e.split(" ");return n.pop(),`${n.join(" ")} <span class="bookcase__filter">${t}</span>`}o=s("in2tx");function c(e){e.preventDefault();const t=e.target.dataset.categoryName;if(!t)return;document.querySelector(".categories__active").classList.remove("categories__active");document.querySelector(`[data-category-name="${t}"]`).classList.add("categories__active"),o.refs.sectionCategory.scrollIntoView({behavior:"smooth",block:"start"});let n=document.createElement("h1");const i=document.createElement("ul");n.classList.add("bookcase__cda"),n.innerHTML=l(t),i.classList.add("bookshelf__content","book-card__list"),"All categories"!==t?(0,r.getBooksByCategory)(t).then((e=>{if(!Boolean(e.length))return n="<h1 class='bookcase__cda' style='text-align: center; margin-top: 50px'>\n            There are no data to display, please select another category\n          </h1>",o.refs.mainSectionCategories.innerHTML=n;const t=e.map((({book_image:e,book_image_height:t,book_image_width:n,author:i,title:s,buy_links:r,_id:o})=>`<li class='book-card__item'>\n  <a class='book-card__link' href='#' data-id='${o}'>\n    <div class='book-card__wrapper'>\n      <img\n        class='book-card__image'\n        src='${e}'\n        alt="Here must be book's name"\n        width='${n}'\n        height = '${t}'\n      />\n      <div class='book-card__overlay'>\n        <p class='book-card__quick-view-text'>quick view</p>\n      </div>\n    </div>\n  </a>\n  <div class='book-card__wrap'>\n    <h3 class='book-card__name'>${s}</h3>\n    <p class='book-card__author'>${i}</p>\n  </div>\n</li>`)).join("");i.innerHTML=t,o.refs.sectionCategory.innerHTML="",o.refs.sectionCategory.appendChild(n),o.refs.sectionCategory.appendChild(i)})).catch((e=>console.log(e.message))):a()}(0,r.getCategoryList)().then((e=>{const t=e.map((e=>`\n        <li class = 'categories__item'>\n          <button type="button" data-category-name='${e}' class='categories__name'>${e}</button>\n        </li>`)).join("");o.refs.categoriesList.innerHTML="\n       <li class='categories__item categories__item--fixed'>\n          <button type=\"button\" class='categories__name categories__active' data-category-name='All categories'>All categories</button>\n       </li>",o.refs.categoriesList.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e.message))),o.refs.categoriesList.addEventListener("click",c),o.refs.mainSectionCategories.addEventListener("click",c),s("eHzQI"),s("jUhQ3"),s("8QtOa"),s("fn969"),s("4GINZ");o=s("in2tx");var h=s("ix4Jr"),u=s("4a6xH"),d=s("7vF8m"),p=s("ffjl9");
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
class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");
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
let _="9.19.0";
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
 */const f=new(0,d.Logger)("@firebase/firestore");function m(e,...t){if(f.logLevel<=d.LogLevel.DEBUG){const n=t.map(v);f.debug(`Firestore (${_}): ${e}`,...n)}}function k(e,...t){if(f.logLevel<=d.LogLevel.ERROR){const n=t.map(v);f.error(`Firestore (${_}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function y(e="Unexpected state"){const t=`FIRESTORE (${_}) INTERNAL ASSERTION FAILED: `+e;throw k(t),new Error(t)}function E(e,t){e||y()}class b extends p.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(g.UNAUTHENTICATED)))}shutdown(){}}class R{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(E("string"==typeof e.accessToken),new w(e.accessToken,new g(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class L{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class A{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new L(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(g.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class S{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.l=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(E("string"==typeof e.token),new S(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class D{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new D("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof D&&e.projectId===this.projectId&&e.database===this.database}}
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
var I,F;
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
(F=I||(I={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";function x(e,t){return e<t?-1:e>t?1:0}
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
class C extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class U{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new C("Invalid base64 string: "+e):e}}(e);return new U(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new U(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}U.EMPTY_BYTE_STRING=new U("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);class ${constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:$.RED,this.left=null!=i?i:$.EMPTY,this.right=null!=s?s:$.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new $(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return $.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1,$.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,s){return this}insert(e,t,n){return new $(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
const P=new Map;class O{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new b("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new b("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class M{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new T;switch(e.type){case"firstParty":return new A(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=P.get(e);t&&(m("ComponentProvider","Removing Datastore"),P.delete(e),t.terminate())}(this),Promise.resolve()}}new RegExp("[~\\*/\\[\\]]");var B;B=`${h.SDK_VERSION}_lite`,_=B,(0,h._registerComponent)(new(0,u.Component)("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const i=e.getProvider("app").getImmediate(),s=new M(new R(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new D(e.options.projectId,t)}(i,t),i);return n&&s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),(0,h.registerVersion)("firestore-lite","3.10.0",""),(0,h.registerVersion)("firestore-lite","3.10.0","esm2017");r=s("7me8F"),o=s("in2tx");function H(e){e.currentTarget===e.target&&j()}function z(e){"Escape"===e.key&&j()}function j(){o.refs.popupBackdrop.classList.add("is-hidden"),o.refs.popupCloseBtn.removeEventListener("click",j),o.refs.popupBackdrop.removeEventListener("click",H),window.removeEventListener("keydown",z),document.body.style.overflow=""}var X;X=new URL(s("kyEFX").resolve("3OouQ"),import.meta.url).toString();var K;K=new URL(s("kyEFX").resolve("ctt8U"),import.meta.url).toString();var q;q=new URL(s("kyEFX").resolve("1XqBp"),import.meta.url).toString();var Y;Y=new URL(s("kyEFX").resolve("gK52N"),import.meta.url).toString();var G;G=new URL(s("kyEFX").resolve("lT7aj"),import.meta.url).toString();var V;V=new URL(s("kyEFX").resolve("ifLYX"),import.meta.url).toString();document.querySelector(".bookcase").addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.closest(".book-card__link"))return;const n=t.target.closest(".book-card__link").dataset.id,i=function({title:t,author:n,book_image_height:i,book_image_width:s,book_image:r,description:o,buy_links:a}){o||(o="N/A");n||(n="N/A");t||(t="N/A");let l="",c="",h="";return a.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(c=e.url),"Bookshop"===e.name&&(h=e.url)})),`<div class="pop-up__block-img"> <img\n      class="pop-up__img "\n      src=${r}\n      alt='${t}'\n      width=${s}\n      heigth=${i}\n    />\n    </div>\n    <div class="pop-up__book-info">\n      <h2 class="card__book-name ">${t}</h2>\n      <h3 class="card__book-author ">${n}</h3>\n      <p class="card__book-text ">\n        ${o}\n      </p>\n      <div class="book-shop__thumb">\n        <a href="${l}" class="book-shop__link" target="_blank">\n          <picture>\n            <source\n              srcset="\n                ${e(X)},\n                ${e(K)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(X)}"\n              alt="amazon"\n              width="48"\n            />\n          </picture>\n        </a>\n        <a href="${c}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(q)},\n                ${e(Y)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(q)}"\n              alt="apple"\n              width="28"\n            /> </picture\n        ></a>\n        <a href="${h}" class="book-shop__link" target="_blank"\n          ><picture>\n            <source\n              srcset="\n                ${e(G)},\n                ${e(V)}\n              "\n            />\n            <img\n              class="book-shop__img"\n              src="${e(G)}"\n              alt="book-shop"\n              width="32"\n            /> </picture\n        ></a>\n      </div>\n    </div>`}(await(0,r.getBookDetail)(n));o.refs.popupCardContainer.innerHTML=i,document.body.style.overflow="hidden",o.refs.popupBackdrop.classList.remove("is-hidden"),o.refs.popupCloseBtn.addEventListener("click",j),o.refs.popupBackdrop.addEventListener("click",H),window.addEventListener("keydown",z)})),s("56a1K"),s("iuRNH");
//# sourceMappingURL=index.296342b7.js.map
