"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[212],{2212:(e,l,t)=>{t.r(l),t.d(l,{default:()=>fe});var a=t(3673),i=t(2323),n=t(8880);const s=(0,a._)("div",{class:"text-h5 q-mb-md q-p-5",style:{padding:"10px"}}," Student Accounts ",-1),d=(0,a.Uk)("ID"),o=(0,a.Uk)("First Name"),u=(0,a.Uk)("Last Name"),m=(0,a.Uk)(" Actions "),r={class:"q-gutter-sm"},w=(0,a.Uk)(" View "),c=(0,a.Uk)(" Update Parent Mobile Number "),h=(0,a.Uk)(" Send SMS "),p={class:"q-pa-lg flex flex-center"},_=(0,a._)("div",{class:"text-h5 q-mb-md q-p-5",style:{padding:"10px"}}," Admin Accounts ",-1),f={style:{padding:"10px"}},g=(0,a.Uk)("ID"),W=(0,a.Uk)("First Name"),b=(0,a.Uk)("Last Name"),k=(0,a.Uk)(" Actions "),v={class:"q-gutter-sm"},U=(0,a.Uk)(" Edit "),S=(0,a._)("div",{class:"text-h6"},"Account Details",-1),M=(0,a.Uk)("Student ID: "),y=(0,a.Uk)("Name: "),q=(0,a.Uk)("Program: "),x=(0,a.Uk)("Year Level: "),C=(0,a.Uk)("Section: "),V=(0,a.Uk)("Gender: "),z=(0,a.Uk)("Address: "),P=(0,a.Uk)("Mobile Number: "),Z=(0,a.Uk)("Chapter Accessed Count: "),Q=(0,a._)("div",{class:"text-h6"},"Send SMS to Parent",-1),A={class:"q-pa-md"},N=(0,a._)("div",{class:"text-h6"},"Set Parent Mobile Number",-1),D={class:"q-pa-md"};function I(e,l,t,I,R,L){const Y=(0,a.up)("q-item-label"),j=(0,a.up)("q-item-section"),$=(0,a.up)("q-item"),F=(0,a.up)("q-tooltip"),K=(0,a.up)("q-btn"),E=(0,a.up)("q-list"),H=(0,a.up)("q-pagination"),O=(0,a.up)("q-card-section"),B=(0,a.up)("q-separator"),G=(0,a.up)("q-card-actions"),T=(0,a.up)("q-card"),J=(0,a.up)("q-dialog"),X=(0,a.up)("q-input"),ee=(0,a.up)("q-form"),le=(0,a.Q2)("ripple"),te=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",null,[s,(0,a.Wm)(E,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{lines:"1"},{default:(0,a.w5)((()=>[d])),_:1})])),_:1}),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[o])),_:1})])),_:1}),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[u])),_:1})])),_:1}),(0,a.Wm)(j,{side:""},{default:(0,a.w5)((()=>[m])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users.items,(l=>(0,a.wy)(((0,a.wg)(),(0,a.j4)($,{key:l.id},{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.student_id),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.first_name),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.last_name),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,{side:""},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(K,{flat:"",round:"",size:"12px",icon:"visibility",onClick:(0,n.iM)((t=>e.viewUser(l)),["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[w])),_:1})])),_:2},1032,["onClick"]),(0,a.Wm)(K,{flat:"",round:"",size:"12px",icon:"phone",onClick:(0,n.iM)((t=>e.showParentMobile(l)),["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[c])),_:1})])),_:2},1032,["onClick"]),(0,a.Wm)(K,{flat:"",round:"",size:"12px",icon:"send",onClick:(0,n.iM)((t=>e.showSms(l)),["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[h])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1536)),[[le]]))),128))])),_:1}),(0,a._)("div",p,[e.users.pagination?((0,a.wg)(),(0,a.j4)(H,{key:0,modelValue:e.current,"onUpdate:modelValue":l[0]||(l[0]=l=>e.current=l),max:e.users.pagination.lastPage},null,8,["modelValue","max"])):(0,a.kq)("",!0)]),_,(0,a._)("div",f,[(0,a.Wm)(K,{to:"/admin/users/create",color:"primary",icon:"add",label:"Create Admin User"})]),(0,a.Wm)(E,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{lines:"1"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1}),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[W])),_:1})])),_:1}),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[b])),_:1})])),_:1}),(0,a.Wm)(j,{side:""},{default:(0,a.w5)((()=>[k])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.admins,(e=>(0,a.wy)(((0,a.wg)(),(0,a.j4)($,{key:e.id},{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.student_id),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.first_name),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.last_name),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(j,{side:""},{default:(0,a.w5)((()=>[(0,a._)("div",v,[(0,a.Wm)(K,{flat:"",round:"",size:"12px",icon:"edit",to:`/admin/users/${e.id}/edit`},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[U])),_:1})])),_:2},1032,["to"])])])),_:2},1024)])),_:2},1536)),[[le]]))),128))])),_:1}),(0,a.Wm)(J,{modelValue:e.showViewModal,"onUpdate:modelValue":l[2]||(l[2]=l=>e.showViewModal=l)},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{style:{width:"700px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(B),(0,a.Wm)(O,{style:{"max-height":"50vh"},class:"scroll"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{padding:""},{default:(0,a.w5)((()=>[e.viewing?((0,a.wg)(),(0,a.j4)($,{key:0,class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[M,(0,a._)("b",null,(0,i.zw)(e.viewing.student_id),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[y,(0,a._)("b",null,(0,i.zw)(e.viewing.first_name)+" "+(0,i.zw)(e.viewing.last_name),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[q,(0,a._)("b",null,(0,i.zw)(e.viewing.program_description),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[x,(0,a._)("b",null,(0,i.zw)(e.viewing.year_level),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[C,(0,a._)("b",null,(0,i.zw)(e.viewing.section),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[V,(0,a._)("b",null,(0,i.zw)(e.viewing.gender),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[z,(0,a._)("b",null,(0,i.zw)(e.viewing.address),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[P,(0,a._)("b",null,(0,i.zw)(e.viewing.cp_number),1)])),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((()=>[Z,(0,a._)("b",null,(0,i.zw)(e.viewing.chapter_access_count),1)])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.Wm)(B),(0,a.Wm)(G,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(K,{flat:"",label:"OK",color:"primary",onClick:l[1]||(l[1]=l=>e.viewing=null)},null,512),[[te]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(J,{modelValue:e.showSmsModal,"onUpdate:modelValue":l[5]||(l[5]=l=>e.showSmsModal=l)},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{style:{width:"700px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[Q])),_:1}),(0,a.Wm)(B),(0,a._)("div",A,[(0,a.Wm)(ee,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{filled:"",modelValue:e.mobile,"onUpdate:modelValue":l[3]||(l[3]=l=>e.mobile=l),label:"Parent Mobile Number","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,a.Wm)(X,{modelValue:e.message,"onUpdate:modelValue":l[4]||(l[4]=l=>e.message=l),label:"Your Message",filled:"",type:"textarea"},null,8,["modelValue"]),(0,a.Wm)(G,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{flat:"",label:"Close",color:"primary",onClick:e.closeSms},null,8,["onClick"]),(0,a.Wm)(K,{label:"Send",color:"primary",onClick:e.sendSms},null,8,["onClick"])])),_:1})])),_:1},8,["onSubmit","onReset"])])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(J,{modelValue:e.showParentMobileModal,"onUpdate:modelValue":l[7]||(l[7]=l=>e.showParentMobileModal=l)},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{style:{width:"700px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[N])),_:1}),(0,a.Wm)(B),(0,a._)("div",D,[(0,a.Wm)(ee,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(X,{filled:"",modelValue:e.mobile,"onUpdate:modelValue":l[6]||(l[6]=l=>e.mobile=l),label:"Parent Mobile Number","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,a.Wm)(G,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{flat:"",label:"Close",color:"primary",onClick:e.closeSms},null,8,["onClick"]),(0,a.wy)((0,a.Wm)(K,{label:"Save",color:"primary",onClick:e.saveParentMobile},null,8,["onClick"]),[[te]])])),_:1})])),_:1},8,["onSubmit","onReset"])])])),_:1})])),_:1},8,["modelValue"])])}var R=t(515),L=t.n(R),Y=t(7874),j=t(5395),$=t(5474);const F=(e,l)=>{l(e)},K=(e,l)=>{l(e)},E=e=>new Promise(((l,t)=>{$.axios.post("/api/send-sms",e).then((e=>{F(e.data,l)})).catch((e=>{K(e.response.data,t)}))})),H=(e,l)=>{l(e)},O=(e,l)=>{l(e)},B=e=>new Promise(((l,t)=>{$.axios.post("/api/update-parent-mobile",e).then((e=>{H(e.data,l)})).catch((e=>{O(e.response.data,t)}))})),G={send:E,update:B};var T=t(8427);const J=(0,a.aZ)({name:"AdminUserIndex",data(){return{title:"",description:"",current:1,limit:10,showViewModal:!1,viewing:null,showSmsModal:!1,showParentMobileModal:!1,sending:null,admins:[],mobile:"",message:""}},computed:L()({},(0,Y.Se)({users:"allUsers"})),mounted(){this.fetch(),j.Z.admins().then((e=>{this.admins=e,this.loading=!1})).catch((e=>{this.loading=!1}))},methods:{fetch(){j.Z.items({page:this.current,limit:this.limit}).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))},onReset(){},remove(e){this.$q.dialog({title:"Confirm",message:"Are you sure to delete this user?",cancel:!0,persistent:!0}).onOk((()=>{userService.destroy(e.id).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))}))},viewUser(e){this.showViewModal=!0,this.viewing=e},showSms(e){this.showSmsModal=!0,this.sending=e,this.mobile=e.parent_mobile},showParentMobile(e){this.showParentMobileModal=!0,this.sending=e,this.mobile=e.parent_mobile},closeSms(){this.showParentMobileModal=!1,this.showSmsModal=!1,this.sending=null,this.mobile=null,this.message=null},sendSms(){G.send({mobile:this.mobile,message:this.message,student_id:this.sending.id}).then((e=>{this.$q.dialog({title:"Success",message:"Your message has been successfully sent!"}),this.closeSms()})).catch((e=>{this.loading=!1,this.$q.dialog({title:"Error",message:"An error has occured!"})}))},saveParentMobile(){G.update({mobile:this.mobile,student_id:this.sending.id}).then((e=>{this.sending.parent_mobile=this.mobile,T["default"].dispatch("updateUser",this.sending),this.closeSms()})).catch((e=>{this.loading=!1}))}},watch:{current(e){this.fetch()}}});var X=t(7011),ee=t(3414),le=t(2035),te=t(2350),ae=t(2165),ie=t(8870),ne=t(7300),se=t(6778),de=t(151),oe=t(5589),ue=t(5869),me=t(9367),re=t(5269),we=t(4842),ce=t(6489),he=t(677),pe=t(7518),_e=t.n(pe);J.render=I;const fe=J;_e()(J,"components",{QList:X.Z,QItem:ee.Z,QItemSection:le.Z,QItemLabel:te.Z,QBtn:ae.Z,QTooltip:ie.Z,QPagination:ne.Z,QDialog:se.Z,QCard:de.Z,QCardSection:oe.Z,QSeparator:ue.Z,QCardActions:me.Z,QForm:re.Z,QInput:we.Z}),_e()(J,"directives",{Ripple:ce.Z,ClosePopup:he.Z})}}]);