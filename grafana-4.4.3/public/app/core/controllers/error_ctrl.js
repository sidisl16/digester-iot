/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b.default.controller("ErrorCtrl",["$scope","contextSrv","navModelSrv",function(a,b,c){a.navModel=c.getNotFoundNav();var d=b.sidemenu;b.sidemenu=!1,a.$on("$destroy",function(){a.contextSrv.sidemenu=d})}])});