(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={NavBar_wrapper:"NavBar_NavBar_wrapper__2BiUP",NavBar:"NavBar_NavBar__3J-Lu",activeLink:"NavBar_activeLink__HVVuJ",NavBar_active:"NavBar_NavBar_active__2Alk2",Btn_burger:"NavBar_Btn_burger__23Xky",Btn_burger_active:"NavBar_Btn_burger_active__t0bhz"}},,function(e,t,a){e.exports={message_wrapper:"Message_message_wrapper__1CRaQ",message_inner:"Message_message_inner__2RO9Y",message_ava:"Message_message_ava__5qFqK",message_cont:"Message_message_cont__25EwY",message_name:"Message_message_name__21kw8",message_text:"Message_message_text__h7QY0",message_date:"Message_message_date__bJNP0"}},,,,function(e,t,a){e.exports={editable:"EditableSpan_editable__1yf-g",editable_span:"EditableSpan_editable_span__IT8SM"}},,,,,,,,function(e,t,a){e.exports={myAffairs:"HomeWork_2_myAffairs__2MMvb",list_btn:"HomeWork_2_list_btn__16ytJ",filter_btn_inner:"HomeWork_2_filter_btn_inner__2lDOJ"}},function(e,t,a){e.exports={btn:"MyBtn_btn__2CDxd",redBtn:"MyBtn_redBtn__3Bwyr"}},function(e,t,a){e.exports={inputBase:"MyInput_inputBase__1kZ2b",red:"MyInput_red__3dwtm"}},,,,function(e,t,a){e.exports={junior_inner:"Junior_junior_inner__G7vBN",preloader:"Junior_preloader__AF7Ru"}},,,,,function(e,t,a){e.exports={work3:"HomeWork_3_work3__1qWaR"}},function(e,t,a){e.exports={header:"Header_header__39DTi"}},function(e,t,a){e.exports={MySelect:"MySelect_MySelect__1SCKD"}},,function(e,t,a){e.exports={users_list:"Users_users_list__3cXy3"}},function(e,t,a){e.exports=a.p+"static/media/preloader.defca93a.svg"},function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(44),a(45),a(3)),i=a(22),s=a.n(i),u=a(23),m=a.n(u);function d(e){return r.a.createElement("div",null,r.a.createElement("button",{className:e.red?"".concat(m.a.redBtn," ").concat(m.a.btn):m.a.btn,onClick:e.onClick,disabled:e.disabled}," ",e.name))}function v(e){return r.a.createElement("div",{className:s.a.myAffairs},r.a.createElement("h2",null,e.title),r.a.createElement("ul",null,e.lessons.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("span",null,t.n," -  "),r.a.createElement("span",null,"\u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438: "),r.a.createElement("span",null,t.p," "),r.a.createElement("div",{className:s.a.list_btn},r.a.createElement(d,{onClick:function(){return e.deleteLesson(t.id)},name:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",type:"button"})))}))),r.a.createElement("div",{className:s.a.filter_btn_inner},r.a.createElement(d,{onClick:function(){return e.changeFilter("\u0412\u0441\u0435")},name:"\u0412\u0441\u0435"}),r.a.createElement(d,{onClick:function(){return e.changeFilter("\u0412\u044b\u0441\u043e\u043a\u0430\u044f")},name:"\u0411\u043e\u043b\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435"}),r.a.createElement(d,{onClick:function(){return e.changeFilter("\u0421\u0440\u0435\u0434\u043d\u044f\u044f")},name:"\u0432\u0430\u0436\u043d\u044b\u0435"}),r.a.createElement(d,{onClick:function(){return e.changeFilter("\u041d\u0438\u0437\u043a\u0430\u044f")},name:"\u041c\u0435\u043d\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435"})))}var _=a(13),f=a(52),p=a(33),b=a.n(p),E=a(24),g=a.n(E);function N(e){return r.a.createElement("div",null,r.a.createElement("input",{onBlur:e.onBlur,type:e.type,value:e.value,onChange:function(t){return e.onChange(t.currentTarget.value)},onKeyPress:function(t){e.onKeyPress&&13===t.charCode&&e.onKeyPress()},className:e.error?"".concat(g.a.inputBase).concat(g.a.red):g.a.inputBase,placeholder:e.placeholder}))}function O(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),u=s[0],m=s[1],v=function(){""!==c?(p(c),alert("\u041f\u0440\u0438\u0432\u0435\u0442 ".concat(c,"!  \u0422\u044b ").concat(u.length+1," \u0432 \u0441\u043f\u0438\u0441\u043a\u0435")),l("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f.")},p=function(e){var t={id:Object(f.a)(),name:e};m([t].concat(Object(_.a)(u)))};return r.a.createElement("div",{className:b.a.work3},r.a.createElement("h3",null,"HomeWork_3"),r.a.createElement(N,{value:c,onChange:function(e){l(e)},onKeyPress:function(){v()},type:"text",placeholder:"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"}),r.a.createElement(d,{onClick:v,name:"press",disabled:!1,type:"button"}),r.a.createElement("div",null," ",u.length," "))}var y=a(10),j=a.n(y);function B(e){var t=(new Date).getHours(),a=(new Date).getMinutes();return r.a.createElement("div",{className:j.a.message_wrapper},r.a.createElement("div",{className:j.a.message_inner},r.a.createElement("div",null,r.a.createElement("img",{className:j.a.message_ava,src:e.src,alt:"#"})),r.a.createElement("div",{className:j.a.message_cont},r.a.createElement("span",{className:j.a.message_name},e.name," "),r.a.createElement("div",{className:j.a.message_text},e.text),r.a.createElement("span",{className:j.a.message_date}," ",a<10?t+".0"+a:t+"."+a))))}var h=a(14),S=a.n(h);function C(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",{className:S.a.editable},c?r.a.createElement(N,{autoFocus:!0,type:"text",value:u,onChange:function(e){m(e)},onKeyPress:function(){m(""),l(!1)},onBlur:function(){l(!1)}}):r.a.createElement("span",{className:S.a.editable_span,onClick:function(){l(!0)}},e.text))}function w(){var e=Object(n.useState)([{id:1,n:"\u0420\u0435\u0430\u043a\u0442",p:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"},{id:2,n:"\u0420\u0430\u0431\u043e\u0442\u0430",p:"\u041d\u0438\u0437\u043a\u0430\u044f"},{id:3,n:"\u0421\u043f\u043e\u0440\u0442",p:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"},{id:4,n:"\u0421\u0435\u043c\u044c\u044f",p:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"}]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("\u0412\u0441\u0435"),i=Object(o.a)(l,2),s=i[0],u=i[1],m=a;return"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"===s&&(m=a.filter((function(e){return"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"===e.p}))),"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"===s&&(m=a.filter((function(e){return"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"===e.p}))),"\u041d\u0438\u0437\u043a\u0430\u044f"===s&&(m=a.filter((function(e){return"\u041d\u0438\u0437\u043a\u0430\u044f"===e.p}))),r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(B,{src:"https://avatars.mds.yandex.net/get-pdb/2301590/a92c498e-7910-4b77-b246-2afa0e5943fd/s375",name:"Ivan",text:" Hello World! Hello World! Hello World! Hello World!  "}),r.a.createElement(v,{title:"HomeWork_2",lessons:m,changeFilter:function(e){u(e)},deleteLesson:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)}}),r.a.createElement(O,null),r.a.createElement(C,{text:"\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430"})))}var k=a(15),x=a(2),A=a(34),D=a.n(A);function M(){return r.a.createElement("div",{className:D.a.header},r.a.createElement("span",null," Home Work"))}var W=a(8),H=a.n(W);function I(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:H.a.NavBar_wrapper},r.a.createElement("div",{className:a?"".concat(H.a.Btn_burger," ").concat(H.a.Btn_burger_active):H.a.Btn_burger,onClick:function(){c(!a)}},r.a.createElement("span",null)),r.a.createElement("nav",{className:a?"".concat(H.a.NavBar," ").concat(H.a.NavBar_active):H.a.NavBar},r.a.createElement("div",null,r.a.createElement(k.b,{to:"/PreJunior",activeClassName:H.a.activeLink},"PreJunior")),r.a.createElement("div",null,r.a.createElement(k.b,{to:"/Junior",activeClassName:H.a.activeLink},"Junior")),r.a.createElement("div",null,r.a.createElement(k.b,{to:"/OldJunior",activeClassName:H.a.activeLink},"OldJunior"))))}function J(){return r.a.createElement("div",null,"\u041f\u043e\u043b\u0443\u0447\u0448\u0435 ....\u043d\u043e - \u043a\u043e\u0434 ")}function T(e){var t=e.value,a=e.text,n=e.onChange,c=e.editMode,l=e.visibilityInput,o=e.pressEnter,i=e.saveData,s=e.RestoreDAta;return r.a.createElement("div",{className:S.a.editable},!c&&r.a.createElement("span",{className:S.a.editable_span,onClick:l}," ",a),c&&r.a.createElement("span",null,r.a.createElement(N,{autoFocus:!0,type:"text",value:t,onChange:n,onKeyPress:o}),r.a.createElement(d,{name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:i}),r.a.createElement(d,{name:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",onClick:s})))}var L=a(35),P=a.n(L);function U(e){return r.a.createElement("select",{value:e.value,onChange:function(t){e.onChange(t.currentTarget.value)},className:P.a.MySelect},e.generalData.map((function(e){return r.a.createElement("option",{key:e.id}," ",e.value)})))}function F(e){return r.a.createElement("div",null,r.a.createElement("b",null,"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0432\u0430\u0441 \u043f\u0443\u043d\u043a\u0442: "),e.generalData.slice(1).map((function(t){return r.a.createElement("p",{key:t.id},r.a.createElement("input",{type:"radio",name:e.name,value:t.value})," ",t.value)})))}var K=a(28),R=a.n(K),Y=a(11),q=a(9),z={users:[{id:Object(f.a)(),name:"Julia",sername:"Ivanova",age:13},{id:Object(f.a)(),name:"Kirill",sername:"Ivanov",age:28},{id:Object(f.a)(),name:"Alex",sername:"Ivanov",age:18},{id:Object(f.a)(),name:"Nikita",sername:"Ivanov",age:15},{id:Object(f.a)(),name:"Victor",sername:"Ivanov",age:18},{id:Object(f.a)(),name:"Anna",sername:"Ivanova",age:21}],filter:null},G={SortByNameUpAC:function(){return{type:"SORT-BY-NAME-UP",payload:"up"}},SortByNameDownAC:function(){return{type:"SORT-BY-NAME-DOWN",payload:"down"}},FilterByAgeAC:function(){return{type:"CHECK",payload:"18"}}},V=function(e){return e=Object(_.a)(e).sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0}))},Q=a(37),X=a.n(Q),Z=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.users.map((function(e){return r.a.createElement("ul",{className:X.a.users_list,key:e.id},r.a.createElement("li",null," ","".concat(e.name," ").concat(e.sername," \u0432\u043e\u0437\u0440\u0430\u0441\u0442 - ").concat(e.age)," "))}))),r.a.createElement("div",null,r.a.createElement(d,{onClick:e.sortNameUp,name:"Sort by Name Up",red:"Sort by Name Up"===e.selectButtonName}),r.a.createElement(d,{onClick:e.sortNameDown,name:"Sort by Name Down",red:"Sort by Name Down"===e.selectButtonName}),r.a.createElement(d,{onClick:e.filterByAge,name:"Sort by Age: 18+",red:"Sort by Age: 18+"===e.selectButtonName})))},$=Object(Y.b)((function(e){return{users:e.HW.users,filter:e.HW.filter}}),{sortNameUp:G.SortByNameUpAC,sortNameDown:G.SortByNameDownAC,filterByAge:G.FilterByAgeAC})((function(e){var t=e.users,a=e.filter,c=e.filterByAge,l=e.sortNameDown,i=e.sortNameUp,s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1],v=Object(_.a)(t);return"18"===a&&(v=t.filter((function(e){return e.age>=+a}))),r.a.createElement(Z,{users:v,filterByAge:function(){c(),d("Sort by Age: 18+")},sortNameDown:function(){l(),d("Sort by Name Down")},sortNameUp:function(){i(),d("Sort by Name Up")},selectButtonName:m})})),ee=function(e){var t=e.date,a=e.runTime,n=e.stopTime,c=e.showDate,l=e.mouseOver,o=e.mouseOut,i=t.toLocaleDateString(),s=t.toTimeString().slice(0,8);return r.a.createElement("div",null,r.a.createElement("div",{style:{fontSize:"40px",fontWeight:"bold",textAlign:"center",marginTop:"50px",color:"#869ddd"}},"HW - 9"),r.a.createElement("div",{onMouseOver:l,onMouseOut:o,style:{fontSize:"40px",fontWeight:"bold",margin:"0 auto",width:" fit-content"}},s),c&&r.a.createElement("div",{style:{width:" fit-content",margin:"0 auto"}},"\u041d\u0435 \u043e\u0447\u0435\u043d\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u0430\u044f \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u0448\u043a\u0430.. ",i),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",padding:"50px 0"}},r.a.createElement("button",{onClick:a},"Run"),r.a.createElement("button",{onClick:n},"Stop")))},te=a(38),ae=a.n(te),ne=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:ae.a,alt:"preloader"}))},re={loading:!1},ce=function(e){return{type:"SET_LOADING",loading:e}};function le(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),s=i[0],u=i[1],m=function(){""===a?alert("Incorrect data!"):(c(""),alert("Data sent successfully!"),function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("test",{x:a}))};var v=[{id:Object(f.a)(),value:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043d\u043a\u0442: "},{id:Object(f.a)(),value:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u044a\u044e\u0442\u0435\u0440\u044b"},{id:Object(f.a)(),value:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438"},{id:Object(f.a)(),value:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b"},{id:Object(f.a)(),value:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u041f\u041a "},{id:Object(f.a)(),value:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u043e\u0432"},{id:Object(f.a)(),value:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"}],_=Object(n.useState)(""),p=Object(o.a)(_,2),b=p[0],E=p[1],g=Object(n.useState)(""),N=Object(o.a)(g,2),O=N[0],y=N[1],j=Object(n.useState)(0),B=Object(o.a)(j,2),h=B[0],S=B[1],C=Object(n.useState)(new Date),w=Object(o.a)(C,2),k=w[0],x=w[1],A=Object(n.useState)(!1),D=Object(o.a)(A,2),M=D[0],W=D[1],H=Object(Y.c)();return Object(Y.d)((function(e){return e.HW10.loading}))?r.a.createElement("div",{className:R.a.preloader},r.a.createElement(ne,null)):r.a.createElement("div",null,r.a.createElement(d,{onClick:function(){H(ce(!0)),setTimeout((function(){H(ce(!1))}),3e3)},name:"Start Loading"}),r.a.createElement(T,{value:a,text:"Press for open input...",onChange:function(e){return c(e)},editMode:s,visibilityInput:function(){return u(!0)},pressEnter:function(){return m()},saveData:m,RestoreDAta:function(){!function(e,t){var a=localStorage.getItem(e);if(null===a)return alert(t.x),t;t=JSON.parse(a),c(t.x)}("test",{x:"\u0420\u0430\u043d\u0435\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442...."})}}),r.a.createElement("div",{className:R.a.junior_inner},r.a.createElement(U,{value:b,onChange:function(e){v.find((function(t){t.value===e&&E(t.value)}))},generalData:v}),r.a.createElement(F,{generalData:v,name:"products",onChange:function(e){v.find((function(t){t.value===e&&y(t.value)}))},value:O})),r.a.createElement($,null),r.a.createElement(ee,{date:k,runTime:function(){window.clearInterval(h);var e=window.setInterval((function(){return x(new Date)}),1e3);S(e)},stopTime:function(){return clearInterval(h)},showDate:M,mouseOver:function(){W(!0)},mouseOut:function(){W(!1)}}))}var oe=function(){return r.a.createElement(k.a,null,r.a.createElement("div",{className:"App_wrapper"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement("div",{className:"App_wrapper__content"},r.a.createElement(x.a,{render:function(){return r.a.createElement(w,null)},path:"/PreJunior"}),r.a.createElement(x.a,{render:function(){return r.a.createElement(le,null)},path:"/Junior"}),r.a.createElement(x.a,{render:function(){return r.a.createElement(J,null)},path:"/OldJunior"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(18),se=Object(ie.b)({HW:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT-BY-NAME-UP":return Object(q.a)(Object(q.a)({},e),{},{users:V(e.users),filter:t.payload});case"SORT-BY-NAME-DOWN":return Object(q.a)(Object(q.a)({},e),{},{users:V(e.users).reverse(),filter:t.payload});case"CHECK":return Object(q.a)(Object(q.a)({},e),{},{filter:t.payload});default:return e}},HW10:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(q.a)(Object(q.a)({},e),{},{loading:t.loading});default:return e}}}),ue=Object(ie.c)(se);l.a.render(r.a.createElement(Y.a,{store:ue},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.6325c1c5.chunk.js.map