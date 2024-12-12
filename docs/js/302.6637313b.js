"use strict";(self["webpackChunkgriffin_creative_studio"]=self["webpackChunkgriffin_creative_studio"]||[]).push([[302],{7554:function(e,t,n){n.d(t,{b:function(){return a},q:function(){return r}});var i=n(3338),s=n(5524);function a(){const e=(0,i.Oz)();return(0,i.zN)(e)[s.$c.value]}function r(e){const t=(0,i.Oz)();return`/griffin-creative-studio-dist/config-assets/detail-view/card-${t}/${e}`}},1849:function(e,t,n){n.d(t,{A:function(){return u}});var i=n(6768),s=n(4232);function a(e,t,n,a,r,o){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-page-footer",`theme-${e.currentLangId}`])},t[0]||(t[0]=[(0,i.Lk)("div",{class:"footer-box"},[(0,i.Lk)("div",{class:"left-footer"},"Copyright © Griffin Creative Studio 2024. All rights reserved."),(0,i.Lk)("div",{class:"right-footer"},"Based in Nanjing China")],-1)]),2)}var r=n(5524),o=(0,i.pM)({name:"PageFooter",components:{},props:{},setup(){return{currentLangId:r.$c}},data:()=>({}),computed:{},watch:{},methods:{}}),c=n(1241);const l=(0,c.A)(o,[["render",a],["__scopeId","data-v-7709dd7a"]]);var u=l},1663:function(e,t,n){n.d(t,{A:function(){return E}});var i=n(6768),s=n(4232);const a={class:"header-box"},r=["src"],o={class:"header-right"};function c(e,t,n,c,l,u){const d=(0,i.g2)("lang-switcher");return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-page-top-header",[{"is-show-left":e.isShowLeft},`theme-${e.currentLangId}`]]),onMousewheel:t[1]||(t[1]=(...t)=>e.onMouseWheel&&e.onMouseWheel(...t))},[(0,i.Lk)("div",a,[e.isShowLeft?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"header-left",onClick:t[0]||(t[0]=(...t)=>e.onClickLeft&&e.onClickLeft(...t))},[(0,i.Lk)("img",{class:"img-logo",src:e.logoSrc,alt:"logo"},null,8,r),t[2]||(t[2]=(0,i.Lk)("div",{class:"site-title"},"Griffin Creative Studio",-1))])):(0,i.Q3)("",!0),(0,i.Lk)("div",o,[(0,i.bF)(d)])])],34)}n(4114);const l={class:"lang-switcher"},u={class:"switch-option-box"},d=["onClick"],g={key:0,class:"option-inner-text"},p={class:"option-outer-text"};function v(e,t,n,a,r,o){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-lang-switcher",`lang-${e.currentLangId}`])},[(0,i.Lk)("div",l,[t[0]||(t[0]=(0,i.Lk)("div",{class:"switch-option-cursor"},null,-1)),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.langList,((t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["switch-option",{"is-active":e.currentLangId===t.id}]),key:`lang-${t.id}-${n}`,onClick:n=>e.onChangeCurrentLangId(t.id)},[e.currentLangId===t.id?((0,i.uX)(),(0,i.CE)("div",g,(0,s.v_)(t.label),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",p,(0,s.v_)(t.label),1)],10,d)))),128))])])],2)}var m=n(5524),f=(0,i.pM)({name:"LangSwitcher",components:{},props:{},setup(){return{langList:m.L1,currentLangId:m.$c}},data:()=>({}),computed:{},watch:{},methods:{onChangeCurrentLangId(e){m.$c.value=e,console.log("langId",e,m.$c.value)}}}),C=n(1241);const h=(0,C.A)(f,[["render",v],["__scopeId","data-v-79a50bea"]]);var L=h,k=n(3338),I=n(7554),b=(0,i.pM)({name:"PageTopHeader",components:{LangSwitcher:L},props:{isShowLeft:{type:Boolean,default:()=>!0}},setup(){return{currentLangId:m.$c}},data:()=>({}),computed:{logoSrc(){return(0,I.q)((0,k.yU)()?.appScope.logo)}},methods:{onClickLeft(){this.$router.push({path:"/"})},onMouseWheel(e){this.$emit("mouse-wheel",e)}}});const w=(0,C.A)(b,[["render",c],["__scopeId","data-v-8092a282"]]);var E=w},3831:function(e,t,n){n.d(t,{A:function(){return u}});var i=n(6768),s=n(4232);const a={key:0,class:"c-string-div"};function r(e,t,n,r,o,c){return e.contentList.length?((0,i.uX)(),(0,i.CE)("div",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.contentList,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,s.C4)(["string-div-part",`part-${t+1}`])},(0,s.v_)(e),3)))),128))])):(0,i.Q3)("",!0)}var o=(0,i.pM)({name:"StringDiv",components:{},props:{divContent:{type:String,default:()=>""}},data:()=>({}),computed:{contentList(){return this.divContent?this.divContent.split("\n"):[]}}}),c=n(1241);const l=(0,c.A)(o,[["render",r],["__scopeId","data-v-381c2678"]]);var u=l},2302:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var i=n(6768);const s={class:"c-detail-view"};function a(e,t,n,a,r,o){const c=(0,i.g2)("page-top-header"),l=(0,i.g2)("detail-banner"),u=(0,i.g2)("article-info"),d=(0,i.g2)("page-footer");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(c),(0,i.bF)(l),(0,i.bF)(u),(0,i.bF)(d)])}var r=n(1663);const o={key:0,class:"c-detail-banner"},c={class:"banner-list"},l=["src"];function u(e,t,n,s,a,r){return e.bannerList&&e.bannerList.length?((0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.bannerList,((t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:"banner-one",key:n},[(0,i.Lk)("img",{class:"banner-img",src:e.getBannerSrcFrom(t),alt:"banner"},null,8,l)])))),128))])])):(0,i.Q3)("",!0)}var d=n(3338),g=n(7554),p=(0,i.pM)({name:"DetailBanner",components:{},props:{},setup(){return{}},data:()=>({}),computed:{bannerList(){const e=(0,d.NZ)()?.detailView;return console.log("bannderList",e?.banner),e&&e.banner||[]}},watch:{},methods:{getBannerSrcFrom(e){return(0,g.q)(e)}}}),v=n(1241);const m=(0,v.A)(p,[["render",u],["__scopeId","data-v-3d1cefce"]]);var f=m,C=n(1849);const h={class:"c-article-info"},L={class:"article-info-main"},k={class:"article-content"},I={class:"article-content-right"},b={key:0,class:"img-list"},w=["src"],E={key:0,class:"img-article-main-box"},X=["src"],F={key:0,class:"img-below-article-box"},_={class:"img-list"},y=["src"],A={key:1,class:"img-article-below-box"},$=["src"];function S(e,t,n,s,a,r){const o=(0,i.g2)("string-div");return(0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("div",L,[(0,i.bF)(o,{class:"article-title","div-content":e.assetConfig.title},null,8,["div-content"]),(0,i.Lk)("div",k,[(0,i.Lk)("div",I,[(0,i.bF)(o,{class:"article-content","div-content":e.assetConfig.description},null,8,["div-content"]),e.assetConfig.articleImgList&&e.assetConfig.articleImgList.length?((0,i.uX)(),(0,i.CE)("div",b,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{class:"img-src",key:t+"-"+n,src:e.getDetailViewImgFrom(t),alt:"img-src"},null,8,w)))),128))])):(0,i.Q3)("",!0)])]),e.assetConfig.articleMainImgList&&e.assetConfig.articleMainImgList.length?((0,i.uX)(),(0,i.CE)("div",E,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleMainImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{key:t+"-"+n,src:e.getDetailViewImgFrom(t)},null,8,X)))),128))])):(0,i.Q3)("",!0)]),e.assetConfig.imgList&&e.assetConfig.imgList.length?((0,i.uX)(),(0,i.CE)("div",F,[(0,i.Lk)("div",_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.imgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{class:"img-src",key:t+"-"+n,src:e.getDetailViewImgFrom(t),alt:"img-src"},null,8,y)))),128))])])):(0,i.Q3)("",!0),e.assetConfig.articleBelowImgList&&e.assetConfig.articleBelowImgList.length?((0,i.uX)(),(0,i.CE)("div",A,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleBelowImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{key:t+"-"+n,src:e.getDetailViewImgFrom(t)},null,8,$)))),128))])):(0,i.Q3)("",!0)])}var M=n(3831),D=(0,i.pM)({name:"ArticleInfo",components:{StringDiv:M.A},props:{},setup(){return{getDetailViewImgFrom:g.q}},data:()=>({}),computed:{assetConfig(){return(0,g.b)()}},watch:{},methods:{}});const B=(0,v.A)(D,[["render",S],["__scopeId","data-v-e58e0fd2"]]);var x=B,Q=(0,i.pM)({name:"DetailView",components:{PageTopHeader:r.A,DetailBanner:f,PageFooter:C.A,ArticleInfo:x},props:{},setup(){return{}},data:()=>({}),computed:{},watch:{},methods:{}});const K=(0,v.A)(Q,[["render",a],["__scopeId","data-v-624850ea"]]);var V=K}}]);
//# sourceMappingURL=302.6637313b.js.map