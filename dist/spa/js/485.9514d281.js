"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[485],{3649:(e,t,a)=>{a.d(t,{Z:()=>Q});var s=a(5474);const i=(e,{data:t})=>{e(t)},o=(e,t)=>{t(e)},n=e=>new Promise(((t,a)=>{s.axios.request({url:"/api/chapters",data:e,method:"post"}).then((e=>{i(t,e)})).catch((e=>{o(e.response.data,a)}))})),h=(e,t)=>{t(e)},l=(e,t)=>{t(e)},r=(e,t)=>new Promise(((a,i)=>{s.axios.request({url:`/api/chapters/${e}`,data:t,method:"put"}).then((e=>{h(e.data,a)})).catch((e=>{l(e.response.data,i)}))}));var c=a(8427),d=a(5314),p=a(3305);const u=({data:e},t,a)=>{const s=e,i=d.Z.fetch(e.pagination);c["default"].dispatch("fetchChapters",{chapters:s,pagination:i}),a({chapters:s,pagination:i})},m=(e,t)=>t(e),w=(e={})=>new Promise(((t,a)=>{s.axios.get(p.Z.buildUrl("/api/chapters",e)).then((a=>{u(a,e,t)})).catch((e=>{m(e,a)}))})),q=({data:e},t)=>{c["default"].dispatch("fetchAllChapters",e),t(e)},g=(e,t)=>t(e),f=(e=null)=>new Promise(((t,a)=>{s.axios.get(null===e?"/api/chapters":`/api/chapters?search=${e}`).then((e=>{q(e,t)})).catch((e=>{g(e,a)}))})),v=(e,t)=>{t(e)},b=(e,t)=>{t(e)},C=e=>new Promise(((t,a)=>{s.axios.get(`/api/chapters/${e}`).then((e=>{v(e.data,t)})).catch((e=>{b(e.response.data,a)}))})),$=(e,t)=>{f(),t(e)},x=(e,t)=>{t(e)},Z=e=>new Promise(((t,a)=>{s.axios["delete"](`/api/chapters/${e}`).then((e=>{$(e.data,t)})).catch((e=>{x(e.response.data,a)}))})),_=(e,t)=>{t(e)},k=(e,t)=>{t(e)},P=e=>new Promise(((t,a)=>{s.axios.post(`/api/chapters/${e}/answer`).then((e=>{_(e.data,t)})).catch((e=>{k(e.response.data,a)}))})),Q={store:n,update:r,items:w,all:f,show:C,destroy:Z,answer:P}},7728:(e,t,a)=>{a.d(t,{Z:()=>Q});var s=a(5474);const i=(e,{data:t})=>{e(t)},o=(e,t)=>{t(e)},n=e=>new Promise(((t,a)=>{s.axios.request({url:"/api/questions",data:e,method:"post"}).then((e=>{i(t,e)})).catch((e=>{o(e.response.data,a)}))})),h=(e,t)=>{t(e)},l=(e,t)=>{t(e)},r=(e,t)=>new Promise(((a,i)=>{s.axios.request({url:`/api/questions/${e}`,data:t,method:"put"}).then((e=>{h(e.data,a)})).catch((e=>{l(e.response.data,i)}))}));var c=a(8427),d=a(5314),p=a(3305);const u=({data:e},t,a)=>{const s=e,i=d.Z.fetch(e.pagination);c["default"].dispatch("fetchQuestions",{questions:s,pagination:i}),a({questions:s,pagination:i})},m=(e,t)=>t(e),w=(e={})=>new Promise(((t,a)=>{s.axios.get(p.Z.buildUrl("/api/questions",e)).then((a=>{u(a,e,t)})).catch((e=>{m(e,a)}))})),q=({data:e},t)=>{c["default"].dispatch("fetchAllQuestions",e),t(e)},g=(e,t)=>t(e),f=(e=null)=>new Promise(((t,a)=>{s.axios.get(null===e?"/api/questions":`/api/questions?chapter_id=${e}`).then((e=>{q(e,t)})).catch((e=>{g(e,a)}))})),v=(e,t)=>{t(e)},b=(e,t)=>{t(e)},C=e=>new Promise(((t,a)=>{s.axios.get(`/api/questions/${e}`).then((e=>{v(e.data,t)})).catch((e=>{b(e.response.data,a)}))})),$=({data:e},t)=>{c["default"].dispatch("fetchSearchResults",e),t(e)},x=(e,t)=>t(e),Z=(e="")=>new Promise(((t,a)=>{s.axios.get(`/api/questions?search=${e}`).then((e=>{$(e,t)})).catch((e=>{x(e,a)}))})),_=(e,t,a)=>{f(a),t(e)},k=(e,t)=>{t(e)},P=(e,t)=>new Promise(((a,i)=>{s.axios["delete"](`/api/questions/${e}`).then((e=>{_(e.data,a,t)})).catch((e=>{k(e.response.data,i)}))})),Q={store:n,update:r,items:w,all:f,show:C,search:Z,destroy:P}},8485:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var s=a(3673),i=a(2323),o=a(8880);const n={class:"q-pa-md"},h={class:"text-h5 q-py-md"},l=(0,s.Uk)(" You can add multiple choices "),r={key:0,class:"text-title"},c={class:"q-gutter-lg q-pa-lg"};function d(e,t,a,d,p,u){const m=(0,s.up)("q-select"),w=(0,s.up)("q-input"),q=(0,s.up)("q-btn"),g=(0,s.up)("q-radio"),f=(0,s.up)("q-item"),v=(0,s.up)("q-list"),b=(0,s.up)("q-form"),C=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",h,(0,i.zw)(e.id?"Update":"Create")+" Question",1),(0,s.Wm)(b,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md",style:{"max-width":"800px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{filled:"","map-options":"",modelValue:e.chapter,"onUpdate:modelValue":t[0]||(t[0]=t=>e.chapter=t),options:e.chapterOptions,label:"Chapter"},null,8,["modelValue","options"]),(0,s.Wm)(w,{filled:"",modelValue:e.question,"onUpdate:modelValue":t[1]||(t[1]=t=>e.question=t),label:"Question"},null,8,["modelValue"]),(0,s.Wm)(w,{"bottom-slots":"",label:"Add answer choices",modelValue:e.choice,"onUpdate:modelValue":t[2]||(t[2]=t=>e.choice=t)},{hint:(0,s.w5)((()=>[l])),append:(0,s.w5)((()=>[(0,s.Wm)(q,{round:"",dense:"",color:"primary",icon:"add",onClick:(0,o.iM)(e.addChoice,["prevent"])},null,8,["onClick"])])),_:1},8,["modelValue"]),e.choices.length?((0,s.wg)(),(0,s.iD)("div",r,"Choices (Mark 1 Correct Answer)")):(0,s.kq)("",!0),(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.choices,(a=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(f,{key:a.value,tag:"label"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{modelValue:e.answer,"onUpdate:modelValue":t[3]||(t[3]=t=>e.answer=t),val:a.value,label:a.label},null,8,["modelValue","val","label"]),(0,s.Wm)(q,{round:"",dense:"",flat:"",color:"red",icon:"delete",onClick:(0,o.iM)((t=>e.deleteChoice(a.value)),["prevent"])},null,8,["onClick"])])),_:2},1536)),[[C]]))),128))])),_:1}),(0,s._)("div",c,[(0,s.Wm)(q,{label:"Submit",type:"submit",color:"primary"}),(0,s.Wm)(q,{label:"Back",type:"submit",to:`/admin/chapters/${e.$route.params.chapter_id}/questions`},null,8,["to"])])])),_:1},8,["onSubmit","onReset"])])}var p=a(515),u=a.n(p),m=a(3649),w=a(7728),q=a(7874);const g=(0,s.aZ)({name:"AdminQuestionForm",data(){return{id:"",question:"",content:"",chapter:"",answer:null,choices:[]}},computed:u()(u()({},(0,q.Se)({chapters:"allChapters",questions:"allQuestions"})),{},{chapterOptions(){return this.chapters.map((e=>({label:e.title,value:e.id})))}}),mounted(){this.chapters.length?this.setCurrentChapter():m.Z.all().then((e=>{this.loading=!1,this.setCurrentChapter()})).catch((e=>{this.loading=!1})),this.$route.params.id&&w.Z.show(this.$route.params.id).then((e=>{this.id=e.id,this.chapter_id=e.chapter_id,this.question=e.question,this.answer=+e.answer,this.choices=JSON.parse(e.options),this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{onSubmit(){this.id?this.update():this.save()},save(){this.answer?this.choices.length<2?this.$q.dialog({title:"Error!",message:"Please add atleast 2 answer choices"}):w.Z.store({question:this.question,answer:this.answer,chapter_id:this.chapter.value,options:JSON.stringify(this.choices)}).then((e=>{this.loading=!1,this.$router.push(`/admin/chapters/${this.$route.params.chapter_id}/questions`)})).catch((e=>{this.loading=!1})):this.$q.dialog({title:"Error!",message:"Please select 1 correct answer to the choices"})},update(){w.Z.update(this.id,{question:this.question,answer:this.answer,chapter_id:this.chapter.value,options:JSON.stringify(this.choices)}).then((e=>{this.loading=!1,this.$router.push(`/admin/chapters/${this.$route.params.chapter_id}/questions`)})).catch((e=>{this.loading=!1}))},addChoice(){this.choices.push({value:this.choices.length+1,label:this.choice}),this.choice=null},deleteChoice(e){const t=this.choices.findIndex((t=>t.value===e));this.choices.splice(t,1)},setCurrentChapter(){this.chapter=this.chapterOptions.find((e=>+e.value===+this.$route.params.chapter_id))},onReset(){}},watch:{chapters(e){}}});var f=a(5269),v=a(7236),b=a(4842),C=a(2165),$=a(7011),x=a(3414),Z=a(7991),_=a(6489),k=a(7518),P=a.n(k);g.render=d;const Q=g;P()(g,"components",{QForm:f.Z,QSelect:v.Z,QInput:b.Z,QBtn:C.Z,QList:$.Z,QItem:x.Z,QRadio:Z.Z}),P()(g,"directives",{Ripple:_.Z})}}]);