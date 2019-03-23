<template>
    <div class="TabTwo">
        this is tab two
        <ElButton type="primary" @click="toDataset">跳转数据集页面</ElButton>
    </div>
</template>

<script>
export default {
    name: 'TabTwo',
    data() {
        return {};
    },
    methods: {
        toDataset() {
            this.$router.push({
                name: 'DatasetList'
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
