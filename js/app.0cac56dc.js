(function(t){function e(e){for(var o,i,n=e[0],l=e[1],c=e[2],p=0,u=[];p<n.length;p++)i=n[p],a[i]&&u.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},s=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("64a9"),a=r.n(o);a.a},"0493":function(t,e,r){t.exports=r.p+"img/refresh_btn.6df5ff94.jpg"},"0a08":function(t,e,r){},"0fc4":function(t,e,r){t.exports=r.p+"img/delete_btn.b25b12de.jpg"},"12e2":function(t,e,r){t.exports=r.p+"img/1.02871937.jpg"},"35c7":function(t,e,r){"use strict";var o=r("0a08"),a=r.n(o);a.a},3776:function(t,e,r){t.exports=r.p+"img/5.bbe7f918.jpg"},"37f7":function(t,e,r){t.exports=r.p+"img/2.602dfda8.jpg"},"388f":function(t,e,r){t.exports=r.p+"img/preloader.c0daa919.gif"},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("b-container",[o("b-col",[t.show_carousel?o("b-row",{attrs:{"align-h":"center"}},[o("h1",{staticStyle:{color:"#8B0000"}},[t._v(" Service name ")])]):t._e(),o("b-row",[t.show_carousel?o("carousel-3d",{staticClass:"carousel",attrs:{autoplay:!0,"autoplay-timeout":3500,display:5,border:1,clickable:!1}},t._l(t.slides,function(t,e){return o("slide",{key:e,attrs:{index:e}},[o("img",{attrs:{width:"100%",src:r("9b21")("./"+(e+1)+".jpg")}})])}),1):t._e()],1),t.show_carousel?o("b-row",{attrs:{"align-h":"center"}},[o("h5",{staticClass:"font-weight-bold",staticStyle:{color:"#000000"}},[t._v(" Our Web service gives you an opportunity to convert your photo into a piece of art.")]),o("h6",{staticClass:"font-weight-bold"},[t._v(" You can choose one among provided styles, which will transform your photo into an artist's drawing.For example, select a photo of your doggo (of course, if you have one) and  then  choose the style in which you want to convert your photo of a beautiful creature(doggo.And give some time  to our service to process the photo. ")])]):t._e(),o("b-row",{attrs:{"align-h":"center"}},[t.show_carousel?o("button",{staticClass:"btn_start",on:{click:function(e){t.show_carousel=!1}}},[t._v("START")]):t._e()])],1)],1),t.show_carousel?t._e():o("Start",{attrs:{"a-p-i":t.API}})],1)},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[o("b-row",{attrs:{"align-h":"start"}},[t._l(t.names,function(e,a){return o("b-col",{key:a,staticClass:"left_bar_item mw-100 d-none d-lg-block d-md-block  d-xl-block",class:{active:t.index===a},attrs:{cols:""},on:{click:function(e){return t.change_content(a)}}},[o("b-col",{attrs:{cols:"","align-self":"center"}},[o("img",{staticClass:"child mw-100",attrs:{src:r("9b21")("./"+(a+1)+".jpg"),alt:"456"}})]),o("b-col",{staticClass:"mw-100",attrs:{cols:"","align-self":"center"}},[o("h4",{},[t._v(t._s(e))])])],1)}),o("div",{staticClass:"mw-100 d-block d-lg-none d-md-none  d-xl-none",staticStyle:{width:"100%"}},[o("b-dropdown",{staticStyle:{width:"100%"},attrs:{id:"dropdown-1",text:"Dropdown Button"}},t._l(t.names,function(e,a){return o("b-dropdown-item",{key:a,class:{active:t.index===a},on:{click:function(e){return t.change_content(a)}}},[o("img",{attrs:{width:"50px",src:r("9b21")("./"+(a+1)+".jpg"),alt:"456"}}),o("h4",{},[t._v(t._s(e))])])}),1)],1)],2),o("b-row",[o("b-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[o("img",{directives:[{name:"show",rawName:"v-show",value:t.preloader_for_carousel,expression:"preloader_for_carousel"}],staticStyle:{"border-radius":"8px"},attrs:{src:r("388f"),width:"50%",alt:""}}),t.error?o("img",{staticStyle:{"border-radius":"5px",cursor:"pointer","margin-right":"25px"},attrs:{title:"upload again",width:"250px",height:"136.89px",src:r("0493")},on:{click:t.get_img_paths}}):t._e(),o("b-carousel",{directives:[{name:"show",rawName:"v-show",value:0!==t.paths.length&&!t.preloader_for_carousel,expression:"paths.length !== 0 && !preloader_for_carousel"}],attrs:{id:"carousel-fade",fade:"",indicators:"",controls:"","img-width":"512","img-height":"512"}},t._l(t.paths,function(e,r){return o("b-carousel-slide",{key:r},[o("img",{staticClass:"img-fluid w-50",attrs:{slot:"img",src:t.url_set(e["path_input"]),alt:"image slot"},slot:"img"}),o("img",{staticClass:"img-fluid w-50",attrs:{slot:"img",src:t.url_set(e["path_target"]),alt:"image slot"},slot:"img"})])}),1)],1),o("b-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[t.preloader?o("img",{staticStyle:{"border-radius":"8px"},attrs:{src:r("388f"),width:"50%",alt:""}}):t._e(),null!==t.download_url?o("div",{staticStyle:{"margin-top":"25px"}},[o("img",{staticStyle:{"border-radius":"5px",cursor:"pointer","margin-right":"25px"},attrs:{title:"upload again",width:"250px",height:"136.89px",src:r("0493"),alt:"download"},on:{click:function(e){t.download_url=null,t.files.length=0}}}),o("img",{staticStyle:{"border-radius":"5px",cursor:"pointer"},attrs:{title:"download your stylezed images",width:"250px",src:r("e8a1"),alt:"download"},on:{click:t.downloadItem}})]):t._e(),t.preloader||null!==t.download_url?t._e():o("div",[o("img",{directives:[{name:"show",rawName:"v-show",value:0!==t.files.length,expression:"files.length !== 0"}],staticStyle:{"border-radius":"5px",cursor:"pointer","margin-bottom":"5px"},attrs:{title:"send images",width:"100px",src:r("7b99"),alt:""},on:{click:t.send}}),0===t.files.length?o("b-form-file",{attrs:{placeholder:"Chose files",accept:"image/*",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}):t._e(),0!==t.files.length?o("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.2)"}},[o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("img")]),o("th",{attrs:{scope:"col"}},[t._v("name")]),o("th",{attrs:{scope:"col"}},[t._v("size")]),o("th",{attrs:{scope:"col"}},[t._v("delete")])])]),o("tbody",t._l(t.files,function(e,a){return o("tr",{staticClass:"row_table"},[o("th",{attrs:{scope:"row"}},[o("img",{attrs:{width:"40px",src:t.preview(a),alt:""}})]),o("td",[t._v(t._s(t.files[a].name))]),o("td",[t._v(t._s((t.files[a].size/1024).toFixed(2))+" kb")]),o("td",[o("span",[o("img",{staticStyle:{cursor:"pointer","border-radius":"13px"},attrs:{title:"delete this item",width:"25px",src:r("0fc4")},on:{click:function(e){return t.delete_item(a)}}})])])])}),0)])]):t._e()],1)])],1)],1)},n=[],l=(r("b54a"),r("7801")),c=r("1a67"),d=r("bc3a"),p=r.n(d),u={name:"Start",components:{BCol:c["a"],BContainer:l["a"]},props:["API"],data(){return{names:["The Starry Night","Motif","Scream","Figures At The Seaside","The Great Wave off Kanagawa"],index:0,files:[],paths:[],download_url:null,files_length:"",type_file:[{type:"octet/stream"},{zip:"style_zip.zip"},{type:"image/png"}],preloader:!1,preloader_for_carousel:!1,error:!1}},watch:{index:function(){this.get_img_paths(this.index)}},created(){this.get_img_paths()},methods:{preview(t){return URL.createObjectURL(this.files[t])},delete_item(t){this.files.splice(t,1)},change_content(t){this.index=t},downloadItem(){p.a.get(this.API+"/static/"+this.download_url,{responseType:"blob"}).then(t=>{let e=t.data,r=new Blob([e],this.files_length>1?this.type_file[0]:this.type_file[2]),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=this.files_length>1?this.type_file[1]["zip"]:this.download_url,o.click(),this.files_length=""}).catch(t=>{console.error(t)})},send(){if(0!==this.files.length){this.preloader=!0,this.files_length=this.files.length;let t=new FormData;for(let r=0;r<this.files.length;r++)t.append("file",this.files[r]);t.append("file",t),t.append("id_style",this.index);const e={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}};p.a.post(this.API+"/upload",t,e).then(t=>{this.get_img_paths(),this.download_url=t.data.link,this.preloader=!1}).catch(t=>{this.preloader=!1})}},get_img_paths(){this.error=!1,this.preloader_for_carousel=!0,p.a.get(this.API+"/get_paths?id_style="+this.index,{headers:{"Access-Control-Allow-Origin":"*"}}).then(t=>{this.paths=t.data.path,this.preloader_for_carousel=!1}).catch(t=>{this.preloader_for_carousel=!1,this.error=!0})},url_set(t){return this.API+t}}},h=u,f=(r("35c7"),r("2877")),g=Object(f["a"])(h,i,n,!1,null,"5530fb12",null),_=g.exports,m=r("e591"),b={name:"app",components:{BRow:m["a"],Start:_,BCol:c["a"],BContainer:l["a"]},data(){return{slides:5,show_carousel:!0,API:null}},created(){this.api()},methods:{api(){p.a.get("./api.json").then(t=>{this.API=t.data.api})}}},w=b,v=(r("034f"),Object(f["a"])(w,a,s,!1,null,null,null)),y=v.exports,x=r("9f7b"),j=r.n(x),k=r("3cf7"),S=r.n(k);r("f9e3"),r("2dd8");o["default"].use(S.a),o["default"].use(S.a),o["default"].use(j.a),o["default"].config.productionTip=!1,new o["default"]({render:t=>t(y)}).$mount("#app")},"64a9":function(t,e,r){},7083:function(t,e,r){t.exports=r.p+"img/background3.6472c911.jpg"},"7b99":function(t,e,r){t.exports=r.p+"img/send.18ca6b63.jpg"},"88de":function(t,e,r){t.exports=r.p+"img/4.76be65f5.jpg"},"9b21":function(t,e,r){var o={"./1.jpg":"12e2","./2.jpg":"37f7","./3.jpg":"c5cf","./4.jpg":"88de","./5.jpg":"3776","./background3.jpg":"7083","./delete_btn.jpg":"0fc4","./download.jpg":"e8a1","./refresh_btn.jpg":"0493","./send.jpg":"7b99"};function a(t){var e=s(t);return r(e)}function s(t){var e=o[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}a.keys=function(){return Object.keys(o)},a.resolve=s,t.exports=a,a.id="9b21"},c5cf:function(t,e,r){t.exports=r.p+"img/3.6f653d40.jpg"},e8a1:function(t,e,r){t.exports=r.p+"img/download.9be7c683.jpg"}});
//# sourceMappingURL=app.0cac56dc.js.map