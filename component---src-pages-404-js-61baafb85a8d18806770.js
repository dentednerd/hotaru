(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(184),i=n(185),u=n(201);n(190),n(220);t.default=function(){return r.a.createElement("div",{className:"center"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h1",null,"404!!"),r.a.createElement(o.Link,{to:"/"},r.a.createElement("h2",null,"« Home")))))}},183:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(202)),o=a(n(203)),i=a(n(7)),u=a(n(53)),s=a(n(56)),c=a(n(4)),l=a(n(0)),d=n(16),f=n(184);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/CV/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=p(n);return l.default.createElement(d.Link,(0,o.default)({to:m,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=v;t.default=m;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},184:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(183),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(186),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},185:function(e,t,n){"use strict";var a=n(189),r=n(0),o=n.n(r),i=n(184);t.a=function(e){var t=e.children;return o.a.createElement(i.StaticQuery,{query:"3892401927",render:function(e){return o.a.createElement("div",{className:"wrapper"},t)},data:a})}},186:function(e,t,n){var a;e.exports=(a=n(188))&&a.default||a},188:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(54),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Joanne Imlay"}}}}},190:function(e,t,n){},201:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(209);t.a=function(e){return r.a.createElement("div",{className:"orange-box"},e.children)}},202:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},203:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},209:function(e,t,n){},220:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-61baafb85a8d18806770.js.map