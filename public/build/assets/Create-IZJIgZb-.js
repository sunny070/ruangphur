import{T as _,a as i,b as g,w as o,i as r,p as u,f as s,q as v,l as f,B as b,x as l,n as c,g as d,t as n,e as m,j as k,Q,m as y}from"./app-BU-P0o3a.js";import{Q as V}from"./QFile-CKX2-_DY.js";import{Q as w}from"./QForm-D02yPLKZ.js";import{Q as B}from"./QPage-BnL5U6Tp.js";import{_ as C}from"./AdminLayout-B373Zi-z.js";import"./QChip-W2JHKdWw.js";import"./format-B28FXeBv.js";import"./QLayout-CjzmvHMW.js";import"./QMenu--S8s1Z2H.js";import"./QExpansionItem-BfALLecq.js";import"./ClosePopup-D9M7YmMK.js";const F={class:"flex gap-9"},T={class:""},U={key:0,class:"text-red-500 text-sm"},q={class:""},D={key:0,class:"text-red-500 text-sm"},S={key:0,class:"text-red"},H=Object.assign({layout:C},{__name:"Create",setup(j){const e=_({file:null,title:"",sub_title:""}),x=()=>{e.post(route("admin.info.store"),{onSuccess:()=>e.reset(),forceFormData:!0})};return(p,t)=>(i(),g(B,{padding:""},{default:o(()=>[r(y,null,{default:o(()=>[r(u,null,{default:o(()=>t[3]||(t[3]=[s("div",{class:"text-h6"},"Upload File",-1)])),_:1}),r(u,null,{default:o(()=>[r(w,{onSubmit:v(x,["prevent"])},{default:o(()=>[s("div",F,[s("div",T,[t[4]||(t[4]=s("div",{class:"text-sm font-medium text-black q-mb-xs"}," Title ",-1)),f(s("input",{type:"text",placeholder:"Enter Title","onUpdate:modelValue":t[0]||(t[0]=a=>l(e).title=a),class:c(["border p-2 w-full rounded-lg",l(e).errors.title?"border-red-500":"border-gray-300"])},null,2),[[b,l(e).title]]),l(e).errors.title?(i(),d("div",U,n(l(e).errors.title),1)):m("",!0)]),s("div",q,[t[5]||(t[5]=s("div",{class:"text-sm font-medium text-black q-mb-xs"}," Sub Title ",-1)),f(s("input",{type:"text",placeholder:"Enter Title","onUpdate:modelValue":t[1]||(t[1]=a=>l(e).sub_title=a),class:c(["border p-2 w-full rounded-lg",l(e).errors.sub_title?"border-red-500":"border-gray-300"])},null,2),[[b,l(e).sub_title]]),l(e).errors.sub_title?(i(),d("div",D,n(l(e).errors.sub_title),1)):m("",!0)]),s("div",null,[t[6]||(t[6]=s("div",{class:"text-sm font-medium text-black q-mb-xs"}," Diltu Aadhar card/Voter ID thlalak upload ",-1)),r(V,{color:"dark",modelValue:l(e).file,"onUpdate:modelValue":t[2]||(t[2]=a=>l(e).file=a),outlined:"",dense:"",accept:".pdf, .jpg, .jpeg, .png",label:"Upload  File"},{prepend:o(()=>[r(k,{name:"attach_file"})]),_:1},8,["modelValue"]),p.$page.props.errors.file?(i(),d("div",S,n(p.$page.props.errors.file),1)):m("",!0)])]),r(Q,{type:"submit",color:"black",label:"Upload",class:"q-mt-md",loading:l(e).processing},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1}))}});export{H as default};
