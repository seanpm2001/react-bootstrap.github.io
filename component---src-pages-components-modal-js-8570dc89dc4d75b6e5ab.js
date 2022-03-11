(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5k6N":function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <Button variant="primary" onClick={() => setShow(true)}>\n        Custom Width Modal\n      </Button>\n\n      <Modal\n        show={show}\n        onHide={() => setShow(false)}\n        dialogClassName="modal-90w"\n        aria-labelledby="example-custom-modal-styling-title"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-custom-modal-styling-title">\n            Custom Modal Styling\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <p>\n            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde\n            commodi aspernatur enim, consectetur. Cumque deleniti temporibus\n            ipsam atque a dolores quisquam quisquam adipisci possimus\n            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod\n            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia\n            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum\n            deleniti rem!\n          </p>\n        </Modal.Body>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},"9/PT":function(e,n,o){},TeCf:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" onClick={handleShow}>\n        Launch demo modal\n      </Button>\n\n      <Modal show={show} onHide={handleClose}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Close\n          </Button>\n          <Button variant="primary" onClick={handleClose}>\n            Save Changes\n          </Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},Wi8L:function(e,n){e.exports='function MydModalWithGrid(props) {\n  return (\n    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">\n      <Modal.Header closeButton>\n        <Modal.Title id="contained-modal-title-vcenter">\n          Using Grid in Modal\n        </Modal.Title>\n      </Modal.Header>\n      <Modal.Body className="show-grid">\n        <Container>\n          <Row>\n            <Col xs={12} md={8}>\n              .col-xs-12 .col-md-8\n            </Col>\n            <Col xs={6} md={4}>\n              .col-xs-6 .col-md-4\n            </Col>\n          </Row>\n\n          <Row>\n            <Col xs={6} md={4}>\n              .col-xs-6 .col-md-4\n            </Col>\n            <Col xs={6} md={4}>\n              .col-xs-6 .col-md-4\n            </Col>\n            <Col xs={6} md={4}>\n              .col-xs-6 .col-md-4\n            </Col>\n          </Row>\n        </Container>\n      </Modal.Body>\n      <Modal.Footer>\n        <Button onClick={props.onHide}>Close</Button>\n      </Modal.Footer>\n    </Modal>\n  );\n}\n\nfunction App() {\n  const [modalShow, setModalShow] = useState(false);\n\n  return (\n    <>\n      <Button variant="primary" onClick={() => setModalShow(true)}>\n        Launch modal with grid\n      </Button>\n\n      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />\n    </>\n  );\n}\n\nrender(<App />);\n'},c6wA:function(e,n){e.exports='function Example() {\n  const [smShow, setSmShow] = useState(false);\n  const [lgShow, setLgShow] = useState(false);\n\n  return (\n    <>\n      <Button onClick={() => setSmShow(true)}>Small modal</Button>{\' \'}\n      <Button onClick={() => setLgShow(true)}>Large modal</Button>\n      <Modal\n        size="sm"\n        show={smShow}\n        onHide={() => setSmShow(false)}\n        aria-labelledby="example-modal-sizes-title-sm"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-modal-sizes-title-sm">\n            Small Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>...</Modal.Body>\n      </Modal>\n      <Modal\n        size="lg"\n        show={lgShow}\n        onHide={() => setLgShow(false)}\n        aria-labelledby="example-modal-sizes-title-lg"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="example-modal-sizes-title-lg">\n            Large Modal\n          </Modal.Title>\n        </Modal.Header>\n        <Modal.Body>...</Modal.Body>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},fEfa:function(e,n){e.exports='function MyVerticallyCenteredModal(props) {\n  return (\n    <Modal\n      {...props}\n      size="lg"\n      aria-labelledby="contained-modal-title-vcenter"\n      centered\n    >\n      <Modal.Header closeButton>\n        <Modal.Title id="contained-modal-title-vcenter">\n          Modal heading\n        </Modal.Title>\n      </Modal.Header>\n      <Modal.Body>\n        <h4>Centered Modal</h4>\n        <p>\n          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac\n          consectetur ac, vestibulum at eros.\n        </p>\n      </Modal.Body>\n      <Modal.Footer>\n        <Button onClick={props.onHide}>Close</Button>\n      </Modal.Footer>\n    </Modal>\n  );\n}\n\nfunction App() {\n  const [modalShow, setModalShow] = React.useState(false);\n\n  return (\n    <>\n      <Button variant="primary" onClick={() => setModalShow(true)}>\n        Launch vertically centered modal\n      </Button>\n\n      <MyVerticallyCenteredModal\n        show={modalShow}\n        onHide={() => setModalShow(false)}\n      />\n    </>\n  );\n}\n\nrender(<App />);\n'},l8p8:function(e,n){e.exports='<Modal.Dialog>\n  <Modal.Header closeButton>\n    <Modal.Title>Modal title</Modal.Title>\n  </Modal.Header>\n\n  <Modal.Body>\n    <p>Modal body text goes here.</p>\n  </Modal.Body>\n\n  <Modal.Footer>\n    <Button variant="secondary">Close</Button>\n    <Button variant="primary">Save changes</Button>\n  </Modal.Footer>\n</Modal.Dialog>;\n'},oudZ:function(e,n){e.exports="function Example() {\n  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];\n  const [fullscreen, setFullscreen] = useState(true);\n  const [show, setShow] = useState(false);\n\n  function handleShow(breakpoint) {\n    setFullscreen(breakpoint);\n    setShow(true);\n  }\n\n  return (\n    <>\n      {values.map((v, idx) => (\n        <Button key={idx} className=\"me-2\" onClick={() => handleShow(v)}>\n          Full screen\n          {typeof v === 'string' && `below ${v.split('-')[0]}`}\n        </Button>\n      ))}\n      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Modal body content</Modal.Body>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n"},"r+yI":function(e,n,o){"use strict";o.d(n,"a",(function(){return r}));var t=o("rePB"),a=o("oYCi"),l=o("Snbm"),d=o("aArQ");function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){Object(t.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e){return function(n){var o=n.location.pathname,t=d.a;return(o.startsWith("/getting-started")||o.startsWith("/layout")||o.startsWith("/components")||o.startsWith("/utilities"))&&(t=l.a),Object(a.jsx)(t,{location:n.location,children:Object(a.jsx)(e,i({},n))})}}},s7Ug:function(e,n,o){"use strict";o.r(n);var t=o("oYCi"),a=o("vXRK"),l=o("+xvc"),d=o("1u5/"),s=o("l8p8"),i=o.n(s),r=o("TeCf"),c=o.n(r),u=o("tQfX"),h=o.n(u),m=o("c6wA"),p=o.n(m),j=o("oudZ"),M=o.n(j),b=o("5k6N"),x=o.n(b),w=o("fEfa"),f=o.n(w),y=o("smJP"),O=o.n(y),g=o("Wi8L"),B=o.n(g),S=o("r+yI"),C=o("9/PT");n.default=Object(S.a)((function(e){var n=e.data;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(l.default,{h:"1",id:"modals",children:"Modals"}),Object(t.jsx)("p",{className:"lead",children:"Add dialogs to your site for lightboxes, user notifications, or completely custom content."}),Object(t.jsx)(l.default,{h:"2",id:"modals-overview",children:"Overview"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:["Modals are positioned over everything else in the document and remove scroll from the ",Object(t.jsx)("code",{children:"<body>"})," so that modal content scrolls instead."]}),Object(t.jsxs)("li",{children:["Modals are ",Object(t.jsx)("em",{children:"unmounted"})," when closed."]}),Object(t.jsxs)("li",{children:["Bootstrap only supports ",Object(t.jsx)("strong",{children:"one"})," modal window at a time. Nested modals aren't supported, but if you really need them, the underlying ",Object(t.jsx)("code",{children:"@restart/ui"})," library can support them if you're willing."]}),Object(t.jsx)("li",{children:'Modal\'s "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.'}),Object(t.jsxs)("li",{children:["Unlike vanilla Bootstrap, ",Object(t.jsx)("code",{children:"autoFocus"})," works in Modals because React handles the implementation."]})]}),Object(t.jsx)(l.default,{h:"2",id:"modals-examples",children:"Examples"}),Object(t.jsx)(l.default,{h:"3",id:"modals-static",children:"Static Markup"}),Object(t.jsxs)("p",{children:["Below is a ",Object(t.jsx)("em",{children:"static"})," modal dialog (without the positioning) to demonstrate the look and feel of the Modal."]}),Object(t.jsx)(d.a,{codeText:i.a}),Object(t.jsx)(l.default,{h:"3",id:"modals-live",children:"Live demo"}),Object(t.jsxs)("p",{children:["A modal with header, body, and set of actions in the footer. Use"," ",Object(t.jsx)("code",{children:"<Modal/>"})," in combination with other components to show or hide your Modal. The ",Object(t.jsx)("code",{children:"<Modal/>"}),' Component comes with a few convenient "sub components": ',Object(t.jsx)("code",{children:"<Modal.Header/>"}),","," ",Object(t.jsx)("code",{children:"<Modal.Title/>"}),", ",Object(t.jsx)("code",{children:"<Modal.Body/>"}),", and"," ",Object(t.jsx)("code",{children:"<Modal.Footer/>"}),", which you can use to build the Modal content."]}),Object(t.jsx)(d.a,{codeText:c.a}),Object(t.jsx)(l.default,{h:"3",id:"static-backdrop",children:"Static backdrop"}),Object(t.jsx)("p",{children:"When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it."}),Object(t.jsx)(d.a,{codeText:h.a}),Object(t.jsx)(l.default,{h:"3",id:"without-animation",children:"Without Animation"}),Object(t.jsxs)("p",{children:['A Modal can also be without an animation. For that set the "animation" prop to ',Object(t.jsx)("code",{children:"false"}),"."]}),Object(t.jsx)(d.a,{codeText:O.a}),Object(t.jsxs)("div",{className:"bs-callout bs-callout-info",children:[Object(t.jsx)("div",{className:"h4",children:"Additional Import Options"}),Object(t.jsxs)("p",{children:["The Modal Header, Title, Body, and Footer components are available as static properties the ",Object(t.jsx)("code",{children:"<Modal/>"})," component, but you can also, import them directly like:"," ",Object(t.jsx)("code",{children:'require("react-bootstrap/ModalHeader")'}),"."]})]}),Object(t.jsx)(l.default,{h:"3",id:"modal-vertically-centered",children:"Vertically centered"}),Object(t.jsx)("p",{children:'You can vertically center a modal by passing the "centered" prop.'}),Object(t.jsx)(d.a,{codeText:f.a}),Object(t.jsx)(l.default,{h:"3",id:"modal-grid",children:"Using the grid"}),Object(t.jsx)("p",{children:"You can use grid layouts within a model using regular grid components inside the modal content."}),Object(t.jsx)(d.a,{codeText:B.a}),Object(t.jsx)(l.default,{h:"2",id:"modal-default-sizing",children:"Optional Sizes"}),Object(t.jsxs)("p",{children:["You can specify a bootstrap large or small modal by using the"," ",Object(t.jsx)("code",{children:"size"})," prop."]}),Object(t.jsx)(d.a,{codeText:p.a}),Object(t.jsx)(l.default,{h:"3",id:"modal-fullscreen",children:"Fullscreen Modal"}),Object(t.jsxs)("p",{children:["You can use the ",Object(t.jsx)("code",{children:"fullscreen"})," prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen ",Object(t.jsx)("b",{children:"below"})," the breakpoint size."]}),Object(t.jsx)(d.a,{codeText:M.a}),Object(t.jsx)(l.default,{h:"3",id:"modal-custom-sizing",children:"Sizing modals using custom CSS"}),Object(t.jsx)("p",{children:'You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.'}),Object(t.jsx)(d.a,{codeText:x.a,exampleClassName:C.custom}),Object(t.jsx)(l.default,{h:"2",id:"modals-props",children:"API"}),Object(t.jsx)(a.a,{metadata:n.Modal}),Object(t.jsx)(a.a,{metadata:n.ModalDialog}),Object(t.jsx)(a.a,{metadata:n.ModalHeader}),Object(t.jsx)(a.a,{metadata:n.ModalTitle}),Object(t.jsx)(a.a,{metadata:n.ModalBody}),Object(t.jsx)(a.a,{metadata:n.ModalFooter})]})}))},smJP:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" onClick={handleShow}>\n        Launch demo modal\n      </Button>\n\n      <Modal show={show} onHide={handleClose} animation={false}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Woohoo, you\'re reading this text in a modal!</Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Close\n          </Button>\n          <Button variant="primary" onClick={handleClose}>\n            Save Changes\n          </Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'},tQfX:function(e,n){e.exports='function Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" onClick={handleShow}>\n        Launch static backdrop modal\n      </Button>\n\n      <Modal\n        show={show}\n        onHide={handleClose}\n        backdrop="static"\n        keyboard={false}\n      >\n        <Modal.Header closeButton>\n          <Modal.Title>Modal title</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          I will not close if you click outside me. Don\'t even try to press\n          escape key.\n        </Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Close\n          </Button>\n          <Button variant="primary">Understood</Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'}}]);
//# sourceMappingURL=component---src-pages-components-modal-js-8570dc89dc4d75b6e5ab.js.map