"use strict";(()=>{var e={};e.id=746,e.ids=[746],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9580:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>P,patchFetch:()=>v,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>g});var a={};r.r(a),r.d(a,{GET:()=>p});var n=r(884),o=r(6132),i=r(1040),s=r(2094),u=r(5798);async function p(e){try{let t=e.nextUrl.searchParams.get("page"),r=t?(parseInt(t)-1)*5:0,a=await s._.notice.findMany({skip:r,take:5,orderBy:{reg_date:"desc"}});return u.Z.json(a)}catch(e){return u.Z.json({},{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/notice/route",pathname:"/api/notice",filename:"route",bundlePath:"app/api/notice/route"},resolvedPagePath:"/Users/choegihwan/Desktop/Projects/outside/231108/code/app/src/app/api/notice/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:h,headerHooks:m,staticGenerationBailout:g}=c,P="/api/notice/route";function v(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:l})}},2094:(e,t,r)=>{r.d(t,{_:()=>n});let a=require("@prisma/client"),n=new a.PrismaClient}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,107],()=>r(9580));module.exports=a})();