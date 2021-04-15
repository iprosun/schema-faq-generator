(this["webpackJsonpseo-schema-generator"]=this["webpackJsonpseo-schema-generator"]||[]).push([[0],{307:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),s=n.n(i),r=(n(84),n.p,n(85),n(344)),o=n(68),l=n(12),u=n(31),d=n(41),j=n(69),b=n(346),p=n(340),h=n(309),O=n(342),m=n(347),x=n(343),v=n(345),f=n(336),g=n(341),y=n(30),w=n(339),q=n(6),N=Object(f.a)((function(e){return{input:{width:"45%",marginRight:"5%"},question:{margin:"20px 0",display:"flex"},removeBtn:{maxWidth:"48px !important",minWidth:"48px !important",borderRadius:"50%",border:"none",fontWeight:"bolder",color:"white",fontSize:20,background:"#dc3545"},button:{marginTop:30}}}));function C(e){var t=e.questions,n=e.setQuestions,a=N();return Object(q.jsxs)("div",{children:[t.map((function(c,i){return Object(q.jsxs)("div",{className:a.question,children:[Object(q.jsx)(v.a,{id:"q_"+i,label:"Question",value:c.question,className:a.input,onChange:function(a){t[i].question=a.target.value,n(Object(y.a)(t)),e.updateJsonBody()}},"q_"+i),Object(q.jsx)(v.a,{id:"a_"+i,label:"Answer",value:c.answer,className:a.input,onChange:function(a){t[i].answer=a.target.value,n(Object(y.a)(t)),e.updateJsonBody()}},"a_"+i),Object(q.jsx)(w.a,{variant:"contained",color:"secondary",onClick:function(){!function(a){var c=t.filter((function(e,t){return t!==a}));n(c),e.updateJsonBody(c)}(i)},className:a.removeBtn,children:"-"})]})})),Object(q.jsx)(w.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){t.push({question:"",answer:""}),n(Object(y.a)(t)),e.updateJsonBody()},children:"Add Question"})]})}var B=n(49),Q=n.n(B),A=n(302),J=n(303),S=Object(f.a)((function(e){return{generatedCodeWrapper:{background:"#1e1e1e",color:"white"}}}));function k(e){var t=S();return Object(q.jsxs)("div",{className:t.generatedCodeWrapper,children:[Object(q.jsx)(Q.a,{innerHTML:!1,children:"<title>".concat(e.title," - Frequently Asked Questions(FAQ)</title>")}),Object(q.jsx)(Q.a,{innerHTML:!1,children:'<script type="application/ld+json">'}),Object(q.jsx)(J,{className:t.generatedCode,theme:A,id:"json-pretty",data:e.questions}),Object(q.jsx)(Q.a,{innerHTML:!1,children:"<\/script>"})]})}var T=Object(f.a)((function(e){return{textField:{width:"100%"},button:{marginTop:30}}}));function E(e){var t=T(),n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],r=(e.questions,e.setQuestions),o=e.updateJsonBody;return Object(q.jsxs)("div",{children:[Object(q.jsx)(v.a,{id:"filled-multiline-static",label:"HTML",multiline:!0,rows:20,value:i,className:t.textField,variant:"filled",onChange:function(e){s(e.target.value)}}),Object(q.jsx)(w.a,{variant:"contained",className:t.button,color:"primary",onClick:function(){!function(e){e=e.replace(/(\r\n|\n|\r)/gm,""),console.log(e);var t=Object(y.a)(e.matchAll("<h3>(.|\n)*?</h3>")).map((function(e){return e[0].replace(/<\/?h3>/g,"")})),n=Object(y.a)(e.matchAll("</h3>(.|\n)*?<h3>")).map((function(e){return e[0].replace(/<\/?h3>/g,"")})),a=[];t.forEach((function(e,t){a.push({question:e,answer:n[t]})})),r(a),o(a)}(i+"<h3>")},children:"Generate"})]})}var F=Object(f.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary},input:{width:"100%"},titleInput:{width:"90%",margin:"5%"}}})),I={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[]};function M(e){var t=e.children,n=e.value,a=e.index,c=Object(j.a)(e,["children","value","index"]);return Object(q.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(q.jsx)(b.a,{p:3,children:Object(q.jsx)(p.a,{children:t})})}))}function W(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function H(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],i=F(),s=Object(a.useState)(""),r=Object(u.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)([]),b=Object(u.a)(j,2),f=b[0],y=b[1],w=Object(a.useState)(I),N=Object(u.a)(w,2),B=N[0],Q=N[1],A=function(e){B.mainEntity=(e||f).map((function(e){return{"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}})),Q(B)};return Object(q.jsxs)("div",{children:[Object(q.jsx)(p.a,{variant:"h3",component:"h3",children:"SEO Schema generator"}),Object(q.jsx)("hr",{}),Object(q.jsxs)(g.a,{container:!0,spacing:3,children:[Object(q.jsx)(g.a,{item:!0,md:6,children:Object(q.jsxs)(h.a,{className:i.paper,children:[Object(q.jsx)(O.a,{position:"static",children:Object(q.jsxs)(m.a,{value:n,onChange:function(e,t){c(t)},"aria-label":"simple tabs example",children:[Object(q.jsx)(x.a,Object(d.a)({label:"Item One"},W(0))),Object(q.jsx)(x.a,Object(d.a)({label:"Item Two"},W(1)))]})}),Object(q.jsx)(v.a,{id:"page-title",label:"Title",className:i.titleInput,value:o,onChange:function(e){l(e.target.value),console.log(e)}}),Object(q.jsx)(M,{value:n,index:0,children:Object(q.jsx)(C,{questions:f,updateJsonBody:A,setQuestions:y})}),Object(q.jsx)(M,{value:n,index:1,children:Object(q.jsx)(E,{questions:f,updateJsonBody:A,setQuestions:y})})]})}),Object(q.jsx)(g.a,{item:!0,md:6,children:Object(q.jsx)(k,{title:o,questions:B})})]})]})}n(306);var L=function(){return Object(q.jsx)(r.a,{children:Object(q.jsx)(o.a,{children:Object(q.jsx)("div",{className:"container",children:Object(q.jsx)(l.c,{children:Object(q.jsx)(l.a,{ex:!0,exact:!0,path:"/",component:H})})})})})};s.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(L,{})}),document.getElementById("root"))},84:function(e,t,n){},85:function(e,t,n){}},[[307,1,2]]]);
//# sourceMappingURL=main.ef3bf5a7.chunk.js.map