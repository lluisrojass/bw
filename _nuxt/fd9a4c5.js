(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(e,t,o){e.exports={col:"col_1ngpP","col--sm-0-8":"col--sm-0-8_3D8YJ","col--sm-1-8":"col--sm-1-8_3Gr_9","col--sm-2-8":"col--sm-2-8_1TZCt","col--sm-3-8":"col--sm-3-8_pNb9g","col--sm-4-8":"col--sm-4-8_mGuTt","col--sm-5-8":"col--sm-5-8_3WRUI","col--sm-6-8":"col--sm-6-8_BroAj","col--sm-7-8":"col--sm-7-8_2C4JK","col--sm-8-8":"col--sm-8-8_eveDV","col--md-0-12":"col--md-0-12_soWna","col--md-1-12":"col--md-1-12_1knHs","col--md-2-12":"col--md-2-12_3kqi8","col--md-3-12":"col--md-3-12_1KDRA","col--md-4-12":"col--md-4-12_31Gce","col--md-5-12":"col--md-5-12_1K78d","col--md-6-12":"col--md-6-12_3nJWW","col--md-7-12":"col--md-7-12_3ArzL","col--md-8-12":"col--md-8-12_3veUJ","col--md-9-12":"col--md-9-12_3Z50B","col--md-10-12":"col--md-10-12_cWnj_","col--md-11-12":"col--md-11-12_pqo1b","col--md-12-12":"col--md-12-12_3jxDa","col--lg-0-12":"col--lg-0-12_1DiBQ","col--lg-1-12":"col--lg-1-12_oI8Ul","col--lg-2-12":"col--lg-2-12_1A4Fa","col--lg-3-12":"col--lg-3-12_1DgLJ","col--lg-4-12":"col--lg-4-12_1lSNL","col--lg-5-12":"col--lg-5-12_10FqE","col--lg-6-12":"col--lg-6-12_1MXZv","col--lg-7-12":"col--lg-7-12_1MlS2","col--lg-8-12":"col--lg-8-12_3KOUm","col--lg-9-12":"col--lg-9-12_19O92","col--lg-10-12":"col--lg-10-12_1r-uA","col--lg-11-12":"col--lg-11-12_K-FsU","col--lg-12-12":"col--lg-12-12_1YA8d"}},193:function(e,t,o){e.exports={"picture-container":"picture-container_DD5j-",picture:"picture_3CdA7"}},195:function(e,t,o){"use strict";var r=o(192),n=o.n(r);o.d(t,"default",(function(){return n.a}))},196:function(e,t,o){"use strict";var r=o(193),n=o.n(r);o.d(t,"default",(function(){return n.a}))},197:function(e,t,o){"use strict";var r=o(54),n=o(55),l=o(56),c=function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,null,[{key:"createLargeImageDirPath",value:function(){return[l.a.createImageDirPath(),"/large"].join("")}},{key:"createSmallImageDirPath",value:function(){return[l.a.createImageDirPath(),"/small"].join("")}},{key:"createMediumImageDirPath",value:function(){return[l.a.createImageDirPath(),"/medium"].join("")}},{key:"createLargeImagePath",value:function(t){return[e.createLargeImageDirPath(),"/".concat(t,".jpeg")].join("")}},{key:"createMediumImagePath",value:function(t){return[e.createMediumImageDirPath(),"/".concat(t,".jpeg")].join("")}},{key:"createSmallImagePath",value:function(t){return[e.createSmallImageDirPath(),"/".concat(t,".jpeg")].join("")}}]),e}();t.a=c},209:function(e,t,o){"use strict";o(82);var r={props:{small:{type:Number,validator:function(e){return e>=0&&e<=8},required:!0},medium:{type:Number,validator:function(e){return e>=0&&e<=12},required:!0},large:{type:Number,validator:function(e){return e>=0&&e<=12},required:!0}}},n=o(195),l=o(6);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:[e.$style.col,e.$style["col--sm-"+e.$props.small+"-8"],e.$style["col--md-"+e.$props.medium+"-12"],e.$style["col--lg-"+e.$props.large+"-12"]]},[e._t("default")],2)}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);t.a=component.exports},210:function(e,t,o){"use strict";var r={props:{description:{type:String,required:!1,default:"A Black & White Square"},smallSrc:{type:String,required:!0},mediumSrc:{type:String,required:!1,default:void 0},largeSrc:{type:String,required:!1,default:void 0}}},n=o(196),l=o(6);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style["picture-container"]},[o("picture",{class:e.$style.picture},[e.largeSrc?o("source",{attrs:{srcset:e.largeSrc,media:"(min-width: 1200px)"}}):e._e(),e._v(" "),e.mediumSrc?o("source",{attrs:{srcset:e.mediumSrc,media:"(min-width: 800px)"}}):e._e(),e._v(" "),o("source",{attrs:{srcset:e.smallSrc,media:"(min-width: 0px)"}}),e._v(" "),o("img",{attrs:{src:e.largeSrc||e.mediumSrc||e.smallSrc,alt:e.description,loading:"lazy"},on:{load:function(t){return e.$emit("load")},error:function(t){return e.$emit("error")}}})])])}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);t.a=component.exports},212:function(e,t,o){e.exports={p:"p_2TiFA"}},213:function(e,t,o){e.exports={description:"description_2mBFS",spacer:"spacer_1m9Z4"}},221:function(e,t,o){"use strict";var r=o(212),n=o.n(r);o.d(t,"default",(function(){return n.a}))},222:function(e,t,o){var map={"./0052e1fe1616.json":223,"./023148fc1674.json":224,"./09e30ac459b5.json":225,"./0a64dc849bb9.json":226,"./0c1ce66179c7.json":227,"./1cc55121de33.json":228,"./1ea5b4294298.json":229,"./3777ba216260.json":230,"./46ac75b298ee.json":231,"./566221041bc3.json":232,"./5aa22fa1c925.json":233,"./65048339d835.json":234,"./6d822a6c354f.json":235,"./719a563bdf5e.json":236,"./74c0d9d9adf9.json":237,"./7d13cd65ae7f.json":238,"./8332e3dc3ffa.json":239,"./9656212ea3f2.json":240,"./983597645e20.json":241,"./ab2b0a57470a.json":242,"./b179f791d9aa.json":243,"./b17f5e5865cc.json":244,"./b570525d8dfc.json":245,"./b571b9f66a6d.json":246,"./c38784ffbbad.json":247,"./cfa3c68203fb.json":248,"./d8349e0fdb1d.json":249,"./e587cedd4091.json":250,"./ea1418554126.json":251,"./f55ab4e31c48.json":252,"./f77b2837485c.json":253};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=222},223:function(e){e.exports=JSON.parse('{"id":"0052e1fe1616","takenTimestamp":1624922355000,"importTimestamp":1630969443855,"description":null,"location":{"lat":40.73562,"lon":-73.98993,"timeZone":"America/New_York","readable":"Union Square Park, New York, New York"}}')},224:function(e){e.exports=JSON.parse('{"id":"023148fc1674","takenTimestamp":1636757671000,"importTimestamp":1637189792770,"description":null,"location":{"altitude":0.3024635312632407,"lat":38.887781,"lon":-77.047439,"timeZone":"America/New_York","readable":"Korean War Veterans Memorial, Washington DC"}}')},225:function(e){e.exports=JSON.parse('{"id":"09e30ac459b5","takenTimestamp":1629680846000,"importTimestamp":1630970551284,"description":null,"location":{"lat":40.640187,"lon":-73.965508,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},226:function(e){e.exports=JSON.parse('{"id":"0a64dc849bb9","takenTimestamp":1631481289000,"importTimestamp":1632585628006,"description":null,"location":{"lat":40.735512,"lon":-73.990355,"timeZone":"America/New_York","readable":"Union Square Park, New York, New York"}}')},227:function(e){e.exports=JSON.parse('{"id":"0c1ce66179c7","takenTimestamp":1636751682000,"importTimestamp":1637189628208,"description":null,"location":{"altitude":29.34814453125,"lat":38.886967,"lon":-77.032219,"timeZone":"America/New_York","readable":"United States Holocaust Memorial Museum, Washington DC"}}')},228:function(e){e.exports=JSON.parse('{"id":"1cc55121de33","takenTimestamp":1636757895000,"importTimestamp":1637189889690,"description":null,"location":{"altitude":12.50445937690898,"lat":38.888508,"lon":-77.049058,"timeZone":"America/New_York","readable":"Washington DC"}}')},229:function(e){e.exports=JSON.parse('{"id":"1ea5b4294298","takenTimestamp":1634696617000,"importTimestamp":1636223305358,"description":"..Hogwash! ..Balderdash!","location":{"altitude":13.303371435169149,"lat":40.731889,"lon":-73.989106,"timeZone":"America/New_York","readable":"Webster Hall, Brooklyn, New York"}}')},230:function(e){e.exports=JSON.parse('{"id":"3777ba216260","takenTimestamp":1624482651000,"importTimestamp":1630968993974,"description":null,"location":{"lat":40.658438,"lon":-73.9683,"timeZone":"America/New_York","readable":"Prospect Park, Brooklyn, New York"}}')},231:function(e){e.exports=JSON.parse('{"id":"46ac75b298ee","takenTimestamp":1624638798000,"importTimestamp":1630969210958,"description":null,"location":{"lat":40.64042,"lon":-73.965242,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},232:function(e){e.exports=JSON.parse('{"id":"566221041bc3","takenTimestamp":1630169605000,"importTimestamp":1630970693351,"description":null,"location":{"lat":41.946637,"lon":-74.005822,"timeZone":"America/New_York","readable":"Kingston, New York"}}')},233:function(e){e.exports=JSON.parse('{"id":"5aa22fa1c925","takenTimestamp":1638041276000,"importTimestamp":1638166218842,"description":null,"location":{"altitude":50.87126921917395,"lat":41.946275,"lon":-74.004731,"timeZone":"America/New_York","readable":"Kingston, New York"}}')},234:function(e){e.exports=JSON.parse('{"id":"65048339d835","takenTimestamp":1630711260000,"importTimestamp":1630970766251,"description":null,"location":{"lat":40.644088,"lon":-73.966417,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},235:function(e){e.exports=JSON.parse('{"id":"6d822a6c354f","takenTimestamp":1631830624000,"importTimestamp":1632585807599,"description":"Brother Leo Obrien. Outstanding Student-Athlete Award. John Biscaino 1988.","location":{"lat":40.640788,"lon":-73.965163,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},236:function(e){e.exports=JSON.parse('{"id":"719a563bdf5e","takenTimestamp":1631487164000,"importTimestamp":1632585738786,"description":"me!","location":{"lat":40.640475,"lon":-73.965408,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},237:function(e){e.exports=JSON.parse('{"id":"74c0d9d9adf9","takenTimestamp":1624324006000,"importTimestamp":1630968749009,"description":null,"location":{"lat":40.640067,"lon":-73.967125,"timeZone":"America/New_York","readable":"Cortelyou Road, Brooklyn, New York"}}')},238:function(e){e.exports=JSON.parse('{"id":"7d13cd65ae7f","takenTimestamp":1630171844000,"importTimestamp":1632607855774,"description":null,"location":{"lat":42.193337,"lon":-74.063308,"timeZone":"America/New_York","readable":"Palenville, New York"}}')},239:function(e){e.exports=JSON.parse('{"id":"8332e3dc3ffa","takenTimestamp":1626808318000,"importTimestamp":1630970409789,"description":null,"location":{"lat":44.528887,"lon":-73.46112,"timeZone":"America/New_York","readable":"Ausable Chasm, New York"}}')},240:function(e){e.exports=JSON.parse('{"id":"9656212ea3f2","takenTimestamp":1625250606000,"importTimestamp":1630970343561,"description":null,"location":{"lat":40.574458,"lon":-73.973647,"timeZone":"America/New_York","readable":"New York Aquarium, Brooklyn, New York"}}')},241:function(e){e.exports=JSON.parse('{"id":"983597645e20","takenTimestamp":1624730606000,"importTimestamp":1630969309012,"description":null,"location":{"readable":"Coney Island, Brooklyn, New York"}}')},242:function(e){e.exports=JSON.parse('{"id":"ab2b0a57470a","takenTimestamp":1625247230000,"importTimestamp":1630970267603,"description":null,"location":{"lat":40.5742,"lon":-73.973587,"timeZone":"America/New_York","readable":"New York Aquarium, Brooklyn, New York"}}')},243:function(e){e.exports=JSON.parse('{"id":"b179f791d9aa","takenTimestamp":1631384957000,"importTimestamp":1632585463198,"description":null,"location":{"lat":40.56473,"lon":-73.877363,"timeZone":"America/New_York","readable":"Fort Tilden, Queens, New York"}}')},244:function(e){e.exports=JSON.parse('{"id":"b17f5e5865cc","takenTimestamp":1628553251000,"importTimestamp":1630970492380,"description":null,"location":{"lat":40.660662,"lon":-73.965875,"timeZone":"America/New_York","readable":"Prospect Park, Brooklyn, New York"}}')},245:function(e){e.exports=JSON.parse('{"id":"b570525d8dfc","takenTimestamp":1622076483000,"importTimestamp":1630967596247,"description":null,"location":{"lat":40.660767,"lon":-73.978867,"timeZone":"America/New_York","readable":"Prospect Park, Brooklyn, NY"}}')},246:function(e){e.exports=JSON.parse('{"id":"b571b9f66a6d","takenTimestamp":1636746551000,"importTimestamp":1637189333746,"description":null,"location":{"altitude":21.811893505847227,"lat":38.889317,"lon":-77.049811,"timeZone":"America/New_York","readable":"Lincoln Memorial, Washington DC"}}')},247:function(e){e.exports=JSON.parse('{"id":"c38784ffbbad","takenTimestamp":1622080869000,"importTimestamp":1630968631850,"description":null,"location":{"lat":40.706375,"lon":-73.99038,"timeZone":"America/New_York","readable":"Manhattan Bridge, New York, New York"}}')},248:function(e){e.exports=JSON.parse('{"id":"cfa3c68203fb","takenTimestamp":1624482628000,"importTimestamp":1630968874226,"description":null,"location":{"lat":40.658553,"lon":-73.968383,"timeZone":"America/New_York","readable":"Prospect Park, Brooklyn, New York"}}')},249:function(e){e.exports=JSON.parse('{"id":"d8349e0fdb1d","takenTimestamp":1624922363000,"importTimestamp":1630969615839,"description":null,"location":{"lat":40.73563,"lon":-73.989913,"timeZone":"America/New_York","readable":"Union Square Park, New York, New York"}}')},250:function(e){e.exports=JSON.parse('{"id":"e587cedd4091","takenTimestamp":1631321852000,"importTimestamp":1632585315960,"description":null,"location":{"lat":40.756912,"lon":-73.846855,"timeZone":"America/New_York","readable":"Citi Field, Queens, New York"}}')},251:function(e){e.exports=JSON.parse('{"id":"ea1418554126","takenTimestamp":1637704467000,"importTimestamp":1638166214303,"description":"TIRED, NERVOUS & BROKE!","location":{"altitude":57.88912579957356,"lat":41.935233,"lon":-74.027756,"timeZone":"America/New_York","readable":"Dietz Stadium, Kingston, New York"}}')},252:function(e){e.exports=JSON.parse('{"id":"f55ab4e31c48","takenTimestamp":1636256762000,"importTimestamp":1636263998262,"description":null,"location":{"altitude":45.59907153407892,"lat":40.661106,"lon":-73.977678,"timeZone":"America/New_York","readable":"Outer Loop, Prospect Park, Brooklyn, NY"}}')},253:function(e){e.exports=JSON.parse('{"id":"f77b2837485c","takenTimestamp":1629690502000,"importTimestamp":1630970606418,"description":null,"location":{"lat":40.640187,"lon":-73.965592,"timeZone":"America/New_York","readable":"Ditmas Park, Brooklyn, New York"}}')},254:function(e,t,o){"use strict";var r=o(213),n=o.n(r);o.d(t,"default",(function(){return n.a}))},256:function(e,t,o){"use strict";o.r(t);var r=o(108),n=o(209),l=o(25),c=o(78),m={mixins:[l.b,c.a]},d=o(221),f=o(6);var k=Object(f.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{class:["text",e.textSizeClass,e.textVariantClass,e.$style.p]},[e._t("default")],2)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null).exports,_=o(53),N=o(210),T=o(197),S=o(54),w=o(55),Y=function(){function e(){Object(S.a)(this,e)}return Object(w.a)(e,null,[{key:"getImageMeta",value:function(e){var t=o(222)("./".concat(e,".json"));return JSON.parse(JSON.stringify(t))}}]),e}(),h={components:{Row:r.a,Column:n.a,Paragraph:k,Picture:N.a,Region:_.b},asyncData:function(e){var t=e.params;return{imageMetaData:Y.getImageMeta(t.id)}},data:function(){return{ImageVariantRoutes:T.a,dateTakenMessage:null,TEXT_SIZES:l.a,REGION_TYPES:_.a}},created:function(){var e=new Date(this.imageMetaData.takenTimestamp).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:this.imageMetaData.timeZone,hourCycle:"h12",hour:"numeric"});this.dateTakenMessage=e}},y=o(254);var j=Object(f.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Region",{attrs:{type:e.REGION_TYPES.LAST}},[o("Row",[o("Column",{class:e.$style.spacer,attrs:{small:8,medium:6,large:6}},[o("Picture",{attrs:{"small-src":e.ImageVariantRoutes.createSmallImagePath(e.$route.params.id),"medium-src":e.ImageVariantRoutes.createMediumImagePath(e.$route.params.id),"large-src":e.ImageVariantRoutes.createLargeImagePath(e.$route.params.id)}})],1),e._v(" "),o("Column",{attrs:{small:0,medium:1,large:1}}),e._v(" "),o("Column",{attrs:{small:8,medium:5,large:5}},[e.imageMetaData.description?o("Paragraph",{class:e.$style.description,attrs:{"text-size":e.TEXT_SIZES.MEDIUM}},[e._v("\n        "+e._s(e.imageMetaData.description)+"\n      ")]):e._e(),e._v(" "),o("Paragraph",{attrs:{"text-size":e.TEXT_SIZES.SMALL,uppercase:!0}},[e._v("\n        "+e._s(e.imageMetaData.location.readable)+"\n      ")]),e._v(" "),o("Paragraph",{attrs:{"text-size":e.TEXT_SIZES.SMALL,uppercase:!0}},[e._v("\n        "+e._s(e.dateTakenMessage)+"\n      ")]),e._v(" "),o("Paragraph",{attrs:{"text-size":e.TEXT_SIZES.SMALL,uppercase:!0}},[e._v("\n        iPhone 12 Mini\n      ")])],1)],1)],1)}),[],!1,(function(e){this.$style=y.default.locals||y.default}),null,null);t.default=j.exports}}]);