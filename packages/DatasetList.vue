<template>
    <div class="sky-dataset-list">
        <ElButton @click="createDataset">进入创建数据集</ElButton>
    </div>
</template>

<script>
export default {
    name: 'DatasetList',
    data() {
        return {};
    },
    methods: {
        createDataset() {
            this.$router.push({
                name: 'Dataset'
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
