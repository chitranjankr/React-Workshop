(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),i=n(17),r=n.n(i),s=(n(28),n(29),n(5)),l=n.n(s),u=n(6),d=n(4),h=(n(31),n(18)),b=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),f=n(19),v=n(22),j=n.n(v);var p=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,i=Object(a.useState)([]),r=Object(d.a)(i,2),s=r[0],h=r[1],v=Object(a.useState)(""),p=Object(d.a)(v,2),g=p[0],m=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,h(t.data.results),console.log(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[t,Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){g?m(""):j()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(){return console.log("Temporary Unavailable")}))}(e)},className:"row__poster ".concat(o&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(o?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(c.jsx)(f.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="143bebe5e619280a37d188e20fe3a5ad",m={fetchTreding:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetFlixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorroMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(63);var _=function(){var e,t,n=Object(a.useState)([]),o=Object(d.a)(n,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(m.fetchNetFlixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||i.name||(null===i||void 0===i?void 0:i.orignal_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner__fadeBottom"})]})};n(64);var O=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(c.jsx)("img",{className:"nav__avtar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsx)(_,{}),Object(c.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:m.fetchNetFlixOriginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTreding}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorroMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:m.fetchRomanticMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.d9800ac9.chunk.js.map