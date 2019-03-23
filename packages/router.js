// const Dataset = () => import(/* webpackChunkName: Dataset */ './Dataset');
// const DatasetList = () => import(/* webpackChunkName: DatasetList */ './DatasetList');
/**
 * dataset component module
 * @vuedoc
 * @exports component/Dataset
 * @description 数据集组件入口
 */

import DatasetList from './DatasetList';
import Dataset from './Dataset';

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

const registerObj = {
    cfg: routeCfg,
    register: (router, parentPath) => {
        router.addRoutes(registerObj.cfg, parentPath)
    }
};

export default registerObj;
