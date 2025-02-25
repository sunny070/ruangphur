import{r as v,e as x,a as o,f as c,g as s,j as n,b as i,h as A,l as P,Q as h,p as Q,q as k,t as p,c as g,d as m,i as S,F as w,k as D,N,bY as V}from"./app-Dfx8wdb3.js";import{Q as I,a as j}from"./QTimeline-CeBvr8fl.js";import{Q as F}from"./QPage-7_3KjJyu.js";import{a as C,b as L}from"./QLayout-DG6G-lQ6.js";import{u as B}from"./use-quasar-CyfZIn7o.js";import{W as R}from"./WebLayout-B9qYWRSz.js";import"./format-DmVDsBgE.js";import"./QTabs-Bv_tiAiE.js";import"./rtl-DFPa-2ov.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"flex items-center flex-col"},E={class:"w-[412px] h-[381px] flex-shrink-0 rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-5 mt-6"},z={class:"flex flex-col"},T={class:"flex gap-3 pt-6"},$={class:"mt-6"},M={class:"text-muted-foreground"},W={class:"text-muted-foreground"},O={key:0,class:"text-red-500"},le=Object.assign({layout:R},{__name:"Index",setup(U){const d=B(),r=v(""),e=v(null),u=v(!1),_=a=>{if(!r.value){d.notify({color:"negative",message:"Please enter a valid Application ID."});return}u.value=!0;try{N.get(route("application.view",r.value))}catch{d.notify({color:"negative",message:"Failed to load application details. Please try again."})}finally{u.value=!1}},b=async()=>{var a,t;u.value=!0;try{const{data:l}=await V.get(`/track/${r.value}`);e.value=l.application,d.notify({color:"positive",message:"Application found."})}catch(l){e.value=null;const f=((t=(a=l.response)==null?void 0:a.data)==null?void 0:t.message)||(l.request?"Network error. Please try again later.":"An unknown error occurred.");d.notify({color:"negative",message:f})}finally{u.value=!1}},y=x(()=>{if(!e.value)return{Pending:{status:null,title:"No Data",description:"No application data found.",timestamp:null,completed:!1}};const a=e.value.status;let t={Pending:{status:a,title:"Form Submitted",description:"I ruang phurh dilna chu thehluah fel a ni tawh e, District lama thuneitu ten verify turin a thang mek.",timestamp:e.value.created_at?new Date(e.value.created_at).toLocaleString():null,completed:["Pending","Verified","Approved","Processed"].includes(a)},Verified:{status:a,title:"Verified",description:"District thuneitu te atangin verify a ni a, Directorate lamah thawn a ni.",timestamp:e.value.verified_at?new Date(e.value.verified_at).toLocaleString():null,completed:["Verified","Approved","Processed"].includes(a)},Approved:{status:a,title:"Application under process",description:"Directorate kutah a awm mek a, bank lama deposit turin file tih kal a ni.",timestamp:e.value.approved_at?new Date(e.value.approved_at).toLocaleString():null,completed:["Approved","Processed"].includes(a)},Processed:{status:a,title:"Bill Process",description:"I ruang phurh dilna chu bank lamah process mek a ni.",timestamp:e.value.processed_at?new Date(e.value.processed_at).toLocaleString():null,completed:a==="Processed"}};return a==="Rejected"&&(t.Rejected={status:a,title:"Application Rejected",description:e.value.feedback?`Application rejected. Reason: ${e.value.feedback}`:"Application rejected without feedback",timestamp:e.value.updated_at?new Date(e.value.updated_at).toLocaleString():null,completed:!0,color:"red"}),t});return(a,t)=>(o(),c(C,null,{default:s(()=>[n(L,null,{default:s(()=>[n(F,{padding:""},{default:s(()=>[i("div",q,[i("div",E,[i("div",z,[t[2]||(t[2]=i("h5",{class:"text-2xl"}," Ruang phurh dil chhuina/track ",-1)),t[3]||(t[3]=i("p",{class:"font-bold mb-4 text-[#5B656F] text-sm"}," I ruang phurh dilna a thlen chin zawnna a ni. Mipui ten zawldawh takin min lo ngaichang zel dawn nia. ",-1)),t[4]||(t[4]=A(" Track ID chhu lut rawh le ")),n(P,{outlined:"",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=l=>r.value=l),placeholder:"I dilna thlen chin zawnna",dense:"",class:"custom-input"},null,8,["modelValue"])]),i("div",T,[n(h,{class:"text-black",label:"View",color:"white",onClick:t[1]||(t[1]=l=>_(r.value))}),n(h,{class:"w-3",label:"Track Now",color:"black",onClick:b,loading:u.value},null,8,["loading"])])]),e.value?(o(),c(Q,{key:0,class:"q-ma-md h-[983px] w-[412px]"},{default:s(()=>[a.currentStatus?(o(),c(k,{key:0},{default:s(()=>[i("div",$,[i("p",M," Status: "+p(a.currentStatus.status||"N/A"),1),i("p",W," Applied date: "+p(a.currentStatus.timestamp||"N/A"),1),e.value.status==="Rejected"?(o(),g("p",O," Rejection Feedback: "+p(e.value.feedback),1)):m("",!0)])]),_:1})):m("",!0),n(k,null,{default:s(()=>[t[5]||(t[5]=i("h5",null,"Current Status",-1)),n(I,{class:"q-mt-lg"},{default:s(()=>[(o(!0),g(w,null,S(y.value,(l,f)=>(o(),c(j,{key:f,color:l.color||(l.completed?"green":"grey"),title:l.title,subtitle:l.description},{default:s(()=>[l.timestamp?(o(),g(w,{key:0},[n(D,{name:"schedule",size:"xs",class:"q-mr-sm"}),i("span",null,p(l.timestamp),1)],64)):m("",!0)]),_:2},1032,["color","title","subtitle"]))),128))]),_:1})]),_:1})]),_:1})):m("",!0)])]),_:1})]),_:1})]),_:1}))}});export{le as default};
