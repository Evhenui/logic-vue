<template>
  <section class="calc-body">
    <UpsCalculation class="calc-body__section"/>
    <BatteryCalculation class="calc-body__section"/>
    <UptimeCalculation class="calc-body__section"/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import UpsCalculation from '@/components/sections/UpsCalculation.vue'
import BatteryCalculation from '@/components/sections/BatteryCalculation.vue'
import UptimeCalculation from '@/components/sections/UptimeCalculation.vue'

export default Vue.extend({
  components: {
    UpsCalculation,BatteryCalculation,UptimeCalculation
  },
});
</script>

<style lang="scss">
.calc-body {
		&__section {
      border-bottom: 1px solid #8a8a8a;
      &:last-child {
        border-bottom: none;
      }
		}
}

</style>