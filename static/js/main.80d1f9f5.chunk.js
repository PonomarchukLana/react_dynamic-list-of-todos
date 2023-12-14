(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),l=c(1);c(13),c(14);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i,o=c(8);!function(e){e.All="",e[e.Active=0]="Active",e[e.Completed=1]="Completed"}(i||(i={}));var d=c(7),j=c.n(d),b=c(0),u=function(e){var t=e.todos,c=e.getCurrentTodoId,s=e.currentTodoId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:a&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:j()({"has-text-danger":!a,"has-text-success":a}),children:n})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(b.jsx)("span",{className:"icon",children:s===t?Object(b.jsx)("i",{className:"far fa-eye-slash"}):Object(b.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},h=function(e){var t=e.getQuery,c=e.getSortBy,s=Object(l.useState)(""),a=Object(n.a)(s,2),r=a[0],i=a[1];return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{onChange:function(e){var t=e.target.value[0].toUpperCase()+e.target.value.slice(1);c(t)},"data-cy":"statusSelect",children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:r,onChange:function(e){var c=e.target.value;i(c),t(c)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),r&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),t("")}})})]})]})},m=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.currentTodo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then(o)}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),i?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(b.jsx)(m,{})]})},x=(c(17),function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),d=Object(n.a)(a,2),j=d[0],x=d[1],f=Object(l.useState)("All"),p=Object(n.a)(f,2),v=p[0],N=p[1],y=Object(l.useState)(null),g=Object(n.a)(y,2),C=g[0],k=g[1],S=Object(l.useState)(null),T=Object(n.a)(S,2),w=T[0],B=T[1],A=function(e,t){var c=t.query,s=t.sortBy,a=Object(o.a)(e);if(c){var n=c.toLowerCase();a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))}return i[s]!==i.Active&&i[s]!==i.Completed||(a=a.filter((function(e){return e.completed===Boolean(i[s])}))),a}(c,{query:j,sortBy:v});return Object(l.useEffect)((function(){r("/todos").then((function(e){return e})).then(s)}),[]),Object(l.useEffect)((function(){B(c.find((function(e){return e.id===C}))||null)}),[C]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(h,{getQuery:x,getSortBy:N})}),Object(b.jsx)("div",{className:"block",children:0===c.length?Object(b.jsx)(m,{}):Object(b.jsx)(u,{todos:A,getCurrentTodoId:k,currentTodoId:C})})]})})}),w&&Object(b.jsx)(O,{currentTodo:w,onClose:k})]})});a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.80d1f9f5.chunk.js.map