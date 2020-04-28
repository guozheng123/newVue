<template>
    <div id="home">
        我是home
    </div>
</template>
<script>
export default {
    name: 'Home',
    data () {
        return {

        }
    },
    watch: {
        '$route' (to) {
            console.log(to);
            // 侧边导航栏  如果使用 浏览器回退 对应高亮 不一致 通过监听路由处理
        }
    }
}
</script>
<style>

</style>


