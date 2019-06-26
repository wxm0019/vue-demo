<template>
    <div class="home">list
        <router-link to="/list/guonei">国内</router-link>
        <router-link to="/list/guowai">国际</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
.router-link-active{
  color:green;
}
</style>
<script>
export default {
    
}
</script>

