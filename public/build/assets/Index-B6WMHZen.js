import{h as Q,f as z,d as I,e as C}from"./QLayout-CBaEUiZH.js";import{Q as B}from"./QInput-BfCSwdeC.js";import{d as v,Q as D}from"./QBtn-BHeDikcP.js";import{c as N,a as S,h as F,r as o,q as g,v as n,u as c,B as l,A as e,y as r,z as x,F as _,ag as V,L as P,ao as A}from"./app-CgOXxXM8.js";import{Q as q}from"./QPage-Jd7fiL9k.js";import{N as k}from"./Notify-CcUIlK7E.js";import"./use-key-composition-CDRni9C5.js";import"./QAvatar-Pu7yz_NV.js";import"./nodes-FMmXF0YR.js";const y=N({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(i,{slots:a}){const d=S(()=>`q-card__section q-card__section--${i.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>F(i.tag,{class:d.value},Q(a.default))}}),L={class:"flex gap-3 pt-6"},T={class:"mt-6"},j={class:"text-muted-foreground"},E={class:"text-muted-foreground"},G={class:"text-muted-foreground"},R={class:"font-semibold"},$={class:"text-muted-foreground"},H={class:"text-muted-foreground"},ee={__name:"Index",setup(i){const a=o(""),d=o(""),f=o(""),h=o(""),u=o(""),m=o([]),b=async()=>{if(!a.value){k.create({type:"negative",message:"Please enter a valid Track ID."});return}try{const t=(await A.get(`/track/${a.value}`)).data;d.value=t.amount||"N/A",f.value=t.status||"Pending",h.value=t.appliedDate||"",u.value=t.dilnaId||"",m.value=t.steps||[]}catch(p){console.error(p),k.create({type:"negative",message:"Failed to fetch tracking details. Please try again."})}};return(p,t)=>(c(),g(z,null,{default:n(()=>[l(I,{class:"bg-[#E9F4FF]"},{default:n(()=>t[2]||(t[2]=[e("div",{class:"flex gap-2 lg:col-start-2 lg:justify-start"},[e("img",{id:"background",src:"image/Group.png"}),e("img",{id:"background",src:"/image/Group 1321315089.png"})],-1),e("section",{class:"mb-6 flex flex-col justify-center items-center"},[e("h2",{class:"text-xl font-semibold text-black"}," Ruang phurh dilna zawnna/track "),e("p",{class:"text-muted-foreground text-black"}," I ruang phurh dilna a thlen chin zawnna a ni. Mipui ten zawldawh takin min lo ngaichang zel dawn nia. ")],-1)])),_:1}),l(C,null,{default:n(()=>[l(q,{class:"flex items-center flex-col"},{default:n(()=>[t[4]||(t[4]=e("p",{class:"font-bold mb-4"},"Track ID chhu lut rawh le",-1)),l(B,{outlined:"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),placeholder:"I dilna thlen chin zawnna",dense:""},null,8,["modelValue"]),e("div",L,[l(v,{class:"text-black",label:"Reset",color:"white",onClick:t[1]||(t[1]=()=>{a.value.value=""})}),l(v,{class:"w-3",label:"Track Now",color:"black",onClick:b})]),u.value?(c(),g(y,{key:0},{default:n(()=>[e("div",T,[e("p",j,"Status: "+r(f.value),1),e("p",E," Applied date: "+r(h.value),1),e("p",G,"Dilna ID: "+r(u.value),1)])]),_:1})):x("",!0),m.value.length?(c(),g(y,{key:1},{default:n(()=>[t[3]||(t[3]=e("h2",{class:"text-xl font-bold text-primary mt-6"}," Current Status ",-1)),(c(!0),_(P,null,V(m.value,(s,w)=>(c(),_("div",{key:w,class:"flex items-center mt-4"},[l(D,{name:s.completed?"check_circle":"circle",color:s.completed?"green-500":"grey-5",size:"xs",class:"mr-2"},null,8,["name","color"]),e("div",null,[e("h3",R,r(s.title),1),e("p",$,r(s.description),1),e("p",H,r(s.timestamp),1)])]))),128))]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1}))}};export{ee as default};