"use strict";var A=Object.create;var f=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var E=(e,t)=>{for(var o in t)f(e,o,{get:t[o],enumerable:!0})},k=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of L(t))!N.call(e,a)&&a!==o&&f(e,a,{get:()=>t[a],enumerable:!(r=H(t,a))||r.enumerable});return e};var F=(e,t,o)=>(o=e!=null?A(T(e)):{},k(t||!e||!e.__esModule?f(o,"default",{value:e,enumerable:!0}):o,e)),W=e=>k(f({},"__esModule",{value:!0}),e);var Y={};E(Y,{RWebShare:()=>O});module.exports=W(Y);function b(e,{insertAt:t}={}){if(!e||typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}b(`.web-share-fade{animation:rwsFade .5s;animation-fill-mode:both}@keyframes rwsFade{0%{opacity:0}to{opacity:1}}.web-share-fade-in-up{animation:rwsfadeInUp .5s;animation-fill-mode:both}@keyframes rwsfadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.rws-icons{padding:1.25rem;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1.25rem}.rws-icon{width:100%;height:auto;cursor:pointer;border:0;background:#1a78f6;padding:.75rem;border-radius:.5rem;font-size:0}.rws-container{max-width:24rem;width:90%;background-color:#fff;border-radius:.5rem;border-bottom-left-radius:0;border-bottom-right-radius:0}.rws-backdrop{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.4);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;z-index:1400}.rws-header{padding:1rem 1.25rem;font-size:1.25rem;font-weight:600;padding-bottom:0}.rws-close{background:#edf2f7;cursor:pointer;padding:.75rem;display:block;width:100%;border:0;font-size:1rem}
`);var c=require("react");var D=require("react/jsx-runtime");function y({children:e,onClose:t}){return(0,D.jsx)("div",{onClick:r=>{r.target===r.currentTarget&&t(r)},className:"rws-backdrop web-share-fade",children:e})}var n=require("react/jsx-runtime"),i=e=>window.open(e,"_blank","noopener"),u={facebook:{path:(0,n.jsx)("path",{d:"M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"}),color:"#0076FB",e:e=>i(`https://www.facebook.com/sharer/sharer.php?u=${e}`)},twitter:{path:(0,n.jsx)("path",{d:"M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z"}),color:"#1DA1F2",e:(e,t)=>i(`https://twitter.com/intent/tweet?text=${t}&url=${e}`)},whatsapp:{path:(0,n.jsx)("path",{d:"M17.5 14.4l-2-1c-.3 0-.5-.1-.7.2l-1 1.1c-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.1-.3 0-.5.2-.6l.4-.6c.2-.1.2-.3.3-.5v-.5L9 7c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5 0-.8.4-.2.3-1 1-1 2.5s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5l1.7.6a4 4 0 001.9.2c.5-.1 1.7-.8 2-1.5.2-.6.2-1.2.1-1.4l-.5-.3M12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.3a9.9 9.9 0 01-1.5-5.3 9.9 9.9 0 0116.8-7 9.8 9.8 0 013 7 9.9 9.9 0 01-10 9.9m8.4-18.3A11.8 11.8 0 0012.1 0 12 12 0 001.8 17.8L0 24l6.4-1.6a11.9 11.9 0 005.6 1.4 12 12 0 0012-11.9 11.8 11.8 0 00-3.5-8.4z"}),color:"#25D366",e:(e,t)=>i(`https://api.whatsapp.com/send?text=${t} ${e}`)},reddit:{path:(0,n.jsx)("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 01-2.5.06l-2.6-.55-.8 3.75c1.83.07 3.48.63 4.68 1.49.3-.31.73-.5 1.2-.5.97 0 1.76.8 1.76 1.76 0 .72-.43 1.33-1.01 1.61a3.11 3.11 0 01.04.52c0 2.7-3.13 4.87-7 4.87-3.88 0-7-2.17-7-4.87 0-.18 0-.36.04-.53A1.75 1.75 0 014.03 12a1.75 1.75 0 012.96-1.26 8.52 8.52 0 014.74-1.5l.89-4.17a.34.34 0 01.14-.2.35.35 0 01.24-.04l2.9.62a1.21 1.21 0 011.11-.7zM9.25 12a1.25 1.25 0 101.25 1.25c0-.69-.56-1.25-1.25-1.25zm5.5 0a1.25 1.25 0 000 2.5 1.25 1.25 0 000-2.5zm-5.47 3.99a.33.33 0 00-.23.1.33.33 0 000 .46c.84.84 2.49.91 2.96.91.48 0 2.1-.06 2.96-.91a.36.36 0 00.03-.47.33.33 0 00-.46 0c-.55.54-1.68.73-2.51.73-.83 0-1.98-.2-2.51-.73a.33.33 0 00-.24-.1z"}),color:"#FF4500",e:(e,t)=>i(`https://www.reddit.com/submit?url=${e}&title=${t}`)},telegram:{path:(0,n.jsx)("path",{d:"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"}),color:"#0088CC",e:(e,t)=>i(`https://telegram.me/share/msg?url=${e}&text=${t}`)},linkedin:{path:(0,n.jsx)("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"}),color:"#0073b1",e:(e,t,o)=>i(`https://www.linkedin.com/shareArticle?mini=true&url=${e}&title=${o}&summary=${t}`)},mail:{path:(0,n.jsx)("path",{d:"M20 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),color:"#E53E3E",e:(e,t)=>i(`mailto:?body=${e}&subject=${t}`)},copy:{path:(0,n.jsx)("path",{d:"M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"}),color:"#718096",e:e=>navigator.clipboard.writeText(decodeURIComponent(e))},vk:{path:(0,n.jsx)("path",{d:"M22.7 6.24c.16-.52 0-.9-.73-.9H19.5c-.62 0-.91.32-1.06.69 0 0-1.25 3.04-3.02 5.02-.57.57-.83.75-1.15.75-.15 0-.39-.18-.39-.7V6.24c0-.63-.17-.9-.69-.9H9.34c-.39 0-.62.29-.62.56 0 .59.88.72.97 2.4v3.6c0 .8-.14.95-.45.95-.84 0-2.86-3.06-4.06-6.56-.24-.68-.48-.96-1.1-.96H1.61c-.7 0-.85.33-.85.7 0 .65.84 3.88 3.88 8.14 2.03 2.92 4.9 4.5 7.5 4.5 1.55 0 1.75-.35 1.75-.96 0-2.78-.15-3.04.64-3.04.36 0 .99.18 2.44 1.58 1.67 1.67 1.95 2.42 2.88 2.42h2.45c.7 0 1.06-.35.85-1.05-.46-1.45-3.62-4.44-3.76-4.64-.36-.47-.26-.68 0-1.1 0 0 3-4.21 3.3-5.64Z"}),color:"#07f",e:(e,t,o)=>i(`http://vk.com/share.php?url=${e}&title=${o}&comment=${t}`)},okru:{path:(0,n.jsx)("path",{d:"M13.6 16.4c1-.3 2-.7 2.8-1.2a1.5 1.5 0 0 0-1.5-2.5 6.3 6.3 0 0 1-6.7 0 1.5 1.5 0 1 0-1.5 2.5c.9.5 1.8 1 2.9 1.2L6.8 19a1.4 1.4 0 1 0 2 2l2.8-2.6 2.7 2.7a1.5 1.5 0 1 0 2-2l-2.7-2.8Zm-2-11.1a2 2 0 1 1 0 4.1 2 2 0 0 1 0-4.1Zm0 7a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"}),color:"#e27e35",e:e=>i(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${e}`)}};var v=require("react/jsx-runtime");function h({name:e,data:t,onClose:o,onClick:r}){let{path:a,viewBox:s="0 0 24 24",color:w,e:p}=u[e];return(0,v.jsx)("button",{onClick:()=>{r&&r(e),p(encodeURIComponent(t.url),t.text,t.title),o()},"aria-label":e,className:"rws-icon",style:{background:w},children:(0,v.jsx)("svg",{fill:"white",viewBox:s,children:a})})}var x=F(require("react")),I=require("react-dom"),z=({children:e})=>{let t=document.createElement("div");return x.default.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),(0,I.createPortal)(e,t)};var U=require("react/jsx-runtime");function $({onClose:e,closeText:t}){return(0,U.jsx)("button",{className:"rws-close","aria-label":"Close",type:"button",onClick:e,children:t||"Close"})}var Z=require("react/jsx-runtime");function R({title:e}){return(0,Z.jsx)("header",{className:"rws-header",children:e})}var d=require("react/jsx-runtime"),S=({onClose:e,sites:t,data:o,closeText:r,onClick:a})=>(0,d.jsxs)("section",{role:"dialog","aria-modal":"true",className:"rws-container web-share-fade-in-up",children:[(0,d.jsx)(R,{title:o.title}),(0,d.jsx)("div",{className:"rws-icons",children:t.map(s=>(0,d.jsx)(h,{name:s,data:o,onClose:e,onClick:a},s))}),(0,d.jsx)($,{onClose:e,closeText:r})]});var m=require("react");function B(){let[e,t]=(0,m.useState)(!1),o=(0,m.useCallback)(()=>t(!0),[]),r=(0,m.useCallback)(()=>t(!1),[]),a=(0,m.useCallback)(()=>t(s=>!s),[]);return{isOpen:e,onOpen:o,onClose:r,onToggle:a}}var l=require("react/jsx-runtime"),M=Object.keys(u).slice(0,8),O=(0,c.memo)(e=>{var g;let{onOpen:t,onClose:o,isOpen:r}=B(),{styledComp:a,children:s,...w}=e,p=(0,c.useMemo)(()=>({...e.data,title:e.data.title||"share",text:e.data.text||"",url:e.data.url||typeof window<"u"&&window.location.href||""}),[e.data]),C=(0,c.useCallback)(async()=>{if(window.navigator.share&&!e.disableNative)try{await window.navigator.share(p),e.onClick()}catch(V){console.warn(V)}else t()},[p]),P=(0,c.useCallback)(()=>a?(0,c.cloneElement)(a,{...w,sites:e.sites||M,Icon:h}):(0,l.jsx)(z,{children:(0,l.jsx)(y,{onClose:o,children:(0,l.jsx)(S,{onClose:o,sites:e.sites||M,data:p,closeText:e.closeText,onClick:e.onClick})})}),[a]);return(0,l.jsxs)(l.Fragment,{children:[(0,c.cloneElement)(e.children,{...(g=e.children)==null?void 0:g.props,onClick:C}),r&&P()]})});0&&(module.exports={RWebShare});
