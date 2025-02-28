import{Q as N}from"./QSelect-DDZxhFw8.js";import{r as c,T as H,o as J,a as p,b,w as a,d as r,g as t,n as X,u as o,j as k,Q as A,h as y,t as d,f as m,q as C,z as R,v as q,k as f,s as F,l as U,m as V,p as Y,M as Z}from"./app-BHeael7A.js";import{Q as ee}from"./QForm-DV-5sO98.js";import{Q as te}from"./QPage-DO6UowWf.js";import{a as oe,b as se}from"./QLayout-7wX7CmRM.js";import{C as le}from"./ClosePopup-B8Woq_MJ.js";import{u as re}from"./use-quasar-D3GwrXq7.js";import{E as O,L as h,S as T}from"./index-dQG2YjF7.js";import{W as ne}from"./WebLayout-BYqkswsI.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QChip-DfmNLKZN.js";import"./format-CYKmJ8Oj.js";import"./QMenu-aFYmALZq.js";import"./rtl-DFPa-2ov.js";import"./QTabs-qZBaUD38.js";const ae={class:"flex flex-col justify-center items-center gap-6"},de={class:"border w-[412px] h-[1100px] rounded-[10px] p-[23px]"},ue={class:"q-mb-sm"},pe={class:"pt-2"},me={class:"flex items-center gap-2"},ve={key:0,class:"text-red-500 text-sm"},ge={class:"pt-5"},ce={class:"pt-2"},fe={class:"flex items-center gap-2"},xe={key:0,class:"text-red-500 text-sm"},be={class:"pt-5"},ye={key:0,class:"text-red-500 text-sm"},ke={class:"pt-5"},we={key:0,class:"text-red-500 text-sm"},De={key:0,class:"text-red-500 text-sm"},Ve={key:0,class:"text-red-500 text-sm"},Se={key:0,class:"text-red-500 text-sm"},Ce={class:"map-container"},he={class:"map-container"},Me={class:"leading-[2px] pl-5"},_e={class:"leading-3 pt-4 pl-5"},Be={class:"leading-[2px] pt-4 pl-5"},Le={class:"leading-[2px] pt-4 pl-5"},Qe={class:"flex gap-10 justify-evenly items-center"},Re={class:"leading-[2px] pt-4"},qe={class:"text-bold text-[18px] text-center"},Fe={class:"leading-[2px] pt-4"},Ue={class:"text-bold text-[18px] text-center"},$e={class:"leading-[2px] pt-4"},Ie={class:"leading-[2px] pt-4"},Ke={class:"leading-[2px] pt-4"},Pe={class:"leading-[2px] pt-4"},Ee=40,ze=Object.assign({layout:ne},{__name:"FormSetup2.11",props:["form","districts"],setup(j){const M=re(),w=c(!1),u=j,x=c(null),_=c({lat:23.164543,lng:92.9375739}),v=c(null),g=c(null),$=c(""),I=c(""),B=c(!1),L=c([]),K=c({strokeColor:"#FF0000",strokeOpacity:1,strokeWeight:2,geodesic:!0}),s=H({source_district:u.form.source_district||"",source_locality:u.form.source_locality||"",source_lat:u.form.source_lat||"",source_lng:u.form.source_lng||"",destination_district:u.form.destination_district||"",destination_locality:u.form.destination_locality||"",destination_lat:u.form.destination_lat||"",destination_lng:u.form.destination_lng||"",distance:u.form.distance||"",vehicle_number:u.form.vehicle_number||"",vehicle_name:u.form.vehicle_name||"",driver_name:u.form.driver_name||"",driver_phone:u.form.driver_phone||"",transport_cost:u.form.transport_cost||""}),P=c(u.districts||[]);J(()=>{typeof google<"u"&&(autocompleteService.value=new google.maps.places.AutocompleteService,placesService.value=new google.maps.places.PlacesService(document.createElement("div")),distanceMatrixService.value=new google.maps.DistanceMatrixService)});const E=n=>{Z(()=>{x.value&&(x.value.panTo(_.value),n==="source"&&v.value?x.value.setCenter(v.value):n==="destination"&&g.value&&x.value.setCenter(g.value))})},z=n=>{x.value=n},S=(n,e)=>{const l={lat:n.latLng.lat(),lng:n.latLng.lng()};e==="source"?v.value=l:g.value=l,getAddressFromCoords(l,e),W()},W=()=>{!v.value||!g.value||distanceMatrixService.value.getDistanceMatrix({origins:[new google.maps.LatLng(v.value)],destinations:[new google.maps.LatLng(g.value)],travelMode:"DRIVING"},(n,e)=>{if(e==="OK"){const l=n.rows[0].elements[0];if(l.status==="OK"){const D=l.distance.value/1e3;s.distance=D.toFixed(2),s.transport_cost=(D*Ee).toFixed(2),L.value=[v.value,g.value],B.value=!0,G()}else M.notify({type:"negative",message:"Route not found between selected locations"})}else M.notify({type:"negative",message:"Failed to calculate distance. Please try again."})})},G=()=>{if(x.value&&v.value&&g.value){const n=new google.maps.LatLngBounds;n.extend(v.value),n.extend(g.value),x.value.fitBounds(n,{padding:50})}},Q=()=>{s.post(route("form.storeStep2"),{onError:n=>{s.errors=n,w.value=!1},onSuccess:()=>{w.value=!1,M.notify({type:"positive",message:"Form 2 submitted successfully!",position:"top-right"})}})};return(n,e)=>(p(),b(oe,null,{default:a(()=>[r(se,null,{default:a(()=>[r(te,{padding:""},{default:a(()=>[t("div",ae,[e[44]||(e[44]=t("div",{class:"border-2 border-gray-200 bg-[#E9F4FF] flex-shrink-0 rounded-[10px] text-center items-center"},[t("img",{id:"background",class:"w-[412px] h-[193px]",src:"image/Vertical Stepper with numbers2.png"})],-1)),t("div",de,[r(ee,{onSubmit:X(Q,["prevent"]),class:"q-gutter-md"},{default:a(()=>{var l,D;return[t("div",ue,[e[34]||(e[34]=t("p",{class:"text-[#61646B]"},"Ruang phurh tanna hmun",-1)),t("div",null,[e[32]||(e[32]=t("div",{class:"text-sm font-medium text-black q-mb-xs"},"District",-1)),r(N,{dense:"",outlined:"",modelValue:o(s).source_district,"onUpdate:modelValue":e[0]||(e[0]=i=>o(s).source_district=i),modelModifiers:{number:!0},label:"Select Source District",options:P.value,behavior:"menu",error:!!o(s).errors.source_district,"error-message":((l=o(s).errors.source_district)==null?void 0:l[0])||"Source District is Required"},null,8,["modelValue","options","error","error-message"])]),t("div",pe,[e[33]||(e[33]=t("div",{class:"text-sm font-medium text-black q-mb-xs"},"Veng/Khua",-1)),t("div",me,[r(k,{outlined:"",modelValue:n.source_locality,"onUpdate:modelValue":e[2]||(e[2]=i=>n.source_locality=i),label:"Source Locality",ref:"sourceInput",onClick:e[3]||(e[3]=i=>n.showSourceDialog=!0),class:"cursor-pointer"},{append:a(()=>[r(A,{name:"map",class:"cursor-pointer text-black",onClick:e[1]||(e[1]=i=>n.showSourceDialog=!0)})]),_:1},8,["modelValue"])]),o(s).errors.source_locality?(p(),y("div",ve,d(o(s).errors.source_locality),1)):m("",!0)])]),t("div",ge,[e[37]||(e[37]=t("p",{class:"text-[#61646B]"},"Ruang dahna tur hmun",-1)),t("div",null,[e[35]||(e[35]=t("div",{class:"text-sm font-medium text-black q-mb-xs"},"District",-1)),r(N,{dense:"",outlined:"",modelValue:o(s).destination_district,"onUpdate:modelValue":e[4]||(e[4]=i=>o(s).destination_district=i),modelModifiers:{number:!0},label:"Select Destination District",options:P.value,behavior:"menu",error:!!o(s).errors.destination_district,"error-message":((D=o(s).errors.destination_district)==null?void 0:D[0])||"Destination District is Required"},null,8,["modelValue","options","error","error-message"])]),t("div",ce,[e[36]||(e[36]=t("div",{class:"text-sm font-medium text-black q-mb-xs"},"Veng/Khua",-1)),t("div",fe,[r(k,{outlined:"",modelValue:n.destination_locality,"onUpdate:modelValue":e[6]||(e[6]=i=>n.destination_locality=i),label:"Destination Locality",ref:"destInput",onClick:e[7]||(e[7]=i=>n.showDestinationDialog=!0),class:"cursor-pointer"},{append:a(()=>[r(A,{name:"map",class:"cursor-pointer text-black",onClick:e[5]||(e[5]=i=>n.showDestinationDialog=!0)})]),_:1},8,["modelValue"])]),o(s).errors.destination_locality?(p(),y("div",xe,d(o(s).errors.destination_locality),1)):m("",!0)])]),t("div",be,[e[38]||(e[38]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Kilometer zat ",-1)),r(k,{modelValue:o(s).distance,"onUpdate:modelValue":e[8]||(e[8]=i=>o(s).distance=i),id:"distance",type:"number",outlined:"",label:"Distance (in km)",readonly:""},null,8,["modelValue"]),o(s).errors.distance?(p(),y("div",ye,d(o(s).errors.distance),1)):m("",!0)]),t("div",ke,[e[39]||(e[39]=t("p",{class:"text-[#61646B]"}," Ruang phurhna motor ",-1)),e[40]||(e[40]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor hman man (Rs) ",-1)),r(k,{modelValue:o(s).transport_cost,"onUpdate:modelValue":e[9]||(e[9]=i=>o(s).transport_cost=i),id:"transport-cost",type:"number",outlined:"",label:"Transport Cost (₹)",readonly:""},null,8,["modelValue"]),o(s).errors.transport_cost?(p(),y("div",we,d(o(s).errors.transport_cost),1)):m("",!0)]),t("div",null,[e[41]||(e[41]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor neitu/khalhtu hming ",-1)),C(t("input",{type:"text",placeholder:"Motor neitu/khalhtu hming pum",id:"from_places","onUpdate:modelValue":e[10]||(e[10]=i=>o(s).driver_name=i),class:q(["form-control",["border p-2 w-full rounded-lg",o(s).errors.driver_name?"border-red-500":"border-gray-300"]])},null,2),[[R,o(s).driver_name]]),o(s).errors.driver_name?(p(),y("div",De,d(o(s).errors.driver_name),1)):m("",!0)]),t("div",null,[e[42]||(e[42]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor neitu/khalhtu phone number ",-1)),C(t("input",{type:"tel",placeholder:"Motor neitu/khalhtu biak pawh theihna tur",id:"from_places","onUpdate:modelValue":e[11]||(e[11]=i=>o(s).driver_phone=i),class:q(["form-control",["border p-2 w-full rounded-lg",o(s).errors.driver_phone?"border-red-500":"border-gray-300"]]),maxlength:"10",onInput:e[12]||(e[12]=i=>o(s).driver_phone=o(s).driver_phone.replace(/\D/g,"").slice(0,10))},null,34),[[R,o(s).driver_phone]]),o(s).errors.driver_phone?(p(),y("div",Ve,d(o(s).errors.driver_phone),1)):m("",!0)]),t("div",null,[e[43]||(e[43]=t("div",{class:"text-sm font-medium text-black q-mb-xs"}," Motor registration number ",-1)),C(t("input",{type:"text",placeholder:"Ruang phurhna motor registration number",id:"from_places","onUpdate:modelValue":e[13]||(e[13]=i=>o(s).vehicle_number=i),class:q(["form-control",["border p-2 w-full rounded-lg",o(s).errors.vehicle_number?"border-red-500":"border-gray-300"]])},null,2),[[R,o(s).vehicle_number]]),o(s).errors.vehicle_number?(p(),y("div",Se,d(o(s).errors.vehicle_number),1)):m("",!0)]),r(f,{style:{padding:"10px 24px","border-radius":"12px"},outline:"",unelevated:"","text-color":"black",label:"Preview",color:"white",onClick:e[14]||(e[14]=i=>w.value=!0)}),r(f,{unelevated:"",label:"Next",color:"black",onClick:Q,style:{padding:"10px 95px","border-radius":"12px"}})]}),_:1})])]),r(F,{modelValue:n.showSourceDialog,"onUpdate:modelValue":e[21]||(e[21]=l=>n.showSourceDialog=l),onShow:e[22]||(e[22]=l=>E("source"))},{default:a(()=>[r(U,{style:{width:"90vw","max-width":"600px"}},{default:a(()=>[r(V,null,{default:a(()=>[e[45]||(e[45]=t("h6",null,"Select Source Location",-1)),r(k,{outlined:"",modelValue:$.value,"onUpdate:modelValue":[e[15]||(e[15]=l=>$.value=l),e[16]||(e[16]=l=>n.searchLocation(l,"source"))],placeholder:"Search Source Location"},null,8,["modelValue"]),t("div",Ce,[r(o(O),{center:_.value,zoom:15,onMapReady:z},{default:a(()=>[v.value?(p(),b(o(h),{key:0,position:v.value,options:{draggable:!0,label:"S"},onDragend:e[17]||(e[17]=l=>S(l,"source"))},null,8,["position"])):m("",!0),g.value?(p(),b(o(h),{key:1,position:g.value,options:{draggable:!0,label:"D"},onDragend:e[18]||(e[18]=l=>S(l,"destination"))},null,8,["position"])):m("",!0),B.value?(p(),b(o(T),{key:2,path:L.value,options:K.value},null,8,["path","options"])):m("",!0)]),_:1},8,["center"])])]),_:1}),r(V,{align:"right"},{default:a(()=>[r(f,{flat:"",color:"red",label:"Cancel",onClick:e[19]||(e[19]=l=>n.showSourceDialog=!1)}),r(f,{flat:"",label:"Confirm",color:"green",onClick:e[20]||(e[20]=l=>n.showSourceDialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(F,{modelValue:n.showDestinationDialog,"onUpdate:modelValue":e[29]||(e[29]=l=>n.showDestinationDialog=l),onShow:e[30]||(e[30]=l=>E("destination"))},{default:a(()=>[r(U,{style:{width:"90vw","max-width":"600px"}},{default:a(()=>[r(V,null,{default:a(()=>[e[46]||(e[46]=t("h6",null,"Select Destination Location",-1)),r(k,{outlined:"",modelValue:I.value,"onUpdate:modelValue":[e[23]||(e[23]=l=>I.value=l),e[24]||(e[24]=l=>n.searchLocation(l,"destination"))],placeholder:"Search Destination Location"},null,8,["modelValue"]),t("div",he,[r(o(O),{center:_.value,zoom:15,onMapReady:z},{default:a(()=>[v.value?(p(),b(o(h),{key:0,position:v.value,options:{draggable:!0,label:"S"},onDragend:e[25]||(e[25]=l=>S(l,"source"))},null,8,["position"])):m("",!0),g.value?(p(),b(o(h),{key:1,position:g.value,options:{draggable:!0,label:"D"},onDragend:e[26]||(e[26]=l=>S(l,"destination"))},null,8,["position"])):m("",!0),B.value?(p(),b(o(T),{key:2,path:L.value,options:K.value},null,8,["path","options"])):m("",!0)]),_:1},8,["center"])])]),_:1}),r(V,{align:"right"},{default:a(()=>[r(f,{flat:"",color:"red",label:"Cancel",onClick:e[27]||(e[27]=l=>n.showDestinationDialog=!1)}),r(f,{flat:"",label:"Confirm",color:"green",onClick:e[28]||(e[28]=l=>n.showDestinationDialog=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(F,{modelValue:w.value,"onUpdate:modelValue":e[31]||(e[31]=l=>w.value=l)},{default:a(()=>[t("div",null,[r(U,{class:"w-[411px] h-[900px] rounded-t-lg"},{default:a(()=>[r(V,{class:""},{default:a(()=>[e[57]||(e[57]=t("p",{class:"text-center w-[242px] h-[17px] flex-shrink-0 rounded-[20px] mb-8"}," Ruang Phurh leh Motor Chungchang ",-1)),e[58]||(e[58]=t("p",{class:"mb-8"},"Ruang phurh tanna",-1)),t("div",Me,[e[47]||(e[47]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,d(o(s).source_district.label),1)]),t("div",_e,[e[48]||(e[48]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,d(o(s).source_locality),1)]),e[59]||(e[59]=t("hr",{class:"my-4 border-border"},null,-1)),e[60]||(e[60]=t("p",{class:"mb-8 mt-8 text-[#363636]"}," Ruang dahna tur hmun ",-1)),t("div",Be,[e[49]||(e[49]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,d(o(s).destination_district.label),1)]),t("div",Le,[e[50]||(e[50]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,d(o(s).destination_locality),1)]),e[61]||(e[61]=t("hr",{class:"my-4 border-border"},null,-1)),t("div",Qe,[t("div",Re,[t("p",qe,d(o(s).distance),1),e[51]||(e[51]=t("p",{class:"text-[#61646B]"},"Kilometer",-1))]),t("div",Fe,[t("p",Ue,d(o(s).transport_cost),1),e[52]||(e[52]=t("p",{class:"text-[#61646B]"}," Motor hman man ",-1))])]),e[62]||(e[62]=t("hr",{class:"my-4 border-border"},null,-1)),e[63]||(e[63]=t("p",{class:"mb-8 mt-8"},"Ruang phurhna motor",-1)),t("div",$e,[e[53]||(e[53]=t("p",{class:"text-[#61646B]"}," Motor registration number ",-1)),t("p",null,d(o(s).vehicle_number),1)]),t("div",Ie,[e[54]||(e[54]=t("p",{class:"text-[#61646B]"},"Motor hming",-1)),t("p",null,d(o(s).vehicle_name),1)]),t("div",Ke,[e[55]||(e[55]=t("p",{class:"text-[#61646B]"}," Motor neitu/khalhtu hming ",-1)),t("p",null,d(o(s).driver_name),1)]),t("div",Pe,[e[56]||(e[56]=t("p",{class:"text-[#61646B]"}," Motor neitu/khalhtu phone number ",-1)),t("p",null,d(o(s).driver_phone),1)])]),_:1}),r(Y,{class:"ml-[22px] pt-[35px]"},{default:a(()=>[C(r(f,{style:{padding:"10px 28px","border-radius":"12px"},class:"text-black",color:"white",label:"Edit"},null,512),[[le]]),r(f,{style:{padding:"10px 80px","border-radius":"12px"},label:"Approve & Next",color:"black",onClick:Q})]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),st=ie(ze,[["__scopeId","data-v-428f97ee"]]);export{st as default};
