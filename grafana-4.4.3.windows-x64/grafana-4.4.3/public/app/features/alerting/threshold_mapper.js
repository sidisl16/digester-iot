/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(){}return a.alertToGraphThresholds=function(a){a.alert;if("graph"!==a.type)return!1;for(var b=0;b<a.alert.conditions.length;b++){var c=a.alert.conditions[b];if("query"===c.type){var d=c.evaluator,e=a.thresholds=[];switch(d.type){case"gt":var f=d.params[0];e.push({value:f,op:"gt"});break;case"lt":var f=d.params[0];e.push({value:f,op:"lt"});break;case"outside_range":var g=d.params[0],h=d.params[1];g>h?(e.push({value:g,op:"gt"}),e.push({value:h,op:"lt"})):(e.push({value:g,op:"lt"}),e.push({value:h,op:"gt"}));break;case"within_range":var g=d.params[0],h=d.params[1];g>h?(e.push({value:g,op:"lt"}),e.push({value:h,op:"gt"})):(e.push({value:g,op:"gt"}),e.push({value:h,op:"lt"}))}break}}for(var i=0,j=a.thresholds;i<j.length;i++){var k=j[i];k.fill=!0,k.line=!0,k.colorMode="critical"}var l=!0;return l},a}(),a("ThresholdMapper",c)}}});