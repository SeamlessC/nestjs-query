"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=s,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},646:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],i={title:"Getting Started"},c=void 0,p={unversionedId:"persistence/typeorm/getting-started",id:"persistence/typeorm/getting-started",title:"Getting Started",description:"The @ptc-org/nestjs-query-typeorm package provides an implementation of @ptc-org/nestjs-query-core QueryService.",source:"@site/docs/persistence/typeorm/getting-started.md",sourceDirName:"persistence/typeorm",slug:"/persistence/typeorm/getting-started",permalink:"/nestjs-query/docs/persistence/typeorm/getting-started",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typeorm/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/typeorm/custom-service"}},l=[{value:"Installation",id:"installation",children:[],level:2},{value:"Docs",id:"docs",children:[],level:2}],u={toc:l};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-typeorm")," package provides an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),(0,o.kt)("p",null,"This package is built using ",(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/#/"},"typeorm")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#typeorm-integration"},"@nestjs/typeorm"),". If you are unfamiliar with them I suggest you read their documentation first."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-typeorm"},"Installation Docs")),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read the ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typeorm/multiple-databases"},"Multiple Databases")," - Docs that layout how to connect to multiple databases and use them with ",(0,o.kt)("inlineCode",{parentName:"li"},"nestjs-query")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typeorm/soft-delete"},"Soft Deletes")," - How to use the soft delete functionality from typeorm with ",(0,o.kt)("inlineCode",{parentName:"li"},"nestjs-query"),".")))}m.isMDXComponent=!0}}]);