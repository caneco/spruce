!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.spruce=e()}(this,function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var n=function(t){return null==t},r=function(t,e){return Object.keys(t).forEach(function(i){n(t[i])||Object.getPrototypeOf(t[i])!==Object.prototype||(t[i]=r(t[i],e))}),new Proxy(t,{get:function(t,n){return e.hasOwnProperty("get")&&e.get(n),t[n]},set:function(t,i,s){var o=t[i];return n(s)||"object"!=typeof s||(s=r(s,e)),e.set(t,i,t[i]=s,o),!0}})},i={options:{globalStoreVariable:!1},events:{watchers:{},events:{},on:function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},off:function(t,e){this.events[t]=this.events[t].filter(function(t){return t!==e})},emit:function(t,e){void 0===e&&(e={}),this.events[t]&&this.events[t].forEach(function(t){t(e)}),window.dispatchEvent(new CustomEvent("spruce:"+t,{detail:e,bubbles:!0}))},watch:function(t,e){this.watchers[t]||(this.watchers[t]=[]),this.watchers[t].push(e)},runWatchers:function(t,e,n,r){var i=this;if(i.watchers[n])return i.watchers[n].forEach(function(t){return t(r,e[n])});Object.keys(i.watchers).filter(function(t){return t.includes(".")}).forEach(function(s){var o=s.split(".");n===o[o.length-1]&&o.reduce(function(t,o){return(t[n]===e[n]||Object.is(e,t))&&i.watchers[s].forEach(function(t){return t(r,e[n])}),t[o]},t)})}},stores:{},subscribers:[],start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){t.emit("init"),document.querySelectorAll("[x-subscribe]").forEach(function(t){t.setAttribute("x-init",function(t){var e="$store = Spruce.subscribe($el)";return t.hasAttribute("x-init")&&(e=e+"; "+t.getAttribute("x-init")),e}(t)),t.removeAttribute("x-subscribe")}),t.stores=r(t.stores,{set:function(e,n,r,i){t.events.runWatchers(t.stores,e,n,i),t.updateSubscribers(n,r)}}),t.options.globalStoreVariable&&(document.querySelectorAll("[x-data]").forEach(function(e){t.subscribers.includes(e)||t.subscribers.push(e)}),window.$store=t.stores)})}catch(t){return Promise.reject(t)}},store:function(t,e){return this.stores[t]||(this.stores[t]=e),this.stores[t]},subscribe:function(t){return this.subscribers.push(t),this.stores},updateSubscribers:function(t,e){this.subscribers.forEach(function(t){void 0!==t.__x&&t.__x.updateElements(t)})},config:function(t){void 0===t&&(t={}),this.options=Object.assign(this.options,t)},on:function(t,e){this.events.on(t,e)},off:function(t,e){this.events.off(t,e)},emit:function(n,r){void 0===r&&(r={}),this.events.emit(n,function(n){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach(function(e){t(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})}return n}({},r,{store:this.stores}))},watch:function(t,e){this.events.watch(t,e)}},s=window.deferLoadingAlpine||function(t){t()};return window.deferLoadingAlpine=function(t){window.Spruce=i,window.Spruce.start(),s(t)},i});
//# sourceMappingURL=spruce.umd.js.map
