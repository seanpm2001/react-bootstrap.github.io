webpackJsonp(["component---src-pages-components-list-group-js"],{"./node_modules/babel-loader/lib/index.js??ref--0-0!./src/pages/components/list-group.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.data;return o.a.createElement("div",{className:"bs-docs-section"},o.a.createElement("h2",{className:"page-header"},o.a.createElement(s.a,{id:"listgroup"},"List group")," ",o.a.createElement("small",null,"ListGroup, ListGroupItem")),o.a.createElement("p",null,"List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-default"},"Centers by default")),o.a.createElement(i.a,{codeText:m.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-linked"},"Linked")),o.a.createElement("p",null,"Set the ",o.a.createElement("code",null,"href")," or ",o.a.createElement("code",null,"onClick")," prop on"," ",o.a.createElement("code",null,"ListGroupItem"),", to create a linked or clickable element."),o.a.createElement(i.a,{codeText:c.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-styling-state"},"Styling by state")),o.a.createElement("p",null,"Set the ",o.a.createElement("code",null,"active")," or ",o.a.createElement("code",null,"disabled")," prop to"," ",o.a.createElement("code",null,"true")," to mark or disable the item."),o.a.createElement(i.a,{codeText:L.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-styling-color"},"Styling by color")),o.a.createElement("p",null,"Set the ",o.a.createElement("code",null,"bsStyle")," prop to style the item"),o.a.createElement(i.a,{codeText:h.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-with-header"},"With header")),o.a.createElement("p",null,"Set the ",o.a.createElement("code",null,"header")," prop to create a structured item, with a heading and a body area."),o.a.createElement(i.a,{codeText:I.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-with-custom-children"},"With custom component children")),o.a.createElement("p",null,"When using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to"," ",o.a.createElement("code",null,"ListGroup"),", set the",o.a.createElement("code",null,"componentClass")," prop to specify which element"," ",o.a.createElement("code",null,"ListGroup")," should output."),o.a.createElement(i.a,{codeText:f.a}),o.a.createElement("h3",null,o.a.createElement(s.a,{id:"listgroup-props"},"Props")),o.a.createElement("h4",null,o.a.createElement(s.a,{id:"listgroup-props-group"},"ListGroup"),o.a.createElement(a.a,{component:t.ListGroup.displayName})),o.a.createElement(l.a,{metadata:t.ListGroup}),o.a.createElement("h4",null,o.a.createElement(s.a,{id:"listgroup-props-item"},"ListGroupItem"),o.a.createElement(a.a,{component:t.ListGroupItem.displayName})),o.a.createElement(l.a,{metadata:t.ListGroupItem}))},n.d(t,"query",function(){return C});var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./src/components/Anchor.js"),a=n("./src/components/LinkToSource.js"),l=n("./src/components/PropTable.js"),i=n("./src/components/ReactPlayground.js"),u=n("./src/examples/ListGroupDefault.js"),m=n.n(u),p=n("./src/examples/ListGroupLinked.js"),c=n.n(p),d=n("./src/examples/ListGroupActive.js"),L=n.n(d),G=n("./src/examples/ListGroupStyle.js"),h=n.n(G),E=n("./src/examples/ListGroupHeader.js"),I=n.n(E),g=n("./src/examples/ListGroupCustom.js"),f=n.n(g);var C="** extracted graphql fragment **"},"./src/examples/ListGroupActive.js":function(e,t){e.exports='<ListGroup>\n  <ListGroupItem href="#" active>\n    Link 1\n  </ListGroupItem>\n  <ListGroupItem href="#">Link 2</ListGroupItem>\n  <ListGroupItem href="#" disabled>\n    Link 3\n  </ListGroupItem>\n</ListGroup>;\n'},"./src/examples/ListGroupCustom.js":function(e,t){e.exports='function CustomComponent({ children }) {\n  return (\n    <li className="list-group-item" onClick={() => {}}>\n      {children}\n    </li>\n  );\n}\n\nrender(\n  <ListGroup componentClass="ul">\n    <CustomComponent>Custom Child 1</CustomComponent>\n    <CustomComponent>Custom Child 2</CustomComponent>\n    <CustomComponent>Custom Child 3</CustomComponent>\n  </ListGroup>\n);\n'},"./src/examples/ListGroupDefault.js":function(e,t){e.exports="<ListGroup>\n  <ListGroupItem>Item 1</ListGroupItem>\n  <ListGroupItem>Item 2</ListGroupItem>\n  <ListGroupItem>...</ListGroupItem>\n</ListGroup>;\n"},"./src/examples/ListGroupHeader.js":function(e,t){e.exports='<ListGroup>\n  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>\n  <ListGroupItem header="Heading 2" href="#">\n    Linked item\n  </ListGroupItem>\n  <ListGroupItem header="Heading 3" bsStyle="danger">\n    Danger styling\n  </ListGroupItem>\n</ListGroup>;\n'},"./src/examples/ListGroupLinked.js":function(e,t){e.exports='function alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup>\n    <ListGroupItem href="#link1">Link 1</ListGroupItem>\n    <ListGroupItem href="#link2">Link 2</ListGroupItem>\n    <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem>\n  </ListGroup>\n);\n'},"./src/examples/ListGroupStyle.js":function(e,t){e.exports='<ListGroup>\n  <ListGroupItem bsStyle="success">Success</ListGroupItem>\n  <ListGroupItem bsStyle="info">Info</ListGroupItem>\n  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>\n  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>\n</ListGroup>;\n'}});
//# sourceMappingURL=component---src-pages-components-list-group-js-e3e8f92108a9a627502c.js.map