/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/table_model","../renderer"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("when rendering table",function(){c.describe("given 2 columns",function(){var a=new d.default;a.columns=[{text:"Time"},{text:"Value"},{text:"Colored"},{text:"Undefined"},{text:"String"},{text:"United",unit:"bps"},{text:"Sanitized"}];var b={pageSize:10,styles:[{pattern:"Time",type:"date",format:"LLL",alias:"Timestamp"},{pattern:"/(Val)ue/",type:"number",unit:"ms",decimals:3,alias:"$1"},{pattern:"Colored",type:"number",unit:"none",decimals:1,colorMode:"value",thresholds:[50,80],colors:["green","orange","red"]},{pattern:"String",type:"string"},{pattern:"United",type:"number",unit:"ms",decimals:2},{pattern:"Sanitized",type:"string",sanitize:!0}]},f=function(a){return"sanitized"},g=new e.TableRenderer(b,a,"utc",f);c.it("time column should be formated",function(){var a=g.renderCell(0,1388556366666);c.expect(a).to.be("<td>2014-01-01T06:06:06Z</td>")}),c.it("undefined time column should be rendered as -",function(){var a=g.renderCell(0,void 0);c.expect(a).to.be("<td>-</td>")}),c.it("null time column should be rendered as -",function(){var a=g.renderCell(0,null);c.expect(a).to.be("<td>-</td>")}),c.it("number column with unit specified should ignore style unit",function(){var a=g.renderCell(5,1230);c.expect(a).to.be("<td>1.23 kbps</td>")}),c.it("number column should be formated",function(){var a=g.renderCell(1,1230);c.expect(a).to.be("<td>1.230 s</td>")}),c.it("number style should ignore string values",function(){var a=g.renderCell(1,"asd");c.expect(a).to.be("<td>asd</td>")}),c.it("colored cell should have style",function(){var a=g.renderCell(2,40);c.expect(a).to.be('<td style="color:green">40.0</td>')}),c.it("colored cell should have style",function(){var a=g.renderCell(2,55);c.expect(a).to.be('<td style="color:orange">55.0</td>')}),c.it("colored cell should have style",function(){var a=g.renderCell(2,85);c.expect(a).to.be('<td style="color:red">85.0</td>')}),c.it("unformated undefined should be rendered as string",function(){var a=g.renderCell(3,"value");c.expect(a).to.be("<td>value</td>")}),c.it("string style with escape html should return escaped html",function(){var a=g.renderCell(4,"&breaking <br /> the <br /> row");c.expect(a).to.be("<td>&amp;breaking &lt;br /&gt; the &lt;br /&gt; row</td>")}),c.it("undefined formater should return escaped html",function(){var a=g.renderCell(3,"&breaking <br /> the <br /> row");c.expect(a).to.be("<td>&amp;breaking &lt;br /&gt; the &lt;br /&gt; row</td>")}),c.it("undefined value should render as -",function(){var a=g.renderCell(3,void 0);c.expect(a).to.be("<td></td>")}),c.it("sanitized value should render as",function(){var a=g.renderCell(6,'text <a href="http://google.com">link</a>');c.expect(a).to.be("<td>sanitized</td>")}),c.it("Time column title should be Timestamp",function(){c.expect(a.columns[0].title).to.be("Timestamp")}),c.it("Value column title should be Val",function(){c.expect(a.columns[1].title).to.be("Val")}),c.it("Colored column title should be Colored",function(){c.expect(a.columns[2].title).to.be("Colored")})})})}}});