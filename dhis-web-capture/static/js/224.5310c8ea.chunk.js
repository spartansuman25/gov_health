(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[224],{1225:function(e,t,n){var r=n(729);e.exports=function(){var e=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],t=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],n=["do","se","te","qa","qi","se","sa"],o=["dom","seg","ter","qua","qui","sex","s\xe1b"],a=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){f[e+"o"]=function(t,n){return n[e](t)+"\xba"}})),{formatters:f,formattingTokensRegExp:r(f)}}}}]);