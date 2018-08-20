webpackJsonp(["component---src-pages-components-tooltips-js"],{"./node_modules/babel-loader/lib/index.js??ref--0-0!./src/pages/components/tooltips.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.data;return a.a.createElement("div",{className:"bs-docs-section"},a.a.createElement("h2",{className:"page-header"},a.a.createElement(l.a,{id:"tooltips"},"Tooltips")," ",a.a.createElement("small",null,"Tooltip")),a.a.createElement("p",null,"Tooltip component for a more stylish alternative to that anchor tag"," ",a.a.createElement("code",null,"title")," attribute."),a.a.createElement(p.a,{codeText:c.a,exampleClassName:"tooltip-static"}),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"tooltips-overlay-trigger"},"With OverlayTrigger")),a.a.createElement("p",null,"Attach and position tooltips with ",a.a.createElement("code",null,"OverlayTrigger"),"."),a.a.createElement(p.a,{codeText:d.a}),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"tooltips-in-text"},"In text copy")),a.a.createElement("p",null,"Positioned tooltip in text copy."),a.a.createElement(p.a,{codeText:u.a}),a.a.createElement("h3",null,a.a.createElement(l.a,{id:"tooltips-props"},"Props")),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"overlays-trigger-props"},"OverlayTrigger"),a.a.createElement(i.a,{component:t.OverlayTrigger.displayName})),a.a.createElement(r.a,{metadata:t.OverlayTrigger}),a.a.createElement("h4",null,a.a.createElement(l.a,{id:"tooltips-props-tooltip"},"Tooltip"),a.a.createElement(i.a,{component:t.Tooltip.displayName})),a.a.createElement(r.a,{metadata:t.Tooltip}))},o.d(t,"query",function(){return T});var n=o("./node_modules/react/index.js"),a=o.n(n),l=o("./src/components/Anchor.js"),i=o("./src/components/LinkToSource.js"),r=o("./src/components/PropTable.js"),p=o("./src/components/ReactPlayground.js"),s=o("./src/examples/TooltipBasic.js"),c=o.n(s),m=o("./src/examples/TooltipPositioned.js"),d=o.n(m),g=o("./src/examples/TooltipInCopy.js"),u=o.n(g);var T="** extracted graphql fragment **"},"./src/examples/TooltipBasic.js":function(e,t){e.exports='<div>\n  <Tooltip placement="right" className="in" id="tooltip-right">\n    Tooltip right\n  </Tooltip>\n\n  <Tooltip placement="top" className="in" id="tooltip-top">\n    Tooltip top\n  </Tooltip>\n\n  <Tooltip placement="left" className="in" id="tooltip-left">\n    Tooltip left\n  </Tooltip>\n\n  <Tooltip placement="bottom" className="in" id="tooltip-bottom">\n    Tooltip bottom\n  </Tooltip>\n</div>;\n'},"./src/examples/TooltipInCopy.js":function(e,t){e.exports='function LinkWithTooltip({ id, children, href, tooltip }) {\n  return (\n    <OverlayTrigger\n      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}\n      placement="top"\n      delayShow={300}\n      delayHide={150}\n    >\n      <a href={href}>{children}</a>\n    </OverlayTrigger>\n  );\n}\n\nrender(\n  <p className="muted" style={{ marginBottom: 0 }}>\n    Tight pants next level keffiyeh{\' \'}\n    <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">\n      you probably\n    </LinkWithTooltip>{\' \'}\n    haven\'t heard of them. Photo booth beard raw denim letterpress vegan\n    messenger bag stumptown. Farm-to-table seitan, mcsweeney\'s fixie sustainable\n    quinoa 8-bit american apparel{\' \'}\n    <LinkWithTooltip\n      tooltip={\n        <span>\n          Another <strong>tooltip</strong>\n        </span>\n      }\n      href="#"\n      id="tooltip-2"\n    >\n      have a\n    </LinkWithTooltip>\n    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s\n    cleanse vegan chambray. A really ironic artisan{\' \'}\n    <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">\n      whatever keytar\n    </LinkWithTooltip>\n    , scenester farm-to-table banksy Austin{\' \'}\n    <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">\n      twitter handle\n    </LinkWithTooltip>{\' \'}\n    freegan cred raw denim single-origin coffee viral.\n  </p>\n);\n'},"./src/examples/TooltipPositioned.js":function(e,t){e.exports='const tooltip = (\n  <Tooltip id="tooltip">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n);\n\nconst positionerInstance = (\n  <ButtonToolbar>\n    <OverlayTrigger placement="left" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="top" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="bottom" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="right" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\nrender(positionerInstance);\n'}});
//# sourceMappingURL=component---src-pages-components-tooltips-js-87fa5604ee3526d6a6d3.js.map