<template>
    <div>
        <div class="header">
            <div class="icon">
                <el-icon v-if="isClose" @click="change">
                    <Expand />
                </el-icon>
                <el-icon v-else @click="change">
                    <Fold />
                </el-icon>

            </div>
            <div class="right">
                <div class="time">{{ time }}</div>
                <div class="line">|</div>
                <div class="loginOut" @click="loginOut">
                    <el-icon>
                        <el-icon>
                            <SwitchButton />
                        </el-icon>
                    </el-icon>
                </div>

            </div>
        </div>
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts" name="myContent">
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
let time = ref<string | null>(null);
const router = useRouter();

defineProps({
    isClose: {
        type: Boolean,
        default: false
    }
});


const emit = defineEmits(['change']);

const loginOut = () => {
    router.push('/login');
};
const change = () => {
    emit('change');
};

onMounted(() => {
    time.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
});
</script>
<style lang="less" scoped>
.header {
    height: 50px;
    line-height: 50px;
    background: #1e78bf;
    color: #fff;
    display: flex;

}

.wrapper {
    margin: 10px;
}

.icon {
    font-size: 24px;
    flex: 1;

}

i {
    cursor: pointer;

}

.right {
    padding-right: 20px;
    display: flex;
}

.time {
    font-size: 12px;
}

.line {
    padding-right: 10px;
    padding-left: 10px;
}

.loginOut {
    padding-left: 2px;
}
</style>