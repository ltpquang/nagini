(this.webpackJsonpnagini=this.webpackJsonpnagini||[]).push([[0],{71:function(e,n,t){},72:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(16),i=t.n(c),s=(t(71),t(89)),o=(t(72),t(6)),u=t(87),l=t(62),j=t(64),f=t(92),h=t(10),d=t(12),b=function(){function e(){Object(h.a)(this,e),this._transformers=[]}return Object(d.a)(e,[{key:"transformers",get:function(){return this._transformers}},{key:"addTransformer",value:function(e){this._transformers.push(e)}},{key:"replaceTransformer",value:function(e,n){this._transformers[e]&&(this._transformers[e]=n)}},{key:"removeTransformer",value:function(e){this._transformers[e]&&this._transformers.splice(e,1)}},{key:"transformData",value:function(e){var n=e;return this.transformers.forEach((function(e,t,r){n=e.transformData(n)})),n}},{key:"name",value:function(){return"Transform Engine"}}],[{key:"clone",value:function(n){var t=new e;return t._transformers=n.transformers,t}}]),e}(),O=t(65),x=t(91),m=t(86),v=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"transformData",value:function(e){return e.replace(/\\(.?)/g,(function(e,n){return"\\"===n?"\\":"n"===n?"\n":"t"===n?"\t":""===n?"":n}))}},{key:"name",value:function(){return"Unescape"}}]),e}(),g=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Beautify"}},{key:"transformData",value:function(e){var n={};try{n=JSON.parse(e)}catch(t){return"Invalid JSON string"}return JSON.stringify(n,null,4)}}]),e}(),p=function(){function e(){Object(h.a)(this,e),this.old="",this.new="",this.useRegEx=!1}return Object(d.a)(e,[{key:"name",value:function(){return"Replace"}},{key:"transformData",value:function(e){if(0===this.old.length)return e;if(!this.useRegEx)return e.replaceAll(this.old,this.new);try{return e.replaceAll(new RegExp(this.old,"g"),this.new)}catch(n){return n instanceof TypeError?"Invalid RegEx":n.message}}}],[{key:"fromPartial",value:function(n){var t,r,a,c=new e;return c.old=null!==(t=n.old)&&void 0!==t?t:"",c.new=null!==(r=n.new)&&void 0!==r?r:"",c.useRegEx=null!==(a=n.useRegEx)&&void 0!==a&&a,c}}]),e}(),y=function(){function e(){Object(h.a)(this,e),this.jsonPath="",this.jp=t(73)}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Path Query"}},{key:"transformData",value:function(e){if(0===this.jsonPath.length)return e;try{e=e.replaceAll("\n","");var n=JSON.parse(e);return this.jp.query(n,this.jsonPath).toString()}catch(t){return"Invalid JSON string"}}}],[{key:"fromPartial",value:function(n){var t,r=new e;return r.jsonPath=null!==(t=n.jsonPath)&&void 0!==t?t:"",r}}]),e}(),w=function(){function e(n){Object(h.a)(this,e),this.newInstance=void 0,this.newInstance=n}return Object(d.a)(e,null,[{key:"forName",value:function(e){return this.allTransformers.get(e)}},{key:"all",value:function(){return this.allTransformers}}]),e}();w.allTransformers=new Map([["unescape",new w((function(){return new v}))],["jsonbeautify",new w((function(){return new g}))],["jsonpath",new w((function(){return new y}))],["replace",new w((function(){return new p}))]]);var k=t(66),T=t(59),S=t(90),C=t(1),E=function(){return Object(C.jsx)("div",{children:"No option available"})},N=t(2),R=t(85),I=t(61),P=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(p.fromPartial(e))};return Object(C.jsxs)("div",{children:[Object(C.jsxs)(R.a,{className:"mb-3",children:[Object(C.jsx)(R.a.Text,{id:"replace",children:"Replace"}),Object(C.jsxs)(m.a,{id:"isRegex",title:n.useRegEx?"regex":"text",variant:"outline-secondary",onSelect:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{useRegEx:"regex"===e}))},children:[Object(C.jsx)(O.a.Item,{eventKey:"text",children:"text"}),Object(C.jsx)(O.a.Item,{eventKey:"regex",children:"regex"})]}),n.useRegEx&&Object(C.jsx)(R.a.Text,{children:"/"}),Object(C.jsx)(I.a,{placeholder:n.old,onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{old:e.currentTarget.value}))}}),n.useRegEx&&Object(C.jsx)(R.a.Text,{children:"/g"})]}),Object(C.jsxs)(R.a,{className:"mb-3",children:[Object(C.jsx)(R.a.Text,{id:"with",children:"with"}),Object(C.jsx)(I.a,{placeholder:n.new,onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{new:e.currentTarget.value}))}})]})]})},J=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(y.fromPartial(e))};return Object(C.jsx)("div",{children:Object(C.jsxs)(R.a,{className:"mb-3",children:[Object(C.jsx)(R.a.Text,{id:"json-path",children:"JSON Path"}),Object(C.jsx)(I.a,{placeholder:n.jsonPath,onChange:function(e){return r(Object(N.a)(Object(N.a)({},n),{},{jsonPath:e.currentTarget.value}))}})]})})},A=t(88),_=function(e){var n,t;return Object(C.jsxs)(u.a,{children:[Object(C.jsx)(l.a,{md:{span:11},children:Object(C.jsxs)(x.a.Item,{eventKey:e.index.toString(),children:[Object(C.jsx)(x.a.Header,{children:e.transformer.name()}),Object(C.jsx)(x.a.Body,{children:(t=e.transformer,t instanceof p?Object(C.jsx)(P,{transformer:t,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):t instanceof y?Object(C.jsx)(J,{transformer:t,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):Object(C.jsx)(E,{}))})]},e.index.toString())}),Object(C.jsx)(l.a,{md:{span:1},children:Object(C.jsx)(S.a,{trigger:"click",rootClose:!0,placement:"right",overlay:(n=function(){document.body.click(),e.onRemove&&e.onRemove(e.index)},Object(C.jsxs)(k.a,{id:"popover-basic",children:[Object(C.jsx)(k.a.Header,{children:"Are you sure?"}),Object(C.jsx)(k.a.Body,{children:Object(C.jsx)(T.a,{variant:"danger",as:"h5",onClick:function(){return n()},children:"Yes, delete!"})})]})),children:Object(C.jsx)(T.a,{variant:"danger",children:Object(C.jsx)(A.a,{})})})})]})},D=function(e){var n=e.onChange,t=Object(r.useState)(new b),a=Object(o.a)(t,2),c=a[0],i=a[1];Object(r.useEffect)((function(){n&&n(c)}),[c,n]);return Object(C.jsxs)("div",{children:[Object(C.jsx)(x.a,{children:c.transformers.map((function(e,n,t){return Object(C.jsx)(_,{index:n,transformer:e,onChange:function(e,n){return function(e,n){c.replaceTransformer(e,n),i((function(e){return b.clone(e)}))}(e,n)},onRemove:function(e){return function(e){c.removeTransformer(e),i((function(e){return b.clone(e)}))}(e)}},n.toString())}))}),Object(C.jsx)(m.a,{id:"dropdown-item-button",title:"Add node",onSelect:function(e){return function(e){if(e){var n=w.forName(e);n&&(c.addTransformer(n.newInstance()),i((function(e){return b.clone(e)})))}}(e)},children:function(){var e=[];return w.all().forEach((function(n,t,r){return e.push(Object(C.jsx)(O.a.Item,{as:"button",eventKey:t,children:n.newInstance().name()},t))})),e}()})]})},B=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(new b),i=Object(o.a)(c,2),s=i[0],h=i[1],d=Object(r.useState)(""),O=Object(o.a)(d,2),x=O[0],m=O[1];return Object(r.useEffect)((function(){m(s.transformData(t))}),[s,t]),Object(C.jsx)("div",{className:"Main",children:Object(C.jsxs)(u.a,{children:[Object(C.jsxs)(l.a,{md:{span:5},children:[Object(C.jsx)(j.a,{controlId:"inputTextArea",label:"Input",children:Object(C.jsx)(f.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},onChange:function(e){a(e.currentTarget.value)}})}),Object(C.jsx)(u.a,{children:Object(C.jsx)(l.a,{md:{span:10,offset:1},children:Object(C.jsx)(D,{onChange:h})})})]}),Object(C.jsx)(l.a,{md:{span:7},children:Object(C.jsx)(j.a,{controlId:"outputTextArea",label:"Output",children:Object(C.jsx)(f.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},value:x,readOnly:!0})})})]})})},K=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(s.a,{fluid:!0,children:Object(C.jsx)(B,{})})})};t(77);i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(K,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f4ee27c2.chunk.js.map