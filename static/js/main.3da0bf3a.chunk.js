(this["webpackJsonpweather-state"]=this["webpackJsonpweather-state"]||[]).push([[0],{32:function(n,e,t){"use strict";t.r(e);var r,i,a,o,c,s=t(1),d=t.n(s),l=t(9),f=t.n(l),u=t(3),m=t(4),b=t(8),p=t(18),h=t(7),g=function(){return Object(h.b)()},j=h.c,x=t(5),v=Object(x.b)({name:"city",initialState:[],reducers:{addCity:{reducer:function(n,e){n.push(e.payload)},prepare:function(n){return{payload:{id:Object(x.c)(),searchedCity:n,favorites:!1,active:!1}}}},removeCity:function(n,e){var t=n.findIndex((function(n){return n.id===e.payload}));n.splice(t,1)},AddFetchedData:function(n,e){n.findIndex((function(n){return n.fetchedData=e.payload}))},toggleFavorites:function(n,e){var t=n.findIndex((function(n){return n.id===e.payload}));n[t].favorites=!n[t].favorites},setActive:function(n,e){var t=n.findIndex((function(n){return n.id===e.payload}));n[t].active=!n[t].active}}}),O=v.actions,w=O.addCity,y=O.removeCity,k=O.AddFetchedData,C=O.toggleFavorites,S=O.setActive,I=v.reducer,z="375px",F="768px",E="1024px",J="1440px",N={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(z,")"),tablet:"(min-width: ".concat(F,")"),laptop:"(min-width: ".concat(E,")"),laptopL:"(min-width: ".concat(J,")")},A=t(2),D=m.b.span(r||(r=Object(u.a)(['\n  position: relative;\n  padding: 0 10px 0 10px;\n\n  :after {\n    content: "";\n    position: absolute;\n    width: 50%;\n    height: 50%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    border: 4px solid transparent;\n    border-top-color: #ffffff;\n    border-radius: 50%;\n    animation: button-loading-spinner 1s ease infinite;\n\n    @keyframes button-loading-spinner {\n      from {\n        transform: rotate(0turn);\n      }\n      to {\n        transform: rotate(2turn);\n      }\n']))),H=function(){return Object(A.jsx)(D,{})};!function(n){n.Idle="IDLE",n.Fetching="FETCHING"}(i||(i={}));var L,M,T,Y,X,P,W,q,B,G,R,K=m.b.form(a||(a=Object(u.a)(["\n  width: 15rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-self: center;\n  height: 3.2rem;\n  margin-right: 1.5rem;\n  font-size: 2rem;\n\n@media"," {\n  justify-self: center;\n  margin-right: 0;\n  width: 30rem;\n  font-size: 1.5rem;\n}\n"])),N.tablet),Q=m.b.input(o||(o=Object(u.a)(["\n  width: 75%;\n  height: 100%;\n  border-radius: 3rem 0 0 3rem;\n  border: 0;\n  outline: 0;\n  background-color: #353b48;\n  color: white;\n  padding: .5rem 0 .5rem 1.5rem;\n  font-size: inherit;\n  font-weight: 600;\n  letter-spacing: .07em;\n  cursor: pointer;\n"]))),U=m.b.button(c||(c=Object(u.a)(["\n  height: 100%;\n  padding: 0 1.5rem;\n  outline: 0;\n  border-radius: 0 3rem 3rem 0;\n  border: none;\n  background-color: #353b48;\n  color: white;\n  font-size: inherit;\n  font-weight: 600;\n  cursor: pointer;\n\n  :disabled {\n    color: grey;\n  }\n"]))),V=function(){var n=j((function(n){return n})).app,e=Object(s.useState)(""),t=Object(b.a)(e,2),r=t[0],a=t[1],o=g();return Object(A.jsxs)(K,{children:[Object(A.jsx)(Q,{type:"text",value:r,onChange:function(n){return a(n.target.value)}}),Object(A.jsx)(U,{disabled:!r,onClick:function(n){n.preventDefault(),o(w(r)),a("")},children:n.status===i.Fetching?Object(A.jsx)(H,{}):Object(A.jsx)(p.a,{})})]})},Z={status:i.Idle,favoritesCities:[]},$=Object(x.b)({name:"app",initialState:Z,reducers:{changeStatus:function(n,e){n.status=e.payload},setMessage:function(n,e){n.message=e.payload},addToFavCities:function(n,e){n.favoritesCities.push(e.payload)},removeFromFav:function(n,e){var t=n.favoritesCities.indexOf(e.payload);n.favoritesCities.splice(t,1)}}}),_=$.actions,nn=_.changeStatus,en=_.setMessage,tn=_.addToFavCities,rn=_.removeFromFav,an=$.reducer,on=t(10),cn=m.b.div(L||(L=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  left: 50%;\n  top: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(57, 57, 57, 0.9);\n  text-align: center;\n  list-style: none;\n  opacity: ",";\n  visibility: ",";\n  transition: all 0.6s;\n\n  a {\n    cursor: pointer;\n    display: inline-block;\n    margin: 1rem;\n    font-size: 3.5rem;\n    transition: all 0.3s;\n    transform: ",";\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n"])),(function(n){return n.active?1:0}),(function(n){return n.active?"visible":"hidden"}),(function(n){return n.active?"rotate(360deg)":null})),sn=m.b.span(M||(M=Object(u.a)(["\n  position: relative;\n  background-color: ",";\n  z-index: 100;\n  top: 0;\n  right: .3rem;\n\n  &,\n  &::after,\n  &::before {\n    width: 2.5rem;\n    height: 2px;\n    display: inline-block;\n    transition: all .5s;\n  }\n\n  &::before,\n  &::after {\n    background-color: ",";\n    position: absolute;\n    content: '';\n    opacity: 1;\n  }\n\n  &::before {\n    top: .5rem;\n    transform: ","\n  }\n\n  &::after {\n    top: -.5rem;\n    transform: ","\n  }\n"])),(function(n){return n.active?"transparent":"#333"}),(function(n){return n.active?"white":"#333"}),(function(n){return n.active?"rotate(405deg)  translateY(-.7rem)":"transform: translateY(0)"}),(function(n){return n.active?"rotate(-405deg)  translateY(.7rem)":"transform: translateY(0)"})),dn=function(n){var e=g(),t=j((function(n){return n})).app;Object(s.useEffect)((function(){!function(n){if(n){var e,t=[];localStorage.getItem("favorites")&&(t=JSON.parse(localStorage.getItem("favorites"))),e=Array.from(new Set(t.concat(n))),localStorage.setItem("favorites",JSON.stringify(e))}}(t.favoritesCities)}),[t.favoritesCities]),Object(s.useEffect)((function(){localStorage.getItem("favorites")&&(JSON.parse(localStorage.getItem("favorites")).includes(n.name)&&r(n.id))}),[]);var r=function(t){e(C(t)),e(tn(n.name))},i=function(t){e(rn(n.name)),function(n){var e=JSON.parse(localStorage.getItem("favorites"));e.splice(e.indexOf(n),1),localStorage.setItem("favorites",JSON.stringify(e))}(n.name),e(C(t))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(sn,{active:n.active}),Object(A.jsxs)(cn,{active:n.active,children:[Object(A.jsx)("a",{children:n.favorites?Object(A.jsx)(on.a,{onClick:function(){return i(n.id)}}):Object(A.jsx)(on.c,{onClick:function(){return r(n.id)}})}),Object(A.jsx)("a",{onClick:function(){return n.removeCityHandler(n.id)},children:Object(A.jsx)(on.b,{})})]})]})},ln=m.b.div(T||(T=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  width: 23rem;\n  height: 22rem;\n  margin: 2rem;\n  border: solid black .2rem;\n  background-color: rgba(53, 59, 72, .9);\n  color: white;\n  font-size: 1.5rem;\n  transition: all 0.5s;\n  position: relative;\n\n  :hover {\n    box-shadow: 2px 2px 1.5rem #000;\n  }\n"]))),fn=m.b.header(Y||(Y=Object(u.a)(["\n  display: grid;\n  grid-template-rows: 1;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  max-height: 5rem;\n  background-color: rgba(157, 118, 61, 0.8);\n\n  h2 {\n    margin: 0 .5rem;\n    padding-left: 1rem;\n  }\n\n  img {\n    width: 5rem;\n  }\n"]))),un=m.b.a(X||(X=Object(u.a)(["\n  position: absolute;\n  top: .8rem;\n  right: .5rem;\n  width: 4.2rem;\n  height: 3.5rem;\n  z-index: 200;\n  background-color: transparent;\n"]))),mn=m.b.div(P||(P=Object(u.a)(["\n  width: 100%;\n  padding: 1rem 0 1rem 1.5rem;\n\n  p {\n    letter-spacing: .25rem;\n    margin-bottom: .6rem;\n  }\n"]))),bn=function(n){var e=g(),t=Object(s.useState)(),r=Object(b.a)(t,2),a=r[0],o=r[1],c=Object(s.useState)(),d=Object(b.a)(c,2),l=d[0],f=d[1],u="https://api.openweathermap.org/data/2.5/weather?q=".concat(n.name,"&units=metric&&exclude=hourly&appid=").concat("062d5d2399059aa08647eba45d121e16"),m="http://openweathermap.org/img/wn/".concat(null===a||void 0===a?void 0:a.weather[0].icon,".png");Object(s.useEffect)((function(){e(nn(i.Fetching)),fetch(u).then((function(n){return n.json()})).then((function(n){if(404==n.cod)return f(n.message),e(nn(i.Idle)),void e(en(n.message));o(n),e(k(n)&&nn(i.Idle))})).catch((function(n){console.log(n)}))}),[u]);return Object(A.jsx)(A.Fragment,{children:function(){if(!l&&a)return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(ln,{children:[Object(A.jsxs)(fn,{children:[Object(A.jsxs)("h2",{children:[a.name," "]}),Object(A.jsx)("img",{src:m,alt:"weather icon"}),Object(A.jsx)(un,{onClick:function(){return t=n.id,void e(S(t));var t}}),Object(A.jsx)(dn,{id:n.id,name:a.name,favorites:n.favorites,active:n.active,removeCityHandler:function(n){return function(n){e(y(n))}(n)}})]}),Object(A.jsxs)(mn,{children:[Object(A.jsxs)("p",{children:["Temp: ","".concat(a.main.temp," \xb0C")]}),Object(A.jsxs)("p",{children:["Conditions: ",a.weather[0].description," "]}),Object(A.jsxs)("p",{children:["Wind: ",a.wind.speed," m/s"]}),Object(A.jsxs)("p",{children:["Pressure: ","".concat(a.main.pressure,"  HPa")]}),Object(A.jsxs)("p",{children:["Humidity: ","".concat(a.main.humidity,"%")]})]})]})})}()})},pn=m.b.div(W||(W=Object(u.a)(["\n  position: fixed;\n  background: #00000050;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 200;\n\n  div {\n    width: 55%;\n    max-width: 450px;\n    max-height: 70vh;\n    margin: 0 auto;\n    margin-top: 20vh;\n    padding: 20px;\n    border: 2px solid black;\n    border-radius: 4px;\n    text-align: center;\n    background: #fff;\n    overflow: auto;\n    text-transform: capitalize;\n    cursor: pointer;\n    text-wrap: none;\n  }\n"]))),hn=function(n){return Object(A.jsx)(pn,{onClick:n.handleClose,children:Object(A.jsx)("div",{children:Object(A.jsx)("h3",{children:n.content})})})},gn=m.b.div(q||(q=Object(u.a)(["\n  display: flex;\n  width: 30rem;\n  margin: auto;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 1rem;\n  letter-spacing: 1.4px;\n\n@media"," {\n  flex-direction: row;\n  width: 60rem;\n}\n\n  h1 {\n    width: 80%;\n    margin-top: 2rem;\n    text-align: center;\n    justify-self: center;\n    font-size: 1.5rem;\n    color: white;\n    text-transform: capitalize;\n    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n\n    animation-name: moveInLeft;\n    animation-duration: 1s;\n\n    @keyframes moveInLeft {\n      0% {\n        opacity: 0;\n        transform: translateX(-20rem);\n      }\n      80% {\n        transform: translateX(.5rem);\n      }\n      100% {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n\n  @media"," {\n    font-size: 2.5rem;\n  }\n  }\n"])),N.tablet,N.tablet),jn=function(){var n=j((function(n){return n})),e=n.cities,t=n.app,r=g();Object(s.useEffect)((function(){localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).map((function(n){r(w(n))}))}),[]);return Object(A.jsxs)(gn,{children:[t.message?Object(A.jsx)(hn,{content:t.message,handleClose:function(){r(en(null))}}):null,e.map((function(n){return Object(A.jsx)(bn,{id:n.id,favorites:n.favorites,name:n.searchedCity,active:n.active},n.id)})),e.length<1&&Object(A.jsx)("h1",{children:"Lets see whats going on there!"})]})},xn=t.p+"static/media/backgroundEarth.4a4ef648.jpg",vn=Object(m.a)(B||(B=Object(u.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n    width: 100%;\n    height: 100%;\n    background: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n\n  @media"," {\n    font-size: 81.25%;\n  }\n  }\n\n  body {\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n  }\n"])),xn,N.mobileM),On=m.b.header(G||(G=Object(u.a)(["\n  display: grid;\n  grid-template-rows: 1;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  border-bottom: .2rem solid black;\n  background-color: rgba(136, 140, 140, .6);\n\n@media"," {\n} @media"," {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n"])),N.tablet,N.tablet),wn=m.b.h1(R||(R=Object(u.a)(["\n  font-size: 1.8rem;\n  letter-spacing: .1rem;\n  padding: 5px 0 2px 7px;\n"])));var yn=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(vn,{}),Object(A.jsxs)(On,{children:[Object(A.jsxs)(wn,{children:["Weather",Object(A.jsx)("br",{})," State"]}),Object(A.jsx)(V,{})]}),Object(A.jsx)(jn,{})]})},kn=Object(x.a)({reducer:{app:an,cities:I}});f.a.render(Object(A.jsx)(d.a.StrictMode,{children:Object(A.jsx)(h.a,{store:kn,children:Object(A.jsx)(yn,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3da0bf3a.chunk.js.map