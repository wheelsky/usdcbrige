"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1385],{31385:function(e,t,n){n.d(t,{fC:function(){return T},bU:function(){return $}});var r=n(7896),o=n(2784),c=n.t(o,2);function u(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function l(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function i(...e){return(0,o.useCallback)(l(...e),e)}function s(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const r=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return(0,o.useMemo)((()=>({[`__scope${t.scopeName}`]:r})),[r])}};return n.scopeName=t.scopeName,n}function a(e){const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e})),(0,o.useMemo)((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}function d({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[r,c]=function({defaultProp:e,onChange:t}){const n=(0,o.useState)(e),[r]=n,c=(0,o.useRef)(r),u=a(t);return(0,o.useEffect)((()=>{c.current!==r&&(u(r),c.current=r)}),[r,c,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=u?e:r,i=a(n);return[l,(0,o.useCallback)((t=>{if(u){const n=t,r="function"==typeof t?n(e):t;r!==e&&i(r)}else c(t)}),[u,e,c,i])]}const f=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{};n(28316);const h=(0,o.forwardRef)(((e,t)=>{const{children:n,...c}=e,u=o.Children.toArray(n),l=u.find(m);if(l){const e=l.props.children,n=u.map((t=>t===l?o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null:t));return(0,o.createElement)(p,(0,r.Z)({},c,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,n):null)}return(0,o.createElement)(p,(0,r.Z)({},c,{ref:t}),n)}));h.displayName="Slot";const p=(0,o.forwardRef)(((e,t)=>{const{children:n,...r}=e;return(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{...v(r,n.props),ref:l(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null}));p.displayName="SlotClone";const b=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function m(e){return(0,o.isValidElement)(e)&&e.type===b}function v(e,t){const n={...t};for(const r in t){const o=e[r],c=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==c||c(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...c}:"className"===r&&(n[r]=[o,c].filter(Boolean).join(" "))}return{...e,...n}}const E=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=(0,o.forwardRef)(((e,n)=>{const{asChild:c,...u}=e,l=c?h:t;return(0,o.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,o.createElement)(l,(0,r.Z)({},u,{ref:n}))}));return n.displayName=`Primitive.${t}`,{...e,[t]:n}}),{});Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)&&o.useLayoutEffect,c["useId".toString()];const[y,C]=function(e,t){const n=(0,o.createContext)(t);function r(e){const{children:t,...r}=e,c=(0,o.useMemo)((()=>r),Object.values(r));return(0,o.createElement)(n.Provider,{value:c},t)}return r.displayName=e+"Provider",[r,function(r){const c=(0,o.useContext)(n);if(c)return c;if(void 0!==t)return t;throw new Error(`\`${r}\` must be used within \`${e}\``)}]}("Label",{id:void 0,controlRef:{current:null}}),w="Switch",[g,k]=function(e,t=[]){let n=[];const r=()=>{const t=n.map((e=>(0,o.createContext)(e)));return function(n){const r=(null==n?void 0:n[e])||t;return(0,o.useMemo)((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}};return r.scopeName=e,[function(t,r){const c=(0,o.createContext)(r),u=n.length;function l(t){const{scope:n,children:r,...l}=t,i=(null==n?void 0:n[e][u])||c,s=(0,o.useMemo)((()=>l),Object.values(l));return(0,o.createElement)(i.Provider,{value:s},r)}return n=[...n,r],l.displayName=t+"Provider",[l,function(n,l){const i=(null==l?void 0:l[e][u])||c,s=(0,o.useContext)(i);if(s)return s;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},s(r,...t)]}(w),[S,N]=g(w),P=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,"aria-labelledby":c,name:l,checked:s,defaultChecked:a,required:f,disabled:h,value:p="on",onCheckedChange:b,...m}=e,[v,y]=(0,o.useState)(null),w=i(t,(e=>y(e))),g=(e=>{const t=C("LabelConsumer"),{controlRef:n}=t;return(0,o.useEffect)((()=>{e&&(n.current=e)}),[e,n]),t.id})(v),k=c||g,N=(0,o.useRef)(!1),P=!v||Boolean(v.closest("form")),[_=!1,T]=d({prop:s,defaultProp:a,onChange:b});return(0,o.createElement)(S,{scope:n,checked:_,disabled:h},(0,o.createElement)(E.button,(0,r.Z)({type:"button",role:"switch","aria-checked":_,"aria-labelledby":k,"aria-required":f,"data-state":x(_),"data-disabled":h?"":void 0,disabled:h,value:p},m,{ref:w,onClick:u(e.onClick,(e=>{T((e=>!e)),P&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())}))})),P&&(0,o.createElement)(R,{control:v,bubbles:!N.current,name:l,value:p,checked:_,required:f,disabled:h,style:{transform:"translateX(-100%)"}}))})),_=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,...c}=e,u=N("SwitchThumb",n);return(0,o.createElement)(E.span,(0,r.Z)({"data-state":x(u.checked),"data-disabled":u.disabled?"":void 0},c,{ref:t}))})),R=e=>{const{control:t,checked:n,bubbles:c=!0,...u}=e,l=(0,o.useRef)(null),i=function(e){const t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(n),s=function(e){const[t,n]=(0,o.useState)(void 0);return f((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,c;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,c=t.blockSize}else o=e.offsetWidth,c=e.offsetHeight;n({width:o,height:c})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)}),[e]),t}(t);return(0,o.useEffect)((()=>{const e=l.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked").set;if(i!==n&&r){const t=new Event("click",{bubbles:c});r.call(e,n),e.dispatchEvent(t)}}),[i,n,c]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},u,{tabIndex:-1,ref:l,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x(e){return e?"checked":"unchecked"}const T=P,$=_}}]);