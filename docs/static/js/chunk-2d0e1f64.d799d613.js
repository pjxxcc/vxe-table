(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1f64"],{"7d56":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),d={class:"tip"},i=Object(a["createTextVNode"])(" 使用 "),s=Object(a["createTextVNode"])(" 方式 "),r={class:"demo-code"},p=Object(a["createTextVNode"])("      "),l=Object(a["createTextVNode"])("\r\n      "),c=Object(a["createTextVNode"])("\r\n    "),o=Object(a["createElementVNode"])("p",{class:"tip"},"使用 radio 方式",-1),m={class:"demo-code"},b=Object(a["createTextVNode"])("      "),u=Object(a["createTextVNode"])("\r\n      "),y=Object(a["createTextVNode"])("\r\n    "),j=Object(a["createElementVNode"])("p",{class:"tip"},"当然也可以两种方式同时使用",-1),z=Object(a["createTextVNode"])("取消"),I={class:"demo-code"},T=Object(a["createTextVNode"])("      "),x=Object(a["createTextVNode"])("\r\n      "),v=Object(a["createTextVNode"])("\r\n    ");function f(e,t,n,f,O,h){var N=Object(a["resolveComponent"])("table-api-link"),V=Object(a["resolveComponent"])("vxe-column"),w=Object(a["resolveComponent"])("vxe-table"),C=Object(a["resolveComponent"])("pre-code"),g=Object(a["resolveComponent"])("vxe-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("p",d,[i,Object(a["createVNode"])(N,{prop:"highlight-current-row"}),s]),Object(a["createVNode"])(w,{"highlight-current-row":"","tree-config":{transform:!0,rowField:"id",parentField:"parentId"},data:e.demo1.tableData},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{field:"name",title:"Name","tree-node":""}),Object(a["createVNode"])(V,{field:"size",title:"Size"}),Object(a["createVNode"])(V,{field:"type",title:"Type"}),Object(a["createVNode"])(V,{field:"date",title:"Date"})]})),_:1},8,["data"]),Object(a["createElementVNode"])("p",r,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[p,Object(a["createVNode"])(C,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),l,Object(a["createVNode"])(C,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),c]),o,Object(a["createVNode"])(w,{"tree-config":{transform:!0},"radio-config":{labelField:"name",highlight:!0},data:e.demo2.tableData},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{type:"radio",title:"Name",width:"400","tree-node":""}),Object(a["createVNode"])(V,{field:"size",title:"Size"}),Object(a["createVNode"])(V,{field:"type",title:"Type"}),Object(a["createVNode"])(V,{field:"date",title:"Date"})]})),_:1},8,["data"]),Object(a["createElementVNode"])("p",m,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[b,Object(a["createVNode"])(C,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),u,Object(a["createVNode"])(C,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[3]),1)]})),_:1}),y]),j,Object(a["createVNode"])(w,{resizable:"","highlight-current-row":"",ref:"xTree3","tree-config":{transform:!0},"radio-config":{labelField:"name",trigger:"row"},data:e.demo3.tableData,onCurrentChange:e.currentChangeEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{type:"radio",width:"400","tree-node":""},{header:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{type:"text",onClick:e.clearCurrentRowEvent,disabled:!e.demo3.selectRow},{default:Object(a["withCtx"])((function(){return[z]})),_:1},8,["onClick","disabled"])]})),_:1}),Object(a["createVNode"])(V,{field:"size",title:"Size"}),Object(a["createVNode"])(V,{field:"type",title:"Type"}),Object(a["createVNode"])(V,{field:"date",title:"Date"})]})),_:1},8,["data","onCurrentChange"]),Object(a["createElementVNode"])("p",I,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[T,Object(a["createVNode"])(C,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[4]),1)]})),_:1}),x,Object(a["createVNode"])(C,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[5]),1)]})),_:1}),v])])}var O=Object(a["defineComponent"])({setup:function(){var e=Object(a["reactive"])({tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]}),t=Object(a["reactive"])({tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]}),n=Object(a["reactive"])({selectRow:null,tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]}),d=Object(a["ref"])({}),i=function(e){var t=e.row;n.selectRow=t},s=function(){var e=d.value;n.selectRow=null,e.clearRadioRow(),e.clearCurrentRow()};return{demo1:e,demo2:t,demo3:n,xTree3:d,currentChangeEvent:i,clearCurrentRowEvent:s,demoCodes:['\n        <vxe-table\n          highlight-current-row\n          :tree-config="{transform: true, rowField: \'id\', parentField: \'parentId\'}"\n          :data="demo1.tableData">\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            })\n            return {\n              demo1\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          :tree-config="{transform: true}"\n          :radio-config="{labelField: \'name\', highlight: true}"\n          :data="demo2.tableData">\n          <vxe-column type="radio" title="Name" width="400" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo2 = reactive({\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            })\n            return {\n              demo2\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          resizable\n          highlight-current-row\n          ref="xTree3"\n          :tree-config="{transform: true}"\n          :radio-config="{labelField: \'name\', trigger: \'row\'}"\n          :data="demo3.tableData"\n          @current-change="currentChangeEvent">\n          <vxe-column type="radio" width="400" tree-node>\n            <template #header>\n              <vxe-button type="text" @click="clearCurrentRowEvent" :disabled="!demo3.selectRow">取消</vxe-button>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeTableInstance, VxeTableEvents } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo3 = reactive({\n              selectRow: null as any,\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            })\n\n            const xTree3 = ref({} as VxeTableInstance)\n\n            const currentChangeEvent: VxeTableEvents.CurrentChange = ({ row }) => {\n              demo3.selectRow = row\n            }\n\n            const clearCurrentRowEvent = () => {\n              const $table = xTree3.value\n              demo3.selectRow = null\n              $table.clearRadioRow()\n              $table.clearCurrentRow()\n            }\n\n            return {\n              demo3,\n              xTree3,\n              currentChangeEvent,\n              clearCurrentRowEvent\n            }\n          }\n        })\n        "]}}}),h=n("6b0d"),N=n.n(h);const V=N()(O,[["render",f]]);t["default"]=V}}]);