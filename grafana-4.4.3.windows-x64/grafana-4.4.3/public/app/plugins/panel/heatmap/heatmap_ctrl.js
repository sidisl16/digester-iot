/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/plugins/sdk","lodash","app/core/utils/kbn","app/core/time_series","./axes_editor","./display_editor","./rendering","./heatmap_data_converter"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a}],execute:function(){k=30,l=10,m={heatmap:{},cards:{cardPadding:null,cardRound:null},color:{mode:"spectrum",cardColor:"#b4ff00",colorScale:"sqrt",exponent:.5,colorScheme:"interpolateOranges"},dataFormat:"timeseries",xAxis:{show:!0},yAxis:{show:!0,format:"short",decimals:null,logBase:1,splitFactor:null,min:null,max:null},xBucketSize:null,xBucketNumber:null,yBucketSize:null,yBucketNumber:null,tooltip:{show:!0,showHistogram:!1},highlightCards:!0},n=["opacity","spectrum"],o=["linear","sqrt"],p=[{name:"Spectral",value:"interpolateSpectral",invert:"always"},{name:"RdYlGn",value:"interpolateRdYlGn",invert:"always"},{name:"Blues",value:"interpolateBlues",invert:"dark"},{name:"Greens",value:"interpolateGreens",invert:"dark"},{name:"Greys",value:"interpolateGreys",invert:"dark"},{name:"Oranges",value:"interpolateOranges",invert:"dark"},{name:"Purples",value:"interpolatePurples",invert:"dark"},{name:"Reds",value:"interpolateReds",invert:"dark"},{name:"BuGn",value:"interpolateBuGn",invert:"dark"},{name:"BuPu",value:"interpolateBuPu",invert:"dark"},{name:"GnBu",value:"interpolateGnBu",invert:"dark"},{name:"OrRd",value:"interpolateOrRd",invert:"dark"},{name:"PuBuGn",value:"interpolatePuBuGn",invert:"dark"},{name:"PuBu",value:"interpolatePuBu",invert:"dark"},{name:"PuRd",value:"interpolatePuRd",invert:"dark"},{name:"RdPu",value:"interpolateRdPu",invert:"dark"},{name:"YlGnBu",value:"interpolateYlGnBu",invert:"dark"},{name:"YlGn",value:"interpolateYlGn",invert:"dark"},{name:"YlOrBr",value:"interpolateYlOrBr",invert:"dark"},{name:"YlOrRd",value:"interpolateYlOrRd",invert:"darm"}],q=function(a){function b(b,c,e,f){var g=a.call(this,b,c)||this;return g.$rootScope=e,g.opacityScales=[],g.colorModes=[],g.colorSchemes=[],g.$rootScope=e,g.timeSrv=f,g.selectionActivated=!1,d.default.defaultsDeep(g.panel,m),g.opacityScales=o,g.colorModes=n,g.colorSchemes=p,g.events.on("render",g.onRender.bind(g)),g.events.on("data-received",g.onDataReceived.bind(g)),g.events.on("data-error",g.onDataError.bind(g)),g.events.on("data-snapshot-load",g.onDataReceived.bind(g)),g.events.on("init-edit-mode",g.onInitEditMode.bind(g)),g}return r(b,a),b.$inject=["$scope","$injector","$rootScope","timeSrv"],b.prototype.onInitEditMode=function(){this.addEditorTab("Axes",g.axesEditor,2),this.addEditorTab("Display",h.heatmapDisplayEditor,3),this.unitFormats=e.default.getUnitFormats()},b.prototype.zoomOut=function(a){this.publishAppEvent("zoom-out",2)},b.prototype.onRender=function(){if(this.range){var a,b,c,f,g=this.panel.yAxis.logBase;if("tsbuckets"===this.panel.dataFormat){c=this.parseHistogramSeries(this.series),f=j.elasticHistogramToHeatmap(this.series);var h=d.default.map(d.default.keys(f),function(a){return Number(a)}),i=d.default.map(this.series,function(a){return Number(a.alias)});a=j.calculateBucketSize(h),b=j.calculateBucketSize(i,g),1!==g&&(b=1/b)}else{var m=this.panel.xBucketNumber||k,n=Math.floor((this.range.to-this.range.from)/m),o=e.default.interval_regex.test(this.panel.xBucketSize);a=o?e.default.interval_to_ms(this.panel.xBucketSize):isNaN(Number(this.panel.xBucketSize))||""===this.panel.xBucketSize||null===this.panel.xBucketSize?n:Number(this.panel.xBucketSize),c=this.parseSeries(this.series);var p=this.panel.yBucketNumber||l;1!==g?b=this.panel.yAxis.splitFactor:(b=c.max===c.min?c.max?c.max/l:1:(c.max-c.min)/p,b=this.panel.yBucketSize||b),f=j.convertToHeatMap(this.series,b,a,g)}c.min||c.max||(c={min:-1,max:1,minLog:1},b=1),this.data={buckets:f,heatmapStats:c,xBucketSize:a,yBucketSize:b}}},b.prototype.onDataReceived=function(a){this.series=a.map(this.seriesHandler.bind(this)),this.dataWarning=null;var b=d.default.reduce(this.series,function(a,b){return a+b.datapoints.length},0);if(0===b)this.dataWarning={title:"No data points",tip:"No datapoints returned from data query"};else for(var c=0,e=this.series;c<e.length;c++){var f=e[c];if(f.isOutsideRange){this.dataWarning={title:"Data points outside time range",tip:"Can be caused by timezone mismatch or missing time filter in query"};break}}this.render()},b.prototype.onDataError=function(){this.series=[],this.render()},b.prototype.seriesHandler=function(a){var b=new f.default({datapoints:a.datapoints,alias:a.target});b.flotpairs=b.getFlotPairs(this.panel.nullPointMode),b.minLog=j.getMinLog(b);var c=a.datapoints||[];if(c&&c.length>0){var d=c[c.length-1][1],e=this.range.from;d-e<-1e4&&(b.isOutsideRange=!0)}return b},b.prototype.parseSeries=function(a){var b=d.default.min(d.default.map(a,function(a){return a.stats.min})),c=d.default.min(d.default.map(a,function(a){return a.minLog})),e=d.default.max(d.default.map(a,function(a){return a.stats.max}));return{max:e,min:b,minLog:c}},b.prototype.parseHistogramSeries=function(a){var b=d.default.map(a,function(a){return Number(a.alias)}),c=d.default.min(b),e=d.default.min(b),f=d.default.max(b);return{max:f,min:c,minLog:e}},b.prototype.link=function(a,b,c,d){i.default(a,b,c,d)},b}(c.MetricsPanelCtrl),q.templateUrl="module.html",a("HeatmapCtrl",q)}}});