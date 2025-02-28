import{U as R,c as q,L as c,ai as j,bb as L,aY as z,r as Q,bc as E,bd as Y,A as I,o as H,Q as f,k as y,I as J,P as K,a as s,b as i,w as l,d as e,g as k,t as X,u as m,x as g,q as h,e as r,E as Z,be as B}from"./app-BHeael7A.js";import{c as ee,d as le,Q as _,e as ae,f as A,b as te,a as ne}from"./QLayout-7wX7CmRM.js";import{Q as v,a as n,b as d}from"./format-CYKmJ8Oj.js";import{Q as oe}from"./QMenu-aFYmALZq.js";import{Q as ue}from"./QExpansionItem-OPCk_GRv.js";import{C as P}from"./ClosePopup-B8Woq_MJ.js";const re=R({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(t,{slots:b}){const p=q(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>t[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(t.spread===!0?" q-btn-group--spread":" inline")});return()=>c("div",{class:p.value},j(b.default))}}),de=Object.keys(L);function se(t){return de.reduce((b,p)=>{const o=t[p];return o!==void 0&&(b[p]=o),b},{})}const ie=R({name:"QBtnDropdown",props:{...L,...z,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(t,{slots:b,emit:p}){const{proxy:o}=J(),a=Q(t.modelValue),w=Q(null),C=E(),F=q(()=>{const u={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":C.value,"aria-label":t.toggleAriaLabel||o.$q.lang.label[a.value===!0?"collapse":"expand"](t.label)};return(t.disable===!0||t.split===!1&&t.disableMainBtn===!0||t.disableDropdown===!0)&&(u["aria-disabled"]="true"),u}),M=q(()=>"q-btn-dropdown__arrow"+(a.value===!0&&t.noIconAnimation===!1?" rotate-180":"")+(t.split===!1?" q-btn-dropdown__arrow-container":"")),D=q(()=>Y(t)),V=q(()=>se(t));I(()=>t.modelValue,u=>{w.value!==null&&w.value[u?"show":"hide"]()}),I(()=>t.split,S);function T(u){a.value=!0,p("beforeShow",u)}function O(u){p("show",u),p("update:modelValue",!0)}function $(u){a.value=!1,p("beforeHide",u)}function G(u){p("hide",u),p("update:modelValue",!1)}function U(u){p("click",u)}function N(u){K(u),S(),p("click",u)}function W(u){w.value!==null&&w.value.toggle(u)}function x(u){w.value!==null&&w.value.show(u)}function S(u){w.value!==null&&w.value.hide(u)}return Object.assign(o,{show:x,hide:S,toggle:W}),H(()=>{t.modelValue===!0&&x()}),()=>{const u=[c(f,{class:M.value,name:t.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return t.disableDropdown!==!0&&u.push(c(oe,{ref:w,id:C.value,class:t.contentClass,style:t.contentStyle,cover:t.cover,fit:!0,persistent:t.persistent,noRouteDismiss:t.noRouteDismiss,autoClose:t.autoClose,anchor:t.menuAnchor,self:t.menuSelf,offset:t.menuOffset,separateClosePopup:!0,transitionShow:t.transitionShow,transitionHide:t.transitionHide,transitionDuration:t.transitionDuration,onBeforeShow:T,onShow:O,onBeforeHide:$,onHide:G},b.default)),t.split===!1?c(y,{class:"q-btn-dropdown q-btn-dropdown--simple",...V.value,...F.value,disable:t.disable===!0||t.disableMainBtn===!0,noWrap:!0,round:!1,onClick:U},{default:()=>j(b.label,[]).concat(u),loading:b.loading}):c(re,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:t.rounded,square:t.square,...D.value,glossy:t.glossy,stretch:t.stretch},()=>[c(y,{class:"q-btn-dropdown--current",...V.value,disable:t.disable===!0||t.disableMainBtn===!0,noWrap:!0,round:!1,onClick:N},{default:b.label,loading:b.loading}),c(y,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...F.value,...D.value,disable:t.disable===!0||t.disableDropdown===!0,rounded:t.rounded,color:t.color,textColor:t.textColor,dense:t.dense,size:t.size,padding:t.padding,ripple:t.ripple},()=>u)])}}}),fe={class:"flex justify-center items-center gap-2"},be={class:"text-black font-bold m-0"},Be={__name:"AdminLayout",setup(t){const b=Q(!1),p=Q(null);return H(()=>{p.value=localStorage.getItem("lastCheckedTimestamp")||null}),(o,a)=>(s(),i(ne,{view:"lHh Lpr lFf",class:"bg-white"},{default:l(()=>[e(ae,{elevated:"",class:"bg-white text-white"},{default:l(()=>[e(ee,null,{default:l(()=>[e(y,{flat:"",dense:"",round:"","text-color":"black",icon:"menu","aria-label":"Menu",onClick:a[0]||(a[0]=w=>b.value=!b.value),class:"lt-md"}),e(le),k("div",fe,[k("p",be," Welcome! "+X(o.$page.props.auth.user.name),1),e(ie,{flat:"",icon:"account_box",class:"bg-white text-black q-pa-sm",dense:""},{default:l(()=>[e(_,null,{default:l(()=>[e(m(g),{href:o.route("profile.edit")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"manage_accounts"})]),_:1}),e(n,null,{default:l(()=>a[3]||(a[3]=[r("Profile")])),_:1})]),_:1})),[[P]])]),_:1},8,["href"]),e(m(g),{href:o.route("logout"),method:"post"},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"logout"})]),_:1}),e(n,null,{default:l(()=>a[4]||(a[4]=[r("Log Out")])),_:1})]),_:1})),[[P]])]),_:1},8,["href"])]),_:1})]),_:1})])]),_:1})]),_:1}),o.$page.props.auth.user.roles.some(w=>w.name==="admin")?(s(),i(A,{key:0,modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=w=>b.value=w),"show-if-above":"",bordered:"",class:"bg-grey-2"},{default:l(()=>[e(_,null,{default:l(()=>[a[20]||(a[20]=k("img",{src:"/image/Group%201321315097.png",class:"q-mx-auto q-my-md",style:{width:"140.7px",height:"45px"}},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[5]||(a[5]=[r("Menu")])),_:1}),e(m(g),{href:o.route("admin.dashboard")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"dashboard"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[6]||(a[6]=[r("Dashboard")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[21]||(a[21]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[7]||(a[7]=[r("Form")])),_:1}),e(m(g),{href:o.route("admin.application")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[8]||(a[8]=[r("Incoming")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),e(m(g),{href:o.route("admin.application.verified")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[9]||(a[9]=[r("Verified")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),e(m(g),{href:o.route("admin.application.rejected")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[10]||(a[10]=[r("Rejected")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[22]||(a[22]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[11]||(a[11]=[r("Bill")])),_:1}),e(m(g),{href:o.route("admin.bill")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[12]||(a[12]=[r("Bill Pek Tur")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),e(m(g),{href:o.route("admin.bill.process")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[13]||(a[13]=[r("Process To Bank")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[23]||(a[23]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[14]||(a[14]=[r("Report")])),_:1}),e(m(g),{href:o.route("admin.report")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"report"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[15]||(a[15]=[r("Generate Report")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[24]||(a[24]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[16]||(a[16]=[r("Setting")])),_:1}),e(_,{bordered:"",class:"rounded-borders"},{default:l(()=>[e(ue,{"expand-icon":"info","expand-icon-side":"left",label:"Post Information","header-class":"text-weight-bold"},{default:l(()=>[e(_,null,{default:l(()=>[e(m(g),{href:o.route("admin.info.index")},{default:l(()=>[e(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"import_contacts"})]),_:1}),e(n,null,{default:l(()=>a[17]||(a[17]=[r("Information")])),_:1})]),_:1})]),_:1},8,["href"]),e(m(g),{href:o.route("note.index")},{default:l(()=>[e(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>a[18]||(a[18]=[r("Note")])),_:1})]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1}),e(m(g),{href:o.route("user.index")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"people"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[19]||(a[19]=[r("User")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"])]),_:1})]),_:1},8,["modelValue"])):(s(),i(A,{key:1,modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=w=>b.value=w),"show-if-above":"",bordered:"",class:"bg-grey-2"},{default:l(()=>[e(_,null,{default:l(()=>[a[33]||(a[33]=k("img",{src:"/image/Group%201321315097.png",class:"q-mx-auto q-my-md",style:{width:"140.7px",height:"45px"}},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[25]||(a[25]=[r("Menu")])),_:1}),e(m(g),{href:o.route("verifier.dashboard")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"dashboard"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[26]||(a[26]=[r("Dashboard")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[34]||(a[34]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[27]||(a[27]=[r("Form")])),_:1}),e(m(g),{href:o.route("verifier.application")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[28]||(a[28]=[r("Incoming")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),e(m(g),{href:o.route("verifier.verified")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[29]||(a[29]=[r("Verified")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),e(m(g),{href:o.route("verifier.rejected")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"note"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[30]||(a[30]=[r("Rejected")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"]),a[35]||(a[35]=k("hr",{class:"border-border bg-[#F0F0F0]"},null,-1)),e(d,{header:"",class:"text-weight-bold"},{default:l(()=>a[31]||(a[31]=[r("Report")])),_:1}),e(m(g),{href:o.route("verifier.report")},{default:l(()=>[h((s(),i(v,{clickable:""},{default:l(()=>[e(n,{avatar:""},{default:l(()=>[e(f,{name:"receipt"})]),_:1}),e(n,null,{default:l(()=>[e(d,null,{default:l(()=>a[32]||(a[32]=[r("Report")])),_:1})]),_:1})]),_:1})),[[B]])]),_:1},8,["href"])]),_:1})]),_:1},8,["modelValue"])),e(te,null,{default:l(()=>[Z(o.$slots,"default")]),_:3})]),_:3}))}};export{ie as Q,Be as _};
