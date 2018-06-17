/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/utils/kbn","./variable"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c,e){this.model=a,this.datasourceSrv=b,this.variableSrv=c,this.templateSrv=e,this.defaults={type:"datasource",name:"",hide:0,label:"",current:{},regex:"",options:[],query:"",refresh:1},d.assignModelProperties(this,a,this.defaults),this.refresh=1}return a.$inject=["model","datasourceSrv","variableSrv","templateSrv"],a.prototype.getSaveModel=function(){return d.assignModelProperties(this.model,this,this.defaults),this.model.options=[],this.model},a.prototype.setValue=function(a){return this.variableSrv.setOptionAsCurrent(this,a)},a.prototype.updateOptions=function(){var a,b=[],d=this.datasourceSrv.getMetricSources({skipVariables:!0});this.regex&&(a=this.templateSrv.replace(this.regex,null,"regex"),a=c.default.stringToJsRegex(a));for(var e=0;e<d.length;e++){var f=d[e];f.meta.id===this.query&&(a&&!a.exec(f.name)||b.push({text:f.name,value:f.name}))}return 0===b.length&&b.push({text:"No data sources found",value:""}),this.options=b,this.variableSrv.validateVariableSelectionState(this)},a.prototype.dependsOn=function(a){return!!this.regex&&d.containsVariable(this.regex,a.name)},a.prototype.setValueFromUrl=function(a){return this.variableSrv.setOptionFromUrl(this,a)},a.prototype.getValueForUrl=function(){return this.current.value},a}(),a("DatasourceVariable",e),d.variableTypes.datasource={name:"Datasource",ctor:e,description:"Enabled you to dynamically switch the datasource for multiple panels"}}}});