"use strict";(()=>{var e={};e.id=411,e.ids=[411],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2499:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>m,originalPathname:()=>P,patchFetch:()=>g,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>h,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>v});var r={};o.r(r),o.d(r,{GET:()=>c});var n=o(884),a=o(6132),i=o(1040),u=o(2094),s=o(5798);async function c(){try{let e=await u._.notice.count();return s.Z.json(e)}catch(e){return s.Z.json({},{status:500})}}let p=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/notice/count/route",pathname:"/api/notice/count",filename:"route",bundlePath:"app/api/notice/count/route"},resolvedPagePath:"/Users/choegihwan/Desktop/Projects/outside/231108/code/app/src/app/api/notice/count/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:h,headerHooks:m,staticGenerationBailout:v}=p,P="/api/notice/count/route";function g(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:l})}},2094:(e,t,o)=>{o.d(t,{_:()=>n});let r=require("@prisma/client"),n=new r.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[271,107],()=>o(2499));module.exports=r})();