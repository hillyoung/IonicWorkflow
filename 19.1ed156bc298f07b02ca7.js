(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wnk5:function(n,o,l){"use strict";l.r(o);var e=l("CcnG"),t=l("ZZ/e"),i=(l("vlXg"),function(n){return n[n.executeWorkFlow=0]="executeWorkFlow",n[n.executeWorkFlow1=1]="executeWorkFlow1",n[n.executeWorkFlow2=2]="executeWorkFlow2",n[n.executeWorkFlow3=3]="executeWorkFlow3",n[n.backWorkFlow=4]="backWorkFlow",n[n.cooperateWorkFlow=7]="cooperateWorkFlow",n[n.cooperateTodoWorkFlow=8]="cooperateTodoWorkFlow",n[n.startWorkFlow=10]="startWorkFlow",n[n.backWorkFlowToFirst=11]="backWorkFlowToFirst",n[n.stopWorkFlow=12]="stopWorkFlow",n[n.notifyWorkFlow=14]="notifyWorkFlow",n[n.readedWorkFlow=15]="readedWorkFlow",n[n.addSignWorkFlow=16]="addSignWorkFlow",n[n.commitorStopWorkFlow=95]="commitorStopWorkFlow",n}({})),r=function(){function n(n,o,l,e,t,i,r){var u=this;this.router=n,this.route=o,this.nav=l,this.dataService=e,this.util=t,this.userService=i,this.workflowService=r,this.operation={},this.list=[],this.urgent=!1,this.zhiHuiSection={showZhiHui:!0,userlist:[]},this.route.queryParams.subscribe(function(n){console.debug(u.router.getCurrentNavigation().extras.state);var o=u.router.getCurrentNavigation().extras.state;o&&(u.operation=o.operation,u.showComm=u.enableToEditComm(),u.comm="",u.updateZhiHuiGroup()),document.title=u.operation.operName||""})}return n.prototype.ngOnInit=function(){this.operation.operTyp==i.readedWorkFlow||this.getNextNode()},n.prototype.needInputComment=function(){return"1"==this.operation.isHascomm||this.operation.operTyp==i.addSignWorkFlow||this.operation.operTyp==i.backWorkFlowToFirst||this.operation.operTyp==i.backWorkFlow},n.prototype.needCreateChuLiNode=function(){return this.operation.operTyp==i.addSignWorkFlow||this.operation.operTyp==i.cooperateWorkFlow},n.prototype.notNeedNextNode=function(){return this.operation.operTyp==i.cooperateTodoWorkFlow},n.prototype.onClickConfirmButton=function(){var n,o,l="",e=[];this.nextNodes.forEach(function(n,o,l){if(n.selected){var t={objNo:n.nextObjectNo,users:[]},i=[];n.userlist.forEach(function(n,o,l){n.selected&&i.push(n.userId)}),t.users=i,e.push(t)}}),n=JSON.stringify(e);var t=[];if(this.zhiHuiSection.userlist.forEach(function(n,o,l){n.selected&&t.push(n.userId)}),o=t.join(";"),this.needInputComment()&&this.comm.length<1)this.util.showToast("\u8bf7\u8f93\u5165\u5904\u7406\u610f\u89c1");else if(this.nextNodes.length>0&&0==e.length)this.util.showToast("\u8bf7\u9009\u62e9\uff08\u6216\u6dfb\u52a0\uff09\u540e\u7eed\u5904\u7406\u4eba");else{var r=this;if(this.operation.operTyp==i.startWorkFlow)this.workflowService.startWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,rapid:this.rapidParam(),commitNodeJson:n,noticeUserList:o}).then(function(n){r.handleExecuteResponse(n)});else if(this.operation.operTyp==i.backWorkFlow)this.workflowService.backWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,rapid:this.rapidParam(),backObjectNo:this.operation.backObjectNo,noticeUserList:o,todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)});else if(this.operation.operTyp==i.executeWorkFlow||this.operation.operTyp==i.executeWorkFlow1||this.operation.operTyp==i.executeWorkFlow2||this.operation.operTyp==i.executeWorkFlow3)this.workflowService.executeWorkFlowBranch({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,operTyp:this.operation.operTyp,operIdx:this.operation.operIdx,comm:this.comm,rapid:this.rapidParam(),todoNo:this.operation.toDoListNo,commitNodeJson:n,noticeUserList:o}).then(function(n){r.handleExecuteResponse(n)});else if(this.operation.operTyp==i.addSignWorkFlow){if(null==(l=this.todoUser(this.nextNodes)))return;this.workflowService.addSignWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,rapid:this.rapidParam(),todoUser:l,noticeUserList:o,todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)})}else if(this.operation.operTyp==i.backWorkFlowToFirst)this.workflowService.backWorkFlowToFirst({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,rapid:this.rapidParam(),todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)});else if(this.operation.operTyp==i.cooperateWorkFlow){if(null==(l=this.todoUser(this.nextNodes)))return;this.workflowService.cooperateWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,rapid:this.rapidParam(),todoUser:l,todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)})}else if(this.operation.operTyp==i.cooperateTodoWorkFlow)this.workflowService.cooperateTodoWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)});else if(this.operation.operTyp==i.notifyWorkFlow){if(null==(l=this.todoUser(this.nextNodes)))return;this.workflowService.notifyWorkFlow({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,comm:this.comm,rapid:this.rapidParam(),todoUser:l,todoNo:this.operation.toDoListNo}).then(function(n){r.handleExecuteResponse(n)})}else this.util.showToast("\u65e0\u6b64\u64cd\u4f5c\u547d\u4ee4\uff0c\u8bf7\u8054\u7cfb\u7cfb\u7edf\u7ba1\u7406\u5458")}},n.prototype.selectItem=function(n){},n.prototype.onClickAddUserButton=function(n){var o=this;this.dataService.setData("addUser",function(l){var e=[],t=[];l.forEach(function(n,o,l){e.push({userId:n.id,userNam:n.name,selected:!0}),t.push(n.id)});var r=n.userlist.filter(function(n,o,l){return-1==t.indexOf(n.userId)});n.userlist=o.operation.operTyp==i.addSignWorkFlow?e:r.concat(e)}),this.router.navigateByUrl("/addUser",{state:{singleSelect:this.operation.operTyp==i.addSignWorkFlow,callbackid:"addUser"}})},n.prototype.rapidParam=function(){return this.urgent?"1":"0"},n.prototype.enableToEditComm=function(){return this.operation.operTyp==i.backWorkFlowToFirst||this.operation.operTyp==i.addSignWorkFlow||this.operation.operTyp==i.executeWorkFlow||this.operation.operTyp==i.backWorkFlow||this.operation.operTyp==i.readedWorkFlow||this.operation.operTyp==i.executeWorkFlow1||this.operation.operTyp==i.executeWorkFlow2||this.operation.operTyp==i.executeWorkFlow3||this.operation.operTyp==i.cooperateWorkFlow||this.operation.operTyp==i.cooperateTodoWorkFlow||this.operation.operTyp==i.notifyWorkFlow},n.prototype.updateZhiHuiGroup=function(){this.zhiHuiSection.showZhiHui=this.operation.operTyp!=i.backWorkFlowToFirst&&this.operation.operTyp!=i.stopWorkFlow&&this.operation.operTyp!=i.commitorStopWorkFlow&&this.operation.operTyp!=i.cooperateTodoWorkFlow&&"05"!=this.operation.operTyp},n.prototype.resultForSortUserByMopno=function(n,o){return o-n},n.prototype.handleExecuteResponse=function(n){"true"==n.result||this.util.showToast("\u6267\u884c\u5931\u8d25")},n.prototype.todoUser=function(n){var o=[];return n.forEach(function(n,l,e){n.selected&&n.userlist.forEach(function(n,l,e){n.selected&&o.push(n)})}),1!=o.length?(this.util.showToast("\u8bf7\u786e\u8ba4\u9009\u4e2d\u4e00\u4f4d\u5904\u7406\u4eba"),null):o.slice().shift().userId},n.prototype.getNextNode=function(){var n=this,o=this;this.workflowService.getNextNodes({pgmId:this.operation.pgmId,tblNam:this.operation.tblNam,pkValue:this.operation.pkValue,userId:this.userService.getUserInfo().userId,operTyp:this.operation.operTyp,operIdx:this.operation.operIdx,todoNo:this.operation.toDoListNo}).then(function(l){var e=[],t=[];o.operation.currentNodeName=l.nodeSht,null!=l.nodes&&(e=l.nodes),null!=l.noticeUserList&&(t=l.noticeUserList),e.forEach(function(n,l,e){n.selected=!0,"true"!==n.isCheckAll&&1!=n.userlist.length||n.userlist.forEach(function(n,o,l){n.selected=!0}),n.userlist=n.userlist.sort(function(n,l){return o.resultForSortUserByMopno(Number(n.mopno),Number(l.mopno))}),t=t.sort(function(n,l){return o.resultForSortUserByMopno(Number(n.mopno),Number(l.mopno))})}),o.nextNodes=n.needCreateChuLiNode()?[{userlist:[],isObjConfig:"false",isCheckAll:"false",nextObjectNo:"",isCanConfig:"true",nextObjectSht:"\u5904\u7406\u4eba",selected:!0}]:n.notNeedNextNode()?[]:e,o.zhiHuiSection.userlist=l.noticeUserList||[]})},n}(),u=function(){return function(){}}(),s=l("pMnS"),c=l("oBZk"),a=l("gIcY"),p=l("Ip0R"),d=l("ZYCi"),h=l("AwSQ"),b=l("BaxT"),g=l("Ouoq"),m=l("1ZaN"),f=e.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}ion-item-group[_ngcontent-%COMP%]{margin-top:8px}ion-item[_ngcontent-%COMP%]{--padding-end:8px;--background:white;--border-color:#F0F0F0}.item-current-title[_ngcontent-%COMP%]{font-size:14px;line-height:14px;color:#666}.item-current-content[_ngcontent-%COMP%]{font-size:14px;line-height:14px;color:#333;text-align:right}.item-textarea-comm[_ngcontent-%COMP%]{height:120px;--placeholder-color:#BDBDBD;--placeholder-opacity:1;font-size:14px;line-height:14px;color:#333}.item-urgent-title[_ngcontent-%COMP%]{font-size:14px;line-height:14px;color:#666}.item-urgent-toggle[_ngcontent-%COMP%]{--background:#D8D8D8}.header[_ngcontent-%COMP%]{background-color:#fff}.section-header[_ngcontent-%COMP%]{height:50px}.checkbox-node[_ngcontent-%COMP%]{margin-right:8px}.header-title[_ngcontent-%COMP%]{font-size:14px;line-height:14px;color:#333}.label-content-add[_ngcontent-%COMP%]{-webkit-flex:1;flex:1}.item-content-user[_ngcontent-%COMP%]{--background:white}.checkbox-user[_ngcontent-%COMP%]{margin-left:16px;--border-width:1px;--checkmark-color:white;--background-checked:#3DBB06;--border-color-checked:#3DBB06}.icon-add-user[_ngcontent-%COMP%]{font-size:25px;z-index:99999}.title-user[_ngcontent-%COMP%]{font-size:18px;line-height:18px;color:#333}.btn-submit[_ngcontent-%COMP%]{width:calc(100% - 32px);margin:0 16px 16px}"]],data:{}});function k(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,8,"ion-item",[],null,null,null,c.ab,c.s)),e.nb(1,49152,null,0,t.G,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,6,"ion-textarea",[["class","item-textarea-comm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,l){var t=!0,i=n.component;return"ionBlur"===o&&(t=!1!==e.yb(n,3)._handleBlurEvent()&&t),"ionChange"===o&&(t=!1!==e.yb(n,3)._handleInputEvent(l.target.value)&&t),"ngModelChange"===o&&(t=!1!==(i.comm=l)&&t),t},c.hb,c.B)),e.nb(3,16384,null,0,t.Jb,[e.k],null,null),e.zb(1024,null,a.c,function(n){return[n]},[t.Jb]),e.nb(5,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,a.d,null,[a.h]),e.nb(7,16384,null,0,a.e,[[4,a.d]],null,null),e.nb(8,49152,null,0,t.wb,[e.h,e.k],{placeholder:[0,"placeholder"]},null)],function(n,o){var l=o.component;n(o,5,0,l.comm),n(o,8,0,e.qb(1,"",l.needInputComment()?"\u8bf7\u8f93\u5165\u5904\u7406\u610f\u89c1\uff08\u5fc5\u586b\uff09":"\u8bf7\u8f93\u5165\u5904\u7406\u610f\u89c1",""))},function(n,o){n(o,2,0,e.yb(o,7).ngClassUntouched,e.yb(o,7).ngClassTouched,e.yb(o,7).ngClassPristine,e.yb(o,7).ngClassDirty,e.yb(o,7).ngClassValid,e.yb(o,7).ngClassInvalid,e.yb(o,7).ngClassPending)})}function y(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,6,"ion-checkbox",[["class","checkbox-node"],["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,l){var t=!0;return"ionBlur"===o&&(t=!1!==e.yb(n,1)._handleBlurEvent()&&t),"ionChange"===o&&(t=!1!==e.yb(n,1)._handleIonChange(l.target.checked)&&t),"ngModelChange"===o&&(t=!1!==(n.parent.context.$implicit.selected=l)&&t),t},c.N,c.h)),e.nb(1,16384,null,0,t.c,[e.k],null,null),e.zb(1024,null,a.c,function(n){return[n]},[t.c]),e.nb(3,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,a.d,null,[a.h]),e.nb(5,16384,null,0,a.e,[[4,a.d]],null,null),e.nb(6,49152,null,0,t.q,[e.h,e.k],{color:[0,"color"]},null)],function(n,o){n(o,3,0,o.parent.context.$implicit.selected),n(o,6,0,"primary")},function(n,o){n(o,0,0,e.yb(o,5).ngClassUntouched,e.yb(o,5).ngClassTouched,e.yb(o,5).ngClassPristine,e.yb(o,5).ngClassDirty,e.yb(o,5).ngClassValid,e.yb(o,5).ngClassInvalid,e.yb(o,5).ngClassPending)})}function w(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,3,"ion-label",[["class","label-content-add"],["text-right",""]],null,null,null,c.bb,c.v)),e.nb(1,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,1,"ion-icon",[["class","icon-add-user"],["color","primary"],["name","ios-add-circle-outline"],["size","large"]],null,[[null,"click"]],function(n,o,l){var e=!0;return"click"===o&&(e=!1!==n.component.onClickAddUserButton(n.parent.context.$implicit)&&e),e},c.T,c.n)),e.nb(3,49152,null,0,t.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null)],function(n,o){n(o,3,0,"primary","ios-add-circle-outline","large")},null)}function C(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,11,"ion-item",[["class","item-content-user"],["lines","none"],["row-wrap",""]],null,null,null,c.ab,c.s)),e.nb(1,49152,null,0,t.G,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.ob(2,0,null,0,6,"ion-checkbox",[["class","checkbox-user"],["color","theme"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,l){var t=!0,i=n.component;return"ionBlur"===o&&(t=!1!==e.yb(n,3)._handleBlurEvent()&&t),"ionChange"===o&&(t=!1!==e.yb(n,3)._handleIonChange(l.target.checked)&&t),"ngModelChange"===o&&(t=!1!==(n.context.$implicit.selected=l)&&t),"click"===o&&(t=!1!==i.selectItem(n.context.$implicit)&&t),t},c.N,c.h)),e.nb(3,16384,null,0,t.c,[e.k],null,null),e.zb(1024,null,a.c,function(n){return[n]},[t.c]),e.nb(5,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,a.d,null,[a.h]),e.nb(7,16384,null,0,a.e,[[4,a.d]],null,null),e.nb(8,49152,null,0,t.q,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(9,0,null,0,2,"ion-label",[["class","title-user"]],null,null,null,c.bb,c.v)),e.nb(10,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(11,0,["",""]))],function(n,o){n(o,1,0,"none"),n(o,5,0,o.context.$implicit.selected),n(o,8,0,"theme")},function(n,o){n(o,2,0,e.yb(o,7).ngClassUntouched,e.yb(o,7).ngClassTouched,e.yb(o,7).ngClassPristine,e.yb(o,7).ngClassDirty,e.yb(o,7).ngClassValid,e.yb(o,7).ngClassInvalid,e.yb(o,7).ngClassPending),n(o,11,0,o.context.$implicit.userNam)})}function x(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,12,"ion-item-group",[["clear",""]],null,null,null,c.Z,c.u)),e.nb(1,49152,null,0,t.I,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,8,"ion-item-divider",[["class","header section-header"],["color","light"]],null,null,null,c.Y,c.t)),e.nb(3,49152,null,0,t.H,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.fb(16777216,null,0,1,null,y)),e.nb(5,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(6,0,null,0,2,"ion-label",[["class","header-title"]],null,null,null,c.bb,c.v)),e.nb(7,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(8,0,["",""])),(n()(),e.fb(16777216,null,0,1,null,w)),e.nb(10,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(16777216,null,0,1,null,C)),e.nb(12,278528,null,0,p.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var l=o.component;n(o,3,0,"light"),n(o,5,0,l.nextNodes.length>1),n(o,10,0,"true"==o.context.$implicit.isCanConfig),n(o,12,0,o.context.$implicit.userlist)},function(n,o){n(o,8,0,o.context.$implicit.nextObjectSht)})}function F(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,11,"ion-item",[["class","item-content-user"],["lines","none"],["row-wrap",""]],null,null,null,c.ab,c.s)),e.nb(1,49152,null,0,t.G,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.ob(2,0,null,0,6,"ion-checkbox",[["class","checkbox-user"],["color","theme"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,l){var t=!0,i=n.component;return"ionBlur"===o&&(t=!1!==e.yb(n,3)._handleBlurEvent()&&t),"ionChange"===o&&(t=!1!==e.yb(n,3)._handleIonChange(l.target.checked)&&t),"ngModelChange"===o&&(t=!1!==(n.context.$implicit.selected=l)&&t),"click"===o&&(t=!1!==i.selectItem(n.context.$implicit)&&t),t},c.N,c.h)),e.nb(3,16384,null,0,t.c,[e.k],null,null),e.zb(1024,null,a.c,function(n){return[n]},[t.c]),e.nb(5,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,a.d,null,[a.h]),e.nb(7,16384,null,0,a.e,[[4,a.d]],null,null),e.nb(8,49152,null,0,t.q,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(9,0,null,0,2,"ion-label",[["class","title-user"]],null,null,null,c.bb,c.v)),e.nb(10,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(11,0,["",""]))],function(n,o){n(o,1,0,"none"),n(o,5,0,o.context.$implicit.selected),n(o,8,0,"theme")},function(n,o){n(o,2,0,e.yb(o,7).ngClassUntouched,e.yb(o,7).ngClassTouched,e.yb(o,7).ngClassPristine,e.yb(o,7).ngClassDirty,e.yb(o,7).ngClassValid,e.yb(o,7).ngClassInvalid,e.yb(o,7).ngClassPending),n(o,11,0,o.context.$implicit.userNam)})}function v(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,12,"ion-item-group",[],null,null,null,c.Z,c.u)),e.nb(1,49152,null,0,t.I,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,8,"ion-item-divider",[["class","header section-header"],["color","light"]],null,null,null,c.Y,c.t)),e.nb(3,49152,null,0,t.H,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.ob(4,0,null,0,2,"ion-label",[["class","header-title"]],null,null,null,c.bb,c.v)),e.nb(5,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(-1,0,["\u77e5\u4f1a"])),(n()(),e.ob(7,0,null,0,3,"ion-label",[["class","label-content-add"],["text-right",""]],null,null,null,c.bb,c.v)),e.nb(8,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.ob(9,0,null,0,1,"ion-icon",[["class","icon-add-user"],["color","primary"],["name","ios-add-circle-outline"],["size","large"]],null,[[null,"click"]],function(n,o,l){var e=!0,t=n.component;return"click"===o&&(e=!1!==t.onClickAddUserButton(t.zhiHuiSection)&&e),e},c.T,c.n)),e.nb(10,49152,null,0,t.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(n()(),e.fb(16777216,null,0,1,null,F)),e.nb(12,278528,null,0,p.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var l=o.component;n(o,3,0,"light"),n(o,10,0,"primary","ios-add-circle-outline","large"),n(o,12,0,l.zhiHuiSection.userlist)},null)}function N(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,29,"ion-content",[],null,null,null,c.P,c.j)),e.nb(1,49152,null,0,t.t,[e.h,e.k],null,null),(n()(),e.ob(2,0,null,0,23,"ion-item-group",[],null,null,null,c.Z,c.u)),e.nb(3,49152,null,0,t.I,[e.h,e.k],null,null),(n()(),e.ob(4,0,null,0,7,"ion-item",[["row-wrap",""]],null,null,null,c.ab,c.s)),e.nb(5,49152,null,0,t.G,[e.h,e.k],null,null),(n()(),e.ob(6,0,null,0,2,"ion-label",[["class","item-current-title"]],null,null,null,c.bb,c.v)),e.nb(7,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(-1,0,["\u5f53\u524d\u8282\u70b9:"])),(n()(),e.ob(9,0,null,0,2,"ion-label",[["class","item-current-content"]],null,null,null,c.bb,c.v)),e.nb(10,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(11,0,["",""])),(n()(),e.fb(16777216,null,0,1,null,k)),e.nb(13,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(14,0,null,0,11,"ion-item",[["lines","none"]],null,null,null,c.ab,c.s)),e.nb(15,49152,null,0,t.G,[e.h,e.k],{lines:[0,"lines"]},null),(n()(),e.ob(16,0,null,0,2,"ion-label",[["class","item-urgent-title"]],null,null,null,c.bb,c.v)),e.nb(17,49152,null,0,t.M,[e.h,e.k],null,null),(n()(),e.Cb(-1,0,["\u662f\u5426\u52a0\u6025"])),(n()(),e.ob(19,0,null,0,6,"ion-toggle",[["class","item-urgent-toggle"],["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,o,l){var t=!0,i=n.component;return"ionBlur"===o&&(t=!1!==e.yb(n,20)._handleBlurEvent()&&t),"ionChange"===o&&(t=!1!==e.yb(n,20)._handleIonChange(l.target.checked)&&t),"ngModelChange"===o&&(t=!1!==(i.urgent=l)&&t),t},c.jb,c.D)),e.nb(20,16384,null,0,t.c,[e.k],null,null),e.zb(1024,null,a.c,function(n){return[n]},[t.c]),e.nb(22,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.zb(2048,null,a.d,null,[a.h]),e.nb(24,16384,null,0,a.e,[[4,a.d]],null,null),e.nb(25,49152,null,0,t.zb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.fb(16777216,null,0,1,null,x)),e.nb(27,278528,null,0,p.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.fb(16777216,null,0,1,null,v)),e.nb(29,16384,null,0,p.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(30,0,null,null,4,"ion-footer",[],null,null,null,c.Q,c.k)),e.nb(31,49152,null,0,t.y,[e.h,e.k],null,null),(n()(),e.ob(32,0,null,0,2,"ion-button",[["class","btn-submit"]],null,[[null,"click"]],function(n,o,l){var e=!0;return"click"===o&&(e=!1!==n.component.onClickConfirmButton()&&e),e},c.H,c.b)),e.nb(33,49152,null,0,t.j,[e.h,e.k],null,null),(n()(),e.Cb(-1,0,[" \u786e\u5b9a "]))],function(n,o){var l=o.component;n(o,13,0,l.showComm),n(o,15,0,"none"),n(o,22,0,l.urgent),n(o,25,0,"primary"),n(o,27,0,l.nextNodes),n(o,29,0,l.zhiHuiSection.showZhiHui)},function(n,o){n(o,11,0,o.component.operation.currentNodeName),n(o,19,0,e.yb(o,24).ngClassUntouched,e.yb(o,24).ngClassTouched,e.yb(o,24).ngClassPristine,e.yb(o,24).ngClassDirty,e.yb(o,24).ngClassValid,e.yb(o,24).ngClassInvalid,e.yb(o,24).ngClassPending)})}function I(n){return e.Db(0,[(n()(),e.ob(0,0,null,null,1,"approve",[],null,null,null,N,f)),e.nb(1,114688,null,0,r,[d.m,d.a,t.Gb,h.a,b.a,g.a,m.a],null,null)],function(n,o){n(o,1,0)},null)}var W=e.kb("approve",r,I,{},{},[]);l.d(o,"ApproveModuleNgFactory",function(){return T});var T=e.lb(u,[],function(n){return e.vb([e.wb(512,e.j,e.ab,[[8,[s.a,W]],[3,e.j],e.x]),e.wb(4608,p.k,p.j,[e.u,[2,p.q]]),e.wb(4608,a.k,a.k,[]),e.wb(4608,t.b,t.b,[e.z,e.g]),e.wb(4608,t.Fb,t.Fb,[t.b,e.j,e.q,p.c]),e.wb(4608,t.Ib,t.Ib,[t.b,e.j,e.q,p.c]),e.wb(1073742336,p.b,p.b,[]),e.wb(1073742336,a.i,a.i,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,t.Cb,t.Cb,[]),e.wb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),e.wb(1073742336,u,u,[]),e.wb(1024,d.k,function(){return[[{path:"",component:r}]]},[])])})}}]);