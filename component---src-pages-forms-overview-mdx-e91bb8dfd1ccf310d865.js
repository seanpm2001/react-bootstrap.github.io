(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{DxHo:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return f})),t.d(n,"default",(function(){return y}));var o=t("rePB"),a=t("zLVn"),r=(t("mXGw"),t("7ljp")),i=t("Snbm"),l=t("vXRK"),m=t("1u5/"),d=t("Jdld"),c=t.n(d),s=t("n3XQ"),p=t.n(s),b=t("cgdb"),u=t.n(b);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={},O={query:"4050936089",_frontmatter:f},F=i.a;function y(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.mdx)(F,x(x(x({},O),t),{},{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("h1",x({},{id:"forms"}),"Forms"),Object(r.mdx)("p",{className:"lead"},"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms."),Object(r.mdx)("h2",x({},{id:"overview"}),"Overview"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormControl>")," component renders a form control with Bootstrap styling.\nThe ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormGroup>")," component wraps a form control with proper spacing, along\nwith support for a label, help text, and validation state. To ensure\naccessibility, set ",Object(r.mdx)("inlineCode",{parentName:"p"},"controlId")," on ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormGroup>"),", and use ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormLabel>")," for\nthe label."),Object(r.mdx)(m.a,{codeText:c.a,mdxType:"ReactPlayground"}),Object(r.mdx)("p",null,"The ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormControl>")," component directly renders the ",Object(r.mdx)("inlineCode",{parentName:"p"},"<input>")," or other specified\ncomponent. If you need to access the value of an uncontrolled ",Object(r.mdx)("inlineCode",{parentName:"p"},"<FormControl>"),",\nattach a ",Object(r.mdx)("inlineCode",{parentName:"p"},"ref")," to it as you would with an uncontrolled input, then call\n",Object(r.mdx)("inlineCode",{parentName:"p"},"ReactDOM.findDOMNode(ref)")," to get the DOM node. You can then interact with that\nnode as you would with any other uncontrolled input."),Object(r.mdx)("p",null,"If your application contains a large number of form groups, we recommend\nbuilding a higher-level component encapsulating a complete field group\nthat renders the label, the control, and any other necessary components.\nWe don't provide this out-of-the-box, because the composition of those\nfield groups is too specific to an individual application to admit a\ngood one-size-fits-all solution."),Object(r.mdx)("h2",x({},{id:"disabled-forms"}),"Disabled forms"),Object(r.mdx)("p",null,"Add the ",Object(r.mdx)("inlineCode",{parentName:"p"},"disabled")," boolean attribute on an input to prevent user interactions and\nmake it appear lighter."),Object(r.mdx)(m.a,{codeText:u.a,mdxType:"ReactPlayground"}),Object(r.mdx)("p",null,"Add the ",Object(r.mdx)("inlineCode",{parentName:"p"},"disabled")," attribute to a ",Object(r.mdx)("inlineCode",{parentName:"p"},"<fieldset>")," to disable all the controls within."),Object(r.mdx)(m.a,{codeText:p.a,mdxType:"ReactPlayground"}),Object(r.mdx)("p",null,"Browsers treat all native form controls (",Object(r.mdx)("inlineCode",{parentName:"p"},"<input>"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"<select>")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"<button>")," elements)\ninside ",Object(r.mdx)("inlineCode",{parentName:"p"},"<fieldset disabled>")," as disabled, preventing both keyboard and mouse interactions\non them."),Object(r.mdx)("p",null,"However, if your form also includes custom button-like elements such as\n",Object(r.mdx)("inlineCode",{parentName:"p"},'<a ... class="btn btn-*">'),", these will only be given a style of ",Object(r.mdx)("inlineCode",{parentName:"p"},"pointer-events: none"),",\nmeaning they are still focusable and operable using the keyboard. In this case, you must\nmanually modify these controls by adding ",Object(r.mdx)("inlineCode",{parentName:"p"},'tabindex="-1"')," to prevent them from receiving\nfocus and ",Object(r.mdx)("inlineCode",{parentName:"p"},'aria-disabled="disabled"')," to signal their state to assistive technologies."),Object(r.mdx)("h2",x({},{id:"api"}),"API"),Object(r.mdx)(l.a,{metadata:t.data.Form,mdxType:"ComponentApi"}),Object(r.mdx)(l.a,{metadata:t.data.FormLabel,exportedBy:t.data.Form,mdxType:"ComponentApi"}))}y.isMDXComponent=!0},Jdld:function(e,n){e.exports='<Form>\n  <Form.Group className="mb-3" controlId="formBasicEmail">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type="email" placeholder="Enter email" />\n    <Form.Text className="text-muted">\n      We\'ll never share your email with anyone else.\n    </Form.Text>\n  </Form.Group>\n\n  <Form.Group className="mb-3" controlId="formBasicPassword">\n    <Form.Label>Password</Form.Label>\n    <Form.Control type="password" placeholder="Password" />\n  </Form.Group>\n  <Form.Group className="mb-3" controlId="formBasicCheckbox">\n    <Form.Check type="checkbox" label="Check me out" />\n  </Form.Group>\n  <Button variant="primary" type="submit">\n    Submit\n  </Button>\n</Form>;\n'},cgdb:function(e,n){e.exports='<>\n  <Form.Group className="mb-3">\n    <Form.Label>Disabled input</Form.Label>\n    <Form.Control placeholder="Disabled input" disabled />\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>Disabled select menu</Form.Label>\n    <Form.Select disabled>\n      <option>Disabled select</option>\n    </Form.Select>\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Check type="checkbox" label="Can\'t check this" disabled />\n  </Form.Group>\n</>;\n'},n3XQ:function(e,n){e.exports='<Form>\n  <fieldset disabled>\n    <Form.Group className="mb-3">\n      <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>\n      <Form.Control id="disabledTextInput" placeholder="Disabled input" />\n    </Form.Group>\n    <Form.Group className="mb-3">\n      <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>\n      <Form.Select id="disabledSelect">\n        <option>Disabled select</option>\n      </Form.Select>\n    </Form.Group>\n    <Form.Group className="mb-3">\n      <Form.Check\n        type="checkbox"\n        id="disabledFieldsetCheck"\n        label="Can\'t check this"\n      />\n    </Form.Group>\n    <Button type="submit">Submit</Button>\n  </fieldset>\n</Form>;\n'}}]);
//# sourceMappingURL=component---src-pages-forms-overview-mdx-e91bb8dfd1ccf310d865.js.map