<template>
    <div id="aside">
        我是侧边栏
    </div>
</template>
<script>
export default {
    name: 'Aside',
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


