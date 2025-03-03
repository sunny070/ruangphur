import{c as j,d as G,e as U,Q as E,f as O,b as W,a as z}from"./QLayout-CxhaKj2c.js";import{a8 as H,aC as x,bP as J,r as p,c as f,J as X,o as Y,q as Z,be as ee,L as u,at as te,au as ae,R as le,Q as P,av as re,I as oe,U as ne,a as v,b as _,w as o,d as l,g as c,u as C,x as k,h as I,i as B,F as L,f as N,k as g,e as q,E as se,N as ie,t as F}from"./app-DyTi5KuX.js";import{Q as ue}from"./QTabs-lxqZivxn.js";import{b as ce,Q as de,a as be}from"./format-C9iz93YD.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";let me=0;const ve=["click","keydown"],ge={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${me++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function he(e,i,d,m){const t=H(J,x);if(t===x)return console.error("QTab/QRouteTab component needs to be child of QTabs"),x;const{proxy:b}=oe(),r=p(null),n=p(null),w=p(null),$=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),y=f(()=>t.currentModel.value===e.name),D=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(y.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),R=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),A=f(()=>e.disable===!0||t.hasFocus.value===!0||y.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function Q(a,s){if(s!==!0&&r.value!==null&&r.value.focus(),e.disable!==!0){t.updateModel({name:e.name}),d("click",a);return}}function K(a){te(a,[13,32])?Q(a,!0):ae(a)!==!0&&a.keyCode>=35&&a.keyCode<=40&&a.altKey!==!0&&a.metaKey!==!0&&t.onKbdNavigate(a.keyCode,b.$el)===!0&&le(a),d("keydown",a)}function M(){const a=t.tabProps.value.narrowIndicator,s=[],h=u("div",{ref:w,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&s.push(u(P,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&s.push(u("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&s.push(e.alertIcon!==void 0?u(P,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):u("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),a===!0&&s.push(h);const S=[u("div",{class:"q-focus-helper",tabindex:-1,ref:r}),u("div",{class:R.value},re(i.default,s))];return a===!1&&S.push(h),S}const T={name:f(()=>e.name),rootRef:n,tabIndicatorRef:w,routeData:m};X(()=>{t.unregisterTab(T)}),Y(()=>{t.registerTab(T)});function V(a,s){const h={ref:n,class:D.value,tabindex:A.value,role:"tab","aria-selected":y.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:Q,onKeydown:K,...s};return Z(u(a,h,M()),[[ee,$.value]])}return{renderTab:V,$tabs:t}}const pe=ne({name:"QTab",props:ge,emits:ve,setup(e,{slots:i,emit:d}){const{renderTab:m}=he(e,i,d);return()=>m("div")}}),ye={class:"container mx-auto flex justify-between items-center"},xe={class:"column items-center q-gutter-y-md q-pa-md"},_e={class:"row q-gutter-x-lg"},Ce={__name:"WebLayout",setup(e){const i=p(!1),d=[{label:"Home",route:route("home")},{label:"Dilna Form",route:route("form.step1")},{label:"Bill Chuina",route:route("track")},{label:"FAQs",route:route("application.faqs")},{label:"Downloads",route:route("application.download")}],m=()=>{i.value=!i.value},t=()=>{ie.visit(route("login"))};return(b,r)=>(v(),_(z,{view:"lHh Lpr lFf"},{default:o(()=>[l(U,{reveal:"",class:"text-black pl-72 bg-[#E9F4FF]"},{default:o(()=>[c("div",ye,[l(j,null,{default:o(()=>[l(G,{class:"q-ml-lg q-ml-xl-md"},{default:o(()=>[l(C(k),{href:b.route("home")},{default:o(()=>r[1]||(r[1]=[c("img",{src:"/image/Group 1321315097.png",style:{width:"194px",height:"72px"},alt:"Logo"},null,-1)])),_:1},8,["href"])]),_:1}),b.$q.screen.gt.sm?(v(),_(ue,{key:0,"active-color":"black","indicator-color":"black",class:"text-black q-mr-lg q-mr-xl-md pr-72"},{default:o(()=>[(v(),I(L,null,B(d,n=>l(C(k),{key:n.name,href:n.route,method:"get",class:"no-decoration"},{default:o(()=>[l(pe,{name:n.name},{default:o(()=>[q(F(n.label),1)]),_:2},1032,["name"])]),_:2},1032,["href"])),64))]),_:1})):N("",!0),b.$q.screen.lt.md?(v(),_(g,{key:1,flat:"",dense:"",round:"",icon:"menu",onClick:m})):N("",!0)]),_:1})])]),_:1}),l(O,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=n=>i.value=n),side:"right",bordered:""},{default:o(()=>[l(E,null,{default:o(()=>[l(ce,{header:""},{default:o(()=>r[2]||(r[2]=[q("Navigation")])),_:1}),(v(),I(L,null,B(d,n=>l(de,{key:n.name,clickable:""},{default:o(()=>[l(C(k),{href:n.route},{default:o(()=>[l(be,null,{default:o(()=>[q(F(n.label),1)]),_:2},1024)]),_:2},1032,["href"])]),_:2},1024)),64))]),_:1})]),_:1},8,["modelValue"]),l(W,null,{default:o(()=>[se(b.$slots,"default",{},void 0,!0)]),_:3}),c("div",xe,[r[3]||(r[3]=c("div",{class:"flex justify-center items-center gap-6"},[c("img",{src:"/image/Group.png",style:{width:"95px",height:"52px"},alt:"Logo"})],-1)),r[4]||(r[4]=c("a",{class:"text-caption text-center text-grey-8",style:{"max-width":"403px"},href:"https://socialwelfare.mizoram.gov.in/",target:"_blank",rel:"noopener noreferrer"}," An initiative of Department of Social Welfare & Tribal Affairs, Government of Mizoram ",-1)),c("div",_e,[l(g,{flat:"",label:"About Us"}),l(g,{flat:"",label:"Contact Us"}),l(g,{flat:"",label:"Terms & Conditions"}),l(g,{onClick:t,flat:"",label:"Login for Officials"})]),r[5]||(r[5]=c("a",{class:"text-caption text-grey-8 flex flex-col justify-center items-center",href:"https://msegs.in/",target:"_blank",rel:"noopener noreferrer"}," Crafted with care by Mizoram State e-Governance Society (MSeGS) ",-1))])]),_:3}))}},Se=fe(Ce,[["__scopeId","data-v-3d590bef"]]);export{Se as W};
