!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n;r.r(t),function(e){e[e.Left=37]="Left",e[e.Up=38]="Up",e[e.Right=39]="Right",e[e.Down=40]="Down"}(n||(n={}));var o=n,i=function(e){var t=this;this.focusIn=function(e){t.selectedNode=e.target,t.radios.forEach((function(t){t!==e.target&&(t.tabIndex=-1,t.setAttribute("aria-checked","false"))})),t.selectedNode.tabIndex=0,t.selectedNode.setAttribute("aria-checked","true"),t.selectedNode.focus()},this.handleKeyboardPress=function(e){console.log(e);var t=e.target;switch(e.keyCode){case o.Left:case o.Up:if(t.previousElementSibling&&"radio"===t.previousElementSibling.getAttribute("role"))t.previousElementSibling.focus();else{var r=t.parentNode.querySelectorAll('[role="radio"]');r[r.length-1].focus()}break;case o.Right:case o.Down:t.nextElementSibling?t.nextElementSibling.focus():t.parentNode.querySelector('[role="radio"]').focus()}},this.radios=[],this.node=e;for(var r=0,n=this.node.querySelectorAll('[role="radio"]');r<n.length;r++){var i=n[r];i.tabIndex=-1,i.addEventListener("focusin",this.focusIn),i.addEventListener("keydown",this.handleKeyboardPress),this.radios.push(i)}this.radios.length>0&&(this.radios[0].tabIndex=0)},a=function(){this.a11yRadioGroups=[];for(var e=0,t=document.querySelectorAll('[role="radiogroup"]');e<t.length;e++){var r=t[e];this.a11yRadioGroups.push(new i(r))}};t.default=a;window.addEventListener("DOMContentLoaded",(function(){window.a11yRadioUtil=window.a11yRadioUtil||new a}))}]);