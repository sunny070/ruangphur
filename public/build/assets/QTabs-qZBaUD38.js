import{U as _e,aZ as U,aM as te,r as v,c as d,A as P,a7 as Ae,J as Re,an as Ie,ao as Be,L as A,ai as Me,Q as ne,bP as ke,I as Pe}from"./app-BHeael7A.js";import{g as $e}from"./QLayout-7wX7CmRM.js";import{r as De}from"./rtl-DFPa-2ov.js";function xe(n,$,D){const b=D===!0?["left","right"]:["top","bottom"];return`absolute-${$===!0?b[0]:b[1]}${n?` text-${n}`:""}`}const Ee=["left","center","right","justify"],We=_e({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:n=>Ee.includes(n)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(n,{slots:$,emit:D}){const{proxy:b}=Pe(),{$q:x}=b,{registerTick:oe}=U(),{registerTick:ae}=U(),{registerTick:le}=U(),{registerTimeout:re,removeTimeout:ie}=te(),{registerTimeout:j,removeTimeout:ue}=te(),y=v(null),s=v(null),T=v(n.modelValue),L=v(!1),E=v(!0),F=v(!1),O=v(!1),c=[],Q=v(0),R=v(!1);let w=null,q=null,h;const se=d(()=>({activeClass:n.activeClass,activeColor:n.activeColor,activeBgColor:n.activeBgColor,indicatorClass:xe(n.indicatorColor,n.switchIndicator,n.vertical),narrowIndicator:n.narrowIndicator,inlineLabel:n.inlineLabel,noCaps:n.noCaps})),ce=d(()=>{const e=Q.value,t=T.value;for(let o=0;o<e;o++)if(c[o].name.value===t)return!0;return!1}),fe=d(()=>`q-tabs__content--align-${L.value===!0?"left":O.value===!0?"justify":n.align}`),ve=d(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${n.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${n.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${n.mobileArrows===!0?"":"out"}-arrows`+(n.dense===!0?" q-tabs--dense":"")+(n.shrink===!0?" col-shrink":"")+(n.stretch===!0?" self-stretch":"")),de=d(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+fe.value+(n.contentClass!==void 0?` ${n.contentClass}`:"")),I=d(()=>n.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),B=d(()=>n.vertical!==!0&&x.lang.rtl===!0),V=d(()=>De===!1&&B.value===!0);P(B,S),P(()=>n.modelValue,e=>{W({name:e,setCurrent:!0,skipEmit:!0})}),P(()=>n.outsideArrows,M);function W({name:e,setCurrent:t,skipEmit:o}){T.value!==e&&(o!==!0&&n["onUpdate:modelValue"]!==void 0&&D("update:modelValue",e),(t===!0||n["onUpdate:modelValue"]===void 0)&&(he(T.value,e),T.value=e))}function M(){oe(()=>{y.value&&G({width:y.value.offsetWidth,height:y.value.offsetHeight})})}function G(e){if(I.value===void 0||s.value===null)return;const t=e[I.value.container],o=Math.min(s.value[I.value.scroll],Array.prototype.reduce.call(s.value.children,(i,l)=>i+(l[I.value.content]||0),0)),r=t>0&&o>t;L.value=r,r===!0&&ae(S),O.value=t<parseInt(n.breakpoint,10)}function he(e,t){const o=e!=null&&e!==""?c.find(i=>i.name.value===e):null,r=t!=null&&t!==""?c.find(i=>i.name.value===t):null;if(k===!0)k=!1;else if(o&&r){const i=o.tabIndicatorRef.value,l=r.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),i.style.transition="none",i.style.transform="none",l.style.transition="none",l.style.transform="none";const a=i.getBoundingClientRect(),u=l.getBoundingClientRect();l.style.transform=n.vertical===!0?`translate3d(0,${a.top-u.top}px,0) scale3d(1,${u.height?a.height/u.height:1},1)`:`translate3d(${a.left-u.left}px,0,0) scale3d(${u.width?a.width/u.width:1},1,1)`,le(()=>{w=setTimeout(()=>{w=null,l.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",l.style.transform="none"},70)})}r&&L.value===!0&&C(r.rootRef.value)}function C(e){const{left:t,width:o,top:r,height:i}=s.value.getBoundingClientRect(),l=e.getBoundingClientRect();let a=n.vertical===!0?l.top-r:l.left-t;if(a<0){s.value[n.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(a),S();return}a+=n.vertical===!0?l.height-i:l.width-o,a>0&&(s.value[n.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(a),S())}function S(){const e=s.value;if(e===null)return;const t=e.getBoundingClientRect(),o=n.vertical===!0?e.scrollTop:Math.abs(e.scrollLeft);B.value===!0?(E.value=Math.ceil(o+t.width)<e.scrollWidth-1,F.value=o>0):(E.value=o>0,F.value=n.vertical===!0?Math.ceil(o+t.height)<e.scrollHeight:Math.ceil(o+t.width)<e.scrollWidth)}function K(e){q!==null&&clearInterval(q),q=setInterval(()=>{be(e)===!0&&g()},5)}function N(){K(V.value===!0?Number.MAX_SAFE_INTEGER:0)}function X(){K(V.value===!0?0:Number.MAX_SAFE_INTEGER)}function g(){q!==null&&(clearInterval(q),q=null)}function ge(e,t){const o=Array.prototype.filter.call(s.value.children,u=>u===t||u.matches&&u.matches(".q-tab.q-focusable")===!0),r=o.length;if(r===0)return;if(e===36)return C(o[0]),o[0].focus(),!0;if(e===35)return C(o[r-1]),o[r-1].focus(),!0;const i=e===(n.vertical===!0?38:37),l=e===(n.vertical===!0?40:39),a=i===!0?-1:l===!0?1:void 0;if(a!==void 0){const u=B.value===!0?-1:1,f=o.indexOf(t)+a*u;return f>=0&&f<r&&(C(o[f]),o[f].focus({preventScroll:!0})),!0}}const me=d(()=>V.value===!0?{get:e=>Math.abs(e.scrollLeft),set:(e,t)=>{e.scrollLeft=-t}}:n.vertical===!0?{get:e=>e.scrollTop,set:(e,t)=>{e.scrollTop=t}}:{get:e=>e.scrollLeft,set:(e,t)=>{e.scrollLeft=t}});function be(e){const t=s.value,{get:o,set:r}=me.value;let i=!1,l=o(t);const a=e<l?-1:1;return l+=a*5,l<0?(i=!0,l=0):(a===-1&&l<=e||a===1&&l>=e)&&(i=!0,l=e),r(t,l),S(),i}function J(e,t){for(const o in e)if(e[o]!==t[o])return!1;return!0}function Te(){let e=null,t={matchedLen:0,queryDiff:9999,hrefLen:0};const o=c.filter(a=>a.routeData!==void 0&&a.routeData.hasRouterLink.value===!0),{hash:r,query:i}=b.$route,l=Object.keys(i).length;for(const a of o){const u=a.routeData.exact.value===!0;if(a.routeData[u===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:f,query:z,matched:Ce,href:Se}=a.routeData.resolvedLink.value,H=Object.keys(z).length;if(u===!0){if(f!==r||H!==l||J(i,z)===!1)continue;e=a.name.value;break}if(f!==""&&f!==r||H!==0&&J(z,i)===!1)continue;const m={matchedLen:Ce.length,queryDiff:l-H,hrefLen:Se.length-f.length};if(m.matchedLen>t.matchedLen){e=a.name.value,t=m;continue}else if(m.matchedLen!==t.matchedLen)continue;if(m.queryDiff<t.queryDiff)e=a.name.value,t=m;else if(m.queryDiff!==t.queryDiff)continue;m.hrefLen>t.hrefLen&&(e=a.name.value,t=m)}if(e===null&&c.some(a=>a.routeData===void 0&&a.name.value===T.value)===!0){k=!1;return}W({name:e,setCurrent:!0})}function we(e){if(ie(),R.value!==!0&&y.value!==null&&e.target&&typeof e.target.closest=="function"){const t=e.target.closest(".q-tab");t&&y.value.contains(t)===!0&&(R.value=!0,L.value===!0&&C(t))}}function ye(){re(()=>{R.value=!1},30)}function _(){Y.avoidRouteWatcher===!1?j(Te):ue()}function Z(){if(h===void 0){const e=P(()=>b.$route.fullPath,_);h=()=>{e(),h=void 0}}}function Le(e){c.push(e),Q.value++,M(),e.routeData===void 0||b.$route===void 0?j(()=>{if(L.value===!0){const t=T.value,o=t!=null&&t!==""?c.find(r=>r.name.value===t):null;o&&C(o.rootRef.value)}}):(Z(),e.routeData.hasRouterLink.value===!0&&_())}function qe(e){c.splice(c.indexOf(e),1),Q.value--,M(),h!==void 0&&e.routeData!==void 0&&(c.every(t=>t.routeData===void 0)===!0&&h(),_())}const Y={currentModel:T,tabProps:se,hasFocus:R,hasActiveTab:ce,registerTab:Le,unregisterTab:qe,verifyRouteModel:_,updateModel:W,onKbdNavigate:ge,avoidRouteWatcher:!1};Ae(ke,Y);function p(){w!==null&&clearTimeout(w),g(),h!==void 0&&h()}let ee,k;return Re(p),Ie(()=>{ee=h!==void 0,p()}),Be(()=>{ee===!0&&(Z(),k=!0,_()),M()}),()=>A("div",{ref:y,class:ve.value,role:"tablist",onFocusin:we,onFocusout:ye},[A($e,{onResize:G}),A("div",{ref:s,class:de.value,onScroll:S},Me($.default)),A(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:n.leftIcon||x.iconSet.tabs[n.vertical===!0?"up":"left"],onMousedownPassive:N,onTouchstartPassive:N,onMouseupPassive:g,onMouseleavePassive:g,onTouchendPassive:g}),A(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:n.rightIcon||x.iconSet.tabs[n.vertical===!0?"down":"right"],onMousedownPassive:X,onTouchstartPassive:X,onMouseupPassive:g,onMouseleavePassive:g,onTouchendPassive:g})])}});export{We as Q};
