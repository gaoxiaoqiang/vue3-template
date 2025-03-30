<template>
    <div>

   
    <div class="menu">
        <MyMenu :isClose="isClose"></MyMenu>

    </div>
    <div class="content" :class="{ active: isClose }">
        <MyContent :isClose="isClose" @change="change"></MyContent>
    </div>
</div>
</template>
<script>
import MyMenu from './myMenu.vue'
import MyContent from './myContent.vue';
import { ref } from 'vue';

export default {
    components: {
        MyMenu, MyContent
    },

    setup() {
        let isClose = ref(false);
        const change = (param) => {
            isClose.value = !isClose.value;
        }
        return {
            isClose, change
        }

    }

}


</script>

<style lang="less" scoped>
.menu {
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background: #112f50;
}

.content {
    padding-left: 200px;

}

.active {
    padding-left: 64px;
}
</style>