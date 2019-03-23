// const Dataset = () => import(/* webpackChunkName: Dataset */ './Dataset');
// const DatasetList = () => import(/* webpackChunkName: DatasetList */ './DatasetList');
/**
 * Dateset 组件说明
 * @vuedoc
 * @module Dataset
 * @exports Component/Dataset
 * @type {Object}
 * @property routeCfg {Array} 路由配置
 * @property register {Function} 注册路由函数
 */

import DatasetList from './DatasetList';
import Dataset from './Dataset';

/**
 * @type {Array}
 * @description 路由配置，可在注册前修改以适配当前应用使用
 * @example [{
 *      path: '/dataset-list',
 *      name: 'DatasetList',
 *      component: DatasetList
 *  },
 *  {
 *      path: '/dataset-create',
 *      name: 'Dataset',
 *      component: Dataset
 *  }]
 */
const routeCfg = [
    {
        path: 'dataset-list',
        name: 'DatasetList',
        component: DatasetList,
    },
    {
        path: 'dataset-create',
        name: 'Dataset',
        component: Dataset,
    }
];

/**
 * @function register
 * @description vue-router路由注册函数,将组件的路由注册到VueRouter上以在应用中集成
 * @param router {VueRouter} VueRouter实例
 * @param parentPath {string} 作为子路由挂载时，传入父路由的path
 * @returns undefined
 */
const register = (router, parentPath) => {
    return router.addRoutes(registerObj.routeCfg, parentPath)
};

const registerObj = {
    routeCfg,
    register
};

export default registerObj;
