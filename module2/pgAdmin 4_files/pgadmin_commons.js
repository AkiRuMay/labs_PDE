"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[946],{68938:(e,t,r)=>{var o,a,s=r(24994)(r(2543));o=[r(98351),r(35244),r(99002),r(84726)],void 0===(a=function(e,t,r){let o=t.Browser=t.Browser||{};return o.Collection||(o.Collection=function(){},s.default.extend(o.Collection,s.default.clone(o.Node),{Init:function(){this.node_initialized||(this.node_initialized=!0,t.Browser.add_menus([{name:"refresh",node:this.type,module:this,applies:["object","context"],callback:"refresh",priority:2,label:e("Refresh")}]),t.unsupported_nodes&&-1==s.default.indexOf(t.unsupported_nodes,this.type)&&("database"==this.type&&this.allowConn||"database"!=this.type)&&(t.Browser.add_menus([{name:"show_query_tool",node:this.type,module:this,applies:["context"],callback:"show_query_tool",priority:998,label:e("Query Tool")}]),t.Browser.add_menus([{name:"search_objects",node:this.type,module:this,applies:["context"],callback:"show_search_objects",priority:997,label:e("Search Objects...")}]),t.enable_psql&&t.Browser.add_menus([{name:"show_psql_tool",node:this.type,module:this,applies:["context"],callback:"show_psql_tool",priority:998,label:e("PSQL Tool")}])))},hasId:!1,is_collection:!0,collection_node:!0,hasCollectiveStatistics:!0,canDrop:!0,canDropCascade:!0,selectParentNodeOnDelete:!1,generate_url:function(e,a){let s={properties:"obj",children:"nodes",drop:"obj"},n=this,l=o.tree.getTreeNodeHierarchy(e),i=a in s?s[a]:a;return r.generate_url(t.Browser.URL,l,i,n.node,(function(e,t){return t!=n.type}))},show_query_tool:function(){t.Tools.SQLEditor&&t.Tools.SQLEditor.showQueryTool("",t.Browser.tree.selected())},show_search_objects:function(){t.Tools.SearchObjects&&t.Tools.SearchObjects.show_search_objects("",t.Browser.tree.selected())},show_psql_tool:function(e){let t=e||{},r=o.tree,a=t.item||r.selected(),s=a?r.itemData(a):void 0;o.psql.psql_tool(s,a,!0)}})),o.Collection}.apply(t,o))||(e.exports=a)},72651:(e,t,r)=>{var o=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(30130)),s=o(r(35244));const n=s.default.Browser=s.default.Browser||{};n.Events=new a.default;t.default=n},84726:(e,t,r)=>{var o,a,s=r(24994),n=s(r(94634)),l=s(r(2543)),i=s(r(6520)),d=r(58237),c=s(r(96540)),p=s(r(84316)),u=s(r(51766)),f=s(r(6274)),h=s(r(53196)),_=r(96241);o=[r(98351),r(35244),r(99002),r(96241),r(91849),r(72651)],void 0===(a=function(e,t,r,o){const a=t.Browser=t.Browser||{};return a.Node?a.Node:(a.Nodes=a.Nodes||{},a.Node=function(){},a.Node.extend=function(e,t){let r,o=this;if(r=function(){return o.apply(this,arguments)},l.default.extend(r,o,l.default.omit(e,"callbacks")),r.callbacks=l.default.extend({},o.callbacks,e.callbacks),!(t??1))return r;let a=l.default.keys(r.callbacks);for(let e of a)"function"==typeof r.callbacks[s=e]&&(r.callbacks[s]=r.callbacks[s].bind(r));var s;return r.Init.apply(r),this.Init.apply(r),r},l.default.extend(t.Browser.Node,{type:void 0,label:"",sqlAlterHelp:"",sqlCreateHelp:"",dialogHelp:"",epasHelp:!1,title:function(t,r){return"create"==r?e("Create - %s",this.label):t._label??""},copy:function(e){return e},hasId:!0,Init:function(){let r=this;if(!r.node_initialized){if(r.node_initialized=!0,t.Browser.add_menus([{name:"refresh",node:r.type,module:r,applies:["object","context"],callback:"refresh",priority:2,label:e("Refresh..."),enable:!0}]),r.canEdit&&t.Browser.add_menus([{name:"show_obj_properties",node:r.type,module:r,applies:["object","context"],callback:"show_obj_properties",priority:999,label:e("Properties..."),data:{action:"edit"},enable:l.default.isFunction(r.canEdit)?function(){return!!r.canEdit(...arguments)}:!!r.canEdit}]),r.canDrop&&(t.Browser.add_menus([{name:"delete_object",node:r.type,module:r,applies:["object","context"],callback:"delete_obj",priority:r.dropPriority,label:r.dropAsRemove?e("Remove %s",r.label):e("Delete"),data:{url:"drop",data_disabled:e("The selected tree node does not support this option.")},enable:l.default.isFunction(r.canDrop)?function(){return!!r.canDrop(...arguments)}:!!r.canDrop}]),r.canDropCascade&&t.Browser.add_menus([{name:"delete_object_cascade",node:r.type,module:r,applies:["object","context"],callback:"delete_obj",priority:2,label:e("Delete (Cascade)"),data:{url:"delete"},enable:l.default.isFunction(r.canDropCascade)?function(){return r.canDropCascade(...arguments)}:!!r.canDropCascade}])),-1==l.default.indexOf(t.unsupported_nodes,r.type)){let o=function(e){return!("database"!=e?._type||!e?.allowConn)||"database"!=e?._type};t.Browser.add_menus([{name:"show_query_tool",node:r.type,module:r,applies:["context"],callback:"show_query_tool",priority:998,label:e("Query Tool"),enable:o}]),t.Browser.add_menus([{name:"search_objects",node:r.type,module:t.Tools.SearchObjects,applies:["context"],callback:"show_search_objects",priority:997,label:e("Search Objects..."),icon:"fa fa-search",enable:o}]),t.enable_psql&&t.Browser.add_menus([{name:"show_psql_tool",node:this.type,module:this,applies:["context"],callback:"show_psql_tool",priority:998,label:e("PSQL Tool")}])}r.hasScriptTypes&&l.default.isArray(r.hasScriptTypes)&&r.hasScriptTypes.length>0&&l.default.each(r.hasScriptTypes,(function(o){let a=e("%s Script",o.toUpperCase());o=o.toLowerCase(),t.Browser.add_menus([{name:"show_script_"+o,node:r.type,module:r,applies:["object","context"],callback:"show_script",priority:4,label:a,category:e("Scripts"),data:{script:o,data_disabled:e("The selected tree node does not support this option.")},enable:r.check_user_permission}])}))}},check_user_permission:function(e,t,r){if("server_group"==e._type||"server"==e._type)return!1;if("database"==e._type&&!e.allowConn)return!1;let o=a.tree.getTreeNodeHierarchy(t);return-1==l.default.indexOf(["create","insert","update","delete"],r.script)||(!("role"!=e.type||!o.server.user.can_create_role)||!!(o.server?.user.is_superuser||o.server?.user.can_create_db||o.schema?.can_create))},hasScriptTypes:["create"],canEdit:!0,canDrop:!1,canDropCascade:!1,dropAsRemove:!1,dropPriority:2,selectParentNodeOnDelete:!1,callbacks:{show_obj_properties:function(r,s){let n=a.tree,i=r?.item||s||n.selected(),c=i?n.itemData(i):void 0,p=this.title(c,r.action),u=a.tree.getTreeNodeHierarchy(i);if(!c)return;const f=l.default.isArray(this.parent_type)?e=>-1!=l.default.indexOf(this.parent_type,e._type):e=>this.parent_type==e._type;if("create"==r.action){if(this.parent_type&&!f(c))for(;i&&n.hasParent(i);){i=n.parent(i);let e=n.itemData(i);if(f(e)){c=e;break}}if(!c||null!=this.parent_type&&!f(c))return;u=a.tree.getTreeNodeHierarchy(i);const e=l.default.uniqueId(d.BROWSER_PANELS.EDIT_PROPERTIES),t=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.docker.default_workspace.close(e,t)},r=e=>{setTimeout((()=>{this.clear_cache(s)}),0);try{a.Events.trigger("pgadmin:browser:tree:add",l.default.clone(e.node),l.default.clone(u))}catch(e){console.warn(e.stack||e)}t()};this.showPropertiesDialog(e,p,{treeNodeInfo:u,item:i,nodeData:c,actionType:"create",onSave:r,onClose:t})}else if("copy"==r.action){u=a.tree.getTreeNodeHierarchy(i);const e=l.default.uniqueId(d.BROWSER_PANELS.EDIT_PROPERTIES),t=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.docker.default_workspace.close(e,t)},r=e=>{setTimeout((()=>{this.clear_cache(s)}),0);try{a.Events.trigger("pgadmin:browser:tree:add",l.default.clone(e.node),{server_group:u.server_group})}catch(e){console.warn(e.stack||e)}t()};this.showPropertiesDialog(e,p,{treeNodeInfo:u,item:i,nodeData:c,actionType:"copy",onSave:r,onClose:t})}else{const n=d.BROWSER_PANELS.EDIT_PROPERTIES+c.id,l=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.docker.default_workspace.close(n,e)},f=e=>{let t=c,r=e.node,o=u;setTimeout((()=>{this.clear_cache(s)}),0),a.Events.trigger("pgadmin:browser:tree:update",t,r,o,{success:function(e,t,r){a.Events.trigger("pgadmin:browser:node:updated",e,t,r),a.Events.trigger("pgadmin:browser:node:"+t._type+":updated",e,t,r)}}),l()};if(a.docker.default_workspace.find(n)){let a=e('Are you sure want to stop editing the properties of %s "%s"?');"edit"==r.action&&(a=e('Are you sure want to reset the current changes and re-open the panel for %s "%s"?')),t.Browser.notifier.confirm(e("Edit in progress?"),o.sprintf(a,this.label.toLowerCase(),c.label),(()=>{this.showPropertiesDialog(n,p,{treeNodeInfo:u,item:i,nodeData:c,actionType:"edit",onSave:f,onClose:l},!0)}),null)}else this.showPropertiesDialog(n,p,{treeNodeInfo:u,item:i,nodeData:c,actionType:"edit",onSave:f,onClose:l})}},delete_obj:function(r,o){let s=r||{url:"drop"},n=this,d=a.tree,c=s.item||o||d.selected(),p=c?d.itemData(c):void 0;if(!p)return;n=a.Nodes[p._type];let u,f,h=l.default.unescape(p.label);if("delete"==s.url&&"database"===p._type)u=e('Delete database with the force option will attempt to terminate all existing connections to the <b>"%s"</b> database. Are you sure you want to proceed?',p.label),f=e("Delete FORCE %s?",n.label);else if("delete"==s.url){if(u=e('Are you sure you want to delete the %s <b>"%s"</b> and all the objects that depend on it?',n.label.toLowerCase(),p.label),f=e("Delete CASCADE %s?",n.label),!(l.default.isFunction(n.canDropCascade)?n.canDropCascade(p,c):n.canDropCascade))return void t.Browser.notifier.error(e('The %s "%s" cannot be dropped.',n.label,p.label),1e4)}else if(n.dropAsRemove?(u=e('Are you sure you want to remove the %s <b>"%s"</b>?',n.label.toLowerCase(),p.label),f=e("Remove %s?",n.label)):(u=e('Are you sure you want to delete the %s <b>"%s"</b>?',n.label.toLowerCase(),p.label),f=e("Delete %s?",n.label)),!(l.default.isFunction(n.canDrop)?n.canDrop(p,c):n.canDrop))return void t.Browser.notifier.error(e('The %s "%s" cannot be dropped/removed.',n.label,p.label),1e4);t.Browser.notifier.confirmDelete(f,u,(function(){(0,i.default)().delete(n.generate_url(c,s.url,p,!0)).then((e=>{let{data:r}=e;if(2!=r.success){if(0==r.success)t.Browser.notifier.alert(r.errormsg,r.info);else{let e=!0;if(n.selectParentNodeOnDelete){let t=d.parent(c);setTimeout((function(){d.select(t)}),10),e=!1}a.removeTreeNode(c,e)}return!0}t.Browser.notifier.error(r.info,null)})).catch((function(r){let o=r.request?.responseText;if(417==r.request?.status||410==r.request?.status||500==r.request?.status)try{let e=r.response.data;o=e.info||e.errormsg}catch(e){console.warn(e.stack||e)}t.Browser.notifier.alert(e('Error dropping/removing %s: "%s"',n.label,h),o)}))}),(()=>{}),e("Delete"),e("Cancel"))},show_script:function(e,r){let o,s,n=e.script,l=a.tree,i=r||l.selected(),d=i?l.itemData(i):void 0;d&&(o=a.Nodes[d._type],s="insert"==n?"insert_sql":"update"==n?"update_sql":"delete"==n?"delete_sql":"select"==n?"select_sql":"exec"==n?"exec_sql":"sql",t.Tools.SQLEditor.showQueryTool(o.generate_url(i,s,d,!0),i,n))},show_query_tool:function(r,o){let s=h.default.getState().getPreferences("sqleditor","copy_sql_to_query_tool"),n=a.tree,l=o||n.selected(),i=l?n.itemData(l):void 0;if(i)if(s.value&&!i._type.includes("coll-")){let t={script:i._type.toLowerCase(),data_disabled:e("The selected tree node does not support this option.")};a.Node.callbacks.show_script(t)}else t.Tools.SQLEditor.showQueryTool("",l)},show_psql_tool:function(e){let r=e||{},o=a.tree,s=r.item||o.selected(),n=s?o.itemData(s):void 0;t.Tools.Psql.openPsqlTool(n,s)},change_server_background:function(e,t){if(!e||!t)return;const r=a.tree.getTreeNodeHierarchy(e).server;if(!r)return;if(-1!==e.path.indexOf(r.id)){let t=r.icon.split(" ")[1]||null,o=r.icon.split(" ")[2]||"";if(t){let s="pga_server_"+r._id+"_bgcolor";const n=document.createElement("style");n.setAttribute("id",s),n.setAttribute("type","text/css"),n.innerText=`\n              .${s} .file-label {\n                border-radius: 3px;\n                margin-bottom: 2px;\n                background: ${t} !important;\n              }\n              ${o?`\n              .${s} span.file-name, .${s} span.file-name:hover, .${s} span.file-name.pseudo-active {\n                color: ${o} !important;\n              }\n              `:""}\n            `,document.querySelector(`style[id="${s}"]`)?.remove(),document.head.appendChild(n),a.tree.addCssClass(e,s)}}},added:function(e,r){-1!==a.tree.getData(e)._type.indexOf("coll-")&&setTimeout((function(){let r=t.Browser.Nodes[a.tree.getData(e).nodes[0]];r.clear_cache.apply(r)}),0),a.Events.trigger("pgadmin:browser:tree:expand-from-previous-tree-state",e),a.Node.callbacks.change_server_background(e,r)},selected:function(e,r){return t.Browser.enable_disable_menus.apply(a,[e]),a.Events.trigger("pgadmin-browser:node:selected",e,r),a.Events.trigger("pgadmin:browser:tree:update-tree-state",e),!0},deselected:function(){t.Browser.enable_disable_menus.apply(a,[])},removed:function(e){let t=this;setTimeout((function(){t.clear_cache(e)}),0)},refresh:function(e,t){let r=this,o=a.tree,s=t&&o.itemData(t);a.Events.trigger("pgadmin:browser:tree:refresh",t||a.tree.selected(),{success:function(){r.callbacks.selected.apply(r,[t,s,a])}})},opened:function(e){let t=a.tree,r=h.default.getState().getPreferences("browser","auto_expand_sole_children");if(r?.value&&1==t.children(e).length){const r=t.first(e);if(r._loaded)t.open(r),t.select(r);else{const e=setInterval((()=>{r._loaded&&(t.open(r),t.select(r),o())}),200),o=function(){clearInterval(e)}}}else if(1==t.children(e).length){const r=t.first(e);t.select(r)}a.Events.trigger("pgadmin:browser:tree:update-tree-state",e)},closed:function(e){a.Events.trigger("pgadmin:browser:tree:remove-from-tree-state",e)}},showPropertiesDialog:function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s={id:e,title:t,manualClose:!0,icon:`dialog-node-icon ${(0,_.evalFunc)(this,this.node_image,r.nodeData)??"icon-"+this.type}`,content:c.default.createElement(u.default,null,c.default.createElement(p.default,(0,n.default)({panelId:e,node:this,formType:"dialog"},r)))};let l=(0,f.default)(this.width||a.stdW.default+"px","width",!0),i=(0,f.default)(this.height||a.stdH.default+"px","height",!0);l=l<=a.stdW.sm?a.stdW.sm:l<=a.stdW.md?a.stdW.md:a.stdW.lg,i=i<=a.stdH.sm?a.stdH.sm:i<=a.stdH.md?a.stdH.md:a.stdH.lg,o?(r.onClose(!0),setTimeout((()=>{a.docker.default_workspace.openDialog(s,l,i)}),10)):a.docker.default_workspace.openDialog(s,l,i)},_find_parent_node:function(e,t,r){if(this.parent_type)if(r=r||e.itemData(t),l.default.isString(this.parent_type)){if(this.parent_type==r._type)return t;for(;e.hasParent(t);)if(t=e.parent(t),r=e.itemData(t),this.parent_type==r._type)return t}else{if(l.default.indexOf(this.parent_type,r._type)>=0)return t;for(;e.hasParent(t);)if(t=e.parent(t),r=e.itemData(t),l.default.indexOf(this.parent_type,r._type)>=0)return t}return null},generate_url:function(e,t,o,s,n,i){let d={create:"obj",drop:"obj",edit:"obj",properties:"obj",statistics:"stats"},c=this,p=-1/0,u=l.default.isUndefined(e)||l.default.isNull(e)?n||{}:a.tree.getTreeNodeHierarchy(e),f=t in d?d[t]:t,h=s&&o._type==c.type?encodeURIComponent(o._id):"";if(c.parent_type)if(l.default.isString(c.parent_type)){let e=u[c.parent_type];e&&(p=e.priority)}else l.default.each(c.parent_type,(function(e){let t=u[e];t&&p<t.priority&&(p=t.priority)}));let _=p;i&&u[i]&&(_=u[i].priority);return r.generate_url(a.URL,u,f,c.type,(function(e){return e.priority<=_||e.priority==p}),h)},cache:function(e,t,r,a){let s=this.cached=this.cached||{},n=e,i=t?.[r]?.priority||0;if(t&&l.default.each(l.default.sortBy(l.default.values(l.default.pickBy(t,(function(e){return e.priority<=i}))),(function(e){return e.priority})),(function(e){n=o.sprintf("%s_%s",n,encodeURI(e._id))})),l.default.isUndefined(a)){let e=s[n];return!l.default.isUndefined(e)&&e.at-Date.now()>3e5&&(e=void 0),e}return s[n]={data:a,at:Date.now(),level:r}},clear_cache:function(e){this.cached={};a.Events.trigger("pgadmin:browser:node:"+this.type+":cache_cleared",e,this)},cache_level:function(e,t){if(e){if(t&&this.type in e)return this.type;if(l.default.isArray(this.parent_type)){for(let t in this.parent_type)if(t in e)return t;return this.type}return this.parent_type}}}),t.Browser.Node)}.apply(t,o))||(e.exports=a)}}]);