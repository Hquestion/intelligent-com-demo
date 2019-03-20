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
import { Form, FormItem, Input, InputNumber } from 'element-ui';
export default {
    name: 'stack',
    data() {
        return {
            params: {

            }
        };
    },
    components: {
        [Form.name]: Form,
        [FormItem.name]: FormItem,
        [Input.name]: Input,
        [InputNumber.name]: InputNumber
    }
};
</script>

<style lang="scss" scoped>

</style>
