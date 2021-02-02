!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["badenweiler-ui"]=t(require("react")):e["badenweiler-ui"]=t(e.react)}(this,(function(e){return(()=>{"use strict";var t={212:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(297));n(811),t.default=function(e){var t=e.title;return o.default.createElement("button",{className:"UI-Button"},t)}},755:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(297));n(110),t.default=function(e){return o.default.createElement("header",{id:"header",style:e.styles},o.default.createElement("nav",{id:"Nav",className:"navMenu"},o.default.createElement("ul",{id:"leftNav"},o.default.createElement("li",null,e.title),o.default.createElement("li",null,e.buttonLeft)),o.default.createElement("ul",{id:"rightNav"},o.default.createElement("li",null,e.buttonRightOne),o.default.createElement("li",null,e.buttonRightTwo),o.default.createElement("li",null,e.buttonRightThree))))}},820:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalNav=t.Button=void 0;var o=r(n(212));t.Button=o.default;var a=r(n(755));t.HorizontalNav=a.default},310:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".UI-Button {\n    padding: 10px;\n    background: blueviolet;\n    color: white;\n    border-radius: 4px;\n}\n\n.UI-Button:hover {\n    background: blue;\n}",""]);const a=o},800:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n  }\n  \n  li {\n    float: left;\n  }\n  \n  li {\n    display: inline-block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n  \n  /* Change the link color to #111 (black) on hover */\n  /*\n  li:hover {\n    background-color: orange;\n  }\n  */\n\n  .navMenu {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 60px;\n    align-items: center;\n  }",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(379),o=n.n(r),a=n(310);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},110:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(379),o=n.n(r),a=n(800);o()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],u=t.base?l[0]+t.base:l[0],c=n[u]||0,d="".concat(u," ").concat(c);n[u]=c+1;var s=i(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function s(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var a=v++;n=p||(p=u(t)),r=s.bind(null,n,a,!1),o=s.bind(null,n,a,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var u=l(e,t),c=0;c<n.length;c++){var d=i(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=u}}}},297:t=>{t.exports=e}},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(820)})()}));