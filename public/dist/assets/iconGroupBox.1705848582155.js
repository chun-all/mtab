import{u as e,R as a,r as t,a as o,G as d,q as l,o as n,b as r,c as s,d as i,e as u,k as p,l as c,F as m,f,g as v,h as g,T as y,j as G,I as x,m as h}from"./index.1705848582155.js";import{_ as k,S as j}from"./index.17058485821552.js";import{$ as T}from"./jquery.1705848582155.js";import"./href.1705848582155.js";import"./net.1705848582155.js";const B=["onClick"],C={__name:"GroupItem",props:{data:Object,reload:Function},setup(h){const C=h,_=e(),I=a([]),b=t(),w=t({});window.$=T;const D=()=>{_.state.editStatus&&(_.state.editStatus=!1)};let O=!0;const L=()=>{_.commit("setLink",w.value),T(`[data-id='${b.value}']`).find(".names").text(w.value.name)};let S=null;const V=()=>{const e=S.toArray();let a=[];e.forEach(((e,t)=>{let o=_.getters.find(e);o.pid=b.value,o.sort=t,a.push(o)})),_.commit("updateDiffLink",Object.assign([],a)),l.emit("RefreshLink"),"add"===C.data.type&&(clearTimeout(A),C.reload())};let q=null;let A=setTimeout((()=>{}));o((()=>{var e,a;A=setTimeout((()=>{"add"===C.data.type&&O&&(clearTimeout(A),C.reload())}),2e3),b.value=C.data.pid,w.value=_.getters.find(C.data.pid),I.value=d([],_.getters.findChildren(C.data.pid)),e=document.getElementById("iconGroupItem"),a={animation:200,delay:500,delayOnTouchOnly:!0,draggable:".item",group:{name:"it",pull:function(e){let a=e.el.id;return"icon"!==q.item.dataset.type||"footer-itxst"!==a||"clone"},put:!0},onChoose:function(e){q=e,window.MoveData={type:e.item.dataset.type}},onMove:function(e){return!e.dragged.dataset.type&&!e.related.dataset.url||"component"===e.dragged.dataset.type||"iconGroup"!==e.related.dataset.url},onUpdate(e){V()},onAdd(e){V()}},S=j.create(e,a)}));const E=()=>{I.value=d([],_.getters.findChildren(C.data.pid))};return l.on("refreshGroup",E),n((()=>{l.off("refreshGroup",E),l.off("saveGroup",V)})),(e,a)=>{const t=r("el-input");return s(),i("div",{id:"iconGroupBox",onClick:a[5]||(a[5]=(...e)=>C.reload&&C.reload(...e))},[u("div",{class:"groupName",onClick:a[1]||(a[1]=c((()=>{}),["stop"]))},[p(t,{onBlur:L,modelValue:w.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value.name=e)},null,8,["modelValue"])]),u("div",{class:"model",onDragleave:a[3]||(a[3]=e=>{"model"===e.relatedTarget.className&&(O=!0,clearTimeout(A),C.reload())}),onDragenter:a[4]||(a[4]=e=>{"iconGroupBox"===e.relatedTarget.id&&(O=!1)})},[u("div",{id:"iconGroupItem",class:"iconGroupItem itxst",onClick:c(D,["stop"])},[(s(!0),i(m,null,f(G(x)(G(I)),(e=>(s(),v(y,{key:e.id},{default:g((()=>[p(k,{onClick:a[2]||(a[2]=c((()=>{}),["stop"])),data:e,"data-type":null==e?void 0:e.type,"data-id":null==e?void 0:e.id},null,8,["data","data-type","data-id"])])),_:2},1024)))),128))],8,B)],32)])}}};const _={__name:"iconGroupBox",setup(e){const a=t(!1),o=t(),d=e=>{o.value=e,a.value=!0},r=()=>{a.value=!1};return l.on("addGroupBox",d),n((()=>{l.off("addGroupBox",d)})),(e,t)=>(s(),i("div",null,[p(y,{name:"groupBox"},{default:g((()=>[a.value?(s(),v(C,{key:0,data:o.value,reload:r},null,8,["data"])):h("",!0)])),_:1})]))}};export{_ as default};
