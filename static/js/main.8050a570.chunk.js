(this["webpackJsonpmisty-pokedex"]=this["webpackJsonpmisty-pokedex"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n,s,a,i,r,j,d,l=c(0),o=c.n(l),b=c(32),x=c.n(b),h=(c(40),c(2)),O=c(8),p=(c(41),c(9)),u=c(10),m=c.p+"static/media/misty.670e4386.png",f=c(1),g=u.a.div(n||(n=Object(p.a)(['\n  font-family: "Luckiest Guy", cursive;\n  letter-spacing: 1.25px;\n  text-shadow: 2px 2px red;\n  margin-bottom: 30px;\n  color: #3c5aa6;\n']))),v=function(){return Object(f.jsxs)(g,{children:[Object(f.jsx)(O.c,{className:"navbar-brand",to:"/",children:Object(f.jsx)("img",{src:m,className:"w-75",alt:"misty logo"})}),Object(f.jsx)("h1",{className:"display-4",children:"Misty's Pok\xe9dex"}),Object(f.jsx)("hr",{})]})},k=c(11),y=c(17),N=c.n(y),w=function(){return Object(f.jsxs)("div",{className:"text-center mt-5",children:[Object(f.jsx)("div",{className:"spinner-grow text-danger",role:"status"}),Object(f.jsx)("div",{className:"visually-hidden my-3 text-danger",children:"catching your pok\xe9mon"})]})},S=c.p+"static/media/pokeball-blue.029881e7.png",F=u.a.div(s||(s=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),P=u.a.div(a||(a=Object(p.a)(["\n  border: 7px solid #3c5aa6;\n  background-color: #2a75bb;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 2px;\n  margin: 10px;\n  font-size: 25px;\n  height: 200px;\n  width: 200px;\n  border-radius: 5px;\n  padding: 10px;\n  text-transform: uppercase;\n"]))),C=u.a.img(i||(i=Object(p.a)(["\n  height: 50px;\n  margin: 20px;\n"]))),L=function(){var e=Object(l.useState)([]),t=Object(k.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)(!0),a=Object(k.a)(s,2),i=a[0],r=a[1],j=Object(l.useState)(void 0),d=Object(k.a)(j,2),o=d[0],b=d[1];return Object(l.useEffect)((function(){setTimeout((function(){N.a.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){var t=e.data;n(t.results),r(!1)})).catch((function(e){console.log(e.response);var t=e.response,c=t.status,n=t.data;b("".concat(c," ").concat(n)),r(!1)}))}),1500)}),[]),Object(f.jsxs)("div",{children:[i&&Object(f.jsx)(w,{}),!i&&o&&Object(f.jsx)("p",{className:"load text-center",children:o}),!i&&!o&&c.length>0&&Object(f.jsx)("div",{className:"container text-center justify-content-center",children:Object(f.jsx)(F,{children:c.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(O.c,{className:"text-white",to:"pokemon/".concat(t+1),children:Object(f.jsxs)(P,{children:[Object(f.jsx)(C,{src:S}),Object(f.jsx)("p",{children:e.name})]})})},t)}))})})]})},T=u.a.img(r||(r=Object(p.a)(["\n  max-width: 300px;\n  width: 40%;\n"]))),B=function(){var e=Object(h.e)().id,t=Object(l.useState)(!0),c=Object(k.a)(t,2),n=c[0],s=c[1],a=Object(l.useState)(void 0),i=Object(k.a)(a,2),r=i[0],j=i[1],d=Object(l.useState)(void 0),o=Object(k.a)(d,2),b=o[0],x=o[1];return Object(l.useEffect)((function(){setTimeout((function(){N.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){var t=e.data;x(t),s(!1)})).catch((function(e){var t=e.response,c=t.status,n=t.data;s(!1),j("".concat(c," ").concat(n))}))}),1500)}),[e]),Object(f.jsxs)("div",{children:[n&&Object(f.jsx)(w,{}),!n&&r&&Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("div",{className:"row justify-center-start",children:Object(f.jsx)(O.c,{to:"/",className:"btn btn-danger",children:"Return to Pok\xe9dex"})}),Object(f.jsx)("p",{className:"load text-center",children:r})]}),!n&&!r&&b&&Object(f.jsxs)("div",{className:"bg-white m-2 p-4",children:[Object(f.jsx)(O.c,{className:"btn btn-danger py-2 mb-3",to:"/",children:"back to pok\xe9dex"}),Object(f.jsx)("h4",{className:"display-5",children:b.name}),Object(f.jsx)("div",{children:Object(f.jsx)(T,{src:b.sprites.front_default})}),Object(f.jsx)("h2",{className:"lead pt-3",children:Object(f.jsx)("u",{children:"Pok\xe9mon Stats:"})}),Object(f.jsxs)("table",{className:"text-center table bg-light",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"skill"}),Object(f.jsx)("th",{children:"base-stat"}),Object(f.jsx)("th",{children:"effort"})]})}),Object(f.jsx)("tbody",{children:b.stats.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.stat.name}),Object(f.jsx)("td",{children:e.base_stat}),Object(f.jsx)("td",{children:e.effort})]},t)}))})]})]})]})},E=c.p+"static/media/pokeball-yellow.13775cd6.png",G=u.a.div(j||(j=Object(p.a)(["\n    background-color: #FFCB05;\n    font-family: 'Luckiest Guy', cursive;\n    margin: 0px;\n    width: 100%;\n    letter-spacing: 1.25px;\n    padding: 25px;\n"]))),I=u.a.img(d||(d=Object(p.a)(["\n    height: 50px;\n    "]))),J=function(){return Object(f.jsxs)(G,{children:[Object(f.jsx)("hr",{}),Object(f.jsx)("div",{children:"gotta catch 'em all!"}),Object(f.jsx)(I,{src:E,alt:"pokeball"}),Object(f.jsx)("hr",{})]})};var M=function(){var e=Object(h.f)();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(v,{})}),Object(f.jsxs)(O.b,{children:[Object(f.jsx)(h.a,{exact:!0,path:"".concat(e.url,"pokemon/:id"),children:Object(f.jsx)(B,{})}),Object(f.jsx)(h.a,{exact:!0,path:e.url,children:Object(f.jsx)(L,{})})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(J,{})})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};x.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)(M,{})})}),document.getElementById("root")),_()}},[[69,1,2]]]);
//# sourceMappingURL=main.8050a570.chunk.js.map