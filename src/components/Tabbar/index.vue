<template>
    <div class="tabbar">
       <item txt="首页" mark="home" :sel="selected" :changeselected="changeselected">
           <img slot="haha" src="../../assets/ic_tab_home_normal.png" alt="" >
          
           <img slot="huhu" src="../../assets/ic_tab_home_active.png" alt="">
           </item> 
       <item txt="影音" mark="audio" :sel="selected" :changeselected="changeselected">
            <img slot="haha" src="../../assets/ic_tab_audio_normal.png" alt="">
            <img slot="huhu" src="../../assets/ic_tab_audio_active.png" alt="">
       </item>
       <item txt="广播" mark="broadcast" :sel="selected" :changeselected="changeselected">
            <img slot="haha" src="../../assets/ic_tab_broadcast_normal.png" alt="">
             <img slot="huhu" src="../../assets/ic_tab_broadcast_active.png" alt="">
       </item>
       <item txt="分组" mark="group" :sel="selected" :changeselected="changeselected">
            <img slot="haha" src="../../assets/ic_tab_group_normal.png" alt="">
            <img slot="huhu" src="../../assets/ic_tab_group_active.png" alt="">
       </item>
       <item txt="我的" mark="mine" :sel="selected" :changeselected="changeselected">
            <img slot="haha" src="../../assets/ic_tab_mine_normal.png" alt="">
            <img slot="huhu" src="../../assets/ic_tab_mine_active.png" alt="">
       </item>
    </div>
</template>
<style lang="scss" scoped>
.tabbar{
    
    position:fixed;
    left:0;
    bottom: 0;
    width:100%;
    height:60px;
    background: pink;
    display:flex;
}
</style>
<script>
import item from "./item"
export default {
    data(){
        return {
            selected:"home"
        }
    },
    components:{
        item
    },
    methods:{
        changeselected(val){
            this.selected = val
        }
    }
}
</script>

