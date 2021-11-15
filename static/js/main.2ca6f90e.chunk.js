(this.webpackJsonpnagini=this.webpackJsonpnagini||[]).push([[0],{56:function(e,n,t){},57:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),i=t.n(c),s=(t(56),t(72)),o=(t(57),t(6)),u=t(71),l=t(49),j=t(50),f=t(74),h=t(11),d=t(12),b=function(){function e(){Object(h.a)(this,e),this._transformers=[]}return Object(d.a)(e,[{key:"transformers",get:function(){return this._transformers}},{key:"addTransformer",value:function(e){this._transformers.push(e)}},{key:"replaceTransformer",value:function(e,n){this._transformers[e]&&(this._transformers[e]=n)}},{key:"transformData",value:function(e){var n=e;return this.transformers.forEach((function(e,t,r){n=e.transformData(n)})),n}},{key:"name",value:function(){return"Transform Engine"}}],[{key:"clone",value:function(n){var t=new e;return t._transformers=n.transformers,t}}]),e}(),O=t(51),x=t(73),m=t(70),v=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"transformData",value:function(e){return e.replace(/\\(.?)/g,(function(e,n){return"\\"===n?"\\":"n"===n?"\n":"t"===n?"\t":""===n?"":n}))}},{key:"name",value:function(){return"Unescape"}}]),e}(),g=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Beautify"}},{key:"transformData",value:function(e){var n={};try{n=JSON.parse(e)}catch(t){return"Invalid JSON string"}return JSON.stringify(n,null,4)}}]),e}(),p=function(){function e(){Object(h.a)(this,e),this.old="",this.new="",this.useRegEx=!1}return Object(d.a)(e,[{key:"name",value:function(){return"Replace"}},{key:"transformData",value:function(e){if(0===this.old.length)return e;if(!this.useRegEx)return e.replaceAll(this.old,this.new);try{return e.replaceAll(new RegExp(this.old,"g"),this.new)}catch(n){return n instanceof TypeError?"Invalid RegEx":n.message}}}],[{key:"fromPartial",value:function(n){var t,r,a,c=new e;return c.old=null!==(t=n.old)&&void 0!==t?t:"",c.new=null!==(r=n.new)&&void 0!==r?r:"",c.useRegEx=null!==(a=n.useRegEx)&&void 0!==a&&a,c}}]),e}(),y=function(){function e(){Object(h.a)(this,e),this.jsonPath="",this.jp=t(58)}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Path Query"}},{key:"transformData",value:function(e){if(0===this.jsonPath.length)return e;try{e=e.replaceAll("\n","");var n=JSON.parse(e);return this.jp.query(n,this.jsonPath).toString()}catch(t){return"Invalid JSON string"}}}],[{key:"fromPartial",value:function(n){var t,r=new e;return r.jsonPath=null!==(t=n.jsonPath)&&void 0!==t?t:"",r}}]),e}(),w=function(){function e(n){Object(h.a)(this,e),this.newInstance=void 0,this.newInstance=n}return Object(d.a)(e,null,[{key:"forName",value:function(e){return this.allTransformers.get(e)}},{key:"all",value:function(){return this.allTransformers}}]),e}();w.allTransformers=new Map([["unescape",new w((function(){return new v}))],["jsonbeautify",new w((function(){return new g}))],["jsonpath",new w((function(){return new y}))],["replace",new w((function(){return new p}))]]);var k=t(1),T=function(){return Object(k.jsx)("div",{children:"No option available"})},S=t(2),E=t(69),N=t(48),C=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(p.fromPartial(e))};return Object(k.jsxs)("div",{children:[Object(k.jsxs)(E.a,{className:"mb-3",children:[Object(k.jsx)(E.a.Text,{id:"replace",children:"Replace"}),Object(k.jsxs)(m.a,{id:"isRegex",title:n.useRegEx?"regex":"text",variant:"outline-secondary",onSelect:function(e){return r(Object(S.a)(Object(S.a)({},n),{},{useRegEx:"regex"===e}))},children:[Object(k.jsx)(O.a.Item,{eventKey:"text",children:"text"}),Object(k.jsx)(O.a.Item,{eventKey:"regex",children:"regex"})]}),n.useRegEx&&Object(k.jsx)(E.a.Text,{children:"/"}),Object(k.jsx)(N.a,{placeholder:n.old,onChange:function(e){return r(Object(S.a)(Object(S.a)({},n),{},{old:e.currentTarget.value}))}}),n.useRegEx&&Object(k.jsx)(E.a.Text,{children:"/g"})]}),Object(k.jsxs)(E.a,{className:"mb-3",children:[Object(k.jsx)(E.a.Text,{id:"with",children:"with"}),Object(k.jsx)(N.a,{placeholder:n.new,onChange:function(e){return r(Object(S.a)(Object(S.a)({},n),{},{new:e.currentTarget.value}))}})]})]})},I=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(y.fromPartial(e))};return Object(k.jsx)("div",{children:Object(k.jsxs)(E.a,{className:"mb-3",children:[Object(k.jsx)(E.a.Text,{id:"json-path",children:"JSON Path"}),Object(k.jsx)(N.a,{placeholder:n.jsonPath,onChange:function(e){return r(Object(S.a)(Object(S.a)({},n),{},{jsonPath:e.currentTarget.value}))}})]})})},P=function(e){var n;return Object(k.jsxs)(x.a.Item,{eventKey:e.index.toString(),children:[Object(k.jsx)(x.a.Header,{children:e.transformer.name()}),Object(k.jsx)(x.a.Body,{children:(n=e.transformer,n instanceof p?Object(k.jsx)(C,{transformer:n,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):n instanceof y?Object(k.jsx)(I,{transformer:n,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):Object(k.jsx)(T,{}))})]},e.index.toString())},R=function(e){var n=e.onChange,t=Object(r.useState)(new b),a=Object(o.a)(t,2),c=a[0],i=a[1];Object(r.useEffect)((function(){n&&n(c)}),[c,n]);return Object(k.jsxs)("div",{children:[Object(k.jsx)(x.a,{children:c.transformers.map((function(e,n,t){return Object(k.jsx)(P,{index:n,transformer:e,onChange:function(e,n){return function(e,n){c.replaceTransformer(e,n),i((function(e){return b.clone(e)}))}(e,n)}},n.toString())}))}),Object(k.jsx)(m.a,{id:"dropdown-item-button",title:"Add node",onSelect:function(e){return function(e){if(e){var n=w.forName(e);n&&(c.addTransformer(n.newInstance()),i((function(e){return b.clone(e)})))}}(e)},children:function(){var e=[];return w.all().forEach((function(n,t,r){return e.push(Object(k.jsx)(O.a.Item,{as:"button",eventKey:t,children:n.newInstance().name()},t))})),e}()})]})},J=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(new b),i=Object(o.a)(c,2),s=i[0],h=i[1],d=Object(r.useState)(""),O=Object(o.a)(d,2),x=O[0],m=O[1];return Object(r.useEffect)((function(){m(s.transformData(t))}),[s,t]),Object(k.jsxs)("div",{className:"Main",children:[Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{md:{span:8,offset:2},children:Object(k.jsx)(j.a,{controlId:"inputTextArea",label:"Input",children:Object(k.jsx)(f.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},onChange:function(e){a(e.currentTarget.value)}})})})}),Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{md:{span:6,offset:3},children:Object(k.jsx)(R,{onChange:h})})}),Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{md:{span:8,offset:2},children:Object(k.jsx)(j.a,{controlId:"outputTextArea",label:"Output",children:Object(k.jsx)(f.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},value:x,readOnly:!0})})})})]})},A=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(s.a,{fluid:"md",children:Object(k.jsx)(J,{})})})};t(62);i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(A,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.2ca6f90e.chunk.js.map