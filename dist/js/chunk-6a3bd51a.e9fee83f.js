(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a3bd51a"],{"0397":function(t,e,i){"use strict";var n=i("919f"),r=i.n(n);r.a},1148:function(t,e,i){"use strict";var n=i("a691"),r=i("1d80");t.exports="".repeat||function(t){var e=String(r(this)),i="",s=n(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"408a":function(t,e,i){var n=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"841c":function(t,e,i){"use strict";var n=i("d784"),r=i("825a"),s=i("1d80"),a=i("129f"),o=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var s=r(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var d=o(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===d?-1:d.index}]}))},"919f":function(t,e,i){},ab87:function(t,e,i){},b680:function(t,e,i){"use strict";var n=i("23e7"),r=i("a691"),s=i("408a"),a=i("1148"),o=i("d039"),c=1..toFixed,u=Math.floor,d=function(t,e,i){return 0===e?i:e%2===1?d(t,e-1,i*t):d(t*t,e/2,i)},l=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,i,n,o,c=s(this),f=r(t),p=[0,0,0,0,0,0],h="",m="0",v=function(t,e){var i=-1,n=e;while(++i<6)n+=t*p[i],p[i]=n%1e7,n=u(n/1e7)},b=function(t){var e=6,i=0;while(--e>=0)i+=p[e],p[e]=u(i/t),i=i%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var i=String(p[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=l(c*d(2,69,1))-69,i=e<0?c*d(2,-e,1):c/d(2,e,1),i*=4503599627370496,e=52-e,e>0){v(0,i),n=f;while(n>=7)v(1e7,0),n-=7;v(d(10,n,1),0),n=e-1;while(n>=23)b(1<<23),n-=23;b(1<<n),v(1,1),b(2),m=g()}else v(0,i),v(1<<-e,0),m=g()+a.call("0",f);return f>0?(o=m.length,m=h+(o<=f?"0."+a.call("0",f-o)+m:m.slice(0,o-f)+"."+m.slice(o-f))):m=h+m,m}})},b9ed:function(t,e,i){"use strict";var n=i("ab87"),r=i.n(n);r.a},d251:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vip-page page"},[t.isShowHeader?i("header",[i("van-nav-bar",{attrs:{title:"",fixed:"",placeholder:""}})],1):t._e(),i("section",{staticClass:"home-page-bdoy"},[i("productSwiper")],1)])},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{ref:"productSwiper",staticClass:"product-swiper",attrs:{options:t.swiperOptions}},t._l(t.cardList,(function(e,n){return i("swiper-slide",{key:e.id},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-hd"},[i("p",{staticClass:"tips-title"},[t._v("Congratulations! ")]),i("p",{staticClass:"tips-desc"},[t._v("You passed the audit! ")]),i("div",{staticClass:"heading"},[i("p",[t._v("Loan Amount")]),i("h1",{staticClass:"title"},[t._v("₹"+t._s(e.description))])])]),i("div",{staticClass:"card-bd"},[i("div",{staticClass:"product-info"},[i("div",{staticClass:"desc small flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v("Interest")]),i("div",{staticClass:"bold"},[t._v("₹45")])]),i("div",{staticClass:"desc small  flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v(" Repayment Amount("),i("span",{staticClass:"small red"},[t._v("-"+t._s(parseInt(e.price)))]),t._v(") ")]),i("div",{staticClass:"bold"},[t._v("₹"+t._s(parseInt(parseInt(e.description)-parseInt(e.price))))])]),i("div",{staticClass:"desc small top-line flex"},[i("div",{staticClass:"flex-1 text-left"},[t._v("Loan Term")]),i("div",{staticClass:"bold"},[t._v("15days")])])])]),i("div",{staticClass:"card-ft"},[i("div",{staticClass:"warn-tips"},[i("div",{staticClass:"tips-hd"},[i("span",{staticClass:"title"},[t._v("Warning: ")]),i("van-icon",{attrs:{name:"warning-o"}})],1),i("div",{staticClass:"tips-bd"},[i("div",{staticClass:"tip-item bottom-line"},[i("p",[t._v("① The audit fee ₹299")])]),i("div",{staticClass:"tip-item"},[i("p",[t._v("② The limit is only reserved for 10 minutes. Please with draw it as soon as possible.")])])])]),i("div",{staticClass:"vip-btn-wrap"},[i("van-button",{staticClass:"vip-btn",attrs:{type:"primary",color:"#4a07c8",disabled:t.isSubmitting,loading:t.isSubmitting,"loading-text":"Submitting...",block:""},on:{click:function(i){return t.selectCurrentItem(e)}}},[t._v("Immediate withdrawal")])],1),t.userInfo.is_member?i("div",{staticClass:"vip-btn-wrap",staticStyle:{"margin-top":"15px"}},[i("van-button",{attrs:{type:"default",block:""},on:{click:function(e){return t.toHomePage()}}},[t._v("Choose other loan product")])],1):t._e()])])])})),1)],1)},a=[],o=(i("fb6a"),i("b0c0"),i("b680"),i("ac1f"),i("5319"),i("841c"),i("96cf"),i("1da1")),c=i("f8b7"),u={name:"carrousel",data:function(){var t=this;return{cardList:[],sold_count:0,activeItemIndex:1,isSubmitting:!1,swiperOptions:{slidesPerView:"auto",watchSlidesProgress:!0,centeredSlides:!0,init:!1,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){var n=t.cardList[e].title;return'<span class="'+i+'">'+n+"</span>"}},on:{progress:function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e],n=i.progress,r=(Math.min(Math.abs(.2*n),1),i.style);r.opacity=1-Math.min(Math.abs(n/2),1),r.webkitTransform=r.MsTransform=r.msTransform=r.MozTransform=r.OTransform=r.transform="translate3d(0px,0,"+-Math.abs(150*n)+"px)"}},slideChange:function(){for(var e=0;e<this.slides.length;e++){var i=this.slides[e].style;i.webkitTransitionDuration=i.MsTransitionDuration=i.msTransitionDuration=i.MozTransitionDuration=i.OTransitionDuration=i.transitionDuration="0ms"}var n=this.activeIndex,r=t.cardList[n].sold_count;t.startNumAnimation(r)}}}}},computed:{swiper:function(){return this.$refs.productSwiper.$swiper},appVersionId:function(){return this.$store.getters.appVersionId},userInfo:function(){return this.$store.getters.info}},mounted:function(){this.userInfo.is_member?this.toEndPage():this.getMemberCardList()},methods:{getMemberCardList:function(){var t=this;Object(c["a"])().then((function(e){t.cardList=e.data||[],t.initSwiper()}))},initSwiper:function(){var t=this;this.$nextTick(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.swiper.init();case 2:return e.next=4,t.swiper.slideTo(t.activeItemIndex);case 4:case"end":return e.stop()}}),e)}))))},tweenUpdate:function(){requestAnimationFrame(this.tweenUpdate),this.$tweener.update()},startNumAnimation:function(t){var e=this;this.$tween.fade(this,{sold_count:t},600,0,"",(function(){e.sold_count=(e.sold_count||0).toFixed()}))},selectCurrentItem:function(t){this.$store.dispatch("product/setProductInfo",t),this.submitOrder(t)},submitOrder:function(t){var e=this;if(!this.userInfo.name||!this.userInfo.email)return this.toInfoPage(),!1;var i=location.href.slice(0,location.href.search("#"))+"#/step03",n={return_url:i,member_card_id:t.id};if(this.isSubmitting)return!1;this.isSubmitting=!0,Object(c["f"])(n).then((function(t){var i=t.data;e.isSubmitting=!1,i&&(e.$store.dispatch("product/setOrderInfo",i),location.href=i.payment_link)})).catch((function(){e.isSubmitting=!1}))},toStep03Page:function(){this.$router.push({name:"step03"})},toHomePage:function(){this.$router.push({name:"home"})},toInfoPage:function(){this.$router.push({name:"info"})},toEndPage:function(){this.$router.replace({name:"end"})}}},d=u,l=(i("b9ed"),i("2877")),f=Object(l["a"])(d,s,a,!1,null,"1d704c91",null),p=f.exports,h={components:{productSwiper:p},data:function(){return{}},mounted:function(){},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onClickLeft:function(){this.$router.go(-1)}}},m=h,v=(i("0397"),Object(l["a"])(m,n,r,!1,null,null,null));e["default"]=v.exports},f8b7:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return u}));var n=i("b775");function r(){return Object(n["a"])({url:"/member/cards",method:"get"})}function s(){return Object(n["a"])({url:"/payment/channels",method:"get"})}function a(t){return Object(n["a"])({url:"/member/orders",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/member/orders/cashfree",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"/payment/cashfree/return",method:"get",params:{order_id:t}})}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("861d"),s=i("e8b5"),a=i("23cb"),o=i("50c4"),c=i("fc6a"),u=i("8418"),d=i("b622"),l=i("1dde"),f=i("ae40"),p=l("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),v=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var i,n,d,l=c(this),f=o(l.length),p=a(t,f),h=a(void 0===e?f:e,f);if(s(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?r(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return v.call(l,p,h);for(n=new(void 0===i?Array:i)(b(h-p,0)),d=0;p<h;p++,d++)p in l&&u(n,d,l[p]);return n.length=d,n}})}}]);
//# sourceMappingURL=chunk-6a3bd51a.e9fee83f.js.map