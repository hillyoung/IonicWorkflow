(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{YjEZ:function(n,o,t){"use strict";t.r(o);var l=t("CcnG"),r=t("ZZ/e"),e=(t("vlXg"),function(){function n(n,o,t,l,r,e){var i=this;this.nav=n,this.router=o,this.route=t,this.userService=l,this.utilService=r,this.dataservice=e,this.netParams={userid:""},this.callbackid="",this.route.queryParams.subscribe(function(n){console.debug(i.router.getCurrentNavigation().extras.state);var o=i.router.getCurrentNavigation().extras.state;o&&(document.title=o.title||"\u8bf7\u9009\u62e9\u516c\u53f8",i.callbackid=o.callbackid,i.netParams=o.params||{userid:i.userService.getUserInfo().userId})})}return n.prototype.ngOnInit=function(){this.loadData(null)},n.prototype.selectCompany=function(n){var o=this.dataservice.getData(this.callbackid);o&&(this.nav.pop(),o(n))},n.prototype.loadData=function(n){var o=this;null==n?this.utilService.showLoad().then(function(n){o.userService.orginfo(o.netParams.userid).then(function(t){n.dismiss(),o.companies=t||[]})}):this.userService.orginfo(this.netParams.userid).then(function(t){n.target.complete(),o.companies=t||[]})},n}()),i=function(){return function(){}}(),c=t("pMnS"),a=t("oBZk"),u=t("gIcY"),s=t("Ip0R"),b=t("ZYCi"),d=t("Ouoq"),g=t("BaxT"),f=t("AwSQ"),h=l.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.no-shadow[_ngcontent-%COMP%]{box-shadow:0 0 0 0 transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}.item-content-company[_ngcontent-%COMP%]{height:53px!important;--background:white;--border-color:#F3F3F3}.label-title-company[_ngcontent-%COMP%]{margin:18px 0;font-size:16px;line-height:16px;min-height:16px;color:#333}"]],data:{}});function p(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,11,"ion-item",[["class","item-content-company"]],null,null,null,a.ab,a.s)),l.nb(1,49152,null,0,r.G,[l.h,l.k],null,null),(n()(),l.ob(2,0,null,0,6,"ion-checkbox",[["color","theme"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,t){var r=!0,e=n.component;return"ionBlur"===o&&(r=!1!==l.yb(n,3)._handleBlurEvent()&&r),"ionChange"===o&&(r=!1!==l.yb(n,3)._handleIonChange(t.target.checked)&&r),"ngModelChange"===o&&(r=!1!==(n.context.$implicit.selected=t)&&r),"click"===o&&(r=!1!==e.selectCompany(n.context.$implicit)&&r),r},a.N,a.h)),l.nb(3,16384,null,0,r.c,[l.k],null,null),l.zb(1024,null,u.c,function(n){return[n]},[r.c]),l.nb(5,671744,null,0,u.h,[[8,null],[8,null],[8,null],[6,u.c]],{model:[0,"model"]},{update:"ngModelChange"}),l.zb(2048,null,u.d,null,[u.h]),l.nb(7,16384,null,0,u.e,[[4,u.d]],null,null),l.nb(8,49152,null,0,r.q,[l.h,l.k],{color:[0,"color"]},null),(n()(),l.ob(9,0,null,0,2,"ion-label",[["class","label-title-company"]],null,null,null,a.bb,a.v)),l.nb(10,49152,null,0,r.M,[l.h,l.k],null,null),(n()(),l.Cb(11,0,["",""]))],function(n,o){n(o,5,0,o.context.$implicit.selected),n(o,8,0,"theme")},function(n,o){n(o,2,0,l.yb(o,7).ngClassUntouched,l.yb(o,7).ngClassTouched,l.yb(o,7).ngClassPristine,l.yb(o,7).ngClassDirty,l.yb(o,7).ngClassValid,l.yb(o,7).ngClassInvalid,l.yb(o,7).ngClassPending),n(o,11,0,o.context.$implicit.orgNam)})}function m(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,9,"ion-content",[],null,null,null,a.P,a.j)),l.nb(1,49152,null,0,r.t,[l.h,l.k],null,null),(n()(),l.ob(2,0,null,0,3,"ion-refresher",[],null,[[null,"ionRefresh"]],function(n,o,t){var l=!0;return"ionRefresh"===o&&(l=!1!==n.component.loadData(t)&&l),l},a.eb,a.x)),l.nb(3,49152,null,0,r.bb,[l.h,l.k],null,null),(n()(),l.ob(4,0,null,0,1,"ion-refresher-content",[["pullingText","\u4e0b\u62c9\u5237\u65b0"],["refreshingText","\u5237\u65b0\u4e2d"]],null,null,null,a.db,a.y)),l.nb(5,49152,null,0,r.cb,[l.h,l.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),l.ob(6,0,null,0,3,"ion-item-group",[],null,null,null,a.Z,a.u)),l.nb(7,49152,null,0,r.I,[l.h,l.k],null,null),(n()(),l.fb(16777216,null,0,1,null,p)),l.nb(9,278528,null,0,s.h,[l.N,l.K,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var t=o.component;n(o,5,0,"\u4e0b\u62c9\u5237\u65b0","\u5237\u65b0\u4e2d"),n(o,9,0,t.companies)},null)}function y(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,1,"company",[],null,null,null,m,h)),l.nb(1,114688,null,0,e,[r.Gb,b.m,b.a,d.a,g.a,f.a],null,null)],function(n,o){n(o,1,0)},null)}var C=l.kb("company",e,y,{},{},[]);t.d(o,"CompanyModuleNgFactory",function(){return k});var k=l.lb(i,[],function(n){return l.vb([l.wb(512,l.j,l.ab,[[8,[c.a,C]],[3,l.j],l.x]),l.wb(4608,s.k,s.j,[l.u,[2,s.q]]),l.wb(4608,u.k,u.k,[]),l.wb(4608,r.b,r.b,[l.z,l.g]),l.wb(4608,r.Fb,r.Fb,[r.b,l.j,l.q,s.c]),l.wb(4608,r.Ib,r.Ib,[r.b,l.j,l.q,s.c]),l.wb(1073742336,s.b,s.b,[]),l.wb(1073742336,u.i,u.i,[]),l.wb(1073742336,u.b,u.b,[]),l.wb(1073742336,r.Cb,r.Cb,[]),l.wb(1073742336,b.n,b.n,[[2,b.t],[2,b.m]]),l.wb(1073742336,i,i,[]),l.wb(1024,b.k,function(){return[[{path:"",component:e}]]},[])])})}}]);