(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e17bd"],{"7b40":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 虚拟树表格，具体兼容性看 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-virtual-tree",target:"_blank"}},[e._v("vxe-table-plugin-virtual-tree")]),e._v(" 插件的 API"),n("br"),n("span",{staticClass:"red"},[e._v("(实现原理就是把一颗树结构平铺进行渲染，可以支持虚拟滚动，但是会失去部分功能)")]),n("br"),e._v(" 通过配置 "),n("virtual-tree-api-link",{attrs:{prop:"tree-config"}}),e._v(" 和指定列 "),n("table-column-api-link",{attrs:{prop:"tree-node"}}),e._v(" 属性来开启树表格 ")],1),n("vxe-virtual-tree",{ref:"xVTree",attrs:{border:"",resizable:"","row-key":"",toolbar:"","tree-config":{children:"children"},columns:e.tableColumn1,data:e.tableData1},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.getTreeExpansionEvent}},[e._v("获取已展开")]),n("vxe-button",{on:{click:function(t){return e.$refs.xVTree.setAllTreeExpand(!0)}}},[e._v("展开所有")]),n("vxe-button",{on:{click:function(t){return e.$refs.xVTree.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("默认展开所有树节点，通过 "),n("virtual-tree-api-link",{attrs:{prop:"tree-config"}}),e._v("={"),n("virtual-tree-api-link",{attrs:{prop:"expandAll"}}),e._v(": true} 参数设置默认展开所有树节点")],1),n("vxe-virtual-tree",{attrs:{border:"","row-key":"","row-id":"id",data:e.tableData2,"tree-config":{children:"children",expandAll:!0},columns:e.tableColumn2}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},l=[],r=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("c695")),i=n.n(r),o=n("1487"),d=n.n(o),s={data:function(){return{tableData1:[],tableData2:[],tableColumn1:[{field:"name",title:"Name",treeNode:!0},{field:"size",title:"Size"},{field:"type",title:"Type"},{field:"date",title:"Date"}],tableColumn2:[{type:"seq",title:"序号",width:280,treeNode:!0},{field:"name",title:"Name"},{title:"基本信息",children:[{field:"size",title:"Size"},{field:"type",title:"Type"}]},{field:"date",title:"Date"}],demoCodes:['\n        <vxe-virtual-tree\n          border\n          resizable\n          row-key\n          toolbar\n          ref="xVTree"\n          :tree-config="{children: \'children\'}"\n          :columns="tableColumn1"\n          :data="tableData">\n          <template v-slot:buttons>\n            <vxe-button @click="getTreeExpansionEvent">获取已展开</vxe-button>\n            <vxe-button @click="$refs.xVTree.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xVTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn1: [\n                { field: 'name', title: 'Name', treeNode: true },\n                { field: 'size', title: 'Size' },\n                { field: 'type', title: 'Type' },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          },\n          methods: {\n            getTreeExpansionEvent () {\n              let treeExpandRecords = this.$refs.xVTree.getTreeExpandRecords()\n              this.$XModal.alert(treeExpandRecords.length)\n            }\n          }\n        }\n        ",'\n        <vxe-virtual-tree\n          border\n          row-key\n          row-id="id"\n          :data="tableData"\n          :tree-config="{children: \'children\', expandAll: true}"\n          :columns="tableColumn">\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', title: '序号', width: 280, treeNode: true },\n                { field: 'name', title: 'Name' },\n                {\n                  title: '基本信息',\n                  children: [\n                    { field: 'size', title: 'Size' },\n                    { field: 'type', title: 'Type' }\n                  ]\n                },\n                { field: 'date', title: 'Date' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST\n          }\n        }\n        "]}},created:function(){this.tableData1=i.a.clone(window.MOCK_TREE_DATA_LIST,!0),this.tableData2=i.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))},methods:{getTreeExpansionEvent:function(){var e=this.$refs.xVTree.getTreeExpandRecords();this.$XModal.alert(e.length)}}},c=s,u=n("2877"),p=Object(u["a"])(c,a,l,!1,null,null,null);t["default"]=p.exports}}]);