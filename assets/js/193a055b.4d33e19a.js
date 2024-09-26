"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3949],{15925:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=n(86070),t=n(35396),i=n(72791),l=n(99730);const a={title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:2},c="\u8fde\u63a5\u670d\u52a1\u5668",o={id:"advance/Linux/Connect-to-server",title:"\u8fde\u63a5\u670d\u52a1\u5668",description:"Linux \u7cfb\u7edf\u4e0a\u6709\u4e00\u4e2a\u5de5\u5177\u88ab\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528,\u5b83\u5c31\u662f ssh\u3002\u5b83\u867d\u7136\u4e0d\u80fd\u8fdc\u7a0b\u63a7\u5236\u684c\u9762,\u4f46\u662f\u53ef\u4ee5\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u7684\u547d\u4ee4\u884c,\u5e76\u8ba9\u670d\u52a1\u5668\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002\u7531\u4e8e ssh \u975e\u5e38\u5e38\u7528,\u73b0\u5728\u5f88\u591aLinux\u53d1\u884c\u7248\u90fd\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u8fd9\u4e2a\u547d\u4ee4,\u76ee\u524d\u4f7f\u7528\u6700\u5e7f\u7684\u63d0\u4f9b ssh \u547d\u4ee4\u7684\u8f6f\u4ef6\u662f OpenSSH\u3002",source:"@site/docs/advance/Linux/Connect-to-server.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/Connect-to-server",permalink:"/NitWikit/advance/Linux/Connect-to-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/Connect-to-server.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1727348402e3,sidebarPosition:2,frontMatter:{title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux \u5f00\u670d",permalink:"/NitWikit/Sundry/Advance/Linux"},next:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",permalink:"/NitWikit/advance/Linux/keep-running"}},d={},h=[{value:"\u5f00\u542fssh\u670d\u52a1",id:"\u5f00\u542fssh\u670d\u52a1",level:2},{value:"\u8fde\u63a5ssh\u670d\u52a1",id:"\u8fde\u63a5ssh\u670d\u52a1",level:2},{value:"Linux\u7684ssh\u547d\u4ee4",id:"linux\u7684ssh\u547d\u4ee4",level:3},{value:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",id:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\u8fde\u63a5\u670d\u52a1\u5668",children:"\u8fde\u63a5\u670d\u52a1\u5668"})}),"\n",(0,r.jsxs)(s.p,{children:["Linux \u7cfb\u7edf\u4e0a\u6709\u4e00\u4e2a\u5de5\u5177\u88ab\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528,\u5b83\u5c31\u662f ",(0,r.jsx)(s.code,{children:"ssh"}),"\u3002\u5b83\u867d\u7136\u4e0d\u80fd\u8fdc\u7a0b\u63a7\u5236\u684c\u9762,\u4f46\u662f\u53ef\u4ee5\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u7684\u547d\u4ee4\u884c,\u5e76\u8ba9\u670d\u52a1\u5668\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002\u7531\u4e8e ",(0,r.jsx)(s.code,{children:"ssh"})," \u975e\u5e38\u5e38\u7528,\u73b0\u5728\u5f88\u591aLinux\u53d1\u884c\u7248\u90fd\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u8fd9\u4e2a\u547d\u4ee4,\u76ee\u524d\u4f7f\u7528\u6700\u5e7f\u7684\u63d0\u4f9b ssh \u547d\u4ee4\u7684\u8f6f\u4ef6\u662f ",(0,r.jsx)(s.strong,{children:"OpenSSH"}),"\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5f00\u542fssh\u670d\u52a1",children:"\u5f00\u542fssh\u670d\u52a1"}),"\n",(0,r.jsxs)(s.p,{children:["\u4e3a\u4e86\u8ba9\u5ba2\u6237\u80fd\u987a\u5229\u8fde\u63a5\u670d\u52a1\u5668,\u4e91\u670d\u52a1\u5668\u7684sshd\u670d\u52a1\u4e00\u822c\u9ed8\u8ba4\u5f00\u542f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5bb6\u91cc\u4e91,\u6216\u8005\u4e91\u670d\u52a1\u5668\u7684sshd\u670d\u52a1\u786e\u5b9e\u6ca1\u6709\u5f00\u542f(\u6bd4\u5982\u4f60\u662f\u53ea\u80fd\u901a\u8fc7\u670d\u52a1\u5546\u63d0\u4f9b\u7684VNC\u6216\u8005\u7b2c\u4e09\u65b9\u8fdc\u63a7\u8f6f\u4ef6\u8fde\u63a5\u7684\u670d\u52a1\u5668,\u65e0\u6cd5\u4f7f\u7528ssh),\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u5148\u5f00\u542fsshd\u670d\u52a1\u624d\u80fd\u8fde\u63a5\u5230\u670d\u52a1\u5668\u3002\u5728\u4e3b\u6d41\u7684\u4f7f\u7528 Systemd \u7684Linux\u53d1\u884c\u7248\u4e2d,\u6267\u884c",(0,r.jsx)(s.code,{children:"systemctl start sshd"}),"\u547d\u4ee4\u5373\u53ef\u5f00\u542f sshd \u670d\u52a1,\u5982\u679c\u8fd9\u4e9b\u547d\u4ee4\u90fd\u62a5\u9519,\u8bc1\u660e sshd \u670d\u52a1\u5b58\u5728\u95ee\u9898,\u4f60\u53ef\u4ee5\u628a\u62a5\u9519\u590d\u5236\u7c98\u8d34\u5230\u641c\u7d22\u5f15\u64ce\u4e0a\u67e5\u8be2\u600e\u4e48\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002\u5f00\u542f sshd \u670d\u52a1\u540e,\u4f60\u5c31\u53ef\u4ee5\u8fde\u63a5\u5230\u8fd9\u53f0\u670d\u52a1\u5668\u4e86\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6210\u529f\u5f00\u542fssh\u670d\u52a1\u540e,\u5982\u679c\u8981\u4ece\u516c\u7f51\u8fde\u63a5,\u4f60\u8fd8\u9700\u8981\u628assh\u670d\u52a1\u7684\u7aef\u53e3",(0,r.jsx)(s.code,{children:"22"}),"\u5f00\u653e\u5230\u516c\u7f51\u3002\u5f00\u653e\u7684\u65b9\u6cd5\u4e0e\u5f00\u653e Windows \u7684\u8fdc\u7a0b\u684c\u9762\u7aef\u53e3\u7684\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c,\u4f46\u662f\u534f\u8bae\u53ea\u9700\u8981 TCP \u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"::: warn"}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4e86\u5b89\u5168\u8bf7\u4e0d\u8981\u5728\u670d\u52a1\u5668\u4e0a\u5141\u8bb8 root \u7528\u6237\u767b\u5f55 ssh\uff01\u5982\u679c ssh \u88ab\u66b4\u529b\u7834\u89e3\u7684\u8bdd\u4f1a\u4ea7\u751f\u975e\u5e38\u4e25\u91cd\u7684\u540e\u679c\uff01"}),"\n",(0,r.jsx)(s.p,{children:"\u6700\u597d\u53ef\u4ee5\u7981\u7528\u5bc6\u7801\u767b\u5f55,\u4ec5\u5141\u8bb8\u5bc6\u94a5\u767b\u5f55"}),"\n",(0,r.jsxs)(s.p,{children:["\u5173\u4e8e\u914d\u7f6e\u4f60\u670d\u52a1\u5668\u7684 ssh \u4f7f\u5176\u66f4\u5b89\u5168,\u53ef\u4ee5\u67e5\u770b",(0,r.jsx)(s.a,{href:"https://wiki.archlinuxcn.org/wiki/OpenSSH#%E4%BF%9D%E6%8A%A4",children:"Arch Linux Wiki \u7684\u8fd9\u7bc7\u6587\u7ae0"})]}),"\n",(0,r.jsx)(s.p,{children:":::"}),"\n",(0,r.jsxs)(s.admonition,{type:"danger",children:[(0,r.jsxs)(s.p,{children:["\u914d\u7f6e\u76f4\u63a5\u5728\u516c\u7f51\u4f7f\u752822\u7aef\u53e3\u8fde\u63a5\u670d\u52a1\u5668ssh",(0,r.jsx)(s.strong,{children:"\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684\u5b89\u5168\u6027\u95ee\u9898"}),",\u8be6\u89c1",(0,r.jsx)(s.a,{href:"/NitWikit/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4f55\u62b5\u5fa1\u7f51\u7edc\u653b\u51fb"}),"\u3002"]}),(0,r.jsxs)(s.p,{children:["\u53e6\u5916\u9664\u975e\u6709\u660e\u786e\u9700\u6c42,\u4e0d\u8981\u968f\u610f\u914d\u7f6e UDP \u534f\u8bae\u7aef\u53e3\u6620\u5c04,\u5305\u62ec\u4e0a\u6587\u4e2d\u63d0\u5230\u7684",(0,r.jsx)(s.strong,{children:"\u4e0d\u9700\u8981UDP\u534f\u8bae"}),"\u7684 ssh,\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u4f60\u7684\u670d\u52a1\u5668\u88ab DDoS\uff01\u8be6\u89c1",(0,r.jsx)(s.a,{href:"/NitWikit/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4f55\u62b5\u5fa1\u7f51\u7edc\u653b\u51fb"}),"\u3002"]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u8fde\u63a5ssh\u670d\u52a1",children:"\u8fde\u63a5ssh\u670d\u52a1"}),"\n",(0,r.jsx)(s.h3,{id:"linux\u7684ssh\u547d\u4ee4",children:"Linux\u7684ssh\u547d\u4ee4"}),"\n",(0,r.jsx)(s.p,{children:"\u5c31\u50cf Windows \u4e0d\u7528\u5b89\u88c5\u4efb\u4f55\u8f6f\u4ef6\u5c31\u80fd\u8fde\u63a5 Windows \u7684\u8fdc\u7a0b\u684c\u9762\u4e00\u6837, Linux \u4e5f\u5185\u7f6e\u4e86\u8fde\u63a5 ssh \u7684\u65b9\u5f0f,\u76f4\u63a5\u6267\u884c ssh \u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u3002\u5b83\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ssh <username>@<address> [-p port]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u4f55\u8981\u6307\u5b9a\u7aef\u53e3,\u4f60\u9700\u8981\u6307\u5b9a\u7aef\u53e3\u53c2\u6570\u3002\u5728\u4e00\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd9\u4e2a\u53c2\u6570\u662f",(0,r.jsx)(s.code,{children:"-p"}),",\u4f8b\u5982",(0,r.jsx)(s.code,{children:"ssh root@yizhan.wiki -p 48291"}),",\u6709\u4e00\u4e9b\u5de5\u5177\u4e0a\u5219\u662f\u76f4\u63a5\u5728\u540e\u9762\u8f93\u5165\u7aef\u53e3,\u4f8b\u5982 Xshell \u662f",(0,r.jsx)(s.code,{children:"ssh root@yizhan.wiki 48291"}),"\u3002\u4f60\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u6765\u786e\u5b9assh\u7684\u547d\u4ee4\u683c\u5f0f\u3002\u6bd4\u5982,\u4f60\u53ef\u4ee5\u4ec5\u6267\u884c ",(0,r.jsx)(s.code,{children:"ssh"})," \u547d\u4ee4(\u7b49\u4ef7\u4e8e ",(0,r.jsx)(s.code,{children:"ssh --help"}),"),\u7136\u540e\u8ba9 ssh \u5de5\u5177\u63d0\u793a\u4f60\u5982\u4f55\u4f7f\u7528\u5f53\u524d\u5de5\u5177\u7684\u8fd9\u4e2a\u547d\u4ee4,\u5982\u679c\u9700\u8981\u66f4\u8be6\u7ec6\u7684\u8bf4\u660e\u53ef\u4ee5\u8f93\u5165\u547d\u4ee4 ",(0,r.jsx)(s.code,{children:"man ssh"})]}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u8f93\u5165\u5b8c\u8fd9\u884c\u547d\u4ee4\u540e,\u670d\u52a1\u5668\u901a\u5e38\u4f1a\u8981\u6c42\u4f60\u8f93\u5165\u8be5\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u4e0d\u60f3\u624b\u52a8\u8f93\u5bc6\u7801,\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(s.strong,{children:"\u5bc6\u94a5\u767b\u5f55"}),",\u8fd9\u79cd\u65b9\u6cd5\u66f4\u5b89\u5168\u4e14\u901a\u5e38\u66f4\u96be\u4ee5\u88ab\u7834\u89e3,\u5176\u6b65\u9aa4\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"ssh-keygen"})," \u547d\u4ee4\u751f\u6210\u4f60\u7684 ssh \u5bc6\u94a5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528\u5982 ",(0,r.jsx)(s.code,{children:"cat .ssh/id_xxxx.pub"})," \u547d\u4ee4\u6765\u83b7\u53d6\u4f60\u751f\u6210\u7684 ssh \u516c\u94a5(\u6b64\u547d\u4ee4\u4e2d",(0,r.jsx)(s.code,{children:"xxxx"}),"\u7684\u503c\u901a\u5e38\u53d6\u51b3\u4e8e\u4f60\u751f\u6210\u5bc6\u94a5\u5bf9\u65f6\u9009\u62e9\u7684\u7b97\u6cd5)"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5728\u670d\u52a1\u5668\u5bf9\u5e94\u7528\u6237\u7684\u5bb6\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.jsx)(s.code,{children:"./ssh/authorized_keys"}),",\u7f16\u8f91\u5b83,\u5c06\u4f60\u7684\u516c\u94a5\u7c98\u8d34\u8fdb\u53bb,\u6bcf\u4e2a\u516c\u94a5\u72ec\u5360\u4e00\u884c"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4,\u4f60\u4f1a\u53d1\u73b0\u8fde\u63a5\u65f6\u4e0d\u518d\u9700\u8981\u5bc6\u7801\u800c\u662f\u76f4\u63a5\u5f39\u51fa shell"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",children:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5"}),"\n",(0,r.jsx)(s.p,{children:"\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5de5\u5177\u8fde\u63a5\u81f3\u670d\u52a1\u5668,\u5728\u8fd9\u91cc\u4e3e\u51fa\u51e0\u4e2a\u5de5\u5177\uff1a"}),"\n","\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"Powershell",label:"Powershell",default:!0,children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(32991).A+"",width:"963",height:"752"})}),(0,r.jsx)(s.p,{children:"Windows \u7cfb\u7edf\u81ea\u5e26\u7684 Powershell"}),(0,r.jsxs)(s.p,{children:["\u6309\u4e0b ",(0,r.jsx)(s.code,{children:"Win + R"})," \u8f93\u5165 ",(0,r.jsx)(s.code,{children:"powershell"})," \u5373\u53ef(\u5982\u679c\u5b89\u88c5\u4e86\u65b0\u7248\u7684 Powershell \u90a3\u4e48\u4f60\u5e94\u8be5\u8f93\u5165",(0,r.jsx)(s.code,{children:"pwsh"}),")"]}),(0,r.jsxs)(s.p,{children:["\u968f\u540e\u5728\u5176\u4e2d\u8f93\u5165 ",(0,r.jsx)(s.code,{children:"ssh -p <port> <username>@<hostname>"})," \u5373\u53ef\u8fde\u63a5 Linux \u670d\u52a1\u5668\u3002"]}),(0,r.jsx)(s.p,{children:"\u6b64\u65f6\u4f1a\u5f39\u51fa\u662f\u5426\u4fdd\u5b58\u670d\u52a1\u5668\u5bc6\u94a5,\u9009\u62e9\u63a5\u53d7\u5e76\u4fdd\u5b58,\u4e4b\u540e\u5c31\u4e0d\u4f1a\u518d\u5f39\u51fa\u3002"}),(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"port \u8f93\u5165\u670d\u52a1\u5668\u7684 ssh \u7aef\u53e3"}),(0,r.jsx)(s.p,{children:"username \u4e3a\u767b\u5f55\u670d\u52a1\u5668\u7684\u7528\u6237\u540d"}),(0,r.jsx)(s.p,{children:"hostname \u4e3a\u670d\u52a1\u5668\u7684\u57df\u540d\u6216\u8005 IP"})]})]}),(0,r.jsxs)(l.A,{value:"windterm",label:"WindTerm",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"WindTerm",src:n(87460).A+"",width:"2560",height:"1520"})}),(0,r.jsx)(s.p,{children:"\u4e00\u4e2a\u5f00\u6e90\u7684 SSH/Telnet/Serial/Shell/Sftp \u5ba2\u6237\u7aef\u5de5\u5177"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/kingToolbox/WindTerm",children:"https://github.com/kingToolbox/WindTerm"})})]}),(0,r.jsxs)(l.A,{value:"finelshell",label:"FinelShell",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"finalshell\u7ec8\u7aef",src:n(96132).A+"",width:"1758",height:"847"})}),(0,r.jsx)(s.p,{children:"FinalShell\u662f\u4e00\u4f53\u5316\u7684\u7684\u670d\u52a1\u5668,\u7f51\u7edc\u7ba1\u7406\u8f6f\u4ef6,\u4e0d\u4ec5\u662fssh\u5ba2\u6237\u7aef,\u8fd8\u662f\u529f\u80fd\u5f3a\u5927\u7684\u5f00\u53d1,\u8fd0\u7ef4\u5de5\u5177,\u5145\u5206\u6ee1\u8db3\u5f00\u53d1,\u8fd0\u7ef4\u9700\u6c42."})]}),(0,r.jsxs)(l.A,{value:"xshell",label:"Xshell",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://www.xshell.com/wp-content/uploads/2020/10/p-xshell7-top-zh.png",alt:"xshell\u7ec8\u7aef"})}),(0,r.jsx)(s.p,{children:"\u4ed6\u79f0\u81ea\u5df1\u662f \u4e1a\u754c\u6700\u5f3a\u5927\u7684SSH\u5ba2\u6237\u673a"})]}),(0,r.jsxs)(l.A,{value:"termux",lable:"\u5b89\u5353\u624b\u673a(termux)",children:[(0,r.jsxs)(s.p,{children:["\u4f60\u9700\u8981\u5b89\u88c5 termux \u8fd9\u4e2a\u8f6f\u4ef6\u3002\u4f60\u53ef\u4ee5\u53bb Google Play \u4e0b\u8f7d,\u4e5f\u53ef\u4ee5\u53bb",(0,r.jsx)(s.a,{href:"https://github.com/termux/termux-app",children:"\u5b83\u7684\u5f00\u6e90\u5730\u5740"}),"\u4e0b\u8f7d\u3002"]}),(0,r.jsx)(s.p,{children:"\u5b89\u88c5\u597d\u4e4b\u540e,\u6253\u5f00\u8f6f\u4ef6\u5c31\u662f\u547d\u4ee4\u884c,\u968f\u540e\u76f4\u63a5\u4f7f\u7528 ssh \u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u3002"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"termux\u7ec8\u7aef",src:n(74206).A+"",width:"1812",height:"2176"})})]}),(0,r.jsxs)(l.A,{value:"zsh",lable:"macOS(zsh)",children:[(0,r.jsx)(s.p,{children:"macOS \u5185\u7f6e ssh \u547d\u4ee4,\u6211\u4eec\u53ef\u4ee5\u7528\u7ec8\u7aef\u6765\u6267\u884c\u5b83\u3002\u8981\u6253\u5f00macos\u4e0a\u7684\u7ec8\u7aef,\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff1a"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"(\u5982\u679c\u7ec8\u7aefapp\u6ca1\u6709\u88ab\u79fb\u52a8\u8fc7)\u6253\u5f00\u542f\u52a8\u53f0,\u6253\u5f00\u7b2c\u4e00\u9875\u7684\u5176\u4ed6\u6587\u4ef6\u5939,\u70b9\u51fb\u7ec8\u7aef\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728\u5e94\u7528\u6587\u4ef6\u5939(\u5165\u53e3\u9ed8\u8ba4\u56fa\u5b9a\u5728\u8bbf\u8fbe\u4fa7\u8fb9\u680f\u4e0a)\u91cc\u627e\u5230\u5b83\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u6309\u4e0bcommand+\u7a7a\u683c\u6216\u952e\u76d8\u4e0a\u7684\u641c\u7d22\u952e\u5524\u8d77 spotlight ,\u8f93\u5165\u201c\u7ec8\u7aef\u201d,\u7136\u540e\u5b83\u5c31\u4f1a\u663e\u793a\u5728\u4e0b\u9762\u3002"}),"\n"]}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"macos\u7ec8\u7aef",src:n(3034).A+"",width:"1394",height:"966"})}),(0,r.jsx)(s.p,{children:"\u6253\u5f00\u7ec8\u7aef\u540e,\u4f7f\u7528\u4e0a\u6587\u4e2d\u63d0\u5230\u7684ssh\u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u3002"})]})]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},99730:(e,s,n)=>{n.d(s,{A:()=>l});n(30758);var r=n(13526);const t={tabItem:"tabItem_YJ0k"};var i=n(86070);function l(e){let{children:s,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:n,children:s})}},72791:(e,s,n)=>{n.d(s,{A:()=>k});var r=n(30758),t=n(13526),i=n(55256),l=n(25557),a=n(1933),c=n(97381),o=n(92506),d=n(53619);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}}))}(n);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:n}=e;const t=(0,l.W6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(t.location.search);s.set(i,e),t.replace({...t.location,search:s.toString()})}),[i,t])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,i=u(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:i}))),[o,h]=x({queryString:n,groupId:t}),[m,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,i]=(0,d.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),f=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=n(49935);const f={tabList:"tabList_tVCT",tabItem:"tabItem_Z3ee"};var b=n(86070);function g(e){let{className:s,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const s=e.currentTarget,n=c.indexOf(s),t=a[n].value;t!==r&&(o(s),l(t))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function w(e){const s=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...s,...e}),(0,b.jsx)(v,{...s,...e})]})}function k(e){const s=(0,j.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(s))}},32991:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},96132:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},87460:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},3034:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},74206:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},35396:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var r=n(30758);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);