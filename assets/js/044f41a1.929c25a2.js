"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5854],{69597:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=r(74848),l=r(28453),t=r(11470),a=r(19365);const c={title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",sidebar_position:7},i="\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",o={id:"advance/Linux/frp",title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",description:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",source:"@site/docs/advance/Linux/frp.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/frp",permalink:"/NitWikit/advance/Linux/frp",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/frp.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:172334752e4,sidebarPosition:7,frontMatter:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u670d",permalink:"/NitWikit/advance/Linux/start"},next:{title:"\u81ea\u52a8\u5907\u4efd\u5b58\u6863",permalink:"/NitWikit/advance/Linux/backup"}},d={},u=[{value:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",id:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",level:2},{value:"\u81ea\u5efa Frp",id:"\u81ea\u5efa-frp",level:2},{value:"\u5b89\u88c5 Frp",id:"\u5b89\u88c5-frp",level:3},{value:"\u914d\u7f6e Frp",id:"\u914d\u7f6e-frp",level:3},{value:"\u5f00\u542f Frp\uff1a",id:"\u5f00\u542f-frp",level:3},{value:"\u914d\u7f6eproxy protocol",id:"\u914d\u7f6eproxy-protocol",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u642d\u5efa\u5185\u7f51\u7a7f\u900ffrp",children:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08Frp\uff09"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546",children:"\u4f7f\u7528\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u63d0\u4f9b\u5546"}),"\n",(0,s.jsx)(n.p,{children:"\u7b14\u8005\u65e0\u6cd5\u5728\u8fd9\u91cc\u63a8\u8350\u8fd0\u8425\u5546\uff0c\u56e0\u4e3a\u76ee\u524d\u5728\u5f00\u670d\u65b9\u9762\u8fd8\u6ca1\u6709\u53d7\u5230\u5e7f\u6cdb\u8ba4\u53ef\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u3002\u4e0d\u540c\u7684\u8fd0\u8425\u5546\u6536\u8d39\u4e0d\u540c\uff0c\u9650\u91cf\u4e0d\u540c\uff0c\u8282\u70b9\u4e5f\u4e0d\u540c\u3002\u4e0a\u7f51\u641c\u7d22\u201c\u5185\u7f51\u7a7f\u900f\u201d\u5c31\u80fd\u627e\u5230\u5927\u91cf\u5185\u7f51\u7a7f\u900f\u7684\u8fd0\u8425\u5546\uff0c\u4f46\u662f\u5728\u9009\u8d2d\u7684\u65f6\u5019\u975e\u5e38\u5efa\u8bae\u591a\u5bb6\u5bf9\u6bd4\uff0c\u627e\u5230\u6700\u9002\u5408\u81ea\u5df1\u4f7f\u7528\u7684\u8fd0\u8425\u5546\u3002\u4e0b\u9762\u662f\u9009\u62e9\u8fc7\u7a0b\u4e2d\u9664\u4e86\u4ef7\u683c\u5916\u5c24\u5176\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6b63\u89c4\u6027\uff1a\u6700\u597d\u80fd\u5728\u8fd0\u8425\u5546\u7684\u5b98\u7f51\u6700\u4e0b\u9762\u770b\u5230\u7f51\u7ad9\u5907\u6848\u4fe1\u606f\uff0c\u5e76\u4e14\u8fd0\u8425\u5546\u4e5f\u4ecb\u7ecd\u4e86\u81ea\u5df1\u7684\u516c\u53f8\u540d\u79f0\uff0c\u516c\u53f8\u540d\u79f0\u4e0a\u7f51\u4e5f\u80fd\u67e5\u5f97\u5230\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\uff1a\u5c0f\u670d\u52a1\u5668\u6bcf\u6708\u53ea\u80fd\u7528\u6389\u51e0G\uff0c\u4f46\u662f\u5927\u670d\u52a1\u5668\u6bcf\u6708\u80fd\u7528\u6389\u51e0\u767eG\u751a\u81f3\u51e0T\u7684\u6d41\u91cf\u3002\u4f60\u9700\u8981\u786e\u5b9a\u5bf9\u6d41\u91cf\u7684\u6536\u8d39\u662f\u5426\u9002\u5408\u81ea\u5df1\u3002\u5982\u679c\u4e0d\u786e\u5b9a\u591a\u5c11\u6d41\u91cf\u9002\u5408\u81ea\u5df1\uff0c\u4f60\u53ef\u4ee5\u5148\u627e\u4e00\u5bb6\u8fd0\u8425\u5546\u7528\u4e00\u4e2a\u6708\uff0c\u770b\u770b\u81ea\u5df1\u8981\u82b1\u6389\u4e50\u591a\u5c11\u6d41\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5e26\u5bbd\uff1a\u4e00\u4e9b\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u53ea\u4f1a\u7ed9\u6bcf\u4e2a\u670d\u52a1\u5668\u51e0M\u7684\u5e26\u5bbd\uff0c\u5bf9\u4e8e\u5927\u578b\u670d\u52a1\u5668\u5b8c\u5168\u4e0d\u591f\u7528\u3002\u6ce8\u610f\uff0c\u4e00\u822c\u4e0d\u9650\u6d41\u91cf\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u5e26\u5bbd\u90fd\u5f88\u4f4e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u96a7\u9053\u6570\uff1a\u5185\u7f51\u7a7f\u900f\u6bcf\u6620\u5c04\u4e00\u4e2a\u7aef\u53e3\u51fa\u53bb\u5c31\u53eb\u4e00\u6761\u96a7\u9053\u3002\u6bcf\u4e2a\u670d\u52a1\u7aef\u90fd\u53ef\u80fd\u9700\u8981\u5360\u7528\u4e00\u6761\u96a7\u9053\uff0c\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u96a7\u9053\u7528\u6765\u7ba1\u7406\u670d\u52a1\u5668\u7b49\u3002\u4e00\u822c\u65b0\u624b\u6709\u4e00\u4e2a\u96a7\u9053\u5c31\u591f\uff0c\u4f46\u662f\u540e\u9762\u4f60\u53ef\u80fd\u9700\u8981\u8fdc\u7a0b\u684c\u9762\u7b49\u8981\u7528\u5230\u66f4\u591a\u96a7\u9053\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8282\u70b9\uff1a\u7531\u4e8e\u5185\u7f51\u7a7f\u900f\u662f\u5ba2\u6237\u7aef\u5411\u8282\u70b9\u53d1\u9001\u6570\u636e\u540e\u8282\u70b9\u518d\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\uff0c\u548c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u76f4\u63a5\u901a\u4fe1\u76f8\u6bd4\uff0c\u6570\u636e\u9700\u8981\u5728\u8282\u70b9\u4e0a\u7ed5\u4e00\u4e0b\uff0c\u8fd9\u6837\u4e00\u6765\u5ef6\u8fdf\u5230\u6765\u5230\u4e86\u5ba2\u6237\u7aef\u5230\u8282\u70b9\u7684\u5ef6\u8fdf\u548c\u670d\u52a1\u7aef\u5230\u8282\u70b9\u5ef6\u8fdf\u7684\u603b\u548c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u8282\u70b9\uff1f"}),(0,s.jsx)(n.p,{children:"\u6839\u636e\u4e09\u89d2\u5f62\u4e24\u8fb9\u4e4b\u548c\u5927\u4e8e\u7b2c\u4e09\u8fb9\u7684\u5b9a\u7406\uff0c\u8282\u70b9\u8ddd\u79bb\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u8d8a\u8fd1\uff0c\u6e38\u620f\u5ef6\u8fdf\u5c31\u8d8a\u5c0f\u3002\u7136\u800c\u4f60\u65e0\u6cd5\u786e\u5b9a\u5ba2\u6237\u7aef\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u6bd5\u7adf\u73a9\u5bb6\u6765\u81ea\u5927\u6c5f\u5357\u5317\u3002\u90a3\u4e48\u53ea\u6709\u7f29\u77ed\u8282\u70b9\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u624d\u80fd\u4fdd\u8bc1\u6240\u6709\u73a9\u5bb6\u7684\u5ef6\u8fdf\u90fd\u6700\u4f4e\u3002\u4f8b\u5982\u670d\u52a1\u5668\u4f4d\u4e8e\u6cb3\u5317\uff0c\u6709\u4e24\u4e2a\u8282\u70b9\u5206\u522b\u4f4d\u4e8e\u5c71\u4e1c\u67a3\u5e84\u548c\u6c5f\u82cf\u5bbf\u8fc1\uff0c\u6709\u4e24\u4e2a\u73a9\u5bb6\u5206\u522b\u4f4d\u4e8e\u5e7f\u4e1c\u548c\u8fbd\u5b81\uff0c\u90a3\u4e48\u5f53\u9009\u62e9\u79bb\u670d\u52a1\u5668\u66f4\u8fd1\u7684\u67a3\u5e84\u8282\u70b9\u65f6\uff0c\u5047\u8bbe\u8fbd\u5b81\u73a9\u5bb6\u5230\u8282\u70b9\u4e3a20ms\uff0c\u5e7f\u4e1c\u73a9\u5bb6\u5230\u8282\u70b9\u4e3a50ms\uff0c\u670d\u52a1\u5668\u5230\u8282\u70b9\u4e3a10ms\uff0c\u90a3\u4e48\u8fbd\u5b81\u73a9\u5bb6\u7684\u6e38\u620f\u5ef6\u8fdf\u5c31\u662f20+10=30ms\uff0c\u5e7f\u4e1c\u73a9\u5bb6\u7684\u6e38\u620f\u5ef6\u8fdf\u5c31\u662f50ms+10ms=60ms\u3002\u5f53\u9009\u62e9\u79bb\u670d\u52a1\u5668\u66f4\u8fdc\u7684\u5bbf\u8fc1\u8282\u70b9\u65f6\uff0c\u5047\u8bbe\u8fbd\u5b81\u73a9\u5bb6\u5230\u8282\u70b9\u4e3a40ms\uff0c\u5e7f\u4e1c\u73a9\u5bb6\u5230\u8282\u70b9\u4e3a30ms\uff0c\u670d\u52a1\u5668\u5230\u8282\u70b9\u4e3a30ms\uff0c\u90a3\u4e48\u8fbd\u5b81\u73a9\u5bb6\u7684\u6e38\u620f\u5ef6\u8fdf\u5c31\u662f50+30=70ms\uff0c\u5e7f\u4e1c\u73a9\u5bb6\u7684\u6e38\u620f\u5ef6\u8fdf\u5c31\u662f40+30=60ms\u3002\u9009\u62e9\u5bbf\u8fc1\u8282\u70b9\u65f6\u867d\u7136\u5e7f\u4e1c\u73a9\u5bb6\u7684\u5ef6\u8fdf\u4e0d\u53d8\uff0c\u4f46\u662f\u8fbd\u5b81\u73a9\u5bb6\u8fde\u63a5\u670d\u52a1\u5668\u65f6\uff0c\u6570\u636e\u4ece\u66f4\u8fdc\u7684\u5bbf\u8fc1\u7ed5\u4e86\u4e00\u5708\u518d\u56de\u6765\uff0c\u5ef6\u8fdf\u9ad8\u4e86\u5f88\u591a\u3002\u56e0\u6b64\u9009\u62e9\u8fd0\u8425\u5546\u65f6\uff0c\u4f18\u5148\u9009\u62e9\u62e5\u6709\u79bb\u81ea\u5df1\u8fd1\u7684\u8282\u70b9\u7684\u8fd0\u8425\u5546\u3002"})]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u540d\u8ba4\u8bc1\uff1a\u4e3a\u4e86\u5728\u610f\u5916\u4e8b\u6545\u4e2d\u66f4\u597d\u5730\u89c4\u5212\u8d23\u4efb\uff0c\u5f88\u591a\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u90fd\u8981\u6c42\u5b9e\u540d\u8ba4\u8bc1\u624d\u80fd\u5f00\u59cb\u4f7f\u7528\uff0c\u6216\u8005\u90e8\u5206\u8282\u70b9\u9700\u8981\u5b9e\u540d\u8ba4\u8bc1\u3002\u8fd8\u6709\u4e00\u4e9b\u5b9e\u540d\u8ba4\u8bc1\u65f6\u8fd8\u8981\u6c42\u7528\u6237\u5fc5\u987b\u6210\u5e74\uff08\u5e74\u6ee118\u5c81\uff09\u3002\u51b5\u4e14\u5b9e\u540d\u8ba4\u8bc1\u670d\u52a1\u63d0\u4f9b\u65b9\u6536\u8d39\uff0c\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u53ef\u80fd\u4f1a\u8ba9\u4f60\u81ea\u884c\u627f\u62c5\u8d39\u7528\uff0c\u76ee\u524d\u4ef7\u683c\u901a\u5e38\u57281\u5143\u3002\u6240\u4ee5\u5728\u9009\u62e9\u8fd0\u8425\u5546\u65f6\uff0c\u5982\u679c\u4f60\u672a\u6210\u5e74\uff0c\u6216\u8005\u6ca1\u6709\u5728\u7ebf\u652f\u4ed8\u7684\u80fd\u529b\uff0c\u90a3\u4e48\u5728\u4e00\u4e9b\u8fd0\u8425\u5546\u5904\u53ef\u80fd\u4f1a\u53d7\u5230\u9650\u5236\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5efa-frp",children:"\u81ea\u5efa Frp"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u4f60\u5f97\u786e\u4fdd\u4f60\u6709\u4e00\u53f0\u6709\u516c\u7f51 IP \u7684\u673a\u5668\uff0c\u6700\u597d\u662f",(0,s.jsx)(n.strong,{children:"Linux"}),"\u7684\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u670b\u53cb\u613f\u610f\u628a\u4ed6\u7684\u670d\u52a1\u5668\u4f5c\u4e3a\u8282\u70b9\u63d0\u4f9b\u7ed9\u4f60\uff0c\u4f60\u8fd8\u9700\u8981\u6ce8\u610f\u914d\u7f6e\u65b9\u6cd5\u5305\u62ec\u4e86\u9700\u8981\u5728\u4ed6\u7684\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u7684\u64cd\u4f5c\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4ed6\u4ea4\u7ed9\u4f60\u670d\u52a1\u5668\u7684\u63a7\u5236\u6743\uff0c\u6216\u8005\u8bf7\u6c42\u4ed6\u7684\u5e2e\u52a9\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u5047\u5b9a\u4f60\u6709\u4e00\u53f0\u7b26\u5408\u6761\u4ef6\u7684 Linux \u670d\u52a1\u5668\uff0c\u5e76\u4e14\u4f60\u5df2\u7ecf\u53ef\u4ee5\u8fde\u4e0a\u4f60\u670d\u52a1\u5668\u7684",(0,s.jsx)(n.strong,{children:"SSH"}),"\u3002"]}),"\n","\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5-frp",children:"\u5b89\u88c5 Frp"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u9996\u5148\u786e\u4fdd\u670d\u52a1\u5668\u6240\u6709\u8f6f\u4ef6\u5305\u662f\u6700\u65b0\u7684\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u540c\u7684 Linux \u53d1\u884c\u7248\u66f4\u65b0\u65b9\u6cd5\u5927\u540c\u5c0f\u5f02"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\n"})})}),(0,s.jsx)(a.A,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum -y update\n"})})}),(0,s.jsx)(a.A,{value:"arch",label:"Arch Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -Syu\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u5c06",(0,s.jsx)(n.code,{children:"frp.go"}),"\u8f6f\u4ef6\u5b89\u88c5\u5230\u7cfb\u7edf\u4e2d\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"others",label:"deb\u548crht\u7cfb\u7684 Linux",default:!0,children:[(0,s.jsx)(n.p,{children:"\u624b\u52a8\u4e0b\u8f7dfrp\u8f6f\u4ef6\u5305\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~\nwget https\uff1a//github.com/fatedier/frp/releases/download/v0.58.1/frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,s.jsx)(n.p,{children:"\u89e3\u538b\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tar -xzvf frp_0.58.1_linux_amd64.tar.gz\n"})}),(0,s.jsx)(n.p,{children:"\u5b89\u88c5\uff1a"}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frps /usr/bin/\nmkdir -p /etc/frp\ncp frps.toml /etc/frp/\n"})})}),(0,s.jsx)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/frp_0.58.1_linux_amd64/\ncp frpc /usr/bin/\nmkdir -p /etc/frp\ncp frpc.toml /etc/frp/\n"})})})]})]}),(0,s.jsxs)(a.A,{value:"arch",label:"Arch Linux",children:[(0,s.jsx)(n.p,{children:"\u5728 Arch Linux \u4e0b\u53ef\u4ee5\u76f4\u63a5\u7528aur\u52a9\u624b\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5frp"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4f7f\u7528\u4f60\u7684aur\u52a9\u624b\uff0c\u8fd9\u91cc\u5217\u4e3e\u4e86paru\u7684\nparu -Sy frps # \u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8fd9\u4e2a\nparu -Sy frpc # \u5ba2\u6237\u673a\u4e0a\u8fd0\u884c\u8fd9\u4e2a\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e-frp",children:"\u914d\u7f6e Frp"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim /etc/frp/frps.toml\n"})}),(0,s.jsx)(n.p,{children:"\u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'bindPort = 7000 # frps\u76d1\u542c\u7684\u7aef\u53e3\n\nlog.to = "/var/log/frps.log" # \u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4e0d\u7528\u6539\nlog.level = "info" # \u65e5\u5fd7\u7b49\u7ea7\uff0c\u4e0d\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\uff0cfrpc\u8981\u4e0efrps\u4e00\u81f4\n'})})]}),(0,s.jsxs)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim ~/frp_0.58.1_linux_amd64/frpc.toml\n"})}),(0,s.jsx)(n.p,{children:"\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'serverAddr = "x.x.x.x" # \u4f60frps\u670d\u52a1\u5668\u7684ip\u5730\u5740\nserverPort = 7000 # \u4f60frps\u670d\u52a1\u5f00\u5728\u7684\u7aef\u53e3\n\nlog.to = "/var/log/frps.log" # \u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u4e00\u822c\u4e0d\u7528\u6539\nlog.level = "info" # \u65e5\u5fd7\u7b49\u7ea7\uff0c\u4e0d\u7528\u6539\nlog.maxDays = 3\n\nauth.token = "example" # \u4ee4\u724c\uff0c\u4e0e\u516c\u7f51\u670d\u52a1\u7aef\u4fdd\u6301\u4e00\u81f4\n\n[[proxies]]\nname = "mc je"\ntype = "tcp" # java\u7248\u4f7f\u7528tcp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1" # \u9ed8\u8ba4\u4e0d\u7528\u6539\nlocalPort = 25565 # mc\u670d\u52a1\u7aef\u5f00\u5728\u54ea\u4e2a\u7aef\u53e3\uff1f\nremotePort = 25565 # \u66b4\u9732\u670d\u52a1\u7684\u516c\u7f51\u5165\u53e3\n\n# \u5982\u679c\u4f60\u5f00\u4e86\u4e92\u901a\uff0c\u8981\u57fa\u5ca9\u652f\u6301\n[[proxies]]\nname = "mc be"\ntype = "udp" # \u57fa\u5ca9\u7248\u4f7f\u7528udp\u534f\u8bae\u901a\u4fe1\uff0c\u4e0d\u53ef\u66f4\u6539\nlocalIP = "127.0.0.1"\nlocalPort = 19132\nremotePort = 19132\n'})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5f00\u542f-frp",children:"\u5f00\u542f Frp\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1 frp \u5728\u540e\u53f0\u8fd0\u884c\uff0c\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"screen    \u65b9\u4fbf\u5feb\u6377"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"systemd   \u7701\u5fc3\uff0c\u6709\u70b9\u590d\u6742"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"screen",label:"Screen",default:!0,children:[(0,s.jsxs)(n.p,{children:["\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u4e0a\u6709",(0,s.jsx)(n.code,{children:"screen"}),"\u5305\uff0c\u6ca1\u6709\u7684\u8bdd\u5b89\u88c5\u5b83\u4eec\uff1a"]}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(a.A,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get install screen\n"})})}),(0,s.jsx)(a.A,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum install screen \n"})})}),(0,s.jsx)(a.A,{value:"arch",label:"Arch Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -Sy screen\n"})})})]}),(0,s.jsx)(n.p,{children:"\u542f\u52a8\uff1a"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"screen -dR frps frps # \u670d\u52a1\u7aef\nscreen -dR frpc frpc # \u5ba2\u6237\u7aef\n# \u952e\u76d8\u4e0a\u6309Ctrl+A+D\u9000\u51fa\n"})})]}),(0,s.jsxs)(a.A,{value:"systemd",label:"Systemd",children:[(0,s.jsx)(n.p,{children:"\u5728 Linux \u7cfb\u7edf\u4e0b\uff0c\u4f7f\u7528 systemd \u53ef\u4ee5\u65b9\u4fbf\u5730\u63a7\u5236 frps \u670d\u52a1\u7aef\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u914d\u7f6e\u540e\u53f0\u8fd0\u884c\u4ee5\u53ca\u5f00\u673a\u81ea\u542f\u52a8\u3002"}),(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(a.A,{value:"server",label:"\u670d\u52a1\u7aef",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa systemd \u5355\u5143\u6587\u4ef6\uff1a"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim /etc/systemd/system/frps.service\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\n# \u670d\u52a1\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\nDescription = frp server\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frps -c /etc/frp/frps.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 systemd \u547d\u4ee4\u7ba1\u7406 frps \u670d\u52a1"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8frp\nsudo systemctl start frps\n# \u505c\u6b62frp\nsudo systemctl stop frps\n# \u91cd\u542ffrp\nsudo systemctl restart frps\n# \u67e5\u770bfrp\u72b6\u6001\nsudo systemctl status frps\n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e frps \u5f00\u673a\u81ea\u542f\u52a8"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable frps\n"})})]}),(0,s.jsxs)(a.A,{value:"client",label:"\u5ba2\u6237\u7aef",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa systemd \u5355\u5143\u6587\u4ef6\uff1a"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim /etc/systemd/system/frpc.service\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[Unit]\n# \u670d\u52a1\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\nDescription = frp client\nAfter = network.target syslog.target\nWants = network.target\n\n[Service]\nType = simple\nExecStart = /usr/bin/frpc -c /etc/frp/frpc.toml\n\n[Install]\nWantedBy = multi-user.target\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 systemd \u547d\u4ee4\u7ba1\u7406 frpc \u670d\u52a1"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8frp\nsudo systemctl start frpc\n# \u505c\u6b62frp\nsudo systemctl stop frpc\n# \u91cd\u542ffrp\nsudo systemctl restart frpc\n# \u67e5\u770bfrp\u72b6\u6001\nsudo systemctl status frpc\n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u8bbe\u7f6e frpc \u5f00\u673a\u81ea\u542f\u52a8"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable frpc\n"})})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6eproxy-protocol",children:"\u914d\u7f6eproxy protocol"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u73b0\u6210\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u63d0\u4f9b\u7684\u5185\u7f51\u7a7f\u900f\uff0c",(0,s.jsx)(n.strong,{children:"\u4e00\u5b9a\u8981\u6839\u636e\u8fd0\u8425\u5546\u63d0\u4f9b\u7684\u6559\u7a0b\u64cd\u4f5c"}),"\u3002\u4ee5\u4e0b\u662f\u4e24\u4e2a\u6700\u6709\u540d\u7684\u5185\u7f51\u7a7f\u900f\u8fd0\u8425\u5546\u7684 proxy protocol \u5f00\u542f\u65b9\u6cd5\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://doc.natfrp.com/bestpractice/realip.html#proxy-protocol",children:"SakuraFrp"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://openfrp.wiki/use/proxy-protocol.html#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E8%80%85%E7%9A%84%E7%9C%9F%E5%AE%9E-ip",children:"OpenFrp"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f\u81ea\u5efa\u5185\u7f51\u7a7f\u900f\uff0c\u90a3\u4e48\u5982\u679c\u662f ini \u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u5728frpc\u96a7\u9053\u5bf9\u5e94\u7684\u914d\u7f6e\uff08\u4f4d\u4e8efrpc.ini\u4e2d\uff09\u4e2d\u52a0\u5165\u4e00\u884c",(0,s.jsx)(n.code,{children:"proxy_protocol_version = "}),"\uff0c\u5982\u679c\u662f\u534f\u8bae v1 \u5c31\u5199\u7b49\u4e8e v1 \uff0c v2 \u5c31\u5199\u7b49\u4e8e v2 \u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"[mc]\ntype = tcp\nlocal_port = 25565\n# \u76ee\u524d\u652f\u6301 v1 \u548c v2 \u4e24\u4e2a\u7248\u672c\u7684 proxy protocol \u534f\u8bae\u3002\nproxy_protocol_version = v2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f toml \u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u5728 frpc \u96a7\u9053\u5bf9\u5e94\u7684\u914d\u7f6e\uff08\u4f4d\u4e8e frpc.toml \u4e2d\uff09\u4e2d\u52a0\u5165\u4e00\u884c",(0,s.jsx)(n.code,{children:"transport.proxyProtocolVersion = "}),"\uff0c\u5982\u679c\u662f\u534f\u8baev1\u5c31\u5199\u7b49\u4e8ev1\uff0cv2\u5c31\u5199\u7b49\u4e8ev2\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[[proxies]]\nname = "mc"\ntype = "tcp"\nlocalPort = 25565\ntransport.proxyProtocolVersion = "v2"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"frps\u7684frps.ini\u6216frps.toml\u4e0d\u7528\u52a8\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"\u81f3\u4e8e\u5982\u4f55\u9009\u62e9 v1 \u548c v2 \uff0c\u4f60\u9700\u8981\u6839\u636e\u5bf9\u5e94\u670d\u52a1\u5668\u5bf9 proxy protocol \u7684\u652f\u6301\u60c5\u51b5\u8fdb\u884c\u9009\u62e9\u3002\u4f8b\u5982 Paper \u670d\u52a1\u7aef\u76ee\u524d\u53ea\u652f\u6301 v2\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var s=r(34164);const l={tabItem:"tabItem_Ymn6"};var t=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>A});var s=r(96540),l=r(34164),t=r(23104),a=r(56347),c=r(205),i=r(57485),o=r(31682),d=r(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:l}}=e;return{value:n,label:r,attributes:s,default:l}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const l=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,t=p(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,u]=x({queryString:r,groupId:l}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,d.Dv)(r);return[l,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:l}),j=(()=>{const e=o??f;return h({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),l=c[r].value;l!==s&&(o(n),a(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...t,className:(0,l.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function A(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(96540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);