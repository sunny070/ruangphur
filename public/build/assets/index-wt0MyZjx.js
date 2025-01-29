import{a4 as M,a5 as x,a6 as E,r as f,a7 as I,c as F,a8 as P,a9 as _,aa as A,o as Z,a as V,g as H,f as J,B as X,ab as Y,ac as W}from"./app-DY6z9ZO-.js";(function(){try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".mapdiv[data-v-d05fc6bc]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var Q=Object.defineProperty,ee=(i,e,t)=>e in i?Q(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,T=(i,e,t)=>(ee(i,typeof e!="symbol"?e+"":e,t),t);const z=Symbol("map"),$=Symbol("api"),te=Symbol("marker"),re=Symbol("markerCluster"),U=Symbol("CustomMarker"),ie=Symbol("mapTilesLoaded"),D=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function oe(i,e,t,o){function r(a){return a instanceof t?a:new t(function(n){n(a)})}return new(t||(t=Promise))(function(a,n){function u(c){try{g(o.next(c))}catch(l){n(l)}}function m(c){try{g(o.throw(c))}catch(l){n(l)}}function g(c){c.done?a(c.value):r(c.value).then(u,m)}g((o=o.apply(i,[])).next())})}var ae=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var n=a[r];if(!i(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const R="__googleMapsScriptId";var C;(function(i){i[i.INITIALIZED=0]="INITIALIZED",i[i.LOADING=1]="LOADING",i[i.SUCCESS=2]="SUCCESS",i[i.FAILURE=3]="FAILURE"})(C||(C={}));class k{constructor({apiKey:e,authReferrerPolicy:t,channel:o,client:r,id:a=R,language:n,libraries:u=[],mapIds:m,nonce:g,region:c,retries:l=3,url:d="https://maps.googleapis.com/maps/api/js",version:h}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=o,this.client=r,this.id=a||R,this.language=n,this.libraries=u,this.mapIds=m,this.nonce=g,this.region=c,this.retries=l,this.url=d,this.version=h,k.instance){if(!ae(this.options,k.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(k.instance.options)}`);return k.instance}k.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?C.FAILURE:this.done?C.SUCCESS:this.loading?C.LOADING:C.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(o=>{o?t(o.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const o={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(o).forEach(a=>!o[a]&&delete o[a]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(a=>{let n,u,m,g="The Google Maps JavaScript API",c="google",l="importLibrary",d="__ib__",h=document,s=window;s=s[c]||(s[c]={});const p=s.maps||(s.maps={}),v=new Set,y=new URLSearchParams,w=()=>n||(n=new Promise((b,S)=>oe(this,void 0,void 0,function*(){var O;yield u=h.createElement("script"),u.id=this.id,y.set("libraries",[...v]+"");for(m in a)y.set(m.replace(/[A-Z]/g,q=>"_"+q[0].toLowerCase()),a[m]);y.set("callback",c+".maps."+d),u.src=this.url+"?"+y,p[d]=b,u.onerror=()=>n=S(Error(g+" could not load.")),u.nonce=this.nonce||((O=h.querySelector("script[nonce]"))===null||O===void 0?void 0:O.nonce)||"",h.head.append(u)})));p[l]?console.warn(g+" only loads once. Ignoring:",a):p[l]=(b,...S)=>v.add(b)&&w().then(()=>p[l](b,...S))})(o);const r=this.libraries.map(a=>this.importLibrary(a));r.length||r.push(this.importLibrary("core")),Promise.all(r).then(()=>this.callback(),a=>{const n=new ErrorEvent("error",{error:a});this.loadErrorCallback(n)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function ne(i){return class extends i.OverlayView{constructor(e){super(),T(this,"element"),T(this,"opts");const{element:t,...o}=e;this.element=t,this.opts=o,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof i.LatLng?this.opts.position:new i.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";let o,r;switch(this.opts.anchorPoint){case"TOP_CENTER":o="-50%",r="-100%";break;case"BOTTOM_CENTER":o="-50%",r="0";break;case"LEFT_CENTER":o="-100%",r="-50%";break;case"RIGHT_CENTER":o="0",r="-50%";break;case"TOP_LEFT":o="-100%",r="-100%";break;case"TOP_RIGHT":o="0",r="-100%";break;case"BOTTOM_LEFT":o="-100%",r="0";break;case"BOTTOM_RIGHT":o="0",r="0";break;default:o="-50%",r="-50%"}const a=t.x+(this.opts.offsetX||0)+"px",n=t.y+(this.opts.offsetY||0)+"px";this.element.style.transform=`translateX(${o}) translateX(${a}) translateY(${r}) translateY(${n})`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...o}=e;this.element=t,this.opts=o,this.draw()}}}let j;const B=["bounds_changed","center_changed","click","contextmenu","dblclick","drag","dragend","dragstart","heading_changed","idle","isfractionalzoomenabled_changed","mapcapabilities_changed","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","renderingtype_changed","rightclick","tilesloaded","tilt_changed","zoom_changed"],se=M({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places","marker"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},isFractionalZoomEnabled:{type:Boolean,required:!1,default:void 0},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1},nonce:{type:String,default:""}},emits:B,setup(i,{emit:e}){const t=f(),o=f(!1),r=f(),a=f(),n=f(!1);E(z,r),E($,a),E(ie,n);const u=()=>{const l={...i};Object.keys(l).forEach(s=>{l[s]===void 0&&delete l[s]});const d=s=>{var p;return s?{position:(p=a.value)==null?void 0:p.ControlPosition[s]}:{}},h={scaleControlOptions:i.scaleControlStyle?{style:i.scaleControlStyle}:{},panControlOptions:d(i.panControlPosition),zoomControlOptions:d(i.zoomControlPosition),rotateControlOptions:d(i.rotateControlPosition),streetViewControlOptions:d(i.streetViewControlPosition),fullscreenControlOptions:d(i.fullscreenControlPosition),disableDefaultUI:i.disableDefaultUi};return{...l,...h}},m=P([a,r],([l,d])=>{const h=l,s=d;h&&s&&(h.event.addListenerOnce(s,"tilesloaded",()=>{n.value=!0}),setTimeout(m,0))},{immediate:!0}),g=()=>{try{const{apiKey:l,region:d,version:h,language:s,libraries:p,nonce:v}=i;j=new k({apiKey:l,region:d,version:h,language:s,libraries:p,nonce:v})}catch(l){console.error(l)}},c=l=>{a.value=_(l.maps),r.value=_(new l.maps.Map(t.value,u()));const d=ne(a.value);a.value[U]=d,B.forEach(s=>{var p;(p=r.value)==null||p.addListener(s,v=>e(s,v))}),o.value=!0;const h=Object.keys(i).filter(s=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom","nonce"].includes(s)).map(s=>x(i,s));P([()=>i.center,()=>i.zoom,...h],([s,p],[v,y])=>{var w,b,S;const{center:O,zoom:q,...G}=u();(w=r.value)==null||w.setOptions(G),p!==void 0&&p!==y&&((b=r.value)==null||b.setZoom(p));const K=!v||s.lng!==v.lng||s.lat!==v.lat;s&&K&&((S=r.value)==null||S.panTo(s))})};return Z(()=>{i.apiPromise&&i.apiPromise instanceof Promise?i.apiPromise.then(c):(g(),j.load().then(c))}),A(()=>{var l;n.value=!1,r.value&&((l=a.value)==null||l.event.clearInstanceListeners(r.value))}),{mapRef:t,ready:o,map:r,api:a,mapTilesLoaded:n}}}),le=(i,e)=>{const t=i.__vccOpts||i;for(const[o,r]of e)t[o]=r;return t},ce={ref:"mapRef",class:"mapdiv"};function ue(i,e,t,o,r,a){return V(),H("div",null,[J("div",ce,null,512),X(i.$slots,"default",Y(W({ready:i.ready,map:i.map,api:i.api,mapTilesLoaded:i.mapTilesLoaded})),void 0,!0)])}const ve=le(se,[["render",ue],["__scopeId","data-v-d05fc6bc"]]);function de(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pe=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;for(r=o;r--!==0;){var n=a[r];if(!i(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const he=de(pe),ge=(i,e,t,o)=>{const r=f(),a=I(z,f()),n=I($,f()),u=I(re,f()),m=F(()=>!!(u.value&&n.value&&(r.value instanceof n.value.Marker||r.value instanceof n.value[U])));return P([a,t],(g,[c,l])=>{var d,h,s;const p=!he(t.value,l)||a.value!==c;!a.value||!n.value||!p||(r.value?(r.value.setOptions(t.value),m.value&&((d=u.value)==null||d.removeMarker(r.value),(h=u.value)==null||h.addMarker(r.value))):(r.value=_(new n.value[i](t.value)),m.value?(s=u.value)==null||s.addMarker(r.value):r.value.setMap(a.value),e.forEach(v=>{var y;(y=r.value)==null||y.addListener(v,w=>o(v,w))})))},{immediate:!0}),A(()=>{var g,c;r.value&&((g=n.value)==null||g.event.clearInstanceListeners(r.value),m.value?(c=u.value)==null||c.removeMarker(r.value):r.value.setMap(null))}),r},N=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],ye=M({name:"Marker",props:{options:{type:Object,required:!0}},emits:N,setup(i,{emit:e,expose:t,slots:o}){const r=x(i,"options"),a=ge("Marker",N,r,e);return E(te,a),t({marker:a}),()=>{var n;return(n=o.default)==null?void 0:n.call(o)}}});D.concat(["bounds_changed"]);D.concat(["center_changed","radius_changed"]);var L;(function(i){i.CLUSTERING_BEGIN="clusteringbegin",i.CLUSTERING_END="clusteringend",i.CLUSTER_CLICK="click"})(L||(L={}));Object.values(L);export{ve as E,ye as L};
