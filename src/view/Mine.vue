<template>
    <div class="home">
        <button @click="clickme">my</button>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    methods:{
        clickme(){
            let flag = confirm("确认退出吗")
            if(flag){
                //编程时导航
                this.$router.push("/")
            }
        }
    }
}
</script>

