(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},50:function(e,t,a){e.exports=a(94)},55:function(e,t,a){},77:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(47),s=a.n(o),l=(a(55),a(12)),i=a(13),c=a(15),u=a(14),m=a(23),d=a.n(m),h=a(28),p=a(18),f=a(104),v=a(95),w=a(96),g=a(97),E=a(98),y=(a(24),function(e){var t={showAnswerDetails:!0,subCategory:[]},a=function(e){t.showAnswerDetails=!1,document.getElementById("DetailedAnswer").hidden=!1,document.getElementById("DetailedAnswerTitle").hidden=!1,document.getElementById("DetailedAnswerTitle").innerHTML="<h3>"+e.title+"</h3>",document.getElementById("DetailedAnswer").innerHTML=e.subCategory.map((function(e){return"<h5>"+e.itemName+"</h5>"})).join("")};return r.a.createElement("div",{className:"app"},r.a.createElement(v.a,null,r.a.createElement(w.a,{sm:{size:"auto",offset:1}},r.a.createElement(g.a,null,e.displayList)),r.a.createElement("div",{className:"scrollmenu"},e.showDetails&&e.showAnswer.map((function(e,t){return r.a.createElement("a",{href:"",key:t,value:e.title,onClick:function(t){t.preventDefault(),a(e)}},e.title)}))),r.a.createElement(E.a,null,r.a.createElement("div",{id:"DetailedAnswerTitle",className:"detailedTitle",hidden:t.showAnswerDetails}),r.a.createElement("div",{id:"DetailedAnswer",className:"detailed",hidden:t.showAnswerDetails}))))}),b=a(99),C=a(100),O=a(101),A=a(102),j=a(103),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(C.a,{href:"/"},"Tatwa Information"),r.a.createElement(O.a,{className:"ml-auto",navbar:!0},r.a.createElement(A.a,null,r.a.createElement(j.a,{href:"/"},"Home")),r.a.createElement(A.a,null,r.a.createElement(j.a,{href:"/games"},"Games")),r.a.createElement(A.a,null,r.a.createElement(j.a,{href:"/others"},"Other Information")))))}}]),a}(n.Component),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={questionList:[],answer:[],isLoading:!0,showDetails:!1},e.componentDidMount=function(){e.getQuestionList()},e.displayList=function(t){return t.length<1?null:t.map((function(t,a){return r.a.createElement("div",{key:a,className:"faq_blocks"},r.a.createElement(f.a,{key:a,"data-id":t.code,color:"success",tag:"a",href:"",onClick:e.showDetails.bind(Object(p.a)(e))},t.question))}))},e.showDetails=function(t){t.preventDefault();var a=t.currentTarget.dataset.id;e.setState({isLoading:!0}),e.getAnswer(a)},e}return Object(i.a)(a,[{key:"getQuestionList",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faqQuestionList");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({questionList:a,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAnswer",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faqSpecificAnswer?code="+t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,this.setState({questionList:n,isLoading:!1,showDetails:!0,answer:n[0]&&n[0].category});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.questionList,n=e.showDetails,o=e.answer;return t?r.a.createElement("div",null," Loading...."):r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("p",null),r.a.createElement(y,{displayList:this.displayList(a),showDetails:n,showAnswer:o,questionList:a,showAnswerDetails:!1}))}}]),a}(r.a.Component),D=a(25),S=a.n(D),M=(a(77),a(105)),q=a(109),L=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={questionAnswer:[],duplicateQuestionAnswer:[],openedCards:0,score:0,previouslyOpenedCard:-1,buttonColor:[],winner:[],showWinnerText:!1},e.componentDidMount=function(){var t=[],a=[],n=[];[{question:["Moola Roopa Of Ashwatthama","Moola Roopa Of Shuka"],answer:"Rudra"},{question:["Moola Roopa Of Bheema","Moola Roopa Of Hanuma"],answer:"Vaayu"},{question:["Who Killed Meghadoot Asur","Shatrughna's brother"],answer:"Lakshman"},{question:["Poorvashrama Name Vasudeva","Paajaka"],answer:"Madhwacharya"},{question:["Son of Satyavati Devi","Veda vibhaaga Kartru"],answer:"Vedavyaas"}].map((function(e,r){return e.question.map((function(r){return t.push(r+";"+e.answer),a.push("Find Match"),n.push("info")}))})),t=e.random(t),e.setState({questionAnswer:t,duplicateQuestionAnswer:a,buttonColor:n})},e.random=function(e){for(var t=[],a=e.length,n=0;a--;)n=Math.floor(Math.random()*(a+1)),t.push(e[n]),e.splice(n,1);return t},e.displayMatrix=function(){var t=e.state,a=t.duplicateQuestionAnswer,n=t.buttonColor,o=Object(p.a)(e);return a.map((function(e,t){return r.a.createElement("div",{className:"btn-arrange"},r.a.createElement(M.a,{color:n[t],key:t,disabled:"warning"===n[t]||"success"===n[t],value:t,onClick:function(e){e.preventDefault(),o.changeBtnText(t)}},e))}))},e.changeBtnText=function(t){var a=e.state,n=a.buttonColor,r=a.duplicateQuestionAnswer,o=a.questionAnswer,s=a.score;n[t]="warning",s++,r[t]=o[t].split(";")[0],setTimeout((function(){e.validate(t)}),2e3),e.setState({buttonColor:n,score:s,duplicateQuestionAnswer:r})},e.validate=function(t){var a=e.state,n=a.duplicateQuestionAnswer,r=a.questionAnswer,o=a.openedCards,s=a.previouslyOpenedCard,l=a.buttonColor,i=a.winner,c=a.showWinnerText;1===o?(o=0,r[t].split(";")[1]===r[s].split(";")[1]?(l[t]="success",l[s]="success",i.push(t),i.push(s),i.length===r.length&&(c=!0),n[t]=r[t],n[s]=r[s]):(n[t]="Find Match",n[s]="Find Match",l[t]="info",l[s]="info")):(o++,n[t]=r[t].split(";")[0]),e.setState({duplicateQuestionAnswer:n,previouslyOpenedCard:t,openedCards:o,showWinnerText:c,winner:i})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.score,a=e.showWinnerText;return r.a.createElement("div",{className:"arrangeButtons"},r.a.createElement(v.a,null,"Score: (No. of clicks): ",t),r.a.createElement(v.a,null,this.displayMatrix()),a&&r.a.createElement(v.a,null,r.a.createElement(q.a,{color:"danger"},"Congratulations ---- Winner")))}}]),a}(r.a.Component),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMemoryGame:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showMemoryGame,t=this;return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("p",null),r.a.createElement("div",{className:"app"},r.a.createElement(v.a,null,r.a.createElement(w.a,{sm:{size:"auto",offset:1}},r.a.createElement(g.a,null,r.a.createElement(f.a,{key:"Memory",color:"success",tag:"a",href:"",onClick:function(a){a.preventDefault(),e=!0,t.setState({showMemoryGame:!0})}},"Memory Game"),r.a.createElement(f.a,null,"Find Odd Man Out --- Coming Soon"))),e&&r.a.createElement(L,null))))}}]),a}(r.a.Component),N=a(106),B=a(107),Q=a(108),I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={faqSection:{},items:{question:"",code:"",category:[{title:"",subCategory:[{itemName:""}]}]}},e.handleChange=function(t){var a=e.state.items;"title"===t.target.name?a.category[0].title=t.target.value:"subCategory"===t.target.name?(a.category[0].subCategory[t.target.id].itemName=t.target.value,a.category[0].subCategory[t.target.id].index=t.target.id):a[t.target.name]=t.target.value,e.setState({items:a})},e.showitemNameTextBoxes=function(t){return e.state.items.category[0].subCategory.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(N.a,{type:"text",name:"subCategory",id:a,index:a,placeholder:"Enter Subcategory",onChange:e.handleChange}))}))},e.addItem=function(){var t=e.state.items;t.category[0].subCategory.push({itemName:""}),e.setState({items:t})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.items,n=Object(p.a)(e);S()({url:"/faq/saveAnswer/",method:"POST",data:a}).then((function(e){console.log("Data saved",e.data.error);var t=e.data.error?"error":"success";n.setState({showText:t})})).catch((function(){console.log("Some error occurred")}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{xs:"6"},r.a.createElement("div",{className:"headersection"},r.a.createElement("h3",null,"Add new Question Section"),r.a.createElement("div",{className:"mainsection"},r.a.createElement(B.a,null,r.a.createElement(Q.a,null,r.a.createElement(N.a,{type:"text",name:"code",id:"code",placeholder:"Enter Section Code (eg: avatars)",onChange:this.handleChange})),r.a.createElement(Q.a,null,r.a.createElement(N.a,{type:"text",name:"title",id:"categoryTitle",placeholder:"Enter Category Title (eg: Mahabharata)",onChange:this.handleChange})),r.a.createElement(Q.a,null),r.a.createElement(Q.a,null,this.showitemNameTextBoxes()),r.a.createElement(Q.a,null,r.a.createElement(M.a,{onClick:this.addItem},"Add another subCategory")),r.a.createElement(Q.a,null,r.a.createElement(M.a,{onClick:this.handleSubmit},"Submit")))))))))}}]),a}(r.a.Component),W=a(48),G=a(7),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W.a,null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:x}),r.a.createElement(G.a,{path:"/detail",exact:!0,component:y}),r.a.createElement(G.a,{path:"/games",exact:!0,component:T}),r.a.createElement(G.a,{path:"/others",exact:!0,component:I}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(93);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.39168714.chunk.js.map