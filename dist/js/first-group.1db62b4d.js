(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["first-group"],{1458:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"product-list"},t._l(t.list,(function(e){return a("div",{key:e.id,staticClass:"product-item flex",on:{click:function(a){return t.apply(e.id)}}},[a("div",{staticClass:"item-hd"},[a("img",{attrs:{src:"/imgs/product/"+e.id+".png"}})]),a("div",{staticClass:"item-bd flex-1"},[a("p",{staticClass:"title"},[t._v(t._s(e.product_name))]),a("p",{staticClass:"desc"},[t._v("Max Amount: "+t._s(e.amount_high))]),a("p",{staticClass:"desc"},[t._v("Tenure: "+t._s(e.divide_period_min+"-"+e.divide_period_max)+" Months")]),a("p",{staticClass:"desc"},[t._v("Interest: "+t._s(e.daily_rate)+" / Daily")]),a("p",{staticClass:"desc"},[t._v("Pro.Fee: "+t._s(e.pro_fee||0))])]),a("div",{staticClass:"item-ft"},[a("van-button",{staticClass:"vip-btn",attrs:{size:"small",type:"primary"}},[t._v("Apply")])],1)])})),0)])},s=[],n=a("b0ea"),o={data:function(){return{list:n["a"].data}},methods:{apply:function(t){this.toDetailPage(t)},toDetailPage:function(t){this.$router.push({name:"detail",params:{id:t}})}}},r=o,l=a("2877"),p=Object(l["a"])(r,i,s,!1,null,null,null);e["a"]=p.exports},4609:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-page home-page"},[t.isShowHeader?a("header",[a("van-nav-bar",{attrs:{title:"Cash Wallet",fixed:"",placeholder:""}})],1):t._e(),a("section",{staticClass:"home-page-body page-body"},[a("productSwiper"),a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-hd"},[a("div",{staticClass:"heading-item flex"},[a("van-icon",{staticClass:"icon",attrs:{name:"fire"}}),t._m(0)],1)]),a("div",{staticClass:"panel-bd"},[a("productList")],1)])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading-item-bd flex-1"},[a("p",{staticClass:"title"},[t._v("Personnal Loan")]),a("p",{staticClass:"desc"},[t._v("Unsecred Loan for persional purpose")])])}],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{ref:"mySwiper",staticClass:"home-swiper",attrs:{options:t.swiperOptions}},[i("swiper-slide",[i("a",{staticClass:"slide-product",attrs:{href:"/",target:"_blank"}},[i("img",{attrs:{src:a("e727")}})])]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},o=[],r={name:"carrousel",data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){console.log("Current Swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1)}},l=r,p=a("2877"),c=Object(p["a"])(l,n,o,!1,null,null,null),d=c.exports,u=a("1458"),_={components:{productSwiper:d,productList:u["a"]},data:function(){return{}},mounted:function(){},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onClickLeft:function(){this.$router.go(-1)}}},m=_,f=Object(p["a"])(m,i,s,!1,null,null,null);e["default"]=f.exports},8808:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-page loan-all-page"},[t.isShowHeader?a("header",[a("van-nav-bar",{attrs:{title:"Loan All",fixed:"",placeholder:""}})],1):t._e(),a("section",{staticClass:"page-body"},[a("productList")],1)])},s=[],n=a("1458"),o={components:{productList:n["a"]},data:function(){return{}},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}}},r=o,l=a("2877"),p=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=p.exports},b0ea:function(t,e,a){"use strict";e["a"]={data:[{id:40,pass_number:1100,apply_condition:"Age 23-50;",apply_doc:"Subject to app application",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.christmas.izwa.loans.instant",divide_period_max:12,divide_period_min:2,divide_period:[""],amount_high:5e4,amount_low:250,loan_release_time:"3600",product_picture_url_qiniu:"http://files.qhwrong.com/images/72d1256a314a9dd47bafa0a996aa7b5d.png",product_name:"lzwa Loans",product_title:"loan limit 250-50000",daily_rate:"0.008",turn:20,status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"},{id:2,pass_number:466788,apply_condition:"With sesame sub loan! Non Mafia fast payment!",apply_doc:"With sesame sub loan! Non Mafia fast payment!",success_rate:98,jump_url:"https://d22bckdkpsjt0y.cloudfront.net/getRupee_v1.0.1_release_y2smu2j.apk",divide_period_max:14,divide_period_min:7,divide_period:["7","14"],amount_high:5e3,amount_low:1e3,loan_release_time:"7",product_picture_url_qiniu:"http://files.qhwrong.com/images/be750aa9c0578ad9c8a14643355ded2a.jpeg",product_name:"GetRupee",product_title:"loan limit 1000-5000, GetRupee",daily_rate:"0.010",turn:10,status:2,can_see:0,is_recommend:1,update_at:"1970-01-01 08:00:00"},{id:41,pass_number:1100,apply_condition:"Age 23-50;",apply_doc:"Subject to app application",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.frogx.ieasyloan",divide_period_max:12,divide_period_min:3,divide_period:[""],amount_high:8e5,amount_low:5e3,loan_release_time:"3600",product_picture_url_qiniu:"http://files.qhwrong.com/images/d244df736fe8f55022b37d1226276759.png",product_name:"iEasyLoan",product_title:"loan limit 5000-800000, iEasyLoan",daily_rate:"0.008",turn:null,status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"},{id:4,pass_number:1e3,apply_condition:"any one can",apply_doc:"any one can",success_rate:100,jump_url:"https://go.onelink.me/app/76ca5e34",divide_period_max:null,divide_period_min:null,divide_period:[""],amount_high:5e4,amount_low:1e4,loan_release_time:null,product_picture_url_qiniu:"http://files.qhwrong.com/images/e19a5c13354945274cb0024680cbe46c.jpg",product_name:"eiloan",product_title:"loan limit 10000-50000, eloan",daily_rate:"0.010",turn:null,status:2,can_see:0,is_recommend:1,update_at:"1970-01-01 08:00:00"}],meta:{status_code:200,code:200,message:"success",pagination:{total:4,count:4,per_page:20,current_page:1,total_pages:1,links:[]}}}},e727:function(t,e,a){t.exports=a.p+"img/swiper.9b76a458.jpg"}}]);
//# sourceMappingURL=first-group.1db62b4d.js.map