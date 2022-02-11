(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf103"],{"61b4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("通过监听 "),n("table-api-link",{attrs:{prop:"edit-closed"}}),e._v(" 事件实现编辑完成即时保存功能，再配合 "),n("table-api-link",{attrs:{prop:"reloadRow"}}),e._v(" 局部刷新函数"),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])],1),n("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","keep-source":"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell",showStatus:!0,icon:"fa fa-pencil"}},on:{"edit-closed":e.editClosedEvent}},[n("vxe-table-column",{attrs:{type:"seq",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"role",title:"Role","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"sex",title:"Sex","edit-render":{name:"$select",options:e.sexList}}}),n("vxe-table-column",{attrs:{field:"num6",title:"Number","edit-render":{name:"$input",props:{type:"number"}}}}),n("vxe-table-column",{attrs:{field:"date12",title:"Date","edit-render":{name:"$input",props:{type:"date"}}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("99af"),n("628a")),s=n.n(i),o=n("1487"),d=n.n(o),r={data:function(){return{tableData:[],sexList:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          keep-source\n          show-overflow\n          ref="xTable"\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\', showStatus: true, icon: \'fa fa-pencil\'}"\n          @edit-closed="editClosedEvent">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="role" title="Role" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :edit-render="{name: \'$select\', options: sexList}"></vxe-table-column>\n          <vxe-table-column field="num6" title="Number" :edit-render="{name: \'$input\', props: {type: \'number\'}}"></vxe-table-column>\n          <vxe-table-column field="date12" title="Date" :edit-render="{name: \'$input\', props: {type: \'date\'}}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              sexList: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n            this.findSexList()\n          },\n          methods: {\n            findSexList () {\n              return XEAjax.get('/api/conf/sex/list').then(data => {\n                this.sexList = data\n              })\n            },\n            editClosedEvent ({ row, column }) {\n              let xTable = this.$refs.xTable\n              let field = column.property\n              let cellValue = row[field]\n              // 判断单元格值是否被修改\n              if (xTable.isUpdateByRow(row, field)) {\n                setTimeout(() => {\n                  this.$XModal.message({\n                    message: `局部保存成功！ ${field}=${cellValue}`,\n                    status: 'success'\n                  })\n                  // 局部更新单元格为已保存状态\n                  this.$refs.xTable.reloadRow(row, null, field)\n                }, 300)\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6),this.findSexList()},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))},methods:{findSexList:function(){var e=this;return s.a.get("/api/conf/sex/list").then((function(t){e.sexList=t}))},editClosedEvent:function(e){var t=this,n=e.row,a=e.column,l=this.$refs.xTable,i=a.property,s=n[i];l.isUpdateByRow(n,i)&&setTimeout((function(){t.$XModal.message({message:"局部保存成功！ ".concat(i,"=").concat(s),status:"success"}),t.$refs.xTable.reloadRow(n,null,i)}),300)}}},c=r,u=n("2877"),m=Object(u["a"])(c,a,l,!1,null,null,null);t["default"]=m.exports}}]);