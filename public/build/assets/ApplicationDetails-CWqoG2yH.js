import{c as wt,a,b as n,w as d,f as t,i as u,j as y,x as Ct,y as Et,Q as x,t as i,z as Dt,e as p,d as b,N as yt}from"./app-BU-P0o3a.js";import{Q as v}from"./QChip-W2JHKdWw.js";import{Q as jt}from"./QPage-BnL5U6Tp.js";import{_ as At}from"./AdminLayout-B373Zi-z.js";import"./QLayout-CjzmvHMW.js";import"./format-B28FXeBv.js";import"./QMenu--S8s1Z2H.js";import"./QExpansionItem-BfALLecq.js";import"./ClosePopup-D9M7YmMK.js";const Mt={class:"grid md:grid-cols-2 gap-4"},Rt={class:"flex items-center order-1 md:order-none"},$t={class:"flex flex-wrap gap-2 justify-end order-2"},zt={class:"flex flex-col items-center px-4 md:pr-32"},Ft={class:"w-full max-w-4xl rounded-[10px] border border-[#EEE] bg-[#E9F4FF] p-4 md:p-5 mt-6"},Vt={class:"grid md:grid-cols-2 gap-4 text-center"},Pt={class:"flex flex-col items-center"},Nt={class:"text-xl md:text-2xl mt-2"},Qt={class:"mb-4 text-sm"},Kt={class:"grid md:grid-cols-3 gap-4"},qt={class:"col-span-3 md:col-span-1"},Tt={class:"font-bold"},It={class:"font-bold"},Ot={class:"font-bold"},St={class:"flex flex-col md:flex-row justify-center items-center gap-4 mt-4"},Yt={class:"grid md:grid-cols-2 gap-4 px-4 md:pr-28 mt-6"},Gt={class:"flex flex-col gap-4"},Ht={class:"border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"},Jt={class:"space-y-4"},Lt={class:"leading-[2px] pt-4"},Wt={class:"leading-[2px] pt-4"},Xt={class:"leading-[2px] pt-4"},Zt={class:"leading-[2px] pt-4"},Ut={class:"leading-[2px] pt-4"},_t={class:"leading-[2px] pt-4"},ts={class:"leading-[2px] pt-4"},ss={class:"border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"},es={class:"space-y-4"},is={class:"leading-[2px]"},ls={class:"leading-[2px] pt-4"},as={class:"leading-[2px] pt-4"},ns={class:"leading-[2px] pt-4"},os={class:"border-2 rounded-md w-full p-4 md:pl-12 md:pt-6"},ds={class:"flex flex-wrap gap-2"},ps={class:"flex flex-col gap-4"},rs={class:"border-2 w-full p-4 md:pl-12 md:pt-6 rounded-md"},cs={class:"space-y-4"},ms={class:"pl-4"},us={class:"leading-[2px]"},xs={class:"leading-[2px] pt-4"},gs={class:"pl-4"},fs={class:"leading-[2px]"},bs={class:"leading-[2px] pt-4"},vs={class:"leading-[2px] pt-4"},hs={class:"pl-4"},ys={class:"leading-[2px]"},ks={class:"leading-[2px] pt-4"},Bs={class:"leading-[2px] pt-4"},ws={class:"leading-[2px] pt-4"},Cs={class:"border-2 rounded-md w-full p-4 md:pl-12 md:pt-6"},Es={class:"space-y-4"},Ds={class:"leading-[2px]"},js={class:"leading-[2px] pt-4"},As={class:"leading-[2px] pt-4"},Ms={class:"flex flex-col md:flex-row justify-center items-center gap-4 my-6"},qs=Object.assign({layout:At},{__name:"ApplicationDetails",props:{application:Object},setup(e){const o=e,k=async l=>{if(confirm("Are you sure you want to approve this application?"))try{await yt.post(`/verifier/application/${l}/approve`)}catch(s){console.error(s)}},B=async l=>{if(confirm("Are you sure you want to reject this application?"))try{await yt.post(`/admin/application/${l}/reject`)}catch(s){console.error(s)}},f=l=>{l?window.open(l,"_blank"):$q.notify({type:"negative",message:"File not found"})},kt=(l,s)=>{const r=new Date(l),c=new Date(s),g=c.getFullYear()-r.getFullYear();return c.getMonth()<r.getMonth()||c.getMonth()===r.getMonth()&&c.getDate()<r.getDate()?g-1:g},Bt=wt(()=>kt(o.application.deceased.dob,o.application.deceased.time_of_death));return(l,s)=>(a(),n(jt,{padding:""},{default:d(()=>{var r,c,g,h,w,C,E,D,j,A,M,R,$,z,F,V,P,N,Q,K,q,T,I,O,S,Y,G,H,J,L,W,X,Z,U,_,tt,st,et,it,lt,at,nt,ot,dt,pt,rt,ct,mt,ut,xt,gt,ft,bt,vt,ht;return[t("div",Mt,[t("div",Rt,[u(Ct(Et),{href:l.route("verifier.application"),size:"sm",flat:"",outlined:"",class:"flex items-center justify-center"},{default:d(()=>[u(y,{name:"arrow_back",size:"16px",class:"q-mr-xs"}),s[8]||(s[8]=t("span",null,"Back",-1))]),_:1},8,["href"])]),t("div",$t,[u(x,{size:"sm",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center",style:{color:"#000","min-width":"100px",height:"40px","border-radius":"8px"},onClick:l.printTable},{default:d(()=>[u(y,{name:"print",size:"16px",class:"q-mr-xs"}),s[9]||(s[9]=t("span",{class:"text-xs md:text-sm"},"Print",-1))]),_:1},8,["onClick"]),u(x,{size:"sm",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center",style:{color:"#000","min-width":"100px",height:"40px","border-radius":"8px"},onClick:l.exportToExcel},{default:d(()=>[u(y,{name:"ios_share",size:"16px",class:"q-mr-xs"}),s[10]||(s[10]=t("span",{class:"text-xs md:text-sm"},"Export",-1))]),_:1},8,["onClick"])])]),t("div",zt,[t("div",Ft,[t("div",Vt,[t("div",Pt,[s[11]||(s[11]=t("img",{src:"/image/icon 1.png",alt:"Ruang",class:"w-12 h-12"},null,-1)),t("h5",Nt,i(e.application.applicant.name),1),t("p",Qt,i(e.application.deceased.relative.name)+" "+i(e.application.deceased.name),1)]),t("div",Kt,[t("div",qt,[u(Dt,{class:"md:hidden",vertical:""})]),t("div",null,[t("h5",Tt,i((c=(r=e.application)==null?void 0:r.transport)==null?void 0:c.distance),1),s[12]||(s[12]=t("p",{class:"text-[#5B656F]"},"Kilometre",-1))]),t("div",null,[t("h5",It,i((h=(g=e.application)==null?void 0:g.transport)==null?void 0:h.vehicle_number),1),s[13]||(s[13]=t("p",{class:"text-[#5B656F]"},"Motor Reg.",-1))]),t("div",null,[t("h5",Ot,i((C=(w=e.application)==null?void 0:w.transport)==null?void 0:C.transport_cost),1),s[14]||(s[14]=t("p",{class:"text-[#5B656F]"},"Amount (Rs)",-1))])])]),t("div",St,[((E=e.application)==null?void 0:E.status)==="Pending"?(a(),n(x,{key:0,onClick:s[0]||(s[0]=m=>k(e.application.id)),label:"Verify",size:"sm",class:"w-full md:w-36",style:{color:"#fff",height:"40px","border-radius":"8px",border:"1px solid #5b656f",background:"#000"}})):p("",!0),((D=e.application)==null?void 0:D.status)==="Pending"?(a(),n(x,{key:1,onClick:s[1]||(s[1]=m=>B(e.application.id)),label:"Reject",size:"sm",class:"w-full md:w-36",style:{color:"#000",height:"40px","border-radius":"8px",border:"1px solid #5b656f",background:"transparent"}})):p("",!0)])])]),t("div",Yt,[t("div",Gt,[t("div",Ht,[s[23]||(s[23]=t("p",{class:"text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"}," Mitthi Chungchang ",-1)),t("div",Jt,[s[15]||(s[15]=t("p",{class:"text-[#61646B]"},"Mitthi pianni leh thla",-1)),t("p",null,i(e.application.deceased.dob),1)]),t("div",Lt,[s[16]||(s[16]=t("p",{class:"text-[#61646B]"},"Kum",-1)),t("p",null,i(Bt.value)+" years",1)]),t("div",Wt,[s[17]||(s[17]=t("p",{class:"text-[#61646B]"},"Gender",-1)),t("p",null,i(e.application.deceased.gender),1)]),t("div",Xt,[s[18]||(s[18]=t("p",{class:"text-[#61646B]"},"Thih ni leh darkar",-1)),t("p",null,i(e.application.deceased.time_of_death),1)]),t("div",Zt,[s[19]||(s[19]=t("p",{class:"text-[#61646B]"},"Thihna hmun",-1)),t("p",null,i(e.application.deceased.place_of_death),1)]),t("div",Ut,[s[20]||(s[20]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i((M=(A=(j=e.application)==null?void 0:j.deceased)==null?void 0:A.district)==null?void 0:M.name),1)]),t("div",_t,[s[21]||(s[21]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i(($=(R=e.application)==null?void 0:R.deceased)==null?void 0:$.locality),1)]),t("div",ts,[s[22]||(s[22]=t("p",{class:"text-[#61646B]"},"Assembly Constituency",-1)),t("p",null,i((F=(z=e.application)==null?void 0:z.deceased)==null?void 0:F.constituency.name),1)])]),t("div",ss,[s[28]||(s[28]=t("p",{class:"text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"}," Ruang Phurh Diltu ",-1)),t("div",es,[t("div",is,[s[24]||(s[24]=t("p",{class:"text-[#61646B]"},"Hming",-1)),t("p",null,i((P=(V=e.application)==null?void 0:V.applicant)==null?void 0:P.name),1)]),t("div",ls,[s[25]||(s[25]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i((Q=(N=e.application)==null?void 0:N.applicant)==null?void 0:Q.district.name),1)]),t("div",as,[s[26]||(s[26]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i((q=(K=e.application)==null?void 0:K.applicant)==null?void 0:q.locality),1)]),t("div",ns,[s[27]||(s[27]=t("p",{class:"text-[#61646B]"},"Phone Number",-1)),t("p",null,i((I=(T=e.application)==null?void 0:T.applicant)==null?void 0:I.mobile),1)])])]),t("div",os,[s[33]||(s[33]=t("p",{class:"text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"}," Document Thiltel te ",-1)),t("div",ds,[(S=(O=e.application)==null?void 0:O.attachment)!=null&&S.id_proof?(a(),n(v,{key:0,dense:"",class:"transparent text-black",icon:"check_circle",clickable:"",onClick:s[2]||(s[2]=m=>f("/storage/"+e.application.attachment.id_proof))},{default:d(()=>s[29]||(s[29]=[b(" Mitthi Aadhar card/Voter ID/Birth Certificate ")])),_:1})):p("",!0),(G=(Y=e.application)==null?void 0:Y.attachment)!=null&&G.receipt?(a(),n(v,{key:1,dense:"",class:"transparent text-black",icon:"check_circle",clickable:"",onClick:s[3]||(s[3]=m=>f("/storage/"+e.application.attachment.receipt))},{default:d(()=>s[30]||(s[30]=[b(" Motor hman man Voucher/Receipt ")])),_:1})):p("",!0),(J=(H=e.application)==null?void 0:H.attachment)!=null&&J.death_certificate?(a(),n(v,{key:2,dense:"",class:"transparent text-black",icon:"check_circle",clickable:"",onClick:s[4]||(s[4]=m=>f("/storage/"+e.application.attachment.death_certificate))},{default:d(()=>s[31]||(s[31]=[b(" Death Certificate ")])),_:1})):p("",!0),(W=(L=e.application)==null?void 0:L.attachment)!=null&&W.additional_document?(a(),n(v,{key:3,dense:"",class:"transparent text-black",icon:"check_circle",clickable:"",onClick:s[5]||(s[5]=m=>f("/storage/"+e.application.attachment.additional_document))},{default:d(()=>s[32]||(s[32]=[b(" Diltu Aadhar card/voter ID ")])),_:1})):p("",!0)])])]),t("div",ps,[t("div",rs,[s[46]||(s[46]=t("p",{class:"text-center w-48 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"}," Ruang Phurh leh Motor Chungchang ",-1)),t("div",cs,[s[43]||(s[43]=t("p",{class:"pt-5"},"Ruang phurh tanna",-1)),t("div",ms,[t("div",us,[s[34]||(s[34]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i((Z=(X=e.application)==null?void 0:X.transport)==null?void 0:Z.source_district.name),1)]),t("div",xs,[s[35]||(s[35]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i((_=(U=e.application)==null?void 0:U.transport)==null?void 0:_.source_locality),1)])]),s[44]||(s[44]=t("p",{class:"pt-5"},"Ruang dahna tur hmun",-1)),t("div",gs,[t("div",fs,[s[36]||(s[36]=t("p",{class:"text-[#61646B]"},"District",-1)),t("p",null,i((st=(tt=e.application)==null?void 0:tt.transport)==null?void 0:st.destination_district.name),1)]),t("div",bs,[s[37]||(s[37]=t("p",{class:"text-[#61646B]"},"Veng/Khua",-1)),t("p",null,i((it=(et=e.application)==null?void 0:et.transport)==null?void 0:it.destination_locality),1)])]),t("div",vs,[s[38]||(s[38]=t("p",{class:"text-[#61646B]"},"Kilometer",-1)),t("p",null,i((at=(lt=e.application)==null?void 0:lt.transport)==null?void 0:at.distance),1)]),s[45]||(s[45]=t("p",{class:"pt-5"},"Ruang phurhna motor",-1)),t("div",hs,[t("div",ys,[s[39]||(s[39]=t("p",{class:"text-[#61646B]"}," Motor registration number ",-1)),t("p",null,i((ot=(nt=e.application)==null?void 0:nt.transport)==null?void 0:ot.vehicle_number),1)]),t("div",ks,[s[40]||(s[40]=t("p",{class:"text-[#61646B]"}," Motor neitu/khalhtu hming ",-1)),t("p",null,i((pt=(dt=e.application)==null?void 0:dt.transport)==null?void 0:pt.driver_name),1)]),t("div",Bs,[s[41]||(s[41]=t("p",{class:"text-[#61646B]"},"Phone Number",-1)),t("p",null,i((ct=(rt=e.application)==null?void 0:rt.transport)==null?void 0:ct.driver_phone),1)]),t("div",ws,[s[42]||(s[42]=t("p",{class:"text-[#61646B]"},"Motor saung (Rs.)",-1)),t("p",null,i((ut=(mt=e.application)==null?void 0:mt.transport)==null?void 0:ut.transport_cost),1)])])])]),t("div",Cs,[s[50]||(s[50]=t("p",{class:"text-center w-32 h-4 rounded-[20px] bg-[#E9E9E9] mb-4 md:mb-8"}," Bank Details ",-1)),t("div",Es,[t("div",Ds,[s[47]||(s[47]=t("p",{class:"text-[#61646B]"},"Bank hming",-1)),t("p",null,i((gt=(xt=e.application)==null?void 0:xt.applicant)==null?void 0:gt.bank_name),1)]),t("div",js,[s[48]||(s[48]=t("p",{class:"text-[#61646B]"},"Bank account number",-1)),t("p",null,i((bt=(ft=e.application)==null?void 0:ft.applicant)==null?void 0:bt.account_no),1)]),t("div",As,[s[49]||(s[49]=t("p",{class:"text-[#61646B]"},"IFSC Code",-1)),t("p",null,i((ht=(vt=e.application)==null?void 0:vt.applicant)==null?void 0:ht.ifsc_code),1)])])])])]),s[51]||(s[51]=t("hr",{class:"my-4 border-border"},null,-1)),t("div",Ms,[o.application&&o.application.status==="Pending"?(a(),n(x,{key:0,onClick:s[6]||(s[6]=m=>k(o.application.id)),label:"Approve",size:"sm",style:{color:"#fff",width:"144px",height:"40px","flex-shrink":"0","border-radius":"8px",border:"1px solid #5b656f",background:"#000"}})):p("",!0),o.application&&o.application.status==="Pending"?(a(),n(x,{key:1,onClick:s[7]||(s[7]=m=>B(o.application.id)),label:"Reject",size:"sm",style:{color:"#000",width:"144px",height:"40px","flex-shrink":"0","border-radius":"8px",border:"1px solid #5b656f",background:"transparent"}})):p("",!0)])]}),_:1}))}});export{qs as default};
