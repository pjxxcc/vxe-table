(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04857a10"],{"07ac":function(e,t,n){var r=n("23e7"),o=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}},"6f53":function(e,t,n){var r=n("83ab"),o=n("e330"),a=n("df75"),i=n("fc6a"),s=n("d1e7").f,c=o(s),l=o([].push),u=function(e){return function(t){var n,o=i(t),s=a(o),u=s.length,d=0,f=[];while(u>d)n=s[d++],r&&!c(o,n)||l(f,e?[n,o[n]]:o[n]);return f}};e.exports={entries:u(!0),values:u(!1)}},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=T(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",v="executing",h="completed",x={};function m(){}function p(){}function g(){}var b={};c(b,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(j([])));w&&w!==n&&r.call(w,a)&&(b=w);var $=g.prototype=m.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,s){var c=u(e[o],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;function a(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function T(e,t,n){var r=d;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return X()}n.method=o,n.arg=a;while(1){var i=n.delegate;if(i){var s=_(i,n);if(s){if(s===x)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return x;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,x;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function j(e){if(e){var n=e[a];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:X}}function X(){return{value:t,done:!0}}return p.prototype=g,c($,"constructor",g),c(g,"constructor",p),p.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},k(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k($),c($,s,"Generator"),c($,a,(function(){return this})),c($,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},abfe:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("vxe-toolbar",{attrs:{refresh:{query:e.findList}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("新增操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.insertEvent(null)}}},[e._v("从第一行插入")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.insertEvent(-1)}}},[e._v("从最后插入")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.insertEvent(e.$refs.xTable.getData(100))}}},[e._v("插入到 100 行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.insertEvent(e.$refs.xTable.getData(2e3))}}},[e._v("插入到 2000 行")])]},proxy:!0}])}),n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("删除操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(0))}}},[e._v("删除第一行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(e.$refs.xTable.getData().length-1))}}},[e._v("删除最后一行")]),n("vxe-button",{attrs:{type:"text"},on:{click:function(t){e.$refs.xTable.remove(e.$refs.xTable.getData(100))}}},[e._v("删除第 100 行")])]},proxy:!0}])}),n("vxe-button",{scopedSlots:e._u([{key:"default",fn:function(){return[e._v("校验操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:e.validEvent}},[e._v("快速校验")]),n("vxe-button",{attrs:{type:"text"},on:{click:e.fullValidEvent}},[e._v("完整快速校验")]),n("vxe-button",{attrs:{type:"text"},on:{click:e.selectValidEvent}},[e._v("选中行校验")])]},proxy:!0}])}),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0}])}),n("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-overflow":"","keep-source":"",height:"300",loading:e.loading,"edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}},[n("vxe-column",{attrs:{type:"checkbox",width:"60"}}),n("vxe-column",{attrs:{type:"seq",width:"100"}}),n("vxe-column",{attrs:{field:"name",title:"Name",sortable:"",width:"200","edit-render":{name:"input"}}}),n("vxe-column",{attrs:{field:"age",title:"Age",width:"200","edit-render":{name:"input"}}}),n("vxe-column",{attrs:{field:"sex",title:"Sex",width:"200","edit-render":{name:"input"}}}),n("vxe-column",{attrs:{field:"rate",title:"Rate",width:"200"}}),n("vxe-column",{attrs:{field:"region",title:"Region",width:"200"}}),n("vxe-column",{attrs:{field:"time",title:"Time",width:"200"}}),n("vxe-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}}),n("vxe-column",{attrs:{field:"updateTime",title:"UpdateTime",width:"200"}}),n("vxe-column",{attrs:{field:"createTime",title:"CreateTime",width:"200"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v(" 虚拟滚动行校验，如果第一个参数为 true 则全量校验"),n("br"),n("span",{staticClass:"red"},[e._v("（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）")])])}],a=n("1da1"),i=(n("96cf"),n("d3b7"),n("159b"),n("07ac"),n("99af"),n("d81d"),{data:function(){return{loading:!1,validRules:{name:[{required:!0,message:"app.body.valid.rName"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],sex:[{required:!0,message:"性别必须填写"}]},demoCodes:['\n        <vxe-toolbar :refresh="{query: findList}">\n          <template #buttons>\n            <vxe-button>\n              <template #default>新增操作</template>\n              <template #dropdowns>\n                <vxe-button type="text" @click="insertEvent(null)">从第一行插入</vxe-button>\n                <vxe-button type="text" @click="insertEvent(-1)">从最后插入</vxe-button>\n                <vxe-button type="text" @click="insertEvent($refs.xTable.getData(100))">插入到 100 行</vxe-button>\n                <vxe-button type="text" @click="insertEvent($refs.xTable.getData(2000))">插入到 2000 行</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button>\n              <template #default>删除操作</template>\n              <template #dropdowns>\n                <vxe-button type="text" @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(0))">删除第一行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData($refs.xTable.getData().length - 1))">删除最后一行</vxe-button>\n                <vxe-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(100))">删除第 100 行</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button>\n              <template #default校验操作</template>\n              <template #dropdowns>\n                <vxe-button @click="validEvent">快速校验</vxe-button>\n                <vxe-button @click="fullValidEvent">完整快速校验</vxe-button>\n                <vxe-button @click="selectValidEvent">选中行校验</vxe-button>\n              </template>\n            </vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          show-overflow\n          keep-source\n          ref="xTable"\n          height="300"\n          :loading="loading"\n          :edit-rules="validRules"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="100"></vxe-column>\n          <vxe-column field="name" title="Name" sortable width="200" :edit-render="{name: \'input\'}"></vxe-column>\n          <vxe-column field="age" title="Age" width="200" :edit-render="{name: \'input\'}"></vxe-column>\n          <vxe-column field="sex" title="Sex" width="200" :edit-render="{name: \'input\'}"></vxe-column>\n          <vxe-column field="rate" title="Rate" width="200"></vxe-column>\n          <vxe-column field="region" title="Region" width="200"></vxe-column>\n          <vxe-column field="time" title="Time" width="200"></vxe-column>\n          <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>\n          <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>\n          <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              validRules: {\n                name: [\n                  { required: true, message: 'app.body.valid.rName' },\n                  { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                ],\n                sex: [\n                  { required: true, message: '性别必须填写' }\n                ]\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const tableData = this.mockList(600)\n                  // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿\n                  if (this.$refs.xTable) {\n                    this.$refs.xTable.loadData(tableData)\n                  }\n                  resolve()\n                  this.loading = false\n                }, 300)\n              })\n            },\n            mockList (size) {\n              const list = []\n              for (let index = 0; index < size; index++) {\n                list.push({\n                  name: `名称${index}`,\n                  sex: '0',\n                  num: 123,\n                  age: 18,\n                  num2: 234,\n                  rate: 3,\n                  address: 'shenzhen'\n                })\n              }\n              return list\n            },\n            async validEvent () {\n              const $table = this.$refs.xTable\n              const errMap = await $table.validate().catch(errMap => errMap)\n              if (errMap) {\n                this.$XModal.message({ status: 'error', content: '校验不通过！' })\n              } else {\n                this.$XModal.message({ status: 'success', content: '校验成功！' })\n              }\n            },\n            async fullValidEvent () {\n              const errMap = await this.$refs.xTable.fullValidate()\n              if (errMap) {\n                const msgList = []\n                Object.values(errMap).forEach(errList => {\n                  errList.forEach(params => {\n                    const { rowIndex, column, rules } = params\n                    rules.forEach(rule => {\n                      msgList.push(`第 ${rowIndex + 1} 行 ${column.title} 校验错误：${rule.message}`)\n                    })\n                  })\n                })\n                this.$XModal.message({\n                  status: 'error',\n                  slots: {\n                    default () {\n                      return [\n                        <div class=\"red\" style=\"max-height: 400px;overflow: auto;\">\n                          {\n                            msgList.map(msg => {\n                              return <div>{ msg }</div>\n                            })\n                          }\n                        </div>\n                      ]\n                    }\n                  }\n                })\n              } else {\n                this.$XModal.message({ status: 'success', content: '校验成功！' })\n              }\n            },\n            async selectValidEvent () {\n              const $table = this.$refs.xTable\n              const selectRecords = $table.getCheckboxRecords()\n              if (selectRecords.length > 0) {\n                const errMap = await $table.validate(selectRecords).catch(errMap => errMap)\n                if (errMap) {\n                  this.$XModal.message({ status: 'error', content: '校验不通过！' })\n                } else {\n                  this.$XModal.message({ status: 'success', content: '校验成功！' })\n                }\n              } else {\n                this.$XModal.message({ status: 'warning', content: '未选中数据！' })\n              }\n            },\n            insertEvent (row) {\n              let xTable = this.$refs.xTable\n              const record = {\n                checked: false\n              }\n              xTable.insertAt(record, row).then(({ row }) => {\n                xTable.setActiveRow(row)\n              })\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xTable.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xTable.getRemoveRecords()\n              this.$XModal.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xTable.getUpdateRecords()\n              this.$XModal.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;return this.loading=!0,new Promise((function(t){setTimeout((function(){var n=e.mockList(600);e.$refs.xTable&&e.$refs.xTable.loadData(n),t(),e.loading=!1}),300)}))},mockList:function(e){for(var t=[],n=0;n<e;n++)t.push({name:"名称".concat(n),sex:"0",num:123,age:18,num2:234,rate:3,address:"shenzhen"});return t},validEvent:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.xTable,t.next=3,n.validate().catch((function(e){return e}));case 3:r=t.sent,r?e.$XModal.message({status:"error",content:"校验不通过！"}):e.$XModal.message({status:"success",content:"校验成功！"});case 5:case"end":return t.stop()}}),t)})))()},fullValidEvent:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$createElement,t.next=3,e.$refs.xTable.fullValidate();case 3:n=t.sent,n?(r=[],Object.values(n).forEach((function(e){e.forEach((function(e){var t=e.rowIndex,n=e.column,o=e.rules;o.forEach((function(e){r.push("第 ".concat(t+1," 行 ").concat(n.title," 校验错误：").concat(e.message))}))}))})),e.$XModal.message({status:"error",slots:{default:function(){var e=this.$createElement;return[e("div",{class:"red",style:"max-height: 400px;overflow: auto;"},[r.map((function(t){return e("div",[t])}))])]}}})):e.$XModal.message({status:"success",content:"校验成功！"});case 5:case"end":return t.stop()}}),t)})))()},selectValidEvent:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$refs.xTable,r=n.getCheckboxRecords(),!(r.length>0)){t.next=9;break}return t.next=5,n.validate(r).catch((function(e){return e}));case 5:o=t.sent,o?e.$XModal.message({status:"error",content:"校验不通过！"}):e.$XModal.message({status:"success",content:"校验成功！"}),t.next=10;break;case 9:e.$XModal.message({status:"warning",content:"未选中数据！"});case 10:case"end":return t.stop()}}),t)})))()},insertEvent:function(e){var t=this.$refs.xTable,n={checked:!1};t.insertAt(n,e).then((function(e){var n=e.row;t.setActiveRow(n)}))},getInsertEvent:function(){var e=this.$refs.xTable.getInsertRecords();this.$XModal.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xTable.getRemoveRecords();this.$XModal.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xTable.getUpdateRecords();this.$XModal.alert(e.length)}}}),s=i,c=n("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null);t["default"]=l.exports}}]);