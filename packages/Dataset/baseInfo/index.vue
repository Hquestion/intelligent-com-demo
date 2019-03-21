<template>
    <div class="base-info">
        <ElForm :model="params">
            <ElFormItem label="姓名" prop="name">
                <ElInput v-model="params.name"></ElInput>
            </ElFormItem>
            <ElFormItem label="年龄" prop="age">
                <ElInputNumber v-model="params.name"></ElInputNumber>
            </ElFormItem>
            <ElFormItem label="性别" prop="gender">
                <ElInput v-model="params.gender"></ElInput>
            </ElFormItem>
            <ElFormItem label="地址" prop="address">
                <ElInput v-model="params.address"></ElInput>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<script>
export default {
    name: 'BaseInfo',
    data() {
        return {
            params: {
                name: '站三',
                age: 28,
                gender: 'man',
                address: ''
            }
        };
    },
    components: {

    }
};
</script>

<style lang="scss" scoped>

</style>
