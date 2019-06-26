<template>
  <div id="app">
   清明雨上
    <div>
   <router-link to="/home">首页</router-link>
   <router-link to="/list">列表</router-link>
   <router-link to="/mine">我的</router-link>
   </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  
  color: red;
}
.router-link-active{
  color:green;
}
.router-link-exact-active{
  color:orange;
}
</style>
<script>
export default {
  created(){
    console.log(this)
  }
}
</script>

