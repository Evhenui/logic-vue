<template>
  <div id="app">
    <power-calc/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PowerCalc from '@/components/PowerCalc.vue'

export default Vue.extend({
  name: 'App',
  components: { PowerCalc }
});
</script>

<style lang="scss">

</style>
