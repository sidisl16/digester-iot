/*! grafana - v4.4.3 - 2017-08-07
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/utils/kbn","lodash"],function(a,b){"use strict";function c(a,b){if(!a)return!1;if("/"===a[0]){var c=e.default.stringToJsRegex(a);return null!=b.match(c)}return a===b}function d(a){return 0===a?.001:a/10}var e,f,g;b&&b.id;return{setters:[function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a){this.datapoints=a.datapoints,this.label=a.alias,this.id=a.alias,this.alias=a.alias,this.color=a.color,this.valueFormater=e.default.valueFormats.none,this.stats={},this.legend=!0,this.unit=a.unit,this.hasMsResolution=this.isMsResolutionNeeded()}return a.prototype.applySeriesOverrides=function(a){this.lines={},this.dashes={dashLength:[]},this.points={},this.bars={},this.yaxis=1,this.zindex=0,this.nullPointMode=null,delete this.stack;for(var b=0;b<a.length;b++){var e=a[b];c(e.alias,this.alias)&&(void 0!==e.lines&&(this.lines.show=e.lines),void 0!==e.dashes&&(this.dashes.show=e.dashes,this.lines.lineWidth=0),void 0!==e.points&&(this.points.show=e.points),void 0!==e.bars&&(this.bars.show=e.bars),void 0!==e.fill&&(this.lines.fill=d(e.fill)),void 0!==e.stack&&(this.stack=e.stack),void 0!==e.linewidth&&(this.lines.lineWidth=this.dashes.show?0:e.linewidth,this.dashes.lineWidth=e.linewidth),void 0!==e.dashLength&&(this.dashes.dashLength[0]=e.dashLength),void 0!==e.spaceLength&&(this.dashes.dashLength[1]=e.spaceLength),void 0!==e.nullPointMode&&(this.nullPointMode=e.nullPointMode),void 0!==e.pointradius&&(this.points.radius=e.pointradius),void 0!==e.steppedLine&&(this.lines.steps=e.steppedLine),void 0!==e.zindex&&(this.zindex=e.zindex),void 0!==e.fillBelowTo&&(this.fillBelowTo=e.fillBelowTo),void 0!==e.color&&(this.color=e.color),void 0!==e.transform&&(this.transform=e.transform),void 0!==e.legend&&(this.legend=e.legend),void 0!==e.yaxis&&(this.yaxis=e.yaxis))}},a.prototype.getFlotPairs=function(a){var b=[];this.stats.total=0,this.stats.max=-Number.MAX_VALUE,this.stats.min=Number.MAX_VALUE,this.stats.logmin=Number.MAX_VALUE,this.stats.avg=null,this.stats.current=null,this.stats.first=null,this.stats.delta=0,this.stats.diff=null,this.stats.range=null,this.stats.timeStep=Number.MAX_VALUE,this.allIsNull=!0,this.allIsZero=!0;for(var c,d,e,g="connected"===a,h="null as zero"===a,i=0,j=0,k=!0,l=0;l<this.datapoints.length;l++){if(d=this.datapoints[l][0],c=this.datapoints[l][1],void 0!==e){var m=c-e;m<this.stats.timeStep&&(this.stats.timeStep=m)}if(e=c,null===d){if(g)continue;h&&(d=0)}null!==d&&(f.default.isNumber(d)&&(this.stats.total+=d,this.allIsNull=!1,i++),d>this.stats.max&&(this.stats.max=d),d<this.stats.min&&(this.stats.min=d),null===this.stats.first?this.stats.first=d:j>d?(k=!1,l===this.datapoints.length-1&&(this.stats.delta+=d)):(k?this.stats.delta+=d-j:this.stats.delta+=d,k=!0),j=d,d<this.stats.logmin&&d>0&&(this.stats.logmin=d)),0!==d&&(this.allIsZero=!1),b.push([c,d])}return this.stats.max===-Number.MAX_VALUE&&(this.stats.max=null),this.stats.min===Number.MAX_VALUE&&(this.stats.min=null),b.length&&(this.stats.avg=this.stats.total/i,this.stats.current=b[b.length-1][1],null===this.stats.current&&b.length>1&&(this.stats.current=b[b.length-2][1])),null!==this.stats.max&&null!==this.stats.min&&(this.stats.range=this.stats.max-this.stats.min),null!==this.stats.current&&null!==this.stats.first&&(this.stats.diff=this.stats.current-this.stats.first),this.stats.count=b.length,b},a.prototype.updateLegendValues=function(a,b,c){this.valueFormater=a,this.decimals=b,this.scaledDecimals=c},a.prototype.formatValue=function(a){return this.valueFormater(a,this.decimals,this.scaledDecimals)},a.prototype.isMsResolutionNeeded=function(){for(var a=0;a<this.datapoints.length;a++)if(null!==this.datapoints[a][1]){var b=this.datapoints[a][1].toString();if(13===b.length&&b%1e3!==0)return!0}return!1},a.prototype.hideFromLegend=function(a){return!(!a.hideEmpty||!this.allIsNull)||(!this.legend||!(!a.hideZero||!this.allIsZero))},a}(),a("default",g)}}});