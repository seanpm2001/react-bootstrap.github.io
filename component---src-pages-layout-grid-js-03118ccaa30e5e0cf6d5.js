(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{W4pm:function(e,o){e.exports="<Container>\n  <Row>\n    <Col sm={8}>sm=8</Col>\n    <Col sm={4}>sm=4</Col>\n  </Row>\n  <Row>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n    <Col sm>sm=true</Col>\n  </Row>\n</Container>;\n"},"aK+F":function(e,o){e.exports="<Container>\n  <Row>\n    <Col xs>First, but unordered</Col>\n    <Col xs={{ order: 12 }}>Second, but last</Col>\n    <Col xs={{ order: 1 }}>Third, but second</Col>\n  </Row>\n</Container>;\n"},acEq:function(e,o){e.exports="<Container>\n  <Row>\n    <Col>1 of 2</Col>\n    <Col>2 of 2</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col>2 of 3</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},cGlE:function(e,o){e.exports="<Container>\n  {/* Stack the columns on mobile by making one full-width and the other half-width */}\n  <Row>\n    <Col xs={12} md={8}>\n      xs=12 md=8\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}\n  <Row>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n    <Col xs={6} md={4}>\n      xs=6 md=4\n    </Col>\n  </Row>\n\n  {/* Columns are always 50% wide, on mobile and desktop */}\n  <Row>\n    <Col xs={6}>xs=6</Col>\n    <Col xs={6}>xs=6</Col>\n  </Row>\n</Container>;\n"},cfqe:function(e,o){e.exports="<Container>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={6}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col xs={5}>2 of 3 (wider)</Col>\n    <Col>3 of 3</Col>\n  </Row>\n</Container>;\n"},dzBW:function(e,o){e.exports="<Container>\n  <Row>\n    <Col md={4}>md=4</Col>\n    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>\n  </Row>\n  <Row>\n    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>\n  </Row>\n</Container>;\n"},k8J3:function(e,o){e.exports='<Container>\n  <Row className="justify-content-md-center">\n    <Col xs lg="2">\n      1 of 3\n    </Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n  <Row>\n    <Col>1 of 3</Col>\n    <Col md="auto">Variable width content</Col>\n    <Col xs lg="2">\n      3 of 3\n    </Col>\n  </Row>\n</Container>;\n'},"oo/d":function(e,o,n){"use strict";n.r(o),n.d(o,"query",(function(){return k}));var t=n("mXGw"),a=n.n(t),l=n("+xvc"),s=n("vXRK"),r=n("1u5/"),m=n("acEq"),i=n.n(m),d=n("cfqe"),c=n.n(d),u=n("k8J3"),C=n.n(u),f=n("dzBW"),p=n.n(f),x=n("aK+F"),w=n.n(x),h=n("cGlE"),E=n.n(h),b=n("W4pm"),g=n.n(b),R=n("r+yI"),y=n("jICI");o.default=Object(R.a)((function(e){var o=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.default,{h:"1",id:"grid"},"Grid system"),a.a.createElement("p",null,"Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with"," ",a.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"},"flexbox")," ","and is fully responsive. Below is an example and an in-depth look at how the grid comes together."," "),a.a.createElement("p",null,a.a.createElement("strong",null,"New to or unfamiliar with flexbox?")," ",a.a.createElement("a",{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"},"Read this CSS Tricks flexbox guide")," ","for background, terminology, guidelines, and code snippets."),a.a.createElement(l.default,{h:"2",id:"auto-layout"},"Auto-layout columns"),a.a.createElement("p",null,"When no column widths are specified the ",a.a.createElement("code",null,"Col")," component will render equal width columns"),a.a.createElement(r.a,{codeText:i.a,exampleClassName:y.example}),a.a.createElement(l.default,{h:"3",id:"auto-layout-col-sizing"},"Setting one column width"),a.a.createElement("p",null,"Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column."),a.a.createElement(r.a,{codeText:c.a,exampleClassName:y.example}),a.a.createElement(l.default,{h:"3",id:"auto-layout-variable-sizes"},"Variable width content"),a.a.createElement("p",null,"Set the column value (for any breakpoint size) to ",a.a.createElement("code",null,'"auto"')," to size columns based on the natural width of their content."),a.a.createElement(r.a,{codeText:C.a,exampleClassName:y.example}),a.a.createElement(l.default,{h:"2",id:"responsive-grids"},"Responsive grids"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"Col")," lets you specify column widths across 5 breakpoint sizes (xs, sm, md, large, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to"," ",a.a.createElement("code",null,"<Col lg={true} />")," for auto layout widths."),a.a.createElement(r.a,{codeText:g.a,exampleClassName:y.example}),a.a.createElement("p",null,"You can also mix and match breakpoints to create different grids depending on the screen size."),a.a.createElement(r.a,{codeText:E.a,exampleClassName:y.example}),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"Col")," breakpoint props also have a more complicated"," ",a.a.createElement("code",null,"object")," prop form:"," ",a.a.createElement("code",null,"{span: number, order: number, offset: number}")," for specifying offsets and ordering affects."),a.a.createElement("p",null,"You can use the `order` property to control the"," ",a.a.createElement("strong",null,"visual order")," of your content."),a.a.createElement(r.a,{codeText:w.a,exampleClassName:y.example}),a.a.createElement("p",null,"For offsetting grid columns you can set an `offset` value, or, for more general layout, use the margin class utilities."),a.a.createElement(r.a,{codeText:p.a,exampleClassName:y.example}),a.a.createElement(l.default,{h:"2",id:"grid-props"},"API"),a.a.createElement(s.a,{metadata:o.Container}),a.a.createElement(s.a,{metadata:o.Row}),a.a.createElement(s.a,{metadata:o.Col}))}));var k="1663251875"}}]);
//# sourceMappingURL=component---src-pages-layout-grid-js-03118ccaa30e5e0cf6d5.js.map