(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c78c8f"],{"1d62":function(e,t,n){},b163:function(e,t,n){"use strict";n("1d62")},ebf99:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("自定义图标，通过设置 "),n("virtual-tree-api-link",{attrs:{prop:"tree-config"}}),e._v("={"),n("virtual-tree-api-link",{attrs:{prop:"iconOpen"}}),e._v(", "),n("virtual-tree-api-link",{attrs:{prop:"iconClose"}}),e._v("} 局部替换默认的图标")],1),n("vxe-virtual-tree",{ref:"xVTree1",attrs:{border:"",resizable:"","row-key":"","row-id":"id","toolbar-config":{slots:{buttons:"toolbar_buttons"}},columns:e.tableColumn1,"tree-config":{children:"children",iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o"},data:e.tableData},scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:e.getTreeExpansionEvent}},[e._v("获取已展开")]),n("vxe-button",{on:{click:function(t){return e.$refs.xVTree1.setAllTreeExpand(!0)}}},[e._v("展开所有")]),n("vxe-button",{on:{click:function(t){return e.$refs.xVTree1.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("更多自定义")]),n("vxe-virtual-tree",{ref:"xVTree2",attrs:{resizable:"","show-overflow":"","row-key":"","row-id":"id",columns:e.tableColumn2,"tree-config":{children:"children",iconOpen:"fa fa-minus-circle",iconClose:"fa fa-plus-circle"},data:e.tableData}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n    "),n("code",{staticClass:"css"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n  ")])],1)},o=[],r=(n("b0c0"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("c695")),i=n.n(r),l=n("1487"),s=n.n(l),d={data:function(){var e=this,t=this.$createElement;return{tableData:[],tableColumn1:[{field:"name",title:"Name",width:400,treeNode:!0},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],tableColumn2:[{field:"name",title:"Name",width:400,treeNode:!0,slots:{default:function(n){var a=n.row;return[t("span",[a.children&&a.children.length?t("i",{class:["tree-node-icon fa",e.$refs.xVTree2.isTreeExpandByRow(a)?"fa-folder-open-o":"fa-folder-o"]}):t("i",{class:"tree-node-icon fa fa-file-o"}),t("span",[a.name])])]}}},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],demoCodes:['\n        <vxe-virtual-tree\n          border\n          resizable\n          row-key\n          ref="xVTree1"\n          row-id="id"\n          :toolbar-config="{slots: {buttons: \'toolbar_buttons\'}}"\n          :columns="tableColumn1"\n          :tree-config="{children: \'children\', iconOpen: \'fa fa-minus-square-o\', iconClose: \'fa fa-plus-square-o\'}"\n          :data="tableData">\n          <template v-slot:toolbar_buttons>\n            <vxe-button @click="getTreeExpansionEvent">获取已展开</vxe-button>\n            <vxe-button @click="$refs.xVTree1.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xVTree1.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn1: [\n                { field: 'name', title: 'Name', width: 400, treeNode: true },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          },\n          methods: {\n            getTreeExpansionEvent () {\n              let treeExpandRecords = this.$refs.xVTree.getTreeExpandRecords()\n              this.$XModal.alert(treeExpandRecords.length)\n            }\n          }\n        }\n        ",'\n        <vxe-virtual-tree\n          resizable\n          show-overflow\n          row-key\n          ref="xVTree"\n          row-id="id"\n          :columns="tableColumn"\n          :tree-config="{children: \'children\', iconOpen: \'fa fa-minus-circle\', iconClose: \'fa fa-plus-circle\'}"\n          :data="tableData">\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                {\n                  field: 'name',\n                  title: 'Name',\n                  width: 400,\n                  treeNode: true,\n                  slots: {\n                    default: ({ row }) => {\n                      return [\n                        <span>\n                          {\n                            row.children && row.children.length\n                              ? <i class={ ['tree-node-icon fa', this.$refs.xVTree.isTreeExpandByRow(row) ? 'fa-folder-open-o' : 'fa-folder-o'] }></i>\n                              : <i class=\"tree-node-icon fa fa-file-o\"></i>\n                          }\n                          <span>{ row.name }</span>\n                        </span>\n                      ]\n                    }\n                  }\n                },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          }\n        }\n        ","\n        .tree-node-icon {\n          width: 20px;\n        }\n        "]}},created:function(){this.tableData=i.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){s.a.highlightBlock(e)}))},methods:{getTreeExpansionEvent:function(){var e=this.$refs.xVTree1.getTreeExpandRecords();this.$XModal.alert(e.length)}}},c=d,f=(n("b163"),n("2877")),u=Object(f["a"])(c,a,o,!1,null,"4f224f63",null);t["default"]=u.exports}}]);