"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["1983"],{33467:function(e,t,n){n.d(t,{Z:()=>j});var r=n("52676");n("75271");var i=n("54461"),l=n("75490"),s=n("77906"),a=n("66788"),c=n("9379"),o=n("30242"),u=n("11413");let d={cardContainer:"cardContainer_yVBp",cardTitle:"cardTitle_BkgK",cardDescription:"cardDescription_tZBR"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:l,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:l,children:[n," ",l]}),s&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e,n=(0,l.LM)(t),i=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(h,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function p(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,l.xz)(t.docId??void 0);return(0,r.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(p,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,l.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,l.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},35911:function(e,t,n){n.r(t),n.d(t,{default:()=>j});var r=n("52676");n("75271");var i=n("16408"),l=n("75490"),s=n("34799"),a=n("33467"),c=n("96907"),o=n("8255"),u=n("19593"),d=n("40673"),m=n("11413");let h="generatedIndexPage_YF0X",f="list_MgDN",p="title_hnAP";function g(e){let{categoryGeneratedIndex:t}=e;return(0,r.jsx)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,s.ZP)(t.image)})}function x(e){let{categoryGeneratedIndex:t}=e,n=(0,l.jA)();return(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("header",{children:[(0,r.jsx)(m.Z,{as:"h1",className:p,children:t.title}),t.description&&(0,r.jsx)("p",{children:t.description})]}),(0,r.jsx)("article",{className:"margin-top--lg",children:(0,r.jsx)(a.Z,{items:n.items,className:f})}),(0,r.jsx)("footer",{className:"margin-top--lg",children:(0,r.jsx)(c.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function j(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{...e}),(0,r.jsx)(x,{...e})]})}},66788:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(75271),i=n(78167);let l=["zero","one","two","few","many","other"];function s(e){return l.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},31212:function(e,t,n){n.d(t,{Z:()=>a});var r=n("52676"),i=n("77906"),l=n("54461"),s=n("47546");function a(e){let{permalink:t,title:n,subLabel:a,isNext:c}=e;return(0,r.jsxs)(i.Z,{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,l.W)(t))}("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}}}]);