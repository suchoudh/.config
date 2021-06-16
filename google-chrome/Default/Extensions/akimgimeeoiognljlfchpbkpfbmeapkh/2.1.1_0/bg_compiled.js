/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,b){a!=Array.prototype&&a!=Object.prototype&&(a[e]=b.value)},p=function(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var e=0;e<a.length;++e){var b=a[e];if(b&&b.Math==Math)return b}return globalThis},r=p(this),t=function(a,e){if(e){var b=r;a=a.split(".");for(var h=0;h<a.length-1;h++){var g=a[h];g in b||(b[g]={});b=b[g]}a=a[a.length-1];h=b[a];e=e(h);e!=h&&null!=
e&&n(b,a,{configurable:!0,writable:!0,value:e})}},u=function(a){var e=0;return function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}}},v=function(){v=function(){};r.Symbol||(r.Symbol=w)},x=function(a,e){this.l=a;n(this,"description",{configurable:!0,writable:!0,value:e})};x.prototype.toString=function(){return this.l};
var w=function(){function a(b){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new x("jscomp_symbol_"+(b||"")+"_"+e++,b)}var e=0;return a}(),z=function(){v();var a=r.Symbol.iterator;a||(a=r.Symbol.iterator=r.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&n(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return y(u(this))}});z=function(){}},y=function(a){z();a={next:a};a[r.Symbol.iterator]=function(){return this};return a},A=function(a){var e=
"undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return e?e.call(a):{next:u(a)}},B=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)};
t("WeakMap",function(a){function e(){}function b(c){var f=typeof c;return"object"===f&&null!==c||"function"===f}function h(c){if(!B(c,k)){var f=new e;n(c,k,{value:f})}}function g(c){var f=Object[c];f&&(Object[c]=function(l){if(l instanceof e)return l;h(l);return f(l)})}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),f=Object.seal({}),l=new a([[c,2],[f,3]]);if(2!=l.get(c)||3!=l.get(f))return!1;l.delete(c);l.set(f,4);return!l.has(c)&&4==l.get(f)}catch(q){return!1}}())return a;var k=
"$jscomp_hidden_"+Math.random();g("freeze");g("preventExtensions");g("seal");var m=0,d=function(c){this.f=(m+=Math.random()+1).toString();if(c){c=A(c);for(var f;!(f=c.next()).done;)f=f.value,this.set(f[0],f[1])}};d.prototype.set=function(c,f){if(!b(c))throw Error("Invalid WeakMap key");h(c);if(!B(c,k))throw Error("WeakMap key fail: "+c);c[k][this.f]=f;return this};d.prototype.get=function(c){return b(c)&&B(c,k)?c[k][this.f]:void 0};d.prototype.has=function(c){return b(c)&&B(c,k)&&B(c[k],this.f)};
d.prototype.delete=function(c){return b(c)&&B(c,k)&&B(c[k],this.f)?delete c[k][this.f]:!1};return d});
t("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var d=Object.seal({x:4}),c=new a(A([[d,"s"]]));if("s"!=c.get(d)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var f=c.entries(),l=f.next();if(l.done||l.value[0]!=d||"s"!=l.value[1])return!1;l=f.next();return l.done||4!=l.value[0].x||"t"!=l.value[1]||!f.next().done?!1:!0}catch(q){return!1}}())return a;z();var e=new WeakMap,b=function(d){this.c={};this.a=
k();this.size=0;if(d){d=A(d);for(var c;!(c=d.next()).done;)c=c.value,this.set(c[0],c[1])}};b.prototype.set=function(d,c){d=0===d?0:d;var f=h(this,d);f.list||(f.list=this.c[f.id]=[]);f.entry?f.entry.value=c:(f.entry={next:this.a,previous:this.a.previous,head:this.a,key:d,value:c},f.list.push(f.entry),this.a.previous.next=f.entry,this.a.previous=f.entry,this.size++);return this};b.prototype.delete=function(d){d=h(this,d);return d.entry&&d.list?(d.list.splice(d.index,1),d.list.length||delete this.c[d.id],
d.entry.previous.next=d.entry.next,d.entry.next.previous=d.entry.previous,d.entry.head=null,this.size--,!0):!1};b.prototype.clear=function(){this.c={};this.a=this.a.previous=k();this.size=0};b.prototype.has=function(d){return!!h(this,d).entry};b.prototype.get=function(d){return(d=h(this,d).entry)&&d.value};b.prototype.entries=function(){return g(this,function(d){return[d.key,d.value]})};b.prototype.keys=function(){return g(this,function(d){return d.key})};b.prototype.values=function(){return g(this,
function(d){return d.value})};b.prototype.forEach=function(d,c){for(var f=this.entries(),l;!(l=f.next()).done;)l=l.value,d.call(c,l[1],l[0],this)};b.prototype[Symbol.iterator]=b.prototype.entries;var h=function(d,c){var f=c&&typeof c;"object"==f||"function"==f?e.has(c)?f=e.get(c):(f=""+ ++m,e.set(c,f)):f="p_"+c;var l=d.c[f];if(l&&B(d.c,f))for(d=0;d<l.length;d++){var q=l[d];if(c!==c&&q.key!==q.key||c===q.key)return{id:f,list:l,index:d,entry:q}}return{id:f,list:l,index:-1,entry:void 0}},g=function(d,
c){var f=d.a;return y(function(){if(f){for(;f.head!=d.a;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:c(f)};f=null}return{done:!0,value:void 0}})},k=function(){var d={};return d.previous=d.next=d.head=d},m=0;return b});
var C=function(){},D=function(a,e,b){return a.call.apply(a.bind,arguments)},E=function(a,e,b){if(!a)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var g=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(g,h);return a.apply(e,g)}}return function(){return a.apply(e,arguments)}},F=function(a,e,b){F=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?D:E;return F.apply(null,arguments)},G=function(a,
e){function b(){}b.prototype=e.prototype;a.prototype=new b;a.prototype.constructor=a};var H=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,H);else{var e=Error().stack;e&&(this.stack=e)}a&&(this.message=String(a))};G(H,Error);H.prototype.name="CustomError";var I=function(a,e){a=a.split("%s");for(var b="",h=a.length-1,g=0;g<h;g++)b+=a[g]+(g<e.length?e[g]:"%s");H.call(this,b+a[h])};G(I,H);I.prototype.name="AssertionError";var J=function(a,e,b){if(!a){var h="Assertion failed";if(e){h+=": "+e;var g=Array.prototype.slice.call(arguments,2)}throw new I(""+h,g||[]);}return a};var K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),L=function(a,e){for(var b,h,g=1;g<arguments.length;g++){h=arguments[g];for(b in h)a[b]=h[b];for(var k=0;k<K.length;k++)b=K[k],Object.prototype.hasOwnProperty.call(h,b)&&(a[b]=h[b])}};var M=function(){this.h=""};M.prototype.toString=function(){return"SafeScript{"+this.h+"}"};M.prototype.b=function(a){this.h=a};(new M).b("");var N=function(){this.j=""};N.prototype.toString=function(){return"SafeStyle{"+this.j+"}"};N.prototype.b=function(a){this.j=a};(new N).b("");var O=function(){this.i=""};O.prototype.toString=function(){return"SafeStyleSheet{"+this.i+"}"};O.prototype.b=function(a){this.i=a};(new O).b("");var P=function(){this.g=""};P.prototype.toString=function(){return"SafeHtml{"+this.g+"}"};P.prototype.b=function(a){this.g=a};(new P).b("<!DOCTYPE html>");(new P).b("");(new P).b("<br>");var Q=function(a,e){var b=new FileReader;b.onloadend=function(){b.result&&e(b.result)};var h=new XMLHttpRequest;h.open("GET",a+"=s1200-rw");h.responseType="blob";h.onload=function(){4==h.readyState&&b.readAsDataURL(J(h.response))};h.send()},T=function(){R(function(a){a.length?chrome.storage.local.clear(function(){chrome.storage.sync.get("lastId",function(e){var b=e.lastId&&e.lastId.id||0;S(b);var h=a[b]||a[0];h.image?Q(h.image,function(g){chrome.storage.local.set({assetCount:a.length,currentAsset:{id:b,
image:g,info:h},nextAsset:{}})}):console.log("Initialization failed, no image found.")})}):console.log("Asset data is empty.")})},R=function(a){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState){var b=JSON.parse(e.responseText);a(b)}};e.open("GET","https://www.gstatic.com/culturalinstitute/tabext/imax_2_1.json");try{e.send()}catch(b){console.log("Something went wrong. Couldn't load asset data.")}},S=function(a){var e={};e.lastId={id:a,timestamp:Date.now()};chrome.storage.sync.set(e,
C)},U={showAppsButton:!1,showDefaultTabLink:!1,showTopSitesButton:!0,turnoverModeDaily:!0},V=function(a){chrome.storage.sync.get("settings",function(e){var b={settings:U};L(b,e);a(b.settings)})};(function(){var a=["page","browser_action"],e=["chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/index_compiled.html"],b=function(g,k,m){chrome.contextMenus.create({checked:g[k],contexts:a,documentUrlPatterns:e,id:k,parentId:m,title:chrome.i18n.getMessage(k),type:"radio"})},h=new Map;chrome.runtime.onMessage.addListener(F(function(g,k,m){if(void 0!==g.newTab){var d=h.get(k.tab.id);"number"!==typeof d&&h.set(k.tab.id,g.newTab);m(d)}else void 0!==g.updateTab?h.set(k.tab.id,g.updateTab):
void 0!==g.settingsUpdate&&"background"!=g.initiator&&(g=g.settingsUpdate,chrome.contextMenus.update("turnoverModeDaily",{checked:g.turnoverModeDaily}),chrome.contextMenus.update("turnoverModeAlways",{checked:g.turnoverModeAlways}))},this));chrome.tabs.onRemoved.addListener(function(g){h.delete(g.id)});chrome.contextMenus.onClicked.addListener(function(g){g.menuItemId&&V(function(k){if("root"==g.parentMenuItemId){var m="turnoverModeDaily"==g.menuItemId&&g.checked;k.turnoverModeDaily=m;k.turnoverModeAlways=
!m}else k[g.menuItemId]=g.checked;m={};m.settings=k;chrome.storage.sync.set(m,C);m={};m.settingsUpdate=k;m.initiator="background";chrome.runtime.sendMessage(m)})});chrome.browserAction.onClicked.addListener(function(){chrome.tabs.create({url:"https://artsandculture.google.com?utm_source=chrome_extension&utm_medium=default_link&utm_campaign=chrome_extension_2"})});chrome.runtime.onInstalled.addListener(F(function(){T();V(function(g){chrome.contextMenus.create({contexts:a,documentUrlPatterns:e,id:"root",
title:chrome.i18n.getMessage("turnoverGroup")});b(g,"turnoverModeDaily","root");b(g,"turnoverModeAlways","root")})},this))})();