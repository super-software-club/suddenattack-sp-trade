"use strict";(()=>{var e={};e.id=579,e.ids=[579],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8406:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>h,originalPathname:()=>v,patchFetch:()=>P,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>g,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var i={};r.r(i),r.d(i,{GET:()=>p});var a=r(884),n=r(6132),s=r(1040),o=r(2094),u=r(5798);async function p(){try{let e=await o._.setting.findFirst({where:{setting_id:1}});return u.Z.json(e)}catch(e){return u.Z.json({},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/setting/route",pathname:"/api/setting",filename:"route",bundlePath:"app/api/setting/route"},resolvedPagePath:"/Users/choegihwan/Desktop/Projects/outside/231108/code/app/src/app/api/setting/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:g,headerHooks:h,staticGenerationBailout:m}=d,v="/api/setting/route";function P(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:l})}},2094:(e,t,r)=>{r.d(t,{_:()=>a});let i=require("@prisma/client"),a=new i.PrismaClient}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[271,107],()=>r(8406));module.exports=i})();