import{r as p,w as U,e as q,a as S,f as j,g as s,b as n,j as l,k as x,Q as r,l as f,y as i,m as F,x as B}from"./app-Dfx8wdb3.js";import{Q as V}from"./QSelect-Dpzcgx0J.js";import{Q as h}from"./QTd-BqPOGOnl.js";import{Q as D}from"./QTable-DQsOmRPZ.js";import{Q as L}from"./QForm-DVhK76n-.js";import{Q as P}from"./QPage-7_3KjJyu.js";import{C as T}from"./ClosePopup-CHpksyTA.js";import{d as b}from"./index-DW8Aab5r.js";import{_ as $}from"./AdminLayout-CKiilQGn.js";import"./QChip-F2_HzQod.js";import"./format-DmVDsBgE.js";import"./QMenu-CDTgN4HV.js";import"./rtl-DFPa-2ov.js";import"./QLayout-DG6G-lQ6.js";import"./index-BX8Dnrjm.js";import"./QExpansionItem-CN0lkqWd.js";const A={class:"bg-white p-4 rounded-lg flex justify-between"},E={class:"bg-white p-4 rounded-lg mt-4"},I={class:"bg-white p-6 rounded-lg w-96"},z={class:"flex justify-end gap-2"},se=Object.assign({layout:$},{__name:"Index",props:{notes:Object},setup(g){const d=g,c=p(""),w=p(d.notes.data),C=[{name:"title",label:"Title",field:"title",align:"left"},{name:"content",label:"Content",field:"content",align:"left",format:o=>o.substring(0,50)+"..."},{name:"status",label:"Status",field:"status",align:"center"},{name:"created_at",label:"Created At",field:"created_at",align:"left"},{name:"actions",label:"Actions",align:"right"}];U(c,o=>{o.trim()===""?w.value=d.notes.data:w.value=d.notes.data.filter(e=>e.title.toLowerCase().includes(o.toLowerCase())||e.content.toLowerCase().includes(o.toLowerCase()))});const Q=q(()=>({page:d.notes.current_page,rowsPerPage:d.notes.per_page,rowsNumber:d.notes.total})),u=p(!1),v=p(null),a=b.useForm({title:"",content:"",status:"published"});function y(o){v.value=o.id,a.title=o.title,a.content=o.content,a.status=o.status,u.value=!0}function N(){a.patch(route("admin.notes.update",v.value),{onSuccess:()=>{u.value=!1,a.reset()}})}function k(o){b.useForm({status:o.status}).patch(route("admin.notes.update",o.id))}function _(o){confirm("Are you sure you want to delete this note?")&&b.useForm().delete(route("admin.notes.destroy",o))}return(o,e)=>(S(),j(P,{padding:""},{default:s(()=>[e[7]||(e[7]=n("div",{class:"text-xl font-semibold"},"Notes",-1)),n("div",A,[l(r,{size:"sm",flat:"",outlined:"",class:"flex items-center justify-center",style:{color:"#fff",width:"100px",height:"40px","border-radius":"8px",background:"#3a424a"},href:o.route("admin.notes.create")},{default:s(()=>[l(x,{name:"create",size:"16px",class:"q-mr-xs"}),e[5]||(e[5]=n("span",null,"Create New Note",-1))]),_:1},8,["href"]),l(f,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),autofocus:"",outlined:"",dense:"","bg-color":"white",placeholder:"Search",clearable:""},{append:s(()=>[l(x,{name:"search"})]),_:1},8,["modelValue"])]),n("div",E,[l(D,{rows:g.notes.data,columns:C,"row-key":"id",pagination:Q.value},{"body-cell-status":s(t=>[l(h,{props:t},{default:s(()=>[l(V,{modelValue:t.row.status,"onUpdate:modelValue":[m=>t.row.status=m,m=>k(t.row)],options:["draft","published","archived"],dense:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-actions":s(t=>[l(h,{props:t,class:"q-gutter-sm"},{default:s(()=>[l(r,{icon:"edit",color:"blue",dense:"",round:"",onClick:m=>y(t.row)},null,8,["onClick"]),l(r,{icon:"delete",color:"red",dense:"",round:"",onClick:m=>_(t.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination"])]),l(B,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value=t)},{default:s(()=>[n("div",I,[e[6]||(e[6]=n("div",{class:"text-xl font-semibold"},"Edit Note",-1)),l(L,{onSubmit:N},{default:s(()=>[l(f,{modelValue:i(a).title,"onUpdate:modelValue":e[1]||(e[1]=t=>i(a).title=t),label:"Title",class:"q-mb-md",outlined:"",required:""},null,8,["modelValue"]),l(f,{outlined:"",type:"textarea",modelValue:i(a).content,"onUpdate:modelValue":e[2]||(e[2]=t=>i(a).content=t),"min-height":"150px",label:"Content",class:"q-mb-md",required:""},null,8,["modelValue"]),l(V,{modelValue:i(a).status,"onUpdate:modelValue":e[3]||(e[3]=t=>i(a).status=t),options:["draft","published","archived"],label:"Status",outlined:"",class:"q-mb-md"},null,8,["modelValue"]),n("div",z,[F(l(r,{label:"Cancel",flat:""},null,512),[[T]]),l(r,{type:"submit",label:"Update",color:"dark",loading:i(a).processing},null,8,["loading"])])]),_:1})])]),_:1},8,["modelValue"])]),_:1}))}});export{se as default};
