webpackJsonp(["component---src-layouts-index-js"],{"./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},"./node_modules/babel-loader/lib/index.js??ref--0-0!./.cache/layouts/index.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("./node_modules/@babel/runtime/helpers/es6/extends.js"),r=a("./node_modules/react/index.js"),s=a.n(r),o=a("./src/layouts/index.js"),l=a("./.cache/json/layout-index.json"),c=a.n(l);t.default=function(e){return s.a.createElement(o.a,Object(n.a)({},e,c.a))}},"./node_modules/bootstrap/less/bootstrap.less":function(e,t){},"./src/components/NavMain.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/core-js/object/values.js"),r=a.n(n),s=a("./node_modules/prop-types/index.js"),o=a.n(s),l=a("./node_modules/react/index.js"),c=a.n(l),i=a("./node_modules/gatsby-link/index.js"),u=a.n(i),m=a("../src/Navbar.js"),p=a("../src/Nav.js"),d=a("../src/FormControl.js"),b={documentation:{link:"/getting-started/introduction",title:"Documentation"}};function h(e){return e.children}var f={activePage:o.a.string};function E(e){e&&window.docsearch({apiKey:"68117ff90f086cb491d7e7e984cd7b75",indexName:"react_bootstrap",inputSelector:e,debug:!1})}function g(e){var t=e.activePage;return c.a.createElement(m.a,{staticTop:!0,componentClass:"header",className:"bs-docs-nav",role:"banner"},c.a.createElement(m.a.Header,null,c.a.createElement(m.a.Brand,null,c.a.createElement(u.a,{to:"/"},"React-Bootstrap")),c.a.createElement(m.a.Toggle,null)),c.a.createElement(m.a.Collapse,{className:"bs-navbar-collapse"},c.a.createElement(p.a,{role:"navigation",id:"top"},r()(b).map(function(e){var a=e.link,n=e.title;return c.a.createElement(h,{key:a},c.a.createElement("li",{className:t.startsWith(a)?"active":null},c.a.createElement(u.a,{to:a},n)))}),c.a.createElement(h,null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"GitHub")))),c.a.createElement(m.a.Form,{pullRight:!0},c.a.createElement(d.a,{type:"search",className:"bs-search-bar",placeholder:"Search…",inputRef:E}))))}g.propTypes=f,t.a=g},"./src/components/PageFooter.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/es6/inheritsLoose.js"),r=a("./node_modules/react/index.js"),s=a.n(r),o=a("../package.json"),l=a.n(o).a.version;/docs/.test(l)&&(l=l.split("-")[0]);var c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return s.a.createElement("footer",{className:"bs-docs-footer",role:"contentinfo"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"bs-docs-social"},s.a.createElement("ul",{className:"bs-docs-social-buttons"},s.a.createElement("li",null,s.a.createElement("iframe",{className:"github-btn",src:"https://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=watch&count=true",width:95,height:20,title:"Star on GitHub"})),s.a.createElement("li",null,s.a.createElement("iframe",{className:"github-btn",src:"https://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=fork&count=true",width:92,height:20,title:"Fork on GitHub"})),s.a.createElement("li",null,s.a.createElement("iframe",{src:"https://platform.twitter.com/widgets/follow_button.html?screen_name=react_bootstrap&show_screen_name=true",width:230,height:20,title:"twitter",allowTransparency:"true",frameBorder:"0",scrolling:"no"})))),s.a.createElement("p",null,"Code licensed under"," ",s.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE",rel:"noopener noreferrer",target:"_blank"},"MIT"),". ","Documentation based, in part, on"," ",s.a.createElement("a",{href:"https://getbootstrap.com/docs/3.3/",rel:"noopener noreferrer",target:"_blank"},"bootstrap"),"; licensed under"," ",s.a.createElement("a",{href:"https://creativecommons.org/licenses/by/3.0/",rel:"noopener noreferrer",target:"_blank"},"CC BY 3.0")),s.a.createElement("ul",{className:"bs-docs-footer-links muted"},s.a.createElement("li",null,"Currently v",l),s.a.createElement("li",null,"·"),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/"},"GitHub")),s.a.createElement("li",null,"·"),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/issues?state=open"},"Issues")),s.a.createElement("li",null,"·"),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/releases"},"Releases")))))},t}(s.a.Component);t.a=c},"./src/css/docs.css":function(e,t){},"./src/css/style.less":function(e,t){},"./src/layouts/index.js":function(e,t,a){"use strict";var n=a("./node_modules/prop-types/index.js"),r=a.n(n),s=a("./node_modules/react/index.js"),o=a.n(s),l=a("./node_modules/bootstrap/less/bootstrap.less"),c=(a.n(l),a("./src/components/NavMain.js")),i=a("./src/components/PageFooter.js"),u=a("./src/css/docs.css"),m=(a.n(u),a("./src/css/style.less")),p=(a.n(m),{location:r.a.object.isRequired});function d(e){var t=e.children,a=e.location;return o.a.createElement("div",null,o.a.createElement(c.a,{activePage:a.pathname}),"function"==typeof t?t():t,o.a.createElement(i.a,null))}d.propTypes=p,t.a=d}});
//# sourceMappingURL=component---src-layouts-index-js-583110b8a7269d00ed7b.js.map