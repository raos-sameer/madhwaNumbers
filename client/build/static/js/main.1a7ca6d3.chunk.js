(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){},41:function(e,t){},45:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(40),i=a.n(s),o=(a(50),a(13)),c=a(14),l=a(16),u=a(15),d=a(20),m=a.n(d),h=a(26),p=a(18),f=(a(30),a(88)),w=a(44),v=a(80),E=a(81),y=a(82),g=(a(25),function(e){var t={showAnswerDetails:!0,subCategory:[]},a=function(e){t.showAnswerDetails=!1,console.log(e),document.getElementById("DetailedAnswer").hidden=!1,document.getElementById("DetailedAnswerTitle").hidden=!1,document.getElementById("DetailedAnswerTitle").innerHTML="<div><p/><h1>"+e.title+"</h1></div>",document.getElementById("DetailedAnswer").innerHTML=e.subCategory.map((function(e){return'<div className="detailed"><p/><h3>'+e.itemName+"</h3><br/></div>"}))},s=Object(n.useState)("1"),i=Object(w.a)(s,2);i[0],i[1];return r.a.createElement("div",{className:"app"},r.a.createElement(v.a,null,r.a.createElement(E.a,{sm:{size:"auto",offset:1}},r.a.createElement(y.a,null,e.displayList)),r.a.createElement("div",{className:"scrollmenu"},e.showDetails&&(console.log("answer",e.showAnswer),e.showAnswer.map((function(e,t){return r.a.createElement("a",{href:"",key:t,value:e.title,onClick:function(t){t.preventDefault(),a(e)}},e.title)})))),r.a.createElement("div",{id:"DetailedAnswerTitle",className:"detailedTitle",hidden:t.showAnswerDetails}),r.a.createElement("div",{id:"DetailedAnswer",className:"detailed",hidden:t.showAnswerDetails})))}),b=a(83),A=a(84),O=a(85),j=a(86),k=a(87),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(A.a,{href:"/"},"Tatwa Information"),r.a.createElement(O.a,{className:"ml-auto",navbar:!0},r.a.createElement(j.a,null,r.a.createElement(k.a,{href:"/"},"Home")),r.a.createElement(j.a,null,r.a.createElement(k.a,{href:"/games"},"Games")),r.a.createElement(j.a,null,r.a.createElement(k.a,{href:"/others"},"Other Information")))))}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={questionList:[],answer:[],isLoading:!0,showDetails:!1},e.componentDidMount=function(){e.getQuestionList()},e.displayList=function(t){return t.length<1?null:t.map((function(t,a){return r.a.createElement("div",{key:a,className:"faq_blocks"},r.a.createElement(f.a,{key:a,"data-id":t.code,color:"success",tag:"a",href:"",onClick:e.showDetails.bind(Object(p.a)(e))},t.question))}))},e.showDetails=function(t){t.preventDefault();var a=t.currentTarget.dataset.id;e.setState({isLoading:!0}),e.getAnswer(a)},e}return Object(c.a)(a,[{key:"getQuestionList",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faqQuestionList");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({questionList:a,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAnswer",value:function(){var e=Object(h.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faqSpecificAnswer?code="+t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,this.setState({questionList:n,isLoading:!1,showDetails:!0,answer:n[0]&&n[0].category});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.questionList,n=e.showDetails,s=e.answer;return t?r.a.createElement("div",null," Loading...."):r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("p",null),r.a.createElement(g,{displayList:this.displayList(a),showDetails:n,showAnswer:s,questionList:a,showAnswerDetails:!1}))}}]),a}(r.a.Component),C=a(89),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={questionAnswer:[],duplicateQuestionAnswer:[],openedCards:0,previouslyOpenedCard:-1,buttonColor:"info"},e.componentDidMount=function(){var t=[],a=[],n=[];[{question:["Who is Ashwatthama","Who is Shuka"],answer:"Rudra"},{question:["Bheema","Hanuma"],answer:"Vaayu"},{question:["Who Killed Meghadoot Asur","Sumitra's brother"],answer:"Lakshman"},{question:["Poorvashrama Name Vasudeva","Paajaka"],answer:"Madhwacharya"},{question:["Son of Satyavati Devi","Veda vibhaaga Kartru"],answer:"Vedavyaas"}].map((function(e,r){return e.question.map((function(r){return t.push(r+";"+e.answer),a.push("Find Match"),n.push("info")}))})),t=e.random(t),e.setState({questionAnswer:t,duplicateQuestionAnswer:a,buttonColor:n})},e.random=function(e){for(var t=[],a=e.length,n=0;a--;)n=Math.floor(Math.random()*(a+1)),t.push(e[n]),e.splice(n,1);return console.log(t),t},e.displayMatrix=function(){var t=e.state,a=t.duplicateQuestionAnswer,n=t.buttonColor,s=Object(p.a)(e);return a.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(C.a,{color:n[t],key:t,value:t,onClick:function(e){e.preventDefault(),s.changeBtnText(t)}},e),r.a.createElement("p",null))}))},e.changeBtnText=function(t){var a=e.state,n=a.duplicateQuestionAnswer,r=a.questionAnswer,s=a.openedCards,i=a.previouslyOpenedCard,o=a.buttonColor;o[t]="warning",1===s?(s=0,r[t].split(";")[1]===r[i].split(";")[1]?(o[t]="success",o[i]="success",n[t]=r[t],n[i]=r[i]):(n[t]="Find Match",n[i]="Find Match",o[t]="info",o[i]="info")):(s++,n[t]=r[t].split(";")[0]),e.setState({duplicateQuestionAnswer:n,previouslyOpenedCard:t,openedCards:s})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),this.displayMatrix())}}]),a}(r.a.Component),x=a(41),M=a.n(x),S=a(42),T=a(4),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0,component:L}),r.a.createElement(T.a,{path:"/detail",exact:!0,component:g}),r.a.createElement(T.a,{path:"/games",exact:!0,component:q}),r.a.createElement(T.a,{path:"/others",exact:!0,component:M.a}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.1a7ca6d3.chunk.js.map