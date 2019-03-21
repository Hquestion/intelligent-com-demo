<template>
    <div class="Home">
        this is home page
        <ElButton type="primary" @click="toDataset">跳转数据集页面</ElButton>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
    methods: {
        toDataset() {
            this.$router.push({
                name: 'dataset-list'
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
