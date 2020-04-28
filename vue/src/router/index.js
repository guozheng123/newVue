import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/Login/login'
import viewNav from '@/components/View/viewNav'
import home from '@/components/IncludeNav/home'

Vue.use(Router);

// 白名单
const white = ['/login'];

// 判断是否有登陆状态   cookies判断得
const getCookies = () => {
    let i = 0;
    let cookie = document.cookie;
    if (cookie) {
        cookie.split(';').forEach(v => {
            let list = v.split('=');
            // 这里判断的是  umname and  username
            if (list[0].trim() === 'umname' || list[0].trim() === 'username') {
                i++;
            }
        });
    }
    if (i === 2) return true;
    return false;
};

// 利用router进行重定向
const redirectUrl = to => {
    if (!getCookies() && !white.some(v => v === to.path)) {
        window.sessionStorage.setItem('redirectUrl', to.fullPath);
    }
};

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/home',
            name: 'viewNav',
            component: viewNav,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: home,
                }
            ]
        },
        // 思想：  单页面应用  有公共侧边栏   ：id  是变量  虽然改变路径，但还是workdesk文件
        // {
        //     path: '/warning/workdesk/:id',
        //     name: 'viewNav',
        //     component: viewNav,
        //     children: [
        //         {
        //             path: '',
        //             name: 'workdesk',
        //             component: workdesk,
        //         }
        //     ]
        // },
    ]
});

router.beforeEach((to, from, next) => {
    redirectUrl(to);
    if (white.some(v => v === to.path)) {
        next();
    } else if (getCookies()) {
        next();
    } else {
        next('/login');
    }
});
export default router;