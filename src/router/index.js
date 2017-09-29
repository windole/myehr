import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index';
import Pass from '@/components/pass/pass';
import HR from '@/components/hr/hr';
import StuffServers from '@/components/stuffServers/stuffServers';
import Case from '@/components/case/case';
import Ecology from '@/components/ecology/ecology';
import MyeHR from '@/components/MyeHR/MyeHR';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/pass',
            name: 'pass',
            component: Pass
        },
        {
            path: '/hr',
            name: 'hr',
            component: HR
        },
        {
            path: '/stuffServers',
            name: 'stuffServers',
            component: StuffServers
        },
        {
            path: '/case',
            name: 'case',
            component: Case
        },
        {
            path: '/ecology',
            name: 'ecology',
            component: Ecology
        },
        {
            path: '/MyeHR',
            name: 'MyeHR',
            component: MyeHR
        }
    ],
    mode: 'history'
});
