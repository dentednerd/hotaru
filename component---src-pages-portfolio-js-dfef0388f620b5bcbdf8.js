(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8,10,11,12,13],{190:function(n,e,t){"use strict";t.r(e);var a=t(215),r=t.n(a),o=t(216),i=t.n(o),l=t(217),c=t.n(l),u=t(218),s=t.n(u),f=t(219),m=t.n(f),d=t(220),p=t.n(d),h={CodeNinjas:r.a,DNReviews:i.a,LowBar:c.a,NCNews:s.a,Northwitter:m.a,TrellJo:p.a};e.default=h},191:function(n,e,t){"use strict";t.r(e);t(211);var a=t(201),r=t.n(a),o=t(0),i=t.n(o),l=t(202),c=t(207),u=t(190);function s(){var n=r()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  a {\n    margin-right: 2em;\n    width: calc(50% - 1em);\n  }\n\n  img {\n    width: 100%;\n  }\n\n  section {\n    width: 50%;\n  }\n\n  .stack {\n    text-transform: uppercase;\n    font-size: 0.8em;\n  }\n\n  h2, p {\n    margin-bottom: 1em;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n\n    a {\n      width: 100%;\n      margin-bottom: 1em;\n    }\n\n    section {\n      width: 100%;\n    }\n  }\n"]);return s=function(){return n},n}var f=Object(l.a)("section")(s());e.default=function(n){var e=n.project;return i.a.createElement(c.a,null,i.a.createElement(f,null,i.a.createElement("a",{href:e.link},i.a.createElement("img",{src:u.default[e.image],alt:e.title})),i.a.createElement("section",null,i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.caption),i.a.createElement("p",{className:"stack"},e.stack.map(function(n,e){return 0===e?""+n:" » "+n+" "})))))}},192:function(n,e,t){"use strict";t.r(e);t(211);var a=t(201),r=t.n(a),o=t(0),i=t.n(o),l=t(202),c=t(209),u=t(190);function s(){var n=r()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  section {\n    margin-right: 2em;\n    width: calc(50% - 1em);\n  }\n\n  a {\n    width: 50%;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .stack {\n    text-transform: uppercase;\n    font-size: 0.8em;\n  }\n\n  h2, p {\n    margin-bottom: 1em;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column-reverse nowrap;\n\n    section {\n      width: 100%;\n      margin-right: 0;\n    }\n\n    a {\n      width: 100%;\n      margin-bottom: 1em;\n    }\n  }\n"]);return s=function(){return n},n}var f=Object(l.a)("section")(s());e.default=function(n){var e=n.project;return i.a.createElement(c.a,null,i.a.createElement(f,null,i.a.createElement("section",null,i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.caption),i.a.createElement("p",{className:"stack"},e.stack.map(function(n,e){return 0===e?""+n:"» "+n+" "}))),i.a.createElement("a",{href:e.link},i.a.createElement("img",{src:u.default[e.image],alt:e.title}))))}},193:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(209);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h2",null,"<Portfolio />"))}},194:function(n,e,t){"use strict";t.r(e),e.default=[{link:"https://codeninjas-nc5.herokuapp.com",image:"CodeNinjas",title:"Code Ninjas",caption:"An educational game built in Mongo, Express, React, Redux and Bulma. Accessibility was important to my design approach in this project.",stack:["React","Redux","Bulma","Express","MongoDB"]},{link:"https://northcoders-news-dentednerd.herokuapp.com",image:"NCNews",title:"Northcoders News",caption:"A Reddit clone built in Express, Mongo, React, Redux and Bulma. I opted for a simple design with this project in order to let the content speak for itself.",stack:["React","Redux","Bulma","Express","MongoDB"]},{link:"https://dentednerd.github.io/Trell-Jo/",image:"TrellJo",title:"TrellJo",caption:"A Trello clone built in React and Bulma. I tried not to deviate the design too much from the original site.",stack:["React","Bulma"]},{link:"https://dentednerd.github.io/Northwitter/",image:"Northwitter",title:"Northwitter",caption:"A Twitter clone built in React and Bootstrap. I really liked the idea of a cute, pastel version of Twitter.",stack:["React","Bootstrap"]},{link:"https://github.com/dentednerd/LowbarAdv",image:"LowBar",title:"Lowbar",caption:"Pure JavaScript implementations of Underscore functions.",stack:["JavaScript"]},{link:"https://dentednerd.github.io/precourse-section-3/",image:"DNReviews",title:"Dented Nerd Reviews",caption:"A small project to showcase my HTML and CSS design skills, with a little jQuery animation. ",stack:["HTML","CSS","jQuery"]}]},198:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(191),i=t(192),l=t(193),c=t(212),u=t(194);e.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.default,null),u.default.map(function(n,e){return e%2==0?r.a.createElement(o.default,{key:n.title,project:n}):r.a.createElement(i.default,{key:n.title,project:n})}))}},203:function(n,e,t){"use strict";t.d(e,"b",function(){return f});var a=t(0),r=t.n(a),o=t(5),i=t.n(o),l=t(35),c=t.n(l);t.d(e,"a",function(){return c.a});t(204);var u=r.a.createContext({});function s(n){var e=n.staticQueryData,t=n.data,a=n.query,o=n.render,i=t?t.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(n){var e=n.data,t=n.query,a=n.render,o=n.children;return r.a.createElement(u.Consumer,null,function(n){return r.a.createElement(s,{data:e,query:t,render:a||o,staticQueryData:n})})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},204:function(n,e,t){var a;n.exports=(a=t(206))&&a.default||a},205:function(n,e,t){"use strict";var a=t(201),r=t.n(a),o=t(208),i=t(0),l=t.n(i),c=t(202),u=t(203);function s(){var n=r()(["\n  position: relative;\n  margin: 0 auto;\n  width: 96vw;\n  max-width: 1024px;\n  padding: 0 2vw;\n"]);return s=function(){return n},n}var f=Object(c.a)("div")(s());e.a=function(n){var e=n.children;return l.a.createElement(u.b,{query:"3892401927",render:function(n){return l.a.createElement(f,null,e)},data:o})}},206:function(n,e,t){"use strict";t.r(e);t(36);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),l=t(65),c=function(n){var e=n.location,t=n.pageResources;return t?r.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},207:function(n,e,t){"use strict";var a=t(201),r=t.n(a),o=t(0),i=t.n(o),l=t(202),c=t(205);function u(){var n=r()(["\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: #333;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: #c30;\n  }\n"]);return u=function(){return n},n}var s=Object(l.a)("div")(u());e.a=function(n){var e=n.children;return i.a.createElement(s,null,i.a.createElement(c.a,null,e))}},208:function(n){n.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},209:function(n,e,t){"use strict";var a=t(201),r=t.n(a),o=t(0),i=t.n(o),l=t(202),c=t(205);function u(){var n=r()(["\n  background-color: #c30;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1em 0;\n  color: white;\n  margin-bottom: 0.5em;\n\n  h2 {\n    font-size: 1.5em;\n    font-weight: 600;\n    font-family: 'Roboto Slab', serif;\n    color: white;\n  }\n"]);return u=function(){return n},n}var s=Object(l.a)("div")(u());e.a=function(n){var e=n.children;return i.a.createElement(s,null,i.a.createElement(c.a,null,e))}},210:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(213),i=t(221),l=t(222),c=t(225);t(226);o.b.add(c.b),o.b.add(c.c),o.b.add(c.a),o.b.add(l.b);e.a=function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"mailto:jo.imlay@gmail.com"},r.a.createElement(i.a,{icon:l.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/joanne-imlay-4a7a7056/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.b})),r.a.createElement("a",{href:"https://www.github.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.a})),r.a.createElement("a",{href:"https://www.twitter.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{icon:c.c})))}},211:function(n,e,t){"use strict";t(214)("link",function(n){return function(e){return n(this,"a","href",e)}})},212:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(223),i=t.n(o),l=t(7),c=t.n(l),u=t(201),s=t.n(u),f=t(203),m=t(202),d=t(224),p=t.n(d);function h(){var n=s()(["\n  display: block;\n  text-align: center;\n  width: 100px;\n  color: black;\n\n  &:hover {\n    background-color: #c30;\n    border-radius: 6px;\n    color: white;\n  }\n"]);return h=function(){return n},n}function w(){var n=s()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 1em;\n    border-top: solid 1px #666;\n    border-bottom: solid 1px #666;\n    margin-bottom: 1em;\n  }\n"]);return w=function(){return n},n}function g(){var n=s()(["\n  font-size:1.5em;\n  line-height: 1.5em;\n  margin-bottom: 0;\n"]);return g=function(){return n},n}function b(){var n=s()(["\n  font-size:2em;\n  font-weight: 700;\n  font-family: 'Roboto Slab', serif;\n  color: #333;\n  margin: 0 2vw 0 0;\n\n  span {\n    color: #c30;\n  }\n"]);return b=function(){return n},n}function v(){var n=s()(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: flex-start;\n"]);return v=function(){return n},n}function E(){var n=s()(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  color:#333;\n  font-family: 'Lato', sans-serif;\n  margin: 1em 0;\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    align-items: flex-start;\n    margin-bottom: 0;\n  }\n"]);return E=function(){return n},n}var x=Object(m.a)("header")(E()),y=Object(m.a)("div")(v()),k=Object(m.a)("h1")(b()),j=Object(m.a)("div")(g()),R=Object(m.a)("nav")(w()),N=Object(m.a)(f.a)(h()),S=function(n){function e(){return n.apply(this,arguments)||this}c()(e,n);var t=e.prototype;return t.componentDidMount=function(){var n={strings:["React developer.","Coding mentor.","Crazy cat lady."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new p.a(this.el,n)},t.componentWillUnmount=function(){this.typed.destroy()},t.render=function(){var n=this;return r.a.createElement(x,null,r.a.createElement(y,null,r.a.createElement(k,null,"<",r.a.createElement("span",null,"JoanneImlay"),"/>"),r.a.createElement(j,null,r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(e){n.el=e}}))),r.a.createElement(R,null,r.a.createElement(N,{to:"/"},"Home"),r.a.createElement(N,{to:"/blog"},"Blog"),r.a.createElement(N,{to:"/portfolio"},"Portfolio")))},e}(r.a.Component),C=t(210),B=(t(227),function(){return r.a.createElement("footer",null,r.a.createElement(C.a,null))}),J=t(207);e.a=function(n){var e=n.children;return r.a.createElement("div",{id:"main"},r.a.createElement(i.a,null,r.a.createElement("title",null,"Joanne Imlay, front end developer")),r.a.createElement(J.a,null,r.a.createElement(S,null)),e,r.a.createElement(J.a,null,r.a.createElement(B,null)))}},214:function(n,e,t){var a=t(8),r=t(16),o=t(24),i=/"/g,l=function(n,e,t,a){var r=String(o(n)),l="<"+e;return""!==t&&(l+=" "+t+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(l),a(a.P+a.F*r(function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",t)}},215:function(n,e,t){n.exports=t.p+"static/CodeNinjasShot-4c50976074236af48c173bd9a15eeb41.png"},216:function(n,e,t){n.exports=t.p+"static/DNReviewsShot-ac5c94487d530fd868bb23a8daa3909d.png"},217:function(n,e,t){n.exports=t.p+"static/LowBarShot-20c61ccb66cf64493cd5647ca10234fd.png"},218:function(n,e,t){n.exports=t.p+"static/NCNewsShot-6a07b3300acca67d348eacc68d8ffaf1.png"},219:function(n,e,t){n.exports=t.p+"static/NorthwitterShot-889ef807b1cf1fb8cfc92fd1f5ebf97e.png"},220:function(n,e,t){n.exports=t.p+"static/TrellJoShot-4e6ca227d9d81230b9f63afa7b54e624.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-dfef0388f620b5bcbdf8.js.map