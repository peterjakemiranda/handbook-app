"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[408],{408:(e,a,t)=>{t.r(a),t.d(a,{default:()=>W});var l=t(3673),s=t(8880);const r={class:"column q-pa-lg"},o={class:"row"},n=(0,l._)("h4",{class:"text-h5 text-center q-pt-lg q-my-md text-weight-bold"},[(0,l._)("span",{class:"text-blue-2 block",style:{"font-family":"Georgia, serif"}},"SDSSU"),(0,l.Uk)(" Student Handbook ")],-1),i={key:0,class:"text-body2 text-center text-red-3"};function d(e,a,t,d,u,c){const p=(0,l.up)("q-icon"),m=(0,l.up)("q-input"),w=(0,l.up)("q-form"),h=(0,l.up)("q-card-section"),g=(0,l.up)("q-btn"),f=(0,l.up)("q-card-actions"),q=(0,l.up)("q-separator"),b=(0,l.up)("q-card"),k=(0,l.up)("q-page"),x=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(x,{view:"lHh Lpr fff"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{class:"\n        window-height window-width\n        row\n        justify-center\n        items-center\n        text-white\n      ",style:{background:"linear-gradient(#0470d9, #1f8fff)"}},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("div",o,[(0,l.Wm)(b,{square:"",class:"bg-transparent shadow-0 full-height",style:{width:"320px"}},{default:(0,l.w5)((()=>[n,(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[e.invalidCredentials?((0,l.wg)(),(0,l.iD)("div",i," Invalid username or password! ")):(0,l.kq)("",!0),(0,l.Wm)(w,{class:"q-px-sm q-pt-xs"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{square:"",clearable:"",dark:"",color:"white",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),type:"email",label:"Email","lazy-rules":"",rules:[e=>e&&e.length>0||"Email is required"]},{prepend:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"email",color:"white"})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(m,{square:"",clearable:"",dark:"",color:"white",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),type:"password",label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Password is required"]},{prepend:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"lock",color:"white"})])),_:1},8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(f,{class:"q-px-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:(0,s.iM)(e.onSubmit,["prevent"]),unelevated:"",size:"lg",color:"dark",class:"full-width",label:"Sign In"},null,8,["onClick"])])),_:1}),(0,l.Wm)(h,{class:"text-center q-pa-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{flat:"",class:"text-grey-1 text-capitalize q-pa-sm q-mb-sm",label:"Forgot your password?",to:"/forgot-password"}),(0,l.Wm)(q),(0,l.Wm)(g,{to:"/register",flat:"",class:"text-grey-1 text-capitalize text-bold q-mt-sm",label:"No Account yet? Register Now"})])),_:1})])),_:1})])])])),_:1})])),_:1})}var u=t(5424);const c=(0,l.aZ)({name:"Login",data(){return{email:"",password:"",invalidCredentials:!1}},methods:{onSubmit(){u.Z.login({email:this.email,password:this.password}).then((()=>{this.loading=!1})).catch((e=>{this.invalidCredentials=!0,this.loading=!1}))}}});var p=t(9214),m=t(4379),w=t(151),h=t(5589),g=t(5269),f=t(4842),q=t(4554),b=t(9367),k=t(2165),x=t(5869),y=t(7518),_=t.n(y);c.render=d;const W=c;_()(c,"components",{QLayout:p.Z,QPage:m.Z,QCard:w.Z,QCardSection:h.Z,QForm:g.Z,QInput:f.Z,QIcon:q.Z,QCardActions:b.Z,QBtn:k.Z,QSeparator:x.Z})}}]);