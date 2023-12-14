(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),l=c(1);c(13),c(14);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i,o=c(8);!function(e){e.All="",e[e.Active=0]="Active",e[e.Completed=1]="Completed"}(i||(i={}));var d=c(7),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.getCurrentTodoId,s=e.currentTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:a&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!a,"has-text-success":a}),children:n})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(u.jsx)("span",{className:"icon",children:s===t?Object(u.jsx)("i",{className:"far fa-eye-slash"}):Object(u.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},h=function(e){var t=e.getQuery,c=e.query,s=e.getSortBy;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{onChange:function(e){return s(function(e){switch(e){case"completed":return i.Completed;case"active":return i.Active;default:return i.All}}(e.target.value))},"data-cy":"statusSelect",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return t(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(u.jsx)("span",{className:"icon is-right btn-icon",children:Object(u.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"clear search",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.currentTodo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then(o)}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),i?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{"aria-label":"close modal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(u.jsx)(m,{})]})},x=(c(17),function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),d=Object(n.a)(a,2),j=d[0],x=d[1],f=Object(l.useState)(i.All),p=Object(n.a)(f,2),N=p[0],v=p[1],y=Object(l.useState)(null),g=Object(n.a)(y,2),C=g[0],k=g[1],S=Object(l.useState)(null),T=Object(n.a)(S,2),w=T[0],A=T[1],B=function(e,t){var c=t.query,s=t.sortBy,a=Object(o.a)(e);return c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),"number"===typeof s&&(a=a.filter((function(e){return e.completed===Boolean(s)}))),a}(c,{query:j,sortBy:N});return Object(l.useEffect)((function(){r("/todos").then((function(e){return e})).then(s)}),[]),Object(l.useEffect)((function(){A(c.find((function(e){return e.id===C}))||null)}),[C]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{getQuery:x,query:j,getSortBy:v})}),Object(u.jsx)("div",{className:"block",children:0===c.length?Object(u.jsx)(m,{}):Object(u.jsx)(b,{todos:B,getCurrentTodoId:k,currentTodoId:C})})]})})}),w&&Object(u.jsx)(O,{currentTodo:w,onClose:k})]})});a.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4cc932c2.chunk.js.map