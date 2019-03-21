// const Dataset = () => import(/* webpackChunkName: Dataset */ './Dataset');
// const DatasetList = () => import(/* webpackChunkName: DatasetList */ './DatasetList');

import DatasetList from './DatasetList';
import Dataset from './Dataset';

const routeCfg = [
    {
        path: '/dataset-list',
        name: 'DatasetList',
        component: DatasetList,
    },
    {
        path: '/dataset-create',
        name: 'Dataset',
        component: Dataset,
    }
];

const registerObj = {
    cfg: routeCfg,
    register: router => {
        router.addRoutes(routeCfg)
    }
};

export default registerObj;
