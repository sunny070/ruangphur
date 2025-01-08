import{u as Ue,a as Ye,d as pe,Q as je}from"./QBtn-BHeDikcP.js";import{Q as be}from"./QAvatar-Pu7yz_NV.js";import{c as j,a as f,h as O,M as Ke,O as F,P as Ge,Q as Je,R as U,S as re,U as ge,V as ue,W as se,X as le,s as Ze,Y as Te,_ as E,$ as _e,r as _,w as g,n as ye,b as et,f as Pe,G as tt,g as Oe,a0 as at,u as ot,q as rt,v as b,B as p,A as S,x as M,y as ut,K as lt}from"./app-CgOXxXM8.js";import{h as de,c as we,b as nt,Q as it,d as st,e as dt,f as ft}from"./QLayout-CBaEUiZH.js";import{c as ct,u as vt,a as mt,b as ht,d as pt,e as bt,f as gt}from"./use-prevent-scroll-KsRSRYYf.js";import{b as Y}from"./format-CJebrXOQ.js";import{_ as W,a as yt,b as Ce}from"./DropdownLink-g5DaK_zd.js";import{_ as wt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const qe=j({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:r}){const n=f(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>O("div",{class:n.value},de(r.default))}}),ke=j({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:r}){const n=f(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>O("div",{class:n.value,role:"toolbar"},de(r.default))}}),fe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(fe);fe.all=!0;function xe(t){const r={};for(const n of Ct)t[n]===!0&&(r[n]=!0);return Object.keys(r).length===0?fe:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const qt=["INPUT","TEXTAREA"];function Be(t,r){return r.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof r.handler=="function"&&qt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(r.uid)===-1)}function ne(t,r,n){const y=se(t);let e,a=y.left-r.event.x,u=y.top-r.event.y,c=Math.abs(a),v=Math.abs(u);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?e=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=u<0?"up":"down":d.up===!0&&u<0?(e="up",c>v&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.down===!0&&u>0?(e="down",c>v&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.left===!0&&a<0?(e="left",c<v&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down"))):d.right===!0&&a>0&&(e="right",c<v&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down")));let l=!1;if(e===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,l=!0,e==="left"||e==="right"?(y.left-=a,c=0,a=0):(y.top-=u,v=0,u=0)}return{synthetic:l,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:y,direction:e,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:c,y:v},offset:{x:a,y:u},delta:{x:y.left-r.event.lastX,y:y.top-r.event.lastY}}}}let kt=0;const ie=Ke({name:"touch-pan",beforeMount(t,{value:r,modifiers:n}){if(n.mouse!==!0&&F.has.touch!==!0)return;function y(a,u){n.mouse===!0&&u===!0?Ze(a):(n.stop===!0&&ue(a),n.prevent===!0&&ge(a))}const e={uid:"qvtp_"+kt++,handler:r,modifiers:n,direction:xe(n),noop:Ge,mouseStart(a){Be(a,e)&&Je(a)&&(U(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Be(a,e)){const u=a.target;U(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,u){if(F.is.firefox===!0&&re(t,!0),e.lastEvt=a,u===!0||n.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ge(d),a.cancelBubble===!0&&ue(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:d}}ue(a)}const{left:c,top:v}=se(a);e.event={x:c,y:v,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:v}},move(a){if(e.event===void 0)return;const u=se(a),c=u.left-e.event.x,v=u.top-e.event.y;if(c===0&&v===0)return;e.lastEvt=a;const d=e.event.mouse===!0,l=()=>{y(a,d);let k;n.preserveCursor!==!0&&n.preservecursor!==!0&&(k=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ct(),e.styleCleanup=m=>{if(e.styleCleanup=void 0,k!==void 0&&(document.documentElement.style.cursor=k),document.body.classList.remove("non-selectable"),d===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{C(),m()},50):C()}else m!==void 0&&m()}};if(e.event.detected===!0){e.event.isFirst!==!0&&y(a,e.event.mouse);const{payload:k,synthetic:m}=ne(a,e,!1);k!==void 0&&(e.handler(k)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&l(),e.event.lastX=k.position.left,e.event.lastY=k.position.top,e.event.lastDir=m===!0?void 0:k.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){l(),e.event.detected=!0,e.move(a);return}const B=Math.abs(c),q=Math.abs(v);B!==q&&(e.direction.horizontal===!0&&B>q||e.direction.vertical===!0&&B<q||e.direction.up===!0&&B<q&&v<0||e.direction.down===!0&&B<q&&v>0||e.direction.left===!0&&B>q&&c<0||e.direction.right===!0&&B>q&&c>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,u){if(e.event!==void 0){if(le(e,"temp"),F.is.firefox===!0&&re(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ne(a===void 0?e.lastEvt:a,e).payload);const{payload:c}=ne(a===void 0?e.lastEvt:a,e,!0),v=()=>{e.handler(c)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";U(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}F.has.touch===!0&&U(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const n=t.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=xe(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),le(r,"main"),le(r,"temp"),F.is.firefox===!0&&re(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}}),De=150,Se=j({name:"QDrawer",inheritAttrs:!1,props:{...vt,...Ue,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...mt,"onLayout","miniState"],setup(t,{slots:r,emit:n,attrs:y}){const e=Oe(),{proxy:{$q:a}}=e,u=Ye(t,a),{preventBodyScroll:c}=gt(),{registerTimeout:v,removeTimeout:d}=ht(),l=Te(_e,E);if(l===E)return console.error("QDrawer needs to be child of QLayout"),E;let B,q=null,k;const m=_(t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint),C=f(()=>t.mini===!0&&m.value!==!0),w=f(()=>C.value===!0?t.miniWidth:t.width),h=_(t.showIfAbove===!0&&m.value===!1?!0:t.modelValue===!0),H=f(()=>t.persistent!==!0&&(m.value===!0||$e.value===!0));function R(o,s){if(K(),o!==!1&&l.animate(),T(0),m.value===!0){const D=l.instances[N.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),L(1),l.isContainer.value!==!0&&c(!0)}else L(0),o!==!1&&te(!1);v(()=>{o!==!1&&te(!0),s!==!0&&n("show",o)},De)}function Q(o,s){Le(),o!==!1&&l.animate(),L(0),T(A.value*w.value),ae(),s!==!0?v(()=>{n("hide",o)},De):d()}const{show:i,hide:x}=pt({showing:h,hideOnRouteChange:H,handleShow:R,handleHide:Q}),{addToHistory:K,removeFromHistory:Le}=bt(h,x,H),I={belowBreakpoint:m,hide:x},P=f(()=>t.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ce=_(0),V=_(!1),G=_(!1),ve=_(w.value*A.value),N=f(()=>P.value===!0?"left":"right"),J=f(()=>h.value===!0&&m.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),Z=f(()=>t.overlay===!0||t.miniToOverlay===!0||l.view.value.indexOf(P.value?"R":"L")!==-1||a.platform.is.ios===!0&&l.isContainer.value===!0),z=f(()=>t.overlay===!1&&h.value===!0&&m.value===!1),$e=f(()=>t.overlay===!0&&h.value===!0&&m.value===!1),Me=f(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&V.value===!1?" hidden":"")),Ae=f(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),me=f(()=>P.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Ve=f(()=>P.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ee=f(()=>{const o={};return l.header.space===!0&&me.value===!1&&(Z.value===!0?o.top=`${l.header.offset}px`:l.header.space===!0&&(o.top=`${l.header.size}px`)),l.footer.space===!0&&Ve.value===!1&&(Z.value===!0?o.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(o.bottom=`${l.footer.size}px`)),o}),Qe=f(()=>{const o={width:`${w.value}px`,transform:`translateX(${ve.value}px)`};return m.value===!0?o:Object.assign(o,Ee.value)}),ze=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Fe=f(()=>`q-drawer q-drawer--${t.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(V.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(Z.value===!0||z.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(me.value===!0?" q-drawer--top-padding":""))),We=f(()=>{const o=a.lang.rtl===!0?t.side:N.value;return[[ie,Ne,void 0,{[o]:!0,mouse:!0}]]}),He=f(()=>{const o=a.lang.rtl===!0?N.value:t.side;return[[ie,he,void 0,{[o]:!0,mouse:!0}]]}),Re=f(()=>{const o=a.lang.rtl===!0?N.value:t.side;return[[ie,he,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ee(){Xe(m,t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint)}g(m,o=>{o===!0?(B=h.value,h.value===!0&&x(!1)):t.overlay===!1&&t.behavior!=="mobile"&&B!==!1&&(h.value===!0?(T(0),L(0),ae()):i(!1))}),g(()=>t.side,(o,s)=>{l.instances[s]===I&&(l.instances[s]=void 0,l[s].space=!1,l[s].offset=0),l.instances[o]=I,l[o].size=w.value,l[o].space=z.value,l[o].offset=J.value}),g(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ee()}),g(()=>t.behavior+t.breakpoint,ee),g(l.isContainer,o=>{h.value===!0&&c(o!==!0),o===!0&&ee()}),g(l.scrollbarWidth,()=>{T(h.value===!0?0:void 0)}),g(J,o=>{$("offset",o)}),g(z,o=>{n("onLayout",o),$("space",o)}),g(P,()=>{T()}),g(w,o=>{T(),oe(t.miniToOverlay,o)}),g(()=>t.miniToOverlay,o=>{oe(o,w.value)}),g(()=>a.lang.rtl,()=>{T()}),g(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ie(),l.animate())}),g(C,o=>{n("miniState",o)});function T(o){o===void 0?ye(()=>{o=h.value===!0?0:w.value,T(A.value*o)}):(l.isContainer.value===!0&&P.value===!0&&(m.value===!0||Math.abs(o)===w.value)&&(o+=A.value*l.scrollbarWidth.value),ve.value=o)}function L(o){ce.value=o}function te(o){const s=o===!0?"remove":l.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Ie(){q!==null&&clearTimeout(q),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,q=setTimeout(()=>{q=null,G.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(o){if(h.value!==!1)return;const s=w.value,D=Y(o.distance.x,0,s);if(o.isFinal===!0){D>=Math.min(75,s)===!0?i():(l.animate(),L(0),T(A.value*s)),V.value=!1;return}T((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(s-D,0):Math.min(0,D-s)),L(Y(D/s,0,1)),o.isFirst===!0&&(V.value=!0)}function he(o){if(h.value!==!0)return;const s=w.value,D=o.direction===t.side,X=(a.lang.rtl===!0?D!==!0:D)?Y(o.distance.x,0,s):0;if(o.isFinal===!0){Math.abs(X)<Math.min(75,s)===!0?(l.animate(),L(1),T(0)):x(),V.value=!1;return}T(A.value*X),L(Y(1-X/s,0,1)),o.isFirst===!0&&(V.value=!0)}function ae(){c(!1),te(!0)}function $(o,s){l.update(t.side,o,s)}function Xe(o,s){o.value!==s&&(o.value=s)}function oe(o,s){$("size",o===!0?t.miniWidth:s)}return l.instances[t.side]=I,oe(t.miniToOverlay,w.value),$("space",z.value),$("offset",J.value),t.showIfAbove===!0&&t.modelValue!==!0&&h.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),et(()=>{n("onLayout",z.value),n("miniState",C.value),B=t.showIfAbove===!0;const o=()=>{(h.value===!0?R:Q)(!1,!0)};if(l.totalWidth.value!==0){ye(o);return}k=g(l.totalWidth,()=>{k(),k=void 0,h.value===!1&&t.showIfAbove===!0&&m.value===!1?i(!1):o()})}),Pe(()=>{k!==void 0&&k(),q!==null&&(clearTimeout(q),q=null),h.value===!0&&ae(),l.instances[t.side]===I&&(l.instances[t.side]=void 0,$("size",0),$("offset",0),$("space",!1))}),()=>{const o=[];m.value===!0&&(t.noSwipeOpen===!1&&o.push(tt(O("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),We.value)),o.push(we("div",{ref:"backdrop",class:Me.value,style:Ae.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",t.noSwipeBackdrop!==!0&&h.value===!0,()=>Re.value)));const s=C.value===!0&&r.mini!==void 0,D=[O("div",{...y,key:""+s,class:[ze.value,y.class]},s===!0?r.mini():de(r.default))];return t.elevated===!0&&h.value===!0&&D.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(we("aside",{ref:"content",class:Fe.value,style:Qe.value},D,"contentclose",t.noSwipeClose!==!0&&m.value===!0,()=>He.value)),O("div",{class:"q-drawer-container"},o)}}}),xt=j({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:r,emit:n}){const{proxy:{$q:y}}=Oe(),e=Te(_e,E);if(e===E)return console.error("QFooter needs to be child of QLayout"),E;const a=_(parseInt(t.heightHint,10)),u=_(!0),c=_(at.value===!0||e.isContainer.value===!0?0:window.innerHeight),v=f(()=>t.reveal===!0||e.view.value.indexOf("F")!==-1||y.platform.is.ios&&e.isContainer.value===!0),d=f(()=>e.isContainer.value===!0?e.containerHeight.value:c.value),l=f(()=>{if(t.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?a.value:0;const i=e.scroll.value.position+d.value+a.value-e.height.value;return i>0?i:0}),B=f(()=>t.modelValue!==!0||v.value===!0&&u.value!==!0),q=f(()=>t.modelValue===!0&&B.value===!0&&t.reveal===!0),k=f(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(B.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),m=f(()=>{const i=e.rows.value.bottom,x={};return i[0]==="l"&&e.left.space===!0&&(x[y.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),i[2]==="r"&&e.right.space===!0&&(x[y.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),x});function C(i,x){e.update("footer",i,x)}function w(i,x){i.value!==x&&(i.value=x)}function h({height:i}){w(a,i),C("size",i)}function H(){if(t.reveal!==!0)return;const{direction:i,position:x,inflectionPoint:K}=e.scroll.value;w(u,i==="up"||x-K<100||e.height.value-d.value-x-a.value<300)}function R(i){q.value===!0&&w(u,!0),n("focusin",i)}g(()=>t.modelValue,i=>{C("space",i),w(u,!0),e.animate()}),g(l,i=>{C("offset",i)}),g(()=>t.reveal,i=>{i===!1&&w(u,t.modelValue)}),g(u,i=>{e.animate(),n("reveal",i)}),g([a,e.scroll,e.height],H),g(()=>y.screen.height,i=>{e.isContainer.value!==!0&&w(c,i)});const Q={};return e.instances.footer=Q,t.modelValue===!0&&C("size",a.value),C("space",t.modelValue),C("offset",l.value),Pe(()=>{e.instances.footer===Q&&(e.instances.footer=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const i=nt(r.default,[O(it,{debounce:0,onResize:h})]);return t.elevated===!0&&i.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),O("footer",{class:k.value,style:m.value,onFocusin:R},i)}}}),Bt={class:"flex flex-col items-start p-4 text-lg"},Dt={class:"flex flex-col p-4 space-y-2 text-base"},St={class:"flex items-center bg-gray-800 text-white rounded-lg p-2"},Tt={class:"q-pa-md"},_t={__name:"AppLayout",setup(t){const r=_(!1),n=_(!1),y=()=>{r.value=!r.value},e=()=>{n.value=!n.value};return(a,u)=>(ot(),rt(ft,{view:"hHh lpR fFf"},{default:b(()=>[p(st,{bordered:"",class:"bg-gray-800 text-white"},{default:b(()=>[p(ke,null,{default:b(()=>[p(pe,{dense:"",flat:"",round:"",icon:"menu",onClick:y}),p(qe,{class:"flex items-center gap-2"},{default:b(()=>[p(be,null,{default:b(()=>u[2]||(u[2]=[S("img",{src:"/images/pwd-logo.svg",alt:"PWD Logo"},null,-1)])),_:1}),u[3]||(u[3]=S("div",null,[S("h1",{class:"text-lg font-bold"},"Public Works Department"),S("p",{class:"text-sm"},"Government Recruitment Portal")],-1))]),_:1}),p(pe,{dense:"",flat:"",round:"",icon:"account_circle",onClick:e})]),_:1})]),_:1}),p(Se,{"show-if-above":"",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=c=>r.value=c),side:"left",bordered:"",class:"bg-gray-800 text-white"},{default:b(()=>[S("div",Bt,[p(W,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:b(()=>u[4]||(u[4]=[M(" Dashboard ")])),_:1},8,["href","active"]),p(W,{href:a.route("application"),active:a.route().current("application")},{default:b(()=>u[5]||(u[5]=[M(" Applications ")])),_:1},8,["href","active"]),p(W,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:b(()=>u[6]||(u[6]=[M(" Post ")])),_:1},8,["href","active"]),p(W,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:b(()=>u[7]||(u[7]=[M(" Document ")])),_:1},8,["href","active"]),p(W,{href:a.route("dashboard"),active:a.route().current("dashboard")},{default:b(()=>u[8]||(u[8]=[M(" Job Posting ")])),_:1},8,["href","active"])])]),_:1},8,["modelValue"]),p(Se,{"show-if-above":"",modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=c=>n.value=c),side:"right",bordered:""},{default:b(()=>[S("div",Dt,[p(yt,{align:"right",width:"48"},{trigger:b(()=>[S("button",St,[S("span",null,ut(a.$page.props.auth.user.name),1),p(je,{name:"expand_more"})])]),content:b(()=>[p(Ce,{href:a.route("profile.edit")},{default:b(()=>u[9]||(u[9]=[M(" Profile ")])),_:1},8,["href"]),p(Ce,{href:a.route("logout"),method:"post",as:"button"},{default:b(()=>u[10]||(u[10]=[M(" Log Out ")])),_:1},8,["href"])]),_:1})])]),_:1},8,["modelValue"]),p(dt,null,{default:b(()=>[S("div",Tt,[lt(a.$slots,"default",{},void 0,!0)])]),_:3}),p(xt,{elevated:"",class:"bg-gray-800 text-white"},{default:b(()=>[p(ke,{class:"flex justify-between"},{default:b(()=>[p(qe,{class:"flex items-center gap-2"},{default:b(()=>[p(be,null,{default:b(()=>u[11]||(u[11]=[S("img",{src:"/images/pwd-logo.svg",alt:"PWD Logo"},null,-1)])),_:1}),u[12]||(u[12]=S("div",null,[S("h2",{class:"text-lg font-bold"},"Public Works Department"),S("p",{class:"text-sm"},"Government Recruitment Portal")],-1))]),_:1}),u[13]||(u[13]=S("div",{class:"text-sm"}," © 2024 Public Works Department, All Rights Reserved. ",-1))]),_:1})]),_:1})]),_:3}))}},zt=wt(_t,[["__scopeId","data-v-cec8f32d"]]);export{zt as A};
