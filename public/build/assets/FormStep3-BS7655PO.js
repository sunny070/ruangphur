import{Q as a,a as s}from"./QBtn-Cr8dxMEk.js";import{Q as b}from"./QForm-BvvicCX-.js";import{Q as c}from"./QLayout-C0hoxSTB.js";import{T as f,c as x,w as d,o as V,b as t,a as m,u as o,e as k}from"./app-BnQApiW_.js";import{_ as v}from"./FormLayout-DKNl-XO5.js";const Q=Object.assign({layout:v},{__name:"FormStep3",props:["form"],setup(i){const u=i,e=f({name:u.form.name||"",mobile:u.form.mobile||"",district:u.form.district||"",locality:u.form.locality||"",bank_name:u.form.bank_name||"",account_no:u.form.account_no||"",ifsc_code:u.form.ifsc_code||""}),r=()=>e.post(route("form.storeStep3")),p=()=>window.history.back();return(g,l)=>(V(),x(c,{padding:""},{default:d(()=>[l[14]||(l[14]=t("h5",null,"Step 3: Ruang phurhna man diltu Chhungchang",-1)),m(b,{onSubmit:k(r,["prevent"]),class:"q-gutter-md"},{default:d(()=>[t("div",null,[l[7]||(l[7]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Diltu hming ",-1)),m(a,{outlined:"",placeholder:"Diltu hming pum",dense:"",class:"custom-input",modelValue:o(e).name,"onUpdate:modelValue":l[0]||(l[0]=n=>o(e).name=n)},null,8,["modelValue"])]),t("div",null,[l[8]||(l[8]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," District ",-1)),m(a,{outlined:"",placeholder:"Ruang phurhna man diltu district",dense:"",class:"custom-input",modelValue:o(e).district,"onUpdate:modelValue":l[1]||(l[1]=n=>o(e).district=n)},null,8,["modelValue"])]),t("div",null,[l[9]||(l[9]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Veng/Khua ",-1)),m(a,{outlined:"",placeholder:"Ruang phurhna man diltu veng/khua",dense:"",class:"custom-input",modelValue:o(e).locality,"onUpdate:modelValue":l[2]||(l[2]=n=>o(e).locality=n)},null,8,["modelValue"])]),t("div",null,[l[10]||(l[10]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Phone number ",-1)),m(a,{outlined:"",placeholder:"Ruang phurhna man diltu phone no.",dense:"",class:"custom-input",modelValue:o(e).mobile,"onUpdate:modelValue":l[3]||(l[3]=n=>o(e).mobile=n)},null,8,["modelValue"])]),t("div",null,[l[11]||(l[11]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Bank hming ",-1)),m(a,{outlined:"",placeholder:"Ruang phurhna man dahluhna tur",dense:"",class:"custom-input",modelValue:o(e).bank_name,"onUpdate:modelValue":l[4]||(l[4]=n=>o(e).bank_name=n)},null,8,["modelValue"])]),t("div",null,[l[12]||(l[12]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Bank acocunt number ",-1)),m(a,{outlined:"",placeholder:"Bank account number",dense:"",class:"custom-input",modelValue:o(e).account_no,"onUpdate:modelValue":l[5]||(l[5]=n=>o(e).account_no=n)},null,8,["modelValue"])]),t("div",null,[l[13]||(l[13]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," IFSC code ",-1)),m(a,{outlined:"",placeholder:"Bank IFSC Code",dense:"",class:"custom-input",modelValue:o(e).ifsc_code,"onUpdate:modelValue":l[6]||(l[6]=n=>o(e).ifsc_code=n)},null,8,["modelValue"])]),m(s,{label:"Preview",class:"text-black",color:"white",onClick:p}),m(s,{label:"Submit & Send OTP",color:"black",type:"submit"})]),_:1})]),_:1}))}});export{Q as default};
