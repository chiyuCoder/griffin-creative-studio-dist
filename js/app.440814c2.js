(function(){"use strict";var e={4595:function(e,n,t){t(2241);var r=t(5130),o=t(6768),i=t(4232);function u(e,n,t,r,u,a){const c=(0,o.g2)("global-loading"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(["c-app-view",`theme-${e.currentLangId}`])},[(0,o.bF)(c,{"is-show":e.isShowAppLoading},null,8,["is-show"]),(0,o.bF)(s)],2)}function a(e,n,t,r,i,u){const a=(0,o.g2)("van-loading"),c=(0,o.g2)("van-overlay");return(0,o.uX)(),(0,o.Wv)(c,{class:"c-global-loading",show:e.isShowOverlay},{default:(0,o.k6)((()=>[(0,o.bF)(a,{vertical:!0},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("加载中...")]))),_:1})])),_:1},8,["show"])}var c=(0,o.pM)({name:"GlobalLoading",components:{},props:{isShow:{type:Boolean,default:()=>!1}},setup(){return{}},data:()=>({isShowOverlay:!1}),computed:{},watch:{isShow:{handler(){this.isShowOverlay=this.isShow},immediate:!0}},methods:{}}),s=t(1241);const l=(0,s.A)(c,[["render",a],["__scopeId","data-v-9596f0bc"]]);var f=l,d=t(144);const p=(0,d.KR)(!0);var h=t(5524),v=(0,o.pM)({components:{GlobalLoading:f},setup(){return{isOnLoading:!0,isShowAppLoading:p,currentLangId:h.$c}}});const g=(0,s.A)(v,[["render",u],["__scopeId","data-v-e76b3a80"]]);var m=g,b=t(4458);(0,b.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=t(1387);const w=[{path:"/",name:"home",component:()=>t.e(335).then(t.bind(t,8335))},{path:"/detail",name:"detail",component:()=>t.e(615).then(t.bind(t,8615))}];var k=t(3338),E=(t(8992),t(3949),t(1454),t(4373));const O=E.A.create({});function S(e){return O.get(`/config-assets/text/${e}.json`).then((e=>e.data))}function A(){return Promise.all(h.L1.map((e=>S(e.id)))).then((e=>{const n={};return e.forEach(((e,t)=>{n[h.L1[t].id]=e})),n}))}const C=(0,y.aE)({history:(0,y.Bt)(),routes:w});C.beforeEach(((e,n,t)=>{const r=(0,k.NZ)();r?t():(p.value=!0,A().then((e=>{(0,k.ur)(e),p.value=!1,t()})))}));var _=C,L=t(9814);(0,r.Ef)(m).use(L.Ay$).use(_).mount("#app")},3338:function(e,n,t){t.d(n,{NZ:function(){return u},i$:function(){return a},ur:function(){return i}});var r=t(5524);let o=null;function i(e){o=e}function u(){if(o){const e=(0,r.J8)();return o[e]||null}return null}function a(){return u()}},5524:function(e,n,t){t.d(n,{$c:function(){return i},J8:function(){return u},L1:function(){return o}});var r=t(144);const o=[{id:"en",label:"E"},{id:"zh",label:"华"},{id:"jp",label:"あ"}],i=(0,r.KR)(o[0].id);function u(){return i.value}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{335:"ce4b26c1",615:"d093a335"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{335:"e23e8ec6",615:"4d8c7741"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="griffin-creative-studio:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={335:1,615:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkgriffin_creative_studio"]=self["webpackChunkgriffin_creative_studio"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4595)}));r=t.O(r)})();
//# sourceMappingURL=app.440814c2.js.map