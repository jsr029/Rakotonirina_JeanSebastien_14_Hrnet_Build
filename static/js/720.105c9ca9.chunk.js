"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[720],{9720:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(2791),a=t(1087),o=t(885),s=t(3513),u=t(1601),i=t.n(u),c=t(184);var l=function(e){var r=e.callback,t=(0,n.useState)(""),a=(0,o.Z)(t,2),s=a[0],u=a[1];return(0,c.jsx)("form",{className:"searchBar",onSubmit:function(e){e.preventDefault(),r(s)},children:(0,c.jsx)("input",{placeholder:"Type word or not and press enter...",type:"text",className:"searchBarInput",value:s,onChange:function(e){return u(e.target.value)}})})},d=t(9434);var f=function(){var e=(0,d.v9)((function(e){return e.employeesReducer})).data,r=[{id:1,name:"Firstname",selector:function(e){return e.firstname},sortable:!0,reorder:!0},{id:2,name:"Lastname",selector:function(e){return e.lastname},sortable:!0,reorder:!0},{id:3,name:"Start Date",selector:function(e){return e.startdate},format:function(e){return i()(e.startdate).format("DD/MM/YYYY")},sortable:!0,reorder:!0},{id:4,name:"Department",selector:function(e){return e.Departement.value},sortable:!0,reorder:!0},{id:5,name:"Date of Birth",selector:function(e){return e.dateofbirth},format:function(e){return i()(e.dateofbirth).format("DD/MM/YYYY")},sortable:!0,reorder:!0},{id:6,name:"Street",selector:function(e){return e.street},sortable:!0,reorder:!0},{id:7,name:"City",selector:function(e){return e.city},sortable:!0,reorder:!0},{id:8,name:"State",selector:function(e){return e.State.value},sortable:!0,reorder:!0},{id:9,name:"Zip Code",selector:function(e){return e.zipcode},sortable:!0,right:!0,reorder:!0}],t=(0,n.useState)(e),a=(0,o.Z)(t,2),u=a[0],f=a[1],m=(0,n.useState)(""),p=(0,o.Z)(m,2),h=p[0],C=p[1];return(0,n.useEffect)((function(){var r=function(r){return""===r?e:e.filter((function(e){return e.firstname.toLowerCase().includes(r.toLowerCase())||e.lastname.toLowerCase().includes(r.toLowerCase())||e.street.toLowerCase().includes(r.toLowerCase())||e.city.toLowerCase().includes(r.toLowerCase())||e.Departement.value.toLowerCase().includes(r.toLowerCase())||e.State.value.toLowerCase().includes(r.toLowerCase())||e.dateofbirth.includes(r)||e.zipcode.toLowerCase().includes(r.toLowerCase())}))}(h);f(r)}),[h]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Search"}),(0,c.jsx)(l,{callback:function(e){return C(e)}}),(0,c.jsx)("div",{className:"App",children:(0,c.jsx)(s.ZP,{columns:r,data:u,pagination:!0,paginationServer:!0,subHeader:!0,defaultSortFieldId:1,rowsPerPage:10,currentPage:1})})]})};var m=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"employees",children:[(0,c.jsx)("h1",{children:"Current Employees"}),(0,c.jsx)(f,{})]}),(0,c.jsx)(a.rU,{to:"/",children:"Home"})]})}}}]);
//# sourceMappingURL=720.105c9ca9.chunk.js.map