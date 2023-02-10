"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[979],{4979:function(n,e,i){i.r(e),i.d(e,{default:function(){return Pe}});var t,r,o,a,d,p,x,s,h,l,m,c,g,u,f,b,w,j,Z,y,v,F,k,C,z,S,P,N,E,B,D,R,L,U,I,T,_,M,A,q,V,G,J,W,O,Q,X,H,K=i(9439),Y=i(9434),$=i(2791),nn=i(9592),en=i(6351),tn=i(7975),rn=i(6856),on=i(9126),an=i(168),dn=i(6405),pn=dn.Z.form(t||(t=(0,an.Z)(["\n    display: flex;\n    flex-direction: column;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.33;\n    letter-spacing: 0.04em;\n    padding-left: 16px;\n    /* padding-right: 12px; */\n    margin-bottom: 44px;\n    @media (min-width: 768px) {\n        margin: 44px 0 33px 32px;\n        padding: 0;\n    }\n    /* @media (min-width: 768px) {\n        margin: 0 0 0 15px;\n        padding-left: 15px;\n    } */\n    @media (min-width: 1280px) {\n        padding-left: 15px;\n        margin: 0;\n        margin-bottom: 24px;\n    }\n"]))),xn=dn.Z.label(r||(r=(0,an.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    /* width: 100%; */\n    :not(:last-child) {\n        margin-bottom: 4px;\n    }\n    @media (min-width: 768px) {\n        font-size: 18px;\n        line-height: 1.39;\n        letter-spacing: 0.04em;\n    }\n"]))),sn=dn.Z.div(o||(o=(0,an.Z)(["\n    display: flex;\n    margin-right: 12px;\n    @media (min-width: 768px) {\n        margin-right: 0;\n    }\n"]))),hn=dn.Z.input(a||(a=(0,an.Z)(["\n    width: 141px;\n    border-radius: 40px;\n    border: none;\n    margin-right: 9px;\n    padding: 4px 0 4px 18px;\n    outline: none;\n    :focus,\n    :hover {\n        background: #fdf7f2;\n        border: 1px solid rgba(245, 146, 86, 0.5);\n    }\n    @media (min-width: 768px) {\n        width: 216px;\n        font-size: 18px;\n        line-height: 1.39;\n        letter-spacing: 0.04em;\n    }\n    @media (min-width: 1280px) {\n        margin-right: 24px;\n        margin-left: 4px;\n    }\n"]))),ln=dn.Z.button(d||(d=(0,an.Z)(["\n    display: flex;\n    align-items: center;\n    width: 26px;\n    height: 26px;\n\n    background: #fdf7f2;\n    backdrop-filter: blur(2px);\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n    @media (min-width: 768px) {\n        justify-content: center;\n        width: 32px;\n        height: 32px;\n    }\n    @media (min-width: 1280px) {\n        margin-right: 14px;\n    }\n"]))),mn=i(184),cn=function(){var n=(0,Y.I0)(),e=(0,Y.v9)(en.bG).user,i=e._id,t=e.name,r=e.city,o=e.email,a=e.phone,d=e.birthday,p=(0,mn.jsx)(rn.Gpi,{color:"#F59256",className:"icon"}),x=(0,mn.jsx)(rn.Gpi,{color:"#111111",className:"icon"}),s=(0,mn.jsx)(on.IQF,{color:"#F59256",className:"icon"}),h=(0,$.useState)(t),l=(0,K.Z)(h,2),m=l[0],c=l[1],g=(0,$.useState)(o),u=(0,K.Z)(g,2),f=u[0],b=u[1],w=(0,$.useState)(d),j=(0,K.Z)(w,2),Z=j[0],y=j[1],v=(0,$.useState)(a),F=(0,K.Z)(v,2),k=F[0],C=F[1],z=(0,$.useState)(r),S=(0,K.Z)(z,2),P=S[0],N=S[1],E=(0,$.useState)(p),B=(0,K.Z)(E,2),D=B[0],R=B[1],L=(0,$.useState)(p),U=(0,K.Z)(L,2),I=U[0],T=U[1],_=(0,$.useState)(p),M=(0,K.Z)(_,2),A=M[0],q=M[1],V=(0,$.useState)(p),G=(0,K.Z)(V,2),J=G[0],W=G[1],O=(0,$.useState)(p),Q=(0,K.Z)(O,2),X=Q[0],H=Q[1],nn=function(n){var e=n.currentTarget,i=e.name,t=e.value;switch(i){case"Name":c(t);break;case"Email":b(t);break;case"Birthday":y(t);break;case"Phone":C(t);break;case"City":N(t);break;default:return}},an=function(n){switch(n.currentTarget.name){case"Name":R(s),T(x),q(x),W(x),H(x);break;case"Email":T(s),R(x),q(x),W(x),H(x);break;case"Birthday":q(s),T(x),R(x),W(x),H(x);break;case"Phone":W(s),q(x),T(x),R(x),H(x);break;case"City":H(s),W(x),q(x),T(x),R(x);break;default:return}};return(0,mn.jsxs)(pn,{onSubmit:function(e){e.preventDefault(),n((0,tn.W)({_id:i,newName:m,newEmail:f,newBirthday:Z,newPhone:k,newCity:P}))},children:[(0,mn.jsxs)(xn,{children:[" ","Name:",(0,mn.jsxs)(sn,{children:[(0,mn.jsx)(hn,{autoComplete:"off",type:"text",id:"name",name:"Name",value:m,onChange:nn,onFocus:an}),(0,mn.jsx)(ln,{children:D})]})]}),(0,mn.jsxs)(xn,{children:[" ","Email:",(0,mn.jsxs)(sn,{children:[(0,mn.jsx)(hn,{autoComplete:"off",type:"email",id:"email",name:"Email",value:f,onChange:nn,onFocus:an}),(0,mn.jsx)(ln,{disabled:!0,children:I})]})]}),(0,mn.jsxs)(xn,{children:[" ","Birthday:",(0,mn.jsxs)(sn,{children:[(0,mn.jsx)(hn,{autoComplete:"off",type:"text",id:"birthday",name:"Birthday",value:Z,onChange:nn,onFocus:an}),(0,mn.jsx)(ln,{type:"submit",children:A})]})]}),(0,mn.jsxs)(xn,{children:[" ","Phone:",(0,mn.jsxs)(sn,{children:[(0,mn.jsx)(hn,{autoComplete:"off",type:"text",id:"phone",name:"Phone",value:k,onChange:nn,onFocus:an}),(0,mn.jsx)(ln,{type:"submit",children:J})]})]}),(0,mn.jsxs)(xn,{children:[" ","City:",(0,mn.jsxs)(sn,{children:[(0,mn.jsx)(hn,{autoComplete:"off",type:"text",id:"city",name:"City",value:P,onChange:nn,onFocus:an}),(0,mn.jsx)(ln,{type:"submit",children:X})]})]})]})},gn=i(4373),un=i(1578),fn=dn.Z.div(p||(p=(0,an.Z)(["\n    margin-bottom: 46px;\n    @media (min-width: 320px) {\n    }\n    @media (min-width: 768px) {\n    }\n    @media (min-width: 1200px) {\n    }\n"]))),bn=dn.Z.p(x||(x=(0,an.Z)(["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    letter-spacing: 0.04em;\n    //margin-bottom: 18px;\n\n    @media (min-width: 768px) {\n        font-size: 28px;\n\n        line-height: 1.35;\n        padding-left: 15px;\n        margin-bottom: 40px;\n    }\n\n    @media (min-width: 1280px) {\n        margin-bottom: 24px;\n    }\n"]))),wn=dn.Z.div(s||(s=(0,an.Z)(["\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 20px;\n    padding: 20px 0;\n    margin-right: auto;\n    margin-left: auto;\n    @media (min-width: 320px) {\n        width: 280px;\n    }\n    @media (min-width: 768px) {\n        display: flex;\n        flex-direction: row-reverse;\n        justify-content: space-between;\n        align-items: flex-start;\n        width: 736px;\n        border-radius: 0px 40px 40px 0px;\n        padding: 0;\n        margin-left: 0;\n    }\n    @media (min-width: 1280px) {\n        flex-direction: column;\n        width: 411px;\n        margin-right: 32px;\n    }\n"]))),jn=dn.Z.div(h||(h=(0,an.Z)(["\n    margin-bottom: 32px;\n    @media (min-width: 768px) {\n        margin: 24px 40px 24px 52px;\n    }\n    @media (min-width: 1280px) {\n        width: 100%;\n        margin: 0;\n        margin-bottom: 36px;\n    }\n"]))),Zn=dn.Z.img(l||(l=(0,an.Z)(["\n    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));\n    margin: 0 auto 12px auto;\n    border-radius: 50%;\n    object-fit: contain;\n    @media (min-width: 768px) {\n        margin-bottom: 8px;\n    }\n    @media (min-width: 1280px) {\n        margin: 20px auto 0 auto;\n    }\n"]))),yn=dn.Z.label(m||(m=(0,an.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.83;\n    letter-spacing: 0.04em;\n    background-color: inherit;\n    margin-left: auto;\n    margin-right: 24px;\n    padding: 0;\n    cursor: pointer;\n    @media (min-width: 768px) {\n        margin-right: 0;\n    }\n    @media (min-width: 1280px) {\n        margin-right: 16px;\n        margin-top: -24px;\n    }\n"]))),vn=dn.Z.input(c||(c=(0,an.Z)(["\n    display: none;\n    /* z-index: 10; */\n"]))),Fn=dn.Z.button(g||(g=(0,an.Z)(["\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.37;\n    letter-spacing: 0.04em;\n    color: rgba(17, 17, 17, 0.6);\n    border: none;\n    margin-left: auto;\n    padding: 0;\n    margin-right: 12px;\n    cursor: pointer;\n    :hover,\n    :focus {\n        color: #f59256;\n    }\n    @media (min-width: 768px) {\n        margin-left: 32px;\n    }\n    @media (min-width: 768px) {\n        margin-bottom: 18px;\n        margin-left: 15px;\n    }\n"]))),kn=i(897),Cn=function(){var n=(0,Y.I0)();return(0,mn.jsx)(mn.Fragment,{children:(0,mn.jsxs)(Fn,{onClick:function(){n((0,kn.k4)())},type:"submit",children:[(0,mn.jsx)(un.VUx,{color:"#F59256",className:"icon-logout"}),"Log Out"]})})},zn=function(){var n=(0,Y.I0)();(0,$.useEffect)((function(){n((0,tn.U)())}),[n]);var e=(0,$.useState)(),i=(0,K.Z)(e,2),t=i[0],r=i[1],o=(0,Y.v9)(nn.P).avatarURL.avatarURL,a=(0,$.useRef)(o);return(0,mn.jsxs)(fn,{children:[(0,mn.jsx)(bn,{children:"My information:"}),(0,mn.jsxs)(wn,{children:[(0,mn.jsxs)(jn,{children:[(0,mn.jsx)(Zn,{ref:a,src:o,alt:"my portret",width:"233",height:"233"}),(0,mn.jsxs)(yn,{htmlFor:"avatar",children:[(0,mn.jsx)(gn.nt3,{fill:"#F59256",className:"icon-edit"}),"Edit photo",(0,mn.jsx)(vn,{id:"avatar",type:"file",accept:"image/*",multiple:!1,onChange:function(e){var i=(0,K.Z)(e.target.files,1)[0];if(i){var o=new FileReader,d=a.current;d.file=i,o.onload=function(n){d.src=n.target.result},o.readAsDataURL(i),(new FormData).set("imageURL",o),r(o),n((0,tn.W)({image:t}))}}})]})]}),(0,mn.jsxs)("div",{children:[(0,mn.jsx)(cn,{}),(0,mn.jsx)(Cn,{})]})]})]})},Sn=i(9420),Pn=i(7247),Nn=dn.Z.div(u||(u=(0,an.Z)(["\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px 20px 40px;\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 20px;\n\n    &:not(:last-child) {\n        margin-bottom: 20px;\n    }\n\n    @media (min-width: 320px) {\n        width: 280px;\n    }\n\n    @media (min-width: 768px) {\n        padding: 20px;\n        width: 704px;\n        display: flex;\n        border-radius: 40px;\n    }\n\n    @media (min-width: 1280px) {\n        width: 821px;\n        &:not(:last-child) {\n            margin-bottom: 22px;\n        }\n    }\n"]))),En=dn.Z.img(f||(f=(0,an.Z)(["\n    margin-bottom: 20px;\n    border-radius: 20px;\n\n    @media (min-width: 320px) {\n        width: 240px;\n        height: 240px;\n    }\n\n    @media (min-width: 768px) {\n        width: 161px;\n        height: 161px;\n        border-radius: 40px;\n        margin-bottom: 0;\n        margin-right: 32px;\n    }\n"]))),Bn=dn.Z.div(b||(b=(0,an.Z)(["\n    @media (min-width: 768px) {\n        width: 471px;\n    }\n\n    @media (min-width: 1280px) {\n        width: 588px;\n    }\n"]))),Dn=dn.Z.p(w||(w=(0,an.Z)(["\n    margin-bottom: 12px;\n    position: relative;\n"]))),Rn=dn.Z.p(j||(j=(0,an.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 12px;\n    }\n"]))),Ln=(0,dn.Z)(Pn.Z)(Z||(Z=(0,an.Z)(["\n    width: 16px;\n    height: 17px;\n    fill: rgba(17, 17, 17, 0.6);\n\n    &:hover {\n        fill: rgba(245, 146, 86, 1);\n    }\n\n    @media (min-width: 768px) {\n        width: 25px;\n        height: 26px;\n    }\n"]))),Un=dn.Z.button(y||(y=(0,an.Z)(["\n    width: 17px;\n    height: 17px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    right: 0;\n    border: none;\n\n    @media (min-width: 768px) {\n        width: 44px;\n        height: 44px;\n        background: #fdf7f2;\n        border-radius: 50%;\n    }\n"]))),In=dn.Z.span(v||(v=(0,an.Z)(["\n    font-weight: bold;\n"]))),Tn=function(n){var e=n._id,i=n.name,t=n.birthday,r=n.breed,o=n.comments,a=n.photoURL,d=(0,Y.I0)();return(0,mn.jsxs)(Nn,{children:[(0,mn.jsx)(En,{src:a,alt:""}),(0,mn.jsxs)(Bn,{children:[(0,mn.jsxs)(Dn,{children:[(0,mn.jsx)(In,{children:"Name:"})," ",i," ",(0,mn.jsx)(Un,{type:"button",onClick:function(){d((0,Sn.V)(e))},children:(0,mn.jsx)(Ln,{sx:{}})})]}),(0,mn.jsxs)(Rn,{children:[(0,mn.jsx)(In,{children:"Date of birth:"})," ",t]}),(0,mn.jsxs)(Rn,{children:[(0,mn.jsx)(In,{children:"Breed:"})," ",r]}),(0,mn.jsxs)(Rn,{children:[(0,mn.jsx)(In,{children:"Comments:"})," ",o]})]})]},e)},_n=function(){var n=(0,Y.v9)(en.p2);return console.log(n.items),(0,mn.jsxs)(mn.Fragment,{children:[n.items.map((function(n){var e=n._id,i=n.name,t=n.birthday,r=n.breed,o=n.comments,a=n.photoURL;return(0,mn.jsx)(Tn,{id:e,name:i,birthday:t,breed:r,comments:o,photoURL:a},e)})),0===n.items.length&&(0,mn.jsx)("p",{children:"There`s no pets yet"})]})},Mn=dn.Z.div(F||(F=(0,an.Z)(["\n    position: absolute;\n    right: 0;\n    bottom: 16px;\n    width: 128px;\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (min-width: 768px) {\n        bottom: 444px;\n    }\n\n    @media (min-width: 768px) {\n        bottom: 8px;\n    }\n"]))),An=dn.Z.p(k||(k=(0,an.Z)(["\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 27px;\n    color: #111111;\n    margin-right: 15px;\n"]))),qn=dn.Z.button(C||(C=(0,an.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    background: #f59256;\n    color: #ffffff;\n    border: none;\n    outline: none;\n    border-radius: 50%;\n    font-size: 50px;\n    cursor: pointer;\n"]))),Vn=i(1413),Gn=i(2506),Jn=i(9823),Wn=i(2419),On=dn.Z.div(z||(z=(0,an.Z)(["\n    overflow-y: scroll;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    padding: 99px auto;\n    justify-content: center;\n    align-items: center;\n    background: rgba(17, 17, 17, 0.6);\n    \n    z-index: 1200;\n"]))),Qn=dn.Z.div(S||(S=(0,an.Z)(["\nposition: relative;\ndisplay: block;\npadding: 40px 20px;\nwidth: 240px;\nheight: 510px;\n\nbackground: #FFFFFF;\nbox-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\nborder-radius: 40px;\n@media(min-width: 768px) {\n    padding: 40px 80px;\n    width: 448px;\n    height: 510px;\n}\n"]))),Xn=dn.Z.div(P||(P=(0,an.Z)(["\nposition: relative;\ndisplay: flex;\njustify-content: center;\npadding: 40px 20px;\nwidth: 240px;\nheight: 610px;\n\nbackground: #FFFFFF;\nbox-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\nborder-radius: 40px;\n@media(min-width: 768px) {\n    padding: 40px auto;\n    width: 608px;\n    height: 612px;\n}\n"]))),Hn=dn.Z.h4(N||(N=(0,an.Z)(["\nfont-family: 'Inter';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 16px;\nline-height: 1.37;\ntext-align: center;\nmargin-bottom: 20px;\n@media(min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n    letter-spacing: -0.01em;\n}\ncolor: #111111;\n"]))),Kn=dn.Z.h3(E||(E=(0,an.Z)(["\nmargin-bottom: 20px;\n\ntext-align: center;\nfont-family: 'Manrope';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 24px;\nline-height: 1.37;\n\ncolor: #111111;\n\n@media(min-width: 768px) {\nfont-size: 36px;\nline-height: 1.36;\n}\n"]))),Yn=(0,dn.Z)(Jn.Z)(B||(B=(0,an.Z)(["\ncursor: pointer;\nwidth: 28px;\nheight: 28px;\nfill: rgba(17, 17, 17, 0.6);\n\n&:hover {\n     fill: rgba(245, 146, 86, 1);\n}\n@media(min-width: 768px) {\n     width: 36px;\n    height: 36px;\n}\n"]))),$n=(0,dn.Z)(Wn.Z)(D||(D=(0,an.Z)(["\ncursor: pointer;\nfill: rgba(17, 17, 17, 0.6);\nwidth: 48px;\nheight: 48px;\n"]))),ne=dn.Z.button(R||(R=(0,an.Z)(["\nposition: absolute;\ncursor: pointer;\ntop: 20px;\nright: 20px;\n\nwidth: 34px;\nheight: 34px;\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nposition: absolute;\nborder: none;\n\ncolor: #111111;\n\n@media(min-width: 768px) {\n    width: 44px;\n    height: 44px;\n    top: 25px;\n    right: 25px;\n}\n\nbackground: #FDF7F2;\nborder-radius: 50%;\n//border: rgba(0,0,0,0);\n//outline: rgba(0,0,0,0);\n//z-index: 99999;\n"]))),ee=dn.Z.h3(L||(L=(0,an.Z)(["\nmargin-bottom: 40px;\n\ntext-align: center;\nfont-family: 'Manrope';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 24px;\nline-height: 1.37;\n\ncolor: #111111;\n\n@media(min-width: 768px) {\nfont-size: 36px;\nline-height: 1.36;\n}\n"]))),ie=(0,dn.Z)(Gn.l0)(U||(U=(0,an.Z)(["\n// position: absolute;\n// top: 0px;\n// right: 0px;\n\n//margin: 0px 20px;\ndisplay: block;\n@media(min-width: 768px) {\n    //margin: 0px 80px;\n}\n "]))),te=(0,dn.Z)(Gn.gN)(I||(I=(0,an.Z)(["\ndisplay: block;\ncursor: pointer;\nwidth: 196px;\nheight: 18px; \ncolor: rgba(17, 17, 17, 0.6);\nmargin-top: 8px;\npadding: 11px 14px;  \nbackground: #FDF7F2;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nborder-radius: 40px;\n\n:active, :hover, :focus {\n    outline: 0;\n    outline-offset: 0;\n    border: 2px solid #FF6101;\n}\n    ::placeholder {\n        //padding: 11px 14px;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.35;\n        color: rgba(27, 27, 27, 0.6);\n        \n        @media(min-width: 768px) {\n            font-size: 16px;\n            line-height: 1.62;\n            color: rgba(17, 17, 17, 0.6);\n        }\n    }\n@media(min-width: 768px) {\n    padding: 16px 10px; \n    width: 416px;\n    height: 22px; \n    margin-top: 12px;\n}\n"]))),re=(0,dn.Z)(Gn.gN)(T||(T=(0,an.Z)(["\ndisplay: none;\ncursor: pointer;\n"]))),oe=dn.Z.label(_||(_=(0,an.Z)(["\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 208px;\n    height: 208px;\n    background: #FDF7F2;\n    border-radius: 20px;\n    margin-bottom: 20px;\n    @media(min-width: 768px) {\n        margin-bottom: 40px;\n        width: 184px;\n        height: 184px;\n    } \n"]))),ae=(0,dn.Z)(Gn.gN)(M||(M=(0,an.Z)(["\ncursor: pointer;\ndisplay: block;\nmargin-top: 8px;\npadding: 14px 12px;\nwidth: 212px;\nheight: 76px;\nbackground: #FDF7F2;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nborder-radius: 20px;\n:active, :hover, :focus {\n    outline: 0;\n    outline-offset: 0;\n    border: 2px solid #FF6101;\n}\n    ::placeholder {\n        padding: 14px 12px;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 1.35;\n        color: rgba(27, 27, 27, 0.6);\n    }\n\n@media(min-width: 768px) {\n    margin-top: 20px;\n    padding: 16px;\n    width: 362px;\n    height: 84px;\n}\n\n"]))),de=dn.Z.div(A||(A=(0,an.Z)(["\nmargin-bottom: 16px;\n@media(min-width: 768px) {\n    margin-bottom: 28px;\n}\n"]))),pe=dn.Z.label(q||(q=(0,an.Z)(["\ndisplay: block;\n\nfont-family: 'Manrope';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 18px;\nline-height: 1.47;\ncolor: #111111;\n@media(min-width: 768px) {\n    font-size: 24px;\n    line-height: 1.1;\n}\n"]))),xe=dn.Z.div(V||(V=(0,an.Z)(["\n    cursor: pointer;\n    justify-content: center;\n    text-align: center;\n    \n    margin-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n    @media(min-width: 768px) {\n        flex-direction: row-reverse;\n        display: flex;    \n}\n"]))),se=dn.Z.button(G||(G=(0,an.Z)(["\ncursor: pointer;\ndisplay: block;\nwidth: 240px;\nheight: 40px;\nmargin-bottom: 12px;\ncolor: #FFFFFF;\nbackground: #F59256;\nborder-radius: 40px;\nborder: none;\n: hover, :focus {\n    border: 2px solid #FF6101;\n}\n@media(min-width: 768px) {\n    width: 180px;\n    height: 44px;\n    margin-right: 20px;\n}\n"]))),he=dn.Z.button(J||(J=(0,an.Z)(["\ncursor: pointer;\nmargin-right: 15px;\ndisplay: block;\nwidth: 240px;\nheight: 40px;\nbackground: #FFFFFF;\nborder: 2px solid #F59256;\nborder-radius: 40px;\n: hover, :focus {\n    border: 2px solid #FF6101;\n}\n@media(min-width: 768px) {\n    \n    width: 180px;\n    height: 44px;\n}\n"]))),le=dn.Z.p(W||(W=(0,an.Z)(["\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.6;\n    \n    @media (min-width: 320px) {\n        margin-left: 10px;\n    }\n    @media (min-width: 768px) {\n        margin-left: 90px;\n    }\n    color: #f59256;\n    margin-left: 90px;\n    margin-top: -25px;\n\n    position: absolute;\n    \n"]))),me=i(2797),ce=me.Ry({name:me.Z_().min(2).max(16).required(),birthday:me.Z_().required(),breed:me.Z_().min(2).max(16).required()}),ge=function(n){var e=function(n){var e=n.name;return(0,mn.jsx)(Gn.Bc,{name:e,render:function(n){return(0,mn.jsx)(le,{children:n})}})},i=n.onClose;return(0,mn.jsx)(Gn.J9,{initialValues:n.data,onSubmit:function(e){n.next(e),console.log(n)},validationSchema:ce,children:function(){return(0,mn.jsxs)(Qn,{children:[(0,mn.jsx)(ne,{type:"button",onClick:function(){return i()},children:(0,mn.jsx)(Yn,{})}),(0,mn.jsxs)(ie,{children:[(0,mn.jsx)(ee,{children:"Add pet"}),(0,mn.jsx)(de,{children:(0,mn.jsxs)(pe,{htmlFor:"name",children:["Name pet",(0,mn.jsx)(te,{type:"text",name:"name",placeholder:"Type name pet"}),(0,mn.jsx)(e,{name:"name"})]})}),(0,mn.jsx)(de,{children:(0,mn.jsxs)(pe,{htmlFor:"birthday",children:["Date of birth",(0,mn.jsx)(te,{type:"text",name:"birthday",placeholder:"Type date of birth"}),(0,mn.jsx)(e,{name:"birthday"})]})}),(0,mn.jsx)("div",{children:(0,mn.jsxs)(pe,{htmlFor:"breed",children:["Breed",(0,mn.jsx)(te,{type:"text",name:"breed",placeholder:"Type breed"}),(0,mn.jsx)(e,{name:"breed"})]})}),(0,mn.jsxs)(xe,{children:[(0,mn.jsx)(se,{type:"submit",children:"Next"}),(0,mn.jsx)(he,{type:"button",onClick:function(){return i()},children:"Cancel"})]})]})]})}})},ue=i(7762),fe=me.Ry({comments:me.Z_().min(8).max(120).required()}),be=function(n){var e=n.data,i=n.prev,t=n.onClose,r=function(n){var e=n.name;return(0,mn.jsx)(Gn.Bc,{name:e,render:function(n){return(0,mn.jsx)(le,{children:n})}})},o=(0,Y.I0)(),a=(0,$.useState)(null),d=(0,K.Z)(a,2),p=d[0],x=d[1],s=function(n){console.log(n.target.files),x(n.target.files[0])};return(0,mn.jsx)(Gn.J9,{initialValues:e,onSubmit:function(n,e){var i=e.resetForm,r=new FormData;for(var a in n)r.append(a,n[a]);r.append("myPetsPhoto",p);var d,x=(0,ue.Z)(r.entries());try{for(x.s();!(d=x.n()).done;){var s=d.value;console.log(s[0],s[1])}}catch(h){x.e(h)}finally{x.f()}o((0,Sn.X)(r)),console.log(n),i(),t()},validationSchema:fe,children:function(n){var e=n.values;return(0,mn.jsxs)(Xn,{children:[(0,mn.jsx)(ne,{type:"button",onClick:function(){return t()},children:(0,mn.jsx)(Yn,{})}),(0,mn.jsxs)(ie,{children:[(0,mn.jsx)(Kn,{children:"Add pet"}),(0,mn.jsx)(Hn,{children:"Add photo and some comments"}),(0,mn.jsxs)(oe,{htmlFor:"myPetsPhoto",children:[(0,mn.jsx)($n,{}),(0,mn.jsx)(re,{id:"myPetsPhoto",type:"file",name:"myPetsPhoto",onChange:s}),(0,mn.jsx)(r,{name:"myPetsPhoto"})]}),(0,mn.jsx)("div",{children:(0,mn.jsxs)(pe,{htmlFor:"comments",children:["Comments",(0,mn.jsx)(ae,{type:"text",name:"comments",placeholder:"Type comments",as:"textarea"}),(0,mn.jsx)(r,{name:"comments"})]})}),(0,mn.jsxs)(xe,{children:[(0,mn.jsx)(se,{type:"submit",children:"Done"}),(0,mn.jsx)(he,{type:"button",onClick:function(){return i(e)},children:"Back"})]})]})]})}})},we=function(n){var e=n.onClose,i=(0,$.useState)({name:"",birthday:"",breed:"",comments:""}),t=(0,K.Z)(i,2),r=t[0],o=t[1],a=(0,$.useState)(0),d=(0,K.Z)(a,2),p=d[0],x=d[1],s=[(0,mn.jsx)(ge,{next:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o((function(e){return(0,Vn.Z)((0,Vn.Z)({},e),n)})),e||x((function(n){return n+1}))},data:r,onClose:e}),(0,mn.jsx)(be,{prev:function(n){o((function(e){return(0,Vn.Z)((0,Vn.Z)({},e),n)})),x((function(n){return n-1}))},data:r,onClose:e})];return(0,mn.jsx)("div",{children:s[p]})},je=i(4164),Ze=document.getElementById("modal-root"),ye=function(n){var e=n.children,i=n.onClose;(0,$.useEffect)((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}));var t=function(n){var e=n.target,t=n.currentTarget,r=n.code;e!==t&&"Escape"!==r||i()};return(0,je.createPortal)((0,mn.jsx)(On,{onClick:t,children:e}),Ze)},ve=function(){var n=(0,$.useState)(!1),e=(0,K.Z)(n,2),i=e[0],t=e[1],r=function(){t(!1)};return(0,mn.jsxs)(mn.Fragment,{children:[(0,mn.jsxs)(Mn,{children:[(0,mn.jsx)(An,{children:"Add pet"}),(0,mn.jsx)(qn,{type:"button",onClick:function(){t(!0)},children:"+"})]}),i&&(0,mn.jsx)(ye,{onClose:r,children:(0,mn.jsx)(we,{onClose:r})})]})},Fe=dn.Z.div(O||(O=(0,an.Z)(["\n    @media (min-width: 320px) {\n        width: 280px;\n    }\n\n    @media (min-width: 768px) {\n        width: 704px;\n    }\n\n    @media (min-width: 1280px) {\n        width: 821px;\n    }\n"]))),ke=dn.Z.div(Q||(Q=(0,an.Z)(["\n    position: relative;\n    @media (min-width: 320px) {\n        height: 40px;\n        display: flex;\n        justify-content: start;\n        align-items: center;\n    }\n\n    @media (min-width: 768px) {\n    }\n\n    @media (min-width: 1280px) {\n    }\n"]))),Ce=dn.Z.h2(X||(X=(0,an.Z)(["\n    position: relative;\n    margin-bottom: 32px;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 27px;\n    letter-spacing: 0.04em;\n\n    @media (min-width: 768px) {\n        margin-bottom: 24px;\n        font-size: 28px;\n        line-height: 38px;\n    }\n"]))),ze=function(){return(0,mn.jsxs)(Fe,{children:[(0,mn.jsxs)(ke,{children:[(0,mn.jsx)(ve,{}),(0,mn.jsx)(Ce,{children:"My pets:"})]}),(0,mn.jsx)(_n,{})]})},Se=dn.Z.div(H||(H=(0,an.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 41px;\n\n    @media (min-width: 768px) {\n        margin-top: 68px;\n    }\n\n    @media (min-width: 1280px) {\n        flex-direction: row;\n        align-items: start;\n        margin-top: 38px;\n    }\n"]))),Pe=function(){return(0,mn.jsxs)(Se,{children:[(0,mn.jsx)(zn,{}),(0,mn.jsx)(ze,{})]})}},9592:function(n,e,i){i.d(e,{P:function(){return t}});var t=function(n){return n.user.user}}}]);
//# sourceMappingURL=979.07d75994.chunk.js.map