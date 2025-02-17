import{Q as M,d as W,u as Q,w as J}from"./dayjs.min-Cuot6TlY.js";import{r as C,c as O,o as X,a as h,b as S,w as o,d as _,t as u,e as j,f as s,i as r,n as D,Q as i,j as y,k as Z,g as I,F as p,h as ee,l as te,v as se,A as le,N as q}from"./app-BU-P0o3a.js";import{Q as N,a as L}from"./format-B28FXeBv.js";import{Q as ne}from"./QLayout-CjzmvHMW.js";import{Q as re}from"./QMenu--S8s1Z2H.js";import{Q as oe}from"./QPage-BnL5U6Tp.js";import{_ as de}from"./AdminLayout-B373Zi-z.js";import"./QExpansionItem-BfALLecq.js";import"./ClosePopup-D9M7YmMK.js";const ue={class:"q-my-md grid grid-cols-1 md:grid-cols-2 gap-4"},ae={class:"flex flex-col sm:flex-row gap-2"},ie={class:"flex justify-end"},ce={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},me={key:0,class:"flex"},fe={class:"flex justify-end pr-16"},ve={ref:"printSection",class:"table-responsive"},be={class:"q-table q-table__grid q-mb-lg"},he={key:0},xe=["value"],Ie=Object.assign({layout:de},{__name:"BillPayment",props:{applications:Array,flash:Object},setup(w){const P=w;C(null);const B=C([]),a=C(""),k=C("All"),d=C([]),E=O(()=>d.value.length>0),$=n=>W(n).format("dddd, MMMM D, YYYY h:mm A");X(()=>{const n=[...new Set(P.applications.map(t=>t.deceased.district.name))];B.value=n.map(t=>({label:t,value:t}))});const A=O(()=>{let n=P.applications;return k.value!=="All"&&(n=n.filter(t=>t.status===k.value)),a.value&&(n=n.filter(t=>{var e,x,l,c,m,f,v,b;return((e=t.application_no)==null?void 0:e.toString().includes(a.value))||((l=(x=t.deceased)==null?void 0:x.name)==null?void 0:l.toLowerCase().includes(a.value.toLowerCase()))||((m=(c=t.applicant)==null?void 0:c.name)==null?void 0:m.toLowerCase().includes(a.value.toLowerCase()))||((b=(v=(f=t.deceased)==null?void 0:f.district)==null?void 0:v.name)==null?void 0:b.toLowerCase().includes(a.value.toLowerCase()))})),n}),T=n=>{k.value=n},V=n=>{q.get(route("bill.show",n))},F=n=>{console.log("Edit application:",n)},U=n=>{console.log("Delete application:",n)},H=()=>{d.value.length===A.value.length?d.value=[]:d.value=A.value.map(n=>n.id)},R=async()=>{if(d.value.length>0)try{await q.post("/admin/bill/paymet-all",{ids:d.value},{onSuccess:()=>{d.value=[]}})}catch(n){console.error("Error processing payments:",n)}},K=async()=>{if(d.value.length>0)try{await q.post("/admin/bill/reject-all",{ids:d.value},{onSuccess:()=>{d.value=[]}})}catch(n){console.error("Error rejecting applications:",n)}},Y=()=>{const n=document.querySelector(".table-responsive").innerHTML,t=window.open("","","width=800,height=600");t.document.write(`
        <html>
            <head>
                <title>Print Table</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 8px 12px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #3A424A;
                        color: white;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>${n}</body>
        </html>
    `),t.document.close(),t.print()},G=()=>{const n=A.value.map(l=>{var c,m,f,v,b,g,z;return{"Applicant ID":l==null?void 0:l.application_no,"Deceased Name":(c=l==null?void 0:l.deceased)==null?void 0:c.name,"Deceased District":(f=(m=l==null?void 0:l.deceased)==null?void 0:m.district)==null?void 0:f.name,Kilometer:(v=l==null?void 0:l.transport)==null?void 0:v.distance,Amount:(b=l==null?void 0:l.transport)==null?void 0:b.transport_cost,"Applicant Name":(g=l==null?void 0:l.applicant)==null?void 0:g.name,"Applicant Phone":(z=l==null?void 0:l.applicant)==null?void 0:z.mobile,Status:l==null?void 0:l.status,"Date Created":l==null?void 0:l.created_at}}),t=Q.json_to_sheet(n),e=Q.book_new();Q.book_append_sheet(e,t,"Applications");const x=new Date().toISOString().slice(0,10);J(e,`Applications_${x}.xlsx`)};return(n,t)=>(h(),S(oe,{padding:""},{default:o(()=>[w.flash.success?(h(),S(M,{key:0,class:"bg-green-4 text-white",dense:""},{default:o(()=>[_(u(w.flash.success),1)]),_:1})):j("",!0),w.flash.error?(h(),S(M,{key:1,class:"bg-red-4 text-white",dense:""},{default:o(()=>[_(u(w.flash.error),1)]),_:1})):j("",!0),s("div",ue,[s("div",ae,[r(i,{size:"",label:"Bill Pek tur",flat:"",class:D(k.value==="Approved"?"active-button":"inactive-button"),onClick:t[0]||(t[0]=e=>T("Approved"))},null,8,["class"]),r(i,{label:"Deposit to Bank",flat:"",class:D(k.value==="Processed"?"active-button":"inactive-button"),onClick:t[1]||(t[1]=e=>T("Processed"))},null,8,["class"]),r(i,{label:"Rejected",flat:"",class:D(k.value==="Rejected"?"active-button":"inactive-button"),onClick:t[2]||(t[2]=e=>T("Rejected"))},null,8,["class"])]),s("div",ie,[r(Z,{rounded:"2lg",outlined:"",dense:"","bottom-slots":"",modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=e=>a.value=e),label:"Search",class:"w-full max-w-md"},{append:o(()=>[a.value!==""?(h(),S(y,{key:0,name:"close",onClick:t[3]||(t[3]=e=>a.value=""),class:"cursor-pointer"})):j("",!0),r(y,{name:"search"})]),_:1},8,["modelValue"])])]),t[15]||(t[15]=s("hr",{class:"my-4 border-border bg-[#F0F0F0]"},null,-1)),s("div",ce,[s("div",null,[E.value?(h(),I("div",me,[r(i,{style:{"border-radius":"8px"},size:"md",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white",onClick:H},{default:o(()=>[r(y,{name:"check",size:"16px",class:"q-mr-xs"}),t[6]||(t[6]=s("span",null,"Select All",-1))]),_:1}),r(i,{style:{"border-radius":"8px"},size:"md",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white",onClick:R,disabled:!d.value.length},{default:o(()=>[r(y,{name:"check_circle",size:"16px",class:"q-mr-xs"}),t[7]||(t[7]=s("span",null,"Process for Deposit",-1))]),_:1},8,["disabled"]),r(i,{style:{"border-radius":"8px"},size:"md",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center hover:bg-[#3A424A] hover:text-white",onClick:K,disabled:!d.value.length},{default:o(()=>[r(y,{name:"cancel",size:"16px",class:"q-mr-xs"}),t[8]||(t[8]=s("span",null,"Reject",-1))]),_:1},8,["disabled"])])):j("",!0)]),s("div",fe,[r(i,{size:"sm",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center",style:{color:"#000",width:"100px",height:"40px","flex-shrink":"0","border-radius":"8px",background:"transparent"},onClick:Y},{default:o(()=>[r(y,{name:"print",size:"16px",class:"q-mr-xs"}),t[9]||(t[9]=s("span",null,"Print",-1))]),_:1}),r(i,{size:"sm",flat:"",outlined:"",class:"q-btn-custom flex items-center justify-center",style:{color:"#000",width:"100px",height:"40px","flex-shrink":"0","border-radius":"8px",background:"transparent"},onClick:G},{default:o(()=>[r(y,{name:"ios_share",size:"16px",class:"q-mr-xs"}),t[10]||(t[10]=s("span",null,"Export",-1))]),_:1})])]),s("div",ve,[s("table",be,[t[14]||(t[14]=s("thead",{class:"bg-[#3A424A] text-white font-bold h-[30px] w-full text-[11px]"},[s("tr",null,[s("th"),s("th",null,"APPLICANT ID"),s("th",null,"MITTHI HMING"),s("th",null,"MITTHI KHUA"),s("th",null,"KILOMETER"),s("th",null,"AMOUNT"),s("th",null,"DIL SAKTU"),s("th",null,"DILTU PHONE NO"),s("th",null,"STATUS"),s("th",null,"DIL NI"),s("th",null,"ACTIONS")])],-1)),A.value.length?(h(),I("tbody",he,[(h(!0),I(p,null,ee(A.value,e=>{var x,l,c,m,f,v,b;return h(),I("tr",{key:e.id},[s("td",null,[te(s("input",{type:"checkbox",value:e.id,"onUpdate:modelValue":t[5]||(t[5]=g=>d.value=g)},null,8,xe),[[se,d.value]])]),s("td",null,u(e==null?void 0:e.application_no),1),s("td",null,u((x=e==null?void 0:e.deceased)==null?void 0:x.name),1),s("td",null,u((c=(l=e==null?void 0:e.deceased)==null?void 0:l.district)==null?void 0:c.name),1),s("td",null,u((m=e==null?void 0:e.transport)==null?void 0:m.distance),1),s("td",null,u((f=e==null?void 0:e.transport)==null?void 0:f.transport_cost),1),s("td",null,u((v=e==null?void 0:e.applicant)==null?void 0:v.name),1),s("td",null,u((b=e==null?void 0:e.applicant)==null?void 0:b.mobile),1),s("td",null,[s("div",{class:D([{"status-incoming":(e==null?void 0:e.status)==="Pending","status-approved":(e==null?void 0:e.status)==="Approved","status-paid":(e==null?void 0:e.status)==="Processed","status-rejected":(e==null?void 0:e.status)==="Rejected"},"status-badge"])},u(e==null?void 0:e.status),3)]),s("td",null,u($(e==null?void 0:e.created_at)),1),s("td",null,[r(i,{flat:"",icon:"more_vert",style:le(n.buttonStyle)},null,8,["style"]),r(re,null,{default:o(()=>[r(ne,null,{default:o(()=>[r(N,{clickable:"",class:"action-btn",onClick:g=>V(e.id)},{default:o(()=>[r(L,null,{default:o(()=>t[11]||(t[11]=[_("View")])),_:1})]),_:2},1032,["onClick"]),r(N,{class:"action-btn",onClick:g=>F(e.id)},{default:o(()=>[r(L,null,{default:o(()=>t[12]||(t[12]=[_("Edit/Update")])),_:1})]),_:2},1032,["onClick"]),r(N,{class:"action-btn",onClick:g=>U(e.id)},{default:o(()=>[r(L,null,{default:o(()=>t[13]||(t[13]=[_("Delete")])),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])])}),128))])):j("",!0)])],512)]),_:1}))}});export{Ie as default};
