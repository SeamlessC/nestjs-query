"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Query Helpers"},s=void 0,p={unversionedId:"utilities/query-helpers",id:"utilities/query-helpers",title:"Query Helpers",description:"The @ptc-org/nestjs-query-core package provides a number of helper functions to transform or apply queries to a list of items.",source:"@site/docs/utilities/query-helpers.mdx",sourceDirName:"utilities",slug:"/utilities/query-helpers",permalink:"/nestjs-query/docs/utilities/query-helpers",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/utilities/query-helpers.mdx",tags:[],version:"current",frontMatter:{title:"Query Helpers"},sidebar:"docs",previous:{title:"Federation",permalink:"/nestjs-query/docs/graphql/federation"},next:{title:"v0.24.x to v0.25.x",permalink:"/nestjs-query/docs/migration-guides/v0.24.x-to-v0.25.x"}},u={},m=[{value:"applyFilter",id:"applyfilter",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Example",id:"example",level:3},{value:"applySort",id:"applysort",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Example",id:"example-1",level:3},{value:"applyPaging",id:"applypaging",level:2},{value:"Arguments",id:"arguments-2",level:3},{value:"Example",id:"example-2",level:3},{value:"applyQuery",id:"applyquery",level:2},{value:"Arguments",id:"arguments-3",level:3},{value:"Example",id:"example-3",level:3},{value:"transformFilter",id:"transformfilter",level:2},{value:"Arguments",id:"arguments-4",level:3},{value:"Example",id:"example-4",level:3},{value:"transformSort",id:"transformsort",level:2},{value:"Arguments",id:"arguments-5",level:3},{value:"Example",id:"example-5",level:3},{value:"transformQuery",id:"transformquery",level:2},{value:"Arguments",id:"arguments-6",level:3},{value:"Example",id:"example-6",level:3},{value:"getFilterComparisons",id:"getfiltercomparisons",level:2},{value:"Arguments",id:"arguments-7",level:3},{value:"Example",id:"example-7",level:3},{value:"getFilterOmitting",id:"getfilteromitting",level:2},{value:"Arguments",id:"arguments-8",level:3},{value:"Example",id:"example-8",level:3}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," package provides a number of helper functions to transform or apply queries to a list of items."),(0,l.kt)("p",null,"An example use case for these helpers would be to write a ",(0,l.kt)("inlineCode",{parentName:"p"},"QueryService")," that wraps a store that does not support the\nquery options natively (e.g. An in memory collection of objects such as a static array of objects)."),(0,l.kt)("p",null,"All examples will be based on the following DTO definition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface TestDTO {\n  first?: string | null;\n\n  last?: string | null;\n\n  age?: number | null;\n\n  isVerified?: boolean | null;\n\n  created?: Date | null;\n}\n")),(0,l.kt)("h2",{id:"applyfilter"},"applyFilter"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"applyFilter")," helper applies a ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," to a single object or an array of objects."),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dto: DTO|DTO[]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If a single object a function that will test the dto against the filter, returning ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," when if it matches the\nfilter."),(0,l.kt)("li",{parentName:"ul"},"If an array of objects is provided the array will be filtered returning a new array with all elements that match\nthe filter."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter: Filter<DTO>")," - The filter to check the object","[s]"," against. See ",(0,l.kt)("a",{parentName:"li",href:"/nestjs-query/docs/concepts/queries#filtering"},(0,l.kt)("inlineCode",{parentName:"a"},"Filtering")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyFilter } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst filtered = applyFilter(dtos, {first: {in: ['Bob', 'Sally']})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const dto: TestDTO = {first: 'Bob', last: 'Yukon'};\napplyFilter<TestDTO>(dto, {first: {in: ['Bob', 'Sally']}) // true\napplyFilter<TestDTO>(dto, {first: {eq: ['Alice', 'Zane']}) // false\n")),(0,l.kt)("h2",{id:"applysort"},"applySort"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"applySort")," will sort an array of dtos."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Because ",(0,l.kt)("inlineCode",{parentName:"p"},"applySort")," uses the native ",(0,l.kt)("inlineCode",{parentName:"p"},"Array#sort")," method it may not exactly match the ordering you would expect from a\ndatabase.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"It is expected that your data types all match. For example if you have a number field that also has some numbers\nrepresented as strings the applySort method may not work as expected.")),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dto: DTO[]")," - The array of DTOs to sort."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sortFields: SortField<DTO>[]")," - The sorting criteria. See ",(0,l.kt)("a",{parentName:"li",href:"/nestjs-query/docs/concepts/queries#sorting"},(0,l.kt)("inlineCode",{parentName:"a"},"Sorting")))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { applySort, SortDirection, SortNulls } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: null, last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst sorted = applySort(dtos, [\n   { field: 'first', direction: SortDirection.DESC, nulls: SortNulls.NULLS_LAST },\n])\n")),(0,l.kt)("p",null,"The resulting sorted array would be."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  {first: 'Zane', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: null, last: 'Yukon'}\n  {last: 'Yukon'}\n]\n")),(0,l.kt)("h2",{id:"applypaging"},"applyPaging"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"applyPaging")," method will apply a ",(0,l.kt)("inlineCode",{parentName:"p"},"limit")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," to an array of dtos."),(0,l.kt)("h3",{id:"arguments-2"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dto: DTO[]")," - The array of DTOs to page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"paging: Paging")," - The paging arguments to apply. See ",(0,l.kt)("a",{parentName:"li",href:"/nestjs-query/docs/concepts/queries#paging"},(0,l.kt)("inlineCode",{parentName:"a"},"Paging")))),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyPaging } from `@ptc-org/nestjs-query-core`;\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon'}\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n  {first: 'Zane', last: 'Yukon'}\n]\nconst paged = applyPaging(dtos, {offset: 1, limit: 2})\n")),(0,l.kt)("p",null,"The resulting paged dtos would be."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  {first: 'Alice', last: 'Yukon'}\n  {first: 'Sally', last: 'Yukon'}\n]\n")),(0,l.kt)("h2",{id:"applyquery"},"applyQuery"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"applyQuery")," uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"applyFilter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"applySorting"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"applyPaging")," methods to apply a ",(0,l.kt)("inlineCode",{parentName:"p"},"Query")," to an array of\nDTOs."),(0,l.kt)("h3",{id:"arguments-3"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dto: DTO[]")," - The array of DTOs to page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query: Query<DTO>")," - The query to apply to the array of dtos. See ",(0,l.kt)("a",{parentName:"li",href:"/nestjs-query/docs/concepts/queries"},(0,l.kt)("inlineCode",{parentName:"a"},"Queries")))),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyQuery, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nconst dtos: TestDTO[] = [\n  {first: 'Bob', last: 'Yukon', isVerified: true}\n  {first: 'Alice', last: 'Yukon', isVerified: false}\n  {first: 'Sally', last: 'Yukon', isVerified: true}\n  {first: 'Zane', last: 'Yukon', isVerified: true}\n]\nconst queryResult = applyQuery(dtos, {\n  filter: { isVerified: { is: true } },\n  sorting: [{ field: 'first', direction: SortDirection.DESC }],\n  paging: { offset: 1, limit: 2 }\n})\n")),(0,l.kt)("p",null,"The resulting array of dtos would be."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  {first: 'Sally', last: 'Yukon', isVerified: true}\n  {first: 'Bob', last: 'Yukon', isVerified: true}\n]\n")),(0,l.kt)("h2",{id:"transformfilter"},"transformFilter"),(0,l.kt)("p",null,"The transformFilter is used to remap fields in a ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter"),". This method is commonly used when defining a custom\n",(0,l.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"Assembler"),"."),(0,l.kt)("h3",{id:"arguments-4"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter: Filter<From>")," - The filter you want to transform."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fieldMap: QueryFieldMap<From, To>")," - A map of fields where the key is a key in the From type, and the value is a\nkey in the to type.")),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { transformFilter, QueryFieldMap, Filter } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\n\nconst dtoFilter: Filter<TestDTO> = {\n  first: { eq: 'foo' },\n  last: { neq: 'bar' },\n};\n\nconst transformed = transformFilter(dtoFilter, fieldMap);\n")),(0,l.kt)("p",null,"The new filter would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  firstName: { eq: 'foo' },\n  lastName: { neq: 'bar' },\n}\n")),(0,l.kt)("h2",{id:"transformsort"},"transformSort"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"transformSort")," is used to remap fields in an array of ",(0,l.kt)("inlineCode",{parentName:"p"},"SortField<DTO>[]"),". This method is commonly used when\ndefining a custom ",(0,l.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"Assembler"),"."),(0,l.kt)("h3",{id:"arguments-5"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sortFields: SortField<From>[]")," - The array of sorting criteria to transform."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fieldMap: QueryFieldMap<From, To>")," - A map of fields where the key is a key in the From type, and the value is a key in the to type.")),(0,l.kt)("h3",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { transformSort, QueryFieldMap, SortField, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\nconst dtoSort: SortField<TestDTO>[] = [\n  { field: 'first', direction: SortDirection.DESC },\n  { field: 'last', direction: SortDirection.ASC },\n];\n\nconst transformed = transformSort(dtoSort, fieldMap);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  { field: 'firstName', direction: SortDirection.DESC },\n  { field: 'lastName', direction: SortDirection.ASC },\n];\n")),(0,l.kt)("h2",{id:"transformquery"},"transformQuery"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"transformQuery")," method uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"transformFilter")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"transformSort")," methods to remap a ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),". This method is\ncommonly used when defining a custom ",(0,l.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/advanced/assemblers"},"Assembler"),"."),(0,l.kt)("h3",{id:"arguments-6"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sortFields: Query<From>")," - The query to transform."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fieldMap: QueryFieldMap<From, To>")," - A map of fields where the key is a key in the From type, and the value is a key in the to type.")),(0,l.kt)("h3",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { transformQuery, QueryFieldMap, Query, SortDirection } from `@ptc-org/nestjs-query-core`;\n\nclass TestEntity {\n  firstName!: string;\n\n  lastName!: string;\n}\n\nconst fieldMap: QueryFieldMap<TestDTO, TestEntity> = {\n  first: 'firstName',\n  last: 'lastName',\n};\nconst dtoQuery: Query<TestDTO> = {\n  filter: { first: { eq: 'foo' }, last: { neq: 'bar' } }\n  sorting: [\n    { field: 'first', direction: SortDirection.DESC },\n    { field: 'last', direction: SortDirection.ASC },\n  ]\n};\n\nconst transformed =  transformQuery(dtoQuery, fieldMap);\n")),(0,l.kt)("p",null,"The resulting query would be."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  filter: { firstName: { eq: 'foo' }, lastName: { neq: 'bar' } }\n  sorting: [\n    { field: 'firstName', direction: SortDirection.DESC },\n    { field: 'lastName', direction: SortDirection.ASC },\n  ]\n}\n")),(0,l.kt)("h2",{id:"getfiltercomparisons"},"getFilterComparisons"),(0,l.kt)("p",null,"Used to search a filter get a list of comparison objects for a given key."),(0,l.kt)("h3",{id:"arguments-7"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter: Filter<DTO>")," - The filter to search."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key: keyof DTO")," - The key in the DTO object to search for in the filter object.")),(0,l.kt)("h3",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Filter, getFilterComparisons } from `@ptc-org/nestjs-query-core`;\n\nclass TestDTO {\n  age!: number;\n\n  title!: string;\n}\n\nconst filter: Filter<TestDTO> = {\n  age: { gte: 10 },\n  or: [{ title: { like: '%bar' } }, { title: { eq: 'foobar' } }],\n};\n\nconst comparisons = getFilterComparisons(filter, 'title');\n")),(0,l.kt)("p",null,"The resulting array would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"[{ like: '%bar' }, { eq: 'foobar' }];\n")),(0,l.kt)("h2",{id:"getfilteromitting"},"getFilterOmitting"),(0,l.kt)("p",null,"Used to get a filter with a given key removed."),(0,l.kt)("h3",{id:"arguments-8"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter: Filter<DTO>")," - The filter containing the unwanted key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key: keyof DTO")," - The key in the DTO object to remove in the filter object.")),(0,l.kt)("h3",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Filter, getFilterOmitting } from `@ptc-org/nestjs-query-core`;\n\nclass TestDTO {\n  age!: number;\n\n  title!: string;\n}\n\nconst filter: Filter<TestDTO> = {\n  age: { gte: 10 },\n  or: [{ title: { like: '%bar' } }, { title: { eq: 'foobar' } }],\n};\n\nconst filterWithoutTitle = getFilterOmitting(filter, 'title');\n")),(0,l.kt)("p",null,"The resulting filter would be"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  age: { gte: 10 },\n}\n")))}c.isMDXComponent=!0}}]);