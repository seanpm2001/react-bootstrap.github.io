(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{Kkto:function(e,t,r){e.exports={cls1:"index-Heading-module--cls1--3y07_",cls2:"index-Heading-module--cls2--2RiAJ index-Heading-module--cls1--3y07_"}},QP3f:function(e){e.exports=JSON.parse('{"name":"react-bootstrap","version":"2.7.0","description":"Bootstrap 5 components built with React","keywords":["bootstrap","react","component","components","ecosystem-react","react-component"],"homepage":"https://react-bootstrap.github.io/","bugs":{"url":"https://github.com/react-bootstrap/react-bootstrap/issues"},"license":"MIT","author":{"name":"Stephen J. Collings","email":"stevoland@gmail.com"},"files":["CHANGELOG.md","lib","dist","es"],"main":"lib/cjs/index.js","module":"lib/esm/index.js","types":"lib/esm/index.d.ts","sideEffects":false,"repository":{"type":"git","url":"git+https://github.com/react-bootstrap/react-bootstrap.git"},"scripts":{"bootstrap":"yarn --network-timeout 100000 && yarn --cwd www --network-timeout 100000","build":"node tools/build.js","build-docs":"yarn --cwd www build","build-types":"yarn tsc -d --emitDeclarationOnly --outDir types","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s","deploy-docs":"yarn --cwd www deploy","format":"eslint --ext tsx --ext ts src --fix","lint":"eslint --ext tsx --ext ts src && tsc --noEmit","prepublishOnly":"npm run build","release":"rollout","start":"yarn --cwd www develop","tdd":"karma start","test":"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha test/server/*Spec.js","prepare":"husky install"},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"prettier":{"singleQuote":true,"trailingComma":"all"},"dependencies":{"@babel/runtime":"^7.17.2","@restart/hooks":"^0.4.6","@restart/ui":"^1.4.1","@types/react-transition-group":"^4.4.4","classnames":"^2.3.1","dom-helpers":"^5.2.1","invariant":"^2.2.4","prop-types":"^15.8.1","prop-types-extra":"^1.1.0","react-transition-group":"^4.4.2","uncontrollable":"^7.2.1","warning":"^4.0.3"},"devDependencies":{"@4c/rollout":"^3.0.1","@4c/tsconfig":"^0.4.1","@babel/cli":"^7.19.3","@babel/core":"^7.20.5","@babel/preset-typescript":"^7.18.6","@babel/register":"^7.18.9","@react-bootstrap/babel-preset":"^2.1.0","@react-bootstrap/eslint-config":"^2.0.0","@testing-library/dom":"^8.19.0","@testing-library/react":"^12.1.5","@testing-library/user-event":"^13.5.0","@types/chai":"^4.3.4","@types/invariant":"^2.2.35","@types/mocha":"^9.1.1","@types/prop-types":"^15.7.5","@types/react-dom":"^16.9.17","@types/sinon":"^10.0.13","@types/sinon-chai":"^3.2.9","@types/warning":"^3.0.0","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","babel-eslint":"^10.1.0","babel-loader":"^8.3.0","babel-plugin-istanbul":"^6.1.1","chai":"^4.3.7","chalk":"^4.1.2","cherry-pick":"^0.5.0","codecov":"^3.8.3","conventional-changelog-cli":"^2.2.2","cpy-cli":"^3.1.1","cross-env":"^7.0.3","dtslint":"^4.2.1","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.7","eslint":"^7.32.0","eslint-config-4catalyzer-typescript":"^3.3.0","eslint-import-resolver-node":"^0.3.6","eslint-import-resolver-webpack":"^0.13.2","eslint-plugin-import":"^2.26.0","eslint-plugin-jsx-a11y":"^6.6.1","eslint-plugin-mocha":"^10.1.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.31.11","execa":"^5.1.1","fs-extra":"^10.1.0","husky":"^7.0.4","karma":"^6.4.1","karma-chrome-launcher":"^3.1.1","karma-cli":"^2.0.0","karma-coverage":"^2.2.0","karma-firefox-launcher":"^2.1.2","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^5.0.0","lint-staged":"^12.5.0","lodash":"^4.17.21","mocha":"^9.2.2","prettier":"^2.8.0","process":"^0.11.10","react":"^16.14.0","react-dom":"^16.14.0","react-test-renderer":"^16.14.0","simulant":"^0.2.2","sinon":"^14.0.2","sinon-chai":"^3.7.0","stream-browserify":"^3.0.0","typescript":"^4.9.3","util":"^0.12.5","webpack":"^5.75.0"},"peerDependencies":{"@types/react":">=16.14.8","react":">=16.14.0","react-dom":">=16.14.0"},"peerDependenciesMeta":{"@types/react":{"optional":true}},"publishConfig":{"directory":"lib"},"release":{"conventionalCommits":true}}')},RXBc:function(e,t,r){"use strict";r.r(t);var s=r("dI71"),n=r("rePB"),o=r("mXGw"),a=r("wtL4"),i=r("1YIW"),c=r("MZOr"),l=r("by5o"),p=r("IAtc"),d=r.n(p),u=r("QP3f"),b=r("r+yI"),m=r("eVhr"),h=r("oYCi");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=d()("div",null,{displayName:"MastHead",styles:r("hO/e"),attrs:null,vars:[]}),f=d()("div",null,{displayName:"Content",styles:r("lVdN"),attrs:null,vars:[]}),g=d()("h1",null,{displayName:"Heading",styles:r("Kkto"),attrs:null,vars:[]}),O=d()("p",null,{displayName:"SubHeading",styles:r("uS/E"),attrs:null,vars:[]}),w=d()(a.a,null,{displayName:"BrandButton",styles:r("lf4o"),attrs:null,vars:[]}),v=d()(l.a,null,{displayName:"FeatureCard",styles:r("cfbj"),attrs:function(e){return j(j({},e),{},{md:4})},vars:[]}),k=d()("div",null,{displayName:"ButtonToolbar",styles:r("sG4Z"),attrs:null,vars:[]});t.default=Object(b.a)(function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return Object(h.jsxs)("main",{id:"rb-docs-content",children:[Object(h.jsx)(x,{children:Object(h.jsxs)(f,{children:[Object(h.jsx)(g,{children:"React Bootstrap"}),Object(h.jsxs)(O,{children:["The most popular front-end framework",Object(h.jsx)("br",{}),Object(h.jsx)("strong",{children:"Rebuilt"})," for React."]}),Object(h.jsxs)(k,{children:[Object(h.jsx)(w,{size:"lg",variant:"brand",className:"me-3 px-5",href:"/getting-started/introduction",children:"Get started"}),Object(h.jsx)(a.a,{size:"lg",href:"/components/alerts",className:"px-5",variant:"outline-light",children:"Components"})]}),Object(h.jsxs)("div",{className:"text-muted mt-3",children:["Current version: ",u.version]}),Object(h.jsx)("div",{className:"py-3",children:Object(h.jsx)(m.a,{})})]})}),Object(h.jsx)(i.a,{children:Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(v,{children:[Object(h.jsx)("h2",{children:"Rebuilt with React"}),Object(h.jsx)("p",{children:"React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."}),Object(h.jsx)("p",{children:"As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation."})]}),Object(h.jsxs)(v,{children:[Object(h.jsx)("h2",{children:"Bootstrap at its core"}),Object(h.jsx)("p",{children:"Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem."}),Object(h.jsx)("p",{children:"By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love."}),Object(h.jsx)("p",{})]}),Object(h.jsxs)(v,{children:[Object(h.jsx)("h2",{children:"Accessible by default"}),Object(h.jsx)("p",{children:"The React component model gives us more control over form and function of each component."}),Object(h.jsx)("p",{children:"Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap."})]})]})})]})},t}(o.Component))},cfbj:function(e,t,r){e.exports={cls1:"index-FeatureCard-module--cls1--JLkTf",cls2:"index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3"}},"hO/e":function(e,t,r){e.exports={cls1:"index-MastHead-module--cls1--37xum",cls2:"index-MastHead-module--cls2--OdHF- index-MastHead-module--cls1--37xum mb-4"}},lVdN:function(e,t,r){e.exports={cls1:"index-Content-module--cls1--2W4wC",cls2:"index-Content-module--cls2--2s0C3 index-Content-module--cls1--2W4wC px-4"}},lf4o:function(e,t,r){e.exports={cls1:"index-BrandButton-module--cls1--3hU-Q",cls2:"index-BrandButton-module--cls2--1Xvei index-BrandButton-module--cls1--3hU-Q"}},"r+yI":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s=r("rePB"),n=r("Snbm"),o=r("aArQ"),a=r("oYCi");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){return function(t){var r=t.location.pathname,s=o.a;return(r.startsWith("/getting-started")||r.startsWith("/layout")||r.startsWith("/components")||r.startsWith("/utilities"))&&(s=n.a),Object(a.jsx)(s,{location:t.location,children:Object(a.jsx)(e,c({},t))})}}},sG4Z:function(e,t,r){e.exports={cls1:"index-ButtonToolbar-module--cls1--11ZiD",cls2:"index-ButtonToolbar-module--cls2--3tR4q index-ButtonToolbar-module--cls1--11ZiD"}},"uS/E":function(e,t,r){e.exports={cls1:"index-SubHeading-module--cls1--2j2Mz",cls2:"index-SubHeading-module--cls2--1f2h4 index-SubHeading-module--cls1--2j2Mz lead"}}}]);
//# sourceMappingURL=component---src-pages-index-js-9e2532774c45561160ce.js.map