"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[908],{4908:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(3673),n=a(8880);const s={class:"column q-pa-lg"},i={class:"row"},o=(0,l._)("h4",{class:"text-h5 text-center q-pt-lg q-my-md text-weight-bold"},[(0,l._)("span",{class:"text-blue-2 block",style:{"font-family":"Georgia, serif"}},"SDSSU"),(0,l.Uk)(" Student Handbook ")],-1),r=(0,l._)("div",{class:"text-h6 q-px-lg q-pb-xs q-pt-lg"},"Password Recovery",-1),d=(0,l._)("div",{class:"text-body1"}," If account exists, an email will be sent with further instructions. Please click the link when you get it. ",-1);function c(e,t,a,c,u,m){const p=(0,l.up)("q-icon"),h=(0,l.up)("q-input"),w=(0,l.up)("q-form"),g=(0,l.up)("q-btn"),f=(0,l.up)("q-card-section"),k=(0,l.up)("q-card"),q=(0,l.up)("q-page"),b=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(b,{view:"lHh Lpr fff"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"\n        window-height window-width\n        row\n        justify-center\n        items-center\n        text-white\n      ",style:{background:"linear-gradient(#0470d9, #1f8fff)"}},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",i,[(0,l.Wm)(k,{square:"",class:"bg-transparent shadow-0 full-height",style:{width:"320px"}},{default:(0,l.w5)((()=>[o,r,e.sent?((0,l.wg)(),(0,l.j4)(f,{key:1,class:"q-pa-lg"},{default:(0,l.w5)((()=>[d])),_:1})):((0,l.wg)(),(0,l.j4)(f,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{class:"q-px-sm q-pt-m"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{square:"",clearable:"",dark:"",color:"white",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),type:"email",label:"Enter you email","lazy-rules":"",rules:[e=>e&&e.length>0||"Email is required"]},{prepend:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"email",color:"white"})])),_:1},8,["modelValue","rules"])])),_:1}),(0,l.Wm)(g,{dark:"",loading:e.loading,onClick:(0,n.iM)(e.onSubmit,["prevent"]),unelevated:"",size:"lg",color:"dark",class:"full-width",style:{"font-size":"17px"},label:"Email me a recovery link"},null,8,["loading","onClick"])])),_:1})),(0,l.Wm)(f,{class:"text-center q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{flat:"",class:"text-grey-1 text-capitalize",label:"Back to login",to:"/login"})])),_:1})])),_:1})])])])),_:1})])),_:1})}var u=a(5424);const m=(0,l.aZ)({name:"ForgotPassword",data(){return{loading:!1,email:"",sent:!1}},methods:{onSubmit(){this.loading=!0,u.Z.resetPassword({email:this.email}).then((()=>{this.loading=!1,this.sent=!0})).catch((e=>{console.log(e),e.error&&(this.invalidCredentials=!0),this.loading=!1}))}}});var p=a(9214),h=a(4379),w=a(151),g=a(5589),f=a(5269),k=a(4842),q=a(4554),b=a(2165),y=a(7518),x=a.n(y);m.render=c;const _=m;x()(m,"components",{QLayout:p.Z,QPage:h.Z,QCard:w.Z,QCardSection:g.Z,QForm:f.Z,QInput:k.Z,QIcon:q.Z,QBtn:b.Z})}}]);