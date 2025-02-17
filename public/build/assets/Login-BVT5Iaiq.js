import{T as x,a as i,g as u,i as o,x as s,t as b,e as p,f as r,q as v,w as n,n as _,b as V,F as h,Z as k,d as m,y as f}from"./app-BU-P0o3a.js";import{_ as c,a as g,b as w}from"./TextInput-C_9WNmm2.js";import{P as B}from"./PrimaryButton-Bp3cGhU1.js";import{_ as P}from"./WebLayout-DWayuCGp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QLayout-CjzmvHMW.js";import"./format-B28FXeBv.js";import"./QTabs-ZhVq7cEj.js";import"./rtl-DFPa-2ov.js";const N={key:0,class:"mb-4 text-sm font-medium text-green-600"},j={class:"flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0"},q={class:"w-[412px] h-[434px] border-2 rounded-md p-8 mt-6 overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg"},F={class:"mt-4"},L={class:"flex justify-center"},R={style:{display:"flex",gap:"60px"}},M=Object.assign({layout:P},{__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String},canRegister:{type:Boolean}},setup(a){const t=x({email:"",password:"",remember:!1}),y=()=>{t.post(route("login"),{onFinish:()=>t.reset("password")})};return(d,e)=>(i(),u(h,null,[o(s(k),{title:"Log in"}),a.status?(i(),u("div",N,b(a.status),1)):p("",!0),r("div",j,[r("div",q,[r("form",{onSubmit:v(y,["prevent"])},[e[5]||(e[5]=r("h5",null,"Login",-1)),e[6]||(e[6]=r("p",null,"Enter your credentials to login",-1)),r("div",null,[o(c,{for:"email",value:"Email"}),o(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(t).email,"onUpdate:modelValue":e[0]||(e[0]=l=>s(t).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(w,{class:"mt-2",message:s(t).errors.email},null,8,["message"])]),r("div",F,[o(c,{for:"password",value:"Password"}),o(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(t).password,"onUpdate:modelValue":e[1]||(e[1]=l=>s(t).password=l),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(w,{class:"mt-2",message:s(t).errors.password},null,8,["message"])]),r("div",L,[o(B,{class:_(["ms-4 mt-8 flex h-[48px] flex-col justify-center items-center gap-2 self-stretch rounded-lg bg-black",{"opacity-25":s(t).processing}]),disabled:s(t).processing},{default:n(()=>e[2]||(e[2]=[m(" Log in ")])),_:1},8,["class","disabled"])]),r("div",R,[o(s(f),{href:d.route("register")},{default:n(()=>e[3]||(e[3]=[m("Register New Account!")])),_:1},8,["href"]),a.canResetPassword?(i(),V(s(f),{key:0,href:d.route("password.request"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:n(()=>e[4]||(e[4]=[m("Forgot Password?")])),_:1},8,["href"])):p("",!0)])],32)])])],64))}});export{M as default};
