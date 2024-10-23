"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7785],{94169:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var s=i(86070),l=i(51582);const d={title:"\u8d2d\u7f6e\u670d\u52a1\u5668",sidebar_position:2},r="\u8d2d\u7f6e\u670d\u52a1\u5668",c={id:"process/deploy/purchase-server",title:"\u8d2d\u7f6e\u670d\u52a1\u5668",description:"\u4f4e\u4ef7\u4e91\u8d85\u5f00\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff0c\u4e0d\u8981\u8d2a\u56fe\u4fbf\u5b9c\uff01",source:"@site/docs/process/deploy/purchase-server.md",sourceDirName:"process/deploy",slug:"/process/deploy/purchase-server",permalink:"/process/deploy/purchase-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/process/deploy/purchase-server.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1729683245e3,sidebarPosition:2,frontMatter:{title:"\u8d2d\u7f6e\u670d\u52a1\u5668",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883",permalink:"/deploy"},next:{title:"\u53ef\u9009\u65b9\u5f0f",permalink:"/process/deploy/optional-mode"}},h={},t=[{value:"\u4e91\u670d\u52a1\u5668",id:"\u4e91\u670d\u52a1\u5668",level:2},{value:"CPU",id:"cpu",level:3},{value:"\u6838\u5fc3\u6570",id:"\u6838\u5fc3\u6570",level:4},{value:"CPU \u5355\u6838\u6027\u80fd",id:"cpu-\u5355\u6838\u6027\u80fd",level:4},{value:"\u5185\u5b58",id:"\u5185\u5b58",level:3},{value:"\u5e26\u5bbd",id:"\u5e26\u5bbd",level:3},{value:"\u7cfb\u7edf",id:"\u7cfb\u7edf",level:3},{value:"\u7269\u7406\u673a",id:"\u7269\u7406\u673a",level:2},{value:"CPU",id:"cpu-1",level:3},{value:"\u4e3b\u677f",id:"\u4e3b\u677f",level:3},{value:"\u5185\u5b58",id:"\u5185\u5b58-1",level:3},{value:"\u786c\u76d8",id:"\u786c\u76d8",level:3},{value:"\u7535\u6e90",id:"\u7535\u6e90",level:3},{value:"\u6563\u70ed\u5668",id:"\u6563\u70ed\u5668",level:3},{value:"\u7cfb\u7edf",id:"\u7cfb\u7edf-1",level:3}];function o(n){const e={a:"a",admonition:"admonition",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u8d2d\u7f6e\u670d\u52a1\u5668",children:"\u8d2d\u7f6e\u670d\u52a1\u5668"})}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsx)(e.p,{children:"\u4f4e\u4ef7\u4e91\u8d85\u5f00\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff0c\u4e0d\u8981\u8d2a\u56fe\u4fbf\u5b9c\uff01"})}),"\n",(0,s.jsx)(e.p,{children:"\u642d\u5efa Minecraft \u670d\u52a1\u5668\u5bf9\u670d\u52a1\u5668\u7684 CPU \u6027\u80fd\u3001\u5185\u5b58\u5927\u5c0f\u3001\u786c\u76d8 I/O \u901f\u5ea6\u548c\u7f51\u7edc\u8d28\u91cf\uff0c\u7f51\u7edc\u5e26\u5bbd\u5747\u6709\u8f83\u9ad8\u7684\u8981\u6c42\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4e91\u670d\u52a1\u5668",children:"\u4e91\u670d\u52a1\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u4e0d\u662f\u81ea\u5df1\u8d2d\u4e70\u7684\u800c\u662f\u4ece\u670d\u52a1\u5546\u5904\u79df\u7528\u7684\uff0c\u6bd4\u5982VPS\u6216\u9762\u677f\u3002\u81f3\u4e8e\u8fd9\u5230\u5e95\u662f\u4ec0\u4e48\uff0c\u4e0b\u4e00\u7ae0\u4f1a\u8bb2\u89e3\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"cpu",children:"CPU"}),"\n",(0,s.jsx)(e.h4,{id:"\u6838\u5fc3\u6570",children:"\u6838\u5fc3\u6570"}),"\n",(0,s.jsx)(e.p,{children:"\u603b\u7684\u8bf4\u6765\uff0c\u6838\u5fc3\u6570\u91cf\u8981\u6839\u636e\u73a9\u5bb6\u6570\u91cf\uff0c\u670d\u52a1\u5668\u6027\u8d28\uff0c\u9884\u7b97\u9009\u62e9\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u7531\u4e8e Minecraft \u7684 ",(0,s.jsx)(e.a,{href:"https://nitwikit.yizhan.wiki/basic/what-is-caton",children:"Tick-loop"})," \u903b\u8f91\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u66f4\u591a\u6838\u5fc3\u53ea\u80fd\u7528\u4e8e\u751f\u6210\u533a\u5757\u3001\u63d2\u4ef6\u4efb\u52a1\u7b49\u975e\u4e3b\u7ebf\u7a0b\u4efb\u52a1\uff0c\u4e0d\u5efa\u8bae\u8d85\u8fc7 8 \u6838\u5fc3\u7684\u670d\u52a1\u5668\u7ee7\u7eed\u589e\u52a0\u6838\u5fc3\u63d0\u5347\u6d41\u7545\u5ea6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u666e\u901a\u63d2\u4ef6\u751f\u5b58\u670d\uff0c\u4eba\u6570\u5c11\u4e8e 50 \u65f6\u4e00\u822c\u53ef\u4ee5\u4f7f\u7528\u5355\u7aef\u5904\u7406\uff0c\u9009\u62e9\u6838\u5fc3\u6570\u91cf 4 - 8 \u4e2a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4eba\u6570 > 50 \u63a8\u8350\u4f7f\u7528\u591a\u7aef\u5747\u8861\u6216\u8005 Folia \uff0c\u5e38\u89c1\u7684\u5206\u751f\u5b58 x \u533a\u7684\u5c31\u662f\u591a\u7aef\u3002\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u6709\u6548\u5229\u7528\u591a\u6838\u5fc3\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u591a\u7aef\uff0c\u6838\u5fc3\u6570\u91cf\u4e3b\u8981\u53d6\u51b3\u4e8e\u603b\u4eba\u6570\uff0c\u6bcf 100 \u73a9\u5bb6\u591a\u52a0 4 - 8 \u4e2a\u6838\u5fc3\u662f\u8f83\u4e3a\u5408\u7406\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u800c Folia \u5b98\u65b9\u63a8\u8350\u7684\u914d\u7f6e\u5728 16 \u6838\u5fc3\u4ee5\u4e0a\uff0c\u5982\u679c\u662f\u65b0\u624b\u6216\u5bf9\u73b0\u6709\u63d2\u4ef6\u6709\u4e25\u91cd\u4f9d\u8d56\u7684\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u751f\u6001\u8f83\u5dee\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"cpu-\u5355\u6838\u6027\u80fd",children:"CPU \u5355\u6838\u6027\u80fd"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(85992).A+"",width:"688",height:"611"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u822c\u7684\uff0c\u5f53\u4f60\u642d\u5efa\u662f\u7eaf\u51c0\u7684\u3001\u4e0d\u542b\u6a21\u7ec4\u7684\u670d\u52a1\u5668\u65f6\uff0c\u5bf9\u5355\u6838\u6027\u80fd\u7684\u8981\u6c42\u8f83\u4f4e\uff1b\u5f53\u4f60\u642d\u5efa\u662f\u542b\u6a21\u7ec4\u7684\u670d\u52a1\u5668\u65f6\uff0c\u5bf9\u5355\u6838\u6027\u80fd\u7684\u8981\u6c42\u8f83\u9ad8\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["CPU \u603b\u5360\u7528\u4e0d\u7b97\u9ad8\u65f6\uff0cMinecraft \u7684\u670d\u52a1\u5668\u6027\u80fd\u4e0e CPU \u5355\u6838\u6027\u80fd\u51e0\u4e4e\u4e3a\u7ebf\u6027\u5173\u7cfb\uff0c\u5355\u6838\u6027\u80fd\u7ffb\u500d\u51e0\u4e4e\u5c31\u53ef\u4ee5\u591a\u5e26\u4e00\u500d",(0,s.jsx)(e.strong,{children:"\u751a\u81f3\u66f4\u591a"}),"\u7684\u4eba\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5c3d\u91cf\u9009\u62e9\u4e0d\u8d85\u5f00\u7684\u4e91(\u5982\u4e0a\u56fe\uff0c\u56fe\u4e2d 50% \u7684\u6027\u80fd\u5dee\u5c31\u5728\u4e8e\u4f4e\u4ef7\u4e91\u8d85\u5f00\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff0c\u4e0d\u8981\u8d2a\u56fe\u4fbf\u5b9c\uff0c\u670d\u52a1\u5668\u5230\u624b\u540e\u8981\u81ea\u5df1\u8dd1\u5206)"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u8d85\u8fc7 20 \u4eba\u65f6\u4e3a\u8282\u7701\u6210\u672c\u53ef\u4ee5\u4f7f\u7528 E5 \u4e3b\u673a\uff0c\u800c\u5355\u7aef\u4eba\u6570\u591a\u4e8e 20 \u57fa\u672c\u5c31\u610f\u5473\u7740\u9700\u8981\u727a\u7272\u73a9\u5bb6\u7684\u6e38\u620f\u4f53\u9a8c\u6216\u8005\u9700\u8981\u6362\u66f4\u597d\u7684 CPU \u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5185\u5b58",children:"\u5185\u5b58"}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsx)(e.p,{children:"\u5185\u5b58\u51e0\u4e4e\u4e0d\u7528\u8003\u8651 DDR4 / DDR5\uff0c\u9ad8\u9891/\u4f4e\u9891\u5185\u5b58\u7684\u533a\u522b\uff0c\u6700\u91cd\u8981\u7684\u662f\u5185\u5b58\u5927\u5c0f\u3002"}),(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u9ad8\u9891 DDR5 \u5185\u5b58\u548c DDR 4 \u5185\u5b58\u5f00\u670d\u57fa\u672c\u6ca1\u6709\u5dee\u522b\uff0c\u5982\u679c\u662f\u81ea\u5df1\u4e70\u7684\u670d\u52a1\u5668\u6258\u7ba1\u7684\u5c31\u7701\u70b9\u94b1\u5427\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c mod \u670d\u6bd4\u63d2\u4ef6\u670d\u5360\u7528\u9ad8\uff0c\u9ad8\u7248\u672c\u6bd4\u4f4e\u7248\u672c\u7565\u9ad8\u3002\u5c3d\u91cf\u9009\u62e9\u6838\u5fc3\u6570\u4e0e\u5185\u5b58\u6bd4\u4f8b\u5728 1:2 \u4ee5\u4e0a\u7684\u5957\u9910(\u63a8\u8350 1:2 - 1:4 )\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u65b9\u9762\uff0c\u6838\u5fc3\u591a\u5185\u5b58\u5c11\u5fc5\u7136\u9762\u4e34\u6027\u80fd\u4e0b\u964d\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u6838\u5fc3\u591a\u5185\u5b58\u5c11\u57fa\u672c\u4e3a\u8d85\u5f00\uff0c\u6027\u80fd\u4f1a\u6bd4\u6b63\u5e38\u60c5\u51b5\u4e0b\u5dee\u5f88\u591a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5927\u5385\u670d\u5206\u914d 1G - 2G \u5185\u5b58\uff0c\u666e\u901a\u751f\u5b58\u670d\u52a1\u5668\u6216\u7a7a\u5c9b\u670d\u52a1\u5668\u5efa\u8bae\u5206\u914d 8G - 12G \uff0c\u5355\u7aef\u4eba\u6570\u8f83\u591a\u5efa\u8bae\u4f7f\u7528 12G - 24G \u5185\u5b58\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u5e76\u4e0d\u662f\u4eba\u8d8a\u591a\u9700\u8981\u7684\u5185\u5b58\u8d8a\u591a\uff0c\u4e0d\u5efa\u8bae\u5206\u914d\u8fc7\u591a\u5185\u5b58\uff0c\u5426\u5219\u5bfc\u81f4 GC (\u5185\u5b58\u5783\u573e\u56de\u6536)\u65f6\u95f4\u8fc7\u957f\u5bfc\u81f4\u987f\u5361\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5e26\u5bbd",children:"\u5e26\u5bbd"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u73a9\u5bb6\u6570\u91cf\u53ca\u89c6\u91ce\u60c5\u51b5\u5206\u914d\u3002\u4e00\u822c\u60c5\u51b5\u4f4e\u7248\u672c\u5168\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5e73\u5747\u6bcf\u4e2a\u73a9\u5bb6\u4f1a\u4f7f\u7528 0.25 - 0.4 Mbps \u7684\u4e0a\u884c\u5e26\u5bbd\u3002"}),"\n",(0,s.jsx)(e.p,{children:"1.18 \u4ee5\u4e0a\u670d\u52a1\u5668\u5e73\u5747\u6bcf\u4eba\u4f7f\u7528 0.3-0.5Mbps \u4e0a\u884c\u5e26\u5bbd(\u4e00\u7fa4\u8dd1\u56fe\u4f6c\u53e6\u8bf4)\u4e5f\u5c31\u662f\u8bf4\u4e00\u822c\u63d0\u4f9b\u7684 10M \u5e26\u5bbd\u591f\u5e26 15-20 \u4eba\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u6837\u7684\u6709\u7684\u670d\u52a1\u5546\u4f1a\u63d0\u4f9b\u6240\u8c13\u201c\u5171\u4eab\u4e0a\u884c\u201d\uff0c\u6709\u65f6\u4f1a\u51fa\u73b0\u5176\u4ed6\u7528\u6237\u4f20\u6587\u4ef6\uff0cVPS \u6240\u5728\u5bbf\u4e3b\u673a\u6240\u6709\u7528\u6237\u90fd\u53d8\u5361\u7684\u60c5\u51b5\uff0c\u5efa\u8bae\u65e0\u8bba\u5982\u4f55\u641e\u5230\u4e00\u4e2a\u72ec\u4eab\u5e26\u5bbd\u4fdd\u5e95\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60f3\u8981\u5bb6\u5ead\u5e26\u5bbd\u5f00\u670d\u8981\u8003\u8651\u5230\u5403 DDOS \u548c\u90e8\u5206\u8fd0\u8425\u5546\u4e0d\u63d0\u4f9b\u516c\u7f51\u6216\u8005\u516c\u7f51\u4e0a\u884c\u901f\u5ea6\u975e\u5e38\u6162\u7684\u60c5\u51b5\uff0c\u53ea\u5efa\u8bae\u57fa\u53cb\u670d\u4f7f\u7528\uff0c\u6216\u8005\u914d\u5408 FRP \u7b49\u6d41\u91cf\u8f6c\u53d1\u65b9\u5f0f\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u7cfb\u7edf",children:"\u7cfb\u7edf"}),"\n",(0,s.jsx)(e.p,{children:"Windows \u7cfb\u7edf\u4e00\u822c\u6709 Windows server \uff0c\u5b83\u548c\u666e\u901a\u7684 windows \u7cfb\u7edf\u64cd\u4f5c\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\uff0c\u53ea\u8981\u7528\u8fc7 windows \u5c31\u80fd\u5feb\u901f\u4e0a\u624b\uff0c\u4f46\u662f Window s\u7cfb\u7edf\u76f8\u5bf9\u5360\u7528\u7cfb\u7edf\u8d44\u6e90\u66f4\u9ad8\u3002\nLinux \u7cfb\u7edf\u5e38\u89c1\u7684\u6709 Ubuntu \u3001 Cent OS \u548c Debian \u3002\u6211\u4eec\u65e5\u5e38\u5f88\u5c11\u63a5\u89e6Linux\u7cfb\u7edf\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u9700\u8981\u4e8b\u5148\u5b66\u4e60 Linux \u7cfb\u7edf\u7684\u64cd\u4f5c\u3002 Linux \u7cfb\u7edf\u5360\u7528\u7cfb\u7edf\u8d44\u6e90\u66f4\u4f4e\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5e0c\u671b\u957f\u671f\u5f00\u670d\uff0c\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528 Linux \u7cfb\u7edf(\u5982 Ubuntu/CentOS \u7b49)\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4ec5\u5360\u7528\u7cfb\u7edf\u8d44\u6e90\u66f4\u4f4e\uff0c\u800c\u4e14\u7531\u4e8e\u5176\u7cfb\u7edf\u672c\u8eab\u673a\u5236\u4e0e Windows \u4e0d\u540c\uff0c\u957f\u671f\u8fd0\u884c\u8981\u6bd4 Windows \u7cfb\u7edf\u7a33\u5b9a\u5f97\u591a\u3002\n\u5f88\u591a\u65f6\u5019\u4e00\u4e9b\u670d\u52a1\u5668\u8f6f\u4ef6\u4e5f\u4ec5\u652f\u6301 Linux \u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7269\u7406\u673a",children:"\u7269\u7406\u673a"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u662f\u81ea\u5df1\u8d2d\u4e70\u7684\u800c\u4e0d\u662f\u79df\u7528\u7684\uff0c\u90a3\u5c31\u662f\u7269\u7406\u673a\uff0c\u5bb6\u91cc\u4e91\u548c\u673a\u623f\u7684\u72ec\u7acb\u673a\u90fd\u662f\u7269\u7406\u673a\u3002\u81f3\u4e8e\u8fd9\u5230\u5e95\u662f\u4ec0\u4e48\uff0c\u4e0b\u4e00\u7ae0\u4f1a\u8bb2\u89e3\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"cpu-1",children:"CPU"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u5e38\u9664\u975e\u4f60\u6709\u660e\u786e\u7684\u9700\u6c42\uff0c\u4e0d\u5efa\u8bae\u4e3a\u4e86\u5f00mc\u670d\u52a1\u5668\u800c\u8d2d\u4e70\u4efb\u4f55e5(\u6d0b\u5783\u573e)\u3001\u81f3\u5f3a\u91d1\u94f6\u94dc\u724c\u548cEPYC\u7684\u670d\u52a1\u5668CPU \u3002\u4f18\u5148\u9009\u7528\u82f1\u7279\u5c14\u9177\u777f\u548c AMD \u9510\u9f99 CPU \u3002\u7531\u4e8emc\u670d\u52a1\u5668\u5bf9\u5355\u6838\u8981\u6c42\u975e\u5e38\u9ad8\uff0c\u6240\u4ee5\u5c3d\u53ef\u80fd\u9009\u62e9\u65b0\u6b3e\u9ad8\u9891\u7248\u672c\u7684 CPU \u3002\n\u533a\u5206\u7684\u65b9\u5f0f\u662f\u82f1\u7279\u5c14 CPU \u540e\u9762\u5e26 K \uff0c\u6bd4\u5982 10600K\u300112700KF \uff0cAMD \u7684C PU \u540e\u9762\u5e26 X\uff0c\u6bd4\u59825600X\u30017950X\u3002\u7ea7\u522b\u66f4\u9ad8\u7684CPU\u5f80\u5f80\u6838\u5fc3\u6570\u548c\u5355\u6838\u6027\u80fd\u90fd\u66f4\u9ad8\u3002\u8981\u5f00\u7684\u670d\u52a1\u5668\u89c4\u6a21\u8d8a\u5927\uff0c\u5c31\u8d8a\u6709\u5fc5\u8981\u9009\u8d2d\u66f4\u9ad8\u7aef\u7684CPU\u3002\n\u6bd4\u5982\u8981\u5f00\u4e00\u4e2a\u5c0f\u578b\u7684\u670d\u52a1\u5668\uff0c\u4f7f\u7528 10300F \u5373\u53ef\uff1b\u8981\u5f00\u4e00\u4e2a\u5927\u578b\u7684\u670d\u52a1\u5668\uff0c\u4f60\u53ef\u80fd\u5fc5\u987b\u8981\u7528 12700KF \u624d\u591f\u7528\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u670d\u52a1\u5668\u9009\u62e9 CPU \u5e76\u4e0d\u9700\u8981\u5e26\u6838\u663e\u3002\u6838\u663e\u662f CPU \u81ea\u5e26\u7684\u663e\u5361\uff0c\u53ef\u4ee5\u4e3a\u4e3b\u677f I/O \u9762\u677f\u4e0a\u81ea\u5e26\u7684\u663e\u793a\u63a5\u53e3\u63d0\u4f9b\u663e\u793a\u8f93\u51fa\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u4e00\u5b9a\u7684\u56fe\u5f62\u6e32\u67d3\u529f\u80fd\u3002\n\u7531\u4e8emc\u670d\u52a1\u5668\u6240\u6709\u6e32\u67d3\u56fe\u50cf\u7684\u5de5\u4f5c\u90fd\u7531\u73a9\u5bb6\u7684\u8bbe\u5907\u81ea\u884c\u5b8c\u6210\uff0c\u6240\u4ee5\u670d\u52a1\u5668\u4e0d\u9700\u8981\u4efb\u4f55\u663e\u5361\u7684\u6027\u80fd\uff0c\u4f60\u7684\u663e\u5361\u53ea\u9700\u8981\u4fdd\u8bc1\u80fd\u591f\u8fdb\u884c\u89c6\u9891\u8f93\u51fa\u5373\u53ef\uff0c\u4e5f\u5c31\u662f\u201c\u4eae\u673a\u5361\u201d\u3002\u5982\u679c\u4f60\u624b\u91cc\u5df2\u7ecf\u6709\u73b0\u6210\u7684\u4f4e\u6027\u80fd\u7684\u663e\u5361\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u8d2d\u4e70\u4e0d\u5e26\u6838\u663e\u7684CPU\uff0c\u6bd4\u5982\u5e26F\u7684\u82f1\u7279\u5c14 CPU \u3002\n\u5982\u679c\u6ca1\u6709\u4f4e\u6027\u80fd\u7684 CPU \uff0c\u6bd4\u5982\u4f60\u624b\u91cc\u6709\u4e00\u5f20\u95f2\u7f6e\u76842070~~(\u8c01\u4f1a\u624b\u91cc\u6709\u4e862070\u8fd8\u95f2\u7f6e\u554a)~~\uff0c\u90a3\u4e48\u9664\u975e\u4f60\u6709\u7279\u6b8a\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u9664\u4e86\u5f00\u670d\u8fd8\u7528\u670d\u52a1\u5668\u8dd1 AI \uff0c\u5c31\u4e0d\u5efa\u8bae\u628a\u8fd9\u5f20\u663e\u5361\u653e\u5230\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\uff0c\u8fd9\u79cd\u663e\u5361\u5f85\u673a\u60c5\u51b5\u4e0b\u529f\u8017\u66f4\u9ad8\uff0c\u5bfc\u81f4\u4f60\u5bb6\u7535\u8868\u8f6c\u5f97\u66f4\u5feb\u3002"}),"\n",(0,s.jsxs)(e.admonition,{type:"warning",children:[(0,s.jsx)(e.p,{children:"\u505a\u9ad8\u7248\u672c\u751f\u5b58\u670d\u52a1\u5668\uff0c\u4e70\u5b9e\u4f53\u673a\u5343\u4e07\u4e0d\u8981\u8003\u8651E5\u8fd9\u79cd\u6d0b\u5783\u573e\uff0c\u5426\u5219\u4f60\u4f1a\u5403\u5927\u4e8f\uff0c\u5207\u8bb0!!!"}),(0,s.jsx)(e.p,{children:"\u53e6\u5916\uff0c13700K\u300113700KF\u300113900K\u300113900KF\u300114700K\u300114700KF\u300114900K\u300114900K \u51e0\u6b3eCPU\u88ab\u66dd\u51fa\u7531\u4e8e\u5176\u4e3b\u9891\u8fc7\u9ad8\u800c\u5bfc\u81f4\u4e0d\u7a33\u5b9a(\u8fd0\u884c\u8f6f\u4ef6\u65f6\u8f6f\u4ef6\u51fa\u9519\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u4f60\u7684\u670d\u52a1\u5668\u5d29\u6e83\u751a\u81f3\u635f\u574f)\u7684\u95ee\u9898\uff0c\u5efa\u8bae\u5f00\u670d\u6682\u65f6\u4e0d\u4f7f\u7528\u3002"})]}),"\n",(0,s.jsx)(e.h3,{id:"\u4e3b\u677f",children:"\u4e3b\u677f"}),"\n",(0,s.jsx)(e.p,{children:"\u867d\u7136mc\u670d\u52a1\u5668\u5bf9\u4e3b\u677f\u6ca1\u4ec0\u4e48\u8981\u6c42\uff0c\u4f46\u662f CPU \u5bf9\u4e3b\u677f\u7684\u8981\u6c42\u8fd8\u662f\u5f88\u9ad8\u7684\u3002\u5728\u9009\u62e9\u4e3b\u677f\u65f6\u4f60\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u677f\u578b\u3002\u5e38\u89c1\u7684\u4e3b\u677f\u4ece\u5c0f\u5230\u5927\u5206\u4e3a ITX\u3001mATX\u3001ATX\u3001EATX \u8fd9\u51e0\u4e2a\u6807\u51c6\u3002\u5c0f\u7684\u4e3b\u677f\u5c3a\u5bf8\u53ef\u4ee5\u88c5\u8fdb\u66f4\u5c0f\u7684\u673a\u7bb1\uff0c\u5927\u7684\u4e3b\u677f\u5c3a\u5bf8\u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u786c\u4ef6\u529f\u80fd\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8d2d\u4e70\u6700\u4fbf\u5b9c\u7684 mATX \u6216 ATX \u677f\u578b\u7684\u4e3b\u677f\u5373\u53ef\uff0c\u56e0\u4e3a\u4f60\u7684\u670d\u52a1\u5668\u4e0d\u9700\u8981\u4fbf\u643a\u3002\u4f46\u662f\u4e00\u5b9a\u8981\u6ce8\u610f",(0,s.jsx)(e.strong,{children:"\u4e0d\u80fd\u5927\u4e8e\u673a\u7bb1\u5c3a\u5bf8\uff0c\u5426\u5219\u673a\u7bb1\u88c5\u4e0d\u4e0b"}),"\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e3b\u82af\u7247\u7ec4\u3002\u4e3b\u82af\u7247\u7ec4\u5fc5\u987b\u8981\u548cCPU\u54c1\u724c\u5bf9\u5e94\uff0c\u624d\u80fd\u548cCPU\u517c\u5bb9\u3002\u82f1\u7279\u5c14\u6709\u4e2d\u7aef\u7684B\u7cfb\u5217\u548c\u9ad8\u7aef\u7684 Z \u7cfb\u5217\uff0c AMD \u6709\u4e2d\u7aef\u7684 B \u7cfb\u5217\u548c\u9ad8\u7aef\u7684 X \u7cfb\u5217\u3002\u901a\u5e38\u4e0d\u9700\u8981\u8003\u8651\u4e3b\u82af\u7247\u7ec4\u8981\u9009\u54ea\u4e2a\uff0c\u6bd5\u7adf\u4f60\u4e5f\u4e0d\u9700\u8981\u7ed9\u670d\u52a1\u5668\u4e3b\u677f\u63d2\u4e00\u5927\u5806\u4e09\u4ef6\u3002\n\u4f46\u662f\u4e0d\u5efa\u8bae i9 \u548c R9 \u5904\u7406\u5668\u9009\u7528\u4e2d\u7aef\u82af\u7247\u7ec4\uff0c\u9664\u975e\u4f60\u95ee\u8fc7\u786e\u5b9e\u201c\u80fd\u5e26\u52a8\u201d\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e3b\u677f\u4f9b\u7535\u4e0d\u8db3\u7b49\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a\u4e2d\u7aef\u82af\u7247\u7ec4\u7684\u4f9b\u7535\u6a21\u5757\u6027\u80fd\u8f83\u4f4e\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5185\u5b58-1",children:"\u5185\u5b58"}),"\n",(0,s.jsxs)(e.p,{children:["\u867d\u7136\u662f\u670d\u52a1\u5668\uff0c\u4f46\u662f\u6bd5\u7adf\u6e38\u620f\u670d\u52a1\u5668\uff0c\u9700\u8981\u7684\u5185\u5b58\u4e5f\u662f\u975e\u5e38\u9ad8\u7684\u3002\u901a\u5e38\u4e0d\u63a8\u8350\u8d2d\u4e70\u201c\u521a\u597d\u591f\u7528\u201d\u7684\u5185\u5b58\u5bb9\u91cf\uff0c\u56e0\u4e3a\u4f60\u7684\u9700\u6c42\u4f1a\u968f\u7740\u670d\u52a1\u5668\u89c4\u6a21\u7684\u6269\u5927\u9010\u6e10\u63d0\u9ad8\uff0c\u5bfc\u81f4\u540e\u671f\u4f60\u53ef\u80fd\u9700\u8981\u5bf9\u5185\u5b58\u8fdb\u884c\u5347\u7ea7\u6216\u66f4\u6362\u3002\u5982\u679c\u4e0d\u662f\u9884\u7b97\u975e\u5e38\u7d27\u5f20\uff0c\u5efa\u8bae\u5148\u8d2d\u4e70 CPU \u6240\u652f\u6301\u7684\u6700\u5927\u5185\u5b58\u5bb9\u91cf\u7684\u4e00\u534a\uff0c\u6570\u91cf\u4e3a\u4e3b\u677f\u5185\u5b58\u63d2\u69fd\u6570\u91cf\u7684\u4e00\u534a\uff0c\u540e\u671f\u9700\u8981\u6269\u5bb9\u65f6\uff0c\u76f4\u63a5\u8d2d\u4e70",(0,s.jsx)(e.strong,{children:"\u540c\u54c1\u724c\u3001\u540c\u7cfb\u5217\u3001\u540c\u53c2\u6570"}),"\u7684\u5185\u5b58\u52a0\u88c5\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["mc\u670d\u52a1\u5668\u5bf9\u5185\u5b58\u7684\u9891\u7387\u548c\u65f6\u5e8f\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u8981\u6c42(",(0,s.jsx)(e.a,{href:"https://www.minebbs.com/threads/_cpu.17729",children:"https://www.minebbs.com/threads/_cpu.17729"})," )\u3002\n\u6240\u4ee5\u4f60\u53ef\u4ee5\u9009\u62e9\u66f4\u4fbf\u5b9c\u7684\u4f4e\u9891\u5185\u5b58\uff0c\u4f8b\u5982 DDR3 \u7684 1333 MHz\u3001DDR4 \u7684 2666 MHz\u3001DDR5 \u7684 4800 MHz\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7531\u4e8e\u5404\u5185\u5b58\u9897\u7c92\u5de5\u5382\u7684\u4ea7\u91cf(",(0,s.jsx)(e.del,{children:"\u5931\u706b\u9891\u7387"}),")\u4e0d\u540c\uff0c\u5185\u5b58\u7684\u4ef7\u683c\u4f1a\u968f\u65f6\u95f4\u51fa\u73b0\u53d8\u5316\u3002\u5982\u679c\u4f60\u65f6\u95f4\u5145\u8db3\uff0c\u53ef\u4ee5\u591a\u5173\u6ce8\u6570\u7801\u8d44\u8baf\uff0c\u9009\u62e9\u6700\u5408\u9002\u7684\u65f6\u673a\u62a2\u8d2d\u5185\u5b58\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u786c\u76d8",children:"\u786c\u76d8"}),"\n",(0,s.jsx)(e.p,{children:"21\u4e16\u7eaa20\u5e74\u4ee3\u4e86\uff0c\u8be5\u4e0d\u4f1a\u8fd8\u6709\u4eba\u7528\u673a\u68b0\u786c\u76d8\u5f53\u7cfb\u7edf\u76d8\u5427\u3002\u4f60\u7684\u670d\u52a1\u5668\u81f3\u5c11\u9700\u8981\u4e00\u5757\u56fa\u6001\u786c\u76d8\u4f5c\u4e3a\u7cfb\u7edf\u76d8\uff0c\u5982\u679c\u56fa\u6001\u786c\u76d8\u5bb9\u91cf\u4e0d\u5927\uff0c\u8fd8\u6700\u597d\u9700\u8981\u4e00\u5757\u673a\u68b0\u786c\u76d8\u4e13\u95e8\u5b58\u653e\u670d\u52a1\u5668\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3b\u6d41\u7684\u786c\u76d8\u6309\u63a5\u53e3\u5206\u4e3a nvme \u548c SATA \u4e24\u79cd\u7c7b\u578b\u3002nvme \u53ea\u6709\u56fa\u6001\u786c\u76d8\uff0c\u800c SATA \u65e2\u53ef\u4ee5\u662f\u56fa\u6001\u786c\u76d8\u4e5f\u53ef\u4ee5\u662f\u673a\u68b0\u786c\u76d8\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9009\u8d2d\u56fa\u6001\u786c\u76d8\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u636e\u65e0\u4ef7\uff01\uff01\uff01"}),"\uff0c\u4e0d\u8981\u9009\u62e9\u5c0f\u5382\u54c1\u724c\u7684\u56fa\u6001\u786c\u76d8\uff0c\u5c3d\u53ef\u80fd\u9009\u62e9\u5927\u54c1\u724c\uff0c\u6bd4\u5982\u4e09\u661f\u3001\u957f\u6c5f\u3001\u94e0\u4fa0(\u4e1c\u829d)\u3001\u897f\u6570\u3001\u7231\u56fd\u8005\u3001\u82f1\u7279\u5c14\u3002\u5e0c\u6377\u548c\u91d1\u58eb\u987f\u7684\u56fa\u6001\u786c\u76d8\u867d\u7136\u6027\u4ef7\u6bd4\u4e0d\u9ad8\uff0c\u4f46\u662f\u5982\u679c\u4f60\u6709\u660e\u786e\u7684\u9700\u6c42\uff0c\u4e5f\u4e0d\u5931\u4e3a\u4e00\u79cd\u9009\u62e9\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u56fa\u6001\u786c\u76d8\u7684\u4ef7\u683c\u548c\u5185\u5b58\u4e00\u6837\u5b58\u5728\u8f83\u5927\u6ce2\u52a8\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9009\u8d2d\u673a\u68b0\u786c\u76d8\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u907f\u514d\u9009\u62e9\u201c\u53e0\u74e6\u76d8\u201d( SMR \u8bb0\u5f55)\uff0c\u5c3d\u53ef\u80fd\u9009\u62e9\u201c\u5782\u76f4\u76d8\u201d( CMR \u8bb0\u5f55)\u3002\u53e0\u74e6\u76d8\u7684\u6027\u80fd\u548c\u5bff\u547d\u90fd\u4e0d\u5982\u5782\u76f4\u76d8\u3002\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u4e00\u6b3e\u786c\u76d8\u662f\u53e0\u74e6\u8fd8\u662f\u5782\u76f4\uff0c\u53ef\u4ee5\u4e0a\u7f51\u641c\u7d22\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7f51\u4f20\u5e0c\u6377\u786c\u76d8\u5728\u5230\u5bff\u547d\u7684\u65f6\u5019\u635f\u574f\u66f4\u5feb\uff0c\u4e5f\u5c31\u662f\u201c\u5bb9\u6613\u66b4\u6bd9\u201d\u3002\u867d\u7136\u8fd9\u5bf9\u65e5\u5e38\u4f7f\u7528\u6ca1\u6709\u5f71\u54cd\uff0c\u4f46\u662f\u4e00\u65e6\u53d1\u73b0\u5e0c\u6377\u786c\u76d8\u51fa\u73b0\u6545\u969c\uff0c\u5c31\u8981\u5c3d\u5feb\u91c7\u53d6\u63aa\u65bd\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9177\u9c7c\u548c\u84dd\u76d8\u662f\u5bb6\u7528\u786c\u76d8\uff0c\u4ef7\u683c\u4fbf\u5b9c\uff0c\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u4e00\u822c\uff1b\u9177\u9e70\u548c\u7d2b\u76d8\u662f\u76d1\u63a7\u786c\u76d8\uff0c\u8fd0\u884c\u7a33\u5b9a\u4f46\u5199\u5165\u65f6\u6709\u5c0f\u6982\u7387\u51fa\u73b0\u6570\u636e\u635f\u574f\uff1b\u9177\u72fc(\u9177\u72fc Pro)\u548c\u7ea2\u76d8\u662f NAS \u786c\u76d8\uff0c\u8fd0\u884c\u7a33\u5b9a\uff1b\u9ed1\u76d8\u662f\u65d7\u8230\u6027\u80fd\u7684\u786c\u76d8\uff0c\u6027\u80fd\u9ad8\u4f46\u4ef7\u683c\u6602\u8d35\uff1b\u94f6\u6cb3\u548c\u91d1\u76d8\u662f\u4f01\u4e1a\u7528\u786c\u76d8\uff0c\u8fd0\u884c\u7a33\u5b9a\u4f46\u6027\u80fd\u8f83\u4f4e\uff0c\u800c\u4e14\u91d1\u76d8\u7f51\u4f20\u566a\u97f3\u975e\u5e38\u5927\u3002\u5bf9\u4e8emc\u670d\u52a1\u5668\u6765\u8bf4\uff0c\u9009\u62e9NAS\u4e13\u7528\u76d8\u6216\u4f01\u4e1a\u76d8\u5373\u53ef\u6ee1\u8db3\u5927\u90e8\u5206\u9700\u6c42\u3002\u5982\u679c\u4f60\u80fd\u4fdd\u8bc1\u52e4\u4e8e\u7ef4\u62a4\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u5bb6\u7528\u786c\u76d8\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4ef7\u683c\u4fbf\u5b9c\u7684\u786c\u76d8\u591a\u4e3a\u4e8c\u624b\u786c\u76d8\uff0c\u6709\u5c0f\u6982\u7387\u5b58\u5728\u6545\u969c\uff0c\u6216\u5bff\u547d\u76f8\u5bf9\u8f83\u77ed\u3002\u8d2d\u4e70\u4e8c\u624b\u786c\u76d8\u65f6\uff0c\u4e00\u5b9a\u8981\u5584\u7528 CrystalDiskInfo\u3001HDTune Pro\u3001DiskGenius \u7b49\u5de5\u5177\u68c0\u67e5\u786c\u76d8\u7684\u901a\u7535\u65f6\u95f4\u3001\u574f\u9053\u7b49\u60c5\u51b5\uff0c\u4e00\u65e6\u4e70\u5230\u6709\u6545\u969c\u7684\u786c\u76d8\uff0c\u8981\u5584\u7528\u7f51\u8d2d\u5e73\u53f0\u7684\u9000\u8d27\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7535\u6e90",children:"\u7535\u6e90"}),"\n",(0,s.jsx)(e.p,{children:"\u7535\u6e90\u8981\u5c3d\u53ef\u80fd\u9009\u62e9\u6700\u5927\u529f\u7387\u81f3\u5c11\u5927\u4e8e\u7535\u8111\u6240\u6709\u914d\u4ef6\u529f\u7387\u4e4b\u548c\u4ee5\u4e0a\u518d\u52a0100w\u529f\u7387\u7684\u578b\u53f7\uff0c\u800c\u4e14\u5c3d\u53ef\u80fd\u9009\u62e9\u66f4\u9ad8\u529f\u7387\u7684\u3002\u54c1\u724c\u4e5f\u8981\u9009\u62e9\u5927\u54c1\u724c\uff0c\u5426\u5219\u52a3\u8d28\u7535\u6e90\u5bb9\u6613\u51fa\u73b0\u77ed\u8def\uff0c\u4e0d\u4ec5\u5bfc\u81f4\u5176\u81ea\u8eab\u635f\u574f\uff0c\u8fd8\u5f88\u53ef\u80fd\u5bfc\u81f4\u4e3b\u677f\u635f\u574f\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u6563\u70ed\u5668",children:"\u6563\u70ed\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u7684\u670d\u52a1\u5668\u4e0d\u9700\u8981\u7ed9\u73a9\u5bb6\u770b\uff0c\u6240\u4ee5\u4f60\u6ca1\u6709\u5fc5\u8981\u9009\u62e9\u53ef\u4ee5\u53d1\u5149\u7684\u6563\u70ed\u5668\u3002\u6563\u70ed\u5668\u8981\u5c3d\u91cf\u9009\u62e9\u914d\u7f6e\u66f4\u9ad8\u7684\uff0c\u5e76\u4e14\u5efa\u8bae\u5341\u4ee3\u4ee5\u4e0a\u7684 i7 i9 \u548c 5 \u4ee3\u4ee5\u4e0a\u7684 r7 r9 \u9009\u7528\u53cc\u98ce\u6247\u6c34\u51b7(240 mm)\u3002\n\u5982\u679c\u540e\u671f\u6709\u7ed9 CPU \u8d85\u9891\u7684\u9700\u6c42\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4e09\u98ce\u6247\u6c34\u51b7(360 mm)\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u7cfb\u7edf-1",children:"\u7cfb\u7edf"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0e\u4e91\u670d\u52a1\u5668\u9009\u62e9\u7cfb\u7edf\u7684\u65b9\u5f0f\u76f8\u540c\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u9664\u975e\u4f60\u6709\u660e\u786e\u7684\u9700\u6c42\uff0c\u5426\u5219\u4e0d\u8981\u4f7f\u7528\u666e\u901a\u7684 Windows \u64cd\u4f5c\u7cfb\u7edf\uff0c\u5426\u5219\u4f60\u4f1a\u9762\u4e34\u81ea\u52a8\u66f4\u65b0\u8fd9\u4e00\u5934\u75bc\u7684\u95ee\u9898\uff0c\u8fd8\u6709\u540e\u7eed\u4e00\u7cfb\u5217\u5404\u79cd\u9ebb\u70e6\u3002"})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},85992:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},51582:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(30758);const l={},d=s.createContext(l);function r(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);