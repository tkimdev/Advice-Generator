(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(12),s=c.n(i),o=c(13),r=c(14),d=c(17),h=c(16),u=c(15),l=c.n(u),v=(c(40),c(1)),j=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={advice:""},e.fetchAdvice=function(){l.a.get("https://api.adviceslip.com/advice").then((function(t){var c=t.data.slip.advice;e.setState({advice:c})})).catch((function(e){console.log(e)}))},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h1",{className:"heading",children:this.state.advice}),Object(v.jsx)("button",{className:"button",onClick:this.fetchAdvice,children:Object(v.jsx)("span",{children:"GIVE ME ADVICE!"})})]})})}}]),c}(a.a.Component);s.a.render(Object(v.jsx)(j,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.152e1143.chunk.js.map