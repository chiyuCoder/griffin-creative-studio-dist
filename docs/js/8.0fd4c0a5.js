"use strict";(self["webpackChunkgriffin_creative_studio"]=self["webpackChunkgriffin_creative_studio"]||[]).push([[8],{7970:function(e,t,n){function i(e){return`/griffin-creative-studio-dist/config-assets/home-view/${e}`}n.d(t,{T:function(){return i}})},6898:function(e,t,n){n.d(t,{A:function(){return v}});var i=n(6768),s=n(4232);const a={class:"footer-box"},o={key:0,class:"left-footer"},r={key:1,class:"right-footer"};function c(e,t,n,c,l,u){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-page-footer",`theme-${e.currentLangId}`])},[(0,i.Lk)("div",a,[e.globalConfig&&e.globalConfig.copyRight?((0,i.uX)(),(0,i.CE)("div",o,(0,s.v_)(e.globalConfig.copyRight),1)):(0,i.Q3)("",!0),e.globalConfig&&e.globalConfig.baseIn?((0,i.uX)(),(0,i.CE)("div",r,(0,s.v_)(e.globalConfig.baseIn),1)):(0,i.Q3)("",!0)])],2)}var l=n(5524),u=n(3338),g=(0,i.pM)({name:"PageFooter",components:{},props:{},setup(){return{currentLangId:l.$c}},data:()=>({}),computed:{globalConfig(){const e=(0,u.yU)(),t=e?.appScope;return t}},watch:{},methods:{}}),d=n(1241);const p=(0,d.A)(g,[["render",c],["__scopeId","data-v-63062945"]]);var v=p},1663:function(e,t,n){n.d(t,{A:function(){return E}});var i=n(6768),s=n(4232);const a={class:"header-box"},o=["src"],r={class:"header-right"};function c(e,t,n,c,l,u){const g=(0,i.g2)("lang-switcher");return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-page-top-header",[{"is-show-left":e.isShowLeft},`theme-${e.currentLangId}`]]),onMousewheel:t[1]||(t[1]=(...t)=>e.onMouseWheel&&e.onMouseWheel(...t))},[(0,i.Lk)("div",a,[e.isShowLeft?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"header-left",onClick:t[0]||(t[0]=(...t)=>e.onClickLeft&&e.onClickLeft(...t))},[(0,i.Lk)("img",{class:"img-logo",src:e.logoSrc,alt:"logo"},null,8,o),t[2]||(t[2]=(0,i.Lk)("div",{class:"site-title"},"Griffin Creative Studio",-1))])):(0,i.Q3)("",!0),(0,i.Lk)("div",r,[(0,i.bF)(g)])])],34)}n(4114);const l={class:"lang-switcher"},u={class:"switch-option-box"},g=["onClick"],d={key:0,class:"option-inner-text"},p={class:"option-outer-text"};function v(e,t,n,a,o,r){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["c-lang-switcher",`lang-${e.currentLangId}`])},[(0,i.Lk)("div",l,[t[0]||(t[0]=(0,i.Lk)("div",{class:"switch-option-cursor"},null,-1)),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.langList,((t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["switch-option",{"is-active":e.currentLangId===t.id}]),key:`lang-${t.id}-${n}`,onClick:n=>e.onChangeCurrentLangId(t.id)},[e.currentLangId===t.id?((0,i.uX)(),(0,i.CE)("div",d,(0,s.v_)(t.label),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",p,(0,s.v_)(t.label),1)],10,g)))),128))])])],2)}var f=n(5524),m=(0,i.pM)({name:"LangSwitcher",components:{},props:{},setup(){return{langList:f.L1,currentLangId:f.$c}},data:()=>({}),computed:{},watch:{},methods:{onChangeCurrentLangId(e){f.$c.value=e,console.log("langId",e,f.$c.value)}}}),C=n(1241);const h=(0,C.A)(m,[["render",v],["__scopeId","data-v-79a50bea"]]);var L=h,I=n(3338),k=n(7970),b=(0,i.pM)({name:"PageTopHeader",components:{LangSwitcher:L},props:{isShowLeft:{type:Boolean,default:()=>!0}},setup(){return{currentLangId:f.$c}},data:()=>({}),computed:{logoSrc(){return(0,k.T)((0,I.yU)()?.appScope.logo)}},methods:{onClickLeft(){this.$router.push({path:"/"})},onMouseWheel(e){this.$emit("mouse-wheel",e)}}});const w=(0,C.A)(b,[["render",c],["__scopeId","data-v-8092a282"]]);var E=w},3831:function(e,t,n){n.d(t,{A:function(){return u}});var i=n(6768),s=n(4232);const a={key:0,class:"c-string-div"};function o(e,t,n,o,r,c){return e.contentList.length?((0,i.uX)(),(0,i.CE)("div",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.contentList,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,s.C4)(["string-div-part",`part-${t+1}`])},(0,s.v_)(e),3)))),128))])):(0,i.Q3)("",!0)}var r=(0,i.pM)({name:"StringDiv",components:{},props:{divContent:{type:String,default:()=>""}},data:()=>({}),computed:{contentList(){return this.divContent?this.divContent.split("\n"):[]}}}),c=n(1241);const l=(0,c.A)(r,[["render",o],["__scopeId","data-v-381c2678"]]);var u=l},1008:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var i=n(6768);const s={class:"c-detail-view"};function a(e,t,n,a,o,r){const c=(0,i.g2)("page-top-header"),l=(0,i.g2)("detail-banner"),u=(0,i.g2)("article-info"),g=(0,i.g2)("page-footer");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(c),(0,i.bF)(l),(0,i.bF)(u),(0,i.bF)(g)])}var o=n(1663);const r={key:0,class:"c-detail-banner"},c={class:"banner-list"},l=["src"];function u(e,t,n,s,a,o){return e.bannerList&&e.bannerList.length?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.bannerList,((t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:"banner-one",key:n},[(0,i.Lk)("img",{class:"banner-img",src:e.getBannerSrcFrom(t),alt:"banner"},null,8,l)])))),128))])])):(0,i.Q3)("",!0)}var g=n(3338),d=n(5524);function p(){const e=(0,g.Oz)();return(0,g.zN)(e)[d.$c.value]}function v(e){const t=(0,g.Oz)();return`/griffin-creative-studio-dist/config-assets/detail-view/card-${t}/${e}`}var f=(0,i.pM)({name:"DetailBanner",components:{},props:{},setup(){return{}},data:()=>({}),computed:{bannerList(){const e=(0,g.NZ)()?.detailView;return e&&e.banner||[]}},watch:{},methods:{getBannerSrcFrom(e){return v(e)}}}),m=n(1241);const C=(0,m.A)(f,[["render",u],["__scopeId","data-v-3d1cefce"]]);var h=C,L=n(6898);const I={class:"c-article-info"},k={class:"article-info-main"},b={class:"article-content"},w={class:"article-content-right"},E={key:0,class:"img-list"},X=["src"],y={key:0,class:"img-article-main-box"},F=["src"],_={key:0,class:"img-below-article-box"},$={class:"img-list"},A=["src"],S={key:1,class:"img-article-below-box"},M=["src"];function D(e,t,n,s,a,o){const r=(0,i.g2)("string-div");return(0,i.uX)(),(0,i.CE)("div",I,[(0,i.Lk)("div",k,[(0,i.bF)(r,{class:"article-title","div-content":e.assetConfig.title},null,8,["div-content"]),(0,i.Lk)("div",b,[(0,i.Lk)("div",w,[(0,i.bF)(r,{class:"article-content","div-content":e.assetConfig.description},null,8,["div-content"]),e.assetConfig.articleImgList&&e.assetConfig.articleImgList.length?((0,i.uX)(),(0,i.CE)("div",E,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{class:"img-src",key:t+"-"+n,src:e.getDetailViewImgFrom(t),alt:"img-src"},null,8,X)))),128))])):(0,i.Q3)("",!0)])]),e.assetConfig.articleMainImgList&&e.assetConfig.articleMainImgList.length?((0,i.uX)(),(0,i.CE)("div",y,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleMainImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{key:t+"-"+n,src:e.getDetailViewImgFrom(t)},null,8,F)))),128))])):(0,i.Q3)("",!0)]),e.assetConfig.imgList&&e.assetConfig.imgList.length?((0,i.uX)(),(0,i.CE)("div",_,[(0,i.Lk)("div",$,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.imgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{class:"img-src",key:t+"-"+n,src:e.getDetailViewImgFrom(t),alt:"img-src"},null,8,A)))),128))])])):(0,i.Q3)("",!0),e.assetConfig.articleBelowImgList&&e.assetConfig.articleBelowImgList.length?((0,i.uX)(),(0,i.CE)("div",S,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.assetConfig.articleBelowImgList,((t,n)=>((0,i.uX)(),(0,i.CE)("img",{key:t+"-"+n,src:e.getDetailViewImgFrom(t)},null,8,M)))),128))])):(0,i.Q3)("",!0)])}var Q=n(3831),x=(0,i.pM)({name:"ArticleInfo",components:{StringDiv:Q.A},props:{},setup(){return{getDetailViewImgFrom:v}},data:()=>({}),computed:{assetConfig(){return p()}},watch:{},methods:{}});const B=(0,m.A)(x,[["render",D],["__scopeId","data-v-e58e0fd2"]]);var K=B,V=(0,i.pM)({name:"DetailView",components:{PageTopHeader:o.A,DetailBanner:h,PageFooter:L.A,ArticleInfo:K},props:{},setup(){return{}},data:()=>({}),computed:{},watch:{},methods:{}});const P=(0,m.A)(V,[["render",a],["__scopeId","data-v-624850ea"]]);var T=P}}]);
//# sourceMappingURL=8.0fd4c0a5.js.map