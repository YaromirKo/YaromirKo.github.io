(function(t){function e(e){for(var r,i,a=e[0],l=e[1],c=e[2],d=0,u=[];d<a.length;d++)i=a[d],s[i]&&u.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,a=1;a<o.length;a++){var l=o[a];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("64a9"),s=o.n(r);s.a},"0493":function(t,e,o){t.exports=o.p+"img/refresh_btn.6df5ff94.jpg"},"0fc4":function(t,e,o){t.exports=o.p+"img/delete_btn.b25b12de.jpg"},"12e2":function(t,e,o){t.exports=o.p+"img/1.02871937.jpg"},3776:function(t,e,o){t.exports=o.p+"img/5.bbe7f918.jpg"},"37f7":function(t,e,o){t.exports=o.p+"img/2.602dfda8.jpg"},"388f":function(t,e,o){t.exports=o.p+"img/preloader.c0daa919.gif"},"3e0f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-container",[r("b-col",[t.show_carousel?r("b-row",{attrs:{"align-h":"center"}},[r("h1",{staticStyle:{color:"#8B0000"}},[t._v(" Service name ")])]):t._e(),r("b-row",[t.show_carousel?r("carousel-3d",{staticClass:"carousel",attrs:{autoplay:!0,"autoplay-timeout":3500,display:5,border:1,clickable:!1}},t._l(t.slides,function(t,e){return r("slide",{key:e,attrs:{index:e}},[r("img",{attrs:{width:"100%",src:o("9b21")("./"+(e+1)+".jpg")}})])}),1):t._e()],1),t.show_carousel?r("b-row",{attrs:{"align-h":"center"}},[r("h5",{staticClass:"font-weight-bold",staticStyle:{color:"#000000"}},[t._v(" Our Web service gives you an opportunity to convert your photo into a piece of art.")]),r("h6",{staticClass:"font-weight-bold"},[t._v(" You can choose one among provided styles, which will transform your photo into an artist's drawing.For example, select a photo of your doggo (of course, if you have one) and  then  choose the style in which you want to convert your photo of a beautiful creature(doggo.And give some time  to our service to process the photo. ")])]):t._e(),r("b-row",{attrs:{"align-h":"center"}},[t.show_carousel?r("button",{staticClass:"btn_start",on:{click:function(e){t.show_carousel=!1}}},[t._v("START")]):t._e()])],1)],1),t.show_carousel?t._e():r("Start")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[r("b-row",{attrs:{"align-h":"start"}},t._l(t.names,function(e,s){return r("b-col",{key:s,staticClass:"left_bar_item mw-100 d-none d-lg-block d-md-block  d-xl-block",class:{active:t.index===s},attrs:{cols:""},on:{click:function(e){return t.change_content(s)}}},[r("b-col",{attrs:{cols:"","align-self":"center"}},[r("img",{staticClass:"child mw-100",attrs:{src:o("9b21")("./"+(s+1)+".jpg"),alt:"456"}})]),r("b-col",{staticClass:"mw-100",attrs:{cols:"","align-self":"center"}},[r("h4",{},[t._v(t._s(e))])])],1)}),1),r("b-row",[r("b-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[r("b-carousel",{directives:[{name:"show",rawName:"v-show",value:0!==t.paths.length,expression:"paths.length !== 0"}],attrs:{id:"carousel-fade",fade:"",indicators:"",controls:"","img-width":"512","img-height":"512",interval:2e3}},t._l(t.paths,function(e,o){return r("b-carousel-slide",{key:o},[r("img",{staticClass:"img-fluid w-50",attrs:{slot:"img",src:t.url_set(e["path_input"]),alt:"image slot"},slot:"img"}),r("img",{staticClass:"img-fluid w-50",attrs:{slot:"img",src:t.url_set(e["path_target"]),alt:"image slot"},slot:"img"})])}),1)],1),r("b-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[t.preloader?r("img",{staticStyle:{"border-radius":"8px"},attrs:{src:o("388f"),width:"50%",alt:""}}):t._e(),null!==t.download_url?r("div",{staticStyle:{"margin-top":"25px"}},[r("img",{staticStyle:{"border-radius":"5px",cursor:"pointer","margin-right":"25px"},attrs:{title:"upload again",width:"250px",height:"136.89px",src:o("0493"),alt:"download"},on:{click:function(e){t.download_url=null,t.files.length=0}}}),r("img",{staticStyle:{"border-radius":"5px",cursor:"pointer"},attrs:{title:"download your stylezed images",width:"250px",src:o("e8a1"),alt:"download"},on:{click:t.downloadItem}})]):t._e(),t.preloader||null!==t.download_url?t._e():r("div",[r("img",{directives:[{name:"show",rawName:"v-show",value:0!==t.files.length,expression:"files.length !== 0"}],staticStyle:{"border-radius":"5px",cursor:"pointer","margin-bottom":"5px"},attrs:{title:"send images",width:"100px",src:o("7b99"),alt:""},on:{click:t.send}}),0===t.files.length?r("b-form-file",{attrs:{placeholder:"Chose files",accept:"image/*",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}):t._e(),0!==t.files.length?r("div",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.2)"}},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("img")]),r("th",{attrs:{scope:"col"}},[t._v("name")]),r("th",{attrs:{scope:"col"}},[t._v("size")]),r("th",{attrs:{scope:"col"}},[t._v("delete")])])]),r("tbody",t._l(t.files,function(e,s){return r("tr",{staticClass:"row_table"},[r("th",{attrs:{scope:"row"}},[r("img",{attrs:{width:"40px",src:t.preview(s),alt:""}})]),r("td",[t._v(t._s(t.files[s].name))]),r("td",[t._v(t._s((t.files[s].size/1024).toFixed(2))+" kb")]),r("td",[r("span",[r("img",{staticStyle:{cursor:"pointer","border-radius":"13px"},attrs:{title:"delete this item",width:"25px",src:o("0fc4")},on:{click:function(e){return t.delete_item(s)}}})])])])}),0)])]):t._e()],1)])],1)],1)},a=[],l=(o("b54a"),o("ac6a"),o("7801")),c=o("1a67"),p=o("bc3a"),d=o.n(p),u={name:"Start",components:{BCol:c["a"],BContainer:l["a"]},data(){return{names:["The Starry Night","Motif","Scream","Figures At The Seaside","The Great Wave off Kanagawa"],index:0,files:[],paths:[],download_url:null,files_length:"",type_file:[{type:"octet/stream"},{zip:"style_zip.zip"},{type:"image/png"},{img:"style.jpg"}],preloader:!1}},watch:{index:function(){this.get_img_paths(this.index)}},created(){this.get_img_paths()},methods:{preview(t){return URL.createObjectURL(this.files[t])},delete_item(t){this.files.splice(t,1)},change_content(t){this.index=t},downloadItem(){d.a.get(C+this.download_url,{responseType:"blob"}).then(t=>{let e=t.data,o=new Blob([e],this.files_length>1?this.type_file[0]:this.type_file[2]),r=document.createElement("a");r.href=URL.createObjectURL(o),r.download=this.files_length>1?this.type_file[1]["zip"]:this.type_file[3]["img"],r.click(),this.download_url="",this.files_length=""}).catch(t=>{console.error(t)})},send(){if(0!==this.files.length){this.preloader=!0,this.files_length=this.files.length;let t=new FormData;for(let o=0;o<this.files.length;o++)console.log(this.files[o]),t.append("file",this.files[o]);t.append("file",t),t.append("id_style",this.index);for(let o of t.entries())console.log(o[0]+", "+o[1]);const e={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}};d.a.post(C+"/upload",t,e).then(t=>{this.get_img_paths(),this.download_url=t.data.link,console.log(t),this.preloader=!1}).catch(t=>{console.log(t)})}},get_img_paths(){d.a.get(C+"/get_paths?id_style="+this.index,{headers:{"Access-Control-Allow-Origin":"*"}}).then(t=>{this.paths=t.data.path}).catch(t=>{console.log(t)})},url_set(t){return C+t}}},f=u,h=(o("b8e6"),o("2877")),g=Object(h["a"])(f,i,a,!1,null,"1f65af74",null),m=g.exports,b=o("e591"),_={name:"app",components:{BRow:b["a"],Start:m,BCol:c["a"],BContainer:l["a"]},data(){return{slides:5,show_carousel:!0}}},w=_,v=(o("034f"),Object(h["a"])(w,s,n,!1,null,null,null)),y=v.exports,x=o("9f7b"),j=o.n(x),k=o("3cf7"),S=o.n(k);o("f9e3"),o("2dd8");o.d(e,"API",function(){return C}),r["default"].use(S.a),r["default"].use(S.a),r["default"].use(j.a);const C="http://127.0.0.1:5000";r["default"].config.productionTip=!1,new r["default"]({render:t=>t(y)}).$mount("#app")},"64a9":function(t,e,o){},7083:function(t,e,o){t.exports=o.p+"img/background3.6472c911.jpg"},"7b99":function(t,e,o){t.exports=o.p+"img/send.18ca6b63.jpg"},"88de":function(t,e,o){t.exports=o.p+"img/4.76be65f5.jpg"},"9b21":function(t,e,o){var r={"./1.jpg":"12e2","./2.jpg":"37f7","./3.jpg":"c5cf","./4.jpg":"88de","./5.jpg":"3776","./background3.jpg":"7083","./delete_btn.jpg":"0fc4","./download.jpg":"e8a1","./refresh_btn.jpg":"0493","./send.jpg":"7b99"};function s(t){var e=n(t);return o(e)}function n(t){var e=r[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="9b21"},b8e6:function(t,e,o){"use strict";var r=o("3e0f"),s=o.n(r);s.a},c5cf:function(t,e,o){t.exports=o.p+"img/3.6f653d40.jpg"},e8a1:function(t,e,o){t.exports=o.p+"img/download.9be7c683.jpg"}});
//# sourceMappingURL=app.00ee7079.js.map