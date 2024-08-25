"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9238],{98406:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var t=i(96942),n=i(99832);const d={title:"\u5b89\u88c5",slug:"/database/install",sidebar_position:1},c=void 0,a={id:"advance/database/install",title:"\u5b89\u88c5",description:"\u6570\u636e\u5e93\u5b89\u88c5",source:"@site/docs/advance/database/install.md",sourceDirName:"advance/database",slug:"/database/install",permalink:"/NitWikit/database/install",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/database/install.md",tags:[],version:"current",lastUpdatedBy:"\u53ef\u7231\u7684\u76ae\u5361\u4e18",lastUpdatedAt:172457092e4,sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5",slug:"/database/install",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u76f8\u5173",permalink:"/NitWikit/database"},next:{title:"\u4f7f\u7528",permalink:"/NitWikit/database/manage"}},r={},h=[{value:"\u6570\u636e\u5e93\u5b89\u88c5",id:"\u6570\u636e\u5e93\u5b89\u88c5",level:2},{value:"\u76f4\u63a5\u5b89\u88c5",id:"\u76f4\u63a5\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",id:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",level:3},{value:"\u5c0f\u76ae\u6570\u636e\u5e93",id:"\u5c0f\u76ae\u6570\u636e\u5e93",level:4},{value:"\u5b9d\u5854\u9762\u677f",id:"\u5b9d\u5854\u9762\u677f",level:4}];function l(s){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,n.R)(),...s.components},{Details:d}=e;return d||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6570\u636e\u5e93\u5b89\u88c5",children:"\u6570\u636e\u5e93\u5b89\u88c5"}),"\n",(0,t.jsx)(e.h3,{id:"\u76f4\u63a5\u5b89\u88c5",children:"\u76f4\u63a5\u5b89\u88c5"}),"\n",(0,t.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u4e0b\u8f7d\u5b89\u88c5\u5305\u6765\u5b89\u88c5\uff0c\u5982\u679c\u89c9\u5f97\u9ebb\u70e6\uff0c\u8bf7\u770b\u4e0b\u9762\u7684",(0,t.jsx)(e.strong,{children:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5"})]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://mirrors.sohu.com/mysql/MySQL-8.0/",children:"sohu MySQL \u955c\u50cf\u6e90"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://mirrors.aliyun.com/mysql/",children:"\u963f\u91cc MySQL \u955c\u50cf\u6e90"})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u4e8e Windows \u7528\u6237\uff0c\u8bf7\u4e0b\u8f7d ",(0,t.jsx)(e.code,{children:".msi"})," \u6216 ",(0,t.jsx)(e.code,{children:"zip"})," \u7684\u5305\uff0c\u5176\u4e2d ",(0,t.jsx)(e.code,{children:".msi"})," \u662f\u5b89\u88c5\u5305\uff0c",(0,t.jsx)(e.code,{children:".zip"})," \u662f\u7eff\u8272\u7248\uff0c\u63a8\u8350\u4e0b\u8f7d ",(0,t.jsx)(e.code,{children:".msi"})," \u7248\u672c\u6765\u5b89\u88c5"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u4e8e MySQL \u5b89\u88c5\uff0c\u8bf7\u770b\u8fd9\u7bc7\u6587\u7ae0: ",(0,t.jsx)(e.a,{href:"https://blog.csdn.net/m0_52559040/article/details/121843945",children:"2024 \u5e74 MySQL 8.0 \u5b89\u88c5 \u914d\u7f6e \u6559\u7a0b \u6700\u7b80\u6613\uff08\u4fdd\u59c6\u7ea7\uff09"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u800c\u6807\u7740 ",(0,t.jsx)(e.code,{children:"ubuntu"})," \u6216 ",(0,t.jsx)(e.code,{children:"debian"})," \u662f linux \u7248\u672c\u7684\u5b89\u88c5\u5305\uff0clinux \u7528\u6237\u8bf7\u4e0b\u8f7d\u8fd9\u4e2a"]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4e0b\u8f7d\u7684\u65f6\u5019\u8bf7\u52a1\u5fc5\u6ce8\u610f\u81ea\u5df1\u7684\u7cfb\u7edf\u3001\u67b6\u6784\u7b49\u662f\u5426\u4e0e\u5b89\u88c5\u5305\u4e0a\u6807\u7684\u5339\u914d"}),"\n",(0,t.jsx)(e.h3,{id:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5",children:"\u4f7f\u7528\u5de5\u5177\u5b89\u88c5"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4f1a\u544a\u8bc9\u4f60 ",(0,t.jsx)(e.strong,{children:"\u6211\u8ba4\u4e3a"})," \u6700\u7b80\u5355\u7684\u51e0\u79cd\u5b89\u88c5\u6570\u636e\u5e93\u7684\u65b9\u6cd5"]}),"\n",(0,t.jsx)(e.h4,{id:"\u5c0f\u76ae\u6570\u636e\u5e93",children:"\u5c0f\u76ae\u6570\u636e\u5e93"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(15676).A+"",width:"816",height:"467"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(39607).A+"",width:"940",height:"635"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(40110).A+"",width:"1524",height:"804"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(38593).A+"",width:"632",height:"395"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(17464).A+"",width:"787",height:"363"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(13075).A+"",width:"560",height:"400"})})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u5378\u8f7dMySQL5\u548c\u5b89\u88c5MySQL8"}),(0,t.jsx)(e.p,{children:"MySQL5 \u7248\u672c\u592a\u4f4e\u4e86\uff0c\u5f88\u591a\u63d2\u4ef6\u9700\u8981\u66f4\u9ad8\u7248\u672c\u7684\uff0c\u88c5 MySQL8 \u5c31\u591f\u7528\u4e86"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(81162).A+"",width:"800",height:"630"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(8285).A+"",width:"800",height:"630"})})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u521d\u6b21\u542f\u52a8"}),(0,t.jsx)(e.p,{children:"\u5b89\u88c5\u597d\u540e\u5728\u9996\u9875\u542f\u52a8 MySQL"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(87156).A+"",width:"800",height:"630"})}),(0,t.jsx)(e.p,{children:"\u66f4\u6539 root \u8d26\u6237\u7684\u5bc6\u7801"}),(0,t.jsxs)(e.admonition,{type:"danger",children:[(0,t.jsx)(e.p,{children:"\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"}),(0,t.jsxs)(e.p,{children:["\u5c24\u5176\u662f\u4f60\u6253\u7b97\u628a\u6570\u636e\u5e93\u5f00\u5230\u516c\u7f51\uff0c",(0,t.jsx)(e.strong,{children:"\u7edd\u5bf9\u4e0d\u8981"}),"\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u8fd9\u771f\u7684\u5f88\u4e25\u91cd"})})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(32006).A+"",width:"800",height:"630"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(71023).A+"",width:"800",height:"630"})}),(0,t.jsx)(e.p,{children:"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5efa\u6570\u636e\u5e93\u4e86\uff0c\u5efa\u597d\u4e4b\u540e\u628a\u4f60\u586b\u8fd9\u91cc\u7684\u4fe1\u606f\u586b\u5230\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u91cc"})]}),"\n",(0,t.jsx)(e.h4,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(52116).A+"",width:"840",height:"470"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(73245).A+"",width:"1687",height:"1011"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(76898).A+"",width:"1614",height:"824"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(98027).A+"",width:"877",height:"293"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(28176).A+"",width:"570",height:"410"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(25081).A+"",width:"681",height:"571"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(35694).A+"",width:"611",height:"591"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(78711).A+"",width:"942",height:"978"})}),(0,t.jsx)(e.p,{children:"\u5b9d\u5854\u9762\u677f\u662f\u5fc5\u987b\u8981\u7ed1\u5b9a\u8d26\u53f7\u7684"}),(0,t.jsx)(e.p,{children:"\u6309\u7167\u63d0\u793a\u53bb\u505a"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(79383).A+"",width:"921",height:"641"})}),(0,t.jsx)(e.p,{children:"\u5168 x \u6389\uff0c\u4e00\u4e2a\u90fd\u4e0d\u9700\u8981\u88c5"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(89390).A+"",width:"1462",height:"704"})})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"\u5b89\u88c5MySQL"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(8165).A+"",width:"1904",height:"712"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(74300).A+"",width:"528",height:"366"})}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(74259).A+"",width:"576",height:"352"})})]})]})}function p(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(l,{...s})}):l(s)}},15676:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},32006:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},71023:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},52116:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},73245:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},76898:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},98027:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},28176:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},25081:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},35694:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/18-fcf29f01840856988636322a077e49bf.png"},78711:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},39607:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},79383:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/20-84283116b360b86728c489c3345e9175.png"},89390:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},8165:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},74300:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},74259:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},40110:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},38593:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},17464:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},13075:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},81162:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},8285:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},87156:(s,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},99832:(s,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var t=i(750);const n={},d=t.createContext(n);function c(s){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:c(s.components),t.createElement(d.Provider,{value:e},s.children)}}}]);