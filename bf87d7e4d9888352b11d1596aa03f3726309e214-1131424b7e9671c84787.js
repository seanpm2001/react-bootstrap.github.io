(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1LK5":function(e,t){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},"7wzZ":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],a="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z";t.definition={prefix:"fas",iconName:"code",icon:[640,512,n,"f121",a]},t.faCode=t.definition,t.prefix="fas",t.iconName="code",t.width=640,t.height=512,t.ligatures=n,t.unicode="f121",t.svgPathData=a},"88Gu":function(e,t){var r=Date.now;e.exports=function(e){var t=0,n=0;return function(){var a=r(),o=16-(a-n);if(n=a,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},"999m":function(e,t,r){e.exports={cls1:"ImportApi-Keyword-module--cls1--3rKJT",cls2:"ImportApi-Keyword-module--cls2--2RGOT ImportApi-Keyword-module--cls1--3rKJT"}},BiGR:function(e,t,r){var n=r("nmnc"),a=r("03A+"),o=r("Z0cm"),l=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(l&&e&&e[l])}},EA7m:function(e,t,r){var n=r("zZ0H"),a=r("Ioao"),o=r("wclG");e.exports=function(e,t){return o(a(e,t,n),e+"")}},EUGH:function(e,t,r){e.exports={cls1:"ImportApi-Code-module--cls1--pOn7V",cls2:"ImportApi-Code-module--cls2--39jX8 ImportApi-Code-module--cls1--pOn7V"}},IWTy:function(e,t,r){var n=r("yue5");e.exports=function(e,t,r){for(var a=-1,o=e.criteria,l=t.criteria,c=o.length,i=r.length;++a<c;){var s=n(o[a],l[a]);if(s)return a>=i?s:s*("desc"==r[a]?-1:1)}return e.index-t.index}},"Ij+D":function(e,t,r){e.exports={cls1:"ImportApi-Link-module--cls1--31Neu",cls2:"ImportApi-Link-module--cls2--14_op ImportApi-Link-module--cls1--31Neu"}},Ioao:function(e,t,r){var n=r("heNW"),a=Math.max;e.exports=function(e,t,r){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,l=-1,c=a(o.length-t,0),i=Array(c);++l<c;)i[l]=o[t+l];l=-1;for(var s=Array(t+1);++l<t;)s[l]=o[l];return s[t]=r(i),n(e,this,s)}}},N1om:function(e,t,r){var n=r("sgoq")((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=n},QP3f:function(e){e.exports=JSON.parse('{"name":"react-bootstrap","version":"1.5.0","description":"Bootstrap 4 components built with React","keywords":["react","ecosystem-react","react-component","bootstrap"],"homepage":"https://react-bootstrap.github.io/","bugs":{"url":"https://github.com/react-bootstrap/react-bootstrap/issues"},"license":"MIT","author":{"name":"Stephen J. Collings","email":"stevoland@gmail.com"},"files":["CHANGELOG.md","lib","dist","es"],"main":"lib/cjs/index.js","module":"lib/esm/index.js","types":"lib/esm/index.d.ts","sideEffects":false,"repository":{"type":"git","url":"git+https://github.com/react-bootstrap/react-bootstrap.git"},"scripts":{"bootstrap":"yarn && yarn --cwd www","build":"node tools/build.js","build-docs":"yarn --cwd www build","build-types":"yarn tsc -d --emitDeclarationOnly --outDir types","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s","deploy-docs":"yarn --cwd www deploy","format":"eslint --ext tsx --ext ts src --fix","lint":"eslint --ext tsx --ext ts src && tsc --noEmit","prepublishOnly":"npm run build","release":"rollout","start":"yarn --cwd www develop","tdd":"karma start","test":"npm run lint && npm run test-browser && npm run test-node","test-browser":"cross-env NODE_ENV=test karma start --single-run","test-node":"cross-env NODE_ENV=test-server mocha test/server/*Spec.js"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"prettier":{"singleQuote":true,"trailingComma":"all"},"dependencies":{"@babel/runtime":"^7.4.2","@restart/context":"^2.1.4","@restart/hooks":"^0.3.21","@types/classnames":"^2.2.10","@types/invariant":"^2.2.33","@types/prop-types":"^15.7.3","@types/react":">=16.9.35","@types/react-transition-group":"^4.4.0","@types/warning":"^3.0.0","classnames":"^2.2.6","dom-helpers":"^5.1.2","invariant":"^2.2.4","prop-types":"^15.7.2","prop-types-extra":"^1.1.0","react-overlays":"^4.1.1","react-transition-group":"^4.4.1","uncontrollable":"^7.0.0","warning":"^4.0.3"},"devDependencies":{"@4c/rollout":"^2.2.0","@4c/tsconfig":"^0.3.1","@babel/cli":"^7.12.13","@babel/core":"^7.12.13","@babel/preset-typescript":"^7.12.13","@babel/register":"^7.12.13","@react-bootstrap/babel-preset":"^1.2.0","@react-bootstrap/eslint-config":"^1.3.2","@typescript-eslint/eslint-plugin":"^3.10.1","@typescript-eslint/parser":"^3.10.1","babel-eslint":"^10.1.0","babel-loader":"^8.2.2","babel-plugin-istanbul":"^6.0.0","chai":"^4.3.0","chalk":"^4.1.0","cherry-pick":"^0.5.0","codecov":"^3.8.1","conventional-changelog-cli":"^2.1.1","cpy-cli":"^3.1.1","cross-env":"^7.0.3","dtslint":"^4.0.6","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.6","eslint":"^7.19.0","eslint-config-4catalyzer-typescript":"^2.0.4","eslint-import-resolver-node":"^0.3.4","eslint-import-resolver-webpack":"^0.13.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-mocha":"^8.0.0","eslint-plugin-prettier":"^3.3.1","eslint-plugin-react":"^7.22.0","execa":"^5.0.0","fs-extra":"^9.1.0","husky":"^4.3.8","karma":"^5.2.3","karma-chrome-launcher":"^3.1.0","karma-cli":"^2.0.0","karma-coverage":"^2.0.3","karma-firefox-launcher":"^2.1.0","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","karma-sinon-chai":"^2.0.2","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","lint-staged":"^10.5.4","lodash":"^4.17.20","mocha":"^8.2.1","prettier":"^2.2.1","react":"^16.14.0","react-dom":"^16.14.0","react-test-renderer":"^16.14.0","sinon":"^9.2.4","sinon-chai":"^3.5.0","typescript":"^4.1.3","webpack":"^4.46.0"},"peerDependencies":{"react":">=16.8.0","react-dom":">=16.8.0"},"publishConfig":{"directory":"lib"},"release":{"conventionalCommits":true}}')},RdSp:function(e,t,r){e.exports={cls1:"PropTable-Code-module--cls1--2iQb5",cls2:"PropTable-Code-module--cls2--1p8A9 PropTable-Code-module--cls1--2iQb5"}},SKAX:function(e,t,r){var n=r("JC6p"),a=r("lQqw")(n);e.exports=a},XGnz:function(e,t,r){var n=r("CH3K"),a=r("BiGR");e.exports=function e(t,r,o,l,c){var i=-1,s=t.length;for(o||(o=a),c||(c=[]);++i<s;){var u=t[i];r>0&&o(u)?r>1?e(u,r-1,o,l,c):n(c,u):l||(c[c.length]=u)}return c}},a0qU:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],a="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z";t.definition={prefix:"fas",iconName:"copy",icon:[448,512,n,"f0c5",a]},t.faCopy=t.definition,t.prefix="fas",t.iconName="copy",t.width=448,t.height=512,t.ligatures=n,t.unicode="f0c5",t.svgPathData=a},alwl:function(e,t,r){var n=r("eUgh"),a=r("ZWtO"),o=r("ut/Y"),l=r("l9OW"),c=r("1LK5"),i=r("sEf8"),s=r("IWTy"),u=r("zZ0H"),p=r("Z0cm");e.exports=function(e,t,r){t=t.length?n(t,(function(e){return p(e)?function(t){return a(t,1===e.length?e[0]:e)}:e})):[u];var m=-1;t=n(t,i(o));var d=l(e,(function(e,r,a){return{criteria:n(t,(function(t){return t(e)})),index:++m,value:e}}));return c(d,(function(e,t){return s(e,t,r)}))}},cvCv:function(e,t){e.exports=function(e){return function(){return e}}},heNW:function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},l9OW:function(e,t,r){var n=r("SKAX"),a=r("MMmD");e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,(function(e,n,a){o[++r]=t(e,n,a)})),o}},lQqw:function(e,t,r){var n=r("MMmD");e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,l=t?o:-1,c=Object(r);(t?l--:++l<o)&&!1!==a(c[l],l,c););return r}}},"mv/X":function(e,t,r){var n=r("ljhN"),a=r("MMmD"),o=r("wJg7"),l=r("GoyQ");e.exports=function(e,t,r){if(!l(r))return!1;var c=typeof t;return!!("number"==c?a(r)&&o(t,r.length):"string"==c&&t in r)&&n(r[t],e)}},ofYD:function(e,t,r){e.exports={cls1:"PropTable-PropDescription-module--cls1--29mNj",cls2:"PropTable-PropDescription-module--cls2--rBO4V PropTable-PropDescription-module--cls1--29mNj"}},p7PN:function(e,t,r){e.exports={cls1:"LinkToSource-Link-module--cls1--nvUSA",cls2:"LinkToSource-Link-module--cls2--2C0Y1 LinkToSource-Link-module--cls1--nvUSA"}},pFRH:function(e,t,r){var n=r("cvCv"),a=r("O0oS"),o=r("zZ0H"),l=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:o;e.exports=l},vXRK:function(e,t,r){"use strict";var n=r("N1om"),a=r.n(n),o=r("mXGw"),l=r.n(o),c=r("xecp"),i=r("tc9R"),s=r("a0qU"),u=r("IP2g"),p=r("IAtc"),m=r.n(p),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.target,n=void 0===r?document.body:r,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}return a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus(),i},f=r("Lt9e"),v=r("9207"),y=m()("span",null,{displayName:"Link",styles:r("Ij+D"),attrs:null,vars:[]}),h=m()("span",null,{displayName:"Keyword",styles:r("999m"),attrs:null,vars:[]}),b=m()("code",null,{displayName:"Code",styles:r("EUGH"),attrs:null,vars:[]}),g=function(e){var t=e.name,r=Object(o.useState)("Copy import code"),n=r[0],a=r[1],c=Object(o.useMemo)((function(){return"import "+t+" from 'react-bootstrap/"+t+"'"}),[t]),i=Object(o.useCallback)((function(){d(c),a("Copied!"),setTimeout((function(){return a("Copy import code")}),2e3)}),[c]);return l.a.createElement(f.a,{overlay:l.a.createElement(v.a,{id:"copy-"+t+"-import-tooltip"},n)},l.a.createElement(y,{onClick:i,className:"js-search-exclude"},l.a.createElement(u.a,{icon:s.faCopy}),l.a.createElement("span",{className:"sr-only"},"Copy import code for the "+t+" component")))},E=function(e){var t=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{"aria-label":"Import code for the "+t+" component"},l.a.createElement(h,null,"import")," ",t," ",l.a.createElement(h,null,"from")," 'react-bootstrap/",t,"'"),l.a.createElement(g,{name:t}))},x=r("7wzZ"),w=r("QP3f"),N=m()("a",null,{displayName:"Link",styles:r("p7PN"),attrs:null,vars:[]}),k=function(e){var t=e.component,r="//github.com/react-bootstrap/react-bootstrap/tree/v"+w.version+"/src/"+t+".tsx";return l.a.createElement(f.a,{overlay:l.a.createElement(v.a,{id:"view-"+t+"-source-tooltip"},"View source file")},l.a.createElement(N,{href:r,className:"js-search-exclude"},l.a.createElement(u.a,{icon:x.faCode}),l.a.createElement("span",{className:"sr-only"},"view source file")))},C=(r("E9XD"),r("dI71")),A=r("6acW"),L=r.n(A),D=r("xweI"),T=r.n(D),I=r("Rw/7"),j=r("S2Rt");function z(e,t){void 0===e&&(e=[]);var r=e.find((function(e){return e.tag===t}));return r&&r.value}var O=m()("code",null,{displayName:"Code",styles:r("RdSp"),attrs:null,vars:[]}),S=m()("div",null,{displayName:"PropDescription",styles:r("ofYD"),attrs:null,vars:[]});function R(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")}function P(e){return"func"===e?"function":"bool"===e?"boolean":e}var G=function(e){function t(){return e.apply(this,arguments)||this}Object(C.a)(t,e);var r=t.prototype;return r.getType=function(e){var t=this,r=e.type||{},n=P(r.name),a=z(e.doclets,"type");switch(n){case"object":return n;case"union":return r.value.reduce((function(e,r,n,a){var o=t.getType({type:r});return l.a.isValidElement(o)&&(o=l.a.cloneElement(o,{key:n})),e=e.concat(o),n===a.length-1?e:e.concat(" | ")}),[]);case"array":var o=this.getType({type:r.value});return l.a.createElement("span",null,"array<",o,">");case"enum":return this.renderEnum(r);case"custom":return R(a||r.raw);default:return n}},r._renderRows=function(e){var t=this;return T()(e,(function(e){return e.name.startsWith("bs")?"zzzzzz":e.name})).filter((function(e){return e.type&&!e.doclets.private&&!e.doclets.ignore})).map((function(e){var r=e.name,n=e.description,a=e.doclets,o=z(a,"alias"),c=z(a,"deprecated"),i=n&&n.childMarkdownRemark.html;return l.a.createElement("tr",{key:r,className:"prop-table-row"},l.a.createElement("td",{className:"text-monospace"},o||r," ",t.renderRequiredBadge(e)),l.a.createElement("td",{className:"text-monospace"},l.a.createElement("div",null,t.getType(e))),l.a.createElement("td",null,t.renderDefaultValue(e)),l.a.createElement("td",null,!!c&&l.a.createElement("div",{className:"mb-1"},l.a.createElement("strong",{className:"text-danger"},"Deprecated: "+c+" ")),t.renderControllableNote(e,r),l.a.createElement(S,{dangerouslySetInnerHTML:{__html:i}})))}))},r.renderDefaultValue=function(e){var t=e.defaultValue&&e.defaultValue.value;return null==t?null:("elementType"===function(e){var t=e.type||{},r=P(t.name);if("custom"===r){var n=z(e.doclets,"type");return R(n&&n.value||t.raw)}return r}(e)&&(t="<"+t.replace(/('|")/g,"")+">"),l.a.createElement(O,null,t))},r.renderControllableNote=function(e,t){var r=z(e.doclets,"controllable"),n="function"===P(e.type.name);if(!r)return!1;var a=n?l.a.createElement("span",null,"controls ",l.a.createElement("code",null,r)):l.a.createElement("span",null,"controlled by: ",l.a.createElement(O,null,r),", initial prop:"," ",l.a.createElement(O,null,"default"+L()(t)));return l.a.createElement("div",{className:"mb-2"},l.a.createElement("small",null,l.a.createElement("em",{className:"text-info"},a)))},r.renderEnum=function(e){var t=e.value||[];if(!Array.isArray(t))return t;var r=[];return t.forEach((function(e,t){var n=e.value;t>0&&r.push(l.a.createElement("span",{key:t+"c"}," | ")),r.push(l.a.createElement("code",{key:t},n))})),l.a.createElement("span",null,r)},r.renderRequiredBadge=function(e){return e.required?l.a.createElement(I.a,null,"required"):null},r.render=function(){var e=this.props.metadata.props||[];return e.length?l.a.createElement("div",{className:"overflow-auto mt-4 mb-5 border border-light"},l.a.createElement(j.a,{bordered:!0,striped:!0,className:"bg-white mb-0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,this._renderRows(e)))):l.a.createElement("div",{className:"text-muted"},l.a.createElement("em",null,"There are no public props for this component."))},t}(l.a.Component);t.a=function(e){var t=e.heading,r=e.metadata,n=e.exportedBy,o=r.description,s=r.displayName,u=o&&o.childMarkdownRemark.html,p=s;n&&(s=n.displayName+"."+s.split(n.displayName).pop(),p=n.displayName);var m=a()(s)+"-props";return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.default,{h:t||"3",id:m,title:s,className:"my-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement(c.a,{target:m},l.a.createElement("span",{className:"text-monospace"},s)),l.a.createElement("span",{className:"ml-auto"}),l.a.createElement(k,{component:p}))),l.a.createElement(E,{name:p}),u&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),l.a.createElement(G,{metadata:r}))}},wclG:function(e,t,r){var n=r("pFRH"),a=r("88Gu")(n);e.exports=a},xweI:function(e,t,r){var n=r("XGnz"),a=r("alwl"),o=r("EA7m"),l=r("mv/X"),c=o((function(e,t){if(null==e)return[];var r=t.length;return r>1&&l(e,t[0],t[1])?t=[]:r>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),a(e,n(t,1),[])}));e.exports=c},yue5:function(e,t,r){var n=r("/9aa");e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,l=n(e),c=void 0!==t,i=null===t,s=t==t,u=n(t);if(!i&&!u&&!l&&e>t||l&&c&&s&&!i&&!u||a&&c&&s||!r&&s||!o)return 1;if(!a&&!l&&!u&&e<t||u&&r&&o&&!a&&!l||i&&r&&o||!c&&o||!s)return-1}return 0}}}]);
//# sourceMappingURL=bf87d7e4d9888352b11d1596aa03f3726309e214-1131424b7e9671c84787.js.map