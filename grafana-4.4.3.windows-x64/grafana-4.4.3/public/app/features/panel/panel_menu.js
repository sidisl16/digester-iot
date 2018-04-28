/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","jquery","lodash","tether"],function(a,b,c,d){"use strict";a.module("grafana.directives").directive("panelMenu",["$compile",function(a){function e(a){var b='<div class="panel-menu small">';return a.dashboard.meta.canEdit&&(b+='<div class="panel-menu-inner">',b+='<div class="panel-menu-row">',a.dashboard.meta.fullscreen||(b+='<a class="panel-menu-icon pull-left" ng-click="ctrl.updateColumnSpan(-1)"><i class="fa fa-minus"></i></a>',b+='<a class="panel-menu-icon pull-left" ng-click="ctrl.updateColumnSpan(1)"><i class="fa fa-plus"></i></a>'),b+='<a class="panel-menu-icon pull-right" ng-click="ctrl.removePanel()"><i class="fa fa-trash"></i></a>',b+='<div class="clearfix"></div>',b+="</div>"),b+='<div class="panel-menu-row">',b+='<a class="panel-menu-link" gf-dropdown="extendedMenu"><i class="fa fa-bars"></i></a>',c.each(a.getMenu(),function(c){("Editor"!==c.role||a.dashboard.meta.canEdit)&&(b+='<a class="panel-menu-link" ',c.click&&(b+=' ng-click="'+c.click+'"'),c.href&&(b+=' href="'+c.href+'"'),b+=">",b+=c.text+"</a>")}),b+="</div>",b+="</div>",b+="</div>"}function f(a){return a.getExtendedMenu()}var g='<span class="panel-title drag-handle pointer"><span class="icon-gf panel-alert-icon"></span><span class="panel-title-text drag-handle">{{ctrl.panel.title | interpolateTemplateVars:this}}</span><span class="panel-time-info" ng-show="ctrl.timeInfo"><i class="fa fa-clock-o"></i> {{ctrl.timeInfo}}</span></span>';return{restrict:"A",link:function(c,h){function i(a,b){return clearTimeout(o),o=null,a?void(o=setTimeout(i,a)):b!==!0&&(p.is(":hover")||c.ctrl.dashboard.$$panelDragging)?void i(2200):void(m&&(j.destroy(),p.unbind(),p.remove(),m.$destroy(),m=null,p=null,l.removeClass("panel-highlight")))}var j,k=b(g),l=h.parents(".panel-container"),m=null,n=c.ctrl,o=null,p=null;h.append(k);var q=function(g){if(b.contains(document,g.target)){if(p)return void i();var k;k=e(n),p=b(k),p.mouseleave(function(){i(1e3)}),m=c.$new(),m.extendedMenu=f(n),m.dismiss=function(){i(null,!0)},b(".panel-container").removeClass("panel-highlight"),l.toggleClass("panel-highlight"),b(".panel-menu").remove(),h.append(p),c.$apply(function(){a(p.contents())(m),j=new d({element:p,target:l,attachment:"bottom center",targetAttachment:"top center",constraints:[{to:"window",attachment:"together",pin:!0}]})}),i(2200)}};h.click(q),a(h.contents())(c)}}}])});