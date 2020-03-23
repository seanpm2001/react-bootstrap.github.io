(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6XmT":function(e,a){e.exports='<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="responsive-navbar-nav" />\n  <Navbar.Collapse id="responsive-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Nav>\n      <Nav.Link href="#deets">More deets</Nav.Link>\n      <Nav.Link eventKey={2} href="#memes">\n        Dank memes\n      </Nav.Link>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;\n'},"Gs+v":function(e,a,n){"use strict";n.r(a),n.d(a,"query",(function(){return L}));var t=n("mXGw"),r=n.n(t),o=n("+xvc"),l=n("h55t"),i=n("DA+T"),c=n("vXRK"),s=n("1u5/"),d=n("pHbE"),v=n.n(d),m=n("Us+Q"),p=n.n(m),h=n("6XmT"),b=n.n(h),u=n("OWxa"),N=n.n(u),f=n("xNZB"),g=n.n(f),E=n("PQpg"),k=n.n(E),w=n("TokV"),x=n.n(w),y=n("bpMW"),B=n.n(y),T=n("r+yI");a.default=Object(T.a)((function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,{h:"1",id:"navbars"},"Navbars"),r.a.createElement("p",{className:"lead"},"A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more"),r.a.createElement(o.default,{h:"2",id:"navbars-overview"},"Overview"),r.a.createElement("p",null,"Here’s what you need to know before getting started with the Navbar:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Use the ",r.a.createElement("code",null,"expand")," prop to allow for collapsing the Navbar at lower breakpoints."),r.a.createElement("li",null,"Navbars and their contents are fluid by default. Use optional"," ",r.a.createElement("a",{href:"#navbars-containers"},"containers ")," to limit their horizontal width."),r.a.createElement("li",null,"Use spacing and flex utilities to size and position content")),r.a.createElement("p",null,"A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint."),r.a.createElement(s.a,{codeText:v.a}),r.a.createElement(o.default,{h:"2",id:"navbars-brand"},"Brand"),r.a.createElement("p",null,"A simple flexible branding component. Images are supported but will likely require custom styling to work well."),r.a.createElement(s.a,{codeText:p.a}),r.a.createElement(o.default,{h:"2",id:"navbars-form"},"Forms"),r.a.createElement("p",null,"Use ",r.a.createElement("code",null,"<Form inline>")," and your various form controls within the Navbar. Align the contents as needed with utility classes."),r.a.createElement(s.a,{codeText:g.a}),r.a.createElement(o.default,{h:"2",id:"navbars-text-link"},"Text and Non-nav links"),r.a.createElement("p",null,"Loose text and links can be wrapped ",r.a.createElement("code",null,"Navbar.Text")," in order to correctly align it vertically."),r.a.createElement(s.a,{codeText:k.a}),r.a.createElement(o.default,{h:"2",id:"navbars-colors"},"Color schemes"),r.a.createElement("p",null,"Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from"," ",r.a.createElement("code",null,'variant="light"')," for use with light background colors, or"," ",r.a.createElement("code",null,'variant="dark"')," for dark background colors. Then, customize with the ",r.a.createElement("code",null,"bg")," prop or any custom css!"),r.a.createElement(s.a,{codeText:N.a}),r.a.createElement(o.default,{h:"2",id:"navbars-containers"},"Containers"),r.a.createElement("p",null,"While not required, you can wrap the Navbar in a"," ",r.a.createElement("code",null,"<Container>")," component to center it on a page, or add one within to only center the contents of a"," ",r.a.createElement("a",{href:"#navbar-placement"},"fixed or static top navbar"),"."),r.a.createElement(s.a,{codeText:x.a}),r.a.createElement("p",null,"When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified"," ",r.a.createElement("code",null,"expand={'sm' | 'md' | 'lg' | 'xl'}")," prop. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed."),r.a.createElement(s.a,{codeText:B.a}),r.a.createElement(o.default,{h:"2",id:"navbars-placement"},"Placement"),r.a.createElement("p",null,"You can use Bootstrap's"," ",r.a.createElement("a",{href:Object({bootstrapVersion:"4.4.1",docsUrl:"https://getbootstrap.com/docs/4.4",version:"1.0.0",cssHash:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"}).docUrl+"/utilities/position/"},"position utilities")," ","to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use"," ",r.a.createElement("code",null,"position: fixed"),", meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the"," ",r.a.createElement("code",null,"<body>"),") to prevent overlap with other elements. Also note that"," ",r.a.createElement("strong",null,r.a.createElement("code",null,".sticky-top")," uses ",r.a.createElement("code",null,"position: sticky"),", which"," ",r.a.createElement("a",{href:"https://caniuse.com/#feat=css-sticky"},"isn’t fully supported in every browser")),"."),r.a.createElement("p",null,"Since these positioning needs are so common for Navbars, we've added convenience props for them"),r.a.createElement("h3",{className:"h4"},"Fixed top"),r.a.createElement(i.default,{codeText:' <Navbar fixed="top" />'}),r.a.createElement("h3",{className:"h4"},"Fixed bottom"),r.a.createElement(i.default,{codeText:' <Navbar fixed="bottom" />'}),r.a.createElement("h3",{className:"h4"},"Sticky top"),r.a.createElement(i.default,{codeText:' <Navbar sticky="top" />'}),r.a.createElement("h3",{className:"h4"},"Sticky bottom"),r.a.createElement(i.default,{codeText:' <Navbar sticky="bottom" />'}),r.a.createElement(o.default,{h:"2",id:"navbars-mobile-friendly"},"Responsive behaviors"),r.a.createElement("p",null,"Use the ",r.a.createElement("code",null,"expand")," prop as well as the"," ",r.a.createElement("code",null,"Navbar.Toggle")," and ",r.a.createElement("code",null,"Navbar.Collapse")," components to control when content collapses behind a button."),r.a.createElement("p",null,"Set the ",r.a.createElement("code",null,"defaultExpanded")," prop to make the Navbar start expanded. Set ",r.a.createElement("code",null,"collapseOnSelect")," to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the ",r.a.createElement("code",null,"expanded")," and"," ",r.a.createElement("code",null,"onToggle")," props."),r.a.createElement(l.a,{theme:"warning"},"Watch out! You ",r.a.createElement("strong",null,"need")," to provide a breakpoint value to"," ",r.a.createElement("code",null,"expand")," in order for the Navbar to collapse at all."),r.a.createElement(s.a,{codeText:b.a}),r.a.createElement(o.default,{h:"2",id:"navbar-api"},"API"),r.a.createElement(c.a,{metadata:a.Navbar}),r.a.createElement(c.a,{metadata:a.NavbarBrand,exportedBy:a.Navbar}),r.a.createElement(c.a,{metadata:a.NavbarToggle,exportedBy:a.Navbar}),r.a.createElement(c.a,{metadata:a.NavbarCollapse,exportedBy:a.Navbar}))}));var L="4039819363"},OWxa:function(e,a){e.exports='<>\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-info">Search</Button>\n    </Form>\n  </Navbar>\n  <br />\n  <Navbar bg="primary" variant="dark">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-light">Search</Button>\n    </Form>\n  </Navbar>\n\n  <br />\n  <Navbar bg="light" variant="light">\n    <Navbar.Brand href="#home">Navbar</Navbar.Brand>\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#features">Features</Nav.Link>\n      <Nav.Link href="#pricing">Pricing</Nav.Link>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-primary">Search</Button>\n    </Form>\n  </Navbar>\n</>;\n'},PQpg:function(e,a){e.exports='<Navbar>\n  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>\n  <Navbar.Toggle />\n  <Navbar.Collapse className="justify-content-end">\n    <Navbar.Text>\n      Signed in as: <a href="#login">Mark Otto</a>\n    </Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n'},TokV:function(e,a){e.exports='<Container>\n  <Navbar expand="lg" variant="light" bg="light">\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Navbar>\n</Container>;\n'},"Us+Q":function(e,a){e.exports='<>\n  <Navbar bg="light">\n    <Navbar.Brand href="#home">Brand link</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="light">\n    <Navbar.Brand>Brand text</Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark">\n    <Navbar.Brand href="#home">\n      <img\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n        alt="React Bootstrap logo"\n      />\n    </Navbar.Brand>\n  </Navbar>\n  <br />\n  <Navbar bg="dark" variant="dark">\n    <Navbar.Brand href="#home">\n      <img\n        alt=""\n        src="/logo.svg"\n        width="30"\n        height="30"\n        className="d-inline-block align-top"\n      />{\' \'}\n      React Bootstrap\n    </Navbar.Brand>\n  </Navbar>\n</>;\n'},bpMW:function(e,a){e.exports='<Navbar expand="lg" variant="light" bg="light">\n  <Container>\n    <Navbar.Brand href="#">Navbar</Navbar.Brand>\n  </Container>\n</Navbar>;\n'},h55t:function(e,a,n){"use strict";var t=n("mXGw"),r=n.n(t),o=n("Q6D8");a.a=function(e){var a=e.title,n=e.children,t=e.theme;return r.a.createElement("aside",{role:"note",className:o[t||"warning"]},a&&r.a.createElement("header",{className:"h5"},a),r.a.createElement("div",null,n))}},pHbE:function(e,a){e.exports='<Navbar bg="light" expand="lg">\n  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>\n  <Navbar.Toggle aria-controls="basic-navbar-nav" />\n  <Navbar.Collapse id="basic-navbar-nav">\n    <Nav className="mr-auto">\n      <Nav.Link href="#home">Home</Nav.Link>\n      <Nav.Link href="#link">Link</Nav.Link>\n      <NavDropdown title="Dropdown" id="basic-nav-dropdown">\n        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n    <Form inline>\n      <FormControl type="text" placeholder="Search" className="mr-sm-2" />\n      <Button variant="outline-success">Search</Button>\n    </Form>\n  </Navbar.Collapse>\n</Navbar>;\n'},xNZB:function(e,a){e.exports='<Navbar className="bg-light justify-content-between">\n  <Form inline>\n    <InputGroup>\n      <InputGroup.Prepend>\n        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n      </InputGroup.Prepend>\n      <FormControl\n        placeholder="Username"\n        aria-label="Username"\n        aria-describedby="basic-addon1"\n      />\n    </InputGroup>\n  </Form>\n  <Form inline>\n    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />\n    <Button type="submit">Submit</Button>\n  </Form>\n</Navbar>;\n'}}]);
//# sourceMappingURL=component---src-pages-components-navbar-js-443c2d85417bfe65cd3a.js.map