import{T as u,q as d,v as r,u as i,B as a,C as t,Z as c,A as o,F as p,y as f,z as w,x as _,D as y,E as g}from"./app-CgOXxXM8.js";import{_ as x}from"./GuestLayout-4jgbud84.js";import{_ as b,a as k,b as v}from"./TextInput-DXBuiGsi.js";import{P as V}from"./PrimaryButton-Dq6NlEhG.js";import"./ApplicationLogo-BcATGZ3Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},N={class:"mt-4 flex items-center justify-end"},z={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,s)=>(i(),d(x,null,{default:r(()=>[a(t(c),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(i(),p("div",B,f(l.status),1)):w("",!0),o("form",{onSubmit:g(m,["prevent"])},[o("div",null,[a(b,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(v,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",N,[a(V,{class:y({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:r(()=>s[1]||(s[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{z as default};