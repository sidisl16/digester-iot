/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(a,b,c,d){this.backendSrv=b,this.$q=c,this.templateSrv=d,this.name=a.name,this.id=a.id}return a.$inject=["instanceSettings","backendSrv","$q","templateSrv"],a.prototype.interpolateVariable=function(a){if("string"==typeof a)return'"'+a+'"';var b=c.default.map(a,function(a){return'"'+a+'"'});return b.join(",")},a.prototype.query=function(a){var b=this,d=c.default.filter(a.targets,function(a){return a.hide!==!0}).map(function(c){return{refId:c.refId,intervalMs:a.intervalMs,maxDataPoints:a.maxDataPoints,datasourceId:b.id,rawSql:b.templateSrv.replace(c.rawSql,a.scopedVars,b.interpolateVariable),format:c.format}});return 0===d.length?this.$q.when({data:[]}):this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:a.range.from.valueOf().toString(),to:a.range.to.valueOf().toString(),queries:d}}).then(this.processQueryResult.bind(this))},a.prototype.annotationQuery=function(a){if(!a.annotation.rawQuery)return this.$q.reject({message:"Query missing in annotation definition"});var b={refId:a.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(a.annotation.rawQuery,a.scopedVars,this.interpolateVariable),format:"table"};return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:a.range.from.valueOf().toString(),to:a.range.to.valueOf().toString(),queries:[b]}}).then(this.transformAnnotationResponse.bind(this,a))},a.prototype.transformAnnotationResponse=function(a,b){for(var c=b.data.results[a.annotation.name].tables[0],d=-1,e=-1,f=-1,g=-1,h=0;h<c.columns.length;h++)"time_sec"===c.columns[h].text?d=h:"title"===c.columns[h].text?e=h:"text"===c.columns[h].text?f=h:"tags"===c.columns[h].text&&(g=h);if(d===-1)return this.$q.reject({message:"Missing mandatory time column (with time_sec column alias) in annotation query."});for(var i=[],h=0;h<c.rows.length;h++){var j=c.rows[h];i.push({annotation:a.annotation,time:1e3*Math.floor(j[d]),title:j[e],text:j[f],tags:j[g]?j[g].trim().split(/\s*,\s*/):[]})}return i},a.prototype.testDatasource=function(){return this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasourceId:this.id,rawSql:"SELECT 1",format:"table"}]}}).then(function(a){return{status:"success",message:"Database Connection OK",title:"Success"}}).catch(function(a){return console.log(a),a.data&&a.data.message?{status:"error",message:a.data.message,title:"Error"}:{status:"error",message:a.status,title:"Error"}})},a.prototype.processQueryResult=function(a){var b=[];if(!a.data.results)return{data:b};for(var c in a.data.results){var d=a.data.results[c];if(d.series)for(var e=0,f=d.series;e<f.length;e++){var g=f[e];b.push({target:g.name,datapoints:g.points,refId:d.refId,meta:d.meta})}if(d.tables)for(var h=0,i=d.tables;h<i.length;h++){var j=i[h];j.type="table",j.refId=d.refId,j.meta=d.meta,b.push(j)}}return{data:b}},a}(),a("MysqlDatasource",d)}}});