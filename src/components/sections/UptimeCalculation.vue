<template>
  <section class="calc-enter-section">
        <title-section>Расчет времени автономной работы ИБП</title-section>

        <section class="calc-enter-section__body">
          <form class="calc-enter-section__form-without-checkboxes" action="">
            <section class="calc-enter-section__inputs-wrapper">
              <section class="calc-enter-section__inputs-enter">
                <div class="calc-enter-section__data-input-section">
                  <div class="calc-enter-section__input-help">
                    <h3 class="calc-enter-section__subtitle source-power">Нагрузка, W:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                  </div>

                  <input-power typeInput="number" inputId="w" v-model.number="calculationUPSRuntime.load">W</input-power>
                </div>

                <div class="calc-enter-section__data-input-section">
                  <div class="calc-enter-section__input-help switch">
                    <h3 class="calc-enter-section__subtitle source-power">КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                    <button-switch v-model="stateSwitch.switchBackupTime" />
                  </div>

                  <input-power typeInput="number" :isDisable="!stateSwitch.switchBackupTime" inputId="persent" v-model.number="calculationUPSRuntime.inverterEfficiency">%</input-power>
                </div>

                <div class="calc-enter-section__data-input-section">
                  <div class="calc-enter-section__input-help">
                    <h3 class="calc-enter-section__subtitle source-power">Номинальное напряжение АКБ:</h3>
                  </div>

                  <input-power typeInput="number" inputId="v" v-model.number="calculationUPSRuntime.ratedBatteryVoltage">V</input-power>
                </div>

                <div class="calc-enter-section__data-input-section">
                  <div class="calc-enter-section__input-help">
                    <h3 class="calc-enter-section__subtitle source-power">Ёмкость АКБ:</h3>
                  </div>

                  <input-power typeInput="number" inputId="ah" v-model.number="calculationUPSRuntime.batteryCapacity">Ah</input-power>
                </div>
              </section>

              <button-orange @getResult="getResultCalculationUPS" />
            </section>

            <div class="calc-enter-section__data-input-section">
              <h3 class="calc-enter-section__subtitle source-power result">Время работы ИБП:</h3>
              <input-power typeInput="text" inputId="time" v-model.number="calculationUPSRuntime.result">часов</input-power>
            </div>
          </form>

          <power-calc-recommendation>Рекомендуемые АКБ:</power-calc-recommendation>
        </section>
      </section>
</template>

<script lang="ts">
import Vue from "vue";
import TitleSection from '@/components/sections/TitleSection.vue'
import InputPower from '@/components/UI/InputPower.vue'
import InputCheckbox from '@/components/UI/InputCheckbox.vue'
import HelperButton from '@/components/UI/HelperButton.vue'
import ButtonOrange from '@/components/UI/ButtonOrange.vue'
import PowerCalcRecommendation from '@/components/sections/PowerCalcRecommendation.vue'
import ButtonSwitch from '@/components/UI/InputSwitch.vue'

export default {
    components: {
      InputPower, TitleSection, InputCheckbox,
      HelperButton, ButtonOrange, PowerCalcRecommendation,
      ButtonSwitch
   },
   data() {
    return {
        calculationUPSRuntime: {
            load: '',
            inverterEfficiency: 0.8,
            ratedBatteryVoltage: '',
            batteryCapacity: '',
            result: ''
        },
         stateSwitch: {
            switchBatteryCapacity: false,
            switchBackupTime: false,
        },
    }
   },
   methods: {
    getResultCalculationUPS():void {
      let watch:Number;
        if ((this as any).calculationUPSRuntime.load === '') {
          alert('Введите нагрузку')
        } else if ((this as any).calculationUPSRuntime.ratedBatteryVoltage === '') {
          alert('Введите Номинальное напряжение АКБ')
        } else if ((this as any).calculationUPSRuntime.ratedBatteryVoltage === '') {
          alert('Введите емкость АКБ')
        } else {
        if ( + (this as any).calculationUPSRuntime.load > 1 && (this as any).calculationUPSRuntime.load !== ''){
          watch = +((((this as any).calculationUPSRuntime.ratedBatteryVoltage * (this as any).calculationUPSRuntime.ratedBatteryVoltage ) / (this as any).calculationUPSRuntime.load) * ((this as any).calculationUPSRuntime.inverterEfficiency/100)).toFixed(2);
        } else {
          watch = +((((this as any).calculationUPSRuntime.ratedBatteryVoltage * (this as any).calculationUPSRuntime.ratedBatteryVoltage ) / (this as any).calculationUPSRuntime.load) * ((this as any).calculationUPSRuntime.inverterEfficiency)).toFixed(2);
        }
        
        if(watch <= 1) {
          (this as any).calculationUPSRuntime.result = `${Math.ceil(+watch*60)}min`;
        } else if (watch > 1) {
          var integer:Number;
          var fraction:Number;
          var sum:Number;
          integer = Math.floor(Number(watch));
          fraction = + (+ watch - + integer).toFixed(2);
          sum = (+ fraction * 60);
          (this as any).calculationUPSRuntime.result = `${integer}h ${sum}min`;
        }
    }
    },
   }

}
</script>