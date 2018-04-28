/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../module"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("grafanaSingleStat",function(){c.describe("legacy thresholds",function(){c.describe("positive thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[20,50]};c.it("5 should return green",function(){c.expect(d.getColorForValue(a,5)).to.be("green")}),c.it("19.9 should return green",function(){c.expect(d.getColorForValue(a,19.9)).to.be("green")}),c.it("20 should return yellow",function(){c.expect(d.getColorForValue(a,20)).to.be("yellow")}),c.it("20.1 should return yellow",function(){c.expect(d.getColorForValue(a,20.1)).to.be("yellow")}),c.it("25 should return yellow",function(){c.expect(d.getColorForValue(a,25)).to.be("yellow")}),c.it("50 should return red",function(){c.expect(d.getColorForValue(a,50)).to.be("red")}),c.it("55 should return red",function(){c.expect(d.getColorForValue(a,55)).to.be("red")})})}),c.describe("negative thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[0,20]};c.it("-30 should return green",function(){c.expect(d.getColorForValue(a,-30)).to.be("green")}),c.it("1 should return green",function(){c.expect(d.getColorForValue(a,1)).to.be("yellow")}),c.it("22 should return green",function(){c.expect(d.getColorForValue(a,22)).to.be("red")})}),c.describe("negative thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[-27,20]};c.it("-30 should return green",function(){c.expect(d.getColorForValue(a,-26)).to.be("yellow")})})})}}});