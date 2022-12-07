"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[436],{3649:(t,e,a)=>{a.d(e,{Z:()=>y});var s=a(5474);const o=(t,{data:e})=>{t(e)},i=(t,e)=>{e(t)},d=t=>new Promise(((e,a)=>{s.axios.request({url:"/chapters",data:t,method:"post"}).then((t=>{o(e,t)})).catch((t=>{i(t.response.data,a)}))})),n=(t,e)=>{e(t)},r=(t,e)=>{e(t)},l=(t,e)=>new Promise(((a,o)=>{s.axios.request({url:`/chapters/${t}`,data:e,method:"put"}).then((t=>{n(t.data,a)})).catch((t=>{r(t.response.data,o)}))}));var c=a(8427),p=a(5314),h=a(3305);const m=({data:t},e,a)=>{const s=t,o=p.Z.fetch(t.pagination);c["default"].dispatch("fetchChapters",{chapters:s,pagination:o}),a({chapters:s,pagination:o})},u=(t,e)=>e(t),f=(t={})=>new Promise(((e,a)=>{s.axios.get(h.Z.buildUrl("/chapters",t)).then((a=>{m(a,t,e)})).catch((t=>{u(t,a)}))})),w=({data:t},e)=>{c["default"].dispatch("fetchAllChapters",t),e(t)},g=(t,e)=>e(t),_=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/chapters":`/chapters?search=${t}`).then((t=>{w(t,e)})).catch((t=>{g(t,a)}))})),k=(t,e)=>{e(t)},q=(t,e)=>{e(t)},b=t=>new Promise(((e,a)=>{s.axios.get(`/chapters/${t}`).then((t=>{k(t.data,e)})).catch((t=>{q(t.response.data,a)}))})),x=(t,e)=>{_(),e(t)},W=(t,e)=>{e(t)},Z=t=>new Promise(((e,a)=>{s.axios["delete"](`/chapters/${t}`).then((t=>{x(t.data,e)})).catch((t=>{W(t.response.data,a)}))})),C=(t,e)=>{e(t)},v=(t,e)=>{e(t)},$=t=>new Promise(((e,a)=>{s.axios.post(`/chapters/${t}/answer`).then((t=>{C(t.data,e)})).catch((t=>{v(t.response.data,a)}))})),y={store:d,update:l,items:f,all:_,show:b,destroy:Z,answer:$}},436:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});a(246);var s=a(3673),o=a(2323);const i={class:"q-pa-md q-gutter-md"},d=(0,s._)("h4",{class:"text-h4 q-mb-xs"},"Chapters",-1),n={class:"q-gutter-sm"},r=(0,s.Uk)(" Manage Sections "),l=(0,s.Uk)(" Manage Questions "),c=(0,s.Uk)(" Edit "),p=(0,s.Uk)(" Delete ");function h(t,e,a,h,m,u){const f=(0,s.up)("q-btn"),w=(0,s.up)("q-item-label"),g=(0,s.up)("q-item-section"),_=(0,s.up)("q-tooltip"),k=(0,s.up)("q-item"),q=(0,s.up)("q-list"),b=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)("div",i,[d,(0,s.Wm)(f,{to:"/admin/chapters/create",color:"primary",icon:"add",label:"Create Chapter"}),(0,s.Wm)(q,{padding:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.chapters,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(k,{key:e.id},{default:(0,s.w5)((()=>[(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{lines:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title),1)])),_:2},1024),(0,s.Wm)(w,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.description),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(g,{side:""},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(f,{flat:"",round:"",size:"12px",color:"primary",icon:"list",to:`/admin/chapters/${e.id}/sections`},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{anchor:"top middle",self:"bottom middle"},{default:(0,s.w5)((()=>[r])),_:1})])),_:2},1032,["to"]),(0,s.Wm)(f,{flat:"",round:"",size:"12px",color:"primary",icon:"quiz",to:`/admin/chapters/${e.id}/questions`},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{anchor:"top middle",self:"bottom middle"},{default:(0,s.w5)((()=>[l])),_:1})])),_:2},1032,["to"]),(0,s.Wm)(f,{flat:"",round:"",size:"12px",icon:"edit",to:`/admin/chapters/${e.id}/edit`},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{anchor:"top middle",self:"bottom middle"},{default:(0,s.w5)((()=>[c])),_:1})])),_:2},1032,["to"]),(0,s.Wm)(f,{flat:"",round:"",size:"12px",icon:"delete",onClick:a=>t.remove(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{anchor:"top middle",self:"bottom middle"},{default:(0,s.w5)((()=>[p])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1536)),[[b]]))),128))])),_:1})])}var m=a(515),u=a.n(m),f=a(7874),w=a(3649);const g=(0,s.aZ)({name:"AdminChapterIndex",data(){return{title:"",description:""}},computed:u()({},(0,f.Se)({chapters:"allChapters"})),mounted(){w.Z.all().then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},methods:{onReset(){},remove(t){this.$q.dialog({title:"Confirm",message:"Are you sure to delete this chapter?",cancel:!0,persistent:!0}).onOk((()=>{w.Z.destroy(t.id).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))}))}}});var _=a(2165),k=a(7011),q=a(3414),b=a(2035),x=a(2350),W=a(8870),Z=a(6489),C=a(7518),v=a.n(C);g.render=h;const $=g;v()(g,"components",{QBtn:_.Z,QList:k.Z,QItem:q.Z,QItemSection:b.Z,QItemLabel:x.Z,QTooltip:W.Z}),v()(g,"directives",{Ripple:Z.Z})}}]);