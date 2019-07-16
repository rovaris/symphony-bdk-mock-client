!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=84)}([,,function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"e",function(){return s});var r="templateapp",o="Template for app Integration",i="Template for app Integration",a="app-icon.svg",s={EXAMPLE_MODAL:{entity:"example-modal",entityData:{}}}},function(e,t,n){"use strict";var o=n(15),r=n(35),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)u(arguments[t],e);return r},extend:function(n,e,r){return u(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},,,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=n(10),o=function(){return"MOCK"===r.a.MOCK?"http://localhost:3000":"MOCK"===r.a.DEV?"Enter a Valid URL":"https://".concat(window.location.host,"/template")},i=function(){var e="";return"MOCK"===r.a.PROD&&(e="/template/app"),e},a=function(){return"MOCK"!==r.a.PROD?"https://localhost:4000":"https://".concat(window.location.host)}},function(e,t,n){"use strict";t.a={MOCK:"MOCK",DEV:"DEV",PROD:"PROD"}},function(e,t,n){e.exports=n(34)},,function(s,e,c){"use strict";(function(e){var n=c(3),r=c(37),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,a={adapter:("undefined"!=typeof XMLHttpRequest?i=c(16):void 0!==e&&(i=c(16)),i),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(t)}),s.exports=a}).call(this,c(23))},,function(e,t,n){"use strict";e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t,f){"use strict";var p=f(3),l=f(38),d=f(40),h=f(41),m=f(42),y=f(17);e.exports=function(u){return new Promise(function(n,r){var o=u.data,i=u.headers;p.isFormData(o)&&delete i["Content-Type"];var a=new XMLHttpRequest;if(u.auth){var e=u.auth.username||"",t=u.auth.password||"";i.Authorization="Basic "+btoa(e+":"+t)}if(a.open(u.method.toUpperCase(),d(u.url,u.params,u.paramsSerializer),!0),a.timeout=u.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in a?h(a.getAllResponseHeaders()):null,t={data:u.responseType&&"text"!==u.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:e,config:u,request:a};l(n,r,t),a=null}},a.onerror=function(){r(y("Network Error",u,null,a)),a=null},a.ontimeout=function(){r(y("timeout of "+u.timeout+"ms exceeded",u,"ECONNABORTED",a)),a=null},p.isStandardBrowserEnv()){var s=f(43),c=(u.withCredentials||m(u.url))&&u.xsrfCookieName?s.read(u.xsrfCookieName):void 0;c&&(i[u.xsrfHeaderName]=c)}if("setRequestHeader"in a&&p.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:a.setRequestHeader(t,e)}),u.withCredentials&&(a.withCredentials=!0),u.responseType)try{a.responseType=u.responseType}catch(e){if("json"!==u.responseType)throw e}"function"==typeof u.onDownloadProgress&&a.addEventListener("progress",u.onDownloadProgress),"function"==typeof u.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",u.onUploadProgress),u.cancelToken&&u.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),void 0===o&&(o=null),a.send(o)})}},function(e,t,n){"use strict";var a=n(39);e.exports=function(e,t,n,r,o){var i=new Error(e);return a(i,t,n,r,o)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){var r=n(31),o=n(32),i=n(33);e.exports=function(e){return r(e)||o(e)||i()}},,,function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,p=-1;function l(){f&&c&&(f=!1,c.length?u=c.concat(u):p=-1,u.length&&d())}function d(){if(!f){var e=s(l);f=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},,,,,,,function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";var r=n(3),o=n(15),i=n(36),a=n(13);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(a);c.Axios=i,c.create=function(e){return s(r.merge(a,e))},c.Cancel=n(19),c.CancelToken=n(49),c.isCancel=n(18),c.all=function(e){return Promise.all(e)},c.spread=n(50),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var o=n(13),i=n(3),r=n(44),a=n(45);function s(e){this.defaults=e,this.interceptors={request:new r,response:new r}}s.prototype.request=function(e,t){"string"==typeof e&&(e=i.merge({url:arguments[0]},t)),(e=i.merge(o,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var n=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){n.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)});n.length;)r=r.then(n.shift(),n.shift());return r},i.forEach(["delete","get","head","options"],function(n){s.prototype[n]=function(e,t){return this.request(i.merge(t||{},{method:n,url:e}))}}),i.forEach(["post","put","patch"],function(r){s.prototype[r]=function(e,t,n){return this.request(i.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=s},function(e,t,n){"use strict";var o=n(3);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,n){"use strict";var o=n(17);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var i=n(3);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(i.isURLSearchParams(t))r=t.toString();else{var o=[];i.forEach(t,function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";var i=n(3),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t){if(o[t]&&0<=a.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){"use strict";var r,o,i,a=n(3);function s(e){var t=e;return o&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}e.exports=a.isStandardBrowserEnv()?(o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),r=s(window.location.href),function(e){var t=a.isString(e)?s(e):e;return t.protocol===r.protocol&&t.host===r.host}):function(){return!0}},function(e,t,n){"use strict";var s=n(3);e.exports=s.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),s.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),s.isString(r)&&a.push("path="+r),s.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(3);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){"use strict";var r=n(3),o=n(46),i=n(18),a=n(13),s=n(47),c=n(48);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return u(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var r=n(3);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(19);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t,n){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(20),s=n.n(r),o=n(7),c=n.n(o),i=n(8),u=n.n(i),a=n(4),f=n.n(a),p=n(11),l=n.n(p),d=function(){function t(e){c()(this,t),this.baseAuthUrl="".concat(e,"/application")}return u()(t,[{key:"authenticate",value:function(e){return l.a.post("".concat(this.baseAuthUrl,"/authenticate"),{appId:e})}},{key:"validateTokens",value:function(e,t,n){return l.a.post("".concat(this.baseAuthUrl,"/tokens/validate"),{appToken:e,symphonyToken:t,appId:n})}},{key:"validateJwt",value:function(e){return l.a.post("".concat(this.baseAuthUrl,"/jwt/validate"),{jwt:e})}}]),t}(),h=function(){function a(e){var n=this,t=e.appId,r=e.dependencies,o=e.exportedDependencies,i=e.baseAuthenticationUrl;c()(this,a),f()(this,"authenticate",function(){return n.authApiCaller.authenticate(n.appId)}),f()(this,"registerAuthenticatedApp",function(e){n.tokenA=e.data.appToken;var t={appId:n.appId,tokenA:n.tokenA};return SYMPHONY.application.register(t,n.dependencies,n.exportedDependencies)}),f()(this,"validateAppTokens",function(e){return n.authApiCaller.validateTokens(n.tokenA,e.tokenS,n.appId)}),f()(this,"getJwtFromSymph",function(){return SYMPHONY.services.subscribe("extended-user-info").getJwt()}),f()(this,"validateJwtToken",function(e){return n.authApiCaller.validateJwt(e)}),this.appId=t,this.dependencies=r,this.exportedDependencies=o,this.authApiCaller=new d(i),r.find(function(e){return"extended-user-info"===e})?this.dependencies=r:this.dependencies=[].concat(s()(r),["extended-user-info"])}return u()(a,[{key:"init",value:function(){var t=this;return SYMPHONY.remote.hello().then(this.authenticate).then(this.registerAuthenticatedApp).then(this.validateAppTokens).then(this.getJwtFromSymph).then(this.validateJwtToken).catch(function(e){throw console.error("Fail to register application ".concat(t.appId)),e})}}]),a}(),m=n(9),y=n(24),v=n.n(y),b={TESTING:{type:"com.symphony.ms.devtools.testingEntity",json:{commands:"<b>acknowledge:</b> used to acknowledge an incident <br /> <b>Syntax:</b> @PagerDutty Bot acknowledge &lt;incident id&gt;<br /><br /> <b>resolve:</b> used to resolve an incident<br /> <b>Syntax:</b> @PagerDutty Bot resolve &lt;incident id&gt;"}}},g=n(2),w=function(){function t(e){c()(this,t),this.name=e,this.messageEvents=Object.keys(b).map(function(e){return b[e].type}),this.implements=["render","action"]}return u()(t,[{key:"getName",value:function(){return this.name}},{key:"init",value:function(){SYMPHONY.services.make(this.name,this,this.implements,!0)}},{key:"register",value:function(){var t=this,n=SYMPHONY.services.subscribe("entity");this.messageEvents.forEach(function(e){n.registerRenderer(e,{},t.name)}),this.dialogsService=SYMPHONY.services.subscribe("dialogs")}},{key:"render",value:function(e,t){var n,r="object"===v()(t.id)?t.id:JSON.parse(t.id),o={};switch(e){case b.TESTING.type:n="<messageML>\n          <h1>An enriched message!</h1>\n          <p>What we got from the entity: ".concat(JSON.stringify(r),"</p>\n          <p><b>WOW</b> that's exciting!</p>\n        </messageML>");break;default:n="<messageML><p><b>ERROR</b> message not rendered.</p><p>Caught: ".concat(e,"</p></messageML>"),o={}}return{template:n,data:o}}},{key:"action",value:function(e){this.dialogsService=SYMPHONY.services.subscribe("dialogs");var t,n="app.html?queryObj=".concat(encodeURIComponent(JSON.stringify({page:e.entity})));switch(e.entity){case g.e.EXAMPLE_MODAL.entity:this.dialogsService.show(t,this.name,'<dialog><iframe height="500" width="100%" src="'.concat(n,'" ></iframe></dialog>'),void 0,{});break;default:t="noEntityDialog",n="https://yahoo.com",this.dialogsService.show(t,this.name,'<dialog><iframe height="500" width="100%" src="'.concat(n,'" ></iframe></dialog>'),void 0,{})}}}],[{key:"getMessages",value:function(){return Object.keys(b).map(function(e){return b[e].type})}},{key:"actionFactory",value:function(e,i,a){return e.reduce(function(e,t){var n={},r=t.id||t.type,o={service:i,label:t.label,data:{entity:a,service:t.service,type:t.type,entityData:t.entityData}};return n[r]=o,Object.assign(e,n)},{})}}]),t}();function x(e,t){var n=1<arguments.length&&void 0!==t?t:null,r=SYMPHONY.services.subscribe("modules"),o=e||"".concat(Object(m.a)()).concat(Object(m.b)(),"/app.html"),i=n||"".concat(Object(m.a)()).concat(Object(m.b)(),"/assets/").concat(g.a);r.show(g.b,{title:g.d,icon:i},"".concat(g.b,":controller"),o,{canFloat:!0})}window.ENRICHER_EVENTS=b,window.MODAL_IDS=g.e;var S=SYMPHONY.services.register("".concat(g.b,":controller"));SYMPHONY.services.register("".concat(g.b,":enricher"));var O=["".concat(g.b,":controller"),"".concat(g.b,":enricher")],T=Object(m.a)(),E=Object(m.c)(),A=new h({appId:g.b,dependencies:["modules","applications-nav","ui","entity","dialogs"],exportedDependencies:O,baseAuthenticationUrl:E});A.init().then(function(){return function(){var t=SYMPHONY.services.subscribe("modules"),n=SYMPHONY.services.subscribe("applications-nav"),e=SYMPHONY.services.subscribe("ui");SYMPHONY.services.subscribe("entity");var r=new w("".concat(g.b,":enricher"));r.init(),r.register();var o={title:g.c,icon:"".concat(T,"/template/app/assets/").concat(g.a)};n.add("".concat(g.b,"-nav"),o,"".concat(g.b,":controller")),e.registerExtension("app-settings",g.b,"".concat(g.b,":controller"),{label:"Configure"}),S.implement({select:function(e){e==="".concat(g.b,"-nav")&&n.focus("".concat(g.b,"-nav")),x(),t.focus(g.b)},trigger:function(e){"app-settings"===e&&x({page:"config"})}})}()}).catch(function(e){return console.error(e)})}]);