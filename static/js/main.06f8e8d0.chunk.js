(this.webpackJsonpnagini=this.webpackJsonpnagini||[]).push([[0],{74:function(e,n,t){},75:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(16),i=t.n(c),s=(t(74),t(101)),o=(t(75),t(6)),u=t(67),l=t(104),j=t(99),f=t(64),h=t(10),d=t(12),b=function(){function e(){Object(h.a)(this,e),this._transformers=[]}return Object(d.a)(e,[{key:"transformers",get:function(){return this._transformers}},{key:"addTransformer",value:function(e){this._transformers.push(e)}},{key:"replaceTransformer",value:function(e,n){this._transformers[e]&&(this._transformers[e]=n)}},{key:"removeTransformer",value:function(e){this._transformers[e]&&this._transformers.splice(e,1)}},{key:"transformData",value:function(e){var n=e;return this.transformers.forEach((function(e,t,r){n=e.transformData(n)})),n}},{key:"name",value:function(){return"Transform Engine"}}],[{key:"clone",value:function(n){var t=new e;return t._transformers=n.transformers,t}}]),e}(),O=t(68),v=t(103),m=t(98),x=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"transformData",value:function(e){return e.replace(/\\(.?)/g,(function(e,n){return"\\"===n?"\\":"n"===n?"\n":"t"===n?"\t":""===n?"":n}))}},{key:"name",value:function(){return"Unescape"}}]),e}(),g=function(){function e(){Object(h.a)(this,e),this.permissive=!1}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Beautify"}},{key:"transformData",value:function(e){return this.permissive?this.transformPermissively(e):this.transformNormal(e)}},{key:"transformPermissively",value:function(e){try{var n=t(76).parse(e);return JSON.stringify(n,null,4)}catch(r){return"Invalid JSON string"}}},{key:"transformNormal",value:function(e){try{var n=JSON.parse(e);return JSON.stringify(n,null,4)}catch(t){return"Invalid JSON string"}}}],[{key:"fromPartial",value:function(n){var t,r=new e;return r.permissive=null!==(t=n.permissive)&&void 0!==t&&t,r}}]),e}(),p=function(){function e(){Object(h.a)(this,e),this.old="",this.new="",this.useRegEx=!1}return Object(d.a)(e,[{key:"name",value:function(){return"Replace"}},{key:"transformData",value:function(e){if(0===this.old.length)return e;if(!this.useRegEx)return e.replaceAll(this.old,this.new);try{return e.replaceAll(new RegExp(this.old,"g"),this.new)}catch(n){return n instanceof TypeError?"Invalid RegEx":n.message}}}],[{key:"fromPartial",value:function(n){var t,r,a,c=new e;return c.old=null!==(t=n.old)&&void 0!==t?t:"",c.new=null!==(r=n.new)&&void 0!==r?r:"",c.useRegEx=null!==(a=n.useRegEx)&&void 0!==a&&a,c}}]),e}(),y=t(57),w=t.n(y),k=function(){function e(){Object(h.a)(this,e),this.jsonPath=""}return Object(d.a)(e,[{key:"name",value:function(){return"JSON Path Query"}},{key:"transformData",value:function(e){if(0===this.jsonPath.length)return e;try{e=e.replaceAll("\n","");var n=JSON.parse(e);return w.a.query(n,this.jsonPath).toString()}catch(t){return"Invalid JSON string"}}}],[{key:"fromPartial",value:function(n){var t,r=new e;return r.jsonPath=null!==(t=n.jsonPath)&&void 0!==t?t:"",r}}]),e}(),T=function(){function e(n){Object(h.a)(this,e),this.newInstance=void 0,this.newInstance=n}return Object(d.a)(e,null,[{key:"forName",value:function(e){return this.allTransformers.get(e)}},{key:"all",value:function(){return this.allTransformers}}]),e}();T.allTransformers=new Map([["unescape",new T((function(){return new x}))],["jsonbeautify",new T((function(){return new g}))],["jsonpath",new T((function(){return new k}))],["replace",new T((function(){return new p}))]]);var C=t(69),S=t(60),N=t(102),P=t(1),E=function(){return Object(P.jsx)("div",{children:"No option available"})},I=t(2),R=t(97),J=t(62),A=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(p.fromPartial(e))};return Object(P.jsxs)("div",{children:[Object(P.jsxs)(R.a,{className:"mb-3",children:[Object(P.jsx)(R.a.Text,{id:"replace",children:"Replace"}),Object(P.jsxs)(m.a,{id:"isRegex",title:n.useRegEx?"regex":"text",variant:"outline-secondary",onSelect:function(e){return r(Object(I.a)(Object(I.a)({},n),{},{useRegEx:"regex"===e}))},children:[Object(P.jsx)(O.a.Item,{eventKey:"text",children:"text"}),Object(P.jsx)(O.a.Item,{eventKey:"regex",children:"regex"})]}),n.useRegEx&&Object(P.jsx)(R.a.Text,{children:"/"}),Object(P.jsx)(J.a,{placeholder:n.old,onChange:function(e){return r(Object(I.a)(Object(I.a)({},n),{},{old:e.currentTarget.value}))}}),n.useRegEx&&Object(P.jsx)(R.a.Text,{children:"/g"})]}),Object(P.jsxs)(R.a,{className:"mb-3",children:[Object(P.jsx)(R.a.Text,{id:"with",children:"with"}),Object(P.jsx)(J.a,{placeholder:n.new,onChange:function(e){return r(Object(I.a)(Object(I.a)({},n),{},{new:e.currentTarget.value}))}})]})]})},_=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(k.fromPartial(e))};return Object(P.jsx)("div",{children:Object(P.jsxs)(R.a,{className:"mb-3",children:[Object(P.jsx)(R.a.Text,{id:"json-path",children:"JSON Path"}),Object(P.jsx)(J.a,{placeholder:n.jsonPath,onChange:function(e){return r(Object(I.a)(Object(I.a)({},n),{},{jsonPath:e.currentTarget.value}))}})]})})},D=t(100),B=t(63),H=t.n(B),K=function(e){var n=e.transformer,t=e.onChange,r=function(e){t&&t(g.fromPartial(e))};return Object(P.jsx)("div",{children:Object(P.jsxs)("label",{children:[Object(P.jsx)(H.a,{defaultChecked:!1,icons:!1,onChange:function(e){return r(Object(I.a)(Object(I.a)({},n),{},{permissive:e.currentTarget.checked}))}}),Object(P.jsx)("span",{children:"Permissive"})]})})},M=function(e){var n,t;return Object(P.jsxs)(j.a,{children:[Object(P.jsx)(f.a,{md:{span:11},children:Object(P.jsxs)(v.a.Item,{eventKey:e.index.toString(),children:[Object(P.jsx)(v.a.Header,{children:e.transformer.name()}),Object(P.jsx)(v.a.Body,{children:(t=e.transformer,t instanceof p?Object(P.jsx)(A,{transformer:t,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):t instanceof k?Object(P.jsx)(_,{transformer:t,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):t instanceof g?Object(P.jsx)(K,{transformer:t,onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,e.index,n)}}):Object(P.jsx)(E,{}))})]},e.index.toString())}),Object(P.jsx)(f.a,{md:{span:1},children:Object(P.jsx)(N.a,{trigger:"click",rootClose:!0,placement:"right",overlay:(n=function(){document.body.click(),e.onRemove&&e.onRemove(e.index)},Object(P.jsxs)(C.a,{id:"popover-basic",children:[Object(P.jsx)(C.a.Header,{children:"Are you sure?"}),Object(P.jsx)(C.a.Body,{children:Object(P.jsx)(S.a,{variant:"danger",as:"h5",onClick:function(){return n()},children:"Yes, delete!"})})]})),children:Object(P.jsx)(S.a,{variant:"danger",children:Object(P.jsx)(D.a,{})})})})]})},q=function(e){var n=e.onChange,t=Object(r.useState)(new b),a=Object(o.a)(t,2),c=a[0],i=a[1];Object(r.useEffect)((function(){n&&n(c)}),[c,n]);return Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a,{children:c.transformers.map((function(e,n,t){return Object(P.jsx)(M,{index:n,transformer:e,onChange:function(e,n){return function(e,n){c.replaceTransformer(e,n),i((function(e){return b.clone(e)}))}(e,n)},onRemove:function(e){return function(e){c.removeTransformer(e),i((function(e){return b.clone(e)}))}(e)}},n.toString())}))}),Object(P.jsx)(m.a,{id:"dropdown-item-button",title:"Add node",onSelect:function(e){return function(e){if(e){var n=T.forName(e);n&&(c.addTransformer(n.newInstance()),i((function(e){return b.clone(e)})))}}(e)},children:function(){var e=[];return T.all().forEach((function(n,t,r){return e.push(Object(P.jsx)(O.a.Item,{as:"button",eventKey:t,children:n.newInstance().name()},t))})),e}()})]})},Q=t(66),U=t.n(Q),Y=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(new b),i=Object(o.a)(c,2),s=i[0],h=i[1],d=Object(r.useState)(""),O=Object(o.a)(d,2),v=O[0],m=O[1];Object(r.useEffect)((function(){m(s.transformData(t))}),[s,t]);return Object(P.jsx)("div",{className:"Main",children:Object(P.jsxs)(j.a,{children:[Object(P.jsxs)(f.a,{md:{span:5},style:{maxHeight:"100vh",overflow:"scroll"},children:[Object(P.jsx)(u.a,{controlId:"inputTextArea",label:"Input",children:Object(P.jsx)(l.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},onChange:function(e){a(e.currentTarget.value)}})}),Object(P.jsx)(j.a,{children:Object(P.jsx)(f.a,{md:{span:10,offset:1},children:Object(P.jsx)(q,{onChange:h})})})]}),Object(P.jsx)(f.a,{md:{span:7},style:{maxHeight:"100vh",overflow:"scroll"},children:function(e){var n={};try{return n=JSON.parse(e),console.log("valid json"),Object(P.jsx)(U.a,{src:n})}catch(t){return console.log("invalid json",t),Object(P.jsx)(u.a,{controlId:"outputTextArea",label:"Output",children:Object(P.jsx)(l.a.Control,{as:"textarea",placeholder:"Paste",style:{height:"100px"},value:e,readOnly:!0})})}}(v)})]})})},z=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(s.a,{fluid:!0,children:Object(P.jsx)(Y,{})})})};t(89);i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(z,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.06f8e8d0.chunk.js.map