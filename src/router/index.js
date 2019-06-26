import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)//让Vue使用vue-router插件

import home from "./home"
import broadcast from "./broadcast"
import audio from "./audio"
import group from "./group"
import mine from "./mine"
let router = new Router({
 routes:[
     {path:"/",redirect:"home"},
     home,broadcast,audio,group,mine,
     {path:"/notfound",component:()=>import("@/view/Notfound/Notfound")},
    {path:"*",redirect:"notfound"}

 ]
})

export default router


