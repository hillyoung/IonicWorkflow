(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{YjEZ:function(n,o,t){"use strict";t.r(o);var e=t("CcnG"),l=t("ZZ/e"),r=(t("vlXg"),function(){function n(n,o,t,e,l,r){var i=this;this.nav=n,this.router=o,this.route=t,this.userService=e,this.utilService=l,this.dataservice=r,this.netParams={userid:""},this.callbackid="",this.route.queryParams.subscribe(function(n){console.debug(i.router.getCurrentNavigation().extras.state);var o=i.router.getCurrentNavigation().extras.state;o&&(document.title=o.title||"\u8bf7\u9009\u62e9\u516c\u53f8",i.callbackid=o.callbackid,i.netParams=o.params||{userid:i.userService.getUserInfo().userId})})}return n.prototype.ngOnInit=function(){this.loadData(null)},n.prototype.selectCompany=function(n){var o=this.dataservice.getData(this.callbackid);o&&(this.nav.pop(),o(n))},n.prototype.loadData=function(n){var o=this;null==n?this.utilService.showLoad().then(function(n){o.userService.orginfo(o.netParams.userid).then(function(t){n.dismiss(),o.companies=t||[]})}):this.userService.orginfo(this.netParams.userid).then(function(t){n.target.complete(),o.companies=t||[]})},n}()),i=function(){return function(){}}(),c=t("pMnS"),a=t("oBZk"),s=t("gIcY"),u=t("Ip0R"),d=t("ZYCi"),b=t("Ouoq"),g=t("BaxT"),f=t("AwSQ"),p=e.mb({encapsulation:0,styles:[["@charset \"UTF-8\";[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.no-shadow[_ngcontent-%COMP%]{box-shadow:0 0 0 0 transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}.item-content-company[_ngcontent-%COMP%]{height:53px!important;--background:white;--border-color:#F3F3F3}.label-title-company[_ngcontent-%COMP%]{margin:18px 0;font-size:16px;line-height:16px;min-height:16px;color:#333}.subHeader[_ngcontent-%COMP%]{margin:0;padding:0;background-color:#fff;border:1px #d8d8d8}.searchContent[_ngcontent-%COMP%]{background-color:#fff;height:40px}.searchBarContent[_ngcontent-%COMP%]{height:30px;margin:0;padding:2px 5px 0;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;border-radius:2px;border:1px solid #d8d8d8}.searchBar[_ngcontent-%COMP%]{-webkit-flex:1;flex:1;border-width:0;border-radius:0}.searchButton[_ngcontent-%COMP%]{height:30px}.list-content[_ngcontent-%COMP%]{margin-bottom:40px}.list-index[_ngcontent-%COMP%]{margin:100px 0 0;padding:0 0 45px;z-index:99998;position:fixed;top:0;right:0;width:20px;height:100%;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-items:center;align-items:center;background-color:#fff}.item-index-a[_ngcontent-%COMP%]{text-decoration:none}.footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100%;z-index:99999;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;background-color:transparent}.scroll-user[_ngcontent-%COMP%]{-webkit-flex:1;flex:1;height:40px;margin:0 5px;padding:5px 0;display:block;white-space:nowrap;background-color:transparent;overflow:scroll}.button-user-selected[_ngcontent-%COMP%]{margin:0;position:relative;top:0;display:inline-block;font-size:12px;color:#4880ff;overflow:visible;background-color:transparent}.button-span[_ngcontent-%COMP%]{padding:5px 10px;position:relative;background-color:transparent;border-radius:20px;border:1px solid #d8d8d8}.button-user-selected[_ngcontent-%COMP%]:after{padding:3px;position:relative;width:15px;height:15px;right:13px;bottom:5px;text-align:center;background-color:red;color:#fff;content:'\u4e00';border-radius:15px}"]],data:{}});function h(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,11,"ion-item",[["class","item-content-company"]],null,null,null,a.ab,a.s)),e.nb(1,49152,null,0,l.G,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,6,"ion-checkbox",[["color","theme"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,t){var l=!0,r=n.component;return"ionBlur"===o&&(l=!1!==e.yb(n,3)._handleBlurEvent()&&l),"ionChange"===o&&(l=!1!==e.yb(n,3)._handleIonChange(t.target.checked)&&l),"ngModelChange"===o&&(l=!1!==(n.context.$implicit.selected=t)&&l),"click"===o&&(l=!1!==r.selectCompany(n.context.$implicit)&&l),l},a.N,a.h)),e.nb(3,16384,null,0,l.c,[e.k],null,null),e.zb(1024,null,s.c,function(n){return[n]},[l.c]),e.nb(5,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,s.d,null,[s.h]),e.nb(7,16384,null,0,s.e,[[4,s.d]],null,null),e.nb(8,49152,null,0,l.q,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(9,0,null,0,2,"ion-label",[["class","label-title-company"]],null,null,null,a.bb,a.v)),e.nb(10,49152,null,0,l.M,[e.h,e.k],null,null),(n()(),e.Cb(11,0,["",""]))],function(n,o){n(o,5,0,o.context.$implicit.selected),n(o,8,0,"theme")},function(n,o){n(o,2,0,e.yb(o,7).ngClassUntouched,e.yb(o,7).ngClassTouched,e.yb(o,7).ngClassPristine,e.yb(o,7).ngClassDirty,e.yb(o,7).ngClassValid,e.yb(o,7).ngClassInvalid,e.yb(o,7).ngClassPending),n(o,11,0,o.context.$implicit.orgNam)})}function m(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,9,"ion-content",[],null,null,null,a.P,a.j)),e.nb(1,49152,null,0,l.t,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,3,"ion-refresher",[],null,[[null,"ionRefresh"]],function(n,o,t){var e=!0;return"ionRefresh"===o&&(e=!1!==n.component.loadData(t)&&e),e},a.eb,a.x)),e.nb(3,49152,null,0,l.bb,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,1,"ion-refresher-content",[["pullingText","\u4e0b\u62c9\u5237\u65b0"],["refreshingText","\u5237\u65b0\u4e2d"]],null,null,null,a.db,a.y)),e.nb(5,49152,null,0,l.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.ob(6,0,null,0,3,"ion-item-group",[],null,null,null,a.Z,a.u)),e.nb(7,49152,null,0,l.I,[e.h,e.k],null,null),(n()(),e.fb(16777216,null,0,1,null,h)),e.nb(9,278528,null,0,u.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var t=o.component;n(o,5,0,"\u4e0b\u62c9\u5237\u65b0","\u5237\u65b0\u4e2d"),n(o,9,0,t.companies)},null)}function x(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,1,"company",[],null,null,null,m,p)),e.nb(1,114688,null,0,r,[l.Gb,d.m,d.a,b.a,g.a,f.a],null,null)],function(n,o){n(o,1,0)},null)}var C=e.kb("company",r,x,{},{},[]);t.d(o,"CompanyModuleNgFactory",function(){return y});var y=e.lb(i,[],function(n){return e.vb([e.wb(512,e.j,e.ab,[[8,[c.a,C]],[3,e.j],e.x]),e.wb(4608,u.k,u.j,[e.u,[2,u.q]]),e.wb(4608,s.k,s.k,[]),e.wb(4608,l.b,l.b,[e.z,e.g]),e.wb(4608,l.Fb,l.Fb,[l.b,e.j,e.q,u.c]),e.wb(4608,l.Ib,l.Ib,[l.b,e.j,e.q,u.c]),e.wb(1073742336,u.b,u.b,[]),e.wb(1073742336,s.i,s.i,[]),e.wb(1073742336,s.b,s.b,[]),e.wb(1073742336,l.Cb,l.Cb,[]),e.wb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),e.wb(1073742336,i,i,[]),e.wb(1024,d.k,function(){return[[{path:"",component:r}]]},[])])})}}]);