"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6769],{21182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(86070),i=n(11100),s=n(6767);const a={title:"\u8fdb\u9636\u6559\u7a0b",slug:"/advance",sidebar_position:6},o="\u8fdb\u9636\u6559\u7a0b",c={id:"advance/advance",title:"\u8fdb\u9636\u6559\u7a0b",description:"\u8fd9\u4e00\u90e8\u5206\u5e76\u4e0d\u9002\u5408\u65b0\u624b\u9605\u8bfb\uff0c\u4e3b\u8981\u662f\u7ed9\u6709\u4e00\u5b9a\u5f00\u670d\u7ecf\u9a8c\u6216\u8bfb\u5b8c\u4e86\u672c\u6587\u6863\u7684\u5176\u4ed6\u5185\u5bb9\u7684\u4eba\u3002",source:"@site/docs-java/advance/advance.md",sourceDirName:"advance",slug:"/advance",permalink:"/NitWikit/Java/advance",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/advance.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:1727694439e3,sidebarPosition:6,frontMatter:{title:"\u8fdb\u9636\u6559\u7a0b",slug:"/advance",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"GeyserMEG4\u652f\u6301",permalink:"/NitWikit/Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports"},next:{title:"Linux \u5f00\u670d",permalink:"/NitWikit/Java/advance/Linux"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u8fdb\u9636\u6559\u7a0b",children:"\u8fdb\u9636\u6559\u7a0b"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u4e00\u90e8\u5206\u5e76\u4e0d\u9002\u5408\u65b0\u624b\u9605\u8bfb\uff0c\u4e3b\u8981\u662f\u7ed9\u6709\u4e00\u5b9a\u5f00\u670d\u7ecf\u9a8c\u6216\u8bfb\u5b8c\u4e86\u672c\u6587\u6863\u7684\u5176\u4ed6\u5185\u5bb9\u7684\u4eba\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u4ee5\u5c06\u672c\u7ae0\u89c6\u4e3a\u662f\u5bf9\u4e4b\u524d\u7684\u8865\u5145\u90e8\u5206\uff0c\u5982\u679c\u4f60\u80fd\u5b8c\u5168\u7406\u89e3\u8fd9\u4e00\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u606d\u559c\u4f60\uff0c\u5df2\u7ecf\u5b8c\u5168\u6446\u8131\u4e86\u7b28\u86cb\u7684\u79f0\u53f7\uff01"}),"\n","\n",(0,r.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6767:(e,t,n)=>{n.d(t,{A:()=>v});n(30758);var r=n(13526),i=n(40236),s=n(66484),a=n(70013),o=n(8508),c=n(25857),l=n(19808);const u={cardContainer:"cardContainer_sUhM",cardTitle:"cardTitle_pe4y",cardDescription:"cardDescription_aYht"};var d=n(86070);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},70013:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),i=n(54924);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},11100:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);