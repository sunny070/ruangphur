import{c as g,W as f,X as c,aJ as y,a,d as _,h as t,Q as h,b as d,az as q,g as S}from"./app-D2fclaOv.js";import{u as b,a as Q}from"./use-dark-BBWFU1Sc.js";const k=g({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:n}){const i=f(y,c);if(i===c)return console.error("QTimelineEntry needs to be child of QTimeline"),c;const l=a(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),s=a(()=>`q-timeline__dot text-${e.color||i.color}`),u=a(()=>i.layout==="comfortable"&&i.side==="left");return()=>{const r=_(n.default,[]);if(e.body!==void 0&&r.unshift(e.body),e.heading===!0){const v=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},r)];return t("div",{class:"q-timeline__heading"},u.value===!0?v.reverse():v)}let o;e.icon!==void 0?o=[t(h,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(o=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const m=[t("div",{class:"q-timeline__subtitle"},[t("span",{},d(n.subtitle,[e.subtitle]))]),t("div",{class:s.value},o),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},d(n.title,[e.title]))].concat(r))];return t("li",{class:l.value},u.value===!0?m.reverse():m)}}}),x=g({name:"QTimeline",props:{...b,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:n}){const i=S(),l=Q(e,i.proxy.$q);q(y,e);const s=a(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(l.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:s.value},d(n.default))}});export{x as Q,k as a};
