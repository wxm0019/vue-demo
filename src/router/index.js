import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)//让Vue使用vue-router插件
// import Home from "@/view/Home"
// import List from "@/view/List"
// import Mine from "@/view/Mine"
let router = new Router({
 routes:[
     {path:"/home",component:()=>import("@/view/Home")},
     {path:"/list",component:()=>import("@/view/List"),children:[
         {path:"guonei",component:()=>import("@/view/guonei")},
         {path:"guowai",component:()=>import("@/view/guowai")}]},
     {path:"/mine",component:()=>import("@/view/Mine")},
     {path:"/detail/:id",component:()=>import("@/view/Detail")}

 ]
})
//全局前置监听路由
// router.beforeEach(to,from,next)=>{
    
//     console.log("");
//     next();//调用否子函数
// }
//全局后置监听路由
router.afterEach((to,from)=>{
    if(to.path==="/mine"){
        alert("999")
    }
})
export default router


