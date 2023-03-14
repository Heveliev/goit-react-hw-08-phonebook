"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[668],{1668:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(9434),a=t(9869),s=t(4087),i=t(3204),l=t(5946),o=t(8594),c=t(568),d=t(7886),u=t(4224),m=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},x=t(9016),p=t(1686),f=t(184),j=function(){var e=(0,r.v9)(m),n=(0,r.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.X,{textAlign:"center",children:"Add contact to contacts list"}),(0,f.jsx)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,s=r.elements.number.value;a&&s?null!==e&&void 0!==e&&e.find((function(e){return e.name===a}))?p.Notify.info("".concat(a," is already in contacts.")):(n((0,x.uK)({name:a,number:s})),r.reset()):p.Notify.failure("Sorry, but you didn&#180;t enter a value in the field")},children:(0,f.jsxs)(o.r,{templateColumns:{base:"1fr",md:"repeat(2, 1fr)"},gap:4,children:[(0,f.jsx)(c.P,{colSpan:{base:"auto",md:1},children:(0,f.jsx)(d.I,{placeholder:"Name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})}),(0,f.jsx)(c.P,{colSpan:{base:"auto",md:1},children:(0,f.jsx)(d.I,{placeholder:"Phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})}),(0,f.jsx)(c.P,{textAlign:"center",colSpan:{base:"auto",md:2},children:(0,f.jsx)(u.z,{type:"submit",children:"Add Contact"})})]})})]})},b=function(e){return e.filter},v=t(1820),g=t(3380),y=t(5498),C=t(7693),A=t(7521),z=t(2701),k=t(4585),S=t(4653),I=function(e){return e.modal},N=t(7810);function F(e){var n=e.name,t=e.number,a=e.id,s=(0,r.v9)(I),i=(0,r.I0)();return(0,f.jsxs)(v.u_,{isOpen:s,onClose:function(){return i((0,N.F)())},children:[(0,f.jsx)(g.Z,{}),(0,f.jsxs)(y.h,{children:[(0,f.jsx)(C.x,{children:"Please make changes"}),(0,f.jsx)(A.f,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.name.value,r=n.elements.number.value;t&&r?(i((0,x.mP)({name:t,number:r,id:a})),n.reset()):p.Notify.failure("Sorry, but you didn&#180;t enter a value in the field")},children:[(0,f.jsxs)(z.NI,{children:[(0,f.jsx)(k.l,{children:"Name"}),(0,f.jsx)(d.I,{placeholder:"Name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",defaultValue:n})]}),(0,f.jsxs)(z.NI,{mt:4,children:[(0,f.jsx)(k.l,{children:"Number"}),(0,f.jsx)(d.I,{placeholder:"Phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",defaultValue:t})]}),(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"end",gap:"10px",margin:"10px"},children:[(0,f.jsx)(u.z,{type:"submit",colorScheme:"blue",children:"Save"}),(0,f.jsx)(u.z,{variant:"outline",mr:3,onClick:function(){return i((0,N.F)())},children:"Cancel"})]})]})}),(0,f.jsx)(S.m,{})]})]})}var Z=t(176),w=t(9229),P=t(7885),_=t(2720),D=t(4799),L=t(114),T=function(){var e=(0,r.I0)(),n=(0,r.v9)(m),t=(0,r.v9)(b),a=(0,r.v9)(I);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(Z.k,{direction:"column",children:(null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(t)}))).map((function(n){return(0,f.jsxs)(s.xu,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",mb:4,position:"relative",children:[(0,f.jsxs)(s.xu,{p:4,children:[(0,f.jsx)(w.x,{fontSize:"xl",fontWeight:"bold",children:n.name}),(0,f.jsx)(w.x,{mt:2,children:n.number})]}),(0,f.jsx)(P.h,{position:"absolute",top:"0",right:"0",icon:(0,f.jsx)(D.T,{}),"aria-label":"Delete Contact",variant:"ghost",onClick:function(){return e((0,x.GK)(n.id))}}),(0,f.jsx)(P.h,{position:"absolute",bottom:"0",right:"0",icon:(0,f.jsx)(L.d,{}),"aria-label":"Delete Contact",variant:"ghost",onClick:function(){return e((0,N.F)())}}),a&&(0,f.jsx)(_.h,{children:(0,f.jsx)(F,{id:n.id,name:n.name,number:n.number})})]},n.id)}))})})},$=t(5653),W=function(){var e=(0,r.I0)();return(0,f.jsxs)(s.xu,{p:4,children:[(0,f.jsx)(w.x,{fontSize:"xl",mt:2,children:"Enter the name of the contact you are looking for:"}),(0,f.jsx)(d.I,{onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,$.h)(t))},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Search contacts",mb:4})]})},X=t(2791),B=function(){var e=(0,r.v9)(a.vW),n=(0,r.v9)(h),t=(0,r.I0)();(0,X.useEffect)((function(){t((0,x.CL)())}),[t]);var o=(0,r.v9)(m);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j,{}),n?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(s.xu,{position:"fixed",left:"50%",transform:"translate(-50%)",children:(0,f.jsx)(i.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(l.X,{textAlign:"center",children:["Your contact list, ",e,":"]}),(0,f.jsx)(W,{}),null!==o&&void 0!==o&&o.length?(0,f.jsx)(T,{}):(0,f.jsx)(l.X,{margin:"20px",children:"Sorry, but you don't have contacts"})]})]})}}}]);
//# sourceMappingURL=668.aac1f6a8.chunk.js.map