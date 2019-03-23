import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import Dataset from '../lib/dataset';

import router from './router';

Dataset.register(router, '/home/tab-one');

import './assets/app.scss';

Vue.use(ElementUI);
Vue.use(Dataset);

new Vue({
    router,
    render(){
        return <App/>;
    }
}).$mount('#app');
