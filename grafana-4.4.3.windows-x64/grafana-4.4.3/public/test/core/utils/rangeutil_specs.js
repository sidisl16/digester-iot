/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/utils/rangeutil","lodash","moment"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("rangeUtil",function(){c.describe("Can get range grouped list of ranges",function(){c.it("when custom settings should return default range list",function(){var a=d.getRelativeTimesList({time_options:[]},"Last 5 minutes");c.expect(e.default.keys(a).length).to.be(4),c.expect(a[3][0].active).to.be(!0)})}),c.describe("Can get range text described",function(){c.it("should handle simple old expression with only amount and unit",function(){var a=d.describeTextRange("5m");c.expect(a.display).to.be("Last 5 minutes")}),c.it("should have singular when amount is 1",function(){var a=d.describeTextRange("1h");c.expect(a.display).to.be("Last 1 hour")}),c.it("should handle non default amount",function(){var a=d.describeTextRange("13h");c.expect(a.display).to.be("Last 13 hours"),c.expect(a.from).to.be("now-13h")}),c.it("should handle non default future amount",function(){var a=d.describeTextRange("+3h");c.expect(a.display).to.be("Next 3 hours"),c.expect(a.from).to.be("now"),c.expect(a.to).to.be("now+3h")}),c.it("should handle now/d",function(){var a=d.describeTextRange("now/d");c.expect(a.display).to.be("Today so far")}),c.it("should handle now/w",function(){var a=d.describeTextRange("now/w");c.expect(a.display).to.be("This week so far")}),c.it("should handle now/M",function(){var a=d.describeTextRange("now/M");c.expect(a.display).to.be("This month so far")}),c.it("should handle now/y",function(){var a=d.describeTextRange("now/y");c.expect(a.display).to.be("This year so far")})}),c.describe("Can get date range described",function(){c.it("Date range with simple ranges",function(){var a=d.describeTimeRange({from:"now-1h",to:"now"});c.expect(a).to.be("Last 1 hour")}),c.it("Date range with rounding ranges",function(){var a=d.describeTimeRange({from:"now/d+6h",to:"now"});c.expect(a).to.be("now/d+6h to now")}),c.it("Date range with absolute to now",function(){var a=d.describeTimeRange({from:f.default([2014,10,10,2,3,4]),to:"now"});c.expect(a).to.be("Nov 10, 2014 02:03:04 to a few seconds ago")}),c.it("Date range with absolute to relative",function(){var a=d.describeTimeRange({from:f.default([2014,10,10,2,3,4]),to:"now-1d"});c.expect(a).to.be("Nov 10, 2014 02:03:04 to a day ago")}),c.it("Date range with relative to absolute",function(){var a=d.describeTimeRange({from:"now-7d",to:f.default([2014,10,10,2,3,4])});c.expect(a).to.be("7 days ago to Nov 10, 2014 02:03:04")}),c.it("Date range with non matching default ranges",function(){var a=d.describeTimeRange({from:"now-13h",to:"now"});c.expect(a).to.be("Last 13 hours")}),c.it("Date range with from and to both are in now-* format",function(){var a=d.describeTimeRange({from:"now-6h",to:"now-3h"});c.expect(a).to.be("now-6h to now-3h")}),c.it("Date range with from and to both are either in now-* or now/* format",function(){var a=d.describeTimeRange({from:"now/d+6h",to:"now-3h"});c.expect(a).to.be("now/d+6h to now-3h")}),c.it("Date range with from and to both are either in now-* or now+* format",function(){var a=d.describeTimeRange({from:"now-6h",to:"now+1h"});c.expect(a).to.be("now-6h to now+1h")})})})}}});