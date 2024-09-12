import{r as w,C as K,J as ve,bT as be,d,G as R,o as p,c as ye,H as m,I as q,h as n,e as l,f as o,k as V,p as s,l as h,D as B,m as b,z as D,n as C,B as Ce,v as ke,bU as xe}from"./index-CHQH9-TC.js";import{l as $e,p as Se,u as Pe,d as Ue,c as Ve,f as De,a as Ne,b as ze}from"./definition-CAAY_8pD.js";import Fe from"./dialog-efWQWxGy.js";const Te={class:"app-container"},Ke=b("div",{class:"el-upload__text"},[s("将文件拖到此处，或"),b("em",null,"点击上传")],-1),Re=b("div",{class:"el-upload__tip text-center"},[b("span",null,"仅允许导入xml格式文件。")],-1),qe={slot:"footer",class:"dialog-footer"},Be=["src"],Ae=Ce({name:"Definition"}),He=Object.assign(Ae,{setup(Le){const{proxy:a}=ke(),{is_publish:A,activity_status:L}=a.useDict("is_publish","activity_status"),N=w([]);w(!1);const P=w(!0),z=w(""),x=w(!1),$=w(!0),I=w([]),Q=w(!0),E=w(!0),U=w(0),H=K({queryParams:{pageNum:1,pageSize:10,flowCode:null,flowName:null,version:null}}),{queryParams:u}=ve(H),c=K({open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+be()},url:"/prod-api/flow/definition/importDefinition"});function f(){P.value=!0,$e(u.value).then(t=>{N.value=t.rows,U.value=t.total,P.value=!1})}function k(){u.value.pageNum=1,f()}function j(){a.resetForm("queryForm"),k()}function G(t){I.value=t.map(i=>i.id),Q.value=t.length!==1,E.value=!t.length}function J(){a.$refs.dialog.show()}function M(t,i){const y={disabled:i===1,pageNum:u.value.pageNum};xe.push({path:"/flow/flow-design/index/"+t,query:y})}function O(t){a.$modal.confirm('是否确认发布流程定义编号为"'+t+'"的数据项？').then(function(){return Se(t)}).then(()=>{f(),a.$modal.msgSuccess("发布成功")}).catch(()=>{})}function W(t){a.$modal.confirm('是否确认取消发布流程定义编号为"'+t+'"的数据项？').then(function(){return Pe(t)}).then(()=>{f(),a.$modal.msgSuccess("取消成功")}).catch(()=>{})}function X(t){a.$refs.dialog.show(t)}function Y(t){const i=t.id||i.value;a.$modal.confirm('是否确认删除流程定义编号为"'+i+'"的数据项？').then(function(){return Ue(i)}).then(()=>{f(),a.$modal.msgSuccess("删除成功")}).catch(()=>{})}function Z(t){a.$modal.confirm('是否确认复制流程定义编号为"'+t+'"的数据项？').then(function(){return Ve(t)}).then(()=>{f(),a.$modal.msgSuccess("复制成功")}).catch(()=>{})}function ee(){c.title="用户导入",c.open=!0}function te(t){a.download("/flow/definition/exportDefinition/"+t.id,{...u.value},t.flowCode+"_"+t.version+".xml")}function le(t,i,y){c.isUploading=!0}function oe(t,i,y){c.open=!1,c.isUploading=!1,a.$refs.uploadRef.clearFiles(),a.$alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+t.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),f()}function ne(){a.$refs.uploadRef.submit()}function ie(t){De(t).then(i=>{x.value=!0,z.value="data:image/gif;base64,"+i.data})}function ae(t){a.$modal.confirm('是否确认激活流程定义编号为"'+t+'"的数据项？').then(function(){return Ne(t)}).then(()=>{f(),a.$modal.msgSuccess("激活成功")}).catch(()=>{})}function se(t){a.$modal.confirm('是否确认挂起流程定义编号为"'+t+'"的数据项？').then(function(){return ze(t)}).then(()=>{f(),a.$modal.msgSuccess("挂起成功")}).catch(()=>{})}return f(),(t,i)=>{const y=d("el-input"),S=d("el-form-item"),r=d("el-button"),ue=d("el-form"),re=d("el-col"),de=d("right-toolbar"),ce=d("el-row"),_=d("el-table-column"),pe=d("el-tag"),F=d("dict-tag"),fe=d("el-table"),me=d("pagination"),he=d("upload-filled"),_e=d("el-icon"),we=d("el-upload"),T=d("el-dialog"),g=R("hasPermi"),ge=R("loading");return p(),ye("div",Te,[m(l(ue,{model:n(u),ref:"queryForm",inline:!0,"label-width":"100px"},{default:o(()=>[l(S,{label:"流程编码",prop:"flowCode"},{default:o(()=>[l(y,{modelValue:n(u).flowCode,"onUpdate:modelValue":i[0]||(i[0]=e=>n(u).flowCode=e),placeholder:"请输入流程编码",clearable:"",onKeyup:V(k,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(S,{label:"流程名称",prop:"flowName"},{default:o(()=>[l(y,{modelValue:n(u).flowName,"onUpdate:modelValue":i[1]||(i[1]=e=>n(u).flowName=e),placeholder:"请输入流程名称",clearable:"",onKeyup:V(k,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(S,{label:"流程版本",prop:"version"},{default:o(()=>[l(y,{modelValue:n(u).version,"onUpdate:modelValue":i[2]||(i[2]=e=>n(u).version=e),placeholder:"请输入流程版本",clearable:"",onKeyup:V(k,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(S,null,{default:o(()=>[l(r,{type:"primary",icon:"Search",onClick:k},{default:o(()=>[s("搜索")]),_:1}),l(r,{icon:"Refresh",onClick:j},{default:o(()=>[s("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[q,n($)]]),l(ce,{gutter:10,class:"mb8"},{default:o(()=>[l(re,{span:1.5},{default:o(()=>[m((p(),h(r,{type:"primary",plain:"",icon:"Plus",onClick:J},{default:o(()=>[s("新增")]),_:1})),[[g,["flow:definition:add"]]]),m((p(),h(r,{type:"primary",plain:"",icon:"Plus",onClick:ee},{default:o(()=>[s("导入流程定义")]),_:1})),[[g,["flow:definition:importDefinition"]]])]),_:1}),l(de,{showSearch:n($),"onUpdate:showSearch":i[3]||(i[3]=e=>B($)?$.value=e:null),onQueryTable:f},null,8,["showSearch"])]),_:1}),m((p(),h(fe,{data:n(N),onSelectionChange:G},{default:o(()=>[l(_,{type:"selection",width:"55",align:"center",fixed:""}),l(_,{label:"序号",width:"50",align:"center"},{default:o(e=>[b("span",null,D((n(u).pageNum-1)*n(u).pageSize+e.$index+1),1)]),_:1}),l(_,{label:"流程编码",align:"center",prop:"flowCode",width:"150","show-overflow-tooltip":!0}),l(_,{label:"流程名称",align:"center",prop:"flowName","show-overflow-tooltip":!0}),l(_,{label:"流程版本",align:"center",prop:"version",width:"100","show-overflow-tooltip":!0},{default:o(e=>[l(pe,null,{default:o(()=>[s(D(e.row.version),1)]),_:2},1024)]),_:1}),l(_,{label:"扩展字段",align:"center",prop:"ext",sortable:"custom","show-overflow-tooltip":!0}),l(_,{label:"是否发布",align:"center",prop:"isPublish",width:"140","show-overflow-tooltip":!0},{default:o(e=>[l(F,{options:n(A),value:e.row.isPublish},null,8,["options","value"])]),_:1}),l(_,{label:"激活状态",align:"center",prop:"activityStatus",width:"140",sortable:"custom","show-overflow-tooltip":!0},{default:o(e=>[l(F,{options:n(L),value:e.row.activityStatus},null,8,["options","value"])]),_:1}),l(_,{label:"创建时间",align:"center",prop:"createTime",width:"160","show-overflow-tooltip":!0},{default:o(e=>[b("span",null,D(t.parseTime(e.row.createTime)),1)]),_:1}),l(_,{label:"操作",align:"center",width:"200",fixed:"right","class-name":"small-padding fixed-width"},{default:o(e=>[m((p(),h(r,{type:"text",size:"small",onClick:v=>M(e.row.id,e.row.isPublish)},{default:o(()=>[s("流程设计")]),_:2},1032,["onClick"])),[[g,["flow:definition:queryDesign"]]]),l(r,{size:"small",type:"text",onClick:v=>ie(e.row.id)},{default:o(()=>[s("流程图")]),_:2},1032,["onClick"]),e.row.isPublish===0?m((p(),h(r,{key:0,type:"text",size:"small",onClick:v=>O(e.row.id)},{default:o(()=>[s("发布")]),_:2},1032,["onClick"])),[[g,["flow:definition:publish"]]]):C("",!0),e.row.isPublish===1?m((p(),h(r,{key:1,type:"text",size:"small",onClick:v=>W(e.row.id)},{default:o(()=>[s("取消发布")]),_:2},1032,["onClick"])),[[g,["flow:definition:upPublish"]]]):C("",!0),e.row.activityStatus===0?(p(),h(r,{key:2,size:"small",type:"text",onClick:v=>ae(e.row.id)},{default:o(()=>[s("激活")]),_:2},1032,["onClick"])):C("",!0),e.row.activityStatus===1?(p(),h(r,{key:3,size:"small",type:"text",onClick:v=>se(e.row.id)},{default:o(()=>[s("挂起")]),_:2},1032,["onClick"])):C("",!0),m((p(),h(r,{type:"text",size:"small",onClick:v=>Z(e.row.id)},{default:o(()=>[s("复制流程")]),_:2},1032,["onClick"])),[[g,["flow:definition:upPublish"]]]),e.row.isPublish===0?m((p(),h(r,{key:4,type:"text",size:"small",onClick:v=>X(e.row.id)},{default:o(()=>[s("修改")]),_:2},1032,["onClick"])),[[g,["flow:definition:edit"]]]):C("",!0),m((p(),h(r,{type:"text",size:"small",onClick:v=>te(e.row)},{default:o(()=>[s("导出流程")]),_:2},1032,["onClick"])),[[g,["flow:definition:exportDefinition"]]]),e.row.isPublish===0?m((p(),h(r,{key:5,type:"text",size:"small",onClick:v=>Y(e.row)},{default:o(()=>[s("删除")]),_:2},1032,["onClick"])),[[g,["flow:definition:remove"]]]):C("",!0)]),_:1})]),_:1},8,["data"])),[[ge,n(P)]]),m(l(me,{total:n(U),page:n(u).pageNum,"onUpdate:page":i[4]||(i[4]=e=>n(u).pageNum=e),limit:n(u).pageSize,"onUpdate:limit":i[5]||(i[5]=e=>n(u).pageSize=e),onPagination:f},null,8,["total","page","limit"]),[[q,n(U)>0]]),l(n(Fe),{ref:"dialog",onRefresh:f},null,512),l(T,{title:n(c).title,modelValue:n(c).open,"onUpdate:modelValue":i[7]||(i[7]=e=>n(c).open=e),width:"400px","append-to-body":""},{default:o(()=>[l(we,{ref:"uploadRef",limit:1,accept:".xml",headers:n(c).headers,action:n(c).url+"?updateSupport="+n(c).updateSupport,disabled:n(c).isUploading,"on-progress":le,"on-success":oe,"auto-upload":!1,drag:""},{tip:o(()=>[Re]),default:o(()=>[l(_e,{class:"el-icon--upload"},{default:o(()=>[l(he)]),_:1}),Ke]),_:1},8,["headers","action","disabled"]),b("div",qe,[l(r,{type:"primary",onClick:ne},{default:o(()=>[s("确 定")]),_:1}),l(r,{onClick:i[6]||(i[6]=e=>n(c).open=!1)},{default:o(()=>[s("取 消")]),_:1})])]),_:1},8,["title","modelValue"]),l(T,{title:"流程图",modelValue:n(x),"onUpdate:modelValue":i[8]||(i[8]=e=>B(x)?x.value=e:null),width:"80%","append-to-body":""},{default:o(()=>[b("img",{src:n(z),width:"100%",style:{margin:"0 auto"}},null,8,Be)]),_:1},8,["modelValue"])])}}});export{He as default};