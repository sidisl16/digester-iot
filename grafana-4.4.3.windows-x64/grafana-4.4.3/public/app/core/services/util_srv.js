/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module","app/core/app_events"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b){this.$rootScope=a,this.$modal=b}return a.$inject=["$rootScope","$modal"],a.prototype.init=function(){d.default.on("show-modal",this.showModal.bind(this),this.$rootScope),d.default.on("hide-modal",this.hideModal.bind(this),this.$rootScope)},a.prototype.hideModal=function(){this.modalScope&&this.modalScope.dismiss&&this.modalScope.dismiss()},a.prototype.showModal=function(a){this.modalScope&&this.modalScope.dismiss&&this.modalScope.dismiss(),this.modalScope=a.scope,a.model?(this.modalScope=this.$rootScope.$new(),this.modalScope.model=a.model):this.modalScope||(this.modalScope=this.$rootScope.$new());var b=this.$modal({modalClass:a.modalClass,template:a.src,templateHtml:a.templateHtml,persist:!1,show:!1,scope:this.modalScope,keyboard:!1,backdrop:a.backdrop});Promise.resolve(b).then(function(a){a.modal("show")})},a}(),a("UtilSrv",e),c.default.service("utilSrv",e)}}});