if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const n=e=>s(e,c),o={module:{uri:c},exports:r,require:n};i[c]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"griffin-creative-studio"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/config-assets/detail-view/card-0/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-0/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-0/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-0/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-0/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-0/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-0/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-0/text/en.json",revision:"4427e50384eefe8b74d22db4f22637eb"},{url:"/config-assets/detail-view/card-0/text/jp.json",revision:"397ed232401ee82a376cf59bf3cbbb43"},{url:"/config-assets/detail-view/card-0/text/zh.json",revision:"0ff91b854bba5528837e0e241f0b931e"},{url:"/config-assets/detail-view/card-0/thumb-1/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-0/thumb-1/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-0/thumb-1/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-0/thumb-1/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-0/thumb-1/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-0/thumb-1/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-0/thumb-1/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-0/thumb-1/markdown/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-0/thumb-1/markdown/en.md",revision:"7a0afc50c19d49e607da9aa9bc421ac7"},{url:"/config-assets/detail-view/card-0/thumb-1/text/en.json",revision:"4326ad6c090f6a314eb472c384277737"},{url:"/config-assets/detail-view/card-0/thumb-1/text/jp.json",revision:"a68ae3ff682fbe11a43fd11811632ba1"},{url:"/config-assets/detail-view/card-0/thumb-1/text/zh.json",revision:"f8fa185baadd6902069ff554a283ff53"},{url:"/config-assets/detail-view/card-1/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-1/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-1/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-1/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-1/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-1/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-1/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-1/text/en.json",revision:"4427e50384eefe8b74d22db4f22637eb"},{url:"/config-assets/detail-view/card-1/text/jp.json",revision:"397ed232401ee82a376cf59bf3cbbb43"},{url:"/config-assets/detail-view/card-1/text/zh.json",revision:"0ff91b854bba5528837e0e241f0b931e"},{url:"/config-assets/detail-view/card-2/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-2/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-2/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-2/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-2/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-2/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-2/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-2/text/en.json",revision:"4427e50384eefe8b74d22db4f22637eb"},{url:"/config-assets/detail-view/card-2/text/jp.json",revision:"397ed232401ee82a376cf59bf3cbbb43"},{url:"/config-assets/detail-view/card-2/text/zh.json",revision:"0ff91b854bba5528837e0e241f0b931e"},{url:"/config-assets/detail-view/card-3/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-3/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-3/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-3/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-3/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-3/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-3/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-3/text/en.json",revision:"4427e50384eefe8b74d22db4f22637eb"},{url:"/config-assets/detail-view/card-3/text/jp.json",revision:"397ed232401ee82a376cf59bf3cbbb43"},{url:"/config-assets/detail-view/card-3/text/zh.json",revision:"0ff91b854bba5528837e0e241f0b931e"},{url:"/config-assets/detail-view/card-4/banner.jpg",revision:"75d44d0514d41c7d0fe46ac216553553"},{url:"/config-assets/detail-view/card-4/img-1.jpg",revision:"3d1a643209b59e008bd5f3989c909bae"},{url:"/config-assets/detail-view/card-4/img-2.jpg",revision:"8c30d7745457457da0d445524cedf166"},{url:"/config-assets/detail-view/card-4/img-3.jpg",revision:"bf47af9feccc2ab58dc6f883ddd5b329"},{url:"/config-assets/detail-view/card-4/img-4.jpg",revision:"0ee3d988b6ddf53516ca4601ad4897f2"},{url:"/config-assets/detail-view/card-4/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/detail-view/card-4/logo.png",revision:"0723348f922885cd57ab592c7fd427c4"},{url:"/config-assets/detail-view/card-4/text/en.json",revision:"4427e50384eefe8b74d22db4f22637eb"},{url:"/config-assets/detail-view/card-4/text/jp.json",revision:"397ed232401ee82a376cf59bf3cbbb43"},{url:"/config-assets/detail-view/card-4/text/zh.json",revision:"0ff91b854bba5528837e0e241f0b931e"},{url:"/config-assets/home-view/banner.jpg",revision:"82abb8842ab41fba7c94769eda67644e"},{url:"/config-assets/home-view/favico-256.png",revision:"eeedc161ae662bdbec62ec5a47a1cc65"},{url:"/config-assets/home-view/logo-header-en.png",revision:"4df41a32da6a05aaec9067093fcc1dcd"},{url:"/config-assets/home-view/logo-header-jp.png",revision:"862885d595e4f9ebc03ff79516936b6b"},{url:"/config-assets/home-view/logo-header-zh.png",revision:"57827aa8e3f7c753767bf1c48748f60b"},{url:"/config-assets/home-view/logo-jp.png",revision:"3a44b297d68feed1202ecc53d600cd5f"},{url:"/config-assets/home-view/logo-zh-with-title.png",revision:"f78755755ba367195e65f39648952a28"},{url:"/config-assets/home-view/logo-zh.png",revision:"583b4f204345a86cf284159f1d73ce1e"},{url:"/config-assets/home-view/logo.png",revision:"762849b408c778cad3455bf0d502a7fa"},{url:"/config-assets/home-view/pencil-jp.png",revision:"d97364e6910ed91093390ae61500d08c"},{url:"/config-assets/home-view/pencil-zh.png",revision:"2bb4760457cf2b443d9bb7386f46ffa5"},{url:"/config-assets/home-view/pencil.png",revision:"ef738cefad82905474bbcbb532924d4b"},{url:"/config-assets/home-view/text/en.json",revision:"97b7f8a8cd96ba603aeebc3e91c6c1b8"},{url:"/config-assets/home-view/text/jp.json",revision:"698b44398051a7c89a1e9c6de5a78582"},{url:"/config-assets/home-view/text/zh.json",revision:"f11d969e4781f94580decbb9328af1a9"},{url:"/css/34.3560749b.css",revision:null},{url:"/css/903.7b016777.css",revision:null},{url:"/css/app.fe45919a.css",revision:null},{url:"/css/chunk-vendors.595b8d03.css",revision:null},{url:"/img/SourceHanSansCN-Light-Alphabetic.cef40356.svg",revision:null},{url:"/index.html",revision:"da517c77c90b14c2fb4ad9acb12be755"},{url:"/js/34.0283b3ad.js",revision:null},{url:"/js/903.c6bef905.js",revision:null},{url:"/js/app.be3176bd.js",revision:null},{url:"/js/chunk-vendors.b93e29e4.js",revision:null},{url:"/manifest.json",revision:"4792026eb2a3bd8a81671696d8a4923a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
