﻿(window.webpackJsonp=window.webpackJsonp||[]).push([["b-81a1af81a054f6bff8edd4d0775bf1af"],{CQvH:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return A})),n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return _}));var r=n("OcsD"),i=n("H5mD");n("UxAg");var o=function(){function e(e){var t=e.capacity,n=void 0===t?1:t;this._capacity=n,this.clear()}var t=e.prototype;return t.add=function(e){this._cursor>=this._capacity&&(this._cursor=0),this._buffer[this._cursor]=e,this._cursor++,this._size<this._capacity&&this._size++},t.clear=function(){this._buffer=Array(this._capacity),this._cursor=0,this._size=0},t.size=function(){return this._size},t.toArray=function(){return this._buffer},e}(),a=n("DM2o"),u=n("Cz26"),c=n("W9Tc");!function(){var e=new o({capacity:15}),t=new o({capacity:15}),n=new o({capacity:15}),r=new o({capacity:15}),i=null;if(window.addEventListener("mousemove",(function(){if(i){var t=Date.now()-i;t>500&&(t-500<500&&e.add(!1),i=null)}else i=Date.now()}),{capture:!0,passive:!0}),new u.a({timer:1e4}).add((function(){e.add(!0)})),window.addEventListener("touchstart",(function(e){if(e&&e.touches)if(e.touches.length>1)t.add(!1);else{if(1===e.touches.length){var n=e.touches[0];if(0!==n.radiusX&&0!==n.radiusY)return void t.add(!1)}t.add(!0)}}),{capture:!0,passive:!0}),window.addEventListener("click",(function(i){if(i&&i.target){var o=0===i.pageX&&0===i.pageY&&0===i.screenX&&0===i.screenY,u=i.target.getBoundingClientRect(),c=Math.abs(u.width/2+u.left-i.clientX)<2&&Math.abs(u.height/2+u.top-i.clientY)<2;if(o||c){n.add(!0);try{r.add(function e(t){if(t.id)return"#"+t.id;var n=t.tagName.toLowerCase(),r="";t.name&&(r+='[name="'+t.name+'"]');var i="";!r&&t.className&&(i=t.className.split(/ +/g).map((function(e){return"."+e})).join(""));var o="";if(!r)for(var a=0,u=0;u<t.parentNode.children.length;u++){var c=t.parentNode.children[u];if(c.tagName===t.tagName&&a++,t===c){o=":nth-of-type("+a+")";break}}var s=n+r+i+o;return t.parentNode===document.body?"body > "+s:e(t.parentNode)+" > "+s}(i.target)+"—"+c+"—"+o)}catch(e){}}else n.add(!1),r.add(!1);if(n.size()>3){var s=e.toArray().filter((function(e){return e})).length>=Math.round(e.size()/2),l=t.toArray().filter((function(e){return e})).length>=Math.round(t.size()/2),d=n.toArray().filter((function(e){return e})).length>=Math.round(n.size()/2);if(localStorage&&localStorage.getItem){var f=localStorage.getItem("isKeyboardUser1"),y=d&&l&&s,m=document.querySelector(".keyboardUser");m&&(y?(m.style.display="block",m.innerHTML=e.toArray().filter((function(e){return e})).length+"."+t.toArray().filter((function(e){return e})).length+"."+n.toArray().filter((function(e){return e})).length):m.style.display="none"),(y&&null===f||null!==f&&f!==String(y))&&(localStorage.setItem("isKeyboardUser1",y),Object(a.a)("accessibility","is_keyboard_user",y))}}}}),{capture:!0,passive:!0}),Object(c.b)("mvk_show_a11y_box")){var s=window.onDOMReady||function(e){setTimeout(e,5e3)};s&&s((function(){if(document.body&&!document.querySelector(".keyboardUser")){var e=document.createElement("div");e.style.background="rgba(230,0,255,.7)",e.style.position="fixed",e.style.top="3px",e.style.right="3px",e.style.color="#fff",e.style.fontSize="10px",e.style.minWidth="8px",e.style.height="14px",e.style.lineHeight="14px",e.style.textAlign="center",e.style.border="1px solid rgba(255,255,255, 0.2)",e.style.display="none",e.style.zIndex=9999999999,e.innerHTML="K",e.style.padding="0 3px",e.className="keyboardUser";var t=document.createElement("textarea");if(t.style.position="fixed",t.style.opacity=.9,t.style.top=0,t.style.right=0,t.style.bottom=0,t.style.left=0,t.style.width="100%",t.style.padding="10px",t.style.zIndex=9999999,t.style.display="none",document.body.appendChild(t),e.addEventListener("click",(function(){t.innerHTML=r.toArray().join("\n\n"),"none"===t.style.display?t.style.display="block":t.style.display="none"})),document.body.appendChild(e),localStorage&&localStorage.getItem)"true"===localStorage.getItem("isKeyboardUser1")&&(e.style.display="block")}}))}}();var s=38,l=40,d=36,f=35,y=32,m=13,v=27,h=9,p=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","audio","video","[contenteditable]","[tabindex]"];function b(){document.body.classList.add("tabbing")}function g(){return document.body.classList.contains("tabbing")}function w(e){if(i.f&&i.e>8)return!1;if(!e)throw new Error("A11y: No element passed to setFocusTrap");var t=Array.from(e.querySelectorAll(p.join()));if(!(t=t.filter((function(e){return null!==e.offsetParent}))).length)return!1;var n=t[0],r=t[t.length-1],o=k(e,(function(e){var t=e.event,i=e.exit;t.keyCode===h&&(t.shiftKey?document.activeElement===n&&(t.preventDefault(),r.focus()):document.activeElement===r&&(t.preventDefault(),n.focus())),t.keyCode===v&&i()}));return cur.destroy.push((function(){o()})),setTimeout((function(){n.focus()})),o}function A(e,t){void 0===t&&(t={});var n=void 0===t.enableInitialFocus||t.enableInitialFocus;if(i.f&&i.e>8)return!1;if(!e)throw new Error("A11y: No element passed to setMenuNavigation");if(!["menu","menubar"].includes(e.getAttribute("role")))throw new Error('A11y: Element must be `role="menu"` or `role="menubar"`');var r=['[role="menu"]','[role="menubar"]'].join(),o=['[role="menuitem"]','[role="menuitemradio"]','[role="menuitemcheckbox"]'].join(),a=Array.from(e.querySelectorAll(r)),u=Array.from(e.querySelectorAll(o));if(a.forEach((function(e){Array.from(e.querySelectorAll(o)).forEach((function(e){u[u.indexOf(e)]=null}))})),!(u=(u=u.filter((function(e){return e}))).filter((function(e){return null!==e.offsetParent}))).length)return!1;if("menu"===e.getAttribute("role")&&!u.every((function(e){return"-1"===e.getAttribute("tabindex")})))throw new Error('A11y: Every `menuitem` must have `tabindex="-1" attribute`');var c=k(e,(function(e){var t=e.event,n=e.exit,r=document.activeElement,i=u[0],o=u[u.length-1||0],a=u.indexOf(r),c=u[a+1],p=u[a-1];t.keyCode===s&&(p?E(p,t):o&&E(o,t)),t.keyCode===l&&(c?E(c,t):i&&E(i,t)),t.keyCode===d&&i&&E(i,t),t.keyCode===f&&o&&E(o,t),t.keyCode!==y&&t.keyCode!==m||(n(),r.click(),t.preventDefault()),t.keyCode!==v&&t.keyCode!==h||n()}),{onExit:function(){}});return n&&setTimeout((function(){E(u[0])})),c}function x(e){if(!e)throw new Error("A11y: No element passed to expandPopup");if(!e.getAttribute("aria-haspopup"))throw new Error("A11y: No `aria-haspopup` attribute on expanded element");if(null==e.getAttribute("aria-expanded"))throw new Error("A11y: No `aria-expanded` attribute on expanded element");if(null==e.getAttribute("aria-controls"))throw new Error("A11y: No `aria-controls` attribute on expanded element");if(!document.getElementById(e.getAttribute("aria-controls")))throw new Error("A11y: No element that the `aria-controls` refers to. Try to call `expandPopup` _after_ appending a popup");return e.setAttribute("aria-expanded",!0),k(e,(function(e){var t=e.event,n=e.exit;t.keyCode===v&&n()}),{onExit:function(){e.setAttribute("aria-expanded",!1)}})}function _(e,t){var n,r;void 0===t&&(t={});var i=null!=(n=t.startThreshold)?n:10,o=null!=(r=t.ignoreBubbledEvents)&&r;return new Promise((function(t){var n=setTimeout((function(){e.removeEventListener("transitionrun",r),t()}),i),r=function r(i){if(o&&i.target!==i.currentTarget)return!1;clearTimeout(n),e.removeEventListener("transitionrun",r);e.addEventListener("transitionend",(function n(r){if(o&&r.target!==r.currentTarget)return!1;e.removeEventListener("transitionend",n),t()}),!1)};e.addEventListener("transitionrun",r,!1)}))}function E(e,t){t&&(b(),t.preventDefault());var n=!1;null!=e.getAttribute("tabindex")&&(n=!0),n||e.setAttribute("tabindex",0),e.focus(),setTimeout((function(){n||e.removeAttribute("tabindex")}))}function k(e,t,n){void 0===n&&(n={}),e._enteredA11yElementKeyDownHandler&&document.removeEventListener("keydown",e._enteredA11yElementKeyDownHandler);var i=document.activeElement,o=!1;function a(t){if(t&&a.exitIntent&&!1===a.exitIntent(t))t.preventDefault();else if(!o){o=!0;var c=Object(r.gc)(),s=Array.from(e.querySelectorAll(p.join()));document.activeElement&&!s.includes(document.activeElement)||(i&&E(i),Object(r.gc)(c)),document.removeEventListener("keydown",u),n.onExit&&n.onExit()}}function u(e){e.ctrlKey||e.altKey||e.metaKey||t({event:e,exit:a.bind(null,e)})}return document.addEventListener("keydown",u),e._enteredA11yElementKeyDownHandler=u,a}addEvent(window,"keydown",(function(e){e.keyCode===h&&b()}),{passive:!0}),addEvent(window,"mousedown touchstart",(function(){document.body.classList.remove("tabbing")}),{capture:!0,passive:!0}),document._buttonA11yFix||(document._buttonA11yFix=!0,document.addEventListener("keydown",(function(e){e.ctrlKey||e.altKey||e.metaKey||(e.keyCode!==m&&e.keyCode!==y||"button"!==e.target.getAttribute("role")||(e.target.click(),e.preventDefault()),e.keyCode!==y||"checkbox"!==e.target.getAttribute("role")&&"radio"!==e.target.getAttribute("role")||(e.target.click(),e.preventDefault()))})))},Cz26:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(e){var t=e.timer,n=void 0===t?1e3:t,r=e.autostart,i=void 0===r||r;this._list=[],this._timer=n,this._autostart=i}var t=e.prototype;return t._animate=function(e){var t=!1;return function n(){t||requestAnimationFrame((function(){t||(e(),n())}))}(),function(){t=!0}},t.add=function(e,t){var n=(void 0===t?{}:t).id;this.remove(e),n?(this.remove(n),this._list.push({id:n,callback:e})):this._list.push({callback:e}),!this._cancellation&&this._autostart&&this.start()},t.remove=function(e){this._list="function"==typeof e?this._list.filter((function(t){return t.callback!==e})):this._list.filter((function(t){return t.id!==e}))},t.start=function(){var e=this,t=Date.now();return this._cancellation=this._animate((function(){var n=Date.now();t+e._timer<n&&(e._list.forEach((function(n){var r=t;Promise.resolve().then((function(){var t=Date.now()-(r+e._timer);n.callback(Math.floor(t/e._timer)+1)}))})),t=n)})),this._cancellation},t.stop=function(){return!!this._cancellation&&(this._cancellation(),this._list=[],!0)},e}()},Y6JH:function(e,t,n){"use strict";var r=n("+sJP");var i=function(e,t){void 0===t&&(t="");var n,i,o,a,u=e;if(t){var c=Object(r.z)(t);c&&(u=c)}else Object(r.F)(e)&&Object(r.F)(e.icon)&&(u=e.icon);return Object(r.F)(u)||(u={name:e,icon:""}),n={name:u.name,icon:u.icon},i=n.name,o=n.icon,a=Object(r.f)("svgIcon","svgIcon-"+i),{inner:[Wd.wrap(o)],"aria-hidden":"true",class:a,tag:"div"}};t.a=i;window.SVGIcon=i}}]);