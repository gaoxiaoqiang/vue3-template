<template>

    <el-menu :default-active="route.path" class="el-menu-vertical-demo" :collapse="isClose" background-color="#112f50"
        text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="">
            <template #title><span>首客生鲜采购系统</span></template>
        </el-menu-item>
        <el-menu-item index="/">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <span>系统首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <Grid />
                </el-icon>
                <span>产品管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/goods/goodsList">产品列表</el-menu-item>
                <el-menu-item index="/goods/category">产品分类</el-menu-item>
            </el-menu-item-group>

        </el-sub-menu>


    </el-menu>



</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
defineProps({
    isClose: {
        type: Boolean,
        default: false
    }
});
const route = useRoute();



</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    border-right: none;
}
</style>
