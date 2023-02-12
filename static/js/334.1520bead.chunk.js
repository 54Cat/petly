"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[334],{943:function(n,e,t){t.d(e,{X:function(){return c}});var r,a=t(5984),i=t(168),o=t(6405).Z.ul(r||(r=(0,i.Z)(["\ntext-align: left;\ndisplay: flex;\nflex-wrap: wrap;\nrow-gap: 40px;\n@media (min-width: 768px) {\n        row-gap: 60px;\n        column-gap: 32px;\n    }\n"]))),s=t(184),c=function(n){var e=n.cardsArray,t=n.CardsItem,r=n.styles;return(0,s.jsx)(o,{style:r,children:e&&e.map((function(n){var e;return(0,s.jsx)(t,{card:n},null!==(e=n._id)&&void 0!==e?e:(0,a.x0)())}))})}},8044:function(n,e,t){t.d(e,{E:function(){return d}});var r,a,i=t(1703),o=t(22),s=t(168),c=t(6405),l=c.Z.form(r||(r=(0,s.Z)(["\n    width: 280px;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 28px;\n    margin-bottom: 40px;\n    \n    @media (min-width: 768px) {\n        width: 652px;\n        margin-top: 40px;\n        margin-bottom: 60px;\n    }\n"]))),u=c.Z.button(a||(a=(0,s.Z)(["\n    border: none;\n    background-color: transparent;\n    width: 32px;\n    height: 40px;\n    padding: 0;\n    position: absolute;\n    top: 3px;\n    right: 0;\n"]))),f=t(5551),p=t(184),d=function(n){var e=n.handleSubmit,t=n.filter,r=n.onFilterChange,a=n.styles;return(0,p.jsxs)(l,{style:a,onSubmit:e,children:[(0,p.jsx)(f.Vr,{value:t,onChange:r,placeholder:"Search"}),(0,p.jsx)(u,{type:"submit",children:""===t.trim()?(0,p.jsx)(i.Z,{sx:{fontSize:20}}):(0,p.jsx)(o.Z,{sx:{fontSize:20}})})]})}},9577:function(n,e,t){var r=t(1951);e.Z=function(n){return(0,r.default)(new Date(n),"dd/MM/yyyy")}},1334:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r=t(4165),a=t(5861),i=t(7762),o=t(9439),s=t(2791),c=t(1686),l=t.n(c),u=t(1912);u.Z.defaults.baseURL="https://petly-backend-23cb.onrender.com/api";var f,p,d,x,h,m,g,v=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("news");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=t(5551),b=t(8044),y=t(943),w=t(168),j=t(6405),k=j.Z.li(f||(f=(0,w.Z)(["\n    display: block;\n    flex-basis: 100%;\n\n    @media (min-width: 768px) {\n        flex-basis: calc((100% - 32px) / 2);\n        height: 284px;\n    }\n    \n    @media (min-width: 1280px) {\n        flex-basis: calc((100% - 64px) / 3);\n        height: 266px;\n    }\n"]))),S=j.Z.div(p||(p=(0,w.Z)(["\n    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);\n    border-radius: 40px;\n    display: block;\n    flex-basis: 100%;\n    \n    height: 4px;\n    margin-bottom: 4px;\n    @media (min-width: 768px) {\n        flex-basis: calc((100% - 32px) / 2);\n        height: 8px;\n    }\n    \n    @media (min-width: 1280px) {\n        flex-basis: calc((100% - 64px) / 3);\n        \n    }\n"]))),C=j.Z.div(d||(d=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),z=j.Z.h3(x||(x=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.37;\n    letter-spacing: -0.01em;\n    margin-bottom: 16px;\n    color: #111111;\n"]))),M=j.Z.p(h||(h=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.37;\n    color: #111321;\n    margin-bottom: 20px;\n\n    @media (min-width: 768px) {\n        margin-bottom: 40px;\n    }\n"]))),D=j.Z.p(m||(m=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.37;\n    color: rgba(17, 17, 17, 0.6);\n"]))),E=j.Z.a(g||(g=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.37;\n    text-decoration-line: underline;\n    color: #f59256;\n\n    &:hover,\n    :focus {\n        color: #ff6101;\n    }\n"]))),L=t(9577),N=t(184),A=function(n){var e=n.card,t=e.title,r=e.description,a=e.date,i=e.url;return(0,N.jsxs)(k,{children:[(0,N.jsx)(S,{}),(0,N.jsx)(z,{children:"".concat(t.slice(0,32),"...,")}),(0,N.jsx)(M,{children:" ".concat(r.slice(0,170),"...,")}),(0,N.jsxs)(C,{children:[(0,N.jsx)(D,{children:(0,L.Z)(a)}),(0,N.jsx)(E,{href:i,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},R=t(3433),U=function(n){return(0,R.Z)(n).sort((function(n,e){return Date.parse(e.date)-Date.parse(n.date)}))},_=t(4233),F=function(){var n=(0,s.useState)(!1),e=(0,o.Z)(n,2),t=e[0],c=e[1],u=(0,s.useState)(""),f=(0,o.Z)(u,2),p=f[0],d=f[1],x=(0,s.useState)([]),h=(0,o.Z)(x,2),m=h[0],g=h[1],w=(0,s.useState)([]),j=(0,o.Z)(w,2),k=j[0],S=j[1];(0,s.useEffect)((function(){C()}),[]),(0,s.useEffect)((function(){var n=m.filter((function(n){var e,t=!1,r=(0,i.Z)(p.trim().split(" "));try{for(r.s();!(e=r.n()).done;){var a=e.value;if(n.title.toLowerCase().includes(a.toLowerCase())){t=!0;break}}}catch(o){r.e(o)}finally{r.f()}return t})),e=U(n);S(e)}),[p,m]);var C=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,v();case 4:if(0!==(e=n.sent).length){n.next=8;break}return l().Notify.info("We don't have any news!"),n.abrupt("return");case 8:g(e),S(U(e)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),l().Notify.failure(n.t0.message);case 15:return n.prev=15,c(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}(),z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==p.trim()){n.next=3;break}return n.abrupt("return");case 3:d("");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,N.jsxs)(Z.NP,{children:[(0,N.jsx)(Z.Dx,{children:"News"}),(0,N.jsx)(b.E,{handleSubmit:z,onFilterChange:function(n){d(n.currentTarget.value)},filter:p}),t?(0,N.jsx)(_.h,{}):(0,N.jsx)(y.X,{cardsArray:k,CardsItem:A})]})}},22:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");e.Z=o},1703:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=334.1520bead.chunk.js.map