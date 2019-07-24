!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=153)}({153:function(e,n,t){"use strict";function i(e){this.name=e,this.events={},this.reflectors={},this.eventId=0,this.publish=this.callfire,this.subscribe=this.listen,this.unsubscribe=this.remove,this.unlisten=this.remove,this.invoke=this.callfire,this.invokeArgs=this.fireArgs,this.methods=[],this.tight=!0}t.r(n),i.prototype={setType:function(e){e.forEach(function(e){this[e]=this.invoke.bind(this,e),this.methods.push(e)},this)},callfire:function(){return this.fire.apply(this,arguments)},loosen:function(e){this[e]=this.invoke.bind(this,e)},loosenAll:function(){this.tight=!1,this.methods.forEach(function(e){this.loosen(e)},this)},implementOne:function(e,n){var t="".concat(e,"_e_");this.events[t]||(this.listen(e,n),this.tight?this[e]=n:this[e]=this.invoke.bind(this,e),this.methods.push(e))},implement:function(e,n){if("string"!=typeof e){var t=e;for(var e in t)if(t.hasOwnProperty(e)){n=t[e];this.implementOne(e,n.bind(this))}}else this.implementOne(e,n)},listen:function(e,n){e+="_e_";var t=this.events[e];null==t?(t={},this.events[e]=t):this.loosen(e);var i="event_".concat(this.eventId);return this.eventId++,t[i]=n,i},bubble:function(e,n){e.listen(n,function(){var e=Array.prototype.slice.call(arguments);e.unshift(n),this.fire.apply(this,e)}.bind(this))},remove:function(e,n){e+="_e_";var t=this.events[e];null!=t&&(""===n?t={}:delete t[n])},removeAll:function(e){e+="_e_",this.events[e]={}},getEventCount:function(e){e+="_e_";var n=this.events[e];return null==n?0:_.size(n)},fire:function(e){e+="_e_";var n,t=Array.prototype.slice.call(arguments,1),i=this.events[e];if(null!=i){for(var o in i)if(i.hasOwnProperty(o)){var r=i[o],s=r.apply(this,t);void 0===n&&void 0!==s&&(n=s)}return n}},fireArgs:function(e,n){return n.unshift(e),result=this.fire.apply(this,n),n.shift(e),result},reflect:function(e,n){var t;this.reflectors[e]=this.reflectors[e]||[],(t=this.reflectors[e]).length||this.listen(e,onReflect.bind(this,e)),t.push(n)},onReflect:function(e){var n=Array.prototype.slice.call(arguments,1),t=this.reflectors[e];t&&t.forEach(function(t){t.fireArgs(e,n)},this)}};var o=i,r=[{name:"Room A",threadId:"abc/def//ghi+jkl==",memberAddUserEnabled:!0,userIsOwner:!0,publicRoom:!1},{name:"Room B",threadId:"abc/def//ghi+123==",memberAddUserEnabled:!1,userIsOwner:!1,publicRoom:!1},{name:"Room C",threadId:"abc/def//ghi+456==",memberAddUserEnabled:!0,userIsOwner:!1,publicRoom:!0}],s=new Map,c={id:0,name:"Cpt. Jean Luc Picard"},a={id:2,name:"2nd Officer LT commander Data"};s.set("abc_def__ghi-jkl",[c,a]),s.set("abc_def__ghi-123",[c]),s.set("abc_def__ghi-456",[c,{id:1,name:"1st officer William Riker"},a,{id:3,name:"Chief Engineer Lt. La forge"}]);var l="entity",u="ui",f="applications-nav",h="dialogs",d="theme-watcher",m="themes",g="account",p="extended-user-info",v=[];window.env={};var b={services:{makeAnonymousService:function(){return new o},madeServices:v,register:function(e){return console.info("Registering service -> ".concat(e)),{implement:function(){console.info("App Service implements called")}}},make:function(e,n){console.info("Service make-> ".concat(e),v),v.push({name:e,instance:n})},unsubscribe:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("unsubscribing -> ".concat(n))},subscribe:function(e){switch(console.info("Subscribing to module -> ".concat(e)),e){case l:return{registerRenderer:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Registering Entity -> ".concat(n))}};case u:return{registerExtension:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Registering Entity -> ".concat(n))},listen:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Listening to ui entity subscription -> ".concat(n))}};case h:return{show:function(e,n,t){var i=t.match(/src=\"(.*?)\"/)[1].replace(/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/,"$1"),o=t.match(/width=\"(.*?)\"/)[1],r=t.match(/height=\"(.*?)\"/)[1];window.dispatchEvent(new CustomEvent("openDialog",{detail:{url:i,width:o,height:r},bubbles:!0,cancelable:!0})),console.warn("Requesting to open dialog named as -> ".concat(e))}};case f:return{add:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Registering Entity -> ".concat(n))}};case d:return{getTheme:function(){return"light"}};case m:return{getActiveThemeInfo:function(){return{contrast:""}}};case g:return{getPodId:function(){return""},getDesktopSettings:function(){return{activeMode:"",fontSize:"normal"}}};case p:return{getJwt:function(){return console.info("Getting mocked jwt"),new Promise(function(e){return e("mocked-jwt")})}};default:return{listen:function(e,n){console.info("Registered Listener to -> ".concat(e))},addMenuItem:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Adding menu Items [".concat(n.join(","),"]"))},setHandler:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.info("Setting Handler Items [".concat(n.join(","),"]"))},getRooms:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return console.info("Getting rooms for [".concat(n.join(","),"]")),new Promise(function(e){return e(r)})}}}}},remote:{hello:function(){return console.log("Calling Symphony Remote Hello"),new Promise(function(e){return e({themeV2:{name:"mock-name",size:"18px"}})})}},application:{connect:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return console.log("Connecting application ".concat(n)),new Promise(function(e){return e({userReferenceId:"MockedUser"})})},register:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return console.info("Registering application ".concat(n)),new Promise(function(e){return e({userReferenceId:"MockedUser"})})}},getContacts:function(e){return console.info("Getting contacts for room [".concat(e,"]")),new Promise(function(n){return n(s.get(e))})},chats:[{id:0,label:"CHATS",hasAdd:!0,list:[{id:0,status:!1,text:"Commander Willian Riker",icon:null},{id:1,status:!0,text:"LT Commander Data",icon:null},{id:2,status:!0,text:"LT La Forge",icon:null},{id:3,status:!1,text:"LT Worf",icon:null},{id:4,status:!1,text:"Counselor Troi",icon:null},{id:5,status:!1,text:"Commander Willian Riker, LT Commander Data, LT La forge, LT La Worf, Counselor Troi",icon:null}]},{id:1,label:"SIGNALS",hasAdd:!0,list:[{id:0,status:null,text:"Keywords",icon:null},{id:1,status:null,text:"All Following",icon:null}]},{id:2,label:"APPLICATIONS",hasAdd:!0,list:[{id:0,status:null,text:"Symphony Market",icon:null},{id:1,status:null,text:"Sample App",icon:"/assets/white-label.png"}]},{id:3,label:"INVITES",hasAdd:!0,list:[{id:0,status:null,text:"Create Team",icon:null},{id:1,status:null,text:"Invite Contacts",icon:null}]}]};console.log("Service make-> ",window.SYMPHONY.services.madeServices,window.SYMPHONY),window.SYMPHONY=Object.assign({},window.SYMPHONY,b)}});