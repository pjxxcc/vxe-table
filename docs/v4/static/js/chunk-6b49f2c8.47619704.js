(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b49f2c8"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function a(e,t,n,a,o,r,c){try{var d=e[r](c),s=d.value}catch(l){return void n(l)}d.done?t(s):Promise.resolve(s).then(a,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function d(e){a(c,o,r,d,s,"next",e)}function s(e){a(c,o,r,d,s,"throw",e)}d(void 0)}))}}},a5242:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),o={class:"tip"},r=Object(a["createTextVNode"])(" 设置 "),c=Object(a["createTextVNode"])(" 开启保持原始值状态和 "),d=Object(a["createTextVNode"])("={showStatus, showUpdateStatus, showInsertStatus} 开启编辑状态显示功能，还可以通过 icon 自定义编辑状态的图标，例如第三方图标库：font-awesome、inconfont"),s=Object(a["createElementVNode"])("br",null,null,-1),l=Object(a["createTextVNode"])(" 对于某些需要局部保存的场景，可以在数据保存完成后调用 "),i=Object(a["createTextVNode"])(" 方法加载行数据并恢复到初始状态"),u=Object(a["createElementVNode"])("br",null,null,-1),m={class:"red"},b=Object(a["createTextVNode"])("（注：开启 showStatus 后如果使用自定义渲染需要配合 "),p=Object(a["createTextVNode"])(" 方法使用，在对应单元格的值发生改变时调用更新状态）"),x=Object(a["createTextVNode"])("新增"),v=Object(a["createTextVNode"])("删除选中"),f=Object(a["createTextVNode"])("获取新增"),g=Object(a["createTextVNode"])("获取删除"),T=Object(a["createTextVNode"])("获取修改"),j=Object(a["createTextVNode"])("保存"),O=["onUpdate:modelValue","onInput"],w=["onUpdate:modelValue","onInput"],h=["onUpdate:modelValue","onInput"],V=["onUpdate:modelValue","onInput"],k=Object(a["createTextVNode"])("局部保存"),N={class:"demo-code"},C=Object(a["createTextVNode"])("      "),E=Object(a["createTextVNode"])("\r\n      "),y=Object(a["createTextVNode"])("\r\n    ");function D(e,t,n,D,S,R){var $=Object(a["resolveComponent"])("table-api-link"),U=Object(a["resolveComponent"])("vxe-button"),I=Object(a["resolveComponent"])("vxe-toolbar"),_=Object(a["resolveComponent"])("vxe-column"),z=Object(a["resolveComponent"])("vxe-table"),B=Object(a["resolveComponent"])("pre-code");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("p",o,[r,Object(a["createVNode"])($,{prop:"keep-source"}),c,Object(a["createVNode"])($,{prop:"edit-config"}),d,s,l,Object(a["createVNode"])($,{prop:"reloadRow"}),i,u,Object(a["createElementVNode"])("span",m,[b,Object(a["createVNode"])($,{prop:"updateStatus"}),p])]),Object(a["createVNode"])(I,null,{buttons:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(U,{icon:"fa fa-plus",onClick:e.insertEvent},{default:Object(a["withCtx"])((function(){return[x]})),_:1},8,["onClick"]),Object(a["createVNode"])(U,{onClick:t[0]||(t[0]=function(t){return e.$refs.xTable.removeCheckboxRow()})},{default:Object(a["withCtx"])((function(){return[v]})),_:1}),Object(a["createVNode"])(U,{onClick:e.getInsertEvent},{default:Object(a["withCtx"])((function(){return[f]})),_:1},8,["onClick"]),Object(a["createVNode"])(U,{onClick:e.getRemoveEvent},{default:Object(a["withCtx"])((function(){return[g]})),_:1},8,["onClick"]),Object(a["createVNode"])(U,{onClick:e.getUpdateEvent},{default:Object(a["withCtx"])((function(){return[T]})),_:1},8,["onClick"]),Object(a["createVNode"])(U,{onClick:e.saveEvent},{default:Object(a["withCtx"])((function(){return[j]})),_:1},8,["onClick"])]})),_:1}),Object(a["createVNode"])(z,{border:"","show-overflow":"","keep-source":"",ref:"xTable",loading:e.loading,data:e.tableData,"edit-config":{trigger:"click",mode:"cell",showStatus:!0,icon:"fa fa-pencil-square-o"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(_,{type:"checkbox",width:"60"}),Object(a["createVNode"])(_,{type:"seq",width:"60"}),Object(a["createVNode"])(_,{field:"name",title:"Name","edit-render":{autofocus:".myinput"}},{edit:Object(a["withCtx"])((function(t){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"myinput","onUpdate:modelValue":function(e){return t.row.name=e},onInput:function(n){return e.$refs.xTable.updateStatus(t)}},null,40,O),[[a["vModelText"],t.row.name]])]})),_:1},8,["edit-render"]),Object(a["createVNode"])(_,{field:"sex",title:"Sex","edit-render":{autofocus:".myinput"}},{edit:Object(a["withCtx"])((function(t){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"myinput","onUpdate:modelValue":function(e){return t.row.sex=e},onInput:function(n){return e.$refs.xTable.updateStatus(t)}},null,40,w),[[a["vModelText"],t.row.sex]])]})),_:1},8,["edit-render"]),Object(a["createVNode"])(_,{field:"address",title:"Address","edit-render":{}},{edit:Object(a["withCtx"])((function(t){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text","onUpdate:modelValue":function(e){return t.row.address=e},onInput:function(n){return e.$refs.xTable.updateStatus(t)}},null,40,h),[[a["vModelText"],t.row.address]])]})),_:1}),Object(a["createVNode"])(_,{field:"date12",title:"Date",formatter:e.formatDate,"edit-render":{}},{edit:Object(a["withCtx"])((function(t){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"date","onUpdate:modelValue":function(e){return t.row.date12=e},onInput:function(n){return e.$refs.xTable.updateStatus(t)}},null,40,V),[[a["vModelText"],t.row.date12]])]})),_:1},8,["formatter"]),Object(a["createVNode"])(_,{title:"操作",width:"200"},{default:Object(a["withCtx"])((function(t){var n=t.row;return[e.$refs.xTable.isUpdateByRow(n)?(Object(a["openBlock"])(),Object(a["createBlock"])(U,{key:0,onClick:function(t){return e.saveUpdateEvent(n)},loading:n.loading},{default:Object(a["withCtx"])((function(){return[k]})),_:2},1032,["onClick","loading"])):Object(a["createCommentVNode"])("",!0)]})),_:1})]})),_:1},8,["loading","data"]),Object(a["createElementVNode"])("p",N,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[C,Object(a["createVNode"])(B,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),E,Object(a["createVNode"])(B,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),y])])}var S=n("1da1"),R=(n("96cf"),n("55db")),$=n("c695"),U=n.n($),I=Object(a["defineComponent"])({setup:function(){var e=Object(a["ref"])(!1),t=Object(a["ref"])([{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}]),n=Object(a["ref"])({}),o=function(e){var t=e.cellValue;return U.a.toDateString(t,"yyyy-MM-dd HH:mm:ss")},r=function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.value,a={},e.next=4,t.insert(a);case 4:return o=e.sent,r=o.row,e.next=8,t.setActiveCell(r,"name");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){var t=n.value;t.isUpdateByRow(e)?(e.loading=!0,setTimeout((function(){e.loading=!1,t.reloadRow(e,{}),R["a"].modal.message({content:"保存成功！",status:"success"})}),300)):R["a"].modal.message({content:"数据未改动！",status:"info"})},d=function(){e.value=!0,setTimeout((function(){e.value=!1,t.value=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}]}),300)},s=function(){var e=n.value,t=e.getInsertRecords();R["a"].modal.alert("新增：".concat(t.length))},l=function(){var e=n.value,t=e.getRemoveRecords();R["a"].modal.alert("删除：".concat(t.length))},i=function(){var e=n.value,t=e.getUpdateRecords();R["a"].modal.alert("更新：".concat(t.length))};return{xTable:n,tableData:t,loading:e,formatDate:o,insertEvent:r,saveEvent:d,saveUpdateEvent:c,getInsertEvent:s,getRemoveEvent:l,getUpdateEvent:i,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button icon="fa fa-plus" @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n            <vxe-button @click="saveEvent">保存</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          keep-source\n          ref="xTable"\n          :loading="loading"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', showStatus: true, icon: \'fa fa-pencil-square-o\'}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="scope">\n              <input type="text" class="myinput" v-model="scope.row.name" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{autofocus: \'.myinput\'}">\n            <template #edit="scope">\n              <input type="text" class="myinput" v-model="scope.row.sex" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="address" title="Address" :edit-render="{}">\n            <template #edit="scope">\n              <input type="text" v-model="scope.row.address" @input="$refs.xTable.updateStatus(scope)"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="date12" title="Date" :formatter="formatDate" :edit-render="{}">\n            <template #edit="scope">\n              <input type="date" v-model="scope.row.date12" @input="$refs.xTable.updateStatus(scope)">\n            </template>\n          </vxe-column>\n          <vxe-column title="操作" width="200">\n            <template #default="{ row }">\n              <template v-if="$refs.xTable.isUpdateByRow(row)">\n                <vxe-button @click="saveUpdateEvent(row)" :loading="row.loading">局部保存</vxe-button>\n              </template>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n        import { VXETable, VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'\n        import XEUtils from 'xe-utils'\n\n        export default defineComponent({\n          setup () {\n            const loading = ref(false)\n            const tableData = ref([\n              { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n              { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n              { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n              { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }\n            ])\n\n            const xTable = ref({} as VxeTableInstance)\n\n            const formatDate: VxeColumnPropTypes.Formatter = ({ cellValue }) => {\n              return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')\n            }\n\n            const insertEvent = async () => {\n              const $table = xTable.value\n              const record = {}\n              const { row: newRow } = await $table.insert(record)\n              await $table.setActiveCell(newRow, 'name')\n            }\n\n            const saveUpdateEvent = (row: any) => {\n              const $table = xTable.value\n              if ($table.isUpdateByRow(row)) {\n                row.loading = true\n                // 模拟异步\n                setTimeout(() => {\n                  row.loading = false\n                  // 保存完成后将行恢复到初始状态\n                  $table.reloadRow(row, {})\n                  VXETable.modal.message({ content: '保存成功！', status: 'success' })\n                }, 300)\n              } else {\n                VXETable.modal.message({ content: '数据未改动！', status: 'info' })\n              }\n            }\n\n            const saveEvent = () => {\n              loading.value = true\n              // 默认异步\n              setTimeout(() => {\n                loading.value = false\n                // 保存完成后重新刷新数据\n                tableData.value = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }\n                ]\n              }, 300)\n            }\n\n            const getInsertEvent = () => {\n              const $table = xTable.value\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(`新增：${insertRecords.length}`)\n            }\n\n            const getRemoveEvent = () => {\n              const $table = xTable.value\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(`删除：${removeRecords.length}`)\n            }\n\n            const getUpdateEvent = () => {\n              const $table = xTable.value\n              const updateRecords = $table.getUpdateRecords()\n              VXETable.modal.alert(`更新：${updateRecords.length}`)\n            }\n\n            return {\n              xTable,\n              tableData,\n              loading,\n              formatDate,\n              insertEvent,\n              saveEvent,\n              saveUpdateEvent,\n              getInsertEvent,\n              getRemoveEvent,\n              getUpdateEvent\n            }\n          }\n        })\n        "]}}}),_=n("6b0d"),z=n.n(_);const B=z()(I,[["render",D]]);t["default"]=B}}]);