function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var s,o;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"fjY3Y":"shopping-list.74517f43.js","3OouQ":"amazon@1x.17c4c4f2.png","ctt8U":"amazon@2x.225c89fa.png","1XqBp":"apple@1x.bdfd714b.png","gK52N":"apple@2x.93da152b.png","lT7aj":"book-shop@1x.926d07c4.png","ifLYX":"book-shop@2x.d7c8ffd1.png","jcnh0":"shoping-list-bg@1x.2c75914c.png","b8Fho":"shoping-list-bg@2x.c7e494c9.png","amO9v":"empty_pic.dcf0d48a.jpg","8OQ7p":"icons.4c1c0d51.svg","2Hrug":"shopping-list.f5f0998c.js"}')),r("7me8F");var i=r("in2tx");r("7me8F");var a;a=new URL(r("kyEFX").resolve("3OouQ"),import.meta.url).toString();var l;l=new URL(r("kyEFX").resolve("ctt8U"),import.meta.url).toString();var c;c=new URL(r("kyEFX").resolve("1XqBp"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("gK52N"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("lT7aj"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("ifLYX"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("jcnh0"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("b8Fho"),import.meta.url).toString();var g;g=new URL(r("kyEFX").resolve("amO9v"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var f=r("ix4Jr"),b=r("ffjl9"),k=r("4a6xH");
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
class R extends b.FirebaseError{constructor(e,t,n=0){super(O(e),`Firebase Storage: ${t} (${O(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,R.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return O(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var E,v,T,I;function O(e){return"storage/"+e}function w(){return new R(E.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function N(){return new R(E.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function A(){return new R(E.CANCELED,"User canceled the upload/download.")}function y(e){return new R(E.INVALID_ARGUMENT,e)}function U(){return new R(E.APP_DELETED,"The Firebase app was deleted.")}(v=E||(E={})).UNKNOWN="unknown",v.OBJECT_NOT_FOUND="object-not-found",v.BUCKET_NOT_FOUND="bucket-not-found",v.PROJECT_NOT_FOUND="project-not-found",v.QUOTA_EXCEEDED="quota-exceeded",v.UNAUTHENTICATED="unauthenticated",v.UNAUTHORIZED="unauthorized",v.UNAUTHORIZED_APP="unauthorized-app",v.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",v.INVALID_CHECKSUM="invalid-checksum",v.CANCELED="canceled",v.INVALID_EVENT_NAME="invalid-event-name",v.INVALID_URL="invalid-url",v.INVALID_DEFAULT_BUCKET="invalid-default-bucket",v.NO_DEFAULT_BUCKET="no-default-bucket",v.CANNOT_SLICE_BLOB="cannot-slice-blob",v.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",v.NO_DOWNLOAD_URL="no-download-url",v.INVALID_ARGUMENT="invalid-argument",v.INVALID_ARGUMENT_COUNT="invalid-argument-count",v.APP_DELETED="app-deleted",v.INVALID_ROOT_OPERATION="invalid-root-operation",v.INVALID_FORMAT="invalid-format",v.INTERNAL_ERROR="internal-error",v.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
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
class C{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=C.makeFromUrl(e,t)}catch(t){return new C(e,"")}if(""===n.path)return n;throw s=e,new R(E.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.");var s}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+s+"(/(.*))?$","i");function r(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let t=0;t<a.length;t++){const s=a[t],o=s.regex.exec(e);if(o){const e=o[s.indices.bucket];let t=o[s.indices.path];t||(t=""),n=new C(e,t),s.postModify(n);break}}if(null==n)throw function(e){return new R(E.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class F{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function x(e,t,n,s){if(s<t)throw y(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw y(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function L(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){n=n+(t(s)+"="+t(e[s]))+"&"}return n=n.slice(0,-1),n}
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
 * Copyright 2022 Google LLC
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
function S(e,t){const n=e>=500&&e<600,s=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||s||o}
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
 */(I=T||(T={}))[I.NO_ERROR=0]="NO_ERROR",I[I.NETWORK_ERROR=1]="NETWORK_ERROR",I[I.ABORT=2]="ABORT";class D{constructor(e,t,n,s,o,r,i,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,s=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){s(e)}else if(null!==o){const e=w();e.serverResponse=o.getErrorText(),this.errorCallback_?s(this.errorCallback_(o,e)):s(e)}else if(t.canceled){s(this.appDelete_?U():A())}else{s(N())}};this.canceled_?e(0,new P(!1,null,!0)):this.backoffId_=function(e,t,n){let s=1,o=null,r=null,i=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((()=>{o=null,e(p,l())}),t)}function _(){r&&clearTimeout(r)}function p(e,...t){if(c)return void _();if(e)return _(),void u.call(null,e,...t);if(l()||i)return _(),void u.call(null,e,...t);let n;s<64&&(s*=2),1===a?(a=2,n=0):n=1e3*(s+Math.random()),h(n)}let d=!1;function g(e){d||(d=!0,_(),c||(null!==o?(e||(a=2),clearTimeout(o),h(0)):e||(a=1)))}return h(0),r=setTimeout((()=>{i=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new P(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const t=n.getErrorCode()===T.NO_ERROR,o=n.getStatus();if(!t||S(o,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===T.ABORT;return void e(!1,new P(!1,null,t))}const r=-1!==this.successCodes_.indexOf(o);e(!0,new P(r,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class P{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function $(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 * Copyright 2019 Google LLC
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
class H{constructor(e,t){this._service=e,this._location=t instanceof C?t:C.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new H(e,t)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $(this._location.path)}get storage(){return this._service}get parent(){const e=
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
function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new C(this._location.bucket,e);return new H(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw t=e,new R(E.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t}}function M(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:C.makeFromBucketSpec(n,e)}class j{constructor(e,t,n,s,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?C.makeFromBucketSpec(s,this._host):M(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=M(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){x("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,t,n,s,o=!0){if(this._deleted)return new F(U());{const r=function(e,t,n,s,o,r,i=!0){const a=L(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,r),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,s),new D(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}
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
 */(e,this._appId,n,s,t,this._firebaseVersion,o);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}function V(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new j(n,s,o,t,f.SDK_VERSION)}(0,f._registerComponent)(new(0,k.Component)("storage",V,"PUBLIC").setMultipleInstances(!0)),(0,f.registerVersion)("@firebase/storage","0.11.2",""),(0,f.registerVersion)("@firebase/storage","0.11.2","esm2017");let X=[];function B(){i.refs.shoppingList.insertAdjacentHTML("beforeend",`<div class="shoplist__list-background">\n          <p class="shoplist__list-background-text">\n            This page is empty, add some books and proceed to order.\n          </p>\n          <picture>\n            <source\n              srcset="${t(p)}, ${t(d)}"\n            />\n            <img class="shoplist__list-background-img"\n              src="${t(p)}"\n              alt="Add some books"\n            />\n          </picture>\n        </div>`)}null===localStorage.getItem("books-id")?B():function(){let e=localStorage.getItem("books-id"),n=JSON.parse(e);n.length>0?(n.forEach((e=>{X.push(e)})),X.forEach((e=>{!function({_id:e,title:n,list_name:s,author:o,book_image_height:r,book_image_width:p,book_image:d,description:f,buy_links:b}){d||(d=t(g),r=500,p=330),f||(f="This book has no description yet. We will add it soon."),o||(o="Unknown author"),n||(n="Unknown title");let k="",R="",E="";b.forEach((e=>{"Amazon"===e.name&&(k=e.url),"Apple Books"===e.name&&(R=e.url),"Bookshop"===e.name&&(E=e.url)})),i.refs.shoppingList.insertAdjacentHTML("beforeend",`<li class="shoplist__item">\n  <div class="book__container" data-id=${e}>\n    <div class="book__img-container">\n      <img class="book__img" src=${d} alt=${n} width=${p} height=${r} />\n    </div>\n    <p class="book__author">${o}</p>\n    <div class="book-title">\n      <h2 class="book-title__title">${n}</h2>\n      <h3 class="book-title__category">${s}</h3>\n    </div>\n    <div class="book-links">\n      <a href="${k}" class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="${t(a)}, ${t(l)}"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/amazon@1x.png"\n            alt="amazon"\n            width="48"\n          />\n        </picture>\n      </a>\n      <a href=${R} class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="${t(c)}, ${t(u)}"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/apple@1x.png"\n            alt="apple"\n            width="28"\n          />\n        </picture>\n      </a>\n      <a href=${E} class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="${t(h)}, ${t(_)}"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/book-shop@1x.png"\n            alt="book-shop"\n            width="32"\n          />\n        </picture>\n      </a>\n    </div>\n    <p class="book-overview">${f}</p>\n    <button class="trash-btn" type="button">\n    <svg class="trash-btn__icon" width="28" height="28">\n      <use class="js-delete-book" href="${t(m)}#delete-book"></use>\n    </svg>\n  </button>\n  </div>\n</li>`)}(e.bookData)}))):B();n.length<=3&&(i.refs.pagination.style.display="none")}(),i.refs.shoppingList.addEventListener("click",(e=>{if(e.target.classList.contains("js-delete-book")){const t=e.target.closest(".book__container").dataset.id;X.forEach(((n,s)=>{n.bookId===t&&(X.splice(s,1),e.target.closest(".shoplist__item").remove(),localStorage.setItem("books-id",JSON.stringify(X)))})),X.length<1&&(B(),i.refs.pagination.style.display="none")}})),r("eHzQI"),r("dTazW"),r("8QtOa"),r("fn969"),r("4GINZ"),r("iuRNH"),r("56a1K");
//# sourceMappingURL=shopping-list.74517f43.js.map
