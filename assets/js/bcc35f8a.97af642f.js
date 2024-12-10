"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["8411"],{73773:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"start/connect-to-server","title":"\u8FDE\u63A5\u670D\u52A1\u5668","description":"\u7AEF\u53E3","source":"@site/docs-java/start/connect-to-server.md","sourceDirName":"start","slug":"/start/connect-to-server","permalink":"/Java/start/connect-to-server","draft":false,"unlisted":false,"editUrl":"https://github.com/8aka-Team/NitWikit/tree/main/docs-java/start/connect-to-server.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1729683245000,"sidebarPosition":6,"frontMatter":{"title":"\u8FDE\u63A5\u670D\u52A1\u5668","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\u914D\u7F6E\u670D\u52A1\u7AEF","permalink":"/Java/start/config-server"},"next":{"title":"\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883","permalink":"/Java/start/deploy"}}'),s=i("52676"),t=i("69532");let l={title:"\u8FDE\u63A5\u670D\u52A1\u5668",sidebar_position:6},c="\u8FDE\u63A5\u670D\u52A1\u5668",d={},o=[{value:"\u7AEF\u53E3",id:"\u7AEF\u53E3",level:2},{value:"\u672C\u5730\u8FDE\u63A5",id:"\u672C\u5730\u8FDE\u63A5",level:2},{value:"\u8FDC\u7A0B\u8FDE\u63A5",id:"\u8FDC\u7A0B\u8FDE\u63A5",level:2},{value:"\u6211\u6709\u516C\u7F51",id:"\u6211\u6709\u516C\u7F51",level:3},{value:"\u6211\u6CA1\u516C\u7F51",id:"\u6211\u6CA1\u516C\u7F51",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u8FDE\u63A5\u670D\u52A1\u5668",children:"\u8FDE\u63A5\u670D\u52A1\u5668"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7AEF\u53E3",children:"\u7AEF\u53E3"}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5F00\u4F60\u670D\u52A1\u5668\u6839\u76EE\u5F55\u7684 ",(0,s.jsx)(n.code,{children:"server.properties"})]}),"\n",(0,s.jsx)(n.p,{children:"\u627E\u5230"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"server-port=25565\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"25565"})," \u5373 Minecraft \u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u5982\u679C\u4E0D\u66F4\u6539\u9ED8\u8BA4\u7AEF\u53E3\u901A\u5E38\u53EF\u7701\u7565\u4E0D\u5199"]}),"\n",(0,s.jsx)(n.h2,{id:"\u672C\u5730\u8FDE\u63A5",children:"\u672C\u5730\u8FDE\u63A5"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u6B64\u65B9\u6CD5\u4EC5\u9002\u7528\u4E8E\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u5728\u540C\u4E00\u673A\u5668\u4E0A\u7684\u60C5\u51B5"})}),"\n",(0,s.jsx)(n.p,{children:"\u672C\u673A IP \uFF0C\u901A\u5E38\u6709\u8FD9\u6837\u51E0\u79CD\u5F62\u5F0F\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"localhost"}),"\n",(0,s.jsx)(n.li,{children:"127.0.0.1"}),"\n",(0,s.jsx)(n.li,{children:"0.0.0.0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4F60\u6CA1\u6709\u4FEE\u6539\u4F60\u7684\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C\u90A3\u4E48\u5728\u4F60\u7684 Minecraft \u5BA2\u6237\u7AEF\u4E2D:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u70B9\u51FB\u591A\u4EBA\u6E38\u620F"}),"\n",(0,s.jsx)(n.li,{children:"\u70B9\u51FB\u6DFB\u52A0\u670D\u52A1\u5668"}),"\n",(0,s.jsx)(n.li,{children:"\u8F93\u5165\u4E0A\u9762\u63D0\u5230\u7684\u672C\u5730 IP \u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A"}),"\n",(0,s.jsx)(n.li,{children:"\u70B9\u51FB\u5B8C\u6210"}),"\n",(0,s.jsx)(n.li,{children:"\u8FDB\u5165\u670D\u52A1\u5668"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u4F60\u4FEE\u6539\u4E86\u4F60\u7684\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C\u5728\u56DE\u73AF\u5730\u5740\u540E\u9762\u52A0\u4E2A\u5192\u53F7\u52A0\u4E0A\u4F60\u6539\u7684\u7AEF\u53E3\u5373\u53EF"}),"\n",(0,s.jsx)(n.p,{children:"\u5982:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"localhost:25566"}),"\n",(0,s.jsx)(n.li,{children:"127.0.0.1:25566"}),"\n",(0,s.jsx)(n.li,{children:"0.0.0.0:25566"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u8981\u4F7F\u7528\u82F1\u6587\u7684 ",(0,s.jsx)(n.code,{children:":"})," ",(0,s.jsx)(n.strong,{children:"\u4E0D\u80FD\u4F7F\u7528\u4E2D\u6587"}),"\u7684 ",(0,s.jsx)(n.code,{children:"\uFF1A"})," \uFF01"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u8FDC\u7A0B\u8FDE\u63A5",children:"\u8FDC\u7A0B\u8FDE\u63A5"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5F00\u59CB\u8BA9\u4F60\u7684\u73A9\u5BB6\u8FDC\u7A0B\u8FDE\u63A5\u81F3\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u8BF7\u5148\u786E\u8BA4\u6709\u6CA1\u6709\u516C\u7F51"}),"\n",(0,s.jsx)(n.h3,{id:"\u6211\u6709\u516C\u7F51",children:"\u6211\u6709\u516C\u7F51"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8BBE\u6211\u73B0\u5728\u7684\u516C\u7F51 IP \u662F ",(0,s.jsx)(n.code,{children:"114.51.14.191"}),"\uFF0C\u90A3\u4E48\u6211\u7684\u8FDE\u63A5\u5E94\u8BE5\u662F\u8F93\u5165 ",(0,s.jsx)(n.code,{children:"114.51.14.191:25565"}),"\uFF0C"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\u5192\u53F7\u540E\u9762\u7684",(0,s.jsx)(n.strong,{children:"\u7AEF\u53E3\u53F7"}),"\u5E94\u8BE5\u548C\u4F60\u8BBE\u7F6E\u7684 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"server-port"})})," \u4E00\u6A21\u4E00\u6837\uFF0C\u4E0D\u7136\u73A9\u5BB6\u65E0\u6CD5\u8FDE\u63A5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u6211\u73B0\u5728\u628A ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"server-port"})})," \u6539\u6210\u4E86 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"9180"})}),"\uFF0C\u5E94\u8BE5\u8FD9\u4E48\u8FDB\u5165\u670D\u52A1\u5668 ",(0,s.jsx)(n.code,{children:"114.51.14.191:9180"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4E3A ",(0,s.jsx)(n.code,{children:"114.51.14.191"})," \u7ED1\u5B9A\u4E86\u57DF\u540D ",(0,s.jsx)(n.code,{children:"yizhan.wiki"})," \uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u8FD9\u4E48\u8FDB ",(0,s.jsx)(n.code,{children:"yizhan.wiki:9180"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679C\u5F88\u4E0D\u5E78\uFF0C\u4F60\u7684\u73A9\u5BB6\u6CA1\u6709\u6B63\u5E38\u8FDE\u63A5\u4E0A\u6765\uFF0C\u8BF7\u5148\u6309\u4EE5\u4E0B\u6B65\u9AA4\u68C0\u67E5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BF7\u5C1D\u8BD5\u672C\u5730\u8FDE\u63A5\uFF0C\u5982\u679C\u4E0D\u884C\uFF0C\u90A3\u4E48\u5C31\u662F\u670D\u52A1\u5668\u6709\u95EE\u9898"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u672C\u5730\u8FDE\u63A5\u6B63\u5E38\uFF0C\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u5728\u9632\u706B\u5899\u4E2D\u653E\u884C\u7AEF\u53E3"}),"\n",(0,s.jsx)(n.li,{children:"\u68C0\u67E5\u4F60\u5728\u8DEF\u7531\u5668\u4E2D\u662F\u5426\u628A\u8FD9\u4E2A\u7AEF\u53E3\u516C\u5F00\u5230\u516C\u7F51"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6211\u6CA1\u516C\u7F51",children:"\u6211\u6CA1\u516C\u7F51"}),"\n",(0,s.jsxs)(n.p,{children:["\u67E5\u770B ",(0,s.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/process/deploy/intranet-penetration",children:"\u5185\u7F51\u7A7F\u900F"})," \u90E8\u5206\uFF0C\u6309\u7167\u4E0A\u9762\u7684\u6559\u7A0B\u628A\u4F60\u7684\u7AEF\u53E3\u6620\u5C04\u51FA\u53BB"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69532:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var r=i(75271);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);