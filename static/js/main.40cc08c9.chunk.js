(this["webpackJsonpcv-generator"]=this["webpackJsonpcv-generator"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(8),r=n.n(i),s=n(9),l=n(10),u=n(12),o=n(11),j=n(2),b=(n(7),n(0));function d(e){return Object(b.jsxs)("form",{id:"general-information-form",className:"card-form",onSubmit:e.onSubmit,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",required:!0,value:e.name,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"address",children:"Address:"}),Object(b.jsx)("input",{type:"text",name:"address",id:"address",required:!0,value:e.address,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"phoneNumber",children:"Phone number:"}),Object(b.jsx)("input",{type:"tel",name:"phoneNumber",id:"phoneNumber",required:!0,value:e.phoneNumber,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",required:!0,value:e.email,onChange:e.onChange}),Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsx)("input",{type:"submit",value:"Submit"})})]})}function O(e){return Object(b.jsxs)("div",{className:"card-preview",children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("label",{children:"Address:"}),Object(b.jsx)("p",{children:e.address}),Object(b.jsx)("label",{children:"Phone number:"}),Object(b.jsx)("p",{children:e.phoneNumber}),Object(b.jsx)("label",{children:"Email:"}),Object(b.jsx)("p",{children:e.email}),Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsx)("button",{type:"button",onClick:e.onClick,children:"Edit"})})]})}function m(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)(""),o=Object(j.a)(u,2),m=o[0],p=o[1],h=Object(a.useState)(""),x=Object(j.a)(h,2),f=x[0],v=x[1],y=Object(a.useState)(!1),S=Object(j.a)(y,2),g=S[0],C=S[1];function k(e){e.preventDefault(),C(!g)}return Object(b.jsxs)("div",{id:"general-information-card",className:"card",children:[Object(b.jsx)("h2",{children:"General Information"}),g?Object(b.jsx)(O,{onClick:k,name:n,address:s,phoneNumber:m,email:f}):Object(b.jsx)(d,{onSubmit:k,onChange:function(e){switch(e.target.name){case"name":c(e.target.value);break;case"address":l(e.target.value);break;case"phoneNumber":p(e.target.value);break;case"email":v(e.target.value)}},name:n,address:s,phoneNumber:m,email:f})]})}var p=n(5),h=n(21);function x(e){return Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsx)("input",{type:"button",value:"Add",onClick:e.onClick})})}function f(e){return Object(b.jsxs)("form",{id:"educational-experience-form",className:"card-form",onSubmit:e.onSubmit,children:[Object(b.jsx)("label",{htmlFor:"school",children:"School:"}),Object(b.jsx)("input",{type:"text",name:"schoolInput",id:"school",required:!0,value:e.school,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"tileOfStudy",children:"Tile of study:"}),Object(b.jsx)("input",{type:"text",name:"tileOfStudyInput",id:"tileOfStudy",required:!0,value:e.tileOfStudy,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"dateOfStudy",children:"Date of study:"}),Object(b.jsx)("input",{type:"date",name:"dateOfStudyInput",id:"dateOfStudy",value:e.dateOfStudy,onChange:e.onChange}),Object(b.jsxs)("div",{className:"btn-wrapper",children:[Object(b.jsx)("input",{type:"button",value:"Cancel",onClick:e.onClick}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})]})}function v(e){var t=e.details.map((function(e){return Object(b.jsx)("li",{children:"".concat(e.school,", ").concat(e.tileOfStudy,", ").concat(e.dateOfStudy)},Object(h.a)())}));return Object(b.jsx)("ul",{className:"card-preview",children:t})}function y(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)(""),o=Object(j.a)(u,2),d=o[0],O=o[1],m=Object(a.useState)(""),h=Object(j.a)(m,2),y=h[0],S=h[1],g=Object(a.useState)(!1),C=Object(j.a)(g,2),k=C[0],N=C[1],I=Object(a.useState)(!1),w=Object(j.a)(I,2),F=w[0],q=w[1];function T(){N(!k),q(!F)}return Object(b.jsxs)("div",{id:"educational-experience-card",className:"card",children:[Object(b.jsx)("h2",{children:"Educational Experience"}),k&&Object(b.jsx)(v,{details:n}),F?Object(b.jsx)(f,{onSubmit:function(e){e.preventDefault(),N(!0),q(!1),c([].concat(Object(p.a)(n),[{school:s,tileOfStudy:d,dateOfStudy:y}])),l(""),O(""),S("")},onClick:T,onChange:function(e){switch(e.target.name){case"schoolInput":l(e.target.value);break;case"tileOfStudyInput":O(e.target.value);break;case"dateOfStudyInput":S(e.target.value)}},school:s,tileOfStudy:d,dateOfStudy:y}):Object(b.jsx)(x,{onClick:T})]})}function S(e){return Object(b.jsxs)("form",{id:"practical-experience-form",className:"card-form",onSubmit:e.onSubmit,children:[Object(b.jsx)("label",{htmlFor:"company",children:"Company:"}),Object(b.jsx)("input",{type:"text",name:"companyInput",id:"company",required:!0,value:e.company,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"position",children:"Position:"}),Object(b.jsx)("input",{type:"text",name:"positionInput",id:"position",required:!0,value:e.position,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"mainTask",children:"Main tasks of previous job:"}),Object(b.jsx)("input",{type:"text",name:"mainTaskInput",id:"mainTask",required:!0,value:e.mainTask,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"from",children:"From:"}),Object(b.jsx)("input",{type:"date",name:"fromInput",id:"from",required:!0,value:e.from,onChange:e.onChange}),Object(b.jsx)("label",{htmlFor:"until",children:"Until:"}),Object(b.jsx)("input",{type:"date",name:"untilInput",id:"until",required:!0,value:e.until,onChange:e.onChange}),Object(b.jsxs)("div",{className:"btn-wrapper",children:[Object(b.jsx)("input",{type:"button",value:"Cancel",onClick:e.onClick}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})]})}function g(e){var t=e.details.map((function(e){return Object(b.jsx)("li",{children:"".concat(e.company,", ").concat(e.position,", ").concat(e.mainTask,", ").concat(e.from,", ").concat(e.until)},Object(h.a)())}));return Object(b.jsx)("ul",{className:"card-preview",children:t})}function C(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1],u=Object(a.useState)(""),o=Object(j.a)(u,2),d=o[0],O=o[1],m=Object(a.useState)(""),h=Object(j.a)(m,2),f=h[0],v=h[1],y=Object(a.useState)(""),C=Object(j.a)(y,2),k=C[0],N=C[1],I=Object(a.useState)(""),w=Object(j.a)(I,2),F=w[0],q=w[1],T=Object(a.useState)(!1),E=Object(j.a)(T,2),D=E[0],P=E[1],A=Object(a.useState)(!1),J=Object(j.a)(A,2),M=J[0],B=J[1];function G(){P(!D),B(!M)}return Object(b.jsxs)("div",{id:"practical-experience-card",className:"card",children:[Object(b.jsx)("h2",{children:"Practical Experience"}),D&&Object(b.jsx)(g,{details:n}),M?Object(b.jsx)(S,{onSubmit:function(e){e.preventDefault(),P(!0),B(!1),c([].concat(Object(p.a)(n),[{company:s,position:d,mainTask:f,from:k,until:F}]))},onClick:G,onChange:function(e){switch(e.target.name){case"companyInput":l(e.target.value);break;case"positionInput":O(e.target.value);break;case"mainTaskInput":v(e.target.value);break;case"fromInput":N(e.target.value);break;case"untilInput":q(e.target.value)}},company:s,position:d,mainTask:f,from:k,until:F}):Object(b.jsx)(x,{onClick:G})]})}n(19);var k=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"CV Creator"})}),Object(b.jsx)(m,{}),Object(b.jsx)(y,{}),Object(b.jsx)(C,{})]})}}]),n}(c.a.Component);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.40cc08c9.chunk.js.map