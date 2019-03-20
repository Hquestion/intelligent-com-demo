<template>
    <div class="dataset">
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
import { Button } from 'element-ui';

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
        Step,
        [Button.name]: Button
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
    .dataset {
        width: 50%;
        margin: 0 auto;
    }
</style>
