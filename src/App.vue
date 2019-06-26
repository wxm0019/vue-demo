<template>
  <div id="app">
    <router-view></router-view>
    <Appheader></Appheader>
  </div>
</template>

<style lang="scss">

  
  
</style>
<script>
//引入头部区域
import Appheader from "@/components/Header"

export default {
 components:{
   Appheader
 }
}
</script>

