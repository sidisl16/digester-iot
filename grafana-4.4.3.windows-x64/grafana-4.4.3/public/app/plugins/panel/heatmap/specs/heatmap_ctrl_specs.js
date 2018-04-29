/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../../../../test/lib/common","moment","../heatmap_ctrl","../../../../../test/specs/helpers"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("HeatmapCtrl",function(){var a=new f.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module(function(a){a.preAssignBindingsEnabled(!0)})),c.beforeEach(a.providePhase()),c.beforeEach(a.createPanelController(e.HeatmapCtrl)),c.beforeEach(function(){a.ctrl.annotationsPromise=Promise.resolve({}),a.ctrl.updateTimeRange()}),c.describe("when time series are outside range",function(){c.beforeEach(function(){var b=[{target:"test.cpu1",datapoints:[[45,1234567890],[60,1234567899]]}];a.ctrl.range={from:d.default().valueOf(),to:d.default().valueOf()},a.ctrl.onDataReceived(b)}),c.it("should set datapointsOutside",function(){c.expect(a.ctrl.dataWarning.title).to.be("Data points outside time range")})}),c.describe("when time series are inside range",function(){c.beforeEach(function(){var b={from:d.default().subtract(1,"days").valueOf(),to:d.default().valueOf()},c=[{target:"test.cpu1",datapoints:[[45,b.from+1e3],[60,b.from+1e4]]}];a.ctrl.range=b,a.ctrl.onDataReceived(c)}),c.it("should set datapointsOutside",function(){c.expect(a.ctrl.dataWarning).to.be(null)})}),c.describe("datapointsCount given 2 series",function(){c.beforeEach(function(){var b=[{target:"test.cpu1",datapoints:[]},{target:"test.cpu2",datapoints:[]}];a.ctrl.onDataReceived(b)}),c.it("should set datapointsCount warning",function(){c.expect(a.ctrl.dataWarning.title).to.be("No data points")})})})}}});