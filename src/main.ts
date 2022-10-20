import Vue from 'vue'
import App from './App.vue'
import PowerCalc from '@/components/PowerCalc.vue'
import PowerCalcBody from '@/components/PowerCalcBody.vue'
import components from '@/components/UI'

components.forEach(component => {
  PowerCalc.component(component.name, component);
  PowerCalcBody.component(component.name, component);
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
