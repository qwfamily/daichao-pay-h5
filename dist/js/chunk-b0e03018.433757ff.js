(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0e03018"],{"14c9":function(t,a,s){},"72e6":function(t,a,s){"use strict";var e=s("14c9"),r=s.n(e);r.a},e27f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"status-page page"},[1==t.pageShow?s("section",{staticClass:"msg-waiting"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-circle",{ref:"circle",staticClass:"flex",attrs:{rate:t.rate,speed:100,"stroke-width":60,color:"#ffb936","layer-color":"#eee",size:"240px"},model:{value:t.currentRate,callback:function(a){t.currentRate=a},expression:"currentRate"}},[s("van-count-down",{ref:"countDown",staticClass:"flex-1",attrs:{time:t.time,format:"ss"},on:{change:t.setCircleRate}})],1)],1),t._m(0)])]):t._e(),2==t.pageShow?s("section",{staticClass:"msg-success"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-icon",{staticClass:"pay-icon_msg pay-icon-success",attrs:{name:"checked"}})],1),t._m(1),s("div",{staticClass:"pay-msg__opr-area"},[s("div",{staticClass:"vip-btn-wrap"},[s("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toHomePage}},[t._v("Close")])],1)])])]):t._e(),3==t.pageShow?s("section",{staticClass:"msg-warn"},[s("div",{staticClass:"pay-msg"},[s("div",{staticClass:"pay-msg__icon-area"},[s("van-icon",{staticClass:"pay-icon_msg pay-icon-fail",attrs:{name:"warning"}})],1),t._m(2),s("div",{staticClass:"pay-msg__opr-area"},[s("div",{staticClass:"vip-btn-wrap"},[s("van-button",{staticClass:"vip-btn",attrs:{type:"default",block:""},on:{click:t.toLastPage}},[t._v("Back")])],1)])])]):t._e()])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pay-msg__tips-area"},[s("p",{staticClass:"pay-msg__tips"},[t._v(" Checking payment status... ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pay-msg__text-area"},[s("h2",{staticClass:"pay-msg__title"},[t._v("Payment is successful")]),s("p",{staticClass:"pay-msg__desc"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pay-msg__text-area"},[s("h2",{staticClass:"pay-msg__title"},[t._v("Payment is failed")])])}],n=s("f8b7"),c={data:function(){return{pageShow:1,time:3e4,rate:100,currentRate:0,payStatus:40003,payStatusTxt:"Checking payment status...",seconds:30}},mounted:function(){this.queryOrderPayStatus()},computed:{order:function(){return this.$store.getters.order}},methods:{onClickLeft:function(){this.$router.go(-1)},setCircleRate:function(t){this.seconds=t.seconds,this.rate=(30-t.seconds)/30*100,40003==this.payStatus&&t.seconds%5==0&&this.queryOrderPayStatus()},queryOrderPayStatus:function(){var t=this,a=this.order.order_id;Object(n["d"])(a).then((function(a){var s=a.data;switch(s.status){case 40001:t.$refs.countDown.pause(),t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=2;break;case 40002:t.$refs.countDown.pause(),t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;break;case 40003:0==t.seconds&&t.$refs.countDown.reset(),t.payStatus=s.status,t.pageShow=1;break;case 40004:t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;break;default:t.payStatusTxt=a.data.message,t.payStatus=s.status,t.pageShow=3;break}}))},toHomePage:function(){this.$router.go(-3)},toLastPage:function(){switch(this.payStatus){case 40002:this.$router.go(-3);break;case 40004:this.$router.go(-1);break;default:this.$router.go(-3);break}}}},i=c,o=(s("72e6"),s("2877")),u=Object(o["a"])(i,e,r,!1,null,"4a3fdd6c",null);a["default"]=u.exports},f8b7:function(t,a,s){"use strict";s.d(a,"a",(function(){return r})),s.d(a,"b",(function(){return n})),s.d(a,"e",(function(){return c})),s.d(a,"c",(function(){return i})),s.d(a,"d",(function(){return o}));var e=s("b775");function r(){return Object(e["a"])({url:"/member/cards",method:"get"})}function n(){return Object(e["a"])({url:"/payment/channels",method:"get"})}function c(t){return Object(e["a"])({url:"/member/orders",method:"post",data:t})}function i(t){return Object(e["a"])({url:"/orders/".concat(t.order_id,"/mpurse"),method:"post",data:t})}function o(t){return Object(e["a"])({url:"/payment/mpurse/return",method:"get",params:{order_id:t}})}}}]);
//# sourceMappingURL=chunk-b0e03018.433757ff.js.map