(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06d2f224"],{b0c0:function(t,e,n){var o=n("83ab"),i=n("9bf2").f,c=Function.prototype,a=c.toString,s=/^\s*function ([^ (]*)/,r="name";o&&!(r in c)&&i(c,r,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},d4a1:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page default-page"},[t.isShowHeader?n("header",[n("van-nav-bar",{attrs:{title:"Sign in",fixed:"",placeholder:""}})],1):t._e(),n("section",{staticClass:"login-page-body"},[n("div",{ref:"login_form"},[n("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:t.countryCodeText,label:"Country",placeholder:"Please select country code","right-icon":"arrow"},on:{click:function(e){t.showPicker=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.onConfirm,cancel:function(e){t.showPicker=!1}}})],1),n("van-field",{attrs:{name:"telephone",type:"tel",label:"Telephone",placeholder:"Please enter telephone"},model:{value:t.telephone,callback:function(e){t.telephone=e},expression:"telephone"}}),n("van-field",{attrs:{center:"",clearable:"",type:"digit",label:"Code",placeholder:"Please enter code"},scopedSlots:t._u([{key:"button",fn:function(){return[n("van-button",{staticClass:"vip-btn",attrs:{size:"small",type:"default",disabled:t.isGetting},on:{click:t.getCode}},[t._v(t._s(t.isGetting?t.$t("btn.smsCountDown",[t.count]):"Get Code"))])]},proxy:!0}]),model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("div",{staticClass:"vip-btn-wrap"},[n("van-button",{staticClass:"vip-btn",attrs:{type:"primary",disabled:t.isSubmitting,loading:t.isSubmitting,"loading-text":"Submitting...",block:""},on:{click:t.onSubmit}},[t._v("Sign in")])],1)],1)])])},i=[],c=(n("4160"),n("b0c0"),n("159b"),n("c24f")),a=n("83d6"),s=n.n(a),r={data:function(){return{countryCodeText:"India 0091",countryCode:"0091",columns:[],showPicker:!1,telephone:"",code:"",codekey:"",isGetting:!1,gettingText:"",count:60,COUNT_DEFAULT:60,isSubmitting:!1}},created:function(){var t=this;Object(c["a"])().then((function(e){var n=e.data||[];n.sort((function(t,e){return t.is_hot<e.is_hot?1:t.is_hot>e.is_hot?-1:0})),n.forEach((function(t){t.text=t.name+" "+t.intl_code})),t.columns=n}))},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{onConfirm:function(t){this.countryCode=t.intl_code,this.countryCodeText=t.text,this.showPicker=!1},getCode:function(){var t=this;if(!this.telephone)return this.$toast("Please enter telephone"),!1;if(this.isGetting)return!1;this.isGetting=!0;var e=function e(){t.count--,t.count>0?setTimeout(e,1e3):t.isGetting=!1};e(),Object(c["c"])({intl_code:this.countryCode,phone_number:this.telephone}).then((function(e){t.codekey=e.data.key,t.isGetting=!1,t.count=t.COUNT_DEFAULT})).catch((function(e){t.isGetting=!1,t.count=t.COUNT_DEFAULT}))},onSubmit:function(){var t=this;return this.telephone?this.code?(this.isSubmitting=!0,void this.$store.dispatch("user/login",{verification_key:this.codekey,verification_code:this.code,device_number:s.a.device_number,platform:s.a.platform,app_version_id:s.a.app_version_id}).then((function(){t.isSubmitting=!1,t.toHomePage()})).catch((function(){t.isSubmitting=!1}))):(this.$toast("Please enter code"),!1):(this.$toast("Please enter telephone"),!1)},toHomePage:function(){this.$router.push({name:"home"})}}},l=r,u=n("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-06d2f224.be0f7697.js.map