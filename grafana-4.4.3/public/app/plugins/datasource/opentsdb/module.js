/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl","./config_ctrl"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){a("Datasource",c.OpenTsDatasource),a("QueryCtrl",d.OpenTsQueryCtrl),a("ConfigCtrl",e.OpenTsConfigCtrl),f=function(){function a(){}return a}(),f.templateUrl="partials/annotations.editor.html",a("AnnotationsQueryCtrl",f)}}});