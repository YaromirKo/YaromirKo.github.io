(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"12e2":function(t,e,n){t.exports=n.p+"img/1.bbe7f918.jpg"},3776:function(t,e,n){t.exports=n.p+"img/5.76be65f5.jpg"},"37f7":function(t,e,n){t.exports=n.p+"img/2.602dfda8.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("b-container",[o("b-col",[t.show_carousel?o("b-row",{attrs:{"align-h":"center"}},[o("h1",{staticStyle:{color:"#8B0000"}},[t._v(" Service name ")])]):t._e(),o("b-row",[t.show_carousel?o("carousel-3d",{staticClass:"carousel",attrs:{autoplay:!0,"autoplay-timeout":3500,display:5,border:1,clickable:!1}},t._l(t.slides,function(t,e){return o("slide",{key:e,attrs:{index:e}},[o("img",{attrs:{src:n("9b21")("./"+(e+1)+".jpg")}})])}),1):t._e()],1),t.show_carousel?o("b-row",{attrs:{"align-h":"center"}},[o("h5",{staticClass:"font-weight-bold",staticStyle:{color:"#000000"}},[t._v(" Our Web service gives you an opportunity to convert your photo into a piece of art.")]),o("h6",{staticClass:"font-weight-bold"},[t._v(" You can choose one among provided styles, which will transform your photo into an artist's drawing.For example, select a photo of your doggo (of course, if you have one) and  then  choose the style in which you want to convert your photo of a beautiful creature(doggo.And give some time  to our service to process the photo. ")])]):t._e(),o("b-row",{attrs:{"align-h":"center"}},[t.show_carousel?o("button",{staticClass:"btn_start",on:{click:function(e){t.show_carousel=!1}}},[t._v("START")]):t._e()])],1)],1),t.show_carousel?t._e():o("Start")],1)},a=[],i=(n("ac6a"),n("5d73")),c=n.n(i),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[o("b-row",{attrs:{"align-h":"start"}},t._l(t.names,function(e,r){return o("b-col",{key:r,staticClass:"left_bar_item mw-100 d-none d-lg-block d-md-block",class:{active:t.index===r},attrs:{cols:""},on:{click:function(e){return t.change_content(r)}}},[o("b-col",{attrs:{cols:"","align-self":"center"}},[o("img",{staticClass:"child mw-100",attrs:{src:n("9b21")("./"+(r+1)+".jpg"),alt:"456"}})]),o("b-col",{staticClass:"mw-100",attrs:{cols:"","align-self":"center"}},[o("h4",{},[t._v(t._s(e))])])],1)}),1),o("b-row",[o("b-col",{attrs:{cols:""}},[o("b-carousel",{attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"256","img-height":"256"}},t._l(t.count,function(e,r){return o("b-carousel-slide",{key:r,attrs:{caption:"","img-src":n("9b21")("./"+(t.index+1)+".jpg")}})}),1)],1),o("b-col",{attrs:{cols:""}})],1)],1)},l=[],u=n("7801"),f=n("1a67"),p={name:"Start",components:{BCol:f["a"],BContainer:u["a"]},data:function(){return{names:["The Great Wave off Kanagawa","Motif","Scream","The Starry Night","Figures At The Seaside"],index:0,count:5}},watch:{},methods:{change_content:function(t){this.index=t}}},d=p,h=(n("ca3c"),n("2877")),g=Object(h["a"])(d,s,l,!1,null,"32899236",null),b=g.exports,v=n("bc3a"),m=n.n(v),w=n("e591"),y={name:"app",components:{BRow:w["a"],Start:b,BCol:f["a"],BContainer:u["a"]},data:function(){return{slides:5,show_carousel:!0,data:"",api:"",file:[]}},created:function(){},mounted:function(){},methods:{submitFile:function(){for(var t=new FormData,e=0;e<this.file.length;e++)t.append("file",this.file[e]);t.append("id",179);var n=!0,o=!1,r=void 0;try{for(var a,i=c()(t.entries());!(n=(a=i.next()).done);n=!0){var s=a.value;console.log(s[0]+", "+s[1])}}catch(l){o=!0,r=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}m.a.post(T+"/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")})},handleFileUpload:function(){var t=this.$refs.files.files;console.log(this.$refs.files.files);for(var e=0;e<t.length;e++)this.file.push(t[e])}}},_=y,j=(n("034f"),Object(h["a"])(_,r,a,!1,null,null,null)),x=j.exports,O=n("9f7b"),k=n.n(O),S=n("3cf7"),C=n.n(S);n("f9e3"),n("2dd8");n.d(e,"API",function(){return T}),o["default"].use(C.a),o["default"].use(C.a),o["default"].use(k.a);var T="http://127.0.0.1:5000";o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,n){},7083:function(t,e,n){t.exports=n.p+"img/background3.6472c911.jpg"},"88de":function(t,e,n){t.exports=n.p+"img/4.02871937.jpg"},"9b21":function(t,e,n){var o={"./1.jpg":"12e2","./2.jpg":"37f7","./3.jpg":"c5cf","./4.jpg":"88de","./5.jpg":"3776","./background3.jpg":"7083"};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="9b21"},ab8b:function(t,e,n){},c5cf:function(t,e,n){t.exports=n.p+"img/3.6f653d40.jpg"},ca3c:function(t,e,n){"use strict";var o=n("ab8b"),r=n.n(o);r.a}});
//# sourceMappingURL=app-legacy.1bb8e817.js.map