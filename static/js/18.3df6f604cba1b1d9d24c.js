webpackJsonp([18],{"S/JZ":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",{attrs:{gutter:15}},[l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Basic usage")]),e._v(" "),l("el-input",{attrs:{placeholder:"Please input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Disabled")]),e._v(" "),l("el-input",{attrs:{placeholder:"Please input",disabled:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:15}},[l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Input with icon")]),e._v(" "),l("el-input",{attrs:{placeholder:"Please input",icon:"search","on-icon-click":e.handleIconClick},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Textarea")]),e._v(" "),l("el-input",{attrs:{placeholder:"Please input",type:"textarea",rows:2},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:15}},[l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Autosize Textarea")]),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input",type:"textarea",autosize:""},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),e._v(" "),l("el-input",{attrs:{placeholder:"Please input",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Mixed input")]),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[l("template",{slot:"prepend"},[e._v("Http://")])],2),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[l("template",{slot:"append"},[e._v(".com")])],2),e._v(" "),l("el-input",{attrs:{placeholder:"Please input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[l("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"Select"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[l("el-option",{attrs:{label:"Restaurant",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"Order No.",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"Tel",value:"3"}})],1),e._v(" "),l("el-button",{attrs:{icon:"search"},slot:"append"})],1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:15}},[l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Sizes")]),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input",size:"large"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),l("el-input",{staticClass:"m-b",attrs:{placeholder:"Please input",size:"small"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),l("el-input",{attrs:{placeholder:"Please input",size:"mini"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Autocomplete")]),e._v(" "),l("el-autocomplete",{staticClass:"inline-input",attrs:{placeholder:"Please Input","fetch-suggestions":e.querySearch},on:{select:e.handleSelect},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),l("el-autocomplete",{staticClass:"inline-input",attrs:{placeholder:"Please Input","fetch-suggestions":e.querySearch,"trigger-on-focus":!1},on:{select:e.handleSelect},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:15}},[l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Custom template")]),e._v(" "),l("el-autocomplete",{staticClass:"inline-input",attrs:{placeholder:"Please Input","fetch-suggestions":e.querySearch,icon:"edit","on-icon-click":e.handleIconClick,"custom-item":"my-item-en"},on:{select:e.handleSelect},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-card",{staticClass:"box-card m-b"},[l("div",{slot:"header"},[e._v("Remote search")]),e._v(" "),l("el-autocomplete",{staticClass:"inline-input",attrs:{placeholder:"Please Input","fetch-suggestions":e.querySearchAsync},on:{select:e.handleSelect},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1)],1)},staticRenderFns:[]}},Y6g6:function(e,t,l){var a=l("VU/8")(l("fHZs"),l("S/JZ"),null,null,null);e.exports=a.exports},fHZs:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l("7+uW").default.component("my-item-en",{functional:!0,render:function(e,t){var l=t.props.item;return e("li",t.data,[e("div",{attrs:{class:"value"}},[l.value]),e("span",{attrs:{class:"link"}},[l.link])])},props:{item:{type:Object,required:!0}}}),t.default={data:function(){return{links:[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],input:"",textarea:"",select:"",timeout:null}},methods:{handleIconClick:function(e){console.log(e)},querySearch:function(e,t){var l=this.links;t(e?l.filter(this.createFilter(e)):l)},handleSelect:function(e){console.log(e)},createFilter:function(e){return function(t){return 0===t.value.indexOf(e.toLowerCase())}},querySearchAsync:function(e,t){var l=this.links,a=e?l.filter(this.createFilter(e)):l;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t(a)},1e3*Math.random())}}}}});
//# sourceMappingURL=18.3df6f604cba1b1d9d24c.js.map