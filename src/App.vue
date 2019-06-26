<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<style lang="scss">

  
  
</style>
<script>
//引入Tabbar组件
import Tabbar from "./components/Tabbar"
export default {
 components:{
   Tabbar
 }
}
</script>

