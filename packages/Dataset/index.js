import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI);

import Dataset from './Dataset.vue';

Dataset.install = Vue => {
    Vue.component(Dataset.name, Dataset);
};

export default Dataset;
