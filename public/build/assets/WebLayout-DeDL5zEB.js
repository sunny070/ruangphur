import{au as j,aH as y,by as K,r as C,c as f,R as L,o as M,l as V,bn as G,D as d,ao as H,b2 as E,aa as O,j as S,V as U,H as z,C as W,a6 as J,a as p,b as T,w as r,i as o,f as s,x as u,y as c,g as F,d as g,F as X,e as Y,B as Z}from"./app-jSku1vCx.js";import{Q as ee}from"./QTabs-BCaq7a8S.js";import{a as te,Q as ae}from"./QLayout-Cja8Z5W6.js";let ne=0;const oe=["click","keydown"],le={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ne++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function re(e,l,a,b){const t=j(K,y);if(t===y)return console.error("QTab/QRouteTab component needs to be child of QTabs"),y;const{proxy:P}=z(),h=C(null),k=C(null),_=C(null),Q=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=f(()=>t.currentModel.value===e.name),D=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),I=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),N=f(()=>e.disable===!0||t.hasFocus.value===!0||x.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function q(n,i){if(i!==!0&&h.value!==null&&h.value.focus(),e.disable!==!0){t.updateModel({name:e.name}),a("click",n);return}}function $(n){H(n,[13,32])?q(n,!0):E(n)!==!0&&n.keyCode>=35&&n.keyCode<=40&&n.altKey!==!0&&n.metaKey!==!0&&t.onKbdNavigate(n.keyCode,P.$el)===!0&&O(n),a("keydown",n)}function A(){const n=t.tabProps.value.narrowIndicator,i=[],v=d("div",{ref:_,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(d(S,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(d("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?d(S,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):d("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),n===!0&&i.push(v);const B=[d("div",{class:"q-focus-helper",tabindex:-1,ref:h}),d("div",{class:I.value},U(l.default,i))];return n===!1&&B.push(v),B}const w={name:f(()=>e.name),rootRef:k,tabIndicatorRef:_,routeData:b};L(()=>{t.unregisterTab(w)}),M(()=>{t.registerTab(w)});function R(n,i){const v={ref:k,class:D.value,tabindex:N.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:$,...i};return V(d(n,v,A()),[[G,Q.value]])}return{renderTab:R,$tabs:t}}const m=W({name:"QTab",props:le,emits:oe,setup(e,{slots:l,emit:a}){const{renderTab:b}=re(e,l,a);return()=>b("div")}}),se={class:"bg-[#E9F4FF] grid grid-cols-2 gap-2 py-10 lg:grid-cols-3"},ie={class:""},ue={key:0,class:"flex flex-1 justify-end"},ce={class:"py-16 text-center text-sm text-black dark:text-white/70"},de={class:"flex justify-center items-center gap-16 text-[12px] text-[#5B656F]"},ve={__name:"WebLayout",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(e){return(l,a)=>{const b=J("q-container");return p(),T(ae,null,{default:r(()=>[o(b,null,{default:r(()=>[s("header",se,[a[1]||(a[1]=s("div",{class:"md:pl-[223px] md:pr-[55px]"},[s("img",{id:"background",class:"w-[194px] h-[72px]",src:"/image/Group 1321315097.png"})],-1)),s("nav",ie,[o(ee,{class:"text-black"},{default:r(()=>[o(u(c),{href:l.route("home")},{default:r(()=>[o(m,{name:"Home",label:"Home",to:{name:"home"}})]),_:1},8,["href"]),o(u(c),{href:l.route("form.step1")},{default:r(()=>[o(m,{name:"Dilna Form",label:"Dilna Form",to:{name:"form.step1"}})]),_:1},8,["href"]),o(u(c),{href:l.route("track")},{default:r(()=>[o(m,{name:"Bill Chuina",label:"Bill Chuina",to:{name:"track"}})]),_:1},8,["href"]),o(u(c),{href:l.route("application.faqs")},{default:r(()=>[o(m,{name:"fAQs",label:"fAQs",to:{name:"application.faqs"}})]),_:1},8,["href"]),o(u(c),{href:l.route("application.download")},{default:r(()=>[o(m,{name:"Downloads",label:"Downloads",to:{name:"application.download"}})]),_:1},8,["href"])]),_:1})]),e.canLogin?(p(),F("nav",ue,[l.$page.props.auth.user?(p(),T(u(c),{key:0,href:l.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:r(()=>a[0]||(a[0]=[g(" Dashboard ")])),_:1},8,["href"])):(p(),F(X,{key:1},[],64))])):Y("",!0)]),o(te,null,{default:r(()=>[Z(l.$slots,"default")]),_:3}),s("footer",ce,[a[5]||(a[5]=s("div",{class:"flex justify-center items-center flex-col"},[s("img",{id:"background",class:"w-[95px] h-[52px]",src:"/image/Group.png"}),s("p",{class:"text-[#5B656F] text-center font-[Noto Sans] text-[12px] font-medium leading-[18px] w-[403px] h-[36px]"}," An initiative of Department of Social Welfare & Tribal Affairs, Government of Mizoram ")],-1)),s("div",de,[o(u(c),null,{default:r(()=>a[2]||(a[2]=[g("About Us")])),_:1}),o(u(c),null,{default:r(()=>a[3]||(a[3]=[g("Contact Us")])),_:1}),o(u(c),{href:l.route("login")},{default:r(()=>a[4]||(a[4]=[g("Login for Officials")])),_:1},8,["href"])]),a[6]||(a[6]=s("p",{class:"text-[12px] text-[#5B656F]"}," Crafted with care by Mizoram State e-Governance Society (MSeGS) ",-1))])]),_:3})]),_:3})}}};export{ve as _};
