<template>
   <input-power v-model.number="calculationUPSRuntime.result">часов</input-power>
</template>

<script>
import Vue from "vue";
import InputPower from '@/components/UI/InputPower.vue'
export default Vue.extend({
   name: 'form-section',
   components: {
      InputPower
   }
})
</script>

<style>

</style>