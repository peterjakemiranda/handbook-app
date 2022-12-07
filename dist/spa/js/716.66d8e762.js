"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[716],{6952:(t,e,a)=>{a.d(e,{Z:()=>m});var s=a(5474);const i=(t,e)=>{e(t)},o=(t,e)=>{e(t)},n=(t,e)=>new Promise(((a,n)=>{s.axios.post(`/api/bookmarks/${t}`,{bookmark:e}).then((t=>{i(t.data,a)})).catch((t=>{o(t.response.data,n)}))}));var l=a(8427);const r=({data:t},e)=>{l["default"].dispatch("fetchAllBookmarks",t),e(t)},c=(t,e)=>e(t),d=()=>new Promise(((t,e)=>{s.axios.get("/api/bookmarks").then((e=>{r(e,t)})).catch((t=>{c(t,e)}))})),h=(t,e)=>{d(),e(t)},p=(t,e)=>{e(t)},u=t=>new Promise(((e,a)=>{s.axios["delete"](`/api/bookmarks/${t}`).then((t=>{h(t.data,e)})).catch((t=>{p(t.response.data,a)}))})),m={all:d,bookmark:n,destroy:u}},3649:(t,e,a)=>{a.d(e,{Z:()=>v});var s=a(5474);const i=(t,{data:e})=>{t(e)},o=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{s.axios.request({url:"/api/chapters",data:t,method:"post"}).then((t=>{i(e,t)})).catch((t=>{o(t.response.data,a)}))})),l=(t,e)=>{e(t)},r=(t,e)=>{e(t)},c=(t,e)=>new Promise(((a,i)=>{s.axios.request({url:`/api/chapters/${t}`,data:e,method:"put"}).then((t=>{l(t.data,a)})).catch((t=>{r(t.response.data,i)}))}));var d=a(8427),h=a(5314),p=a(3305);const u=({data:t},e,a)=>{const s=t,i=h.Z.fetch(t.pagination);d["default"].dispatch("fetchChapters",{chapters:s,pagination:i}),a({chapters:s,pagination:i})},m=(t,e)=>e(t),w=(t={})=>new Promise(((e,a)=>{s.axios.get(p.Z.buildUrl("/api/chapters",t)).then((a=>{u(a,t,e)})).catch((t=>{m(t,a)}))})),g=({data:t},e)=>{d["default"].dispatch("fetchAllChapters",t),e(t)},k=(t,e)=>e(t),f=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/api/chapters":`/api/chapters?search=${t}`).then((t=>{g(t,e)})).catch((t=>{k(t,a)}))})),b=(t,e)=>{e(t)},q=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{s.axios.get(`/api/chapters/${t}`).then((t=>{b(t.data,e)})).catch((t=>{q(t.response.data,a)}))})),y=(t,e)=>{f(),e(t)},C=(t,e)=>{e(t)},_=t=>new Promise(((e,a)=>{s.axios["delete"](`/api/chapters/${t}`).then((t=>{y(t.data,e)})).catch((t=>{C(t.response.data,a)}))})),$=(t,e)=>{e(t)},Z=(t,e)=>{e(t)},P=t=>new Promise(((e,a)=>{s.axios.post(`/api/chapters/${t}/answer`).then((t=>{$(t.data,e)})).catch((t=>{Z(t.response.data,a)}))})),v={store:n,update:c,items:w,all:f,show:x,destroy:_,answer:P}},7728:(t,e,a)=>{a.d(e,{Z:()=>v});var s=a(5474);const i=(t,{data:e})=>{t(e)},o=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{s.axios.request({url:"/api/questions",data:t,method:"post"}).then((t=>{i(e,t)})).catch((t=>{o(t.response.data,a)}))})),l=(t,e)=>{e(t)},r=(t,e)=>{e(t)},c=(t,e)=>new Promise(((a,i)=>{s.axios.request({url:`/api/questions/${t}`,data:e,method:"put"}).then((t=>{l(t.data,a)})).catch((t=>{r(t.response.data,i)}))}));var d=a(8427),h=a(5314),p=a(3305);const u=({data:t},e,a)=>{const s=t,i=h.Z.fetch(t.pagination);d["default"].dispatch("fetchQuestions",{questions:s,pagination:i}),a({questions:s,pagination:i})},m=(t,e)=>e(t),w=(t={})=>new Promise(((e,a)=>{s.axios.get(p.Z.buildUrl("/api/questions",t)).then((a=>{u(a,t,e)})).catch((t=>{m(t,a)}))})),g=({data:t},e)=>{d["default"].dispatch("fetchAllQuestions",t),e(t)},k=(t,e)=>e(t),f=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/api/questions":`/api/questions?chapter_id=${t}`).then((t=>{g(t,e)})).catch((t=>{k(t,a)}))})),b=(t,e)=>{e(t)},q=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{s.axios.get(`/api/questions/${t}`).then((t=>{b(t.data,e)})).catch((t=>{q(t.response.data,a)}))})),y=({data:t},e)=>{d["default"].dispatch("fetchSearchResults",t),e(t)},C=(t,e)=>e(t),_=(t="")=>new Promise(((e,a)=>{s.axios.get(`/api/questions?search=${t}`).then((t=>{y(t,e)})).catch((t=>{C(t,a)}))})),$=(t,e,a)=>{f(a),e(t)},Z=(t,e)=>{e(t)},P=(t,e)=>new Promise(((a,i)=>{s.axios["delete"](`/api/questions/${t}`).then((t=>{$(t.data,a,e)})).catch((t=>{Z(t.response.data,i)}))})),v={store:n,update:c,items:w,all:f,show:x,search:_,destroy:P}},6523:(t,e,a)=>{a.d(e,{Z:()=>v});var s=a(5474);const i=(t,{data:e})=>{t(e)},o=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{s.axios.request({url:"/api/sections",data:t,method:"post"}).then((t=>{i(e,t)})).catch((t=>{o(t.response.data,a)}))})),l=(t,e)=>{e(t)},r=(t,e)=>{e(t)},c=(t,e)=>new Promise(((a,i)=>{s.axios.request({url:`/api/sections/${t}`,data:e,method:"put"}).then((t=>{l(t.data,a)})).catch((t=>{r(t.response.data,i)}))}));var d=a(8427),h=a(5314),p=a(3305);const u=({data:t},e,a)=>{const s=t,i=h.Z.fetch(t.pagination);d["default"].dispatch("fetchSections",{sections:s,pagination:i}),a({sections:s,pagination:i})},m=(t,e)=>e(t),w=(t={})=>new Promise(((e,a)=>{s.axios.get(p.Z.buildUrl("/api/sections",t)).then((a=>{u(a,t,e)})).catch((t=>{m(t,a)}))})),g=({data:t},e)=>{d["default"].dispatch("fetchAllSections",t),e(t)},k=(t,e)=>e(t),f=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/api/sections":`/api/sections?chapter_id=${t}`).then((t=>{g(t,e)})).catch((t=>{k(t,a)}))})),b=(t,e)=>{e(t)},q=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{s.axios.get(`/api/sections/${t}`).then((t=>{b(t.data,e)})).catch((t=>{q(t.response.data,a)}))})),y=({data:t},e)=>{d["default"].dispatch("fetchSearchResults",t),e(t)},C=(t,e)=>e(t),_=(t="")=>new Promise(((e,a)=>{s.axios.get(`/api/sections?search=${t}`).then((t=>{y(t,e)})).catch((t=>{C(t,a)}))})),$=(t,e,a)=>{f(a),e(t)},Z=(t,e)=>{e(t)},P=(t,e)=>new Promise(((a,i)=>{s.axios["delete"](`/api/sections/${t}`).then((t=>{$(t.data,a,e)})).catch((t=>{Z(t.response.data,i)}))})),v={store:n,update:c,items:w,all:f,show:x,search:_,destroy:P}},5716:(t,e,a)=>{a.r(e),a.d(e,{default:()=>M});var s=a(3673),i=a(2323),o=a(8880);const n={class:"q-pa-lg"},l={key:0,class:"text-h5 text-bold q-my-md q-pt-lg"},r={key:1,class:"text-center"},c={key:2},d=["id"],h=["id"],p=["innerHTML"],u=(0,s._)("div",{class:"text-h6 q-pa-md"},"Sections",-1),m=(0,s._)("div",{class:"text-h6"},"Questions",-1);function w(t,e,a,w,g,k){const f=(0,s.up)("q-breadcrumbs-el"),b=(0,s.up)("q-breadcrumbs"),q=(0,s.up)("q-page-sticky"),x=(0,s.up)("q-spinner-bars"),y=(0,s.up)("q-icon"),C=(0,s.up)("q-btn"),_=(0,s.up)("q-item-section"),$=(0,s.up)("q-item"),Z=(0,s.up)("q-list"),P=(0,s.up)("q-card-section"),v=(0,s.up)("q-card"),Q=(0,s.up)("q-dialog"),W=(0,s.up)("q-separator"),S=(0,s.up)("q-item-label"),D=(0,s.up)("q-option-group"),T=(0,s.up)("q-card-actions"),U=(0,s.Q2)("close-popup"),V=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(q,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{to:"/",icon:"menu_book",label:"My Handbook"}),(0,s.Wm)(f,{icon:"local_library",label:"Search"})])),_:1})])),_:1}),t.article?((0,s.wg)(),(0,s.iD)("h5",l,(0,i.zw)(t.article.title),1)):(0,s.kq)("",!0),t.loading?((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(x,{color:"primary",size:"2em"})])):((0,s.wg)(),(0,s.iD)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,style:{"min-height":"450px","padding-bottom":"20px"}},[e.title?((0,s.wg)(),(0,s.iD)("h6",{key:0,id:`section-${e.id}`,class:"text-h6 q-my-md",style:{"line-height":"1.6rem"}},[(0,s.Wm)(y,{name:e.bookmarked?"star":"star_outline",color:e.bookmarked?"yellow-9":"primary",clickable:"",onClick:a=>t.bookmark(e)},null,8,["name","color","onClick"]),(0,s.Uk)(" "+(0,i.zw)(t.titleCase(e.title)),1)],8,d)):((0,s.wg)(),(0,s.iD)("span",{key:1,id:`section-${e.id}`},null,8,h)),(0,s._)("div",{innerHTML:e.content,class:"text-body1"},null,8,p)])))),128)),t.article&&t.article.prev_chapter?((0,s.wg)(),(0,s.j4)(C,{key:0,label:"Previous Chapter",color:"primary",onClick:t.goToPrevChapter,class:"q-mr-sm"},null,8,["onClick"])):(0,s.kq)("",!0),t.article&&t.article.next_chapter?((0,s.wg)(),(0,s.j4)(C,{key:1,label:t.article&&t.article.next_chapter?"Continue to Next Chapter":"Done",color:"primary",onClick:t.goToNextChapter},null,8,["label","onClick"])):(0,s.kq)("",!0)])),(0,s.Wm)(q,{position:"bottom-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{fab:"",icon:"list",color:"primary",onClick:e[0]||(e[0]=e=>t.tableOfContents=!0)})])),_:1}),(0,s.Wm)(Q,{modelValue:t.tableOfContents,"onUpdate:modelValue":e[1]||(e[1]=e=>t.tableOfContents=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"q-pa-sm"},{default:(0,s.w5)((()=>[u,(0,s.Wm)(Z,{separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)($,{key:e.id,clickable:!!e.id,onClick:a=>t.gotoSection(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.title?t.titleCase(e.title):"Introduction"),1)])),_:2},1024)])),_:2},1032,["clickable","onClick"])),[[U,!!e.id]]))),128))])),_:1})])),_:1}),(0,s.Wm)(P,{class:"row items-center justify-end"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(C,{flat:"",label:"Close",color:"primary"},null,512),[[U]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Q,{modelValue:t.showQuestion,"onUpdate:modelValue":e[2]||(e[2]=e=>t.showQuestion=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{style:{width:"700px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(W),(0,s.Wm)(P,{style:{"max-height":"50vh"},class:"scroll"},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{padding:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.questions,((e,a)=>(0,s.wy)(((0,s.wg)(),(0,s.j4)($,{key:e.id,class:"full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(S,{lines:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.question),1)])),_:2},1024),(0,s.Wm)(S,{caption:""},{default:(0,s.w5)((()=>[e?((0,s.wg)(),(0,s.j4)(D,{key:0,modelValue:t.answers[a],"onUpdate:modelValue":e=>t.answers[a]=e,options:JSON.parse(e.options),color:"primary"},null,8,["modelValue","onUpdate:modelValue","options"])):(0,s.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1536)),[[V]]))),128))])),_:1})])),_:1}),(0,s.Wm)(W),(0,s.Wm)(T,{align:"right"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{label:"Submit & Continue",color:"primary",onClick:(0,o.iM)(t.submitAnswer,["prevent"])},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var g=a(515),k=a.n(g),f=(a(7280),a(7874)),b=a(6523),q=a(7728),x=a(3649),y=a(6952),C=a(8427);const _=(0,s.aZ)({name:"ViewSection",data(){return{loading:!1,article:null,floatAction:!1,tableOfContents:!1,showQuestion:!1,answers:[]}},computed:k()({},(0,f.Se)({chapters:"allChapters",sections:"allSections",questions:"allQuestions"})),mounted(){this.init()},methods:{init(){this.article=this.chapters.find((t=>+t.id===+this.$route.params.id)),this.loading=!0,this.article||x.Z.show(this.$route.params.id).then((t=>{this.article=t})).catch((t=>{})),b.Z.all(this.$route.params.id).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1})),q.Z.all(this.$route.params.id).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},titleCase(t){return t.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).join(" ")},bookmark(t){const e=!t.bookmarked,a=Object.assign({},t);a.bookmarked=e,C["default"].dispatch("updateSection",a),this.$q.dialog({title:e?"Bookmark Added!":"Bookmark Removed!",message:`${this.titleCase(t.title)}`}),y.Z.bookmark(t.id,e).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},gotoSection(t){this.goToHash(`#section-${t.id}`)},goToHash(t){const e=this,a=t||e.$route.hash;setTimeout((function(){e.$nextTick((()=>{if(a){const t=document.querySelector(a)?document.querySelector(a).offsetTop-160:0;window.scroll({top:t,behavior:"smooth"})}}))}),500)},submitAnswer(){const t=JSON.stringify(this.questions.map((t=>+t.answer))),e=JSON.stringify(this.answers);e===t?(this.showQuestion=!1,this.answers=[],this.article.next_chapter&&x.Z.answer(this.$route.params.id).then((()=>{this.$router.push(`/article/${this.article.next_chapter}`)})).catch((t=>{}))):this.$q.dialog({title:"Incorrect!",message:"One or more answers are incorrect! Please try answering again."})},goToPrevChapter(){this.$router.push(`/article/${this.article.prev_chapter}`)},goToNextChapter(){!this.article.is_answered&&this.questions.length?this.showQuestion=!0:this.$router.push(`/article/${this.article.next_chapter}`)}},watch:{loading(t){t||this.goToHash()},$route(t,e){this.init()}}});var $=a(1007),Z=a(1481),P=a(5926),v=a(4752),Q=a(4554),W=a(2165),S=a(6778),D=a(151),T=a(5589),U=a(7011),V=a(3414),A=a(2035),O=a(5869),H=a(2350),j=a(337),B=a(9367),z=a(677),I=a(6489),N=a(7518),L=a.n(N);_.render=w;const M=_;L()(_,"components",{QPageSticky:$.Z,QBreadcrumbs:Z.Z,QBreadcrumbsEl:P.Z,QSpinnerBars:v.Z,QIcon:Q.Z,QBtn:W.Z,QDialog:S.Z,QCard:D.Z,QCardSection:T.Z,QList:U.Z,QItem:V.Z,QItemSection:A.Z,QSeparator:O.Z,QItemLabel:H.Z,QOptionGroup:j.Z,QCardActions:B.Z}),L()(_,"directives",{ClosePopup:z.Z,Ripple:I.Z})}}]);