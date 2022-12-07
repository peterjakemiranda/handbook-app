(()=>{"use strict";var e={3227:(e,t,a)=>{a(7280),a(5363),a(71);var i=a(8880),n=a(9592),o=a(3673);function s(e,t,a,i,n,s){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r)}const r=(0,o.aZ)({name:"App"});r.render=s;const c=r;var l=a(8427),u=a(5);async function p(e,t){const i="function"===typeof l["default"]?await(0,l["default"])({}):l["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,8427)),s="function"===typeof u.Z?await(0,u.Z)({store:i}):u.Z;i.$router=s;const r=e(c);return r.use(n.Z,t),{app:r,store:i,storeKey:o,router:s}}var m=a(1417);const h={config:{},plugins:{Dialog:m.Z}},d="";async function g({app:e,router:t,store:a,storeKey:i},n){let o=!1;const s=e=>{o=!0;const a=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=a},r=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<n.length;l++)try{await n[l]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:r,publicPath:d})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(t),e.use(a,i),e.mount("#q-app"))}p(i.ri,h).then((e=>Promise.all([Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));g(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p,axios:()=>o.a,api:()=>u});var i=a(7083),n=a(52),o=a.n(n),s=a(5424),r=a(8427),c=a(5);r["default"].dispatch("checkAuthentication"),o().defaults.baseURL="https://bcc-handbook.vercel.app",o().defaults.headers.common.Accept="application/json";const l=[40102,40103];o().interceptors.response.use((e=>e),(e=>{if(401===e.response.status&&-1===e.response.request.responseURL.indexOf("retry=1")){const t=e.response.data.error.code;if(l.indexOf(t)>=0)return s.Z.logout(),Promise.reject(e);if(40104===t)return 1==c.N.currentRoute.value.meta.auth||0==Object.keys(c.N.currentRoute.value.meta).length?s.Z.token.getRefreshedToken(e.response):void 0}return Promise.reject(e)})),o().interceptors.request.use((e=>(localStorage.getItem("id_token")&&(e.headers.Authorization=`Bearer ${localStorage.getItem("id_token")}`),e)),(e=>Promise.reject(e)));const u=o().create(),p=(0,i.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=u}))},5:(e,t,a)=>{a.d(t,{Z:()=>m,N:()=>p});var i=a(7083),n=a(9582);a(71);const o={Admin:"admin",User:"student"},s=[{path:"/",component:()=>Promise.all([a.e(736),a.e(571)]).then(a.bind(a,571)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(286)]).then(a.bind(a,1286))},{path:"account",component:()=>Promise.all([a.e(736),a.e(125)]).then(a.bind(a,7125))},{path:"search",component:()=>Promise.all([a.e(736),a.e(748)]).then(a.bind(a,6193))},{path:"article/:id",component:()=>Promise.all([a.e(736),a.e(716)]).then(a.bind(a,5716))},{path:"admin/chapters",component:()=>Promise.all([a.e(736),a.e(436)]).then(a.bind(a,436)),meta:{auth:!0,authorize:[o.Admin]}},{path:"admin/chapters/create",component:()=>Promise.all([a.e(736),a.e(29)]).then(a.bind(a,2029)),meta:{auth:!0,authorize:[o.Admin]}},{path:"admin/chapters/:id/edit",component:()=>Promise.all([a.e(736),a.e(29)]).then(a.bind(a,2029))},{path:"admin/chapters/:chapter_id/sections",component:()=>Promise.all([a.e(736),a.e(375)]).then(a.bind(a,2375))},{path:"admin/chapters/:chapter_id/sections/create",component:()=>Promise.all([a.e(736),a.e(277)]).then(a.bind(a,9277))},{path:"admin/chapters/:chapter_id/sections/:id/edit",component:()=>Promise.all([a.e(736),a.e(277)]).then(a.bind(a,9277))},{path:"admin/chapters/:chapter_id/questions",component:()=>Promise.all([a.e(736),a.e(537)]).then(a.bind(a,4537))},{path:"admin/chapters/:chapter_id/questions/create",component:()=>Promise.all([a.e(736),a.e(485)]).then(a.bind(a,8485))},{path:"admin/chapters/:chapter_id/questions/:id/edit",component:()=>Promise.all([a.e(736),a.e(485)]).then(a.bind(a,8485))},{path:"admin/users",component:()=>Promise.all([a.e(736),a.e(212)]).then(a.bind(a,2212)),meta:{auth:!0,authorize:[o.Admin]}},{path:"admin/users/create",component:()=>Promise.all([a.e(736),a.e(730)]).then(a.bind(a,9730)),meta:{auth:!0,authorize:[o.Admin]}},{path:"admin/users/:id/edit",component:()=>Promise.all([a.e(736),a.e(730)]).then(a.bind(a,9730)),meta:{auth:!0,authorize:[o.Admin]}},{path:"admin/monitoring",component:()=>Promise.all([a.e(736),a.e(414)]).then(a.bind(a,4414)),meta:{auth:!0,authorize:[o.Admin]}}],meta:{auth:!0}},{path:"/login",component:()=>Promise.all([a.e(736),a.e(669)]).then(a.bind(a,2669)),meta:{guest:!0}},{path:"/admin-login",component:()=>Promise.all([a.e(736),a.e(343)]).then(a.bind(a,7343)),meta:{guest:!0}},{path:"/register",component:()=>Promise.all([a.e(736),a.e(16)]).then(a.bind(a,5571)),meta:{guest:!0}},{path:"/forgot-password",component:()=>Promise.all([a.e(736),a.e(729)]).then(a.bind(a,8729)),meta:{guest:!0}},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(193)]).then(a.bind(a,2193))}],r=s;var c=a(8427);const l=(e,t,a)=>{if(e.matched.some((e=>e.meta.auth))){if(!c["default"].state.auth.authenticated)return a({path:"/login"});console.log(e.meta);const{authorize:t}=e.meta;if(t&&!t.includes(localStorage.getItem("role")))return a({path:"/"});if(0===Object.keys(c["default"].state.profile.account).length)return a();const{verified:i}=c["default"].state.profile.account;if(!i&&e.matched.some((e=>e.meta.emailVerificationRequired)))return a({path:"/"})}else if(e.matched.some((e=>e.meta.guest))&&c["default"].state.auth.authenticated)return a({path:"/"});return a()},u={beforeEach:l};let p=null;const m=(0,i.BC)((function(){const e=n.r5;return p=(0,n.p7)({scrollBehavior:()=>({left:0,top:0}),routes:r,history:e("")}),p.beforeEach(u.beforeEach),p}))},5395:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(8427),n=a(5474);const o=(e,t)=>{i["default"].dispatch("getAccount",e),t(e)},s=(e,t)=>{t(e)},r=()=>new Promise(((e,t)=>{n.axios.get("api/account").then((t=>{o(t.data,e)})).catch((e=>{s(e,t)}))}));a(5);const c=(e,t)=>{y.find().then((()=>{t()}))},l=(e,t)=>t(e.response.data),u=(e,t=null)=>new Promise(((a,i)=>{n.axios.put(t?`api/account/${t}`:"api/account",e).then((e=>{c(e.data,a)})).catch((e=>{l(e,i)}))}));var p=a(5314),m=a(3305);const h=({data:e},t,a)=>{const n=e.data,o=p.Z.fetch(e.pagination);i["default"].dispatch("fetchUsers",{users:n,pagination:o}),a({users:n,pagination:o})},d=(e,t)=>t(e),g=(e={})=>new Promise(((t,a)=>{n.axios.get(m.Z.buildUrl("/api/users",e)).then((a=>{h(a.data,e,t)})).catch((e=>{d(e,a)}))})),f=(e,t)=>{t(e)},b=(e,t)=>{t(e)},P=e=>new Promise(((t,a)=>{n.axios.get(`/api/users/${e}`).then((e=>{f(e.data,t)})).catch((e=>{b(e.response.data,a)}))})),v=(e,t)=>{t(e)},S=(e,t)=>{t(e)},E=()=>new Promise(((e,t)=>{n.axios.get("/api/admins").then((t=>{v(t.data,e)})).catch((e=>{S(e.response.data,t)}))})),y={find:r,update:u,items:g,show:P,admins:E}},5424:(e,t,a)=>{a.d(t,{Z:()=>q});var i=a(5395),n=a(8427),o=a(5),s=a(5474);const r=(e,t)=>{n["default"].dispatch("login",e),i.Z.find().then((()=>{o.N.push({path:"/"}),t()}))},c=(e,t)=>t(e.response),l=e=>new Promise(((t,a)=>{s.axios.post("api/login",e).then((e=>{r(e.data,t)})).catch((e=>{c(e,a)}))})),u=(e,t)=>{n["default"].dispatch("login",e),i.Z.find().then((()=>{o.N.push({path:"/"}),t()}))},p=(e,t)=>t(e.response),m=e=>new Promise(((t,a)=>{s.axios.post("api/signup",e).then((e=>{u(e.data,t)})).catch((e=>{p(e,a)}))})),h=()=>{n["default"].dispatch("logout"),o.N.push("/login")};var d=a(3058);const g=document.createEvent("Event");g.initEvent("onRefreshSuccess",!0,!0);const f=e=>(void 0!==e.config.params?e.config.params.retry=1:e.config.params={retry:1},new Promise(((t,a)=>{const i=n=>{document.removeEventListener(n.type,i,!1),s.axios.request(e.config).then((e=>t(e))).catch((e=>a(e)))};document.addEventListener("onRefreshSuccess",i)}))),b=(e,t)=>(document.dispatchEvent(g),localStorage.setItem("id_token",e.data.token),n["default"].dispatch("checkAuthentication"),n["default"].commit(d.PH,!1),s.axios.request(t.config)),P=e=>(n["default"].commit(d.PH,!1),40105===e.response.data.error.code?h():Promise.reject(e)),v=e=>n["default"].state.auth.refreshing?f(e):(n["default"].commit(d.PH,!0),s.axios.get("api/refresh").then((t=>b(t,e))).catch(P)),S={getRefreshedToken:v},E=(e,t)=>{t(e)},y=(e,t)=>{t(e)},_=()=>{const e=new Promise(((e,t)=>{s["default"].get("auth/resend-confirm").then((t=>{E(t.data,e)})).catch((e=>{y(e.response.data,t)}))}));return e},T=(e,t)=>{t(e)},C=(e,t)=>{t(e)},A=e=>new Promise(((t,a)=>{s.axios.post("api/password/reset_request",e).then((e=>{T(e.data,t)})).catch((e=>{C(e.response.data,a)}))})),w=(e,t)=>{t(e.data.success.message)},k=(e,t)=>{t(e)},R=e=>new Promise(((t,a)=>{s["default"].put("auth/update_password",e).then((e=>{w(e,t)})).catch((e=>{k(e.response.data,a)}))})),q={login:l,register:m,logout:h,token:S,resendConfirmation:_,resetPassword:A,updatePassword:R}},8427:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var i={};a.r(i),a.d(i,{checkAuthentication:()=>m,fetchAllBookmarks:()=>R,fetchAllChapters:()=>d,fetchAllQuestions:()=>T,fetchAllSections:()=>P,fetchChapters:()=>h,fetchQuestionSearchResults:()=>C,fetchQuestions:()=>_,fetchSearchResults:()=>v,fetchSections:()=>b,fetchUsers:()=>c,getAccount:()=>r,login:()=>u,logout:()=>p,resetChapters:()=>g,resetQuestions:()=>A,resetSections:()=>S,setChapterQuery:()=>f,setQuestionQuery:()=>w,setSectionQuery:()=>E,updateQuestion:()=>k,updateSection:()=>y,updateUser:()=>l});var n={};a.r(n),a.d(n,{account:()=>I,allBookmarks:()=>$,allChapters:()=>Z,allQuestions:()=>K,allSections:()=>F,allUsers:()=>H,chapterQuery:()=>Q,chapters:()=>U,isAuthenticated:()=>O,isInMaintenance:()=>x,questionQuery:()=>G,questionSearchResults:()=>M,questions:()=>B,searchResults:()=>L,sectionQuery:()=>z,sections:()=>j,sidebarStatus:()=>q,twoFactorVerification:()=>N});var o=a(7874),s=(a(7280),a(3058));const r=({commit:e},t)=>{e(s.CJ,t)},c=({commit:e},{users:t,pagination:a})=>{e(s.WH,{users:t,pagination:a})},l=({commit:e},t)=>{e(s.AX,t)},u=({commit:e},t)=>{e(s.ym,t)},p=({commit:e})=>{e(s.ri),e(s.Nv)},m=({commit:e})=>{e(s.Mb)},h=({commit:e},{chapters:t,pagination:a})=>{e(s.lg,{chapters:t,pagination:a})},d=({commit:e},t)=>{e(s.ZG,t)},g=({commit:e})=>{e(s.sc)},f=({commit:e},{page:t,limit:a,search:i})=>{e(s.Gz,{page:t,limit:a,search:i})},b=({commit:e},{sections:t,pagination:a})=>{e(s.bZ,{sections:t,pagination:a})},P=({commit:e},t)=>{e(s.Bd,t)},v=({commit:e},t)=>{e(s.cS,t)},S=({commit:e})=>{e(s.Pi)},E=({commit:e},{page:t,limit:a,search:i})=>{e(s.zN,{page:t,limit:a,search:i})},y=({commit:e},t)=>{e(s.Z_,t)},_=({commit:e},{questions:t,pagination:a})=>{e(s.HJ,{questions:t,pagination:a})},T=({commit:e},t)=>{e(s.I_,t)},C=({commit:e},t)=>{e(s.cS,t)},A=({commit:e})=>{e(s.JK)},w=({commit:e},{page:t,limit:a,search:i})=>{e(s.MK,{page:t,limit:a,search:i})},k=({commit:e},t)=>{e(s.nx,t)},R=({commit:e},t)=>{e(s.wy,t)},q=e=>e.sidebar.status,O=e=>e.auth.authenticated,N=e=>e.auth.twoFactorVerification,x=e=>e.auth.maintenance,I=e=>e.profile.account,H=e=>({items:e.profile.items,pagination:e.profile.pagination}),U=e=>({items:e.chapter.items,pagination:e.chapter.pagination}),Z=e=>e.chapter.all,Q=e=>e.chapter.query,j=e=>({items:e.section.items,pagination:e.section.pagination}),F=e=>e.section.all,L=e=>e.section.searchResults,z=e=>e.section.query,B=e=>({items:e.question.items,pagination:e.question.pagination}),K=e=>e.question.all,M=e=>e.question.searchResults,G=e=>e.question.query,$=e=>e.bookmark.all,J={account:{},items:[],pagination:{currentPage:1,lastPage:0,limit:5,totalCount:0}},D={[s.WH](e,{users:t,pagination:a}){e.items=t,e.pagination=a},[s.AX](e,t){const a=e.items.findIndex((e=>e.id===t.id));-1!==a&&e.items.splice(a,1,t)},[s.CJ](e,t){e.account=t},[s.ri](e){e.account={}}},X={state:J,mutations:D},V={authenticated:!1},W={[s.Mb](e){e.authenticated=!!localStorage.getItem("id_token")},[s.ym](e,t){e.authenticated=!0,localStorage.setItem("id_token",t.token),localStorage.setItem("role",t.role)},[s.Nv](e){e.authenticated=!1,localStorage.removeItem("id_token")},[s.PH](e,t){e.refreshing=t}},Y={state:V,mutations:W},ee={all:[],items:[],pagination:{currentPage:1,lastPage:0,limit:5,totalCount:0},query:{page:1,limit:50,search:"",isSet:!1}};a(71);const te={[s.lg](e,{chapters:t,pagination:a}){e.items=t,e.pagination=a},[s.U6](e,{chapters:t,pagination:a}){e.items=[...e.items,...t],e.pagination=a},[s.sc](e){e.all=[],e.items=[],e.pagination={}},[s.ZG](e,t){e.all=t},[s.Gz](e,{page:t,limit:a,search:i}){e.query.page=t,e.query.limit=a,e.query.search=i,e.query.isSet=!0}},ae={state:ee,mutations:te},ie={all:[],items:[],pagination:{currentPage:1,lastPage:0,limit:5,totalCount:0},query:{page:1,limit:50,search:"",isSet:!1},searchResults:[],searchText:""},ne={[s.bZ](e,{sections:t,pagination:a}){e.items=t,e.pagination=a},[s.iB](e,{sections:t,pagination:a}){e.items=[...e.items,...t],e.pagination=a},[s.Pi](e){e.all=[],e.items=[],e.searchResults=[],e.pagination={}},[s.Bd](e,t){e.all=t},[s.cS](e,t){e.searchResults=t},[s.zN](e,{page:t,limit:a,search:i}){e.query.page=t,e.query.limit=a,e.query.search=i,e.query.isSet=!0},[s.Z_](e,t){const a=e.all.findIndex((e=>e.id===t.id));-1!==a&&e.all.splice(a,1,t)},[s.TF](e,t){e.searchText=t}},oe={state:ie,mutations:ne},se={all:[],items:[],pagination:{currentPage:1,lastPage:0,limit:5,totalCount:0},query:{page:1,limit:50,search:"",isSet:!1},searchResults:[],searchText:""},re={[s.HJ](e,{sections:t,pagination:a}){e.items=t,e.pagination=a},[s.BK](e,{sections:t,pagination:a}){e.items=[...e.items,...t],e.pagination=a},[s.JK](e){e.all=[],e.items=[],e.searchResults=[],e.pagination={}},[s.I_](e,t){e.all=t},[s.cS](e,t){e.searchResults=t},[s.MK](e,{page:t,limit:a,search:i}){e.query.page=t,e.query.limit=a,e.query.search=i,e.query.isSet=!0},[s.nx](e,t){const a=e.all.findIndex((e=>e.id===t.id));-1!==a&&e.all.splice(a,1,t)},[s.TF](e,t){e.searchText=t}},ce={state:se,mutations:re},le={all:[],items:[],pagination:{currentPage:1,lastPage:0,limit:5,totalCount:0},query:{page:1,limit:50,search:"",isSet:!1}},ue={[s.wy](e,t){e.all=t}},pe={state:le,mutations:ue},me=!1,he=(0,o.MT)({actions:i,getters:n,modules:{profile:X,auth:Y,chapter:ae,section:oe,question:ce,bookmark:pe},strict:me}),de=he},3058:(e,t,a)=>{a.d(t,{WH:()=>i,CJ:()=>n,ri:()=>o,AX:()=>s,Mb:()=>r,PH:()=>c,Nv:()=>l,ym:()=>u,lg:()=>p,U6:()=>m,sc:()=>h,ZG:()=>d,Gz:()=>g,bZ:()=>f,iB:()=>b,Pi:()=>P,Bd:()=>v,zN:()=>S,Z_:()=>E,cS:()=>y,TF:()=>_,HJ:()=>T,BK:()=>C,JK:()=>A,I_:()=>w,MK:()=>k,nx:()=>R,wy:()=>q});const i="FETCH_USERS",n="GET_ACCOUNT",o="RESET_PROFILE",s="UPDATE_USER",r="CHECK_AUTHENTICATION",c="UPDATE_REFRESHING",l="LOGOUT",u="LOGIN",p="FETCH_CHAPTERS",m="APPEND_CHAPTERS",h="RESET_CHAPTERS",d="FETCH_ALL_CHAPTERS",g="CHAPTER_QUERY",f="FETCH_SECTIONS",b="APPEND_SECTIONS",P="RESET_SECTIONS",v="FETCH_ALL_SECTIONS",S="SECTION_QUERY",E="UPDATE_SECTION",y="FETCH_SEARCH_RESULTS",_="SET_SEARCH_TEXT",T="FETCH_QUESTIONS",C="APPEND_QUESTIONS",A="RESET_QUESTIONS",w="FETCH_ALL_QUESTIONS",k="QUESTION_QUERY",R="UPDATE_QUESTION",q="FETCH_ALL_BOOKMARKS"},5314:(e,t,a)=>{a.d(t,{Z:()=>n});class i{static fetchCollection(e){return e.map((e=>this.fetch(e)))}static sendCollection(e){return e.map((e=>this.send(e)))}}class n extends i{static fetch(e){return{currentPage:e.current_page,lastPage:e.last_page,limit:e.limit,totalCount:e.total_count,counters:e.counters}}static send(e){return{current_page:e.currentPage,last_page:e.lastPage,limit:e.limit,total_count:e.totalCount}}}},3305:(e,t,a)=>{a.d(t,{Z:()=>i});const i={buildUrl(e,t){let a="?";const i=Object.keys(t).filter((e=>t[e]));return i.forEach(((e,n)=>{a+=`${e}=${t[e]}`,n<i.length-1&&(a+="&")})),`${e}${a}`},debounce(e,t){var a=null;return function(){clearTimeout(a);var i=arguments,n=this;a=setTimeout((function(){e.apply(n,i)}),t)}}}}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,a),o.exports}a.m=e,(()=>{var e=[];a.O=(t,i,n,o)=>{if(!i){var s=1/0;for(u=0;u<e.length;u++){for(var[i,n,o]=e[u],r=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](i[c])))?i.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,n,o]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{16:"f9f150f0",29:"96cadd4b",125:"8a834147",193:"628b6c84",212:"ef5b9cf4",277:"e985e06f",286:"826240df",343:"0f1bb2d5",375:"7c3a93c4",414:"bf42cda2",436:"48e35a22",485:"9514d281",537:"0ea6a98f",571:"5fc0edb2",669:"7b5cd3cc",716:"66d8e762",729:"ef0b8c69",730:"d3b9081e",748:"3a34c7bd"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"379737cd"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="handbook-app:";a.l=(i,n,o,s)=>{if(e[i])e[i].push(n);else{var r,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+o){r=p;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+o),r.src=i),e[i]=[n];var m=(t,a)=>{r.onerror=r.onload=null,clearTimeout(h);var n=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(a))),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e={143:0};a.f.j=(t,i)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise(((a,i)=>n=e[t]=[a,i]));i.push(n[2]=o);var s=a.p+a.u(t),r=new Error,c=i=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,n[1](r)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,[s,r,c]=i,l=0;if(s.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var u=c(a)}for(t&&t(i);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return a.O(u)},i=self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[736],(()=>a(3227)));i=a.O(i)})();