import{aL as C,D as v,L as I,aM as R,M as E,aN as Q,r as b,c as i,E as c,R as K,aJ as M,S as $,aO as A,G as h}from"./app-a35SYv1t.js";function D(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),C.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const N=v({name:"QItem",props:{...I,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:u}}=K(),l=E(e,u),{hasLink:d,linkAttrs:k,linkClass:g,linkTag:_,navigateOnClick:y}=Q(),s=b(null),r=b(null),m=i(()=>e.clickable===!0||d.value===!0||e.tag==="label"),o=i(()=>e.disable!==!0&&m.value===!0),B=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?g.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=i(()=>e.insetLevel===void 0?null:{["padding"+(u.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function S(n){o.value===!0&&(r.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),y(n))}function x(n){if(o.value===!0&&M(n,[13,32])===!0){$(n),n.qKeyEvent=!0;const f=new MouseEvent("click",n);f.qKeyEvent=!0,s.value.dispatchEvent(f)}a("keyup",n)}function L(){const n=A(t.default,[]);return o.value===!0&&n.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),n}return()=>{const n={ref:s,class:B.value,style:w.value,role:"listitem",onClick:S,onKeyup:x};return o.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,k.value)):m.value===!0&&(n["aria-disabled"]="true"),c(_.value,n,L())}}}),T=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:a.value},h(t.default))}}),j=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=i(()=>parseInt(e.lines,10)),u=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),l=i(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>c("div",{style:l.value,class:u.value},h(t.default))}}),q=["B","KB","MB","GB","TB","PB"];function z(e,t=1){let a=0;for(;parseInt(e,10)>=1024&&a<q.length-1;)e/=1024,++a;return`${e.toFixed(t)}${q[a]}`}function F(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function O(e,t,a){if(a<=t)return t;const u=a-t+1;let l=t+(e-t)%u;return l<t&&(l=u+l),l===0?0:l}export{N as Q,T as a,j as b,D as c,F as d,z as h,O as n};
