import{Q as ee}from"./QSelect-DGroO4KQ.js";import{r as T,c as h,H as le,a9 as se,aa as ae,ab as oe,D as I,C as de,ac as ue,ad as me,ae as pe,af as ce,ag as fe,ah as ge,ai as te,a4 as ve,aj as be,ak as xe,T as he,a as x,b as ke,w as y,i as p,f as t,q as ye,l as U,a7 as Q,x as a,n as z,g as V,t as u,e as F,j as R,Q as K,u as Ve,m as Fe,p as Se,s as Ce}from"./app-jSku1vCx.js";import{Q as De}from"./QChip-DD3s9r6w.js";import{h as _e}from"./format-C6r4MtX8.js";import{Q as we}from"./QForm-CtgMiRe_.js";import{Q as je}from"./QPage-C99ylTjV.js";import{Q as Be,a as Pe}from"./QLayout-Cja8Z5W6.js";import{C as qe}from"./ClosePopup-BLw4O79e.js";import{_ as Ue}from"./WebLayout-DeDL5zEB.js";import{u as Ie}from"./use-quasar-CLQ07CRK.js";import"./QMenu-B9xFxoVG.js";import"./rtl-DFPa-2ov.js";import"./QTabs-BCaq7a8S.js";function $(n,v,S,w){const c=[];return n.forEach(l=>{w(l)===!0?c.push(l):v.push({failedPropValidation:S,file:l})}),c}function L(n){n&&n.dataTransfer&&(n.dataTransfer.dropEffect="copy"),ae(n)}const Ne={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Qe=["rejected"];function ze({editable:n,dnd:v,getFileInput:S,addFilesToQueue:w}){const{props:c,emit:l,proxy:C}=le(),j=T(null),m=h(()=>c.accept!==void 0?c.accept.split(",").map(i=>(i=i.trim(),i==="*"?"*/":(i.endsWith("/*")&&(i=i.slice(0,i.length-1)),i.toUpperCase()))):null),e=h(()=>parseInt(c.maxFiles,10)),r=h(()=>parseInt(c.maxTotalSize,10));function P(i){if(n.value)if(i!==Object(i)&&(i={target:null}),i.target!==null&&i.target.matches('input[type="file"]')===!0)i.clientX===0&&i.clientY===0&&se(i);else{const D=S();D&&D!==i.target&&D.click(i)}}function q(i){n.value&&i&&w(null,i)}function N(i,D,A,O){let o=Array.from(D||i.target.files);const k=[],B=()=>{k.length!==0&&l("rejected",k)};if(c.accept!==void 0&&m.value.indexOf("*/")===-1&&(o=$(o,k,"accept",d=>m.value.some(g=>d.type.toUpperCase().startsWith(g)||d.name.toUpperCase().endsWith(g))),o.length===0))return B();if(c.maxFileSize!==void 0){const d=parseInt(c.maxFileSize,10);if(o=$(o,k,"max-file-size",g=>g.size<=d),o.length===0)return B()}if(c.multiple!==!0&&o.length!==0&&(o=[o[0]]),o.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),O===!0){const d=A.map(g=>g.__key);o=$(o,k,"duplicate",g=>d.includes(g.__key)===!1)}if(o.length===0)return B();if(c.maxTotalSize!==void 0){let d=O===!0?A.reduce((g,Y)=>g+Y.size,0):0;if(o=$(o,k,"max-total-size",g=>(d+=g.size,d<=r.value)),o.length===0)return B()}if(typeof c.filter=="function"){const d=c.filter(o);o=$(o,k,"filter",g=>d.includes(g))}if(c.maxFiles!==void 0){let d=O===!0?A.length:0;if(o=$(o,k,"max-files",()=>(d++,d<=e.value)),o.length===0)return B()}if(B(),o.length!==0)return o}function H(i){L(i),v.value!==!0&&(v.value=!0)}function f(i){ae(i),(i.relatedTarget!==null||oe.is.safari!==!0?i.relatedTarget!==j.value:document.elementsFromPoint(i.clientX,i.clientY).includes(j.value)===!1)===!0&&(v.value=!1)}function E(i){L(i);const D=i.dataTransfer.files;D.length!==0&&w(null,D),v.value=!1}function X(i){if(v.value===!0)return I("div",{ref:j,class:`q-${i}__dnd absolute-full`,onDragenter:L,onDragover:L,onDragleave:f,onDrop:E})}return Object.assign(C,{pickFiles:P,addFiles:q}),{pickFiles:P,addFiles:q,onDragover:H,onDragleave:f,processFiles:N,getDndNode:X,maxFilesNumber:e,maxTotalSizeNumber:r}}const W=de({name:"QFile",inheritAttrs:!1,props:{...ue,...me,...Ne,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...pe,...Qe],setup(n,{slots:v,emit:S,attrs:w}){const{proxy:c}=le(),l=ce(),C=T(null),j=T(!1),m=fe(n),{pickFiles:e,onDragover:r,onDragleave:P,processFiles:q,getDndNode:N}=ze({editable:l.editable,dnd:j,getFileInput:J,addFilesToQueue:Z}),H=ge(n),f=h(()=>Object(n.modelValue)===n.modelValue?"length"in n.modelValue?Array.from(n.modelValue):[n.modelValue]:[]),E=h(()=>te(f.value)),X=h(()=>f.value.map(s=>s.name).join(", ")),i=h(()=>_e(f.value.reduce((s,b)=>s+b.size,0))),D=h(()=>({totalSize:i.value,filesNumber:f.value.length,maxFiles:n.maxFiles})),A=h(()=>({tabindex:-1,type:"file",title:"",accept:n.accept,capture:n.capture,name:m.value,...w,id:l.targetUid.value,disabled:l.editable.value!==!0})),O=h(()=>"q-file q-field--auto-height"+(j.value===!0?" q-file--dnd":"")),o=h(()=>n.multiple===!0&&n.append===!0);function k(s){const b=f.value.slice();b.splice(s,1),d(b)}function B(s){const b=f.value.indexOf(s);b!==-1&&k(b)}function d(s){S("update:modelValue",n.multiple===!0?s:s[0])}function g(s){s.keyCode===13&&xe(s)}function Y(s){(s.keyCode===13||s.keyCode===32)&&e(s)}function J(){return C.value}function Z(s,b){const _=q(s,b,f.value,o.value),G=J();G!=null&&(G.value=""),_!==void 0&&((n.multiple===!0?n.modelValue&&_.every(re=>f.value.includes(re)):n.modelValue===_[0])||d(o.value===!0?f.value.concat(_):_))}function M(){return[I("input",{class:[n.inputClass,"q-file__filler"],style:n.inputStyle})]}function ne(){if(v.file!==void 0)return f.value.length===0?M():f.value.map((b,_)=>v.file({index:_,file:b,ref:this}));if(v.selected!==void 0)return f.value.length===0?M():v.selected({files:f.value,ref:this});if(n.useChips===!0)return f.value.length===0?M():f.value.map((b,_)=>I(De,{key:"file-"+_,removable:l.editable.value,dense:!0,textColor:n.color,tabindex:n.tabindex,onRemove:()=>{k(_)}},()=>I("span",{class:"ellipsis",textContent:b.name})));const s=n.displayValue!==void 0?n.displayValue:X.value;return s.length!==0?[I("div",{class:n.inputClass,style:n.inputStyle,textContent:s})]:M()}function ie(){const s={ref:C,...A.value,...H.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Z};return n.multiple===!0&&(s.multiple=!0),I("input",s)}return Object.assign(l,{fieldClass:O,emitValue:d,hasValue:E,inputRef:C,innerValue:f,floatingLabel:h(()=>E.value===!0||te(n.displayValue)),computedCounter:h(()=>{if(n.counterLabel!==void 0)return n.counterLabel(D.value);const s=n.maxFiles;return`${f.value.length}${s!==void 0?" / "+s:""} (${i.value})`}),getControlChild:()=>N("file"),getControl:()=>{const s={ref:l.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:n.tabindex};return l.editable.value===!0&&Object.assign(s,{onDragover:r,onDragleave:P,onKeydown:g,onKeyup:Y}),I("div",s,[ie()].concat(ne()))}}),Object.assign(c,{removeAtIndex:k,removeFile:B,getNativeElement:()=>C.value}),ve(c,"nativeEl",()=>C.value),be(l)}}),$e={class:"flex flex-col justify-center items-center gap-6"},Ae={class:"border w-[412px] h-auto rounded-[10px] p-[23px]"},Oe={key:0,class:"text-red-500 text-sm"},Te={key:0,class:"text-red"},Ee={key:0,class:"text-red-500 text-sm"},Me={key:0,class:"text-red-500 text-sm"},Re={key:0,class:"text-red-500 text-sm"},Ke={key:0,class:"text-red-500 text-sm"},Le={key:0,class:"text-red-500 text-sm"},We={key:0,class:"text-red"},He={key:0,class:"text-red"},Xe={key:0,class:"text-red"},Ye={key:0,class:"text-red"},Ge={key:0,class:"text-red"},Je={class:"pl-5"},Ze={class:"leading-[2px]"},et={class:"leading-[2px] pt-4"},tt={class:"leading-[2px] pt-4"},lt={class:"leading-[2px] pt-4"},at={class:"pl-5"},nt={class:"leading-[2px]"},it={class:"leading-[2px] pt-4"},rt={class:"leading-[2px] pt-4"},st={class:"pl-5"},ot={class:""},dt={class:"pt-4"},ut={class:"pt-4"},mt={class:"pt-4"},pt={class:"flex items-start space-x-2"},ct={class:"text-[#757575]"},_t=Object.assign({layout:Ue},{__name:"FormStep3",props:["form","districts"],setup(n){const v=n,S=T(!1),w=Ie(),c=T(v.districts||[]),l=he({name:"",mobile:"",district:"",locality:"",bank_name:"",account_no:"",ifsc_code:"",relation:"",id_proof:null,receipt:null,death_certificate:null,additional_document:null}),C=()=>{const m=new FormData;Object.keys(l).forEach(e=>{l[e]instanceof File?m.append(e,l[e]):m.append(e,l[e]||"")}),l.post(route("form.storeStep3"),{data:m,onError:e=>{console.log(e),l.errors=e,S.value=!1},onSuccess:()=>{S.value=!1,w.notify({type:"positive",message:"OTP Sent successfully!",position:"top-right"})}})},j=()=>{S.value=!0};return(m,e)=>(x(),ke(Be,null,{default:y(()=>[p(Pe,null,{default:y(()=>[p(je,{padding:""},{default:y(()=>[t("div",$e,[e[30]||(e[30]=t("div",{class:"border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center"},[t("h5",{class:"text-black"},"Ruang Phurh Report Form"),t("img",{id:"background",class:"w-[412px] h-[193px]",src:"image/Vertical Stepper with numbers3.png"})],-1)),t("div",Ae,[p(we,{onSubmit:ye(C,["prevent"]),class:"q-gutter-md"},{default:y(()=>[e[28]||(e[28]=t("div",{class:"pb-3 flex items-center gap-2"},[t("div",{class:"w-[3px] h-[19px] flex-shrink-0 bg-black"}),t("h6",{class:"text-sm text-bold"}," Ruang phurhna man diltu Chhungchang ")],-1)),t("div",null,[e[14]||(e[14]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Diltu hming ",-1)),U(t("input",{type:"text",placeholder:"Diltu hming pum","onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.name?"border-red-500":"border-gray-300"])},null,2),[[Q,a(l).name]]),a(l).errors.name?(x(),V("div",Oe,u(a(l).errors.name),1)):F("",!0)]),t("div",null,[e[15]||(e[15]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," District ",-1)),p(ee,{outlined:"",dense:"",modelValue:a(l).district,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).district=r),label:"Select District",options:c.value,error:a(l).errors.district,"error-message":a(l).errors.district||""},null,8,["modelValue","options","error","error-message"]),m.$page.props.errors.district?(x(),V("div",Te,u(m.$page.props.errors.district),1)):F("",!0)]),t("div",null,[e[16]||(e[16]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Veng/Khua ",-1)),U(t("input",{type:"text",placeholder:"Veng/Khua","onUpdate:modelValue":e[2]||(e[2]=r=>a(l).locality=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.locality?"border-red-500":"border-gray-300"])},null,2),[[Q,a(l).locality]]),a(l).errors.locality?(x(),V("div",Ee,u(a(l).errors.locality),1)):F("",!0)]),t("div",null,[e[17]||(e[17]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Phone number ",-1)),U(t("input",{type:"text",maxlength:"10",onInput:e[3]||(e[3]=r=>a(l).driver_phone=a(l).mobile.replace(/\D/g,"").slice(0,10)),placeholder:"Phone number","onUpdate:modelValue":e[4]||(e[4]=r=>a(l).mobile=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.mobile?"border-red-500":"border-gray-300"])},null,34),[[Q,a(l).mobile]]),a(l).errors.mobile?(x(),V("div",Me,u(a(l).errors.mobile),1)):F("",!0)]),t("div",null,[e[18]||(e[18]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Bank hming ",-1)),U(t("input",{type:"text",placeholder:"Bank hming","onUpdate:modelValue":e[5]||(e[5]=r=>a(l).bank_name=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.bank_name?"border-red-500":"border-gray-300"])},null,2),[[Q,a(l).bank_name]]),a(l).errors.bank_name?(x(),V("div",Re,u(a(l).errors.bank_name),1)):F("",!0)]),t("div",null,[e[19]||(e[19]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Bank account number ",-1)),U(t("input",{type:"text",placeholder:"Bank account number","onUpdate:modelValue":e[6]||(e[6]=r=>a(l).account_no=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.account_no?"border-red-500":"border-gray-300"])},null,2),[[Q,a(l).account_no]]),a(l).errors.account_no?(x(),V("div",Ke,u(a(l).errors.account_no),1)):F("",!0)]),t("div",null,[e[20]||(e[20]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," IFSC code ",-1)),U(t("input",{type:"text",placeholder:"Bank IFSC code","onUpdate:modelValue":e[7]||(e[7]=r=>a(l).ifsc_code=r),class:z(["border p-2 w-full rounded-lg",a(l).errors.ifsc_code?"border-red-500":"border-gray-300"])},null,2),[[Q,a(l).ifsc_code]]),a(l).errors.ifsc_code?(x(),V("div",Le,u(a(l).errors.ifsc_code),1)):F("",!0)]),e[29]||(e[29]=t("div",{class:"pt-5 text-sm font-medium text-[#61646B] q-mb-xs"}," Document Upload ",-1)),t("div",null,[e[21]||(e[21]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Mitthi/Chhungte Aadhaar Neitu ",-1)),p(ee,{outlined:"",dense:"",modelValue:a(l).relation,"onUpdate:modelValue":e[8]||(e[8]=r=>a(l).relation=r),label:"Select Relation",options:["Mitthi","Mitthi Nu","Mitthi Pa"],error:a(l).errors.relation,"error-message":a(l).errors.relation||""},null,8,["modelValue","error","error-message"]),e[22]||(e[22]=t("p",{class:"text-[#61646B]"}," Mitthi hi naupang emaw aadhaar la neilo a nih chuan a chhungte aadhaar upload tur a ni. ",-1)),m.$page.props.errors.relation?(x(),V("div",We,u(m.$page.props.errors.relation),1)):F("",!0)]),t("div",null,[e[23]||(e[23]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Mitthi Aadhar card/Voter ID thlalak upload ",-1)),p(W,{modelValue:a(l).id_proof,"onUpdate:modelValue":e[9]||(e[9]=r=>a(l).id_proof=r),outlined:"",dense:"",accept:".jpg, .jpeg, .png",label:"Upload ID proof"},{prepend:y(()=>[p(R,{name:"attach_file"})]),_:1},8,["modelValue"]),m.$page.props.errors.id_proof?(x(),V("div",He,u(m.$page.props.errors.id_proof),1)):F("",!0)]),t("div",null,[e[24]||(e[24]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor hman man Voucher/Receipt upload ",-1)),p(W,{modelValue:a(l).receipt,"onUpdate:modelValue":e[10]||(e[10]=r=>a(l).receipt=r),outlined:"",dense:"",accept:".pdf, .jpg, .jpeg, .png",label:"Upload receipt"},{prepend:y(()=>[p(R,{name:"attach_file"})]),_:1},8,["modelValue"]),m.$page.props.errors.receipt?(x(),V("div",Xe,u(m.$page.props.errors.receipt),1)):F("",!0)]),t("div",null,[e[25]||(e[25]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Death certificate/VC hriatpuina lehkha ",-1)),p(W,{modelValue:a(l).death_certificate,"onUpdate:modelValue":e[11]||(e[11]=r=>a(l).death_certificate=r),outlined:"",dense:"",accept:".pdf, .jpg, .jpeg, .png",label:"Upload death certificate"},{prepend:y(()=>[p(R,{name:"attach_file"})]),_:1},8,["modelValue"]),e[26]||(e[26]=t("p",{class:"text-[#61646B]"}," Death certificate emaw Declaration of death by the Medical Officer lehkha/ Damdawiina thi lo tan Annexure 1.3 II in a sawi ang in Authorised Officials hriatpuina lehkha thil tel tur a ni. ",-1)),m.$page.props.errors.death_certificate?(x(),V("div",Ye,u(m.$page.props.errors.death_certificate),1)):F("",!0)]),t("div",null,[e[27]||(e[27]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Diltu Aadhar card/Voter ID thlalak upload ",-1)),p(W,{modelValue:a(l).additional_document,"onUpdate:modelValue":e[12]||(e[12]=r=>a(l).additional_document=r),outlined:"",dense:"",accept:".pdf, .jpg, .jpeg, .png",label:"Upload additional document"},{prepend:y(()=>[p(R,{name:"attach_file"})]),_:1},8,["modelValue"]),m.$page.props.errors.additional_document?(x(),V("div",Ge,u(m.$page.props.errors.additional_document),1)):F("",!0)]),p(K,{style:{padding:"10px 24px","border-radius":"12px"},outline:"",unelevated:"","text-color":"black",label:"Preview",color:"white",onClick:j}),p(K,{label:"Submit & Send OTP",unelevated:"",color:"black",onClick:C,style:{padding:"10px 50px","border-radius":"12px"}})]),_:1})])]),p(Ve,{modelValue:S.value,"onUpdate:modelValue":e[13]||(e[13]=r=>S.value=r)},{default:y(()=>[t("div",null,[p(Fe,{class:"w-[411px] h-auto rounded-md"},{default:y(()=>[p(Se,{class:""},{default:y(()=>{var r,P,q,N;return[e[39]||(e[39]=t("p",{class:"text-center flex-shrink-0 rounded-[20px] mb-8"}," Ruang Phurh Diltu leh a man Chungchang ",-1)),e[40]||(e[40]=t("p",{class:""},"Diltu",-1)),t("div",Je,[t("div",Ze,[e[31]||(e[31]=t("p",{class:"text-[#61646B]"},"Hming",-1)),t("p",null,u(a(l).name),1)]),t("div",et,[e[32]||(e[32]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,u(a(l).district.label),1)]),t("div",tt,[e[33]||(e[33]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,u(a(l).locality),1)]),t("div",lt,[e[34]||(e[34]=t("p",{class:"text-[#61646B]"}," Phone Number ",-1)),t("p",null,u(a(l).mobile),1)])]),e[41]||(e[41]=t("hr",{class:"my-4 border-border"},null,-1)),e[42]||(e[42]=t("p",{class:""},"Bank Details",-1)),t("div",at,[t("div",nt,[e[35]||(e[35]=t("p",{class:"text-[#61646B]"},"Bank hming",-1)),t("p",null,u(a(l).bank_name),1)]),t("div",it,[e[36]||(e[36]=t("p",{class:"text-[#61646B]"}," Bank account number ",-1)),t("p",null,u(a(l).account_no),1)]),t("div",rt,[e[37]||(e[37]=t("p",{class:"text-[#61646B]"},"IFSC Code",-1)),t("p",null,u(a(l).ifsc_code),1)])]),e[43]||(e[43]=t("hr",{class:"my-4 border-border"},null,-1)),e[44]||(e[44]=t("p",{class:"text-center w-[128px] h-[17px] flex-shrink-0 rounded-[20px] mb-8"}," Document Thiltel te ",-1)),t("div",st,[t("div",ot,[t("p",null,u(((r=a(l).id_proof)==null?void 0:r.name)||"No file uploaded"),1)]),t("div",dt,[t("p",null,u((P=a(l).receipt)==null?void 0:P.name),1)]),t("div",ut,[t("p",null,u((q=a(l).death_certificate)==null?void 0:q.name),1)]),t("div",mt,[t("p",null,u((N=a(l).additional_document)==null?void 0:N.name),1)])]),t("div",pt,[e[38]||(e[38]=t("input",{type:"checkbox",class:"mt-1"},null,-1)),t("p",ct," Kei "+u(a(l).name)+" hian heng dilna leh document upload-te hi thu diktak a ni tih ka nemnghet e, diklo emaw felhlel a awm anih chuan a tul angin mawh ka phur ang. ",1)])]}),_:1}),p(Ce,{align:"right"},{default:y(()=>[U(p(K,{class:"text-black",color:"white",label:"Edit"},null,512),[[qe]]),p(K,{label:"Submit & Send OTP",color:"black",onClick:C})]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});export{_t as default};
