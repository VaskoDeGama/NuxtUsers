(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{352:function(e,t,r){"use strict";r.r(t);r(41),r(27),r(20),r(4),r(30);var n=r(11),c=(r(51),r(3)),o=r(91);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={serverPrefetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCookie();case 2:case"end":return t.stop()}}),t)})))()},components:{},middleware:"isAuthenticated",computed:l({},Object(o.c)({userId:"GET_USER_ID"})),methods:l({},Object(o.b)({getCookie:"GET_COOKIES"}))},j=r(53),h=r(241),d=r.n(h),v=r(349),w=r(353),m=r(354),component=Object(j.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-main",[t("v-container",{staticClass:"fill-height justify-center",attrs:{fluid:""}},[t("div",{staticClass:"text-center"},[t("nuxt-link",{attrs:{to:"/user/"+this.userId}},[this._v("User profile")])],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VApp:v.a,VContainer:w.a,VMain:m.a})}}]);