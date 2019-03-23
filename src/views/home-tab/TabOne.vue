<template>
    <div class="TabOne">
        this is tab one
        <router-link to="/home/tab-one/dataset-list">到Dataset-list</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'TabOne',
    data() {
        return {};
    }
}
</script>

<style lang="scss" scoped>

</style>
