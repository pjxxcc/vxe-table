(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8e73"],{3154:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"",height:"500","scroll-x":{enabled:!1},loading:e.loading}},[n("vxe-column",{attrs:{type:"seq",title:"序号",width:"100"}}),n("vxe-colgroup",{attrs:{title:"基本信息"}},[n("vxe-column",{attrs:{field:"name",title:"Name",width:"200",sortable:""}}),n("vxe-column",{attrs:{field:"age",title:"Age",width:"200"}}),n("vxe-column",{attrs:{field:"sex",title:"Sex",width:"200"}})],1),n("vxe-colgroup",{attrs:{title:"详细信息"}},[n("vxe-colgroup",{attrs:{title:"分组"}},[n("vxe-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),n("vxe-column",{attrs:{field:"region",title:"Region",width:"200"}})],1),n("vxe-colgroup",{attrs:{title:"其他"}},[n("vxe-column",{attrs:{field:"time",title:"Time",width:"200",sortable:""}}),n("vxe-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}})],1)],1),n("vxe-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),n("vxe-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("分组表头"),n("br"),n("span",{staticClass:"red"},[e._v("（注：分组表头不支持横向虚拟滚动，通过设置 scroll-x={enabled: false} 关闭即可）")])])}],o=(n("d3b7"),{data:function(){return{loading:!1,demoCodes:['\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          ref="xTable"\n          height="500"\n          :scroll-x="{enabled: false}"\n          :loading="loading">\n          <vxe-column type="seq" title="序号" width="100"></vxe-column>\n          <vxe-colgroup title="基本信息">\n            <vxe-column field="name" title="Name" width="200" sortable></vxe-column>\n            <vxe-column field="age" title="Age" width="200"></vxe-column>\n            <vxe-column field="sex" title="Sex" width="200"></vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="详细信息">\n            <vxe-colgroup title="分组">\n              <vxe-column field="rate" title="Rate" width="200"></vxe-column>\n              <vxe-column field="region" title="Region" width="200"></vxe-column>\n            </vxe-colgroup>\n            <vxe-colgroup title="其他">\n              <vxe-column field="time" title="Time" width="200" sortable></vxe-column>\n              <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>\n            </vxe-colgroup>\n          </vxe-colgroup>\n          <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>\n          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false\n            }\n          },\n          mounted () {\n            this.loading = true\n            this.$nextTick(() => {\n              const $table = this.$refs.xTable\n              this.mockList(1000).then(data => {\n                this.loading = false\n                if ($table) {\n                  $table.loadData(data)\n                }\n              })\n            })\n          },\n          methods: {\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    address: 'shenzhen'\n                  })\n                }\n                resolve(list)\n              })\n            }\n          }\n        }\n        "]}},mounted:function(){var e=this;this.loading=!0,this.$nextTick((function(){var t=e.$refs.xTable;e.mockList(1e3).then((function(n){e.loading=!1,t&&t.loadData(n)}))}))},methods:{mockList:function(e){return new Promise((function(t){for(var n=[],l=0;l<e;l++)n.push({name:"名称".concat(l),sex:"0",num:123,age:18,num2:234,rate:3,address:"shenzhen"});t(n)}))}}}),a=o,s=n("2877"),d=Object(s["a"])(a,l,i,!1,null,null,null);t["default"]=d.exports}}]);