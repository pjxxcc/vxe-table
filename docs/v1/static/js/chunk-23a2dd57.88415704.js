(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23a2dd57"],{"075a":function(e,t,n){"use strict";n("e193")},"6ea7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("展开行")]),n("vxe-table",{attrs:{border:"",resizable:"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell"}}},[n("vxe-table-column",{attrs:{type:"seq",width:"60"}}),n("vxe-table-column",{attrs:{type:"expand",width:"60"},scopedSlots:e._u([{key:"content",fn:function(t){var a=t.row;return[n("ul",{staticClass:"expand-form"},[n("li",[n("span",{staticClass:"title"},[e._v("Name：")]),n("span",{staticClass:"content"},[n("vxe-input",{model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})],1)]),n("li",[n("span",{staticClass:"title"},[e._v("Sex：")]),n("span",{staticClass:"content"},[n("vxe-input",{model:{value:a.sex,callback:function(t){e.$set(a,"sex",t)},expression:"row.sex"}})],1)]),n("li",[n("span",{staticClass:"title"},[e._v("Age：")]),n("span",{staticClass:"content"},[n("vxe-input",{model:{value:a.age,callback:function(t){e.$set(a,"age",t)},expression:"row.age"}})],1)])])]}}])}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"sex",title:"Sex","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"$input",props:{type:"date"}}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],s=(n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("1487")),i=n.n(s),o={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column type="expand" width="60">\n            <template v-slot:content="{ row, rowIndex }">\n              <ul class="expand-form">\n                <li>\n                  <span class="title">Name：</span>\n                  <span class="content">\n                    <vxe-input v-model="row.name"></vxe-input>\n                  </span>\n                </li>\n                <li>\n                  <span class="title">Sex：</span>\n                  <span class="content">\n                    <vxe-input v-model="row.sex"></vxe-input>\n                  </span>\n                </li>\n                <li>\n                  <span class="title">Age：</span>\n                  <span class="content">\n                    <vxe-input v-model="row.age"></vxe-input>\n                  </span>\n                </li>\n              </ul>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'$input\', props: {type: \'date\'}}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          }\n        }\n        ","\n        .expand-form li {\n          margin: 5px 0;\n        }\n        .expand-form li .title,\n        .expand-form li .content {\n          display: inline-block;\n        }\n        .expand-form li .title {\n          width: 100px;\n        }\n        .expand-form li .content {\n          width: 200px;\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){i.a.highlightBlock(e)}))}},c=o,d=(n("075a"),n("2877")),r=Object(d["a"])(c,a,l,!1,null,"82340702",null);t["default"]=r.exports},e193:function(e,t,n){}}]);