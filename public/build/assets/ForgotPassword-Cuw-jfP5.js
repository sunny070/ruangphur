import{T as u,a as r,f as d,g as i,j as a,y as t,Z as c,b as o,c as f,t as p,d as w,h as _,n as y,s as g}from"./app-Dfx8wdb3.js";import{_ as b}from"./GuestLayout-583XnYMG.js";import{_ as x,a as k,b as V}from"./TextInput-DLNp4ZhA.js";import{P as v}from"./PrimaryButton-Biai_Z4T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},N={class:"mt-4 flex items-center justify-end"},h={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const s=u({email:""}),m=()=>{s.post(route("password.email"))};return(P,e)=>(r(),d(b,null,{default:i(()=>[a(t(c),{title:"Forgot Password"}),e[2]||(e[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(r(),f("div",B,p(l.status),1)):w("",!0),o("form",{onSubmit:g(m,["prevent"])},[o("div",null,[a(x,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=n=>t(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),o("div",N,[a(v,{class:y({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:i(()=>e[1]||(e[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{h as default};
