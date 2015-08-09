define("events-ui/adapters/application",["exports","ember-data"],function(e,t){"use strict";var n;n=t["default"].RESTAdapter.extend({namespace:"api/v1"}),e["default"]=n}),define("events-ui/app",["exports","ember","ember/resolver","ember/load-initializers","events-ui/config/environment"],function(e,t,n,a,r){"use strict";var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("events-ui/components/area-svg",["exports","ember"],function(e,t){"use strict";var n=t["default"].Component.extend({tagName:"svg",attributeBindings:["viewBox","x","y","width","height"],viewBox:t["default"].computed.alias("area.attributes.viewBox")});e["default"]=n}),define("events-ui/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("events-ui/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("events-ui/initializers/export-application-global",["exports","ember","events-ui/config/environment"],function(e,t,n){"use strict";function a(e,a){if(n["default"].exportApplicationGlobal!==!1){var r,l=n["default"].exportApplicationGlobal;r="string"==typeof l?l:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=a,a.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("events-ui/instance-initializers/app-version",["exports","events-ui/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var l=a(e.toString());n["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("events-ui/models/area",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].Model.extend({containers:t["default"].hasMany("containers",{async:!0}),image_url:t["default"].attr("string"),parents:t["default"].hasMany("containers",{async:!0}),attributes:t["default"].attr(),contents:t["default"].attr("string")});e["default"]=n}),define("events-ui/models/container",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].Model.extend({parent:t["default"].belongsTo("area",{async:!0,inverse:"containers"}),x:t["default"].attr("number"),y:t["default"].attr("number"),width:t["default"].attr("number"),height:t["default"].attr("number"),area:t["default"].belongsTo("area",{async:!0,inverse:"parents"})});e["default"]=n}),define("events-ui/router",["exports","ember","events-ui/config/environment"],function(e,t,n){"use strict";var a;a=t["default"].Router.extend({location:n["default"].locationType}),a.map(function(){return this.resource("area",{path:"areas/:area_id"})}),e["default"]=a}),define("events-ui/routes/area",["exports"],function(e){"use strict";var t=Ember.Route.extend({afterModel:function(e){$.get(e.get("image_url")).then(function(t){e.set("contents",[$("<g/>").append(t.documentElement.childNodes).html()]),e.set("attributes",{viewBox:t.documentElement.attributes.viewBox.value})})}});e["default"]=t}),define("events-ui/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"events-ui/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("events-ui/templates/area",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:6,column:0},end:{line:10,column:0}},moduleName:"events-ui/templates/area.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["content","container.id",["loc",[null,[7,2],[7,18]]]],["content","container.area.image_url",["loc",[null,[8,2],[8,30]]]],["content","container.area.contents",["loc",[null,[9,2],[9,29]]]]],locals:["container"],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"events-ui/templates/area.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(5);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(a,1,1),r[2]=e.createMorphAt(a,3,3),r[3]=e.createMorphAt(a,5,5),r[4]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]],["content","model.image_url",["loc",[null,[4,0],[4,19]]]],["content","model.containers.length",["loc",[null,[5,0],[5,27]]]],["block","each",[["get","model.containers",["loc",[null,[6,8],[6,24]]]]],[],0,null,["loc",[null,[6,0],[10,9]]]],["inline","area-svg",[],["id","map","area",["subexpr","@mut",[["get","model",["loc",[null,[13,25],[13,30]]]]],[],[]]],["loc",[null,[13,0],[13,32]]]]],locals:[],templates:[e]}}())}),define("events-ui/templates/components/area-svg",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:2,column:0},end:{line:6,column:0}},moduleName:"events-ui/templates/components/area-svg.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createAttrMorph(a,"xlink:href","http://www.w3.org/1999/xlink"),r[1]=e.createMorphAt(a,1,1),r},statements:[["attribute","xlink:href",["concat",["/areas/",["get","child.id",["loc",[null,[3,26],[3,34]]]]]]],["inline","area-svg",[],["area",["subexpr","@mut",[["get","child.area",["loc",[null,[4,20],[4,30]]]]],[],[]],"x",["subexpr","@mut",[["get","child.x",["loc",[null,[4,33],[4,40]]]]],[],[]],"y",["subexpr","@mut",[["get","child.y",["loc",[null,[4,43],[4,50]]]]],[],[]],"width",["subexpr","@mut",[["get","child.width",["loc",[null,[4,57],[4,68]]]]],[],[]],"height",["subexpr","@mut",[["get","child.height",["loc",[null,[4,76],[4,88]]]]],[],[]]],["loc",[null,[4,4],[4,90]]]]],locals:["child"],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"events-ui/templates/components/area-svg.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createUnsafeMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),a[2]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),a},statements:[["content","area.contents",["loc",[null,[1,0],[1,19]]]],["block","each",[["get","area.containers",["loc",[null,[2,8],[2,23]]]]],[],0,null,["loc",[null,[2,0],[6,9]]]],["content","yield",["loc",[null,[8,0],[8,9]]]]],locals:[],templates:[e]}}())}),define("events-ui/config/environment",["ember"],function(e){var t="events-ui";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("events-ui/tests/test-helper"):require("events-ui/app")["default"].create({name:"events-ui",version:"0.0.0+"});