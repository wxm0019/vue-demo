<template>
    <div class="item" @click="change">
        <span v-if="!flag"><slot name="haha"></slot></span>
        <span v-else><slot name="huhu"></slot></span>
    <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>
<style lang="scss" scoped>
.item{
    display:flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    img{
        width:40px;
        height: 40px;
    }
    .active{
        color:green
    }
}
</style>
<script>
export default {
    props:["txt","mark","sel","changeselected"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        change(){
            this.changeselected(this.mark)
            this.$router.push("/"+this.mark)//编程式导航
        }
    }
}
</script>

