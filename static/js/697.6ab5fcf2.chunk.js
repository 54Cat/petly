"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[697],{8044:function(n,e,t){t.d(e,{E:function(){return f}});var r,o,i=t(1703),a=t(22),s=t(168),l=t(6405),c=l.Z.form(r||(r=(0,s.Z)(["\nwidth: 280px;\nposition: relative;\nmargin: 0 auto;\nmargin-top: 28px;\n    margin-bottom: 40px;\n    @media (min-width: 768px) {\n        width: 652px;\n        margin-top: 40px;\n        margin-bottom: 60px;\n    }\n"]))),u=l.Z.button(o||(o=(0,s.Z)(["\n    border: none;\n    background-color: transparent;\n    width: 32px;\n    height: 40px;\n    padding: 0;\n    position: absolute;\n    top: 3px;\n    right: 0;\n"]))),d=t(5551),p=t(184),f=function(n){var e=n.handleSubmit,t=n.filter,r=n.onFilterChange,o=n.styles;return(0,p.jsxs)(c,{style:o,onSubmit:e,children:[(0,p.jsx)(d.Vr,{value:t,onChange:r,placeholder:"Search"}),(0,p.jsx)(u,{type:"submit",children:""===t.trim()?(0,p.jsx)(i.Z,{sx:{fontSize:20}}):(0,p.jsx)(a.Z,{sx:{fontSize:20}})})]})}},5697:function(n,e,t){t.r(e),t.d(e,{default:function(){return xn}});var r,o,i,a,s,l,c,u,d,p,f=t(7762),x=t(4165),h=t(5861),m=t(9439),A=t(2791),g=t(9434),v=t(7689),b=t(6351),j=t(9592),w=t(9616),y=t(1912),Z=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(){var e;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.Z.get("https://petly-backend-23cb.onrender.com/api/notices/myFavorite");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(e){var t;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.Z.get("https://petly-backend-23cb.onrender.com/api/notices/favorite/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(e){var t;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.Z.delete("https://petly-backend-23cb.onrender.com/api/notices/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),D=t(5551),B=t(8044),F=t(7975),S=t(1413),z=t(168),M=t(6405),Q=M.Z.button(r||(r=(0,z.Z)(["\n    font-size: 14px;\n    line-height: 1.36;\n    letter-spacing: 0.04em;\n    color: #111111;\n    background: #ffffff;\n    border: 2px solid #f59256;\n    border-radius: 40px;\n    padding: 8px 28px;\n    cursor: pointer;\n    @media (min-width: 768px) {\n        font-size: 20px;\n        padding: 10px 28px;\n    }\n"]))),R=t(184),U=function(n){var e=n.category,t=n.title,r=n.name,o=n.birthday,i=n.breed,a=n.updateFields;return(0,R.jsxs)("div",{children:[(0,R.jsx)("h1",{children:"Add pet"}),(0,R.jsxs)("div",{children:[(0,R.jsx)(Q,{type:"button",value:"lost-found",style:"lost-found"===e?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,onClick:function(n){return a({category:n.target.value})},children:"lost/found"}),(0,R.jsx)(Q,{type:"button",value:"for-free",style:"for-free"===e?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,onClick:function(n){return a({category:n.target.value})},children:"In good hands"}),(0,R.jsx)(Q,{type:"button",value:"sell",style:"sell"===e?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,onClick:function(n){return a({category:n.target.value})},children:"sell"})]}),(0,R.jsx)("label",{htmlFor:"title",children:"Title of ad"}),(0,R.jsx)("input",{type:"text",placeholder:"Type name pet",name:"title",value:t,onChange:function(n){return a({title:n.target.value})}}),(0,R.jsx)("label",{htmlFor:"name",children:"Name pet"}),(0,R.jsx)("input",{type:"text",placeholder:"Type name pet",name:"name",value:r,onChange:function(n){return a({name:n.target.value})}}),(0,R.jsx)("label",{htmlFor:"birthday",children:"Date of birth"}),(0,R.jsx)("input",{type:"text",placeholder:"Type name pet",name:"birthday",value:o,onChange:function(n){return a({birthday:n.target.value})}}),(0,R.jsx)("label",{htmlFor:"breed",children:"Breed"}),(0,R.jsx)("input",{type:"text",placeholder:"Type name pet",name:"breed",value:i,onChange:function(n){return a({breed:n.target.value})}})]})},W=M.Z.input(o||(o=(0,z.Z)(["\n    width: 0;\n    height: 0;\n    position: absolute;\n    &:checked + span,\n    :hover + span,\n    :focus + span {\n        color: #f59256;\n    }\n"]))),H=M.Z.label(i||(i=(0,z.Z)(["\n    display: flex;\n    flex-direction: column-reverse;\n    @media (min-width: 768px) {\n        margin-right: 80px;\n    }\n    margin-right: 40px;\n    :last-child {\n        margin-right: 0px;\n    }\n"]))),I=M.Z.span(a||(a=(0,z.Z)(["\n    background-image: url(",");\n    width: 40px;\n    height: 40px;\n\n    background-size: contain;\n    background-repeat: no-repeat;\n    @media (min-width: 768px) {\n        width: 60px;\n        height: 60px;\n    }\n"])),"data:image/png;base64,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"),N=M.Z.span(s||(s=(0,z.Z)(["\n    background-image: url(",");\n    width: 40px;\n    height: 40px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    @media (min-width: 768px) {\n        width: 60px;\n        height: 60px;\n    }\n"])),"data:image/png;base64,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"),L=M.Z.span(l||(l=(0,z.Z)(["\n    font-size: 18px;\n    line-height: 26px;\n    margin-top: 12px;\n    @media (min-width: 768px) {\n        font-size: 20px;\n        margin-top: 20px;\n    }\n"]))),V=M.Z.fieldset(c||(c=(0,z.Z)(["\n    display: flex;\n    border: none;\n"]))),X=M.Z.legend(u||(u=(0,z.Z)(["\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 18px;\n    @media (min-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 28px;\n    }\n"]))),J=M.Z.span(d||(d=(0,z.Z)(["\n    color: #f59256;\n"]))),q=function(n){var e=n.category,t=n.sex,r=n.location,o=n.price,i=n.comments,a=n.updateFields;return(0,R.jsxs)("div",{children:[(0,R.jsx)("h1",{children:"Add pet"}),(0,R.jsxs)(V,{children:[(0,R.jsxs)(X,{children:["The sex",(0,R.jsx)(J,{children:"*"}),":"]}),(0,R.jsxs)(H,{htmlFor:"Choice1",children:[(0,R.jsx)(W,{type:"radio",id:"Choice1",value:"Male",name:t,onChange:function(n){return a({sex:n.target.value})}}),(0,R.jsx)(L,{children:"Male"}),(0,R.jsx)(N,{})]}),(0,R.jsxs)(H,{htmlFor:"Choice2",children:[(0,R.jsx)(W,{type:"radio",id:"Choice2",value:"Female",name:t,onChange:function(n){return a({sex:n.target.value})}}),(0,R.jsx)(L,{children:"Female"}),(0,R.jsx)(I,{})]})]}),(0,R.jsx)("label",{htmlFor:"location",children:"Location*:"}),(0,R.jsx)("input",{type:"text",name:"location",placeholder:"Type name pet",value:r,onChange:function(n){return a({location:n.target.value})}}),"sell"===e&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("label",{htmlFor:"price",children:"Price*:"}),(0,R.jsx)("input",{type:"text",name:"price",placeholder:"Type name pet",value:o,onChange:function(n){return a({price:n.target.value})}})]}),(0,R.jsxs)("label",{htmlFor:"myPetsPhoto",children:["Load the pet\u2019s image:",(0,R.jsx)("input",{id:"myPetsPhoto",type:"file",name:"myPetsPhoto",onChange:function(n){return a({myPetsPhoto:n.target.files[0]})}})]}),(0,R.jsx)("label",{htmlFor:"comments",children:"Comments"}),(0,R.jsx)("input",{type:"text",name:"comments",placeholder:"Type name pet",value:i,onChange:function(n){return a({comments:n.target.value})}})]})};var G,T,Y,E,K,O,P=M.Z.form(p||(p=(0,z.Z)(["\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 60px 20px 40px;\n    background-color: #ffffff;\n    border-radius: 20px;\n\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: 320px) {\n        width: 280px;\n    }\n\n    @media (min-width: 768px) {\n        padding: 32px 24px 32px 20px;\n        width: 704px;\n        border-radius: 40px;\n    }\n"]))),_={category:"sell",title:"",name:"",birthday:"",breed:"",sex:"",location:"",price:"",myPetsPhoto:"",comments:""},$=function(n){var e=n.Close,t=(0,A.useState)(_),r=(0,m.Z)(t,2),o=r[0],i=r[1];function a(n){i((function(e){return(0,S.Z)((0,S.Z)({},e),n)}))}var s=function(n){var e=(0,A.useState)(0),t=(0,m.Z)(e,2),r=t[0],o=t[1];return{currentStepIndex:r,step:n[r],steps:n,isFirstStep:0===r,isLastStep:r===n.length-1,goTo:function(n){o(n)},next:function(){o((function(e){return e>=n.length-1?e:e+1}))},back:function(){o((function(n){return n<=0?n:n-1}))}}}([(0,R.jsx)(U,(0,S.Z)((0,S.Z)({},o),{},{updateFields:a})),(0,R.jsx)(q,(0,S.Z)((0,S.Z)({},o),{},{updateFields:a}))]),l=s.step,c=s.isFirstStep,u=s.isLastStep,d=s.back,p=s.next,f=(0,g.I0)(),x=Object.entries(o).filter((function(n){return"files"!==n[0]}));return(0,R.jsxs)(P,{onSubmit:function(n){if(n.preventDefault(),!u)return p();var t=new FormData;x.forEach((function(n){t.append(n[0],n[1])})),f((0,w.uD)(t)),e()},children:[l,(0,R.jsxs)("div",{children:[c?(0,R.jsx)("button",{type:"button",onClick:e,children:"Cancel"}):(0,R.jsx)("button",{type:"button",onClick:d,children:"Back"}),(0,R.jsx)("button",{type:"submit",children:u?"Done":"Next"})]})]})},nn=t(7948),en=t.n(nn),tn=t(9823),rn=(0,M.Z)(en())(G||(G=(0,z.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n    border-radius: 40px;\n    border-color: white;\n    background-color: red;\n\n    @media (min-width: 320px) {\n        width: 280px;\n    }\n\n    @media (min-width: 768px) {\n        width: 704px;\n    }\n"]))),on=M.Z.button(T||(T=(0,z.Z)(["\n    line-height: 22px;\n    letter-spacing: 0.04em;\n"]))),an=M.Z.button(Y||(Y=(0,z.Z)(["\n    position: absolute;\n    top: 23px;\n    right: 23px;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    border-color: transparent;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media (min-width: 768px) {\n        width: 44px;\n        height: 44px;\n\n        top: 12px;\n        right: 20px;\n    }\n"]))),sn=(0,M.Z)(tn.Z)(E||(E=(0,z.Z)(["\n    fill: black;\n    width: 28px;\n    height: 28px;\n\n    &:hover {\n        fill: rgba(245, 146, 86, 1);\n    }\n\n    @media (min-width: 768px) {\n        width: 36px;\n        height: 36px;\n    }\n"]))),ln=function(){var n=(0,A.useState)(!1),e=(0,m.Z)(n,2),t=e[0],r=e[1];function o(){r(!1)}return(0,R.jsxs)("div",{children:[(0,R.jsx)(on,{onClick:function(){r(!0)},children:"Learn more"}),(0,R.jsxs)(rn,{isOpen:t,onRequestClose:o,contentLabel:"Example Modal",shouldCloseOnOverlayClick:!0,style:{overlay:{backgroundColor:"rgba(17, 17, 17, 0.6)"}},children:[(0,R.jsx)(an,{onClick:o,children:(0,R.jsx)(sn,{})}),(0,R.jsx)($,{Close:o})]})]})},cn=t(1087),un=M.Z.ul(K||(K=(0,z.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    margin-top: 28px;\n    @media (min-width: 768px) {\n       margin-top: 40px;\n       width: 70%;\n    }\n"]))),dn=(0,M.Z)(cn.OL)(O||(O=(0,z.Z)(["\nfont-family: 'Manrope';\nfont-weight: 500;\nfont-size: 14px;\nline-height: 1.36;\nletter-spacing: 0.04em;\ncolor: #111111;\nbackground: #FFFFFF;\nborder: 2px solid #F59256;\nborder-radius: 40px;\npadding: 8px 28px;\ncursor: pointer;\n@media (min-width: 768px) {\n       font-size: 20px;\n       padding: 10px 28px;\n}\n\n\n"]))),pn=function(){var n=(0,g.I0)();(0,A.useEffect)((function(){n((0,F.U)())}),[n]);var e=(0,g.v9)(j.P).token,t=(0,v.UO)().category;return(0,R.jsxs)(un,{children:[(0,R.jsx)(dn,{to:"/notices/sell",style:"sell"===t?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,children:"sell"}),(0,R.jsx)(dn,{to:"/notices/lost-found",style:"lost-found"===t?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,children:"lost/found"}),(0,R.jsx)(dn,{to:"/notices/for-free",style:"for-free"===t?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,children:"In good hands"}),e&&(0,R.jsx)(dn,{to:"/notices/favorite",style:"favorite"===t?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,children:"favorite ads"}),e&&(0,R.jsx)(dn,{to:"/notices/own",style:"own"===t?{color:"#ffffff",backgroundColor:"#F59256",border:0}:void 0,children:"my ads"}),(0,R.jsx)(ln,{})]})},fn=t(4782),xn=function(){var n=(0,g.v9)(j.P),e=(0,g.I0)(),t=(0,g.v9)(b.r7).items,r=(0,A.useState)(""),o=(0,m.Z)(r,2),i=o[0],a=o[1],s=(0,A.useState)([]),l=(0,m.Z)(s,2),c=l[0],u=l[1],d=(0,A.useState)([]),p=(0,m.Z)(d,2),y=p[0],F=p[1],S=(0,v.UO)().category,z=(0,v.s0)(),M=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(){var e,t;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z();case 2:e=n.sent,t=e.map((function(n){return n._id})),F(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(e){var t;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e);case 2:t=n.sent,F(t.favorites);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),U=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(e){var t,r;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(e);case 2:t=n.sent,r=c.filter((function(n){return n._id!==t.data._id})),u(r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();(0,A.useEffect)((function(){switch(S){case"lost-found":e((0,w.Di)("lost-found")),n.token&&M();break;case"for-free":e((0,w.Di)("for-free")),n.token&&M();break;case"sell":e((0,w.Di)("sell")),n.token&&M();break;case"favorite":if(!n.token)return void z("/notices/lost-found");e((0,w.Di)("myFavorite")),M();break;case"own":if(!n.token)return void z("/notices/lost-found");e((0,w.Di)("")),M();break;default:z("/notices/sell")}}),[n.token,S,e,z]),(0,A.useEffect)((function(){u(t)}),[t]),(0,A.useEffect)((function(){var n=t.filter((function(n){var e,t=!1,r=(0,f.Z)(i.trim().split(" "));try{for(r.s();!(e=r.n()).done;){var o=e.value;if(n.title.toLowerCase().includes(o.toLowerCase())){t=!0;break}}}catch(a){r.e(a)}finally{r.f()}return t}));u(n)}),[t,i]);return(0,R.jsxs)(D.NP,{children:[(0,R.jsx)(D.Dx,{children:"Find your favorite pet"}),(0,R.jsx)(B.E,{styles:{marginBottom:0},handleSubmit:function(n){n.preventDefault(),""!==i.trim()&&a("")},onFilterChange:function(n){a(n.currentTarget.value)},filter:i}),(0,R.jsx)(pn,{}),(0,R.jsx)(fn.k,{notices:c,favorite:y,updateFavorite:Q,deleteMyNotices:U})]})}},9592:function(n,e,t){t.d(e,{P:function(){return r}});var r=function(n){return n.user.user}},22:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");e.Z=a},1703:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=a}}]);
//# sourceMappingURL=697.6ab5fcf2.chunk.js.map