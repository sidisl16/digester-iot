/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/kbn","app/plugins/sdk"],function(a,b){"use strict";var c,d,e,f,g=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(a){function b(b,c){var d=a.call(this,b,c)||this;return d.errors=d.validateTarget(),d.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],d.fillPolicies=["none","nan","null","zero"],d.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],d.tsdbVersion=d.datasource.tsdbVersion,d.target.aggregator||(d.target.aggregator="sum"),d.target.downsampleAggregator||(d.target.downsampleAggregator="avg"),d.target.downsampleFillPolicy||(d.target.downsampleFillPolicy="none"),d.datasource.getAggregators().then(function(a){0!==a.length&&(d.aggregators=a)}),d.datasource.getFilterTypes().then(function(a){0!==a.length&&(d.filterTypes=a)}),d.suggestMetrics=function(a,b){d.datasource.metricFindQuery("metrics("+a+")").then(d.getTextValues).then(b)},d.suggestTagKeys=function(a,b){d.datasource.suggestTagKeys(d.target.metric).then(b)},d.suggestTagValues=function(a,b){d.datasource.metricFindQuery("suggest_tagv("+a+")").then(d.getTextValues).then(b)},d}return g(b,a),b.$inject=["$scope","$injector"],b.prototype.targetBlur=function(){this.errors=this.validateTarget(),this.refresh()},b.prototype.getTextValues=function(a){return c.default.map(a,function(a){return a.text})},b.prototype.addTag=function(){return this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),void(this.addTagMode=!1)):void(this.addTagMode=!0)},b.prototype.removeTag=function(a){delete this.target.tags[a],this.targetBlur()},b.prototype.editTag=function(a,b){this.removeTag(a),this.target.currentTagKey=a,this.target.currentTagValue=b,this.addTag()},b.prototype.closeAddTagMode=function(){this.addTagMode=!1},b.prototype.addFilter=function(){if(this.target.tags&&c.default.size(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),!this.addFilterMode)return void(this.addFilterMode=!0);if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){var a={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(a),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1},b.prototype.removeFilter=function(a){this.target.filters.splice(a,1),this.targetBlur()},b.prototype.editFilter=function(a,b){this.removeFilter(b),this.target.currentFilterKey=a.tagk,this.target.currentFilterValue=a.filter,this.target.currentFilterType=a.type,this.target.currentFilterGroupBy=a.groupBy,this.addFilter()},b.prototype.closeAddFilterMode=function(){this.addFilterMode=!1},b.prototype.validateTarget=function(){var a={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?d.default.describe_interval(this.target.downsampleInterval):a.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(b){a.downsampleInterval=b.message}return this.target.tags&&c.default.has(this.target.tags,this.target.currentTagKey)&&(a.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),a},b}(e.QueryCtrl),f.templateUrl="partials/query.editor.html",a("OpenTsQueryCtrl",f)}}});