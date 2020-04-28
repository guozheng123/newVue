<template>
    <div id="login">
        login
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            url: '',
        }
    },
    methods: {
        getRedirect () {
            const redirect = window.sessionStorage.getItem('redirectUrl');
            if (redirect) {
                this.url = redirect;
                window.sessionStorage.clear('redirectUrl');
            } else {
                // login登陆成功默认进入得页面
                this.url = '/home';
            }
            if (this.url !== window.location.pathname) this.$router.push({path: `${this.url}`});
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


