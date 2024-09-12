import{r as m,C as me,J as fe,d as r,G as H,o as s,c as B,H as d,I as Q,h as a,e as l,f as t,K as j,L as J,l as f,k as _e,D as U,p as y,m as C,z as x,n as P,B as ve,v as ge}from"./index-CHQH9-TC.js";import{l as we,t as ye,d as he}from"./leave-Cz5vLoQ-.js";import be from"./dialog-QYspN5k1.js";import{j as ke}from"./definition-CAAY_8pD.js";import"./user-Bu1ajp0e.js";const Ce={class:"app-container"},Se=["src"],Ve=ve({name:"Leave"}),Ue=Object.assign(Ve,{setup(Te){const{proxy:c}=ge(),{flow_status:L,leave_type:z}=c.useDict("flow_status","leave_type"),I=m([]),h=m(!0),S=m(!0),V=m([]),T=m(!1),R=m(""),O=m(!0),q=m(!0),D=m(0),v=m([]),M=me({queryParams:{pageNum:1,pageSize:10,type:null,day:null,flowStatus:null,createBy:null,createTime:null}}),{queryParams:i}=fe(M);function g(){h.value=!0,i.value.paramsStr="",v!=null&&v!=""&&(i.value.paramsStr=JSON.stringify({beginCreateTime:v.value[0],endCreateTime:v.value[1]})),we(i.value).then(o=>{I.value=o.rows,D.value=o.total,h.value=!1})}function N(){i.value.pageNum=1,g()}function G(){v.value=[],c.resetForm("queryRef"),N()}function W(o){V.value=o.map(n=>n.id),O.value=o.length!=1,q.value=!o.length}function X(){c.$refs.dialog.show()}function Z(o){c.$refs.dialog.show(o.id,!0)}function A(o){const n=o.id||V.value;c.$refs.dialog.show(n)}function ee(o){ye(o).then(()=>{c.$modal.msgSuccess("终止成功"),g()})}function le(o){const n=o.id||V.value;c.$refs.dialog.show(n,!0,"OA请假申请审批")}function te(o){ke(o).then(n=>{T.value=!0,R.value="data:image/gif;base64,"+n.data})}function E(o){const n=o.id||V.value;c.$modal.confirm('是否确认删除OA 请假申请编号为"'+n+'"的数据项？').then(function(){return h.value=!0,he(n)}).then(()=>{g(),c.$modal.msgSuccess("删除成功")}).catch(()=>{h.value=!1})}function ae(){c.download("test/leave/export",{...i.value},`OA 请假申请_${new Date().getTime()}.xlsx`)}return g(),(o,n)=>{const F=r("el-option"),K=r("el-select"),b=r("el-form-item"),ne=r("el-input"),oe=r("el-date-picker"),u=r("el-button"),ie=r("el-form"),$=r("el-col"),re=r("right-toolbar"),se=r("el-row"),p=r("el-table-column"),Y=r("dict-tag"),w=r("el-tooltip"),ue=r("el-table"),de=r("pagination"),pe=r("el-dialog"),_=H("hasPermi"),ce=H("loading");return s(),B("div",Ce,[d(l(ie,{model:a(i),ref:"queryRef",inline:!0,"label-width":"100px"},{default:t(()=>[l(b,{label:"请假类型",prop:"type"},{default:t(()=>[l(K,{modelValue:a(i).type,"onUpdate:modelValue":n[0]||(n[0]=e=>a(i).type=e),filterable:"",placeholder:"请选择请假类型",clearable:""},{default:t(()=>[(s(!0),B(j,null,J(a(z),e=>(s(),f(F,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(b,{label:"流程状态",prop:"flowStatus"},{default:t(()=>[l(K,{modelValue:a(i).flowStatus,"onUpdate:modelValue":n[1]||(n[1]=e=>a(i).flowStatus=e),placeholder:"请选择流程状态",clearable:""},{default:t(()=>[(s(!0),B(j,null,J(a(L),e=>(s(),f(F,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(b,{label:"创建者",prop:"createBy"},{default:t(()=>[l(ne,{modelValue:a(i).createBy,"onUpdate:modelValue":n[2]||(n[2]=e=>a(i).createBy=e),placeholder:"请输入创建者",clearable:"",onKeyup:_e(N,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(b,{label:"创建时间",style:{width:"308px"}},{default:t(()=>[l(oe,{modelValue:a(v),"onUpdate:modelValue":n[3]||(n[3]=e=>U(v)?v.value=e:null),size:"small","value-format":"YYYY-MM-DD HH:mm:ss",type:"datetimerange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),_:1}),l(b,null,{default:t(()=>[l(u,{type:"primary",icon:"Search",onClick:N},{default:t(()=>[y("搜索")]),_:1}),l(u,{icon:"Refresh",onClick:G},{default:t(()=>[y("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[Q,a(S)]]),l(se,{gutter:10,class:"mb8"},{default:t(()=>[l($,{span:1.5},{default:t(()=>[d((s(),f(u,{type:"primary",plain:"",icon:"Plus",onClick:X},{default:t(()=>[y("新增")]),_:1})),[[_,["system:leave:add"]]])]),_:1}),l($,{span:1.5},{default:t(()=>[d((s(),f(u,{type:"success",plain:"",icon:"Edit",disabled:a(O),onClick:A},{default:t(()=>[y("修改")]),_:1},8,["disabled"])),[[_,["system:leave:edit"]]])]),_:1}),l($,{span:1.5},{default:t(()=>[d((s(),f(u,{type:"danger",plain:"",icon:"Delete",disabled:a(q),onClick:E},{default:t(()=>[y("删除")]),_:1},8,["disabled"])),[[_,["system:leave:remove"]]])]),_:1}),l($,{span:1.5},{default:t(()=>[d((s(),f(u,{type:"warning",plain:"",icon:"Download",onClick:ae},{default:t(()=>[y("导出")]),_:1})),[[_,["system:leave:export"]]])]),_:1}),l(re,{showSearch:a(S),"onUpdate:showSearch":n[4]||(n[4]=e=>U(S)?S.value=e:null),onQueryTable:g},null,8,["showSearch"])]),_:1}),d((s(),f(ue,{data:a(I),onSelectionChange:W},{default:t(()=>[l(p,{type:"selection",width:"55",align:"center"}),l(p,{label:"序号",type:"index",width:"50",align:"center"},{default:t(e=>[C("span",null,x((a(i).pageNum-1)*a(i).pageSize+e.$index+1),1)]),_:1}),l(p,{label:"请假类型",align:"center",prop:"type","show-overflow-tooltip":!0},{default:t(e=>[l(Y,{options:a(z),value:e.row.type},null,8,["options","value"])]),_:1}),l(p,{label:"开始时间",align:"center",prop:"startTime",width:"180"},{default:t(e=>[C("span",null,x(o.parseTime(e.row.startTime)),1)]),_:1}),l(p,{label:"结束时间",align:"center",prop:"endTime",width:"180"},{default:t(e=>[C("span",null,x(o.parseTime(e.row.endTime)),1)]),_:1}),l(p,{label:"请假天数",align:"center",prop:"day","show-overflow-tooltip":!0}),l(p,{label:"流程节点名称",align:"center",prop:"nodeName","show-overflow-tooltip":!0}),l(p,{label:"流程状态",align:"center",prop:"flowStatus","show-overflow-tooltip":!0},{default:t(e=>[l(Y,{options:a(L),value:e.row.flowStatus},null,8,["options","value"])]),_:1}),l(p,{label:"创建者",align:"center",prop:"createBy","show-overflow-tooltip":!0}),l(p,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:t(e=>[C("span",null,x(o.parseTime(e.row.createTime)),1)]),_:1}),l(p,{label:"操作",align:"center",width:"200","class-name":"small-padding fixed-width",fixed:"right"},{default:t(e=>[l(w,{content:"详情",placement:"top"},{default:t(()=>[d(l(u,{link:"",type:"primary",icon:"View",onClick:k=>Z(e.row)},null,8,["onClick"]),[[_,["system:leave:detail"]]])]),_:2},1024),l(w,{content:"编辑",placement:"top"},{default:t(()=>[d(l(u,{link:"",type:"primary",icon:"Edit",onClick:k=>A(e.row)},null,8,["onClick"]),[[_,["system:leave:edit"]]])]),_:2},1024),l(w,{content:"提交审批",placement:"top"},{default:t(()=>[e.row.nodeCode==="2"?d((s(),f(u,{key:0,link:"",type:"primary",icon:"Position",onClick:k=>le(e.row)},null,8,["onClick"])),[[_,["system:leave:submit"]]]):P("",!0)]),_:2},1024),l(w,{content:"终止",placement:"top"},{default:t(()=>[e.row.nodeType!==2?d((s(),f(u,{key:0,link:"",type:"primary",icon:"Scissor",onClick:k=>ee(e.row.instanceId)},null,8,["onClick"])),[[_,["system:leave:submit"]]]):P("",!0)]),_:2},1024),l(w,{content:"流程图",placement:"top"},{default:t(()=>[l(u,{link:"",type:"primary",icon:"Picture",onClick:k=>te(e.row.instanceId)},null,8,["onClick"])]),_:2},1024),l(w,{content:"删除",placement:"top"},{default:t(()=>[e.row.nodeCode==="2"?d((s(),f(u,{key:0,link:"",type:"primary",icon:"Delete",onClick:k=>E(e.row)},null,8,["onClick"])),[[_,["system:leave:remove"]]]):P("",!0)]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[ce,a(h)]]),d(l(de,{total:a(D),page:a(i).pageNum,"onUpdate:page":n[5]||(n[5]=e=>a(i).pageNum=e),limit:a(i).pageSize,"onUpdate:limit":n[6]||(n[6]=e=>a(i).pageSize=e),onPagination:g},null,8,["total","page","limit"]),[[Q,a(D)>0]]),l(a(be),{ref:"dialog",onRefresh:g},null,512),l(pe,{title:"流程图",modelValue:a(T),"onUpdate:modelValue":n[7]||(n[7]=e=>U(T)?T.value=e:null),width:"1100"},{default:t(()=>[C("img",{src:a(R),width:"1000",height:"500",style:{margin:"0 auto"}},null,8,Se)]),_:1},8,["modelValue"])])}}});export{Ue as default};