(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});n(50);var a=n(0),r=n.n(a),c=n(143),o=n(145),i=n(149),l=n(159),u=n(154);n(148);t.default=function(e){var t=e.data;return r.a.createElement("div",{className:"blog"},r.a.createElement(o.a,null,r.a.createElement(i.a,null)),r.a.createElement(l.a,null),r.a.createElement(o.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"blog-post"},r.a.createElement(c.Link,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title)),r.a.createElement("h4",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))}),r.a.createElement(u.a,null)))};var s="2068765159"},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(142),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(144),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},145:function(e,t,n){"use strict";var a=n(146),r=n(0),c=n.n(r),o=n(143);t.a=function(e){var t=e.children;return c.a.createElement(o.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement("div",{className:"wrapper"},t)},data:a})}},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},147:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(49),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(0),o=n.n(c),i=n(143),l=n(158),u=n.n(l),s=(n(150),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e={strings:["React developer.","UX obsessive.","Design geek.","Tutor and resource creator."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new u.a(this.el,e)},n.componentWillUnmount=function(){this.typed.destroy()},n.render=function(){var e=this;window.location.href;return o.a.createElement("header",null,o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"<",o.a.createElement("span",null,"JoanneImlay")," />"),o.a.createElement("div",{className:"type-wrap"},o.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),o.a.createElement("div",{className:"menu"},o.a.createElement(i.Link,{to:"/"},"Home"),o.a.createElement(i.Link,{to:"/blog"},"Blog")))},t}(o.a.Component));t.a=s},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(152);t.a=function(e){return r.a.createElement("div",{className:"redband"},e.children)}},152:function(e,t,n){},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(155),o=n(162),i=n(163),l=n(166);n(164);c.b.add(l.b),c.b.add(l.c),c.b.add(l.a),c.b.add(i.b);t.a=function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"mailto:jo.imlay@gmail.com"},r.a.createElement(o.a,{icon:i.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/joanne-imlay-4a7a7056/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:l.b})),r.a.createElement("a",{href:"https://www.github.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:l.a})),r.a.createElement("a",{href:"https://www.twitter.com/dentednerd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{icon:l.c})))}},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(151),o=n(145);n(160);t.a=function(){return r.a.createElement("div",{className:"blog-header"},r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("h2",null,"<Blog />"))))}},160:function(e,t,n){},164:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-blog-js-e75d777879cc78be9d5c.js.map