var D=Object.defineProperty,B=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var $=(n,t,o)=>t in n?D(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,w=(n,t)=>{for(var o in t||(t={}))K.call(t,o)&&$(n,o,t[o]);if(P)for(var o of P(t))V.call(t,o)&&$(n,o,t[o]);return n},N=(n,t)=>B(n,q(t));import{r as m,j as O,E as j,S as z,c as E,C,Q as v,T as G,t as I,m as S,a as H,b as R,I as L,A,R as Q,d as U}from"./vendor.af37ac45.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}};_();const J=()=>!window.invokeNative,W=()=>{},g=(n,t)=>{const o=m.exports.useRef(W);m.exports.useEffect(()=>{o.current=t},[t]),m.exports.useEffect(()=>{const r=i=>{const{action:s,data:d}=i.data;o.current&&s===n&&o.current(d)};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)},[n])},X=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";async function h(n,t){if(!J())try{return await(await fetch(`https://${X}/${n}`,{method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})).json()}catch(o){throw Error(`Failed to fetch NUI callback ${n}! (${o})`)}}const e=O.exports.jsx,a=O.exports.jsxs,y=O.exports.Fragment,M=({classes:n,value:t,list:o,id:r,handleSelect:i})=>e("div",{className:n,children:e(j,{value:t,onChange:s=>i(s,r),children:a("div",{className:"relative mt-1",children:[a(j.Button,{className:"w-full relative cursor-default bg-white text-left text-sm pl-3 py-2 pr-10 rounded-lg shadow-md",children:[e("span",{className:"block truncate",children:t}),e("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:e(z,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),e(j.Options,{className:"absolute z-10 mt-1 w-full max-h-60 shadow-md overflow-auto text-sm bg-white text-black rounded-md",children:o.map((s,d)=>e(j.Option,{value:s.name,className:({active:p})=>E(p?"text-white bg-gray-700":"text-gray-900","cursor-default select-none relative py-2 pl-6 pr-4 rounded-md"),children:({selected:p,active:u})=>a(y,{children:[e("span",{className:`block truncate ${p?"font-medium":"font-normal"}`,children:s.name}),p?e("span",{className:"absolute inset-y-0 left-0 flex items-center pl-1 text-emerald-600",children:e(C,{className:"w-5 h-5","aria-hidden":"true"})}):null]})},d))})]})})}),Y=()=>{const[n,t]=m.exports.useState({HelpPosition:"top-left",NotificationPosition:"top-right",Volume:1,HelpAudio:!0,NotificationAudio:!0}),[o,r]=m.exports.useState(!1);g("settings",u=>{r(u)});const i=()=>{r(!1),h("hideFrame")},s=()=>{r(!1),h("saveSettings",n),h("hideFrame")},d=(u,f)=>{t(N(w({},n),{[f]:u.currentTarget.value}))},p=(u,f)=>{t(N(w({},n),{[f]:u}))};return e(y,{children:o&&e("div",{className:"w-screen h-screen flex",children:a("div",{className:"bg-slate-200 shadow-lg flex flex-col text-gray-700 m-auto w-1/4 h-1/2 rounded-lg py-10 px-7",children:[e("div",{className:"font-bold text-xl",children:"Settings"}),a("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{children:"Volume"}),e("div",{className:"font-semibold",children:n.Volume}),e("input",{className:"w-30 h-0.5 rounded outline-none",type:"range",min:"0.00",max:"1.00",step:.1,onChange:u=>d(u,"Volume")})]}),e("div",{className:"font-semibold",children:"Help Notification"}),a("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{className:"mr-4",children:"Pop up position"}),e(M,{classes:"w-40",id:"HelpPosition",value:n.HelpPosition,handleSelect:p,list:[{name:"top-left"},{name:"top-right"},{name:"bottom-left"},{name:"bottom-right"},{name:"top-center"},{name:"bottom-center"},{name:"center-right"},{name:"center-left"}]})]}),e("div",{className:"inline-flex items-center justify-between my-2",children:a(v.Group,{as:"div",className:"inline-flex mb-4 justify-between w-full",children:[e(v.Label,{className:"mr-4",children:"Enable audio"}),e(v,{checked:n.HelpAudio,onChange:u=>t(N(w({},n),{HelpAudio:u})),className:`${n.HelpAudio?"bg-emerald-500":"bg-red-500"}
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,children:e("span",{"aria-hidden":"true",className:`${n.HelpAudio?"translate-x-5":"translate-x-0.5"}
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`})})]})}),e("div",{className:"font-semibold",children:"Notification"}),a("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{className:"mr-4",children:"Pop up position"}),e(M,{classes:"w-40",id:"NotificationPosition",value:n.NotificationPosition,handleSelect:p,list:[{name:"top-left"},{name:"top-right"},{name:"bottom-left"},{name:"bottom-right"},{name:"top-center"},{name:"bottom-center"}]})]}),e("div",{className:"inline-flex items-center justify-between my-2",children:a(v.Group,{as:"div",className:"inline-flex mb-4 justify-between w-full",children:[e(v.Label,{className:"mr-4",children:"Enable audio"}),e(v,{checked:n.NotificationAudio,onChange:u=>t(N(w({},n),{NotificationAudio:u})),className:`${n.NotificationAudio?"bg-emerald-500":"bg-red-500"}
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,children:e("span",{"aria-hidden":"true",className:`${n.NotificationAudio?"translate-x-5":"translate-x-0.5"}
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`})})]})}),a("div",{className:"inline-flex justify-end mt-auto",children:[e("button",{onClick:()=>i(),className:"py-1 px-6 font-bold bg-gray-400 rounded-lg text-sm hover:scale-105 hover:bg-neutral-800 hover:text-white duration-150 ease-in-out mr-4",children:"Close"}),e("button",{onClick:()=>s(),className:"py-1 px-6 font-bold bg-green-400 rounded-lg text-sm hover:scale-105 hover:bg-emerald-800 hover:text-white duration-150 ease-in-out",children:"Save"})]})]})})})},Z={["top-left"]:"top-2 left-3",["top-right"]:"top-2 right-3",["bottom-left"]:"bottom-2 left-3",["bottom-right"]:"bottom-2 right-3",["top-center"]:"top-2 left-1/2 -translate-x-1/2",["bottom-center"]:"bottom-2 left-1/2 -translate-x-1/2",["center-left"]:"left-3 top-1/2 -translate-y-1/2",["center-right"]:"right-3 top-1/2 -translate-y-1/2"},ee=()=>{const[n,t]=m.exports.useState(!1),[o,r]=m.exports.useState(""),[i,s]=m.exports.useState("top-left"),d=new Audio("sounds/helpnotification.ogg"),p=new RegExp(/\~\S+\~/),u=o==null?void 0:o.split(" ");let f=[];return u==null||u.map(l=>{p.test(l)&&(l=l.replace(/\~/,'<span class="shadow-sm bg-gray-100 rounded-sm px-2 py-1 text-center text-black text-bold max-w-min max-h-7">').replace(/\~/,"</span>")),f.push(l)}),g("displayHelp",l=>{r(l.text),l.volume&&(d.volume=l.volume),l.play&&d.play(),l.position&&s(l.position),t(!0)}),g("closeHelp",l=>{r(""),t(!1),s("top-left")}),e(y,{children:n?e("div",{className:E("absolute font-Chalet antialiased py-1 bg-black px-3 opacity-90 text-white max-w-sm leading-loose",Z[i]),dangerouslySetInnerHTML:{__html:f.join(" ")}}):null})},b={clean:{warning:{color:"bg-yellow-500",text:"text-yellow-600",background:"bg-slate-200",icon:e(H,{})},success:{color:"bg-lime-500",text:"text-lime-700",background:"bg-slate-150",icon:e(C,{})},error:{color:"bg-red-500",text:"text-red-700",background:"bg-slate-200",icon:e(R,{})},info:{color:"bg-blue-500",text:"text-blue-700",background:"bg-slate-150",icon:e(L,{})}},transparent:{warning:{color:"bg-warning",text:"text-warning",background:"from-warning to-warning/15",icon:e(H,{})},success:{color:"bg-success",text:"text-success",background:"from-success to-success/15",icon:e(C,{})},error:{color:"bg-error",text:"text-error",background:"from-error to-error/15",icon:e(R,{size:"1.5rem"})},info:{color:"bg-blue-500",text:"text-blue-700",background:"from-blue-500 to-blue-500/15",icon:e(L,{})}}},x={["top-right"]:{from:"translate-x-full",to:"translate-x-0"},["top-left"]:{from:"-translate-x-full",to:"-translate-x-0"},["bottom-right"]:{from:"translate-x-full",to:"translate-x-0"},["bottom-left"]:{from:"-translate-x-full",to:"-translate-x-0"},["top-center"]:{from:"-translate-y-full",to:"-translate-y-0"},["bottom-center"]:{from:"translate-y-full",to:"translate-y-0"}},te=()=>{const n=new Audio("sounds/notification.ogg");return g("sendAlert",t=>{t.volume&&(n.volume=t.volume),t.play&&n.play(),t.style=="transparent"?I.custom(o=>e(S,{appear:!0,show:o.visible,enter:"transition ease-in-out duration-300 transform",enterFrom:x[t.position||"top-right"].from,enterTo:x[t.position||"top-right"].to,leave:"transition ease-in-out duration-300 transform",leaveFrom:x[t.position||"top-right"].to,leaveTo:x[t.position||"top-right"].from,children:a("div",{className:`w-96 border-[1px] border-white/60 px-2 h-full rounded-md shadow-lg flex justify-around items-center text-white bg-gradient-to-br ${b[t.style][t.type].background}`,children:[e("div",{className:`w-8 h-8 rounded-sm flex justify-center items-center bg-white ${b[t.style][t.type].text}`,children:b[t.style][t.type].icon}),a("div",{className:"py-1 my-2 w-5/6",children:[e("h5",{className:"font-semibold font-Chalet",children:t.title}),e("p",{className:"text-sm font-Chalet",children:t.message})]})]})}),{position:t.position?t.position:"top-right",duration:t.duration?t.duration:4e3}):I.custom(o=>e(S,{appear:!0,show:o.visible,enter:"transition ease-in-out duration-300 transform",enterFrom:x[t.position||"top-right"].from,enterTo:x[t.position||"top-right"].to,leave:"transition ease-in-out duration-300 transform",leaveFrom:x[t.position||"top-right"].to,leaveTo:x[t.position||"top-right"].from,children:a("div",{className:`w-96 h-full rounded-l-lg bg-white shadow-lg flex justify-between items-center ${b[t.style][t.type].text}`,children:[e("div",{className:`rounded-l-lg ${b[t.style][t.type].color} w-2 h-full`,children:"\xA0"}),e("div",{className:`mx-2 w-7 h-7 rounded-full flex justify-center items-center ${b[t.style][t.type].color} text-white`,children:b[t.style][t.type].icon}),a("div",{className:"px-3 py-1 my-2 w-5/6",children:[e("h5",{className:"font-semibold font-Chalet",children:t.title}),e("p",{className:"text-sm font-Chalet",children:t.message})]})]})}),{position:t.position?t.position:"top-right",duration:t.duration?t.duration:4e3})}),e(G,{})},ne=()=>{const[n,t]=m.exports.useState(!1),[o,r]=m.exports.useState({title:"",text:""});g("openModal",d=>{t(!0),r(d)}),g("closeModal",d=>{i()});function i(d){d||h("declineModal"),t(!1),h("hideFrame")}const s=()=>{h("acceptModal"),i(!0)};return e(y,{children:e(S,{appear:!0,show:n,as:m.exports.Fragment,children:e(A,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:i,children:a("div",{className:"min-h-screen px-4 text-center",children:[e(S.Child,{as:m.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(A.Overlay,{className:"fixed inset-0"})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200B"}),e(S.Child,{as:m.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a("div",{className:"relative inline-block w-fit max-w-md p-6 my-8 text-left align-middle transition-all transform bg-grey-dark text-white shadow-xl rounded-md",children:[e(A.Title,{as:"h3",className:"text-lg font-bold leading-6",children:o.title}),e("div",{className:"mt-2",children:e("p",{children:o.text})}),a("div",{className:"absolute flex flex-col-reverse -right-4 gap-2 -translate-y-1/2 top-1/2",children:[e("button",{type:"button",className:"w-8 h-8 flex items-center justify-center text-xl font-medium bg-red-inactive rounded-md hover:bg-red-active outline-none",onClick:()=>i(),children:e("i",{className:"fa-regular fa-circle-xmark"})}),e("button",{type:"button",className:"w-8 h-8 flex items-center justify-center text-xl font-medium bg-green-inactive rounded-md hover:bg-green-active outline-none",onClick:s,children:e("i",{className:"fa-regular fa-circle-check"})})]})]})})]})})})})},F={},oe=({props:n,index:t,handleChange:o})=>a("div",{className:"bg-white w-full my-2 inline-flex items-center p-1 rounded-md",children:[n.icon&&e("i",{className:n.icon+" pl-1 pr-2"}),a("div",{className:"flex flex-col w-full",children:[e("div",{className:"text-sm text-grey-dark",children:n.title}),e("input",{className:"w-full rounded-md pr-2 font-medium outline-none",name:`index-${t}`,required:n.required||!1,type:n.type||"text",placeholder:n.placeholder,onChange:r=>o(r.currentTarget.value,t)})]})]}),ie=({props:n,index:t,handleChange:o})=>{var r;return a("div",{className:"bg-white w-full my-2 inline-flex items-center p-1 rounded-md",children:[n.icon&&e("i",{className:n.icon+" pl-1 pr-2"}),a("div",{className:"flex flex-col w-full",children:[e("div",{className:"text-sm text-grey-dark",children:n.title}),e("select",{className:"w-full rounded-md pr-2 font-medium outline-none bg-white",name:`index-${t}`,required:n.required||!1,onChange:i=>o(i.currentTarget.value,t),children:(r=n.options)==null?void 0:r.map((i,s)=>e("option",{value:i,className:"px-2 py-1 hover:bg-[#5471A6]",children:i},s))})]})]})},se=()=>{const[n,t]=m.exports.useState(!1),[o,r]=m.exports.useState([]),[i,s]=m.exports.useState("Default Title"),[d,p]=m.exports.useState([]);g("openInputKeyboard",l=>{s(l.title),r(l.rows);let c=[];l.rows.map((k,T)=>{c[T]=""}),p(c),t(!0)});const u=l=>{l.preventDefault(),h("submitKeyboard",d),h("hideFrame"),t(!1)},f=(l,c)=>{let k=[...d];k[c]=l,p(k)};return e(y,{children:n&&a("form",{onSubmit:u,className:"absolute rounded-lg bg-grey-darker text-grey-darker w-80 min-h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-4 flex flex-col items-center",children:[e("div",{className:"font-bold text-xl text-white",children:i}),o.map((l,c)=>l.type=="select"?e(ie,{handleChange:f,props:l,index:c}):e(oe,{handleChange:f,props:l,index:c})),a("div",{className:"w-full inline-flex justify-between gap-2 text-white",children:[e("button",{className:"px-4 py-1 rounded-lg bg-red-inactive hover:bg-red-active font-semibold my-2 grow transition-colors",type:"button",children:F.cancel}),e("button",{className:"px-4 py-1 rounded-lg bg-green-inactive hover:bg-green-active font-semibold my-2 grow transition-colors",type:"submit",children:F.submit})]})]})})},le={["top-left"]:"top-2 left-3",["top-right"]:"top-2 right-3",["bottom-left"]:"bottom-2 left-3",["bottom-right"]:"bottom-2 right-3",["top-center"]:"top-2 left-1/2 -translate-x-1/2",["bottom-center"]:"bottom-2 left-1/2 -translate-x-1/2",["center-left"]:"left-3 top-1/2 -translate-y-1/2",["center-right"]:"right-3 top-1/2 -translate-y-1/2"},re=()=>{const[n,t]=m.exports.useState(!1),[o,r]=m.exports.useState(""),[i,s]=m.exports.useState([]),[d,p]=m.exports.useState("top-left"),u=new Audio("sounds/helpnotification.ogg"),f=new RegExp(/\~\S+\~/),l=o==null?void 0:o.split(" ");return l==null||l.map(c=>{f.test(c)&&(c=c.replace(/\~/,'<span class="shadow-sm bg-gray-100 rounded-sm px-2 py-1 text-center text-black text-bold max-w-min max-h-7">').replace(/\~/,"</span>"))}),g("keybind",c=>{r(c.title),c.volume&&(u.volume=c.volume),c.play&&u.play(),c.position&&p(c.position),s(c.items),t(!0)}),g("closeKeybind",c=>{r(""),t(!1),p("top-left")}),e(y,{children:n?a("div",{className:E("absolute font-NotoSans font-medium antialiased text-white flex items-center translate-x-32",le[d]),children:[e("div",{className:"grid grid-cols-2 h-fit gap-2",children:i.map((c,k)=>a(y,{children:[e("div",{className:"flex items-start justify-end h-8 uppercase mr-2",children:c.description}),e("div",{className:"flex gap-1 h-8",children:c.buttons.map(T=>e("span",{className:"flex text-sm items-center justify-center shadow-sm bg-gray-100 rounded-md py-1 px-2.5 text-black text-bold max-w-min max-h-7",children:T}))})]}))}),e("div",{className:"table ml-2",children:e("div",{className:"rotation-wrapper-inner",children:a("div",{className:"rotate-left",children:[e("div",{className:"relative w-full h-[2px] bg-white",children:e("div",{className:"absolute -right-2 -translate-y-1/2 top-1/2 rounded-full w-4 h-4 bg-white",children:"\xA0"})}),e("div",{className:"uppercase mt-1",children:o})]})})})]}):null})};function ae(){return m.exports.useEffect(()=>{h("initialize").then(n=>{for(const[t,o]of Object.entries(n.locale))F[t]=o})},[]),a("div",{className:"",children:[e(se,{}),e(ne,{}),e(Y,{}),e(re,{}),e(ee,{}),e(te,{})]})}Q.render(e(U.StrictMode,{children:e(ae,{})}),document.getElementById("root"));
