"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6388"],{47574:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>l});var r=JSON.parse('{"id":"process/maintenance/maintenance","title":"\u7EF4\u62A4","description":"\u8BA9\u4F60\u7684\u670D\u52A1\u5668\u53D8\u5F97\u66F4\u597D","source":"@site/docs-java/process/maintenance/maintenance.md","sourceDirName":"process/maintenance","slug":"/maintenance/Java","permalink":"/Java/maintenance/Java","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs-java/process/maintenance/maintenance.md","tags":[],"version":"current","lastUpdatedBy":"\u9A7F\u7AD9","lastUpdatedAt":1722370260000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/maintenance/Java"},"sidebar":"tutorialSidebar","previous":{"title":"\u5546\u5E97 - QuickShop","permalink":"/Java/process/plugin/other/QuickShop"},"next":{"title":"\u4F18\u5316","permalink":"/Java/optimize"}}'),i=n("52676"),a=n("69532"),o=n("79234");let s={sidebar_position:2,slug:"/maintenance/Java"},l="\u7EF4\u62A4",c={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u7EF4\u62A4",children:"\u7EF4\u62A4"})}),"\n",(0,i.jsx)(t.p,{children:"\u8BA9\u4F60\u7684\u670D\u52A1\u5668\u53D8\u5F97\u66F4\u597D"}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79234:function(e,t,n){n.d(t,{Z:()=>j});var r=n("52676");n("75271");var i=n("54461"),a=n("20740"),o=n("90137"),s=n("97058"),l=n("78489"),c=n("51711"),u=n("60686");let d={cardContainer:"cardContainer_uOCB",cardTitle:"cardTitle_p0O7",cardDescription:"cardDescription_ABMC"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:a,description:o}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:a,children:[n," ",a]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,n=(0,a.LM)(t),i=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,a.xz)(t.docId??void 0);return(0,r.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,a.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let o=(0,a.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(x,{item:e})},t))})}},97058:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(75271),i=n(38584);let a=["zero","one","two","few","many","other"];function o(e){return a.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},69532:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(75271);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);