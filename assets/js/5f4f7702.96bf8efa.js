"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[2311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,v=d["".concat(l,".").concat(p)]||d[p]||c[p]||a;return r?n.createElement(v,s(s({ref:t},m),{},{components:r})):n.createElement(v,s({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},6396:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),o=r(7294),a=r(2389),s=r(9443);const i=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=r(3616),u=r(6010);const m="tabItem_vU9c";function c(e){var t,r,n,a=e.lazy,s=e.block,c=e.defaultValue,d=e.values,p=e.groupId,v=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=y[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),T=b.tabGroupChoices,k=b.setTabGroupChoices,N=(0,o.useState)(g),j=N[0],O=N[1],w=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=T[p];null!=C&&C!==j&&f.some((function(e){return e.value===C}))&&O(C)}var D=function(e){var t=e.currentTarget,r=w.indexOf(t),n=f[r].value;n!==j&&(I(t),O(n),null!=p&&k(p,n))},E=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;r=w[n]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;r=w[o]||w[w.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,u.Z)("tabs__item",m,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:D,onClick:D},null!=r?r:t)}))),a?(0,o.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,a.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=(r(6396),r(8215),["components"]),i={title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},l=void 0,u={permalink:"/nestjs-query/blog/2020/05/13/v0.11.2",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-05-13-v0.11.2.mdx",source:"@site/blog/2020-05-13-v0.11.2.mdx",title:"v0.11.2",description:"@InjectAssemblerQueryService",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 13, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:1.84,truncated:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],nextItem:{title:"v0.11.0",permalink:"/nestjs-query/blog/2020/05/07/v0.11.0"}},m={authorsImageUrls:[void 0]},c=[{value:"<code>@InjectAssemblerQueryService</code>",id:"injectassemblerqueryservice",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Using Assemblers in auto-generated Resolver",id:"using-assemblers-in-auto-generated-resolver",children:[],level:2},{value:"Using Services in auto-generated Resolver",id:"using-services-in-auto-generated-resolver",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"injectassemblerqueryservice"},(0,a.kt)("inlineCode",{parentName:"h2"},"@InjectAssemblerQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.1")," a new ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator has been introduced to reduce boiler plate code related to creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Define your assembler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'},"import { Assembler, ClassTransformerAssembler } from '@ptc-org/nestjs-query-core';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n\n")),(0,a.kt)("p",null,"Now, instead of defining an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService")," you can use the decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {8}',title:'"todo-item.resolver.ts"',"{8}":!0},"import { QueryService, InjectAssemblerQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"using-assemblers-in-auto-generated-resolver"},"Using Assemblers in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to using a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembler"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When using the AssemblerClass option you don't need to specify the entity."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemAssembler } from './todo-item.assembler';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the assembler\n      assemblers: [TodoItemAssembler],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the assembler type to use.\n          AssemblerClass: TodoItemAssembler,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")),(0,a.kt)("h2",{id:"using-services-in-auto-generated-resolver"},"Using Services in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryService"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When using the ServiceClass option you don't need to specify the entity."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the the custom QueryService\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the QueryService type to use.\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}p.isMDXComponent=!0}}]);