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
<script setup lang="ts">
import { ref } from 'vue';
import MyMenu from './myMenu.vue';
import MyContent from './myContent.vue';
let isClose = ref(false);
const change = () => {
    isClose.value = !isClose.value;
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