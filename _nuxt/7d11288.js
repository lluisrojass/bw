(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";var r=n(69),o=n.n(r);n.d(t,"default",(function(){return o.a}))},102:function(e,t,n){"use strict";var r=n(70),o=n.n(r);n.d(t,"default",(function(){return o.a}))},103:function(e,t,n){"use strict";var r=n(71),o=n.n(r);n.d(t,"default",(function(){return o.a}))},104:function(e,t,n){"use strict";var r=n(72),o=n.n(r);n.d(t,"default",(function(){return o.a}))},105:function(e,t,n){"use strict";var r=n(73),o=n.n(r);n.d(t,"default",(function(){return o.a}))},106:function(e,t,n){"use strict";var r=n(74),o=n.n(r);n.d(t,"default",(function(){return o.a}))},107:function(e,t,n){"use strict";var r=n(75),o=n.n(r);n.d(t,"default",(function(){return o.a}))},108:function(e,t,n){"use strict";var r=n(102),o=n(6);var component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$style.row},[e._t("default")],2)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.a=component.exports},138:function(e,t,n){"use strict";n(82);var r=n(25),o=n(78),l={mixins:[r.b,o.a],props:{size:{required:!1,type:Number,default:1,validator:function(e){return e>=1&&e<=6}}}},c=n(104),f=n(6);var component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h"+e.$props.size,{tag:"component",class:["text",e.textSizeClass,e.textVariantClass,e.$style.heading]},[e._t("default")],2)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.a=component.exports},142:function(e){e.exports=JSON.parse('{"404":"404, Not Found","5xx":"An Error Occurred","reportABug":{"href":"https://github.com/lluisrojass/photos/issues/new","text":"Report a Bug"}}')},143:function(e){e.exports=JSON.parse('{"home":{"href":"/","text":"Home"},"about":{"href":"/about","text":"About"},"monthly":{"href":"/monthly","text":"Monthly"}}')},146:function(e,t,n){"use strict";var r=n(53),o=n(76),l=n(25),c=n(56),f={components:{Link:o.a},props:{home:{type:Object,required:!0},about:{type:Object,required:!0},monthly:{type:Object,required:!0}},data:function(){return{TEXT_SIZES:l.a}},computed:{isAtHomePage:function(){return c.a.isHomePage(this.$route.fullPath)},isAtAboutPage:function(){return c.a.isAboutPage(this.$route.fullPath)},isAtMonthlyPage:function(){return c.a.isMonthlyPage(this.$route.fullPath)}}},d=n(106),v=n(6);var h=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Link",{class:e.$style.link,attrs:{to:e.$props.home.href,disabled:e.isAtHomePage,uppercase:!0,"text-size":e.TEXT_SIZES.SMALL}},[e._v(e._s(e.home.text))]),e._v(" "),n("Link",{class:e.$style.link,attrs:{to:e.monthly.href,disabled:e.isAtMonthlyPage,uppercase:!0,"text-size":e.TEXT_SIZES.SMALL}},[e._v(e._s(e.monthly.text))])],1)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null).exports,header=n(143),x={components:{Header:h,Region:r.b},data:function(){return{header:header,REGION_TYPES:r.a}}},y=n(107);var _=Object(v.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Region",{class:e.$style["header-container"],attrs:{type:e.REGION_TYPES.NO_VERTICAL_MARGIN}},[n("Header",e._b({},"Header",e.header,!1))],1),e._v(" "),n("Nuxt")],1)}),[],!1,(function(e){this.$style=y.default.locals||y.default}),null,null);t.a=_.exports},147:function(e,t,n){e.exports=n(148)},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,o=n(9),l=(n(82),n(34),n(35),n(136),{SMALL:0,LARGE:1,MEDIUM:3,NONE:2}),c=(r={},Object(o.a)(r,l.SMALL,"text--small"),Object(o.a)(r,l.LARGE,"text--large"),Object(o.a)(r,l.MEDIUM,"text--medium"),r);t.b={props:{textSize:{type:Number,validator:function(e){return Object.values(l).includes(e)},required:!1,default:l.NONE}},data:function(e){return{textSizeClass:c[e.textSize]}}}},26:function(e,t,n){"use strict";var r=n(53),o=n(108),l=n(76),c=n(25),f=n(138),d=n(142),v={components:{Link:l.a,Region:r.b,Heading:f.a,Row:o.a},layout:"error",props:{error:{type:Object,required:!0}},data:function(){return{TEXT_SIZES:c.a,errorModel:d}}},h=n(105),x=n(6);var component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Region",[n("Row",{class:[e.$style.center,e.$style["vertical-space"]]},[404===e.error.statusCode?n("Heading",[e._v("\n      "+e._s(e.errorModel[404])+"\n    ")]):n("Heading",[e._v("\n      "+e._s(e.errorModel["5xx"])+"\n    ")])],1),e._v(" "),n("Row",{class:e.$style.center},[n("Link",{attrs:{uppercase:!0,"text-size":e.TEXT_SIZES.MEDIUM,to:e.errorModel.reportABug.href}},[e._v("\n      "+e._s(e.errorModel.reportABug.text)+"\n    ")])],1),e._v(" "),n("Row",{class:e.$style.center})],1)}),[],!1,(function(e){this.$style=h.default.locals||h.default}),null,null);t.a=component.exports},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,o=n(9),l=(n(82),n(34),n(35),n(136),{NO_VERTICAL_MARGIN:1,LAST:2,NONE:0}),c=(r={},Object(o.a)(r,l.NO_VERTICAL_MARGIN,"region--no-vertical-margin"),Object(o.a)(r,l.LAST,"region--last"),r),f={props:{type:{type:Number,validator:function(e){return Object.values(l).includes(e)},required:!1,default:l.NONE}},data:function(e){return{classStyle:c[e.type]}}},d=n(101),v=n(6);var component=Object(v.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:[e.$style.region,e.$style[e.classStyle]]},[e._t("default")],2)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.b=component.exports},56:function(e,t,n){"use strict";var r=n(54),o=n(55),l=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"isAboutPage",value:function(t){return t===e.createAboutSlug()}},{key:"isHomePage",value:function(t){return t===e.createHomeSlug()}},{key:"isMonthlyPage",value:function(t){return t===e.createMonthlySlug()}},{key:"createMonthlySlug",value:function(){return"/monthly"}},{key:"createHomeSlug",value:function(){return"/"}},{key:"createAboutSlug",value:function(){return"/about"}},{key:"createAppPrefix",value:function(){return"/photos"}},{key:"createImageSlug",value:function(){return"/images"}},{key:"createImageDirPath",value:function(){return[e.createAppPrefix(),e.createImageSlug()].join("")}},{key:"createInternalImagePath",value:function(e){return["/image","/".concat(e)].join("")}}]),e}();t.a=l},69:function(e,t,n){e.exports={region:"region_1U3-K","region--no-vertical-margin":"region--no-vertical-margin_qpDcN","region--last":"region--last_13iWF"}},70:function(e,t,n){e.exports={row:"row_3KI6Z"}},71:function(e,t,n){e.exports={link:"link_1vvgQ","link--disabled":"link--disabled_2GvfQ","link--has-text":"link--has-text_3_Gn6"}},72:function(e,t,n){e.exports={heading:"heading_3t0uS"}},73:function(e,t,n){e.exports={center:"center_va63s","vertical-space":"vertical-space_2cLN0"}},74:function(e,t,n){e.exports={link:"link_Phcsb"}},75:function(e,t,n){e.exports={"header-container":"header-container_myzFJ"}},76:function(e,t,n){"use strict";var r=n(25),o=n(78),l={mixins:[r.b,o.a],props:{disabled:{type:Boolean,required:!1,default:!1},isForText:{type:Boolean,required:!1,default:!0},to:{type:String,required:!0}},data:function(e){return{isExternal:0===e.to.indexOf("http")}}},c=n(103),f=n(6);var component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.isExternal?"a":"NuxtLink",{tag:"component",class:["text",e.$style.link,e.textSizeClass,e.textVariantClass,e.$props.disabled?e.$style["link--disabled"]:"",e.$props.isForText?e.$style["link--has-text"]:""],attrs:{to:e.isExternal?void 0:e.to,href:e.isExternal?e.to:void 0,rel:e.isExternal?"noopener noreferrer nofollow":void 0,target:e.isExternal?"blank":void 0,tabIndex:e.$props.disabled?-1:0}},[e._t("default")],2)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.a=component.exports},78:function(e,t,n){"use strict";t.a={props:{uppercase:{type:Boolean,required:!1,default:!1},capitalize:{type:Boolean,required:!1,default:!1}},data:function(e){var t="";return e.uppercase?t="text--uppercase":e.capitalize&&(t="text--capitalize"),{textVariantClass:t}}}}},[[147,5,1,6]]]);