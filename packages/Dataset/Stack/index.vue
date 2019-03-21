<template>
    <div class="stack">
        <ElForm :model="params">
            <ElFormItem label="Vue">
                <span>good</span>
            </ElFormItem>
            <ElFormItem label="React">
                <span>Nice</span>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<script>
export default {
    name: 'stack',
    data() {
        return {
            params: {

            }
        };
    },
    components: {

    }
};
</script>

<style lang="scss" scoped>

</style>
