<template>
    <div class="sky-dataset">
        <Step ref="step" v-model="stepIndex"></Step>
        <component :is="comp"></component>
        <div>
            <ElButton @click="handlePrev">prev</ElButton>
            <ElButton type="primary" @click="handleNext">next</ElButton>
        </div>
    </div>
</template>

<script>
import BaseInfo from './baseInfo';
import Stack from './Stack';
import Future from './Future';
import Step from './step';

const StepMap = [BaseInfo.name, Stack.name, Future.name];
export default {
    name: 'Dataset',
    data() {
        return {
            stepIndex: 0,
            StepMap
        };
    },
    components: {
        BaseInfo,
        Stack,
        Future,
        Step
    },
    computed: {
        comp() {
            return this.StepMap[this.stepIndex];
        }
    },
    methods: {
        handlePrev() {
            this.$refs.step.prevStep();
        },
        handleNext() {
            this.$refs.step.nextStep();
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
