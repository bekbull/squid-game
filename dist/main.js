(()=>{var e={993:function(e,t,n){var o,r,i,a;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}e=n.nmd(e),a=function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=(o(n(1)),n(6)),a=o(i),c=o(n(7)),s=o(n(8)),u=o(n(9)),l=o(n(10)),d=o(n(11)),f=o(n(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return p=(0,d.default)(p,b),(0,l.default)(p,b.once),p},y=function(){p=(0,f.default)(),v()};e.exports={init:function(e){b=r(b,e),p=(0,f.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,l.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",y),p)},refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&y.call(e)==s}(e))return a;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=d.test(e);return o||f.test(e)?p(e.slice(2),o?2:8):l.test(e)?a:+e}var r="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)},i="Expected a function",a=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,v=m||b||Function("return this")(),y=Object.prototype.toString,g=Math.max,h=Math.min,w=function(){return v.Date.now()};e.exports=function(e,t,r){var a=!0,c=!0;if("function"!=typeof e)throw new TypeError(i);return n(r)&&(a="leading"in r?!!r.leading:a,c="trailing"in r?!!r.trailing:c),function(e,t,r){function a(t){var n=f,o=p;return f=p=void 0,k=t,b=e.apply(o,n)}function c(e){return k=e,v=setTimeout(u,t),x?a(e):b}function s(e){var n=e-y;return void 0===y||n>=t||n<0||E&&e-k>=m}function u(){var e=w();return s(e)?l(e):void(v=setTimeout(u,function(e){var n=t-(e-y);return E?h(n,m-(e-k)):n}(e)))}function l(e){return v=void 0,S&&f?a(e):(f=p=void 0,b)}function d(){var e=w(),n=s(e);if(f=arguments,p=this,y=e,n){if(void 0===v)return c(y);if(E)return v=setTimeout(u,t),a(y)}return void 0===v&&(v=setTimeout(u,t)),b}var f,p,m,b,v,y,k=0,x=!1,E=!1,S=!0;if("function"!=typeof e)throw new TypeError(i);return t=o(t)||0,n(r)&&(x=!!r.leading,m=(E="maxWait"in r)?g(o(r.maxWait)||0,t):m,S="trailing"in r?!!r.trailing:S),d.cancel=function(){void 0!==v&&clearTimeout(v),k=0,f=y=p=v=void 0},d.flush=function(){return void 0===v?b:l(w())},d}(e,t,{leading:a,maxWait:t,trailing:c})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":r(e))}(e)&&v.call(e)==a}(e))return i;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var o=l.test(e);return o||d.test(e)?f(e.slice(2),o?2:8):u.test(e)?i:+e}var r="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)},i=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,p="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,b=p||m||Function("return this")(),v=Object.prototype.toString,y=Math.max,g=Math.min,h=function(){return b.Date.now()};e.exports=function(e,t,r){function i(t){var n=d,o=f;return d=f=void 0,w=t,m=e.apply(o,n)}function a(e){return w=e,b=setTimeout(s,t),k?i(e):m}function c(e){var n=e-v;return void 0===v||n>=t||n<0||x&&e-w>=p}function s(){var e=h();return c(e)?u(e):void(b=setTimeout(s,function(e){var n=t-(e-v);return x?g(n,p-(e-w)):n}(e)))}function u(e){return b=void 0,E&&d?i(e):(d=f=void 0,m)}function l(){var e=h(),n=c(e);if(d=arguments,f=this,v=e,n){if(void 0===b)return a(v);if(x)return b=setTimeout(s,t),i(v)}return void 0===b&&(b=setTimeout(s,t)),m}var d,f,p,m,b,v,w=0,k=!1,x=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=o(t)||0,n(r)&&(k=!!r.leading,p=(x="maxWait"in r)?y(o(r.maxWait)||0,t):p,E="trailing"in r?!!r.trailing:E),l.cancel=function(){void 0!==b&&clearTimeout(b),w=0,d=v=f=b=void 0},l.flush=function(){return void 0===b?m:u(h())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return i()}))}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var n=window.document,a=new(o())(r);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!r.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!a.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,r){!function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")}(e,o+n,t)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(12));t.default=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(13));t.default=function(e,t){var n=0,r=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(r=t),n+r}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])},"object"==c(t)&&"object"==c(e)?e.exports=a():(r=[],void 0===(i="function"==typeof(o=a)?o.apply(t,r):o)||(e.exports=i))},184:(e,t,n)=>{"use strict";e.exports=n.p+"f8104668ddc9aa330cc0.svg"},789:(e,t,n)=>{"use strict";e.exports=n.p+"ad3ac2624e2000c0f049.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="",(()=>{"use strict";var e=n(993),t=n.n(e),o=n(789),r=n(184);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}t().init(),document.querySelectorAll(".q__t-b-wrapper").forEach((function(e){e.addEventListener("click",(function(t){var n=document.querySelector(".q__t-b-wrapper.active");n&&n!==e&&(n.classList.toggle("active"),n.nextElementSibling.style.maxHeight=0,n.parentElement.style.backgroundColor="#FFF",n.parentElement.style.color="#000",n.children[1].style.backgroundColor="#F9025D",n.children[1].children[0].setAttribute("src",o)),e.classList.toggle("active");var i=e.nextElementSibling;e.classList.contains("active")?(i.style.maxHeight=i.scrollHeight+"px",e.parentElement.style.backgroundColor="#F9025D",e.parentElement.style.color="#FFF",e.children[1].style.backgroundColor="#FFF",e.children[1].children[0].setAttribute("src",r)):(e.parentElement.style.backgroundColor="#FFF",e.parentElement.style.color="#000",e.children[1].style.backgroundColor="#F9025D",e.children[1].children[0].setAttribute("src",o),i.style.maxHeight=0)}))})),$(".scrollTo").click((function(){var e=$(this).attr("href");if($(e).length){var t=$(e).offset().top;$("html,body").animate({scrollTop:t-20},500)}return!1})),function(){var e=document.getElementById("slider");console.log(e);var t=document.querySelector(".slider-content");console.log(t);var n=document.querySelector(".slider-content-wrapper"),o=document.querySelectorAll(".slider-content__item"),r=m("div","slider-content__controls"),a=null,c=null,s=null,u={offset:0,position:{current:0,min:0,max:o.length-1},intervalSpeed:2e3,update:function(e){this.position.current=e,this.offset=-e},reset:function(){this.position.current=0,this.offset=0}},l={buttonsEnabled:!1,dotsEnabled:!1,prevButtonDisabled:!0,nextButtonDisabled:!1};function d(){var e=u.position,t=e.current,n=e.min,o=e.max;l.prevButtonDisabled=!(t>n),l.nextButtonDisabled=!(t<o)}function f(e){u.update(e),d(),p()}function p(){var e,t,o=l.prevButtonDisabled,r=l.nextButtonDisabled,d=[{element:c,className:"d-none",disabled:o},{element:s,className:"d-none",disabled:r}];l.buttonsEnabled&&(d=[].concat(function(e){if(Array.isArray(e))return i(e)}(t=d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{element:null,className:"disabled",disabled:o},{element:null,className:"disabled",disabled:r}])),(e=d)&&e.forEach((function(e){var t=e.element,n=e.className,o=e.disabled;t?o?t.classList.add(n):t.classList.remove(n):console.log("Error: function setClass(): element = ",t)})),n.style.transform="translateX(".concat(100*u.offset,"%)"),l.dotsEnabled&&(document.querySelector(".dot--active")&&document.querySelector(".dot--active").classList.remove("dot--active"),a.children[u.position.current].classList.add("dot--active"))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=document.createElement(e);return t&&(o.className=t),n&&(o.innerHTML=n),o}return{init:function(i){u.intervalSpeed;var b=u.position;u.offset,e&&t&&n&&o?(i&&i.intervalSpeed&&i.intervalSpeed,i&&i.currentItem&&parseInt(i.currentItem)>=b.min&&parseInt(i.currentItem)<=b.max&&(b.current=i.currentItem,i.currentItem),i&&i.buttons&&(l.buttonsEnabled=!0),i&&i.dots&&(l.dotsEnabled=!0),d(),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function n(){var e=n("M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"),t=n("M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#fff",n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 256 512");var o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),o.setAttribute("d",e),n.appendChild(o),n}(c=m("div","prev-arrow d-none")).append(e),c.addEventListener("click",(function(){return f(u.position.current-1)})),(s=m("div","next-arrow")).append(t),s.addEventListener("click",(function(){return f(u.position.current+1)})),r.append(c,s)}function o(){a=m("div","dots");for(var e=function(e){var t=document.createElement("div");t.className="dot",t.addEventListener("click",(function(){f(e)})),a.append(t)},t=0;t<u.position.max+1;t++)e(t);r.append(a)}t.append(r),n(),e&&o()}(l.dotsEnabled,l.buttonsEnabled),p()):console.log("Разметка слайдера задана неверно. Проверьте наличие всех необходимых классов 'slider/slider-content/slider-wrapper/slider-content__item'")}}}().init({currentItem:0,buttons:!0,dots:!0}),document.querySelectorAll(".whitePaper-btn")[0].addEventListener("click",(function(e){navigator.clipboard.writeText("0xf82f0c7fca2a0687b177e55bb92e1017e5369fe3").then((function(e){return console.log("A contact address is copied")})).catch((function(e){return console.log("Something went wrong")})),e.target.innerHTML="A contact address is copied",setTimeout((function(){e.target.innerHTML="Copy a contact address"}),3e3)}))})()})();