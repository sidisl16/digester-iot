/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a){this.model=a,this.defaults={title:"Dashboard Row",panels:[],showTitle:!1,titleSize:"h6",height:250,isNew:!1,repeat:null,repeatRowId:null,repeatIteration:null,collapse:!1},d.assignModelProperties(this,a,this.defaults),this.events=new d.Emitter,this.updateRowSpan()}return a.prototype.getSaveModel=function(){return this.model={},d.assignModelProperties(this.model,this,this.defaults),delete this.model.isNew,this.model},a.prototype.updateRowSpan=function(){this.span=0;for(var a=0,b=this.panels;a<b.length;a++){var c=b[a];this.span+=c.span}},a.prototype.panelSpanChanged=function(a){var b=this.span;this.updateRowSpan(),(a||b!==this.span)&&this.events.emit("span-changed")},a.prototype.addPanel=function(a){var b=this.span,c=this.panels.length,d=12-b-a.span;d<=0&&(1===c?(this.panels[0].span=6,a.span=6):2===c?(this.panels[0].span=4,this.panels[1].span=4,a.span=4):3===c&&(this.panels[0].span=3,this.panels[1].span=3,this.panels[2].span=3,a.span=3)),this.panels.push(a),this.events.emit("panel-added",a),this.panelSpanChanged()},a.prototype.removePanel=function(a,b){var e=this;if(b!==!1){var f,g;return a.alert&&(f="Panel includes an alert rule, removing panel will also remove alert rule",g="YES"),void d.appEvents.emit("confirm-modal",{title:"Remove Panel",text:"Are you sure you want to remove this panel?",text2:f,icon:"fa-trash",confirmText:g,yesText:"Remove",onConfirm:function(){e.removePanel(a,!1)}})}var h=c.default.indexOf(this.panels,a);this.panels.splice(h,1),this.events.emit("panel-removed",a),this.panelSpanChanged()},a.prototype.movePanel=function(a,b){this.panels.splice(b,0,this.panels.splice(a,1)[0])},a.prototype.destroy=function(){this.events.removeAllListeners()},a.prototype.copyPropertiesFromRowSource=function(a){this.height=a.height,this.title=a.title,this.showTitle=a.showTitle,this.titleSize=a.titleSize},a.prototype.toggleCollapse=function(){this.collapse=!this.collapse},a}(),a("DashboardRow",e)}}});