(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44b1d412"],{"225e":function(t,a,e){t.exports=e.p+"img/icon_apply_process_y.2bbb2f46.png"},"3a20":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail-page page"},[e("header",[e("van-nav-bar",{attrs:{title:"Person loan offers",fixed:"","left-arrow":"",placeholder:""},on:{"click-left":t.onClickLeft}})],1),e("section",{staticClass:"page-body"},[e("div",{staticClass:"detail-card-box"},[e("div",{staticClass:"product-preview-item flex"},[e("div",{staticClass:"item-hd"},[e("img",{attrs:{src:"../imgs/product/"+t.detail.img}})]),e("div",{staticClass:"item-bd flex-1"},[e("p",{staticClass:"title"},[t._v(t._s(t.detail.name))]),e("p",{staticClass:"desc"},[t._v(t._s(t.detail.desc))])])]),e("div",{staticClass:"product-detail-card"},[e("div",{staticClass:"flex bottom-line"},[e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"balance-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.minAmount+" - "+t.detail.maxAmount))]),e("p",{staticClass:"desc"},[t._v("Amount")])],1),e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"underway-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.tenure))]),e("p",{staticClass:"desc"},[t._v("Tenure(Months)")])],1)]),e("div",{staticClass:"flex"},[e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"discount"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.interest))]),e("p",{staticClass:"desc"},[t._v("Interest Rate(Per Daily)")])],1),e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"bill-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.fee))]),e("p",{staticClass:"desc"},[t._v("Processing Fee")])],1)])])]),e("div",{staticClass:"panel"},[t._m(0),e("div",{staticClass:"panel-bd term-card"},t._l(t.detail.eligibility,(function(a,s){return e("div",{key:a,staticClass:"term-item flex",class:s+1===t.detail.eligibility.length?"":"bottom-line"},[e("div",[e("label",{staticClass:"term-label"},[e("span",{directives:[{name:"show",rawName:"v-show",value:0===s,expression:"index===0"}]},[t._v("Eligibility:")])])]),e("div",{staticClass:"flex-1"},[e("p",[t._v(t._s(s+1+". "+a))])])])})),0)]),t._m(1)]),e("footer",{staticClass:"page-footer"},[e("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toGooglePay}},[t._v("Apply Nor")])],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-hd"},[e("div",{staticClass:"heading-item"},[e("p",{staticClass:"title"},[t._v("Load Terms")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-hd"},[s("div",{staticClass:"heading-item"},[s("p",{staticClass:"title"},[t._v("How to Apply")])])]),s("div",{staticClass:"panel-bd apply-process-card"},[s("div",{staticClass:"apply-process-item"},[s("img",{attrs:{src:e("225e")}})])])])}],l=(e("4de4"),e("b0ea")),n={data:function(){return{detail:null,id:this.$route.params.id||0}},created:function(){var t=this.id;this.detail=l["a"].list.filter((function(a){return a.id==t}))[0]},methods:{onClickLeft:function(){this.$router.go(-1)},toGooglePay:function(){location.href=this.detail.downloadUrl}}},c=n,o=(e("660f"),e("2877")),d=Object(o["a"])(c,s,i,!1,null,"cde9d19e",null);a["default"]=d.exports},"5e32":function(t,a,e){},"660f":function(t,a,e){"use strict";var s=e("5e32"),i=e.n(s);i.a},b0ea:function(t,a,e){"use strict";a["a"]={list:[{id:0,name:"iEasyLoan",img:"iEasyLoan.png",desc:"Easy Personal Loan Quick Online",downloadUrl:"https://play.google.com/store/apps/details?id=com.frogx.ieasyloan",minAmount:"5000",maxAmount:"80000",eligibility:["Indian Resident.","Above the age of 21 years","Source of a monthly income."],tenure:"3-20",interest:"0.09%",fee:"0"},{id:1,name:"InstaRupee",img:"InstaRupee.png",desc:"Instant Personal Loan App Online",downloadUrl:"https://play.google.com/store/apps/details?id=com.loanrupee.rupee",minAmount:"0",maxAmount:"20000",eligibility:["Age requirement must be above 18+ years old.","You must be a citizen of India.","Aadhaar and Pan card."],tenure:"3-4",interest:"0.079%",fee:"0"}]}}}]);
//# sourceMappingURL=chunk-44b1d412.1b0a95fe.js.map