/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../../../../test/lib/common","../module","angular","jquery","test/specs/helpers","app/core/time_series2","moment","app/core/core","../rendering","../heatmap_data_converter"],function(a,b){"use strict";function c(a,b){return a.find(b).find("text").map(function(){return this.textContent}).get()}function d(a){var b="HH:mm";return j.default.utc(a,"DD MMM YYYY HH:mm:ss").format(b)}var e,f,g,h,i,j,k,l,m;b&&b.id;return{setters:[function(a){e=a},function(a){},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a},function(a){k=a},function(a){l=a},function(a){m=a}],execute:function(){e.describe("grafanaHeatmap",function(){function a(a,b,c){void 0===c&&(c=500),e.describe(a,function(){var a={};a.setup=function(b){e.beforeEach(e.angularMocks.module(function(a){a.value("timeSrv",new h.default.TimeSrvStub)})),e.beforeEach(e.angularMocks.inject(function(d,h){var n={colorSchemes:[{name:"Oranges",value:"interpolateOranges",invert:"dark"},{name:"Reds",value:"interpolateReds",invert:"dark"}],events:new k.Emitter,height:200,panel:{heatmap:{},cards:{cardPadding:null,cardRound:null},color:{mode:"spectrum",cardColor:"#b4ff00",colorScale:"linear",exponent:.5,colorScheme:"interpolateOranges",fillBackground:!1},xBucketSize:1e3,xBucketNumber:null,yBucketSize:1,yBucketNumber:null,xAxis:{show:!0},yAxis:{show:!0,format:"short",decimals:null,logBase:1,splitFactor:null,min:null,max:null,removeZeroValues:!1},tooltip:{show:!0,seriesStat:!1,showHistogram:!1},highlightCards:!0},renderingCompleted:e.sinon.spy(),hiddenSeries:{},dashboard:{getTimezone:e.sinon.stub().returns("utc")},range:{from:j.default.utc("01 Mar 2017 10:00:00","DD MMM YYYY HH:mm:ss"),to:j.default.utc("01 Mar 2017 11:00:00","DD MMM YYYY HH:mm:ss")}},o=d.$new();o.ctrl=n,a.series=[],a.series.push(new i.default({datapoints:[[1,1422774e6],[2,142277406e4]],alias:"series1"})),a.series.push(new i.default({datapoints:[[2,1422774e6],[3,142277406e4]],alias:"series2"})),a.data={heatmapStats:{min:1,max:3,minLog:1},xBucketSize:n.panel.xBucketSize,yBucketSize:n.panel.yBucketSize},b(n,a);var p=n.panel.yAxis.logBase,q=m.convertToHeatMap(a.series,a.data.yBucketSize,a.data.xBucketSize,p);a.data.buckets=q;var r='\n          <div class="heatmap-wrapper">\n            <div class="heatmap-canvas-wrapper">\n              <div class="heatmap-panel" style=\'width:'+c+"px'></div>\n            </div>\n          </div>",s=f.default.element(r);h(s)(o),o.$digest(),n.data=a.data,a.element=s;l.default(o,g.default(s),[],n);n.events.emit("render")}))},b(a)})}e.beforeEach(e.angularMocks.module("grafana.core")),a("default options",function(a){a.setup(function(a){a.panel.yAxis.logBase=1}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["1","2","3"])}),e.it("should draw correct X axis",function(){var b=c(a.element,".axis-x"),f=[d("01 Mar 2017 10:00:00"),d("01 Mar 2017 10:15:00"),d("01 Mar 2017 10:30:00"),d("01 Mar 2017 10:45:00"),d("01 Mar 2017 11:00:00")];e.expect(b).to.eql(f)})}),a("when logBase is 2",function(a){a.setup(function(a){a.panel.yAxis.logBase=2}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["1","2","4"])})}),a("when logBase is 10",function(a){a.setup(function(a,b){a.panel.yAxis.logBase=10,b.series.push(new i.default({datapoints:[[10,1422774e6],[20,142277406e4]],alias:"series3"})),b.data.heatmapStats.max=20}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["1","10","100"])})}),a("when logBase is 32",function(a){a.setup(function(b){b.panel.yAxis.logBase=32,a.series.push(new i.default({datapoints:[[10,1422774e6],[100,142277406e4]],alias:"series3"})),a.data.heatmapStats.max=100}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["1","32","1.0 K"])})}),a("when logBase is 1024",function(a){a.setup(function(b){b.panel.yAxis.logBase=1024,a.series.push(new i.default({datapoints:[[2e3,1422774e6],[3e5,142277406e4]],alias:"series3"})),a.data.heatmapStats.max=3e5}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["1","1 K","1.0 Mil"])})}),a('when Y axis format set to "none"',function(a){a.setup(function(b){b.panel.yAxis.logBase=1,b.panel.yAxis.format="none",a.data.heatmapStats.max=1e4}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["0","2000","4000","6000","8000","10000","12000"])})}),a('when Y axis format set to "second"',function(a){a.setup(function(b){b.panel.yAxis.logBase=1,b.panel.yAxis.format="s",a.data.heatmapStats.max=3600}),e.it("should draw correct Y axis",function(){var b=c(a.element,".axis-y");e.expect(b).to.eql(["0 ns","17 min","33 min","50 min","1.11 hour"])})})})}}});