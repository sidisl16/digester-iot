/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../datasource","test/lib/common","moment","test/specs/helpers","../annotation_query"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){f=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){g=a}],execute:function(){c.describe("CloudWatchAnnotationQuery",function(){var a=new e.default.ServiceTestContext,b={jsonData:{defaultRegion:"us-east-1",access:"proxy"}};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(a.providePhase(["templateSrv","backendSrv"])),c.beforeEach(c.angularMocks.inject(function(c,d,e,g){a.$q=c,a.$httpBackend=e,a.$rootScope=d,a.ds=g.instantiate(f.CloudWatchDatasource,{instanceSettings:b})})),c.describe("When performing annotationQuery",function(){var b={annotation:{region:"us-east-1",namespace:"AWS/EC2",metricName:"CPUUtilization",dimensions:{InstanceId:"i-12345678"},statistics:["Average"],period:300},range:{from:d.default(1443438674760),to:d.default(1443460274760)}},e={MetricAlarms:[{AlarmName:"test_alarm_name"}]},f={AlarmHistoryItems:[{Timestamp:"2015-01-01T00:00:00.000Z",HistoryItemType:"StateUpdate",AlarmName:"test_alarm_name",HistoryData:"{}",HistorySummary:"test_history_summary"}]};c.beforeEach(function(){a.backendSrv.datasourceRequest=function(b){switch(b.data.action){case"DescribeAlarmsForMetric":return a.$q.when({data:e});case"DescribeAlarmHistory":return a.$q.when({data:f})}}}),c.it("should return annotation list",function(d){var e=new g.default(a.ds,b.annotation,a.$q,a.templateSrv);e.process(b.range.from,b.range.to).then(function(a){c.expect(a[0].title).to.be("test_alarm_name"),c.expect(a[0].text).to.be("test_history_summary"),d()}),a.$rootScope.$apply()})})})}}});