/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/utils/datemath","moment","lodash"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("DateMath",function(){var a,b=["s","m","h","d","w","M","y"],g="2014-01-01T06:06:06.666Z",h=e.default(g).valueOf(),i="YYYY-MM-DDTHH:mm:ss.SSSZ";c.describe("errors",function(){c.it("should return undefined if passed something falsy",function(){c.expect(d.parse(!1)).to.be(void 0)}),c.it("should return undefined if I pass an operator besides [+-/]",function(){c.expect(d.parse("now&1d")).to.be(void 0)}),c.it("should return undefined if I pass a unit besides"+b.toString(),function(){c.expect(d.parse("now+5f")).to.be(void 0)}),c.it("should return undefined if rounding unit is not 1",function(){c.expect(d.parse("now/2y")).to.be(void 0),c.expect(d.parse("now/0.5y")).to.be(void 0)}),c.it("should not go into an infinite loop when missing a unit",function(){c.expect(d.parse("now-0")).to.be(void 0),c.expect(d.parse("now-00")).to.be(void 0)})}),c.it("now/d should set to start of current day",function(){var a=new Date;a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0);var b=d.parse("now/d",!1).valueOf();c.expect(b).to.be(a.getTime())}),c.describe("subtraction",function(){var j,k;c.beforeEach(function(){a=c.sinon.useFakeTimers(h),j=e.default(),k=e.default(g)}),f.default.each(b,function(a){var b="now-5"+a,e=g+"||-5"+a;c.it("should return 5"+a+" ago",function(){c.expect(d.parse(b).format(i)).to.eql(j.subtract(5,a).format(i))}),c.it("should return 5"+a+" before "+g,function(){c.expect(d.parse(e).format(i)).to.eql(k.subtract(5,a).format(i))})})}),c.describe("rounding",function(){var j,k;c.beforeEach(function(){a=c.sinon.useFakeTimers(h),j=e.default(),k=e.default(g)}),f.default.each(b,function(a){c.it("should round now to the beginning of the "+a,function(){c.expect(d.parse("now/"+a).format(i)).to.eql(j.startOf(a).format(i))}),c.it("should round now to the end of the "+a,function(){c.expect(d.parse("now/"+a,!0).format(i)).to.eql(j.endOf(a).format(i))})})}),c.describe("isValid",function(){c.it("should return false when invalid date text",function(){c.expect(d.isValid("asd")).to.be(!1)}),c.it("should return true when valid date text",function(){c.expect(d.isValid("now-1h")).to.be(!0)})}),c.describe("relative time to date parsing",function(){c.it("should handle negative time",function(){var a=d.parseDateMath("-2d",e.default([2014,1,5]));c.expect(a.valueOf()).to.equal(e.default([2014,1,3]).valueOf())}),c.it("should handle multiple math expressions",function(){var a=d.parseDateMath("-2d-6h",e.default([2014,1,5]));c.expect(a.valueOf()).to.equal(e.default([2014,1,2,18]).valueOf())}),c.it("should return false when invalid expression",function(){var a=d.parseDateMath("2",e.default([2014,1,5]));c.expect(a).to.equal(void 0)})})})}}});