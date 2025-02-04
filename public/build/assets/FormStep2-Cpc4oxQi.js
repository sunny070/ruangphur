import{Q as J}from"./QSelect-DGroO4KQ.js";import{r as a,o as oe,a2 as le,T as se,a as m,b as S,w as d,i as r,f as t,q as re,x as s,g as f,t as i,e as g,k as y,l as Q,a7 as R,n as U,Q as _,u as $,m as K,p as C,s as ne}from"./app-jSku1vCx.js";import{Q as ae}from"./QForm-CtgMiRe_.js";import{Q as ie}from"./QPage-C99ylTjV.js";import{Q as de,a as ue}from"./QLayout-Cja8Z5W6.js";import{C as pe}from"./ClosePopup-BLw4O79e.js";import{_ as me}from"./WebLayout-DeDL5zEB.js";import{u as ve}from"./use-quasar-CLQ07CRK.js";import{E as X,L as E,S as ce}from"./index-C6qKv5BP.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QChip-DD3s9r6w.js";import"./format-C6r4MtX8.js";import"./QMenu-B9xFxoVG.js";import"./rtl-DFPa-2ov.js";import"./QTabs-BCaq7a8S.js";const xe={class:"flex flex-col justify-center items-center gap-6"},fe={class:"border w-[412px] h-[1100px] rounded-[10px] p-[23px]"},be={class:"q-mb-sm"},_e={key:0,class:"text-red"},ye={key:0,class:"text-red-500 text-sm"},ke={class:"pt-5"},Ve={key:0,class:"text-red"},he={key:0,class:"text-red-500 text-sm"},Se={class:"pt-5"},Ce={key:0,class:"text-red-500 text-sm"},Me={class:"pt-5"},we={key:0,class:"text-red-500 text-sm"},De={key:0,class:"text-red-500 text-sm"},Be={key:0,class:"text-red-500 text-sm"},Qe={key:0,class:"text-red-500 text-sm"},Le={class:"leading-[2px] pl-5"},Pe={class:"leading-3 pt-4 pl-5"},qe={class:"leading-[2px] pt-4 pl-5"},Fe={class:"leading-[2px] pt-4 pl-5"},Re={class:"flex gap-10 justify-evenly items-center"},Ue={class:"leading-[2px] pt-4"},$e={class:"text-bold text-[18px] text-center"},Ke={class:"leading-[2px] pt-4"},Ee={class:"text-bold text-[18px] text-center"},Ae={class:"leading-[2px] pt-4"},Ie={class:"leading-[2px] pt-4"},Ne={class:"leading-[2px] pt-4"},Oe={class:"leading-[2px] pt-4"},Te=40,ze=Object.assign({layout:me},{__name:"FormStep2",props:["form","districts"],setup(Y){const Z=ve(),k=a(!1),u=Y,A=a({lat:23.164543,lng:92.9375739}),p=a(null),x=a(null),M=a(""),I=a(""),N=a(""),w=a(""),O=a(""),T=a("");a(0),a(0);const V=a(!1),h=a(!1),z=a(""),j=a(""),L=a(null),P=a(null);oe(()=>{le(()=>{typeof google<"u"?(P.value=new google.maps.Geocoder,L.value=new google.maps.places.AutocompleteService):console.error("Google Maps API not loaded.")})});const o=se({source_district:u.form.source_district||"",source_locality:u.form.source_locality||"",source_lat:u.form.source_lat||"",source_lng:u.form.source_lng||"",destination_district:u.form.destination_district||"",destination_locality:u.form.destination_locality||"",destination_lat:u.form.destination_lat||"",destination_lng:u.form.destination_lng||"",distance:u.form.distance||"",vehicle_number:u.form.vehicle_number||"",vehicle_name:u.form.vehicle_name||"",driver_name:u.form.driver_name||"",driver_phone:u.form.driver_phone||"",transport_cost:u.form.transport_cost||""}),G=a(u.districts||[]),q=()=>{o.post(route("form.storeStep2"),{onError:n=>{console.log(n),o.errors=n,k.value=!1},onSuccess:()=>{k.value=!1,Z.notify({type:"positive",message:"Form 2 submitted successfully!",position:"top-right"})}})},W=(n,e)=>{L.value&&L.value.getPlacePredictions({input:n},(l,v)=>{v===google.maps.places.PlacesServiceStatus.OK&&l.length&&ee(l[0].place_id,e)})},ee=(n,e)=>{new google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:n},(v,b)=>{if(b===google.maps.places.PlacesServiceStatus.OK){const c={lat:v.geometry.location.lat(),lng:v.geometry.location.lng()};e==="source"?(p.value=c,M.value=v.formatted_address,I.value=c.lat,N.value=c.lng,o.source_locality=v.formatted_address,o.source_lat=c.lat,o.source_lng=c.lng):e==="destination"&&(x.value=c,w.value=v.formatted_address,O.value=c.lat,T.value=c.lng,o.destination_locality=v.formatted_address,o.destination_lat=c.lat,o.destination_lng=c.lng),F()}})},H=(n,e)=>{P.value&&P.value.geocode({location:n},(l,v)=>{if(v==="OK"&&l[0]){const b=l[0].formatted_address;e==="source"?(M.value=b,I.value=n.lat,N.value=n.lng,o.source_locality=b,o.source_lat=n.lat,o.source_lng=n.lng):e==="destination"&&(w.value=b,O.value=n.lat,T.value=n.lng,o.destination_locality=b,o.destination_lat=n.lat,o.destination_lng=n.lng),F()}else console.error("Geocoder failed due to:",v)})},D=(n,e)=>{const l={lat:n.latLng.lat(),lng:n.latLng.lng()};e==="source"?(p.value=l,H(l,"source")):e==="destination"&&(x.value=l,H(l,"destination"),F())},F=()=>{if(p.value&&x.value){const e=B(x.value.lat-p.value.lat),l=B(x.value.lng-p.value.lng),v=B(p.value.lat),b=B(x.value.lat),c=Math.sin(e/2)*Math.sin(e/2)+Math.cos(v)*Math.cos(b)*Math.sin(l/2)*Math.sin(l/2),te=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));o.distance=(6371*te).toFixed(2),o.transport_cost=(o.distance*Te).toFixed(2)}},B=n=>n*(Math.PI/180);return(n,e)=>(m(),S(de,null,{default:d(()=>[r(ue,null,{default:d(()=>[r(ie,{padding:""},{default:d(()=>[t("div",xe,[e[39]||(e[39]=t("div",{class:"border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center items-center"},[t("img",{id:"background",class:"w-[412px] h-[193px]",src:"image/Vertical Stepper with numbers2.png"})],-1)),t("div",fe,[r(ae,{onSubmit:re(q,["prevent"]),class:"q-gutter-md"},{default:d(()=>[e[37]||(e[37]=t("div",{class:"pb-3 flex items-center gap-2"},[t("div",{class:"w-[3px] h-[19px] flex-shrink-0 bg-black"}),t("h6",null,"Ruang Phurh leh Motor Chungchang")],-1)),t("div",be,[e[29]||(e[29]=t("p",{class:"text-[#61646B]"}," Ruang phurh tanna hmun ",-1)),t("div",null,[e[28]||(e[28]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," District ",-1)),r(J,{dense:"",outlined:"",modelValue:s(o).source_district,"onUpdate:modelValue":e[0]||(e[0]=l=>s(o).source_district=l),modelModifiers:{number:!0},label:"Select Source District",options:G.value,behavior:"menu",error:s(o).errors.source_district,"error-message":s(o).errors.source_district?s(o).errors.source_district[0]:"Source District is Required"},null,8,["modelValue","options","error","error-message"]),n.$page.props.errors.source_district?(m(),f("div",_e,i(n.$page.props.errors.source_district),1)):g("",!0)])]),e[38]||(e[38]=t("div",null,[t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Veng/Khua ")],-1)),r(y,{outlined:"",modelValue:M.value,"onUpdate:modelValue":e[1]||(e[1]=l=>M.value=l),label:"Source Locality",readonly:"",onClick:e[2]||(e[2]=l=>V.value=!0)},null,8,["modelValue"]),s(o).errors.source_locality?(m(),f("div",ye,i(s(o).errors.source_locality),1)):g("",!0),t("div",ke,[t("div",null,[e[30]||(e[30]=t("p",{class:"text-[#61646B]"}," Ruang dahna tur hmun ",-1)),r(J,{dense:"",outlined:"",modelValue:s(o).destination_district,"onUpdate:modelValue":e[3]||(e[3]=l=>s(o).destination_district=l),modelModifiers:{number:!0},label:"Select Source District",options:G.value,behavior:"menu",error:s(o).errors.destination_district,"error-message":s(o).errors.destination_district||""},null,8,["modelValue","options","error","error-message"]),n.$page.props.errors.destination_district?(m(),f("div",Ve,i(n.$page.props.errors.destination_district),1)):g("",!0)])]),t("div",null,[r(y,{outlined:"",modelValue:w.value,"onUpdate:modelValue":e[4]||(e[4]=l=>w.value=l),label:"Destination Locality",readonly:"",onClick:e[5]||(e[5]=l=>h.value=!0)},null,8,["modelValue"]),s(o).errors.destination_locality?(m(),f("div",he,i(s(o).errors.destination_locality),1)):g("",!0)]),t("div",Se,[e[31]||(e[31]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Kilometer zat ",-1)),r(y,{modelValue:s(o).distance,"onUpdate:modelValue":e[6]||(e[6]=l=>s(o).distance=l),id:"distance",type:"number",outlined:"",label:"Distance (in km)",readonly:""},null,8,["modelValue"]),s(o).errors.distance?(m(),f("div",Ce,i(s(o).errors.distance),1)):g("",!0)]),t("div",Me,[e[32]||(e[32]=t("p",{class:"text-[#61646B]"}," Ruang phurhna motor ",-1)),e[33]||(e[33]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor hman man (Rs) ",-1)),r(y,{modelValue:s(o).transport_cost,"onUpdate:modelValue":e[7]||(e[7]=l=>s(o).transport_cost=l),id:"transport-cost",type:"number",outlined:"",label:"Transport Cost (₹)",readonly:""},null,8,["modelValue"]),s(o).errors.transport_cost?(m(),f("div",we,i(s(o).errors.transport_cost),1)):g("",!0)]),t("div",null,[e[34]||(e[34]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor neitu/khalhtu hming ",-1)),Q(t("input",{type:"text",placeholder:"Motor neitu/khalhtu hming pum",id:"from_places","onUpdate:modelValue":e[8]||(e[8]=l=>s(o).driver_name=l),class:U(["form-control",["border p-2 w-full rounded-lg",s(o).errors.driver_name?"border-red-500":"border-gray-300"]])},null,2),[[R,s(o).driver_name]]),s(o).errors.driver_name?(m(),f("div",De,i(s(o).errors.driver_name),1)):g("",!0)]),t("div",null,[e[35]||(e[35]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor neitu/khalhtu phone number ",-1)),Q(t("input",{type:"tel",placeholder:"Motor neitu/khalhtu biak pawh theihna tur",id:"from_places","onUpdate:modelValue":e[9]||(e[9]=l=>s(o).driver_phone=l),class:U(["form-control",["border p-2 w-full rounded-lg",s(o).errors.driver_phone?"border-red-500":"border-gray-300"]]),maxlength:"10",onInput:e[10]||(e[10]=l=>s(o).driver_phone=s(o).driver_phone.replace(/\D/g,"").slice(0,10))},null,34),[[R,s(o).driver_phone]]),s(o).errors.driver_phone?(m(),f("div",Be,i(s(o).errors.driver_phone),1)):g("",!0)]),t("div",null,[e[36]||(e[36]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor registration number ",-1)),Q(t("input",{type:"text",placeholder:"Ruang phurhna motor registration number",id:"from_places","onUpdate:modelValue":e[11]||(e[11]=l=>s(o).vehicle_number=l),class:U(["form-control",["border p-2 w-full rounded-lg",s(o).errors.vehicle_number?"border-red-500":"border-gray-300"]])},null,2),[[R,s(o).vehicle_number]]),s(o).errors.vehicle_number?(m(),f("div",Qe,i(s(o).errors.vehicle_number),1)):g("",!0)]),r(_,{style:{padding:"10px 24px","border-radius":"12px"},outline:"",unelevated:"","text-color":"black",label:"Preview",color:"white",onClick:e[12]||(e[12]=l=>k.value=!0)}),r(_,{unelevated:"",label:"Next",color:"black",onClick:q,style:{padding:"10px 95px","border-radius":"12px"}})]),_:1})])]),r($,{modelValue:V.value,"onUpdate:modelValue":e[19]||(e[19]=l=>V.value=l)},{default:d(()=>[r(K,{style:{width:"90vw","max-width":"600px"}},{default:d(()=>[r(C,null,{default:d(()=>[e[40]||(e[40]=t("h6",null,"Select Source Location",-1)),r(s(X),{center:A.value,zoom:7,class:"map-container",onClick:e[14]||(e[14]=l=>D(l,"source"))},{default:d(()=>[p.value?(m(),S(s(E),{key:0,position:p.value,options:{position:p.value,label:"S"},onDragend:e[13]||(e[13]=l=>D(l,"source"))},null,8,["position","options"])):g("",!0)]),_:1},8,["center"]),r(y,{outlined:"",modelValue:z.value,"onUpdate:modelValue":[e[15]||(e[15]=l=>z.value=l),e[16]||(e[16]=l=>W(l,"source"))],placeholder:"Search Source Location"},null,8,["modelValue"])]),_:1}),r(C,{align:"right"},{default:d(()=>[r(_,{flat:"",color:"red",label:"Cancel",onClick:e[17]||(e[17]=l=>V.value=!1)}),r(_,{flat:"",label:"Confirm",color:"green",onClick:e[18]||(e[18]=l=>V.value=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r($,{modelValue:h.value,"onUpdate:modelValue":e[26]||(e[26]=l=>h.value=l)},{default:d(()=>[r(K,{style:{width:"90vw","max-width":"600px"}},{default:d(()=>[r(C,null,{default:d(()=>[e[41]||(e[41]=t("h6",null,"Select Destination Location",-1)),r(y,{outlined:"",modelValue:j.value,"onUpdate:modelValue":[e[20]||(e[20]=l=>j.value=l),e[21]||(e[21]=l=>W(l,"destination"))],placeholder:"Search Destination Location"},null,8,["modelValue"]),r(s(X),{center:A.value,zoom:7,class:"map-container",onClick:e[23]||(e[23]=l=>D(l,"destination"))},{default:d(()=>[p.value?(m(),S(s(E),{key:0,position:p.value,options:{position:p.value,label:"S"}},null,8,["position","options"])):g("",!0),x.value?(m(),S(s(E),{key:1,position:x.value,options:{position:x.value,label:"D"},onDragend:e[22]||(e[22]=l=>D(l,"destination"))},null,8,["position","options"])):g("",!0),p.value&&x.value?(m(),S(s(ce),{key:2,path:[p.value,x.value],options:{strokeColor:"#FF0000",strokeOpacity:1,strokeWeight:2}},null,8,["path"])):g("",!0)]),_:1},8,["center"])]),_:1}),r(C,{align:"right"},{default:d(()=>[r(_,{flat:"",label:"Cancel",color:"red",onClick:e[24]||(e[24]=l=>h.value=!1)}),r(_,{flat:"",label:"Confirm",color:"green",onClick:e[25]||(e[25]=l=>h.value=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r($,{modelValue:k.value,"onUpdate:modelValue":e[27]||(e[27]=l=>k.value=l)},{default:d(()=>[t("div",null,[r(K,{class:"w-[411px] h-[900px] rounded-t-lg"},{default:d(()=>[r(C,{class:""},{default:d(()=>[e[52]||(e[52]=t("p",{class:"text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] mb-8"}," Ruang Phurh leh Motor Chungchang ",-1)),e[53]||(e[53]=t("p",{class:"mb-8"},"Ruang phurh tanna",-1)),t("div",Le,[e[42]||(e[42]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i(s(o).source_district.label),1)]),t("div",Pe,[e[43]||(e[43]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i(s(o).source_locality),1)]),e[54]||(e[54]=t("hr",{class:"my-4 border-border"},null,-1)),e[55]||(e[55]=t("p",{class:"mb-8 mt-8 text-[#363636]"}," Ruang dahna tur hmun ",-1)),t("div",qe,[e[44]||(e[44]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i(s(o).destination_district.label),1)]),t("div",Fe,[e[45]||(e[45]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i(s(o).destination_locality),1)]),e[56]||(e[56]=t("hr",{class:"my-4 border-border"},null,-1)),t("div",Re,[t("div",Ue,[t("p",$e,i(s(o).distance),1),e[46]||(e[46]=t("p",{class:"text-[#61646B]"},"Kilometer",-1))]),t("div",Ke,[t("p",Ee,i(s(o).transport_cost),1),e[47]||(e[47]=t("p",{class:"text-[#61646B]"}," Motor hman man ",-1))])]),e[57]||(e[57]=t("hr",{class:"my-4 border-border"},null,-1)),e[58]||(e[58]=t("p",{class:"mb-8 mt-8"},"Ruang phurhna motor",-1)),t("div",Ae,[e[48]||(e[48]=t("p",{class:"text-[#61646B]"}," Motor registration number ",-1)),t("p",null,i(s(o).vehicle_number),1)]),t("div",Ie,[e[49]||(e[49]=t("p",{class:"text-[#61646B]"},"Motor hming",-1)),t("p",null,i(s(o).vehicle_name),1)]),t("div",Ne,[e[50]||(e[50]=t("p",{class:"text-[#61646B]"}," Motor neitu/khalhtu hming ",-1)),t("p",null,i(s(o).driver_name),1)]),t("div",Oe,[e[51]||(e[51]=t("p",{class:"text-[#61646B]"}," Motor neitu/khalhtu phone number ",-1)),t("p",null,i(s(o).driver_phone),1)])]),_:1}),r(ne,{class:"ml-[22px] pt-[35px]"},{default:d(()=>[Q(r(_,{style:{padding:"10px 28px","border-radius":"12px"},class:"text-black",color:"white",label:"Edit"},null,512),[[pe]]),r(_,{style:{padding:"10px 80px","border-radius":"12px"},label:"Approve & Next",color:"black",onClick:q})]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),at=ge(ze,[["__scopeId","data-v-6498ea20"]]);export{at as default};
