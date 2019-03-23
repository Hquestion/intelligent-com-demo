<template>
    <div class="Home">
        this is home page
        <br>
        <router-link to="/home/tab-one">到TAB1</router-link>
        <router-link to="/home/tab-two">到TAB2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
