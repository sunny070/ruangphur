import{Q as C}from"./QSpace-B8yaITbX.js";import{Q as P,a as N}from"./QBreadcrumbs-3Mn1D1sQ.js";import{T as k,a as A,b as R,w as n,f as l,i as t,k as i,x as s,a5 as j,s as z,Q as U}from"./app-jSku1vCx.js";import{Q as O}from"./QSelect-DGroO4KQ.js";import{Q as D}from"./QForm-CtgMiRe_.js";import{Q as E}from"./QPage-C99ylTjV.js";import{u as F}from"./use-quasar-CLQ07CRK.js";import{_ as I}from"./AdminLayout-Cm53CRJt.js";import"./QChip-DD3s9r6w.js";import"./format-C6r4MtX8.js";import"./QMenu-B9xFxoVG.js";import"./rtl-DFPa-2ov.js";import"./QLayout-Cja8Z5W6.js";import"./DropdownLink-DOWg3r91.js";const M={class:"flex flex-inline items-center"},T={class:"row q-col-gutter-sm"},Z={class:"col-xs-12 col-sm-6"},G={class:"col-xs-12 col-sm-6"},H={class:"col-xs-12 col-sm-6"},J={class:"col-xs-12 col-sm-6"},K={class:"col-xs-12 col-sm-6"},L={class:"col-xs-12 col-sm-6"},W={class:"col-xs-12 col-sm-6"},X={class:"col-xs-12"},ce=Object.assign({layout:I},{__name:"Create",props:{roles:Object,districts:Object},setup(d){const m=F(),e=k({name:"",phone:"",email:"",roles:[],district:[],password:"",password_confirmation:""}),q=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,$=a=>{h()},h=()=>{e.name="",e.mobile="",e.email="",e.roles=[],e.password="",e.password_confirmation=""},_=a=>{a.preventDefault(),e.post(route("user.store"),{onSuccess:()=>{m.notify({type:"positive",message:"User created successfully!"}),e.reset()},onError:o=>{m.notify({type:"negative",message:"There were errors in your submission."})},onFinish:()=>{var o;m.loading.hide(),(o=a==null?void 0:a.target)==null||o.reset()}})};return(a,o)=>(A(),R(E,{padding:""},{default:n(()=>[l("div",M,[o[14]||(o[14]=l("p",{class:"page-title"},"New User",-1)),t(C),t(N,{align:"right",gutter:"xs"},{default:n(()=>[t(P,{to:{name:"user:read"},label:"Users"}),t(P,{label:"New User"})]),_:1})]),t(D,{class:"zcard q-pa-md",onReset:$,onSubmit:_},{default:n(()=>{var u,p,c,g,f,w,b,y,V,v,Q,x,S,B;return[l("div",T,[l("div",Z,[t(i,{modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),class:"my-input",dense:"",label:"Name",outlined:"",error:s(e).errors.hasOwnProperty("name"),"error-message":(p=(u=s(e).errors)==null?void 0:u.name)==null?void 0:p.toString(),onBlur:o[1]||(o[1]=r=>delete s(e).errors.name),rules:[r=>!!r||"Username is required"]},null,8,["modelValue","error","error-message","rules"])]),l("div",G,[t(i,{modelValue:s(e).phone,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).phone=r),class:"my-input",mask:"##########",dense:"",label:"Mobile",outlined:"",error:s(e).errors.hasOwnProperty("phone"),"error-message":(g=(c=s(e).errors)==null?void 0:c.phone)==null?void 0:g.toString(),onBlur:o[3]||(o[3]=r=>delete s(e).errors.phone),rules:[r=>r.length===10||"Mobile is required"]},null,8,["modelValue","error","error-message","rules"])]),l("div",H,[t(i,{modelValue:s(e).email,"onUpdate:modelValue":o[4]||(o[4]=r=>s(e).email=r),class:"my-input",dense:"",label:"Email",outlined:"",error:s(e).errors.hasOwnProperty("email"),"error-message":(w=(f=s(e).errors)==null?void 0:f.email)==null?void 0:w.toString(),onBlur:o[5]||(o[5]=r=>delete s(e).errors.email),rules:[r=>q.test(r)||"Invalid email"]},null,8,["modelValue","error","error-message","rules"])]),l("div",J,[t(O,{modelValue:s(e).district,"onUpdate:modelValue":o[6]||(o[6]=r=>s(e).district=r),multiple:"","use-chips":"",options:d.districts,dense:"",class:"my-input",label:"Assign District",outlined:"","option-value":"id","option-label":"name",error:s(e).errors.hasOwnProperty("districts"),"error-message":(y=(b=s(e).errors)==null?void 0:b.districts)==null?void 0:y.toString(),onBlur:o[7]||(o[7]=r=>delete s(e).errors.districts),rules:[r=>r.length>0||"District is required"]},null,8,["modelValue","options","error","error-message","rules"])]),l("div",K,[t(O,{modelValue:s(e).roles,"onUpdate:modelValue":o[8]||(o[8]=r=>s(e).roles=r),multiple:"","use-chips":"",options:d.roles,dense:"",class:"my-input",label:"Roles",outlined:"","option-value":"id","option-label":"name",error:s(e).errors.hasOwnProperty("roles"),"error-message":(v=(V=s(e).errors)==null?void 0:V.roles)==null?void 0:v.toString(),onBlur:o[9]||(o[9]=r=>delete s(e).errors.roles),rules:[r=>r.length>0||"roles is required"]},null,8,["modelValue","options","error","error-message","rules"])]),l("div",L,[t(i,{modelValue:s(e).password,"onUpdate:modelValue":o[10]||(o[10]=r=>s(e).password=r),type:"password",class:"my-input",dense:"",label:"Password",outlined:"",error:s(e).errors.hasOwnProperty("password"),"error-message":(x=(Q=s(e).errors)==null?void 0:Q.password)==null?void 0:x.toString(),onBlur:o[11]||(o[11]=r=>delete s(e).errors.password),rules:[r=>(r==null?void 0:r.length)>6||"Password must be atleast 6 digit character"]},null,8,["modelValue","error","error-message","rules"])]),l("div",W,[t(i,{modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[12]||(o[12]=r=>s(e).password_confirmation=r),type:"password",class:"my-input",dense:"",label:"Confirm Password",outlined:"",error:s(e).errors.hasOwnProperty("password_confirmation"),"error-message":(B=(S=s(e).errors)==null?void 0:S.password_confirmation)==null?void 0:B.toString(),onBlur:o[13]||(o[13]=r=>delete s(e).errors.password_confirmation),rules:[r=>r===s(e).password||"Confirm password doesn't match Password"]},null,8,["modelValue","error","error-message","rules"])])]),l("div",X,[t(j,{class:"q-my-md"})]),t(z,{class:"q-mt-md"},{default:n(()=>[t(U,{color:"primary",flat:"",type:"submit",label:"Save"}),t(U,{color:"negative",flat:"",type:"reset",label:"Reset"})]),_:1})]}),_:1})]),_:1}))}});export{ce as default};
