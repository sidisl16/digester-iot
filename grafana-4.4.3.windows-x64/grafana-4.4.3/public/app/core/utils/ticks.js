/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";function c(a,b,c){var d=Math.sqrt(50),e=Math.sqrt(10),f=Math.sqrt(2),g=Math.abs(b-a)/Math.max(0,c),h=Math.pow(10,Math.floor(Math.log(g)/Math.LN10)),i=g/h;return i>=d?h*=10:i>=e?h*=5:i>=f&&(h*=2),b<a?-h:h}function d(a,b){return a-Math.floor(Math.log(b)/Math.LN10)}function e(a,b,c,d){var e,f=(b-a)/c,g=-Math.floor(Math.log(f)/Math.LN10),h=d,i=Math.pow(10,-g),j=f/i;return j<1.5?e=1:j<3?(e=2,j>2.25&&(null==h||g+1<=h)&&(e=2.5,++g)):e=j<7.5?5:10,e*=i}b&&b.id;return a("tickStep",c),a("getScaledDecimals",d),a("getFlotTickSize",e),{setters:[],execute:function(){}}});