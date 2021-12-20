/*
 * @Author: BGG
 * @Date: 2021-12-20 22:00:07
 * @LastEditors: BGG
 * @LastEditTime: 2021-12-20 22:26:18
 * @Description:  
 */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import '@/assets/styles/global.less';

if (process.env.NODE_ENV === 'development') {
  require('./mock');
}

createApp(App).use(store).use(router).mount('#app');
