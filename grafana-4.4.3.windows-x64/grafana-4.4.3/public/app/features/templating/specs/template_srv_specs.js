/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../all","app/core/core"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){d=a}],execute:function(){c.describe("templateSrv",function(){function a(a){e.init({templating:{list:a},events:new d.Emitter})}var b,e;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module(function(a){a.value("timeSrv",{})})),c.beforeEach(c.angularMocks.inject(function(a,c){b=c,e=a})),c.describe("init",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"oogle"}}])}),c.it("should initialize template data",function(){var a=b.replace("this.[[test]].filters");c.expect(a).to.be("this.oogle.filters")})}),c.describe("replace can pass scoped vars",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"oogle"}}])}),c.it("should replace $test with scoped value",function(){var a=b.replace("this.$test.filters",{test:{value:"mupp",text:"asd"}});c.expect(a).to.be("this.mupp.filters")}),c.it("should replace $test with scoped text",function(){var a=b.replaceWithText("this.$test.filters",{test:{value:"mupp",text:"asd"}});c.expect(a).to.be("this.asd.filters")})}),c.describe("replace can pass multi / all format",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:["value1","value2"]}}])}),c.it("should replace $test with globbed value",function(){var a=b.replace("this.$test.filters",{},"glob");c.expect(a).to.be("this.{value1,value2}.filters")}),c.it("should replace $test with piped value",function(){var a=b.replace("this=$test",{},"pipe");c.expect(a).to.be("this=value1|value2")}),c.it("should replace $test with piped value",function(){var a=b.replace("this=$test",{},"pipe");c.expect(a).to.be("this=value1|value2")})}),c.describe("variable with all option",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"$__all"},options:[{value:"$__all"},{value:"value1"},{value:"value2"}]}])}),c.it("should replace $test with formatted all value",function(){var a=b.replace("this.$test.filters",{},"glob");c.expect(a).to.be("this.{value1,value2}.filters")})}),c.describe("variable with all option and custom value",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"$__all"},allValue:"*",options:[{value:"value1"},{value:"value2"}]}])}),c.it("should replace $test with formatted all value",function(){var a=b.replace("this.$test.filters",{},"glob");c.expect(a).to.be("this.*.filters")}),c.it("should not escape custom all value",function(){var a=b.replace("this.$test",{},"regex");c.expect(a).to.be("this.*")})}),c.describe("lucene format",function(){c.it("should properly escape $test with lucene escape sequences",function(){a([{type:"query",name:"test",current:{value:"value/4"}}]);var d=b.replace("this:$test",{},"lucene");c.expect(d).to.be("this:value\\/4")})}),c.describe("format variable to string values",function(){c.it("single value should return value",function(){var a=b.formatValue("test");c.expect(a).to.be("test")}),c.it("multi value and glob format should render glob string",function(){var a=b.formatValue(["test","test2"],"glob");c.expect(a).to.be("{test,test2}")}),c.it("multi value and lucene should render as lucene expr",function(){var a=b.formatValue(["test","test2"],"lucene");c.expect(a).to.be('("test" OR "test2")')}),c.it("multi value and regex format should render regex string",function(){var a=b.formatValue(["test.","test2"],"regex");c.expect(a).to.be("(test\\.|test2)")}),c.it("multi value and pipe should render pipe string",function(){var a=b.formatValue(["test","test2"],"pipe");c.expect(a).to.be("test|test2")}),c.it("multi value and distributed should render distributed string",function(){var a=b.formatValue(["test","test2"],"distributed",{name:"build"});c.expect(a).to.be("test,build=test2")}),c.it("multi value and distributed should render when not string",function(){var a=b.formatValue(["test"],"distributed",{name:"build"});c.expect(a).to.be("test")}),c.it("slash should be properly escaped in regex format",function(){var a=b.formatValue("Gi3/14","regex");c.expect(a).to.be("Gi3\\/14")})}),c.describe("can check if variable exists",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"oogle"}}])}),c.it("should return true if exists",function(){var a=b.variableExists("$test");c.expect(a).to.be(!0)})}),c.describe("can hightlight variables in string",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"oogle"}}])}),c.it("should insert html",function(){var a=b.highlightVariablesAsHtml("$test");c.expect(a).to.be('<span class="template-variable">$test</span>')}),c.it("should insert html anywhere in string",function(){var a=b.highlightVariablesAsHtml("this $test ok");c.expect(a).to.be('this <span class="template-variable">$test</span> ok')}),c.it("should ignore if variables does not exist",function(){var a=b.highlightVariablesAsHtml("this $google ok");c.expect(a).to.be("this $google ok")})}),c.describe("updateTemplateData with simple value",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:"muuuu"}}])}),c.it("should set current value and update template data",function(){var a=b.replace("this.[[test]].filters");c.expect(a).to.be("this.muuuu.filters")})}),c.describe("fillVariableValuesForUrl with multi value",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:["val1","val2"]}}])}),c.it("should set multiple url params",function(){var a={};b.fillVariableValuesForUrl(a),c.expect(a["var-test"]).to.eql(["val1","val2"])})}),c.describe("fillVariableValuesForUrl with multi value and scopedVars",function(){c.beforeEach(function(){a([{type:"query",name:"test",current:{value:["val1","val2"]}}])}),c.it("should set scoped value as url params",function(){var a={};b.fillVariableValuesForUrl(a,{test:{value:"val1"}}),c.expect(a["var-test"]).to.eql("val1")})}),c.describe("replaceWithText",function(){c.beforeEach(function(){a([{type:"query",name:"server",current:{value:"{asd,asd2}",text:"All"}},{type:"interval",name:"period",current:{value:"$__auto_interval",text:"auto"}}]),b.setGrafanaVariable("$__auto_interval","13m"),b.updateTemplateData()}),c.it("should replace with text except for grafanaVariables",function(){var a=b.replaceWithText("Server: $server, period: $period");c.expect(a).to.be("Server: All, period: 13m")})}),c.describe("built in interval variables",function(){c.beforeEach(function(){a([])}),c.it("should replace $__interval_ms with interval milliseconds",function(){var a=b.replace("10 * $__interval_ms",{__interval_ms:{text:"100",value:"100"}});c.expect(a).to.be("10 * 100")})})})}}});