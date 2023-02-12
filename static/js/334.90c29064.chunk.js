"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[334],{943:function(n,t,e){e.d(t,{X:function(){return c}});var r,i=e(5984),a=e(168),o=e(6405).Z.ul(r||(r=(0,a.Z)(["\ntext-align: left;\ndisplay: flex;\nflex-wrap: wrap;\nrow-gap: 40px;\n@media (min-width: 768px) {\n        row-gap: 60px;\n        column-gap: 32px;\n    }\n"]))),s=e(184),c=function(n){var t=n.cardsArray,e=n.CardsItem,r=n.styles;return(0,s.jsx)(o,{style:r,children:t&&t.map((function(n){var t;return(0,s.jsx)(e,{card:n},null!==(t=n._id)&&void 0!==t?t:(0,i.x0)())}))})}},8044:function(n,t,e){e.d(t,{E:function(){return d}});var r,i,a=e(1703),o=e(22),s=e(168),c=e(6405),l=c.Z.form(r||(r=(0,s.Z)(["\n    width: 280px;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 28px;\n    margin-bottom: 40px;\n    \n    @media (min-width: 768px) {\n        width: 652px;\n        margin-top: 40px;\n        margin-bottom: 60px;\n    }\n"]))),u=c.Z.button(i||(i=(0,s.Z)(["\n    border: none;\n    background-color: transparent;\n    width: 32px;\n    height: 40px;\n    padding: 0;\n    position: absolute;\n    top: 3px;\n    right: 0;\n"]))),f=e(5551),p=e(184),d=function(n){var t=n.handleSubmit,e=n.filter,r=n.onFilterChange,i=n.styles;return(0,p.jsxs)(l,{style:i,onSubmit:t,children:[(0,p.jsx)(f.Vr,{value:e,onChange:r,placeholder:"Search"}),(0,p.jsx)(u,{type:"submit",children:""===e.trim()?(0,p.jsx)(a.Z,{sx:{fontSize:20}}):(0,p.jsx)(o.Z,{sx:{fontSize:20}})})]})}},9577:function(n,t,e){var r=e(1951);t.Z=function(n){return(0,r.default)(new Date(n),"dd/MM/yyyy")}},1334:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,i,a,o,s,c,l,u=e(4165),f=e(5861),p=e(7762),d=e(9439),x=e(2791),h=e(1686),m=e.n(h),g=e(1912),v=function(){var n=(0,f.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.Z.get("https://petly-backend-23cb.onrender.com/api/news");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=e(5551),b=e(8044),y=e(943),w=e(168),j=e(6405),k=j.Z.li(r||(r=(0,w.Z)(["\n    display: block;\n    flex-basis: 100%;\n\n    @media (min-width: 768px) {\n        flex-basis: calc((100% - 32px) / 2);\n        height: 284px;\n    }\n    \n    @media (min-width: 1280px) {\n        flex-basis: calc((100% - 64px) / 3);\n        height: 266px;\n    }\n"]))),S=j.Z.div(i||(i=(0,w.Z)(["\n    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);\n    border-radius: 40px;\n    display: block;\n    flex-basis: 100%;\n    \n    height: 4px;\n    margin-bottom: 4px;\n    @media (min-width: 768px) {\n        flex-basis: calc((100% - 32px) / 2);\n        height: 8px;\n    }\n    \n    @media (min-width: 1280px) {\n        flex-basis: calc((100% - 64px) / 3);\n        \n    }\n"]))),C=j.Z.div(a||(a=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]))),z=j.Z.h3(o||(o=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.37;\n    letter-spacing: -0.01em;\n    margin-bottom: 16px;\n    color: #111111;\n"]))),M=j.Z.p(s||(s=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.37;\n    color: #111321;\n    margin-bottom: 20px;\n\n    @media (min-width: 768px) {\n        margin-bottom: 40px;\n    }\n"]))),D=j.Z.p(c||(c=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.37;\n    color: rgba(17, 17, 17, 0.6);\n"]))),E=j.Z.a(l||(l=(0,w.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.37;\n    text-decoration-line: underline;\n    color: #f59256;\n\n    &:hover,\n    :focus {\n        color: #ff6101;\n    }\n"]))),N=e(9577),A=e(184),L=function(n){var t=n.card,e=t.title,r=t.description,i=t.date,a=t.url;return(0,A.jsxs)(k,{children:[(0,A.jsx)(S,{}),(0,A.jsx)(z,{children:"".concat(e.slice(0,32),"...,")}),(0,A.jsx)(M,{children:" ".concat(r.slice(0,170),"...,")}),(0,A.jsxs)(C,{children:[(0,A.jsx)(D,{children:(0,N.Z)(i)}),(0,A.jsx)(E,{href:a,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},_=e(3433),F=function(n){return(0,_.Z)(n).sort((function(n,t){return Date.parse(t.date)-Date.parse(n.date)}))},I=e(4233),R=function(){var n=(0,x.useState)(!1),t=(0,d.Z)(n,2),e=t[0],r=t[1],i=(0,x.useState)(""),a=(0,d.Z)(i,2),o=a[0],s=a[1],c=(0,x.useState)([]),l=(0,d.Z)(c,2),h=l[0],g=l[1],w=(0,x.useState)([]),j=(0,d.Z)(w,2),k=j[0],S=j[1];(0,x.useEffect)((function(){C()}),[]),(0,x.useEffect)((function(){var n=h.filter((function(n){var t,e=!1,r=(0,p.Z)(o.trim().split(" "));try{for(r.s();!(t=r.n()).done;){var i=t.value;if(n.title.toLowerCase().includes(i.toLowerCase())){e=!0;break}}}catch(a){r.e(a)}finally{r.f()}return e})),t=F(n);S(t)}),[o,h]);var C=function(){var n=(0,f.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,v();case 4:if(0!==(t=n.sent).length){n.next=8;break}return m().Notify.info("We don't have any news!"),n.abrupt("return");case 8:g(t),S(F(t)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),m().Notify.failure(n.t0.message);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}(),z=function(){var n=(0,f.Z)((0,u.Z)().mark((function n(t){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==o.trim()){n.next=3;break}return n.abrupt("return");case 3:s("");case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,A.jsxs)(Z.NP,{children:[(0,A.jsx)(Z.Dx,{children:"News"}),(0,A.jsx)(b.E,{handleSubmit:z,onFilterChange:function(n){s(n.currentTarget.value)},filter:o}),e?(0,A.jsx)(I.h,{}):(0,A.jsx)(y.X,{cardsArray:k,CardsItem:L})]})}},22:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),a=e(184),o=(0,i.default)((0,a.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");t.Z=o},1703:function(n,t,e){var r=e(4836);t.Z=void 0;var i=r(e(5649)),a=e(184),o=(0,i.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=334.90c29064.chunk.js.map