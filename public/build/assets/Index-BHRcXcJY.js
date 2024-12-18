import{c as I,n as Q,l as D,Q as z,m as C}from"./QLayout-C0hoxSTB.js";import{Q as P,a as k,i as B}from"./QBtn-Cr8dxMEk.js";import{m as N,h as S,q as V,k as u,c as o,w as a,o as l,a as r,b as e,t as d,g as c,f as b,a0 as A,F,a9 as q}from"./app-BnQApiW_.js";import{N as y}from"./Notify-QVNCAB7s.js";import"./nodes-BrLkgWB_.js";const m=N({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(p,{slots:s}){const g=S(()=>`q-card__section q-card__section--${p.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>V(p.tag,{class:g.value},I(s.default))}}),T={class:"flex gap-3 pt-6"},j={class:"mt-6"},E={class:"text-muted-foreground"},G={class:"text-muted-foreground"},L={class:"text-muted-foreground"},R={class:"font-semibold"},$={class:"text-muted-foreground"},H={class:"text-muted-foreground"},O={__name:"Index",setup(p){const s=u(""),g=u(""),i=u(""),h=u(""),f=u(""),x=u([]),_=async()=>{if(!s.value){y.create({type:"negative",message:"Please enter a valid Track ID."});return}try{const t=(await q.get(`/track/${s.value}`)).data;g.value=t.amount||"N/A",i.value=t.status||"Pending",h.value=t.appliedDate||"",f.value=t.dilnaId||"",x.value=t.steps||[]}catch(v){console.error(v),y.create({type:"negative",message:"Failed to fetch tracking details. Please try again."})}};return(v,t)=>(l(),o(Q,null,{default:a(()=>[r(D,{class:"bg-[#E9F4FF]"},{default:a(()=>t[2]||(t[2]=[e("div",{class:"flex gap-2 lg:col-start-2 lg:justify-start"},[e("img",{id:"background",src:"/build/img/Group.png"}),e("img",{id:"background",src:"/build/img/Group 1321315089.png"})],-1),e("section",{class:"mb-6 flex flex-col justify-center items-center"},[e("h2",{class:"text-xl font-semibold text-black"}," Ruang phurh dilna zawnna/track "),e("p",{class:"text-muted-foreground text-black"}," I ruang phurh dilna a thlen chin zawnna a ni. Mipui ten zawldawh takin min lo ngaichang zel dawn nia. ")],-1)])),_:1}),r(C,null,{default:a(()=>[r(z,{class:"flex items-center flex-col"},{default:a(()=>[t[8]||(t[8]=e("p",{class:"font-bold mb-4"},"Track ID chhu lut rawh le",-1)),r(P,{outlined:"",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=n=>s.value=n),placeholder:"I dilna thlen chin zawnna",dense:""},null,8,["modelValue"]),e("div",T,[r(k,{class:"text-black",label:"Reset",color:"white",onClick:t[1]||(t[1]=()=>{s.value=""})}),r(k,{class:"w-3",label:"Track Now",color:"black",onClick:_})]),f.value?(l(),o(m,{key:0},{default:a(()=>[e("div",j,[e("p",E,"Status: "+d(i.value),1),e("p",G," Applied date: "+d(h.value),1),e("p",L,"Dilna ID: "+d(f.value),1)])]),_:1})):c("",!0),x.value.length?(l(),o(m,{key:1},{default:a(()=>[t[3]||(t[3]=e("h2",{class:"text-xl font-bold text-primary mt-6"}," Current Status ",-1)),(l(!0),b(F,null,A(x.value,(n,w)=>(l(),b("div",{key:w,class:"flex items-center mt-4"},[r(B,{name:n.completed?"check_circle":"circle",color:n.completed?"green-500":"grey-5",size:"xs",class:"mr-2"},null,8,["name","color"]),e("div",null,[e("h3",R,d(n.title),1),e("p",$,d(n.description),1),e("p",H,d(n.timestamp||"Pending"),1)])]))),128))]),_:1})):c("",!0),i.value==="pending"?(l(),o(m,{key:2,class:"mt-6"},{default:a(()=>t[4]||(t[4]=[e("h2",{class:"text-xl font-semibold text-orange-500"}," Application Pending ",-1),e("p",{class:"text-muted-foreground"}," Your application is still pending. It will be verified soon. ",-1)])),_:1})):c("",!0),i.value==="verified"?(l(),o(m,{key:3,class:"mt-6"},{default:a(()=>t[5]||(t[5]=[e("h2",{class:"text-xl font-semibold text-green-500"}," Application Verified! ",-1),e("p",{class:"text-muted-foreground"}," District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni ",-1)])),_:1})):c("",!0),i.value==="approved"?(l(),o(m,{key:4,class:"mt-6"},{default:a(()=>t[6]||(t[6]=[e("h2",{class:"text-xl font-semibold text-green-500"}," Application under process ",-1),e("p",{class:"text-muted-foreground"}," Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni ",-1)])),_:1})):c("",!0),i.value==="payment"?(l(),o(m,{key:5,class:"mt-6"},{default:a(()=>t[7]||(t[7]=[e("h2",{class:"text-xl font-semibold text-green-500"}," Bill Process ",-1),e("p",{class:"text-muted-foreground"}," I ruang phurh dilna chu bank lamah process mek a ni ",-1)])),_:1})):c("",!0)]),_:1})]),_:1})]),_:1}))}};export{O as default};