import { createWebHistory, createRouter } from "vue-router";
// import { createWebHash, createRouter } from "vue-router";

import M_head from './components/M_head.vue';
import Main from './components/Main.vue'

import O_head from './components/O_head.vue';
import Overview from './components/Overview.vue'

import I_head from './components/I_head.vue';
import Item from './components/Item.vue'

import E_head from './components/E_head.vue'
import Exhibition from './components/Exhibition.vue'

import In_head from './components/In_head.vue';
import Inquire from './components/Inquire.vue';

import N_head from './components/N_head.vue';
import Notice from './components/Notice.vue';

const router = createRouter({
 history: createWebHistory(),
//  hash: createWebHash(),
 routes: [
    {
        path: '/',
        components: {
            default: Main,
            Head:M_head,
        },
    },
    {
        path: '/Overview',
        components: {
          default: Overview,
          Head:O_head,
        },
    },
    {
        path: '/Item',
        components: {
          default: Item,
          Head:I_head,
        },
    },
    {
        path: '/Exhibition',
        components: {
            Exhibition: Exhibition,
            Head:E_head,
        },
    },
    {
        path: '/Inquire',
        components: {
            default: Inquire,
            Head:In_head,
        },
    },
    {
        path: '/Notice',
        components: {
            default: Notice,
            Head:N_head,
        },
    },
  ],
  scrollBehavior(){
    return {
        top:0
    }
  }
});
export default router; 