(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5h5m":function(e,n){e.exports='<Nav defaultActiveKey="/home" className="flex-column">\n  <Nav.Link href="/home">Active</Nav.Link>\n  <Nav.Link eventKey="link-1">Link</Nav.Link>\n  <Nav.Link eventKey="link-2">Link</Nav.Link>\n  <Nav.Link eventKey="disabled" disabled>\n    Disabled\n  </Nav.Link>\n</Nav>;\n'},L8AH:function(e,n){e.exports='function NavDropdownExample() {\n  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);\n\n  return (\n    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>\n      <Nav.Item>\n        <Nav.Link eventKey="1" href="#/home">\n          NavLink 1 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="2" title="Item">\n          NavLink 2 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="3" disabled>\n          NavLink 3 content\n        </Nav.Link>\n      </Nav.Item>\n      <NavDropdown title="Dropdown" id="nav-dropdown">\n        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n  );\n}\n\nrender(<NavDropdownExample />);\n'},LgfF:function(e,n){e.exports='<Nav fill variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},Q6D8:function(e,n,a){e.exports={callout:"Callout-styles-module--callout--1_K3h",warning:"Callout-styles-module--warning--39Zw- Callout-styles-module--callout--1_K3h",danger:"Callout-styles-module--danger--19388 Callout-styles-module--callout--1_K3h"}},ZkkZ:function(e,n){e.exports='<Nav\n  activeKey="/home"\n  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}\n>\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},cEpe:function(e,n){e.exports='<Nav justify variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},"cS/3":function(e,n){e.exports='<>\n  <Nav className="justify-content-center" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n  <p className="text-center mt-4 mb-4">Or right-aligned</p>\n  <Nav className="justify-content-end" activeKey="/home">\n    <Nav.Item>\n      <Nav.Link href="/home">Active</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n</>;\n'},h55t:function(e,n,a){"use strict";var t=a("mXGw"),i=a.n(t),o=a("Q6D8");n.a=function(e){var n=e.title,a=e.children,t=e.theme;return i.a.createElement("aside",{role:"note",className:o[t||"warning"]},n&&i.a.createElement("header",{className:"h5"},n),i.a.createElement("div",null,a))}},hp8z:function(e,n){e.exports='<Nav variant="tabs" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},mcQx:function(e,n){e.exports='<Nav defaultActiveKey="/home" as="ul">\n  <Nav.Item as="li">\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-1">Link</Nav.Link>\n  </Nav.Item>\n  <Nav.Item as="li">\n    <Nav.Link eventKey="link-2">Link</Nav.Link>\n  </Nav.Item>\n</Nav>;\n'},sp2j:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return T})),a.d(n,"default",(function(){return P}));var t=a("zLVn"),i=(a("mXGw"),a("7ljp")),o=a("Snbm"),d=a("h55t"),v=a("DA+T"),l=a("vXRK"),m=a("1u5/"),c=a("cS/3"),N=a.n(c),s=a("ZkkZ"),r=a.n(s),p=a("mcQx"),u=a.n(p),b=a("L8AH"),k=a.n(b),y=a("xJXM"),x=a.n(y),h=a("LgfF"),L=a.n(h),I=a("cEpe"),f=a.n(I),j=a("5h5m"),O=a.n(j),w=a("hp8z"),g=a.n(w),K=a("zNby"),D=a.n(K),T={},C={query:"1876490708",_frontmatter:T},A=o.a;function P(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(i.mdx)(A,Object.assign({},C,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"base-nav"},"Base Nav"),Object(i.mdx)("p",null,"Navigation bits in Bootstrap all share a general ",Object(i.mdx)("inlineCode",{parentName:"p"},"Nav"),"\ncomponent and styles. Swap ",Object(i.mdx)("inlineCode",{parentName:"p"},"variant"),"s to switch between each\nstyle. The base ",Object(i.mdx)("inlineCode",{parentName:"p"},"Nav")," component is built with flexbox and\nprovide a strong foundation for building all types of navigation\ncomponents."),Object(i.mdx)(d.a,{theme:"warning",mdxType:"Callout"},"The basic, variant-less, ",Object(i.mdx)("code",null,"Nav")," component does not include any"," ",Object(i.mdx)("code",null,"active")," prop styling!"),Object(i.mdx)(m.a,{codeText:r.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav>")," markup is very flexible and styling is controlled via classes so you can\nuse whatever elements you like to build your navs. By default ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav>")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav.Item>")," both\nrender ",Object(i.mdx)("inlineCode",{parentName:"p"},"<div>"),"s instead of ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ul>")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"<li>")," elements respectively.\nThis because it's possible (and common) to leave off the ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav.Item>"),"'s and\nrender a ",Object(i.mdx)("inlineCode",{parentName:"p"},"<Nav.Link>")," directly, which would create invalid markup by default (",Object(i.mdx)("inlineCode",{parentName:"p"},"ul > a"),")."),Object(i.mdx)("p",null,"When a ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ul>")," is appropriate you can render one via the ",Object(i.mdx)("inlineCode",{parentName:"p"},"as")," prop; be sure to\nalso set your items to ",Object(i.mdx)("inlineCode",{parentName:"p"},"<li>")," as well!"),Object(i.mdx)(m.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"alignment-and-orientation"},"Alignment and orientation"),Object(i.mdx)("p",null,"You can control the the direction and orientation of the\n",Object(i.mdx)("inlineCode",{parentName:"p"},"Nav")," by making use of the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment"}),"flexbox layout")," utility classes.\nBy default, navs are left-aligned, but that is easily changed to center or right-aligned."),Object(i.mdx)(m.a,{codeText:N.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h3",{id:"vertical"},"Vertical"),Object(i.mdx)("p",null,"Create stacked navs by changing the flex item direction with the\n",Object(i.mdx)("inlineCode",{parentName:"p"},".flex-column")," class, or your own css. You can even use the\nresponsive versions to stack in some viewports but not others (e.g.\n",Object(i.mdx)("inlineCode",{parentName:"p"},".flex-sm-column"),")."),Object(i.mdx)(m.a,{codeText:O.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"tabs"},"Tabs"),Object(i.mdx)("p",null,'Visually represent nav items as "tabs". This style pairs nicely with\ntabbable regions created by our ',Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"../tabs/"}),"Tab components"),"."),Object(i.mdx)("p",null,"Note: creating a vertical nav (",Object(i.mdx)("inlineCode",{parentName:"p"},".flex-column"),") with tabs styling is unsupported by Bootstrap's default stylesheet."),Object(i.mdx)(m.a,{codeText:g.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"pills"},"Pills"),Object(i.mdx)("p",null,"An alternative visual variant."),Object(i.mdx)(m.a,{codeText:D.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"fill-and-justify"},"Fill and justify"),Object(i.mdx)("p",null,"Force the contents of your nav to extend the full available width. To\nproportionately fill the space use ",Object(i.mdx)("inlineCode",{parentName:"p"},"fill"),". Notice that the\nnav is the entire width but each nav item is a different size."),Object(i.mdx)(m.a,{codeText:L.a,mdxType:"ReactPlayground"}),Object(i.mdx)("p",null,"If you want each NavItem to be the same size use ",Object(i.mdx)("inlineCode",{parentName:"p"},"justify"),"."),Object(i.mdx)(m.a,{codeText:f.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"using-dropdowns"},"Using dropdowns"),Object(i.mdx)("p",null,"You can mix and match the Dropdown components with the NavLink and\nNavItem components to create a Dropdown that plays well in a Nav\ncomponent"),Object(i.mdx)(v.default,{codeText:x.a,mdxType:"CodeBlock"}),Object(i.mdx)("p",null,"The above demonstrates how flexible the component model can be. But if\nyou didn't want to roll your own versions we've included a\nstraight-forward ",Object(i.mdx)("inlineCode",{parentName:"p"},"<NavDropdown>")," that works for most cases."),Object(i.mdx)(m.a,{codeText:k.a,mdxType:"ReactPlayground"}),Object(i.mdx)("h2",{id:"api"},"API"),Object(i.mdx)(l.a,{metadata:a.data.Nav,mdxType:"ComponentApi"}),Object(i.mdx)(l.a,{metadata:a.data.NavItem,exportedBy:a.data.Nav,mdxType:"ComponentApi"}),Object(i.mdx)(l.a,{metadata:a.data.NavLink,exportedBy:a.data.Nav,mdxType:"ComponentApi"}),Object(i.mdx)(l.a,{metadata:a.data.NavDropdown,mdxType:"ComponentApi"}))}P.isMDXComponent=!0},xJXM:function(e,n){e.exports="<Dropdown as={NavItem}>\n  <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>\n  <Dropdown.Menu>\n    <Dropdown.Item>Hello there!</Dropdown.Item>\n  </Dropdown.Menu>\n</Dropdown>;\n"},zNby:function(e,n){e.exports='<Nav variant="pills" defaultActiveKey="/home">\n  <Nav.Item>\n    <Nav.Link href="/home">Active</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n  </Nav.Item>\n  <Nav.Item>\n    <Nav.Link eventKey="disabled" disabled>\n      Disabled\n    </Nav.Link>\n  </Nav.Item>\n</Nav>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-navs-mdx-ace263b1f9615f088858.js.map