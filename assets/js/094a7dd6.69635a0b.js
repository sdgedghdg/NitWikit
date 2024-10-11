"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5628],{95136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=r(86070),a=r(31503),l=r(39893),i=r(4621);const s={sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},o="JVM \u4f18\u5316",u={id:"process/maintenance/optimize/jvm/jvm",title:"JVM \u4f18\u5316",description:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684()\uff0c\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027\uff0c\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5\uff0c\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599",source:"@site/docs-java/process/maintenance/optimize/jvm/jvm.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm",permalink:"/NitWikit/Java/optimize/jvm",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/jvm.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1727693356e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316",permalink:"/NitWikit/Java/optimize"},next:{title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",permalink:"/NitWikit/Java/optimize/jvm/common"}},c={},d=[{value:"Java \u9009\u62e9",id:"java-\u9009\u62e9",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u5783\u573e\u56de\u6536\u5668",id:"\u5783\u573e\u56de\u6536\u5668",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"jvm-\u4f18\u5316",children:"JVM \u4f18\u5316"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684()\uff0c\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027\uff0c\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5\uff0c\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u573a\u6d4b\u8bd5\u7684\u7ec6\u8282\u548c\u65e5\u5fd7\uff0c\u62a5\u544a\uff0cSpark\uff0cGCLog\u7b49\u53ef\u4ee5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/lilingfengdev/Test-Java",children:"Test - Java"}),"\u627e\u5230"]}),"\n",(0,t.jsx)(n.h2,{id:"java-\u9009\u62e9",children:"Java \u9009\u62e9"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e Java8\n    A --\x3e Java11\n    A --\x3e Java21\n    Java8 --\x3e Dragonwell\n    Java11 --\x3e Dragonwell\n    Java21 --\x3e Windows\n    Windows --\x3e \u5185\u5b58\u5145\u8db3\n    \u5185\u5b58\u5145\u8db3 --\x3e C[GraalVM Enterprise Edition]\n    Windows --\x3e \u5185\u5b58\u4e0d\u8db3\n    \u5185\u5b58\u4e0d\u8db3 --\x3e OpenJ9\n    Java21 --\x3e Linux\n    Linux --\x3e \u5185\u5b58\u4e0d\u8db3\n    Linux --\x3e D[\u5185\u5b58\u5145\u8db3]\n    D --\x3e \u597d\u7684\u517c\u5bb9\u6027\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u9700\u8981| C\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u4e0d\u9700\u8981| E[Azul Zing]"}),"\n",(0,t.jsxs)(n.admonition,{title:"Zulu\u7684\u6027\u80fd",type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u6839\u636e\u5b98\u65b9\u5bf9 Zulu \u7684\u5b9a\u4f4d\uff0cZulu \u7684\u91cd\u70b9\u662f",(0,t.jsx)(n.strong,{children:"\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027"}),"\uff0c\u800c\u975e\u6027\u80fd"]}),(0,t.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u4eba\u5bf9",(0,t.jsx)(n.code,{children:"Zulu \u6027\u80fd\u597d"}),"\u8fd9\u4e00\u9519\u8bef\u770b\u6cd5\u4e3b\u8981\u662f\u6765\u6e90\u4e8e\u540c\u4e00\u516c\u53f8 Azul \u65d7\u4e0b\u7684\u53e6\u4e00\u6b3e\u4ea7\u54c1 Zing"]}),(0,t.jsx)(n.p,{children:"\u8be5\u4ea7\u54c1(Zing)\u7684\u4e3b\u8981\u4fa7\u91cd\u70b9\u662f\u6027\u80fd\uff0c\u4f46\u662f\uff0c\u5982\u679c\u4f60\u4e0d\u60f3\u6298\u817e\uff0c\u60f3\u62e5\u6709\u4e00\u4e2a\u8d85\u9ad8\u7a33\u5b9a\u6027\u7684\u73af\u5883\uff0cZulu \u4ecd\u7136\u662f\u4f60\u7684\u6700\u4f73\u9009\u62e9"})]}),"\n",(0,t.jsxs)(n.admonition,{title:"\u517c\u5bb9\u6027",type:"tip",children:[(0,t.jsx)(n.p,{children:"\u6839\u636e\u6211\u4eec\u7684\u6d4b\u8bd5\uff0cGraalVM\uff0cDragonwell\uff0cZulu \u76ee\u524d\u90fd\u6ca1\u6709\u88ab\u62a5\u544a\u8fc7\u4e0d\u517c\u5bb9"}),(0,t.jsx)(n.p,{children:"Zing \u4e0e LuckPerms \u4ee5\u53ca\u4e00\u4e9b\u7279\u6b8a\u63d2\u4ef6\u4f1a\u6709\u4e00\u70b9\u4e0d\u517c\u5bb9"}),(0,t.jsx)(n.p,{children:"OpenJ9 \u867d\u7136\u5185\u5b58\u5360\u7528\u5f88\u4f4e\uff0c\u4f46\u662f\u6027\u80fd\u5f88\u5dee\uff0c\u5e76\u4e14\u4e0e\u5f88\u591a\u63d2\u4ef6\u6709\u4e0d\u517c\u5bb9(\u6bd4\u5982 Spark)"}),(0,t.jsx)(n.p,{children:"GraalVM \u5728 22.3.0 \u4fee\u590d\u4e86\u6240\u6709\u5df2\u77e5\u7684 Minecraft \u9519\u8bef"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n","\n",(0,t.jsxs)(l.A,{queryString:"jvm-download",children:[(0,t.jsxs)(i.A,{value:"dragonwell",label:"Dragonwell",children:[(0,t.jsx)(n.p,{children:"Dragonwell \u5206\u4e3a  Standard Edition \u548c Extended Edition\uff0c\u63a8\u8350\u4e0b\u8f7d Extended Edition"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://dragonwell-jdk.io/",children:"\u5b98\u7f51"})," \u4e0b\u8f7d\u533a\u57df\u9009\u62e9",(0,t.jsx)(n.code,{children:"China Mainland"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/dragonwell-project/dragonwell8/releases",children:"Dragonwell 8 \u9884\u89c8"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/dragonwell-project/dragonwell11/releases",children:"Dragonwell 11 \u9884\u89c8"})}),"\n"]})]}),(0,t.jsxs)(i.A,{value:"graalvm",label:"GraalVM",children:[(0,t.jsx)(n.p,{children:"GraalVM \u5206\u4e3a Community Edition(CE) \u548c Enterprise Edition(EE)\uff0c\u9664\u975e\u4f60\u670d\u52a1\u5668\u5927\u5230\u4f1a\u88ab Oracle \u627e\u4e0a\u95e8\uff0c\u4e0d\u7136\u8bf7\u9009\u62e9 Enterprise Edition"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.graalvm.org/downloads/",children:"\u4e0b\u8f7d EE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/graalvm/graalvm-ce-builds/releases/",children:"\u4e0b\u8f7d CE"})}),"\n"]}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Oracle \u5b98\u7f51\u540c\u6837\u63d0\u4f9b GraalVM\uff0c\u4f46\u662f\u4e0a\u9762\u7684 GraalVM EE \u5305\u542b\u4e86\u4f01\u4e1a\u7248\u5957\u4ef6\uff0c\u8fd9\u4e9bMC\u6839\u672c\u7528\u4e0d\u5230\uff0c\u53ea\u9700\u8981\u4f01\u4e1a\u7248\u7f16\u8bd1\u5668\u5c31\u53ef\u4ee5\u4e86"})})]}),(0,t.jsxs)(i.A,{value:"zing",label:"Azul Zing",children:[(0,t.jsx)(n.p,{children:"Azul Zing \u4e0d\u80fd\u76f4\u63a5\u88ab\u4e0b\u8f7d\uff0c\u9700\u8981\u586b\u5199\u8bd5\u7528\u7533\u8bf7\u8868\uff0c\u4f46\u6211\u4eec\u901a\u8fc7\u795e\u79d8\u624b\u6bb5\u641e\u5230\u4e86\u5b89\u88c5\u5305"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux.x86_64.rpm",children:"RPM"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux_x64.tar.gz",children:"TAR.GZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux_amd64.deb",children:"DEB"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.azul.com/downloads/#prime",children:"\u5b98\u7f51"})}),"\n"]})]}),(0,t.jsxs)(i.A,{value:"zulu",label:"Azul Zulu",children:[(0,t.jsx)(n.p,{children:"Azul Zulu \u652f\u6301 Java 8 \u4ee5\u4e0a\uff0cJava 7 \u548c 6 \u9700\u8981\u6210\u4e3a\u5ba2\u6237\u624d\u80fd\u4e0b\u8f7d"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.azul.com/downloads/?package=jdk&show-old-builds=true#zulu",children:"\u5b98\u7f51"})}),"\n"]})]}),(0,t.jsxs)(i.A,{value:"openj9",label:"OpenJ9",children:[(0,t.jsxs)(n.p,{children:["OpenJ9 \u6709\u8ba4\u8bc1\u7248\u548c\u975e\u8ba4\u8bc1\u7248\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u548c OpenJ9 \u7684\u5173\u7cfb\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5173\u7cfb\u800c\u4f7f\u7528\u4e0d\u540c\u7684\u8bb8\u53ef\u8bc1\u7f62\u4e86\uff0c\u672c\u8d28\u4ee3\u7801\u662f\u4e00\u6837\u7684\uff0c\u76f4\u63a5\u4e0b",(0,t.jsx)(n.code,{children:"IBM Semeru Runtime Open Edition"}),"\u5c31\u884c"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",children:"\u5b98\u7f51"})}),"\n"]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5783\u573e\u56de\u6536\u5668",children:"\u5783\u573e\u56de\u6536\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u7ecf\u8fc7\u6211\u4eec\u7684\u591a\u6b21\u6d4b\u8bd5\uff0cG1GC\u548cZGC \u6700\u9002\u5408MC\u670d\u52a1\u5668(\u8fd8\u6709\u4e00\u4e2a Zing C4)"}),"\n",(0,t.jsx)(n.p,{children:"\u9009\u62e9\uff01"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e B[\u673a\u5668\u914d\u7f6e\u8db3\u591f\uff0c\u8d77\u6b654h8g\uff0c\u63a8\u83508h8g]\n    A --\x3e \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807\n    B --\x3e C[Java 21+\uff0c\u6216Dragonwell 11]\n    B --\x3e \u5176\u4ed6\n    C --\x3e ZGC\n    \u5176\u4ed6 --\x3e G1\n    \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807 --\x3e G1"}),"\n",(0,t.jsx)(n.p,{children:"ZGC \u7684\u65e0\u505c\u987f\u53ef\u4ee5\u7ed9\u73a9\u5bb6\u5e26\u6765\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u5e76\u4e14\u66f4\u5145\u5206\u7684\u5229\u7528\u591a\u6838"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e GC \u7ec6\u8282\u6027\u7684\u4f18\u5316\u8bf7\u9605\u8bfb\u6bcf\u4e2aJava\u7684\u4f18\u5316\u6307\u5357"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4621:(e,n,r)=>{r.d(n,{A:()=>i});r(30758);var t=r(13526);const a={tabItem:"tabItem_MH1p"};var l=r(86070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},39893:(e,n,r)=>{r.d(n,{A:()=>E});var t=r(30758),a=r(13526),l=r(13841),i=r(25557),s=r(55461),o=r(92282),u=r(77347),c=r(63591);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:r,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=u??x;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=r(6919);const v={tabList:"tabList_KpEJ",tabItem:"tabItem_Vj3_"};var f=r(86070);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function E(e){const n=(0,j.A)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},31503:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(30758);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);