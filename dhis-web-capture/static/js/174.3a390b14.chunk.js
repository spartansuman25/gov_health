(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[174,243,244],{1244:function(n,o){n.exports=function(){var n={lessThanXSeconds:{one:"\u5c11\u65bc 1 \u79d2",other:"\u5c11\u65bc {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u9418",lessThanXMinutes:{one:"\u5c11\u65bc 1 \u5206\u9418",other:"\u5c11\u65bc {{count}} \u5206\u9418"},xMinutes:{one:"1 \u5206\u9418",other:"{{count}} \u5206\u9418"},xHours:{one:"1 \u5c0f\u6642",other:"{{count}} \u5c0f\u6642"},aboutXHours:{one:"\u5927\u7d04 1 \u5c0f\u6642",other:"\u5927\u7d04 {{count}} \u5c0f\u6642"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXMonths:{one:"\u5927\u7d04 1 \u500b\u6708",other:"\u5927\u7d04 {{count}} \u500b\u6708"},xMonths:{one:"1 \u500b\u6708",other:"{{count}} \u500b\u6708"},aboutXYears:{one:"\u5927\u7d04 1 \u5e74",other:"\u5927\u7d04 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u904e 1 \u5e74",other:"\u8d85\u904e {{count}} \u5e74"},almostXYears:{one:"\u5c07\u8fd1 1 \u5e74",other:"\u5c07\u8fd1 {{count}} \u5e74"}};return{localize:function(o,t,e){var r;return e=e||{},r="string"===typeof n[o]?n[o]:1===t?n[o].one:n[o].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?r+"\u5167":r+"\u524d":r}}}},1245:function(n,o,t){var e=t(729);n.exports=function(){var n=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],t=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],r=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],u=["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],c=["AM","PM"],s=["am","pm"],a=["\u4e0a\u5348","\u4e0b\u5348"],i={MMM:function(o){return n[o.getMonth()]},MMMM:function(n){return o[n.getMonth()]},dd:function(n){return t[n.getDay()]},ddd:function(n){return r[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?c[1]:c[0]},a:function(n){return n.getHours()/12>=1?s[1]:s[0]},aa:function(n){return n.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){i[n+"o"]=function(o,t){return t[n](o).toString()}})),{formatters:i,formattingTokensRegExp:e(i)}}},2352:function(n,o,t){var e=t(1244),r=t(1245);n.exports={distanceInWords:e(),format:r()}}}]);