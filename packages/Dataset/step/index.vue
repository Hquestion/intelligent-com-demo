<template>
    <div class="step-box">
        <ElSteps :active="active">
            <ElStep title="基本信息"></ElStep>
            <ElStep title="技术栈"></ElStep>
            <ElStep title="未来"></ElStep>
        </ElSteps>
    </div>
</template>

<script>
import {Steps, Step} from 'element-ui';
export default {
    name: 'StepBox',
    data() {
        return {
        };
    },
    components: {
        [Steps.name]: Steps,
        [Step.name]: Step
    },
    props: {
        active: {
            type: Number,
            default: 0
        }
    },
    model: {
        prop: 'active',
        event: 'change'
    },
    methods: {
        nextStep() {
            if (this.active < 2) {
                this.$emit('change', this.active + 1);
            }
        },
        prevStep() {
            if (this.active > 0) {
                this.$emit('change', this.active - 1);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
