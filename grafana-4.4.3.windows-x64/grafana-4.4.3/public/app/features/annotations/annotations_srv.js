/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./editor_ctrl","angular","lodash","app/core/core_module"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){},function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d,e){this.$rootScope=a,this.$q=b,this.datasourceSrv=c,this.backendSrv=d,this.timeSrv=e,a.onAppEvent("refresh",this.clearCache.bind(this),a),a.onAppEvent("dashboard-initialized",this.clearCache.bind(this),a)}return a.$inject=["$rootScope","$q","datasourceSrv","backendSrv","timeSrv"],a.prototype.clearCache=function(){this.globalAnnotationsPromise=null,this.alertStatesPromise=null},a.prototype.getAnnotations=function(a){var b=this;return this.$q.all([this.getGlobalAnnotations(a),this.getPanelAnnotations(a),this.getAlertStates(a)]).then(function(b){var c=d.default.flattenDeep([b[0],b[1]]);c=d.default.filter(c,function(b){return 1!==b.source.showIn||!(!b.panelId||a.panel.id!==b.panelId)});var e=d.default.find(b[2],{panelId:a.panel.id});return{annotations:c,alertState:e}}).catch(function(a){return!a.message&&a.data&&a.data.message&&(a.message=a.data.message),b.$rootScope.appEvent("alert-error",["Annotation Query Failed",a.message||a]),[]})},a.prototype.getPanelAnnotations=function(a){var b=this,c=a.panel,d=a.dashboard;return d.id&&c&&c.alert?this.backendSrv.get("/api/annotations",{from:a.range.from.valueOf(),to:a.range.to.valueOf(),limit:100,panelId:c.id,dashboardId:d.id}).then(function(a){return b.translateQueryResult({iconColor:"#AA0000",name:"panel-alert"},a)}):this.$q.when([])},a.prototype.getAlertStates=function(a){return a.dashboard.id?a.panel&&!a.panel.alert?this.$q.when([]):"now"!==a.range.raw.to?this.$q.when([]):this.alertStatesPromise?this.alertStatesPromise:(this.alertStatesPromise=this.backendSrv.get("/api/alerts/states-for-dashboard",{dashboardId:a.dashboard.id}),this.alertStatesPromise):this.$q.when([])},a.prototype.getGlobalAnnotations=function(a){var b=this,e=a.dashboard;if(0===e.annotations.list.length)return this.$q.when([]);if(this.globalAnnotationsPromise)return this.globalAnnotationsPromise;var f=d.default.filter(e.annotations.list,{enable:!0}),g=this.timeSrv.timeRange();return this.globalAnnotationsPromise=this.$q.all(d.default.map(f,function(a){return a.snapshotData?b.translateQueryResult(a,a.snapshotData):b.datasourceSrv.get(a.datasource).then(function(b){return b.annotationQuery({range:g,rangeRaw:g.raw,annotation:a})}).then(function(d){return e.snapshot&&(a.snapshotData=c.default.copy(d)),b.translateQueryResult(a,d)})})),this.globalAnnotationsPromise},a.prototype.saveAnnotationEvent=function(a){return this.globalAnnotationsPromise=null,this.backendSrv.post("/api/annotations",a)},a.prototype.translateQueryResult=function(a,b){a.snapshotData&&(a=c.default.copy(a),delete a.snapshotData);for(var d=0,e=b;d<e.length;d++){var f=e[d];f.source=a,f.min=f.time,f.max=f.time,f.scope=1,f.eventType=a.name}return b},a}(),a("AnnotationsSrv",f),e.default.service("annotationsSrv",f)}}});