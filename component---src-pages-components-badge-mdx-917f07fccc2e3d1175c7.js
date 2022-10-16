(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"440e":function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return f})),a.d(n,"default",(function(){return j}));var t,d=a("wx14"),o=a("zLVn"),r=(a("mXGw"),a("7ljp")),i=a("Snbm"),g=a("vXRK"),s=a("1u5/"),l=a("QU9C"),c=a.n(l),p=a("CZGq"),m=a.n(p),u=a("ZbQ4"),b=a.n(u),x=a("L3Rd"),B=a.n(x),h=["components"],f={},y=(t="PageHeader",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",e)}),w={query:"2858982726",_frontmatter:f},v=i.a;function j(e){var n=e.components,a=Object(o.a)(e,h);return Object(r.mdx)(v,Object(d.a)({},w,a,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)(y,{title:"Badges",subTitle:"Documentation and examples for badges, our small count and labeling component.",mdxType:"PageHeader"}),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)("p",null,"Badges scale to match the size of the immediate parent element by\nusing relative font sizing and em units."),Object(r.mdx)(s.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(r.mdx)("p",null,"Badges can be used as part of links or buttons to provide a counter."),Object(r.mdx)(s.a,{codeText:m.a,mdxType:"ReactPlayground"}),Object(r.mdx)("p",null,"Note that depending on how they are used, badges may be confusing for\nusers of screen readers and similar assistive technologies. While the\nstyling of badges provides a visual cue as to their purpose, these users\nwill simply be presented with the content of the badge. Depending on the\nspecific situation, these badges may seem like random additional words or\nnumbers at the end of a sentence, link, or button. Unless the context is\nclear, consider including additional context with a visually hidden piece\nof additional text."),Object(r.mdx)("h2",{id:"contextual-variations"},"Contextual variations"),Object(r.mdx)("p",null,"Add any of the below mentioned modifier classes to change the\nappearance of a badge."),Object(r.mdx)(s.a,{codeText:B.a,mdxType:"ReactPlayground"}),Object(r.mdx)("h2",{id:"pill"},"Pill"),Object(r.mdx)("p",null,"badges Use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"pill")," modifier class to make badges more rounded\n(with a larger ",Object(r.mdx)("inlineCode",{parentName:"p"},"border-radius"),").\nUseful if you miss the badges from v3."),Object(r.mdx)(s.a,{codeText:b.a,mdxType:"ReactPlayground"}),Object(r.mdx)("h2",{id:"api"},"API"),Object(r.mdx)(g.a,{metadata:a.data.metadata,mdxType:"ComponentApi"}))}j.isMDXComponent=!0},CZGq:function(e,n){e.exports='import Badge from \'react-bootstrap/Badge\';\nimport Button from \'react-bootstrap/Button\';\n\nfunction ButtonExample() {\n  return (\n    <Button variant="primary">\n      Profile <Badge bg="secondary">9</Badge>\n      <span className="visually-hidden">unread messages</span>\n    </Button>\n  );\n}\n\nexport default ButtonExample;\n'},L3Rd:function(e,n){e.exports='import Badge from \'react-bootstrap/Badge\';\n\nfunction VariationsExample() {\n  return (\n    <div>\n      <Badge bg="primary">Primary</Badge>{\' \'}\n      <Badge bg="secondary">Secondary</Badge>{\' \'}\n      <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{\' \'}\n      <Badge bg="warning" text="dark">\n        Warning\n      </Badge>{\' \'}\n      <Badge bg="info">Info</Badge>{\' \'}\n      <Badge bg="light" text="dark">\n        Light\n      </Badge>{\' \'}\n      <Badge bg="dark">Dark</Badge>\n    </div>\n  );\n}\n\nexport default VariationsExample;\n'},QU9C:function(e,n){e.exports='import Badge from \'react-bootstrap/Badge\';\n\nfunction BasicExample() {\n  return (\n    <div>\n      <h1>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h1>\n      <h2>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h2>\n      <h3>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h3>\n      <h4>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h4>\n      <h5>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h5>\n      <h6>\n        Example heading <Badge bg="secondary">New</Badge>\n      </h6>\n    </div>\n  );\n}\n\nexport default BasicExample;\n'},ZbQ4:function(e,n){e.exports='import Badge from \'react-bootstrap/Badge\';\n\nfunction PillExample() {\n  return (\n    <div>\n      <Badge pill bg="primary">\n        Primary\n      </Badge>{\' \'}\n      <Badge pill bg="secondary">\n        Secondary\n      </Badge>{\' \'}\n      <Badge pill bg="success">\n        Success\n      </Badge>{\' \'}\n      <Badge pill bg="danger">\n        Danger\n      </Badge>{\' \'}\n      <Badge pill bg="warning" text="dark">\n        Warning\n      </Badge>{\' \'}\n      <Badge pill bg="info">\n        Info\n      </Badge>{\' \'}\n      <Badge pill bg="light" text="dark">\n        Light\n      </Badge>{\' \'}\n      <Badge pill bg="dark">\n        Dark\n      </Badge>\n    </div>\n  );\n}\n\nexport default PillExample;\n'}}]);
//# sourceMappingURL=component---src-pages-components-badge-mdx-917f07fccc2e3d1175c7.js.map