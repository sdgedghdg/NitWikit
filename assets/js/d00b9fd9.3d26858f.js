"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1725],{87402:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=n(74848),t=n(28453);const r={sidebar_position:4,title:"Dragonwell 11",slug:"/optimize/jvm/dragonwell"},s="Dragonwell 11",a={id:"process/maintenance/optimize/jvm/dragonwell11",title:"Dragonwell 11",description:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 Dragonwell 11",source:"@site/docs-java/process/maintenance/optimize/jvm/dragonwell11.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm/dragonwell",permalink:"/NitWikit/Java/optimize/jvm/dragonwell",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/dragonwell11.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:172334752e4,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Dragonwell 11",slug:"/optimize/jvm/dragonwell"},sidebar:"tutorialSidebar",previous:{title:"Dragonwell 8",permalink:"/NitWikit/Java/optimize/jvm/dragonwell8"},next:{title:"GraalVM EE",permalink:"/NitWikit/Java/optimize/jvm/graalvm"}},o={},c=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"ZGC",id:"zgc",level:2},{value:"G1GC",id:"g1gc",level:2},{value:"\u5185\u8054\u4f18\u5316",id:"\u5185\u8054\u4f18\u5316",level:2},{value:"\u5bf9\u8c61\u5934\u538b\u7f29",id:"\u5bf9\u8c61\u5934\u538b\u7f29",level:2},{value:"Wisp",id:"wisp",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"dragonwell-11",children:"Dragonwell 11"}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 Dragonwell 11"}),"\n",(0,l.jsx)(i.h2,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-shell",children:"-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e9b\u662f\u57fa\u7840\u53c2\u6570"}),"\n",(0,l.jsx)(i.h2,{id:"zgc",children:"ZGC"}),"\n",(0,l.jsx)(i.p,{children:"Dragonwell11 \u7684 ZGC \u4e0d\u540c\u4e8e OpenJDK11 \u7684 ZGC,Dragonwell \u901a\u8fc7\u79fb\u690d OpenJDK 15+\u7684 ZGC\u8865\u4e01\uff0c\u4f7f\u5f97Dragonwell\u7684ZGC\u53ef\u4ee5\u6295\u5165\u751f\u4ea7\u73af\u5883"}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570 ",(0,l.jsx)(i.code,{children:"-XX:+UseZGC -XX:AllocatePrefetchStyle=1"}),"\u4ee5\u542f\u7528"]}),"\n",(0,l.jsx)(i.h2,{id:"g1gc",children:"G1GC"}),"\n",(0,l.jsx)(i.p,{children:"\u6dfb\u52a0\u53c2\u6570"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-shell",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16\n"})}),"\n",(0,l.jsx)(i.h2,{id:"\u5185\u8054\u4f18\u5316",children:"\u5185\u8054\u4f18\u5316"}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+UseVtableBasedCHA"})]}),"\n",(0,l.jsx)(i.h2,{id:"\u5bf9\u8c61\u5934\u538b\u7f29",children:"\u5bf9\u8c61\u5934\u538b\u7f29"}),"\n",(0,l.jsxs)(i.p,{children:["\u53ef\u4ee5\u8282\u7ea610%\u5de6\u53f3\u7684Java\u5bf9\u8c61\u5185\u5b58\u5360\u7528\uff0c\u5e76\u53ef\u80fd\u63d0\u5347\u7a0b\u5e8f\u6027\u80fd\u3002",(0,l.jsx)(i.strong,{children:"\u76ee\u524d\u4ec5\u652f\u6301G1GC\u548cParallelGC"})]}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+UseCompactObjectHeaders"})]}),"\n",(0,l.jsx)(i.h2,{id:"wisp",children:"Wisp"}),"\n",(0,l.jsx)(i.p,{children:"Wisp\u5728JVM\u4e0a\u63d0\u4f9b\u4e86\u4e00\u79cd\u7528\u6237\u6001\u7684\u7ebf\u7a0b\u5b9e\u73b0\u3002\u5f00\u542fWisp2\u540e\uff0cJava\u7ebf\u7a0b\u4e0d\u518d\u7b80\u5355\u5730\u6620\u5c04\u5230\u5185\u6838\u7ea7\u7ebf\u7a0b\uff0c\u800c\u662f\u5bf9\u5e94\u5230\u4e00\u4e2a\u534f\u7a0b\uff0cJVM\u5728\u5c11\u91cf\u5185\u6838\u7ebf\u4e0a\u8c03\u5ea6\u5927\u91cf\u534f\u7a0b\u6267\u884c\uff0c\u4ee5\u51cf\u5c11\u5185\u6838\u7684\u8c03\u5ea6\u5f00\u9500"}),"\n",(0,l.jsx)(i.p,{children:"\u53ea\u9700\u6dfb\u52a0JVM\u53c2\u6570\u5373\u53ef\u5f00\u542fWisp2,\u65e0\u9700\u66f4\u6539\u7a0b\u5e8f\uff01\uff01"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u4ec5\u652f\u6301Linux x64"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+UnlockExperimentalVMOptions -XX:+UseWisp2"})]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var l=n(96540);const t={},r=l.createContext(t);function s(e){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);