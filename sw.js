if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3cb6b11c.css",revision:"cfb719a006a95a08a445626fbf39c5ea"},{url:"assets/index.3f404c9f.js",revision:"2a2eff75e7b938055bcb218d43ca78c0"},{url:"assets/index.5e3b54a8.js",revision:"ac1500f320082283ca8a613538ba5569"},{url:"assets/index.b94acd94.css",revision:"a68f52561949ea8276aa4e4a2f841a2d"},{url:"assets/registerSW.4c4014ca.js",revision:"46cc2c00aba4e94db68ec2a69ceeec86"},{url:"assets/vendor.05587b37.js",revision:"49bd347869f412ad6d4c6e96be4f0876"},{url:"index.html",revision:"e5c5debe4600438ca302565d2f8aba43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
