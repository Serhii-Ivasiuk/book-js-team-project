!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"f1sdc":"shopping-list.00e1714e.js","6ztcb":"amazon@1x.17c4c4f2.png","1iaLI":"amazon@2x.225c89fa.png","f8I3T":"apple@1x.bdfd714b.png","3ZLqn":"apple@2x.93da152b.png","9Cr2S":"book-shop@1x.926d07c4.png","8Aq8R":"book-shop@2x.d7c8ffd1.png","izqLI":"shoping-list-bg@1x.2c75914c.png","fTufq":"shoping-list-bg@2x.c7e494c9.png","5VkSf":"empty_pic.dcf0d48a.jpg","410VS":"icons.4c1c0d51.svg","lxDUL":"shopping-list.37dd8764.js"}')),i("1h2Gi");var a=i("kVdBw");i("1h2Gi");var s;s=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("6ztcb");var c;c=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("1iaLI");var u;u=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("f8I3T");var l;l=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("3ZLqn");var h;h=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("9Cr2S");var f;f=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("8Aq8R");var d;d=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("izqLI");var p;p=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("fTufq");var _;_=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("5VkSf");var g;g=i("aNJCr").getBundleURL("f1sdc")+i("iE7OH").resolve("410VS");var v,k,b=i("ds8z5"),m=i("bpxeT"),E=i("8MBJY"),R=i("a2hTj"),y=i("eYQtU"),T=i("1t1Wn"),O=i("8nrFW"),I=i("2MbLg"),N=i("2TvXO"),w=i("MjY8E"),A=i("2xDiJ"),C=i("6ExWU"),U="firebasestorage.googleapis.com",x=function(e){"use strict";t(y)(r,e);var n=t(I)(r);function r(e,o){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t(E)(this,r),(i=n.call(this,L(e),"Firebase Storage: ".concat(o," (").concat(L(e),")"))).status_=a,i.customData={serverResponse:null},i._baseMessage=i.message,Object.setPrototypeOf(t(b)(i),r.prototype),i}return t(R)(r,[{key:"status",get:function(){return this.status_},set:function(e){this.status_=e}},{key:"_codeEquals",value:function(e){return L(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),r}(A.FirebaseError);function L(e){return"storage/"+e}function D(){return new x(v.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function S(){return new x(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H(){return new x(v.CANCELED,"User canceled the upload/download.")}function F(e){return new x(v.INVALID_ARGUMENT,e)}function P(){return new x(v.APP_DELETED,"The Firebase app was deleted.")}(k=v||(v={})).UNKNOWN="unknown",k.OBJECT_NOT_FOUND="object-not-found",k.BUCKET_NOT_FOUND="bucket-not-found",k.PROJECT_NOT_FOUND="project-not-found",k.QUOTA_EXCEEDED="quota-exceeded",k.UNAUTHENTICATED="unauthenticated",k.UNAUTHORIZED="unauthorized",k.UNAUTHORIZED_APP="unauthorized-app",k.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",k.INVALID_CHECKSUM="invalid-checksum",k.CANCELED="canceled",k.INVALID_EVENT_NAME="invalid-event-name",k.INVALID_URL="invalid-url",k.INVALID_DEFAULT_BUCKET="invalid-default-bucket",k.NO_DEFAULT_BUCKET="no-default-bucket",k.CANNOT_SLICE_BLOB="cannot-slice-blob",k.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",k.NO_DOWNLOAD_URL="no-download-url",k.INVALID_ARGUMENT="invalid-argument",k.INVALID_ARGUMENT_COUNT="invalid-argument-count",k.APP_DELETED="app-deleted",k.INVALID_ROOT_OPERATION="invalid-root-operation",k.INVALID_FORMAT="invalid-format",k.INTERNAL_ERROR="internal-error",k.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
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
var B,M,V=function(){"use strict";function e(n,r){t(E)(this,e),this.bucket=n,this.path_=r}return t(R)(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,n){var r,o;try{r=e.makeFromUrl(t,n)}catch(n){return new e(t,"")}if(""===r.path)return r;throw o=t,new x(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+o+"'.")}},{key:"makeFromUrl",value:function(t,n){var r=null,o="([A-Za-z0-9.\\-_]+)";var i=new RegExp("^gs://"+o+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var s=n.replace(/[.]/g,"\\."),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(s,"/").concat("v[A-Za-z0-9_]+","/b/").concat(o,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp("^https?://".concat(n===U?"(?:storage.googleapis.com|storage.cloud.google.com)":n,"/").concat(o,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:a}],u=0;u<c.length;u++){var l=c[u],h=l.regex.exec(t);if(h){var f=h[l.indices.bucket],d=h[l.indices.path];d||(d=""),r=new e(f,d),l.postModify(r);break}}if(null==r)throw function(e){return new x(v.INVALID_URL,"Invalid URL '"+e+"'.")}(t);return r}}]),e}(),q=function(){"use strict";function e(n){t(E)(this,e),this.promise_=Promise.reject(n)}return t(R)(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function z(e,t,n,r){if(r<t)throw F("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(r>n)throw F("Invalid value for '".concat(e,"'. Expected ").concat(n," or less."))}
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
 */function j(e){var t=encodeURIComponent,n="?";for(var r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1)}
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
function J(e,t){var n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}
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
 */(M=B||(B={}))[M.NO_ERROR=0]="NO_ERROR",M[M.NETWORK_ERROR=1]="NETWORK_ERROR",M[M.ABORT=2]="ABORT";var W=function(){"use strict";function e(n,r,o,i,a,s,c,u,l,h,f){var d=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],p=this;t(E)(this,e),this.url_=n,this.method_=r,this.headers_=o,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=s,this.callback_=c,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return t(R)(e,[{key:"start_",value:function(){var e=this,n=function(t,n){var r=e.resolve_,o=e.reject_,i=n.connection;if(n.wasSuccessCode)try{var a=e.callback_(i,i.getResponse());void 0!==a?r(a):r()}catch(e){o(e)}else if(null!==i){var s=D();s.serverResponse=i.getErrorText(),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(n.canceled){o(e.appDelete_?P():H())}else{o(S())}};this.canceled_?n(0,new K(!1,null,!0)):this.backoffId_=
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
function(e,n,r){var o=1,i=null,a=null,s=!1,c=0;function u(){return 2===c}var l=!1;function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];l||(l=!0,n.apply(null,t))}function f(t){i=setTimeout((function(){i=null,e(p,u())}),t)}function d(){a&&clearTimeout(a)}function p(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(l)d();else{var a,p,_;if(e)return d(),void(a=h).call.apply(a,[null,e].concat(t(O)(r)));if(u()||s)return d(),void(p=h).call.apply(p,[null,e].concat(t(O)(r)));o<64&&(o*=2),1===c?(c=2,_=0):_=1e3*(o+Math.random()),f(_)}}var _=!1;function g(e){_||(_=!0,d(),l||(null!==i?(e||(c=2),clearTimeout(i),f(0)):e||(c=1)))}return f(0),a=setTimeout((function(){s=!0,g(!0)}),r),g}((function(t,n){var r=e;if(n)t(!1,new K(!1,null,!0));else{var o=e.connectionFactory_();e.pendingConnection_=o;var i=function(e){var t=e.loaded,n=e.lengthComputable?e.total:-1;null!==r.progressCallback_&&r.progressCallback_(t,n)};null!==e.progressCallback_&&o.addUploadProgressListener(i),o.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==r.progressCallback_&&o.removeUploadProgressListener(i),r.pendingConnection_=null;var e=o.getErrorCode()===B.NO_ERROR,n=o.getStatus();if(!e||J(n,r.additionalRetryCodes_)&&r.retry){var a=o.getErrorCode()===B.ABORT;t(!1,new K(!1,null,a))}else{var s=-1!==r.successCodes_.indexOf(n);t(!0,new K(s,o))}}))}}),n,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}]),e}(),K=function e(n,r,o){"use strict";t(E)(this,e),this.wasSuccessCode=n,this.connection=r,this.canceled=!!o};function G(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}function X(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}function Y(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Z(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function $(e,t,n,r,o,i){var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=j(e.urlParams),c=e.url+s,u=Object.assign({},e.headers);return Y(u,t),G(u,n),X(u,i),Z(u,r),new W(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}
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
 */function Q(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
var ee=function(){"use strict";function e(n,r){t(E)(this,e),this._service=n,this._location=r instanceof V?r:V.makeFromUrl(r,n.host)}return t(R)(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,n){return new e(t,n)}},{key:"root",get:function(){var e=new V(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return Q(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=
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
function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var n=new V(this._location.bucket,t);return new e(this._service,n)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw t=e,new x(v.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t}}]),e}();
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
 */function te(e,t){var n=null==t?void 0:t.storageBucket;return null==n?null:V.makeFromBucketSpec(n,e)}var ne=function(){"use strict";function e(n,r,o,i,a){t(E)(this,e),this.app=n,this._authProvider=r,this._appCheckProvider=o,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=U,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?V.makeFromBucketSpec(i,this._host):te(this._host,this.app.options)}return t(R)(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=V.makeFromBucketSpec(this._url,e):this._bucket=te(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:function(){var e=this;return t(m)(t(N).mark((function n(){var r,o;return t(N).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._overrideAuthToken){t.next=2;break}return t.abrupt("return",e._overrideAuthToken);case 2:if(!(r=e._authProvider.getImmediate({optional:!0}))){t.next=9;break}return t.next=6,r.getToken();case 6:if(null===(o=t.sent)){t.next=9;break}return t.abrupt("return",o.accessToken);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return t(m)(t(N).mark((function n(){var r,o;return t(N).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e._appCheckProvider.getImmediate({optional:!0}))){t.next=6;break}return t.next=4,r.getToken();case 4:return o=t.sent,t.abrupt("return",o.token);case 6:return t.abrupt("return",null);case 7:case"end":return t.stop()}}),n)})))()}},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new ee(this,e)}},{key:"_makeRequest",value:function(e,t,n,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this._deleted)return new q(P());var i=this,a=$(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then((function(){return i._requests.delete(a)}),(function(){return i._requests.delete(a)})),a}},{key:"makeRequestWithTokens",value:function(e,n){var r=this;return t(m)(t(N).mark((function o(){var i,a,s;return t(N).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.t0=t(T),o.next=3,Promise.all([r._getAuthToken(),r._getAppCheckToken()]);case 3:return o.t1=o.sent,i=(0,o.t0)(o.t1,2),a=i[0],s=i[1],o.abrupt("return",r._makeRequest(e,n,a,s).getPromise());case 8:case"end":return o.stop()}}),o)})))()}}]),e}(),re="@firebase/storage",oe="0.11.2",ie="storage";function ae(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ne(r,o,i,n,w.SDK_VERSION)}(0,w._registerComponent)(new(0,C.Component)(ie,ae,"PUBLIC").setMultipleInstances(!0)),(0,w.registerVersion)(re,oe,""),(0,w.registerVersion)(re,oe,"esm2017");var se=[];function ce(){a.refs.shoppingList.insertAdjacentHTML("beforeend",'<div class="shoplist__list-background">\n          <p class="shoplist__list-background-text">\n            This page is empty, add some books and proceed to order.\n          </p>\n          <picture>\n            <source\n              srcset="'.concat(t(d),", ").concat(t(p),'"\n            />\n            <img class="shoplist__list-background-img"\n              src="').concat(t(d),'"\n              alt="Add some books"\n            />\n          </picture>\n        </div>'))}null===localStorage.getItem("books-id")?ce():function(){var e=localStorage.getItem("books-id"),n=JSON.parse(e);n.length>0?(n.forEach((function(e){se.push(e)})),se.forEach((function(e){!function(e){var n=e._id,r=e.title,o=e.list_name,i=e.author,d=e.book_image_height,p=e.book_image_width,v=e.book_image,k=e.description,b=e.buy_links;v||(v=t(_),d=500,p=330),k||(k="This book has no description yet. We will add it soon."),i||(i="Unknown author"),r||(r="Unknown title");var m="",E="",R="";b.forEach((function(e){"Amazon"===e.name&&(m=e.url),"Apple Books"===e.name&&(E=e.url),"Bookshop"===e.name&&(R=e.url)})),a.refs.shoppingList.insertAdjacentHTML("beforeend",'<li class="shoplist__item">\n  <div class="book__container" data-id='.concat(n,'>\n    <div class="book__img-container">\n      <img class="book__img" src=').concat(v," alt=").concat(r," width=").concat(p," height=").concat(d,' />\n    </div>\n    <p class="book__author">').concat(i,'</p>\n    <div class="book-title">\n      <h2 class="book-title__title">').concat(r,'</h2>\n      <h3 class="book-title__category">').concat(o,'</h3>\n    </div>\n    <div class="book-links">\n      <a href="').concat(m,'" class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="').concat(t(s),", ").concat(t(c),'"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/amazon@1x.png"\n            alt="amazon"\n            width="48"\n          />\n        </picture>\n      </a>\n      <a href=').concat(E,' class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="').concat(t(u),", ").concat(t(l),'"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/apple@1x.png"\n            alt="apple"\n            width="28"\n          />\n        </picture>\n      </a>\n      <a href=').concat(R,' class="book-links__link" target="_blank">\n        <picture>\n          <source\n            srcset="').concat(t(h),", ").concat(t(f),'"\n          />\n          <img\n            class="img"\n            src="./images/book-modal/book-shop@1x.png"\n            alt="book-shop"\n            width="32"\n          />\n        </picture>\n      </a>\n    </div>\n    <p class="book-overview">').concat(k,'</p>\n    <button class="trash-btn" type="button">\n    <svg class="trash-btn__icon" width="28" height="28">\n      <use class="js-delete-book" href="').concat(t(g),'#delete-book"></use>\n    </svg>\n  </button>\n  </div>\n</li>'))}(e.bookData)}))):ce();n.length<=3&&(a.refs.pagination.style.display="none")}(),a.refs.shoppingList.addEventListener("click",(function(e){if(e.target.classList.contains("js-delete-book")){var t=e.target.closest(".book__container").dataset.id;se.forEach((function(n,r){n.bookId===t&&(se.splice(r,1),e.target.closest(".shoplist__item").remove(),localStorage.setItem("books-id",JSON.stringify(se)))})),se.length<1&&(ce(),a.refs.pagination.style.display="none")}})),i("9hn33"),i("xpKCW"),i("9A7sA"),i("ivz30"),i("kgvtT"),i("8e9SS"),i("8zUhP")}();
//# sourceMappingURL=shopping-list.00e1714e.js.map
