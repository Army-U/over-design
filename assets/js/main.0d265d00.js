"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[179],{7216:function(f,g,r){var O=r(6992),K=r(1539),R=r(8674),S=r(8783),U=r(3948),B=r(578),p=r(6071),y=r(5538),h=r(7294),A=r(3935),D=r(8718),x=r(3942),L=r(3727),T=r(2222),M=r(4268),E=r(3339);function u(d,i,P){return i in d?Object.defineProperty(d,i,{value:P,enumerable:!0,configurable:!0,writable:!0}):d[i]=P,d}var t=[E.X6.middleware];if(!1)var a,c,v;var s=(0,M.xC)({middleware:function(i){return i().concat(t)},devTools:!1,reducer:u({helloWorld:E.ZP},E.X6.reducerPath,E.X6.reducer)}),o=s,l=function(){return useDispatch()},e=r(5893);r.p="/over-design/",B.Z.use(D.Db).use(p.Z).use(y.Z).init({debug:!0,fallbackLng:"en",load:"currentOnly",interpolation:{escapeValue:!1},backend:{loadPath:"/over-design/locales/{{lng}}/{{ns}}.json"}});var m=h.lazy(function(){return Promise.all([r.e(63),r.e(826)]).then(r.bind(r,4826))});A.render((0,e.jsx)(h.StrictMode,{children:(0,e.jsx)(x.zt,{store:o,children:(0,e.jsx)(L.VK,{children:(0,e.jsx)(h.Suspense,{fallback:"Loading...",children:(0,e.jsx)(m,{})})})})}),document.querySelector("#root"))},3339:function(f,g,r){r.d(g,{X6:function(){return T}});var O=r(1539),K=r.n(O),R=r(8674),S=r.n(R),U=r(5666),B=r.n(U),p=r(4268),y=r(2105),h=r(9669),A=r.n(h);function D(u,t,a,c,v,s,o){try{var l=u[s](o),e=l.value}catch(m){a(m);return}l.done?t(e):Promise.resolve(e).then(c,v)}function x(u){return function(){var t=this,a=arguments;return new Promise(function(c,v){var s=u.apply(t,a);function o(e){D(s,c,v,o,l,"next",e)}function l(e){D(s,c,v,o,l,"throw",e)}o(void 0)})}}var L=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{baseUrl:""},a=t.baseUrl;return function(){var c=x(regeneratorRuntime.mark(function v(s){var o,l,e,m,d,i,P,j,W,C,I;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=s.url,l=s.method,e=s.data,m=s.__disableNotification,n.prev=1,n.next=4,A()({url:a+o,method:l,data:e});case 4:return d=n.sent,n.abrupt("return",{data:d.data});case 8:return n.prev=8,n.t0=n.catch(1),j=n.t0,m&&alert((W=(C=j.response)===null||C===void 0||(I=C.data)===null||I===void 0?void 0:I.message)!==null&&W!==void 0?W:"Operation failed."),n.abrupt("return",{error:{status:(i=j.response)===null||i===void 0?void 0:i.status,data:(P=j.response)===null||P===void 0?void 0:P.data}});case 13:case"end":return n.stop()}},v,null,[[1,8]])}));return function(v){return c.apply(this,arguments)}}()},T=(0,y.LC)({reducerPath:"helloWorldAPI",baseQuery:L({baseUrl:"https://httpstat.us"}),endpoints:function(t){return{getASuccessAPI:t.query({query:function(){return{url:"/200"}}}),getAFailedAPI:t.query({query:function(){return{url:"/400"}}})}}}),M=(0,p.oM)({name:"helloWorld",initialState:{json:{},loading:!1},reducers:{setJSON:function(t,a){t.json=a.payload}},extraReducers:function(){}}),E=M.actions.setJSON;g.ZP=M.reducer}},function(f){var g=function(O){return f(f.s=O)};f.O(0,[216],function(){return g(7216)});var r=f.O()}]);

//# sourceMappingURL=main.0d265d00.js.map