(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"9fEO":function(n,t,o){"use strict";o.r(t);var l=o("CcnG"),e=(o("vlXg"),function(){function n(n,t,o){var l=this;this.router=n,this.route=t,this.workflowService=o,this.popOpend=!1,document.title="\u9644\u4ef6\u5217\u8868",this.route.queryParams.subscribe(function(n){console.debug(l.router.getCurrentNavigation().extras.state);var t=l.router.getCurrentNavigation().extras.state;t&&(l.attaches=t.attaches)})}return n.prototype.ngOnInit=function(){},n.prototype.closeWindow=function(){},n.prototype.previewAttach=function(n){var t=this,o=this.attaches[n];"TXT"==o.fileext.toUpperCase()?this.workflowService.getAttachTxt(o.url).then(function(n){t.router.navigateByUrl("/attachPreview",{state:{title:o.filename,content:n}})}):this.router.navigateByUrl("webContent",{state:{url:encodeURIComponent(o.url)}})},n}()),i=function(){return function(){}}(),r=o("pMnS"),c=o("oBZk"),a=o("ZZ/e"),u=o("Ip0R"),s=o("ZYCi"),f=o("1ZaN"),b=l.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.no-shadow[_ngcontent-%COMP%]{box-shadow:0 0 0 0 transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}.button-content[_ngcontent-%COMP%]{width:100%;padding:8px;background:#fff}.item-content[_ngcontent-%COMP%]{display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.img-file[_ngcontent-%COMP%]{width:35px;height:35px}.item-right[_ngcontent-%COMP%]{margin-left:10px;-webkit-flex:1;flex:1;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;font-size:8px;color:#a9a9a9;overflow:hidden}.item-title[_ngcontent-%COMP%]{margin:5px 0;width:100%;font-size:12px;color:#000;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-size[_ngcontent-%COMP%], .item-time[_ngcontent-%COMP%]{margin:0}.item-uploadUser[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function d(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,11,"button",[["class","button-content border-bottom-full"],["detail-push",""],["full",""],["ion-item",""]],null,[[null,"click"]],function(n,t,o){var l=!0;return"click"===t&&(l=!1!==n.component.previewAttach(n.context.index)&&l),l},null,null)),(n()(),l.ob(1,0,null,null,10,"div",[["class","item-content"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,0,"img",[["class","img-file"],["onerror","this.src='../assets/icon/attach_default_ext.png'"]],[[8,"src",4]],null,null,null,null)),(n()(),l.ob(3,0,null,null,8,"div",[["class","item-right"]],null,null,null,null,null)),(n()(),l.ob(4,0,null,null,1,"span",[["class","item-title"]],null,null,null,null,null)),(n()(),l.Cb(5,null,[" "," "])),(n()(),l.ob(6,0,null,null,1,"span",[["class","item-time"]],null,null,null,null,null)),(n()(),l.Cb(7,null,[" "," "])),(n()(),l.ob(8,0,null,null,1,"span",[["class","item-size"]],null,null,null,null,null)),(n()(),l.Cb(9,null,[" "," "])),(n()(),l.ob(10,0,null,null,1,"span",[["class","item-uploadUser"]],null,null,null,null,null)),(n()(),l.Cb(11,null,[" "," "]))],null,function(n,t){n(t,2,0,l.qb(1," ","./assets/icon/attach_"+t.context.$implicit.fileext+".png","")),n(t,5,0,t.context.$implicit.filename),n(t,7,0,t.context.$implicit.uploadtime),n(t,9,0,t.context.$implicit.filesize),n(t,11,0,"\u4e0a\u4f20\u4eba\uff1a"+t.context.$implicit.ownername)})}function p(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,3,"ion-list",[],null,null,null,c.cb,c.w)),l.nb(1,49152,null,0,a.N,[l.h,l.k],null,null),(n()(),l.fb(16777216,null,0,1,null,d)),l.nb(3,278528,null,0,u.h,[l.N,l.K,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,3,0,t.component.attaches)},null)}function g(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,3,"ion-content",[],null,null,null,c.P,c.j)),l.nb(1,49152,null,0,a.t,[l.h,l.k],null,null),(n()(),l.fb(16777216,null,0,1,null,p)),l.nb(3,16384,null,0,u.i,[l.N,l.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,3,0,!t.component.popOpend)},null)}function m(n){return l.Db(0,[(n()(),l.ob(0,0,null,null,1,"attach-list",[],null,null,null,g,b)),l.nb(1,114688,null,0,e,[s.m,s.a,f.a],null,null)],function(n,t){n(t,1,0)},null)}var w=l.kb("attach-list",e,m,{},{},[]),h=o("gIcY");o.d(t,"AttachListPageModuleNgFactory",function(){return x});var x=l.lb(i,[],function(n){return l.vb([l.wb(512,l.j,l.ab,[[8,[r.a,w]],[3,l.j],l.x]),l.wb(4608,u.k,u.j,[l.u,[2,u.q]]),l.wb(4608,h.k,h.k,[]),l.wb(4608,a.b,a.b,[l.z,l.g]),l.wb(4608,a.Fb,a.Fb,[a.b,l.j,l.q,u.c]),l.wb(4608,a.Ib,a.Ib,[a.b,l.j,l.q,u.c]),l.wb(1073742336,u.b,u.b,[]),l.wb(1073742336,h.i,h.i,[]),l.wb(1073742336,h.b,h.b,[]),l.wb(1073742336,a.Cb,a.Cb,[]),l.wb(1073742336,s.n,s.n,[[2,s.t],[2,s.m]]),l.wb(1073742336,i,i,[]),l.wb(1024,s.k,function(){return[[{path:"",component:e}]]},[])])})}}]);