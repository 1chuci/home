if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),a={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3b6283b1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.47f96455.css",revision:null},{url:"assets/index.6156aef8.js",revision:null},{url:"index.html",revision:"405acd8a851d4215d6767eca3b85ad3d"},{url:"loading/loading.css",revision:"cb89d4d42e09f5011d023e42660305bd"},{url:"loading/loading.min.css",revision:"ad670337926785f74414f7a468a7c090"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"bdeb2b915105f31570a75f04717d4ec3"},{url:"images/icon/72.png",revision:"92b2f2a7e6502b7f741829fb8f5d9c3a"},{url:"images/icon/96.png",revision:"b9f82b92026c095b1beefe14b5db782a"},{url:"images/icon/128.png",revision:"db59290018756c0b56353921e36b2700"},{url:"images/icon/144.png",revision:"25a39aeb3e2dc916c168aacf4a128bed"},{url:"images/icon/192.png",revision:"083848b8070ddaa1484564bb6f8876f3"},{url:"images/icon/512.png",revision:"61317460c2ca3ddcce7067f766f2daa3"},{url:"manifest.webmanifest",revision:"881c23812dbe2b4a6d9c83f65cc7d147"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
