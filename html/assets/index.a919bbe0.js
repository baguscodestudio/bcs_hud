var I=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var O=(n,t,o)=>t in n?I(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,v=(n,t)=>{for(var o in t||(t={}))R.call(t,o)&&O(n,o,t[o]);if(F)for(var o of F(t))D.call(t,o)&&O(n,o,t[o]);return n},N=(n,t)=>L(n,M(t));import{r as u,j as T,E as w,S as V,c as P,C as H,Q as g,T as B,t as G,m as j,a as K,b as q,I as z,A as C,R as Q,d as U}from"./vendor.ff27d894.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};_();const J=()=>!window.invokeNative,W=()=>{},b=(n,t)=>{const o=u.exports.useRef(W);u.exports.useEffect(()=>{o.current=t},[t]),u.exports.useEffect(()=>{const a=i=>{const{action:l,data:r}=i.data;o.current&&l===n&&o.current(r)};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[n])},X=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";async function f(n,t){if(!J())try{return await(await fetch(`https://${X}/${n}`,{method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})).json()}catch(o){throw Error(`Failed to fetch NUI callback ${n}! (${o})`)}}const e=T.exports.jsx,c=T.exports.jsxs,x=T.exports.Fragment,E=({classes:n,value:t,list:o,id:a,handleSelect:i})=>e("div",{className:n,children:e(w,{value:t,onChange:l=>i(l,a),children:c("div",{className:"relative mt-1",children:[c(w.Button,{className:"w-full relative cursor-default bg-white text-left text-sm pl-3 py-2 pr-10 rounded-lg shadow-md",children:[e("span",{className:"block truncate",children:t}),e("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:e(V,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),e(w.Options,{className:"absolute z-10 mt-1 w-full max-h-60 shadow-md overflow-auto text-sm bg-white text-black rounded-md",children:o.map((l,r)=>e(w.Option,{value:l.name,className:({active:m})=>P(m?"text-white bg-gray-700":"text-gray-900","cursor-default select-none relative py-2 pl-6 pr-4 rounded-md"),children:({selected:m,active:d})=>c(x,{children:[e("span",{className:`block truncate ${m?"font-medium":"font-normal"}`,children:l.name}),m?e("span",{className:"absolute inset-y-0 left-0 flex items-center pl-1 text-emerald-600",children:e(H,{className:"w-5 h-5","aria-hidden":"true"})}):null]})},r))})]})})}),Y=()=>{const[n,t]=u.exports.useState({HelpPosition:"top-left",NotificationPosition:"top-right",Volume:1,HelpAudio:!0,NotificationAudio:!0}),[o,a]=u.exports.useState(!1);b("settings",d=>{a(d)});const i=()=>{a(!1),f("hideFrame")},l=()=>{a(!1),f("saveSettings",n),f("hideFrame")},r=(d,p)=>{t(N(v({},n),{[p]:d.currentTarget.value}))},m=(d,p)=>{t(N(v({},n),{[p]:d}))};return e(x,{children:o&&e("div",{className:"w-screen h-screen flex",children:c("div",{className:"bg-slate-200 shadow-lg flex flex-col text-gray-700 m-auto w-1/4 h-1/2 rounded-lg py-10 px-7",children:[e("div",{className:"font-bold text-xl",children:"Settings"}),c("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{children:"Volume"}),e("div",{className:"font-semibold",children:n.Volume}),e("input",{className:"w-30 h-0.5 rounded outline-none",type:"range",min:"0.00",max:"1.00",step:.1,onChange:d=>r(d,"Volume")})]}),e("div",{className:"font-semibold",children:"Help Notification"}),c("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{className:"mr-4",children:"Pop up position"}),e(E,{classes:"w-40",id:"HelpPosition",value:n.HelpPosition,handleSelect:m,list:[{name:"top-left"},{name:"top-right"},{name:"bottom-left"},{name:"bottom-right"},{name:"top-center"},{name:"bottom-center"},{name:"center-right"},{name:"center-left"}]})]}),e("div",{className:"inline-flex items-center justify-between my-2",children:c(g.Group,{as:"div",className:"inline-flex mb-4 justify-between w-full",children:[e(g.Label,{className:"mr-4",children:"Enable audio"}),e(g,{checked:n.HelpAudio,onChange:d=>t(N(v({},n),{HelpAudio:d})),className:`${n.HelpAudio?"bg-emerald-500":"bg-red-500"}
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,children:e("span",{"aria-hidden":"true",className:`${n.HelpAudio?"translate-x-5":"translate-x-0.5"}
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`})})]})}),e("div",{className:"font-semibold",children:"Notification"}),c("div",{className:"inline-flex items-center justify-between my-2",children:[e("div",{className:"mr-4",children:"Pop up position"}),e(E,{classes:"w-40",id:"NotificationPosition",value:n.NotificationPosition,handleSelect:m,list:[{name:"top-left"},{name:"top-right"},{name:"bottom-left"},{name:"bottom-right"},{name:"top-center"},{name:"bottom-center"}]})]}),e("div",{className:"inline-flex items-center justify-between my-2",children:c(g.Group,{as:"div",className:"inline-flex mb-4 justify-between w-full",children:[e(g.Label,{className:"mr-4",children:"Enable audio"}),e(g,{checked:n.NotificationAudio,onChange:d=>t(N(v({},n),{NotificationAudio:d})),className:`${n.NotificationAudio?"bg-emerald-500":"bg-red-500"}
            relative inline-flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,children:e("span",{"aria-hidden":"true",className:`${n.NotificationAudio?"translate-x-5":"translate-x-0.5"}
              pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`})})]})}),c("div",{className:"inline-flex justify-end mt-auto",children:[e("button",{onClick:()=>i(),className:"py-1 px-6 font-bold bg-gray-400 rounded-lg text-sm hover:scale-105 hover:bg-neutral-800 hover:text-white duration-150 ease-in-out mr-4",children:"Close"}),e("button",{onClick:()=>l(),className:"py-1 px-6 font-bold bg-green-400 rounded-lg text-sm hover:scale-105 hover:bg-emerald-800 hover:text-white duration-150 ease-in-out",children:"Save"})]})]})})})},Z={["top-left"]:"top-2 left-3",["top-right"]:"top-2 right-3",["bottom-left"]:"bottom-2 left-3",["bottom-right"]:"bottom-2 right-3",["top-center"]:"top-2 left-1/2 -translate-x-1/2",["bottom-center"]:"bottom-2 left-1/2 -translate-x-1/2",["center-left"]:"left-3 top-1/2 -translate-y-1/2",["center-right"]:"right-3 top-1/2 -translate-y-1/2"},ee=()=>{const[n,t]=u.exports.useState(!1),[o,a]=u.exports.useState(""),[i,l]=u.exports.useState("top-left"),r=new Audio("sounds/helpnotification.ogg"),m=new RegExp(/\~\S+\~/),d=o==null?void 0:o.split(" ");let p=[];return d==null||d.map(s=>{m.test(s)&&(s=s.replace(/\~/,'<span class="shadow-sm bg-gray-100 rounded-sm px-2 py-1 text-center text-black text-bold max-w-min max-h-7">').replace(/\~/,"</span>")),p.push(s)}),b("displayHelp",s=>{a(s.text),s.volume&&(r.volume=s.volume),s.play&&r.play(),s.position&&l(s.position),t(!0)}),b("closeHelp",s=>{a(""),t(!1),l("top-left")}),e(x,{children:n?e("div",{className:P("absolute font-Chalet antialiased py-1 bg-black px-3 opacity-90 text-white max-w-sm",Z[i]),dangerouslySetInnerHTML:{__html:p.join(" ")}}):null})},S={warning:{color:"bg-yellow-500",text:"text-yellow-600",background:"bg-slate-200",icon:e(K,{})},success:{color:"bg-lime-500",text:"text-lime-700",background:"bg-slate-150",icon:e(H,{})},error:{color:"bg-red-500",text:"text-red-700",background:"bg-slate-200",icon:e(q,{})},info:{color:"bg-blue-500",text:"text-blue-700",background:"bg-slate-150",icon:e(z,{})}},A={["top-right"]:{from:"translate-x-full",to:"translate-x-0"},["top-left"]:{from:"-translate-x-full",to:"-translate-x-0"},["bottom-right"]:{from:"translate-x-full",to:"translate-x-0"},["bottom-left"]:{from:"-translate-x-full",to:"-translate-x-0"},["top-center"]:{from:"-translate-y-full",to:"-translate-y-0"},["bottom-center"]:{from:"translate-y-full",to:"translate-y-0"}},te=()=>{const n=new Audio("sounds/notification.ogg");return b("sendAlert",t=>{t.volume&&(n.volume=t.volume),t.play&&n.play(),G.custom(o=>e(j,{appear:!0,show:o.visible,enter:"transition ease-in-out duration-300 transform",enterFrom:A[t.position||"top-right"].from,enterTo:A[t.position||"top-right"].to,leave:"transition ease-in-out duration-300 transform",leaveFrom:A[t.position||"top-right"].to,leaveTo:A[t.position||"top-right"].from,children:c("div",{className:`w-96 h-full rounded-l-lg bg-white shadow-lg flex justify-between items-center ${S[t.type].text}`,children:[e("div",{className:`rounded-l-lg ${S[t.type].color} w-2 h-full`,children:"\xA0"}),e("div",{className:`mx-2 w-7 h-7 rounded-full flex justify-center items-center ${S[t.type].color} text-white`,children:S[t.type].icon}),c("div",{className:"px-3 py-1 my-2 w-5/6",children:[e("h5",{className:"font-semibold font-Chalet",children:t.title}),e("p",{className:"text-sm font-Chalet",children:t.message})]})]})}),{position:t.position?t.position:"top-right",duration:t.duration?t.duration:4e3})}),e(B,{})},k={},ne=()=>{const[n,t]=u.exports.useState(!1),[o,a]=u.exports.useState({title:"",text:""});b("openModal",r=>{t(!0),a(r)}),b("closeModal",r=>{i()});function i(r){r||f("declineModal"),t(!1),f("hideFrame")}const l=()=>{f("acceptModal"),i(!0)};return e(x,{children:e(j,{appear:!0,show:n,as:u.exports.Fragment,children:e(C,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:i,children:c("div",{className:"min-h-screen px-4 text-center",children:[e(j.Child,{as:u.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(C.Overlay,{className:"fixed inset-0"})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200B"}),e(j.Child,{as:u.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:c("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[e(C.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:o.title}),e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:o.text})}),c("div",{className:"mt-4",children:[e("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mr-6",onClick:()=>i(),children:k.decline}),e("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:l,children:k.accept})]})]})})]})})})})},oe=()=>{const[n,t]=u.exports.useState(!1),[o,a]=u.exports.useState([]),[i,l]=u.exports.useState("Default Title"),[r,m]=u.exports.useState([]);b("openInputKeyboard",s=>{l(s.title),a(s.rows);let h=[];s.rows.map((y,$)=>{h[$]=""}),m(h),t(!0)});const d=s=>{s.preventDefault(),f("submitKeyboard",r),f("hideFrame"),t(!1)},p=(s,h)=>{let y=[...r];y[h]=s,m(y)};return e(x,{children:n&&c("form",{onSubmit:d,className:"absolute rounded-lg bg-gray-800 w-80 min-h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-4 flex flex-col text-white items-center",children:[e("div",{className:"font-bold text-xl",children:i}),o.map((s,h)=>c("div",{className:"flex flex-col w-full my-2",children:[e("div",{className:"font-semibold mb-1",children:s.title}),c("div",{className:"flex items-center pr-",children:[s.icon&&e("i",{className:s.icon+" pl-1 pr-2"}),e("input",{className:"w-full rounded-md bg-slate-600 px-2 py-1 focus:ring-2 focus:ring-blue-800 outline-none",name:`index-${h}`,required:s.required||!1,type:s.type||"text",placeholder:s.placeholder,onChange:y=>p(y.currentTarget.value,h)})]})]})),e("button",{className:"px-4 py-2 rounded-lg bg-green-600 font-semibold my-2",type:"submit",children:k.submit})]})})};function ie(){return u.exports.useEffect(()=>{f("initialize").then(n=>{for(const[t,o]of Object.entries(n.locale))k[t]=o})},[]),c(x,{children:[e(oe,{}),e(ne,{}),e(Y,{}),e(ee,{}),e(te,{})]})}Q.render(e(U.StrictMode,{children:e(ie,{})}),document.getElementById("root"));