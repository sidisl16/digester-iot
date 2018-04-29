/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./history_srv","lodash","angular","moment"],function(a,b){"use strict";function c(){return{restrict:"E",templateUrl:"public/app/features/dashboard/history/history.html",controller:g,bindToController:!0,controllerAs:"ctrl",scope:{dashboard:"="}}}b&&b.id;a("dashboardHistoryDirective",c);var d,e,f,g;return{setters:[function(a){},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d,e,f,g,h){this.$scope=a,this.$route=b,this.$rootScope=c,this.$location=d,this.$window=e,this.$timeout=f,this.$q=g,this.historySrv=h,this.appending=!1,this.diff="basic",this.limit=10,this.loading=!1,this.max=2,this.mode="list",this.start=0,this.canCompare=!1,this.$rootScope.onAppEvent("dashboard-saved",this.onDashboardSaved.bind(this),a),this.resetFromSource()}return a.$inject=["$scope","$route","$rootScope","$location","$window","$timeout","$q","historySrv"],a.prototype.onDashboardSaved=function(){this.resetFromSource()},a.prototype.switchMode=function(a){this.mode=a,"list"===this.mode&&this.reset()},a.prototype.dismiss=function(){this.$rootScope.appEvent("hide-dash-editor")},a.prototype.addToLog=function(){this.start=this.start+this.limit,this.getLog(!0)},a.prototype.revisionSelectionChanged=function(){var a=d.default.filter(this.revisions,{checked:!0}).length;this.canCompare=2===a},a.prototype.formatDate=function(a){return this.dashboard.formatDate(a)},a.prototype.formatBasicDate=function(a){var b="browser"===this.dashboard.timezone?f.default():f.default.utc(),c="browser"===this.dashboard.timezone?f.default(a):f.default.utc(a);return c.from(b)},a.prototype.getDiff=function(a){var b=this;if(this.diff=a,this.mode="compare",this.delta[this.diff])return this.$q.when(this.delta[this.diff]);var c=d.default.filter(this.revisions,{checked:!0});this.newInfo=c[0],this.baseInfo=c[1],this.isNewLatest=this.newInfo.version===this.dashboard.version,this.loading=!0;var e={new:{dashboardId:this.dashboard.id,version:this.newInfo.version},base:{dashboardId:this.dashboard.id,version:this.baseInfo.version},diffType:a};return this.historySrv.calculateDiff(e).then(function(a){b.delta[b.diff]=a}).catch(function(){b.mode="list"}).finally(function(){b.loading=!1})},a.prototype.getLog=function(a){var b=this;void 0===a&&(a=!1),this.loading=!a,this.appending=a;var c={limit:this.limit,start:this.start};return this.historySrv.getHistoryList(this.dashboard,c).then(function(c){for(var d=0,e=c;d<e.length;d++){var f=e[d];f.createdDateString=b.formatDate(f.created),f.ageString=b.formatBasicDate(f.created),f.checked=!1}b.revisions=a?b.revisions.concat(c):c}).catch(function(a){b.loading=!1}).finally(function(){b.loading=!1,b.appending=!1})},a.prototype.isLastPage=function(){return d.default.find(this.revisions,function(a){return 1===a.version})},a.prototype.reset=function(){this.delta={basic:"",json:""},this.diff="basic",this.mode="list",this.revisions=d.default.map(this.revisions,function(a){return d.default.extend({},a,{checked:!1})}),this.canCompare=!1,this.start=0,this.isNewLatest=!1},a.prototype.resetFromSource=function(){return this.revisions=[],this.getLog().then(this.reset.bind(this))},a.prototype.restore=function(a){this.$rootScope.appEvent("confirm-modal",{title:"Restore version",text:"",text2:"Are you sure you want to restore the dashboard to version "+a+"? All unsaved changes will be lost.",icon:"fa-history",yesText:"Yes, restore to version "+a,onConfirm:this.restoreConfirm.bind(this,a)})},a.prototype.restoreConfirm=function(a){var b=this;return this.loading=!0,this.historySrv.restoreDashboard(this.dashboard,a).then(function(c){b.$location.path("dashboard/db/"+c.slug),b.$route.reload(),b.$rootScope.appEvent("alert-success",["Dashboard restored","Restored from version "+a])}).catch(function(){b.mode="list",b.loading=!1})},a}(),a("HistoryListCtrl",g),e.default.module("grafana.directives").directive("gfDashboardHistory",c)}}});