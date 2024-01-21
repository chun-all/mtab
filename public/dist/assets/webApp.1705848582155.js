import{r as e,X as a,b as s,A as l,c as t,d as n,e as c,n as i,i as d,g as r,m as u,F as m,f as o,v as p,h as v,x,a1 as y,k as f,j as k,aa as _,T as g,a2 as b,a8 as w,L as C}from"./index.1705848582155.js";const h={class:"manager-webApp p-0 rounded-lg"},I={class:"card-swipe"},z={class:"card-swipe-item"},j={class:"p-4 mt-4 bg-white rounded-lg h-full webappItem"},A={class:"card-box"},T={class:"card-box-item"},B={class:"flex"},L=["src"],S={class:"ml-6 flex-1"},F={class:"flex justify-between"},X={class:"text-base"},q=c("span",null,"更新版本",-1),D={class:"text-sm mt-2 text-gray-500"},E={class:"flex mt-4"},G={class:"card-box"},H={class:"card-box-item"},J={class:"flex"},K=["src"],M={class:"ml-6 flex-1"},N={class:"flex justify-between"},O={class:"text-base"},P={class:"flex ml-auto items-center"},Q={key:0,class:"card-price mr-4 text-blue-500 text-sm"},R={key:1,class:"card-price mr-4 text-green-500 text-sm"},U={key:2,class:"card-price mr-4 text-red-500 text-sm"},V={class:"text-sm mt-2 text-gray-500"},W={__name:"webApp",setup(W){const Y=e(!0),Z=e(1),$=e=>{Z.value=e},ee=e([]),ae=e([]),se=()=>{a({url:"/admin.Index/localCard"}).then((e=>{1===e.code&&(ae.value=e.data),Y.value=!1}))};se(),a({url:"/admin.Index/cardList"}).then((e=>{1===e.code&&(ee.value=e.data)}));const le=async e=>{await a({url:"/admin.Index/stopCard",method:"post",data:{name_en:e.name_en}}),se()},te=e=>{const a=ee.value.find((a=>a.name_en===e.name_en));if(a&&a.version>e.version)return!0},ne=(e,s="install")=>{const l=w.service({fullscreen:!0,text:"安装中很快就好，请耐心等待···"});a({url:"/admin.Index/installCard",method:"post",data:{type:s,name_en:e.name_en}}).then((e=>{1===e.code?(C.success(e.msg),se()):C.error(e.msg)})).finally((e=>{l.close()}))};return(e,W)=>{const ce=s("el-empty"),ie=s("el-tag"),de=s("el-button"),re=l("loading");return t(),n("div",h,[c("div",I,[c("div",z,[c("button",{class:i({selSwipe:1===Z.value}),onClick:W[0]||(W[0]=e=>$(1))},"已安装",2),c("button",{class:i({selSwipe:2===Z.value}),onClick:W[1]||(W[1]=e=>$(2))},"卡片商店",2)])]),d((t(),n("div",j,[d(c("div",null,[Y.value||0!==ae.value.length?u("",!0):(t(),r(ce,{key:0,description:"快去卡片商店安装卡片组件吧！"})),c("div",A,[(t(!0),n(m,null,o(ae.value,((e,s)=>(t(),r(g,{key:s},{default:v((()=>[c("div",T,[c("div",B,[c("img",{class:"card-box-item-logo",src:e.src,alt:""},null,8,L),c("div",S,[c("div",F,[c("div",X,[c("span",null,x(e.name),1),1===e.status?(t(),r(ie,{key:0,round:"",class:"ml-4"},{default:v((()=>[y(" 已启用 ")])),_:1})):u("",!0),0===e.status?(t(),r(ie,{key:1,round:"",class:"ml-4",type:"warning"},{default:v((()=>[y(" 已关闭 ")])),_:1})):u("",!0)]),te(e)?(t(),r(de,{key:0,onClick:a=>ne(e,"update"),type:"primary",size:"small",class:"rounded-full"},{default:v((()=>[q])),_:2},1032,["onClick"])):u("",!0)]),c("div",D,x(e.tips),1)])]),c("div",E,[f(ie,{type:"danger",class:"mr-3"},{default:v((()=>[y("热度："+x(k(_)(e.install_num)),1)])),_:2},1024),f(ie,{class:"mr-3"},{default:v((()=>[y("版本："+x(e.version),1)])),_:2},1024),e.status?(t(),r(de,{key:0,size:"small",type:"info",onClick:a=>le(e)},{default:v((()=>[y("停止使用")])),_:2},1032,["onClick"])):u("",!0),e.status?u("",!0):(t(),r(de,{key:1,size:"small",type:"success",onClick:s=>(async e=>{try{await a({url:"/admin.Index/startCard",method:"post",data:{name_en:e.name_en}})}catch(s){}se()})(e)},{default:v((()=>[y("开启访问")])),_:2},1032,["onClick"])),f(de,{size:"small",type:"danger",onClick:s=>(async e=>{try{await b.confirm("您即将删除当前插件，请谨慎操作！","危险警告",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning","custom-style":{width:"500px"}})}catch(t){return!1}await le(e);const s=w.service({fullscreen:!0,text:"很快就好，请耐心等待···"}),l=await a({url:"/admin.Index/uninstallCard",method:"post",data:{name_en:e.name_en}});1===l.code&&(C.success(l.msg),se()),s.close()})(e)},{default:v((()=>[y("卸载")])),_:2},1032,["onClick"])])])])),_:2},1024)))),128))])],512),[[p,1===Z.value]]),d(c("div",null,[Y.value||0!==ee.value.length?u("",!0):(t(),r(ce,{key:0,description:"当前商城没有在线卡片组件！"})),c("div",G,[(t(!0),n(m,null,o(ee.value,((e,a)=>(t(),r(g,{key:a},{default:v((()=>[c("div",H,[c("div",J,[c("img",{class:"card-box-item-logo",src:e.src,alt:""},null,8,K),c("div",M,[c("div",N,[c("span",O,x(e.name),1),c("div",P,[e.appAuth?(t(),n("div",Q,"已获得")):"0.00"===e.price?(t(),n("div",R,"免费")):(t(),n("div",U,"¥ "+x(e.price),1)),f(de,{size:"small",type:"primary",onClick:a=>ne(e)},{default:v((()=>[y("安装")])),_:2},1032,["onClick"])])]),c("div",V,x(e.tips),1)])])])])),_:2},1024)))),128))])],512),[[p,2===Z.value]])])),[[re,Y.value]])])}}};export{W as default};
