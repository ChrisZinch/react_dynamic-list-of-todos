(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),o=n(1),l=n(2),u=n(4),i=n(3),m=(n(12),n(13),n(14),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",status:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.status,c=this.props,s=c.todos,o=c.selectUser,l=s;n&&(l=s.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})));var u=l;return"active"===a?u=l.filter((function(e){return!e.completed})):"completed"===a&&(u=s.filter((function(e){return e.completed}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Todos"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{name:"filterTodos",type:"text",value:n,className:"queryTitle",placeholder:"filter by title",onChange:function(t){return e.setState({query:t.target.value.trimLeft()})},required:!0}),r.a.createElement("select",{name:"select",value:a,onChange:function(t){return e.setState({status:t.target.value})}},r.a.createElement("option",{value:"All"},"Show all"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")),u.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item ".concat(!1===e.completed?"TodoList__item--unchecked":"TodoList__item--checked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",value:e.userId,onClick:function(){return o(e.userId)}},"User\xa0",e.userId))}))))}}]),n}(r.a.Component)),d="https://mate-api.herokuapp.com";function p(e){return fetch("".concat(d,"/users/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}n(15);var f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&p(this.props.userId).then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props,n=t.userId,a=t.clear;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",n),r.a.createElement("button",{className:"button button-clear",type:"button",onClick:a},"Clear")),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone))}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clear=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(d,"/todos/")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){return e.setState({todos:t.filter((function(e){return null!==e.userId}))})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{todos:t,selectUser:this.selectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(f,{userId:n,clear:this.clear}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.dc9b489a.chunk.js.map