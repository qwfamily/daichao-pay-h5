(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2694508"],{"225e":function(t,a,e){t.exports=e.p+"img/icon_apply_process_y.2bbb2f46.png"},"3a20":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"default-page detail-page page"},[e("header",[e("van-nav-bar",{attrs:{title:"Person loan offers",fixed:"","left-arrow":"",placeholder:""},on:{"click-left":t.onClickLeft}})],1),e("section",{staticClass:"page-body"},[e("div",{staticClass:"detail-card-box"},[e("div",{staticClass:"product-preview-item flex"},[e("div",{staticClass:"item-hd"},[e("img",{attrs:{src:t.detail.product_picture_url_qiniu}})]),e("div",{staticClass:"item-bd flex-1"},[e("p",{staticClass:"title"},[t._v(t._s(t.detail.product_name))]),e("p",{staticClass:"desc"},[t._v(t._s(t.detail.product_title))])])]),e("div",{staticClass:"product-detail-card"},[e("div",{staticClass:"flex bottom-line"},[e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"balance-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.amount_low+" - "+t.detail.amount_high))]),e("p",{staticClass:"desc"},[t._v("Amount")])],1),e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"underway-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.divide_period_min+"-"+t.detail.divide_period_max))]),e("p",{staticClass:"desc"},[t._v("Tenure(Months)")])],1)]),e("div",{staticClass:"flex"},[e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"discount"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.daily_rate))]),e("p",{staticClass:"desc"},[t._v("Interest Rate(Per Daily)")])],1),e("div",{staticClass:"card-item flex-1"},[e("van-icon",{attrs:{name:"bill-o"}}),e("p",{staticClass:"title"},[t._v(t._s(t.detail.pro_fee||0))]),e("p",{staticClass:"desc"},[t._v("Processing Fee")])],1)])])]),e("div",{staticClass:"panel"},[t._m(0),e("div",{staticClass:"panel-bd term-card"},[e("div",{staticClass:"term-item flex"},[t._m(1),e("div",{staticClass:"flex-1"},[e("p",[t._v(t._s(t.detail.apply_condition))])])]),e("div",{staticClass:"term-item flex"},[t._m(2),e("div",{staticClass:"flex-1"},[e("p",[t._v(t._s(t.detail.apply_doc))])])])])]),t._m(3)]),e("footer",{staticClass:"page-footer"},[e("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toGooglePay}},[t._v("Apply Nor")])],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-hd"},[e("div",{staticClass:"heading-item"},[e("p",{staticClass:"title"},[t._v("Load Terms")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("label",{staticClass:"term-label"},[e("span",[t._v("Eligibility Criteria:")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("label",{staticClass:"term-label"},[e("span",[t._v("Apply Requirements:")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-hd"},[i("div",{staticClass:"heading-item"},[i("p",{staticClass:"title"},[t._v("How to Apply")])])]),i("div",{staticClass:"panel-bd apply-process-card"},[i("div",{staticClass:"apply-process-item"},[i("img",{attrs:{src:e("225e")}})])])])}],l=(e("4de4"),e("b0ea")),n=e("273d"),d={name:"detail",data:function(){return{detail:{},id:this.$route.params.id}},created:function(){this.id?Object(n["g"])(this.id):this.id=Object(n["c"])(),this.getProductDetailById()},methods:{getProductDetailById:function(){var t=this.id,a=l["a"].data.filter((function(a){return t===a.id}));this.detail=a[0]},onClickLeft:function(){this.$router.go(-1)},toGooglePay:function(){location.href=this.detail.jump_url}}},c=d,o=(e("8c64"),e("2877")),r=Object(o["a"])(c,i,s,!1,null,"4266d03e",null);a["default"]=r.exports},"8c64":function(t,a,e){"use strict";var i=e("c399"),s=e.n(i);s.a},b0ea:function(t,a,e){"use strict";a["a"]={data:[{id:40,pass_number:1100,apply_condition:"Age 23-50;",apply_doc:"Subject to app application",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.christmas.izwa.loans.instant",divide_period_max:12,divide_period_min:2,divide_period:[""],amount_high:5e4,amount_low:250,loan_release_time:"3600",product_picture_url_qiniu:"http://files.qhwrong.com/images/72d1256a314a9dd47bafa0a996aa7b5d.png",product_name:"lzwa Loans",product_title:"loan limit 250-50000",daily_rate:"0.008",turn:20,status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"},{id:2,pass_number:466788,apply_condition:"With sesame sub loan! Non Mafia fast payment!",apply_doc:"With sesame sub loan! Non Mafia fast payment!",success_rate:98,jump_url:"https://d22bckdkpsjt0y.cloudfront.net/getRupee_v1.0.1_release_y2smu2j.apk",divide_period_max:14,divide_period_min:7,divide_period:["7","14"],amount_high:5e3,amount_low:1e3,loan_release_time:"7",product_picture_url_qiniu:"http://files.qhwrong.com/images/be750aa9c0578ad9c8a14643355ded2a.jpeg",product_name:"GetRupee",product_title:"loan limit 1000-5000, GetRupee",daily_rate:"0.010",turn:10,status:2,can_see:0,is_recommend:1,update_at:"1970-01-01 08:00:00"},{id:41,pass_number:1100,apply_condition:"Age 23-50;",apply_doc:"Subject to app application",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.frogx.ieasyloan",divide_period_max:12,divide_period_min:3,divide_period:[""],amount_high:8e5,amount_low:5e3,loan_release_time:"3600",product_picture_url_qiniu:"http://files.qhwrong.com/images/d244df736fe8f55022b37d1226276759.png",product_name:"iEasyLoan",product_title:"loan limit 5000-800000, iEasyLoan",daily_rate:"0.008",turn:null,status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"},{id:4,pass_number:1e3,apply_condition:"any one can",apply_doc:"any one can",success_rate:100,jump_url:"https://go.onelink.me/app/76ca5e34",divide_period_max:null,divide_period_min:null,divide_period:[""],amount_high:5e4,amount_low:1e4,loan_release_time:null,product_picture_url_qiniu:"http://files.qhwrong.com/images/e19a5c13354945274cb0024680cbe46c.jpg",product_name:"eiloan",product_title:"loan limit 10000-50000, eloan",daily_rate:"0.010",turn:null,status:2,can_see:0,is_recommend:1,update_at:"1970-01-01 08:00:00"}],meta:{status_code:200,code:200,message:"success",pagination:{total:4,count:4,per_page:20,current_page:1,total_pages:1,links:[]}}}},c399:function(t,a,e){}}]);
//# sourceMappingURL=chunk-b2694508.8046d4b1.js.map