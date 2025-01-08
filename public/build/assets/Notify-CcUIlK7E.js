import{k as v,r as w,ap as $,aq as q,c as O,h as n,ar as T}from"./app-CgOXxXM8.js";import{Q as N}from"./QAvatar-Pu7yz_NV.js";import{i as j,Q as S,d as D}from"./QBtn-BHeDikcP.js";import{c as L}from"./nodes-FMmXF0YR.js";let k=0;const f={},g={},l={},b={},Q=/^\s*$/,_=[],P=[void 0,null,!0,!1,""],h=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],M=["top-left","top-right","bottom-left","bottom-right"],m={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function C(e,o,i){if(!e)return p("parameter required");let s;const t={textColor:"white"};if(e.ignoreDefaults!==!0&&Object.assign(t,f),v(e)===!1&&(t.type&&Object.assign(t,m[t.type]),e={message:e}),Object.assign(t,m[e.type||t.type],e),typeof t.icon=="function"&&(t.icon=t.icon(o)),t.spinner?(t.spinner===!0&&(t.spinner=j),t.spinner=q(t.spinner)):t.spinner=!1,t.meta={hasMedia:!!(t.spinner!==!1||t.icon||t.avatar),hasText:y(t.message)||y(t.caption)},t.position){if(h.includes(t.position)===!1)return p("wrong position",e)}else t.position="bottom";if(P.includes(t.timeout)===!0)t.timeout=5e3;else{const a=Number(t.timeout);if(isNaN(a)||a<0)return p("wrong timeout",e);t.timeout=Number.isFinite(a)?a:0}t.timeout===0?t.progress=!1:t.progress===!0&&(t.meta.progressClass="q-notification__progress"+(t.progressClass?` ${t.progressClass}`:""),t.meta.progressStyle={animationDuration:`${t.timeout+1e3}ms`});const r=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray(f.actions)===!0?f.actions:[]).concat(m[e.type]!==void 0&&Array.isArray(m[e.type].actions)===!0?m[e.type].actions:[]),{closeBtn:c}=t;if(c&&r.push({label:typeof c=="string"?c:o.lang.label.close}),t.actions=r.map(({handler:a,noDismiss:d,...x})=>({flat:!0,...x,onClick:typeof a=="function"?()=>{a(),d!==!0&&u()}:()=>{u()}})),t.multiLine===void 0&&(t.multiLine=t.actions.length>1),Object.assign(t.meta,{class:`q-notification row items-stretch q-notification--${t.multiLine===!0?"multi-line":"standard"}`+(t.color!==void 0?` bg-${t.color}`:"")+(t.textColor!==void 0?` text-${t.textColor}`:"")+(t.classes!==void 0?` ${t.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(t.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(t.multiLine===!0?"":" col"),leftClass:t.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...t.attrs}}),t.group===!1?(t.group=void 0,t.meta.group=void 0):((t.group===void 0||t.group===!0)&&(t.group=[t.message,t.caption,t.multiline].concat(t.actions.map(a=>`${a.label}*${a.icon}`)).join("|")),t.meta.group=t.group+"|"+t.position),t.actions.length===0?t.actions=void 0:t.meta.actionsClass="q-notification__actions row items-center "+(t.multiLine===!0?"justify-end":"col-auto")+(t.meta.hasMedia===!0?" q-notification__actions--with-media":""),i!==void 0){i.notif.meta.timer&&(clearTimeout(i.notif.meta.timer),i.notif.meta.timer=void 0),t.meta.uid=i.notif.meta.uid;const a=l[t.position].value.indexOf(i.notif);l[t.position].value[a]=t}else{const a=g[t.meta.group];if(a===void 0){if(t.meta.uid=k++,t.meta.badge=1,["left","right","center"].indexOf(t.position)!==-1)l[t.position].value.splice(Math.floor(l[t.position].value.length/2),0,t);else{const d=t.position.indexOf("top")!==-1?"unshift":"push";l[t.position].value[d](t)}t.group!==void 0&&(g[t.meta.group]=t)}else{if(a.meta.timer&&(clearTimeout(a.meta.timer),a.meta.timer=void 0),t.badgePosition!==void 0){if(M.includes(t.badgePosition)===!1)return p("wrong badgePosition",e)}else t.badgePosition=`top-${t.position.indexOf("left")!==-1?"right":"left"}`;t.meta.uid=a.meta.uid,t.meta.badge=a.meta.badge+1,t.meta.badgeClass=`q-notification__badge q-notification__badge--${t.badgePosition}`+(t.badgeColor!==void 0?` bg-${t.badgeColor}`:"")+(t.badgeTextColor!==void 0?` text-${t.badgeTextColor}`:"")+(t.badgeClass?` ${t.badgeClass}`:"");const d=l[t.position].value.indexOf(a);l[t.position].value[d]=g[t.meta.group]=t}}const u=()=>{z(t),s=void 0};if(t.timeout>0&&(t.meta.timer=setTimeout(()=>{t.meta.timer=void 0,u()},t.timeout+1e3)),t.group!==void 0)return a=>{a!==void 0?p("trying to update a grouped one which is forbidden",e):u()};if(s={dismiss:u,config:e,notif:t},i!==void 0){Object.assign(i,s);return}return a=>{if(s!==void 0)if(a===void 0)s.dismiss();else{const d=Object.assign({},s.config,a,{group:!1,position:t.position});C(d,o,s)}}}function z(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);const o=l[e.position].value.indexOf(e);if(o!==-1){e.group!==void 0&&delete g[e.meta.group];const i=_[""+e.meta.uid];if(i){const{width:s,height:t}=getComputedStyle(i);i.style.left=`${i.offsetLeft}px`,i.style.width=s,i.style.height=t}l[e.position].value.splice(o,1),typeof e.onDismiss=="function"&&e.onDismiss()}}function y(e){return e!=null&&Q.test(e)!==!0}function p(e,o){return console.error(`Notify: ${e}`,o),!1}function B(){return O({name:"QNotifications",devtools:{hide:!0},setup(){return()=>n("div",{class:"q-notifications"},h.map(e=>n(T,{key:e,class:b[e],tag:"div",name:`q-notification--${e}`},()=>l[e].value.map(o=>{const i=o.meta,s=[];if(i.hasMedia===!0&&(o.spinner!==!1?s.push(n(o.spinner,{class:"q-notification__spinner q-notification__spinner--"+i.leftClass,color:o.spinnerColor,size:o.spinnerSize})):o.icon?s.push(n(S,{class:"q-notification__icon q-notification__icon--"+i.leftClass,name:o.icon,color:o.iconColor,size:o.iconSize,role:"img"})):o.avatar&&s.push(n(N,{class:"q-notification__avatar q-notification__avatar--"+i.leftClass},()=>n("img",{src:o.avatar,"aria-hidden":"true"})))),i.hasText===!0){let r;const c={class:"q-notification__message col"};if(o.html===!0)c.innerHTML=o.caption?`<div>${o.message}</div><div class="q-notification__caption">${o.caption}</div>`:o.message;else{const u=[o.message];r=o.caption?[n("div",u),n("div",{class:"q-notification__caption"},[o.caption])]:u}s.push(n("div",c,r))}const t=[n("div",{class:i.contentClass},s)];return o.progress===!0&&t.push(n("div",{key:`${i.uid}|p|${i.badge}`,class:i.progressClass,style:i.progressStyle})),o.actions!==void 0&&t.push(n("div",{class:i.actionsClass},o.actions.map(r=>n(D,r)))),i.badge>1&&t.push(n("div",{key:`${i.uid}|${i.badge}`,class:o.meta.badgeClass,style:o.badgeStyle},[i.badge])),n("div",{ref:r=>{_[""+i.uid]=r},key:i.uid,class:i.class,...i.attrs},[n("div",{class:i.wrapperClass},t)])}))))}})}const F={setDefaults(e){v(e)===!0&&Object.assign(f,e)},registerType(e,o){v(o)===!0&&(m[e]=o)},install({$q:e,parentApp:o}){if(e.notify=this.create=i=>C(i,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){h.forEach(s=>{l[s]=w([]);const t=["left","center","right"].includes(s)===!0?"center":s.indexOf("top")!==-1?"top":"bottom",r=s.indexOf("left")!==-1?"start":s.indexOf("right")!==-1?"end":"center",c=["left","right"].includes(s)?`items-${s==="left"?"start":"end"} justify-center`:s==="center"?"flex-center":`items-${r}`;b[s]=`q-notifications__list q-notifications__list--${t} fixed column no-wrap ${c}`});const i=L("q-notify");$(B(),o).mount(i)}}};export{F as N};