(function(){"use strict";var e={6938:function(e,n,t){t(2241);var r=t(5130),o=t(6768),i=t(4232);function a(e,n,t,r,a,u){const c=(0,o.g2)("global-loading"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",{class:(0,i.C4)(["c-app-view",`theme-${e.currentLangId}`])},[(0,o.bF)(c,{"is-show":e.isShowAppLoading},null,8,["is-show"]),(0,o.bF)(s,{class:"page-dom"})],2)}function u(e,n,t,r,i,a){const u=(0,o.g2)("van-loading"),c=(0,o.g2)("van-overlay");return(0,o.uX)(),(0,o.Wv)(c,{class:"c-global-loading",show:e.isShowOverlay},{default:(0,o.k6)((()=>[(0,o.bF)(u,{vertical:!0},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("加载中...")]))),_:1})])),_:1},8,["show"])}var c=(0,o.pM)({name:"GlobalLoading",components:{},props:{isShow:{type:Boolean,default:()=>!1}},setup(){return{}},data:()=>({isShowOverlay:!1}),computed:{},watch:{isShow:{handler(){this.isShowOverlay=this.isShow},immediate:!0}},methods:{}}),s=t(1241);const l=(0,s.A)(c,[["render",u],["__scopeId","data-v-9596f0bc"]]);var f=l,d=t(144);const h=(0,d.KR)(!0);var p=t(5524),v=(0,o.pM)({components:{GlobalLoading:f},setup(){return{isOnLoading:!0,isShowAppLoading:h,currentLangId:p.$c}}});const g=(0,s.A)(v,[["render",a],["__scopeId","data-v-537ba542"]]);var m=g,b=t(4458);(0,b.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var w=t(1387),y=t(5265);const k=[{path:y.v.home.path,name:"home",component:()=>t.e(196).then(t.bind(t,2196))},{path:y.v.detail.path,name:"detail",component:()=>t.e(8).then(t.bind(t,1008))}];var E=t(3338),O=(t(8992),t(3949),t(1454),t(4373));const S=O.A.create({});function C(e){return S.get(`/config-assets/home-view/text/${e}.json`).then((e=>e.data))}function N(){return Promise.all(p.L1.map((e=>C(e.id)))).then((e=>{const n={};return e.forEach(((e,t)=>{n[p.L1[t].id]=e})),n}))}function A(e,n){return S.get(`/config-assets/detail-view/card-${e}/text/${n}.json`).then((e=>e.data))}function L(e){return Promise.all(p.L1.map((n=>A(e,n.id)))).then((e=>{const n={};return e.forEach(((e,t)=>{n[p.L1[t].id]=e})),n}))}const _=(0,w.aE)({history:(0,w.Bt)(),routes:k});_.beforeEach((async(e,n,t)=>{(0,E.X4)(e.path);const r=(0,E.rM)();if(r||(h.value=!0,await N().then((e=>{h.value=!1,(0,E.el)(e)})).catch((e=>{console.error(e)}))),e.path!==y.v.home.path){if(e.path===y.v.detail.path){const n=parseInt(e.query.index);(0,E.kC)(n);const r=(0,E.zN)(n);if(r)return void t();h.value=!0;const o=await L(n);return h.value=!1,(0,E.om)(n,o),void t()}t()}else t()})),_.afterEach((()=>{const e=document.body.querySelector(".page-dom");e?.scrollIntoView()}));var j=_,x=t(9814);(0,r.Ef)(m).use(x.Ay$).use(j).mount("#app")},3338:function(e,n,t){t.d(n,{NZ:function(){return m},Oz:function(){return s},X4:function(){return l},el:function(){return p},kC:function(){return f},om:function(){return v},rM:function(){return d},yU:function(){return h},zN:function(){return g}});var r=t(5524),o=t(5265);let i="/",a=NaN,u=null;const c={};function s(){return a}function l(e){i=e}function f(e){a=e}function d(){return u}function h(){return u[(0,r.J8)()]}function p(e){u=e}function v(e,n){c[`card-${e}`]=n}function g(e){return c[`card-${e}`]||null}function m(){const e=(0,r.J8)();return i===o.v.home.path&&u?{homeView:u[e].homeView,detailView:null}:i!==o.v.detail.path||isNaN(a)?null:{homeView:u?u[e].homeView:null,detailView:c[`card-${a}`][e]}}},5524:function(e,n,t){t.d(n,{$c:function(){return i},J8:function(){return a},L1:function(){return o}});var r=t(144);const o=[{id:"en",label:"E"},{id:"zh",label:"华"},{id:"jp",label:"あ"}],i=(0,r.KR)(o[0].id);function a(){return i.value}},5265:function(e,n,t){t.d(n,{v:function(){return r}});const r={home:{path:"/"},detail:{path:"/detail"}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{8:"6dee4cc3",196:"874bd806"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{8:"e343a7c9",196:"9ab028d3"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="griffin-creative-studio:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={8:1,196:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkgriffin_creative_studio"]=self["webpackChunkgriffin_creative_studio"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(6938)}));r=t.O(r)})();