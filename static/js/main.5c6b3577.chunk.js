(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(8),a=c(4),r=c(6),s=c(2),o=(c(17),c(21)),j=c(0);function l(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),c=e[0],i=e[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),b=u[0],d=u[1],O=Object(n.useState)("all"),h=Object(s.a)(O,2),f=h[0],v=h[1],x=Object(n.useState)(!1),p=Object(s.a)(x,2),k=p[0],m=p[1],g=Object(n.useState)(!1),S=Object(s.a)(g,2),C=S[0],y=S[1],D=Object(n.useState)(!1),T=Object(s.a)(D,2),w=T[0],A=T[1],E=Object(n.useState)(""),L=Object(s.a)(E,2),B=L[0],I=L[1],J=Object(n.useState)(0),F=Object(s.a)(J,2),M=F[0],N=F[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Filter: "}),Object(j.jsxs)("select",{value:f,onChange:function(t){v(t.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"complete",children:"Complete"})]}),Object(j.jsx)("label",{children:" Sort By: "}),Object(j.jsxs)("select",{onChange:function(t){var e=Object(a.a)(c);"date"===t.target.value?e.sort((function(t,e){return t.time-e.time})):"title"===t.target.value&&e.sort((function(t,e){return t.task-e.task})),i(e)},children:[Object(j.jsx)("option",{value:"all"}),Object(j.jsx)("option",{value:"date",children:"Date"}),Object(j.jsx)("option",{value:"title",children:"Title"})]}),Object(j.jsxs)("p",{children:["Total ",c.length," of Tasks"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",placeholder:w?"Insert after current task":"Add your To-Do",value:b,onChange:function(t){d(t.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:function(){return function(t){if(t)if(t&&k)m(!1),i(c.map((function(e){return e.id===B?Object(r.a)(Object(r.a)({},e),{},{task:t,time:new Date}):e}))),d("");else if(t&&w){var e=Object(a.a)(c);e.splice(M+1,0,{id:(new Date).getTime().toString(),task:t}),A(!1),i(e),d("")}else{var n={id:Object(o.a)(),time:new Date,task:t,status:!1};i([].concat(Object(a.a)(c),[n])),d("")}}(b)},children:k?"Edit":"Submit"}),Object(j.jsx)("button",{type:"button",onClick:function(){y(!0)},children:"Search"})]}),Object(j.jsx)("div",{children:c.filter((function(t){return"active"===f?!1===t.status:"complete"===f?!0===t.status:!C||t.task.includes(b)})).map((function(t,e){var n=t.id,r=t.time,s=t.task,o=t.status;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",checked:o,onChange:function(t){return function(t,e,n){var r=Object(a.a)(c);r[n].status=t.target.checked,i(r)}(t,0,e)}}),s,Object(j.jsx)("button",{onClick:function(){return function(t){m(!0);var e=c.find((function(e){return e.id===t}));I(t),d(e.task)}(n)},children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return function(t){i(c.filter((function(e){return e.id!==t})))}(n)},children:"Delete"}),Object(j.jsx)("button",{onClick:function(){return function(t){A(!0),N(t)}(e)},children:" + "}),Object(j.jsxs)("p",{children:[r.toLocaleTimeString(),", ",r.toLocaleDateString()]})]},n)}))})]})}var u=document.getElementById("root");Object(i.createRoot)(u).render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(l,{})}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5c6b3577.chunk.js.map