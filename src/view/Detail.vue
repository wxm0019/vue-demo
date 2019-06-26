<template>
    <div class="home">
     detail
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    created(){
        this.$http.get(url,{
            params:{
                ordeId:this.$route.parms.id
            }
        }).then(res=>{
            this.info = re.data.info
        })
    }
}
</script>

