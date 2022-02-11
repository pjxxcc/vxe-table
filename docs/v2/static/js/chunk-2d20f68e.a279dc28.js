(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f68e"],{b406:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 通过 "),n("grid-api-link",{attrs:{prop:"toolbar-config"}}),e._v(" 属性配置 "),n("grid-api-link",{attrs:{prop:"zoom"}}),e._v(" 开启全屏缩放按钮或者直接调用相关方法，按 Esc 可退出全屏"),n("br"),e._v(" 还可以手动调用 "),n("grid-api-link",{attrs:{prop:"maximize"}}),e._v(" 方法最大化表格、"),n("grid-api-link",{attrs:{prop:"revert"}}),e._v(" 方法还原表格 ")],1),n("vxe-grid",{ref:"xGrid",attrs:{border:"",resizable:"","keep-source":"","show-overflow":"","show-footer":"",height:"530","pager-config":e.tablePage,"proxy-config":e.tableProxy,columns:e.tableColumn,"toolbar-config":e.tableToolbar,"footer-method":e.footerMethod},scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){return e.$refs.xGrid.maximize()}}},[e._v("表格最大化")]),n("vxe-button",{on:{click:function(t){return e.$refs.xGrid.revert()}}},[e._v("表格还原")]),n("vxe-button",{on:{click:function(t){return e.$refs.xGrid.zoom()}}},[e._v("切换表格最大化/还原")])]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},r=[],i=(n("99af"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("c695")),a=n.n(i),l=n("628a"),s=n.n(l),u=n("1487"),c=n.n(u),d={data:function(){return{tablePage:{pageSize:20,perfect:!0},tableProxy:{props:{result:"result",total:"page.total"},ajax:{query:function(e){var t=e.page;return s.a.get("/api/user/page/list/".concat(t.pageSize,"/").concat(t.currentPage))}}},tableToolbar:{perfect:!0,refresh:!0,zoom:!0,custom:!0,slots:{buttons:"toolbar_buttons"}},tableColumn:[{type:"checkbox",width:100},{type:"seq",width:100},{field:"name",title:"Name",minWidth:300},{field:"nickname",title:"Nickname",minWidth:300},{field:"role",title:"Role",minWidth:300},{field:"rate",title:"Rate",minWidth:300},{field:"describe",title:"Describe",minWidth:300},{field:"createTime",title:"Update Date",minWidth:300},{field:"updateTime",title:"Create Date",minWidth:300}],demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          keep-source\n          show-overflow\n          show-footer\n          ref="xGrid"\n          height="530"\n          :pager-config="tablePage"\n          :proxy-config="tableProxy"\n          :columns="tableColumn"\n          :toolbar-config="tableToolbar"\n          :footer-method="footerMethod">\n          <template v-slot:toolbar_buttons>\n            <vxe-button @click="$refs.xGrid.maximize()">表格最大化</vxe-button>\n            <vxe-button @click="$refs.xGrid.revert()">表格还原</vxe-button>\n            <vxe-button @click="$refs.xGrid.zoom()">切换表格最大化/还原</vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tablePage: {\n                pageSize: 20,\n                perfect: true\n              },\n              tableProxy: {\n                props: {\n                  result: 'result', // 配置响应结果列表字段\n                  total: 'page.total' // 配置响应结果总页数字段\n                },\n                ajax: {\n                  query: ({ page }) => XEAjax.get(`/api/user/page/list/${page.pageSize}/${page.currentPage}`)\n                }\n              },\n              tableToolbar: {\n                perfect: true,\n                refresh: true,\n                zoom: true,\n                custom: true,\n                slots: {\n                  buttons: 'toolbar_buttons'\n                }\n              },\n              tableColumn: [\n                { type: 'checkbox', width: 100 },\n                { type: 'seq', width: 100 },\n                { field: 'name', title: 'Name', minWidth: 300 },\n                { field: 'nickname', title: 'Nickname', minWidth: 300 },\n                { field: 'role', title: 'Role', minWidth: 300 },\n                { field: 'rate', title: 'Rate', minWidth: 300 },\n                { field: 'describe', title: 'Describe', minWidth: 300 },\n                { field: 'createTime', title: 'Update Date', minWidth: 300 },\n                { field: 'updateTime', title: 'Create Date', minWidth: 300 }\n              ]\n            }\n          },\n          methods: {\n            footerMethod ({ columns, data }) {\n              const sums = []\n              columns.forEach((column, columnIndex) => {\n                if (columnIndex === 0) {\n                  sums.push('和值')\n                } else {\n                  if (column.property === 'rate') {\n                    sums.push(XEUtils.sum(data, column.property))\n                  } else {\n                    sums.push('-')\n                  }\n                }\n              })\n              // 返回一个二维数组的表尾合计\n              return [sums]\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){c.a.highlightBlock(e)}))},methods:{footerMethod:function(e){var t=e.columns,n=e.data,o=[];return t.forEach((function(e,t){0===t?o.push("和值"):"rate"===e.property?o.push(a.a.sum(n,e.property)):o.push("-")})),[o]}}},p=d,m=n("2877"),f=Object(m["a"])(p,o,r,!1,null,null,null);t["default"]=f.exports}}]);