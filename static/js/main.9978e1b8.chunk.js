(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},110:function(e,t,n){"use strict";t.a=n.p+"static/media/pngtree-user-vector-avatar-png-image_1541962.60b92e78.jpeg"},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),a=n(55),c=n(1),s=(n(0),n(11)),i=n(15),o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(i.b)(o)((function(t){var n=t.isAuth,i=Object(a.a)(t,["isAuth"]);return n?Object(c.jsx)(e,Object(r.a)({},i)):Object(c.jsx)(s.a,{to:"/login"})}))}},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(137),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"8c49b133-928a-4a57-b997-bbf0ea6abb17"}}),c={getUsers:function(e,t){return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("/follow/".concat(e))},unfollowUser:function(e){return a.delete("/follow/".concat(e))}},s={getProfile:function(e){return a.get("/profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("/profile",e)}},i={setProfile:function(e){return console.warn("Obsolete method.Please use profileApi object"),s.getProfile(e)},me:function(){return a.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptcha:function(){return a.get("/security/get-captcha-url")}}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(33),a=n(3),c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:"ADD_NEW_MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_MESSAGE":var n=t.message;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},138:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB",selectedPage:"Users_selectedPage__J63sh"}},17:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},170:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),c=n(16),s=n(3),i=n(12),o=n(59),u=n(37),l="SET_USER_DATA",f="GET_CAPTCHA_URL_SUCCESS",j={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){return{type:l,data:{userId:e,email:t,login:n,isAuth:r}}},b=function(e){return{type:f,url:e}},p=function(e){return function(t){i.b.getProfile(e).then((function(e){t(Object(o.g)(e.data))}))}},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,o=r.email,t(d(c,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:if(0!==(o=a.sent).data.resultCode){a.next=8;break}return a.next=6,s(O());case 6:a.next=11;break;case 8:10===o.data.resultCode&&s(m()),l=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(u.a)("login",{email:l}));case 11:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptcha();case 2:n=e.sent,r=n.data.url,t(b(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),t.data);case f:return Object(s.a)(Object(s.a)({},e),{},{captchaUrl:t.url});default:return e}}},294:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(170),n(69)),c=n.n(a),s=n(0),i=n.n(s),o=(n(100),n(10)),u=n(11),l=n(13),f=n(39),j=n(40),d=n(44),b=n(43),p=n(17),O=n.n(p);var h=function(){return Object(r.jsxs)("nav",{className:O.a.nav,children:[Object(r.jsx)("div",{className:"".concat(O.a.item," ").concat(O.a.active),children:Object(r.jsx)(l.b,{to:"/profile",activeClassName:O.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(l.b,{to:"/dialogs",activeClassName:O.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(l.b,{to:"/news",activeClassName:O.a.active,children:"News"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(l.b,{to:"/music",activeClassName:O.a.active,children:"Music"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(l.b,{to:"/settings",activeClassName:O.a.active,children:"Settings"})}),Object(r.jsx)("div",{className:O.a.item,children:Object(r.jsx)(l.b,{to:"/users",activeClassName:O.a.active,children:"Users"})})]})},g=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Settings"})})},m=n(15),v=n(9),x=n.n(v),w=n(16),E=n(33),P=n(3),A=n(12),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},C={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},y=function(e){return{type:"FOLLOW",userId:e}},U=function(e){return{type:"UNFOLLOW",userId:e}},N=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},_=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,id:t}},k=function(){var e=Object(w.a)(x.a.mark((function e(t,n,r,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:0===e.sent.data.resultCode&&t(a(n)),t(_(!1,n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:Object(E.a)(t.users)});case"SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUserCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.id]):Object(E.a)(e.followingInProgress.filter((function(e){return e!==t.id})))})}return e},L=n(99),z=n(74),B=n.n(z),D=function(e){for(var t=e.totalItemsCount,n=e.portionSize,a=e.currentPage,c=e.onPageChanged,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/n),f=Object(s.useState)(1),j=Object(L.a)(f,2),d=j[0],b=j[1],p=(d-1)*n+1,O=d*n;return Object(r.jsxs)("div",{className:B.a.paginator,children:[d>1&&Object(r.jsx)("button",{onClick:function(){return b(d-1)},children:"Previous"}),o.filter((function(e){return e>=p&&e<=O})).map((function(e){return Object(r.jsxs)("span",{className:a===e?B.a.currentPage:B.a.page,onClick:function(t){c(e)},children:[e," "]},e)})),l>d&&Object(r.jsx)("button",{onClick:function(){return b(d+1)},children:"Next"}),Object(r.jsx)("div",{})]})},G=n(138),Q=n.n(G),R=n(110),V=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(l.b,{to:"/profile/".concat(t.id),children:Object(r.jsx)("img",{src:null!==t.photos.small?t.photos.small:R.a,className:Q.a.userPhoto,alt:"img"})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsx)("span",{children:Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status?t.status:" No status"})]})})]},t.id)},W=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(D,{totalItemsCount:e.totalUserCount,portionSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.users.map((function(t){return Object(r.jsx)(V,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))]})},M=n(42),Z=n(111),F=n(139),H=function(e){return e.usersPage.users},Y=function(e){return e.usersPage.pageSize},J=function(e){return e.usersPage.totalUserCount},K=function(e){return e.usersPage.currentPage},X=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.followingInProgress},$=Object(F.a)(H,(function(e){return e.filter((function(e){return!0}))})),ee=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(M.a,{}):null,Object(r.jsx)(W,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),te=Object(o.d)(Object(m.b)((function(e){return{users:H(e),pageSize:Y(e),totalUserCount:J(e),currentPage:K(e),isFetching:X(e),followingInProgress:q(e),superUsers:$(e)}}),{setCurrentPage:N,getUsers:function(e,t){return function(){var n=Object(w.a)(x.a.mark((function n(r){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(N(e)),n.next=4,A.d.getUsers(e,t);case 4:a=n.sent,r(I(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USER_COUNT",totalCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,k(n,e,A.d.followUser.bind(A.d),y);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,k(n,e,A.d.unfollowUser.bind(A.d),U);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Z.a)(ee),ne=n(96),re=n.n(ne);var ae=function(e){return Object(r.jsxs)("header",{className:re.a.header,children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(r.jsx)("div",{className:re.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(l.b,{to:"/login",children:"Login"})})]})},ce=n(22),se=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(r.jsx)(ae,Object(P.a)({},this.props))}}]),n}(i.a.Component),ie=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:ce.f,getAuthUserData:ce.b,logout:ce.e})(se),oe=n(133),ue=n(134),le=n(78),fe=n(60),je=n(51),de=n.n(je),be=Object(ue.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(oe.a,{placeholder:"Email",name:"email",component:fe.a,validate:[le.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(oe.a,{placeholder:"Password",name:"password",component:fe.a,validate:[le.b],type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(oe.a,{type:"checkbox",name:"rememberMe",component:"input"}),"remember me"]}),e.captcha&&Object(r.jsx)("img",{src:e.captcha,alt:"captcha"}),e.captcha&&Object(r.jsx)(oe.a,{placeholder:"Symbols from image",name:"captcha",component:fe.a}),e.error&&Object(r.jsx)("div",{className:de.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),pe=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:ce.d})((function(e){return e.isAuth?Object(r.jsx)(u.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captcha:e.captchaUrl})]})}));function Oe(e){return function(t){return Object(r.jsx)(i.a.Suspense,{fallback:Object(r.jsx)(M.a,{}),children:Object(r.jsx)(e,Object(P.a)({},t))})}}var he=i.a.lazy((function(){return n.e(3).then(n.bind(null,313))})),ge=i.a.lazy((function(){return n.e(4).then(n.bind(null,314))})),me=i.a.lazy((function(){return n.e(6).then(n.bind(null,311))})),ve=i.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),xe=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ie,{}),Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(u.a,{to:"/profile"})}}),Object(r.jsx)(u.b,{path:"/dialogs",render:Oe(ge)}),Object(r.jsx)(u.b,{path:"/profile/:userId?",render:Oe(he)}),Object(r.jsx)(u.b,{path:"/news",render:Oe(me)}),Object(r.jsx)(u.b,{path:"/music",render:Oe(ve)}),Object(r.jsx)(u.b,{path:"/settings",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(u.b,{path:"/users",render:function(){return Object(r.jsx)(te,{})}}),Object(r.jsx)(u.b,{path:"/login",render:function(){return Object(r.jsx)(pe,{})}})]})]}):Object(r.jsx)(M.a,{})}}]),n}(i.a.Component),we={initialized:!1},Ee=n(59),Pe=n(132),Ae=n(141),Se=n(135),Ce=Object(o.c)({profilePage:Ee.b,messagesPage:Pe.b,usersPage:T,auth:ce.a,form:Se.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}}}),ye=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Ue=Object(o.e)(Ce,ye(Object(o.a)(Ae.a))),Ne=Object(o.d)(u.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{InitializeApp:function(){return function(e){e(Object(ce.b)()).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(xe),Ie=function(){return Object(r.jsx)(l.a,{children:Object(r.jsx)(m.a,{store:Ue,children:Object(r.jsx)(Ne,{})})})};c.a.render(Object(r.jsx)(Ie,{}),document.getElementById("root"))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=n(295);n(0);function c(){return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{color:"primary"})})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return m}));var r=n(72),a=n(9),c=n.n(a),s=n(16),i=n(33),o=n(3),u=n(12),l=n(22),f=n(37),j={posts:[{id:1,message:"Its a first post",likesCount:3},{id:2,message:"Its a second post",likesCount:3},{id:3,message:"Its a third post",likesCount:3},{id:4,message:"Its a fourth post",likesCount:3},{id:5,message:"Its a fifth post",likesCount:3}],newText:"",profile:null,status:""},d=function(e){return{type:"ADD-POST",postMessage:e}},b=function(e){return{type:"SET_USER_PROFILE",profile:e}},p=function(e){return{type:"SET-STATUS",status:e}},O=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n,a){var s,i,o,j;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}s&&n(Object(l.c)(s)),t.next=13;break;case 8:return o=i.data.messages[0].split("->"),j="MainLink"===(j=o[1].split(")")[0])?"mainLink":j.toLowerCase(),n(Object(f.a)("edit-profile",{contacts:Object(r.a)({},j,i.data.messages[0].split("(")[0])})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.postMessage.trim();if(n){var r={id:5,message:t.postMessage,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[r]),newText:""})}return e;case"CHANGE-TEXT":return e.newText=t.text,Object(o.a)({},e);case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return e.profile?Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})}):Object(o.a)({},e);default:return Object(o.a)({},e)}}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(55),c=n(1),s=n(51),i=n.n(s),o=(n(0),function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(s?i.a.error:""),children:[Object(c.jsx)("div",{children:a}),s&&Object(c.jsx)("span",{children:r})]})}),u=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},t),e),n))}))}},74:function(e,t,n){e.exports={page:"Paginator_page__z2MaR",currentPage:"Paginator_currentPage__14fUc"}},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Filed is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}}},96:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}}},[[294,1,2]]]);
//# sourceMappingURL=main.9978e1b8.chunk.js.map