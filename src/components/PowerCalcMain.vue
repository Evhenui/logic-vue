<template>
  <section class="calc-body">
     <section class="calc-body__source-power">
      <title-section>Расчет источника бесперебойного питания (расчет ИБП)</title-section>

        <section class="calc-body__source-power-body">
          <form class="calc-body__source-form" action="">
            <section class="calc-body__source-power-select">
              <div class="calc-body__checkbox">
                <input-checkbox inputType="line-interactive"
                v-model="checkboxes.interactiveUPSLine">
                ИБП линейно интерактивные</input-checkbox
                >
                <helper-button
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
              </div>

              <div class="calc-body__checkbox">
                <input-checkbox inputType="regular-sinusoid" v-model="checkboxes.correctSineUPS"
                  >ИБП с правильной синусоидой</input-checkbox
                >
                <helper-button
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
              </div>

              <div class="calc-body__checkbox">
                <input-checkbox inputType="smart" v-model="checkboxes.smartUPS"
                  >Smart ИБП Online</input-checkbox
                >
                <helper-button
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
              </div>

              <div class="calc-body__checkbox">
                <input-checkbox inputType="hybrid" v-model="checkboxes.gibridUPS"
                  >ИБП гибридный MPPT с правильной синусоидой</input-checkbox
                >
                <helper-button
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
              </div>

              <div class="calc-body__checkbox">
                <input-checkbox inputType="mppt" v-model="checkboxes.mpptUPS"
                  >ИБП MPPT с правильной синусоидой</input-checkbox
                >
                <helper-button
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
              </div>

              <div class="calc-body__checkbox" >
                <input-checkbox v-if="!checkboxes.selectAll" inputType="all" v-model="checkboxes.selectAll" @input="selectAllCheckboxes">Выбрать все</input-checkbox>
                <input-checkbox v-else inputType="all" v-model="checkboxes.selectAll" @input="selectAllCheckboxes"> Снять выделение</input-checkbox>
              </div>
            </section>

            <section class="calc-body__source-power-inputs-enter">
              <div>
                <h3 class="calc-body__subtitle source-power">Суммарная мощность приборов, подключаемые к ИБП:</h3>
                <input-power typeInput="number" inputId="w" v-model.number="calculationUPS.instrumentPower">W</input-power>
              </div>

              <div class="calc-body__need-power">
                <h3 class="calc-body__subtitle source-power">Необходимая мощность ИБП:</h3>
                <div class="calc-body__data-input-general-wrapper">
                  <input-power typeInput="number" inputId="w" v-model.number="calculationUPS.powerUPSW">W</input-power>
                  <input-power typeInput="number" inputId="va" v-model.number="calculationUPS.powerUPSVA">VA</input-power>
                </div>
              </div>

              <button-orange />
            </section>
          </form>
          <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation>
        </section>
      </section>

      <section class="calc-body__source-power">
        <title-section>Расчет емкости аккумуляторной батареи для источника бесперебойного питания</title-section>

        <section class="calc-body__source-power-body">
          <form class="calc-body__form" action="">
            <section class="calc-body__inputs-wrapper">
              <section class="calc-body__inputs-enter">
                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Мощность ИБП:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                  </div>

                  <input-power typeInput="number" inputId="w" v-model.number="calculationBattery.powerUPS">W</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help switch">
                    <h3 class="calc-body__subtitle">КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                    <button-switch v-model="stateSwitch.switchBatteryCapacity" />
                  </div>

                  <input-power typeInput="number" inputId="w" :isDisable="!stateSwitch.switchBatteryCapacity" v-model.number="calculationBattery.inverterEfficiency">W</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Время работы:</h3>
                  </div>

                  <input-power typeInput="number" inputId="time" v-model.number="calculationBattery.time">часов</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Номинальное напряжение АКБ:</h3>
                  </div>

                  <input-power typeInput="number" inputId="v" v-model.number="calculationBattery.ratedBatteryVoltage">V</input-power>
                </div>
              </section>

              <button-orange @getResult="getResultCalculationBattery" />
            </section>

            <div class="calc-body__data-input-section">
              <h3 class="calc-body__subtitle source-power">
                Минимальная ёмкость АКБ:
              </h3>
              <input-power typeInput="text" inputId="ah" v-model.number="calculationBattery.result">Ah</input-power>
            </div>
          </form>

          <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation>
        </section>
      </section>

      <section class="calc-body__source-power">
        <title-section>Расчет времени автономной работы ИБП</title-section>

        <section class="calc-body__source-power-body">
          <form class="calc-body__form" action="">
            <section class="calc-body__inputs-wrapper">
              <section class="calc-body__inputs-enter">
                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Нагрузка, W:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                  </div>

                  <input-power typeInput="number" inputId="w" v-model.number="calculationUPSRuntime.load">W</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help switch">
                    <h3 class="calc-body__subtitle">КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                    <button-switch v-model="stateSwitch.switchBackupTime" />
                  </div>

                  <input-power typeInput="number" :isDisable="!stateSwitch.switchBackupTime" inputId="persent" v-model.number="calculationUPSRuntime.inverterEfficiency">%</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Номинальное напряжение АКБ:</h3>
                  </div>

                  <input-power typeInput="number" inputId="v" v-model.number="calculationUPSRuntime.ratedBatteryVoltage">V</input-power>
                </div>

                <div class="calc-body__data-input-section">
                  <div class="calc-body__input-help">
                    <h3 class="calc-body__subtitle">Ёмкость АКБ:</h3>
                  </div>

                  <input-power typeInput="number" inputId="ah" v-model.number="calculationUPSRuntime.batteryCapacity">Ah</input-power>
                </div>
              </section>

              <button-orange @getResult="getResultCalculationUPS" />
            </section>

            <div class="calc-body__data-input-section">
              <h3 class="calc-body__subtitle source-power">Время работы ИБП:</h3>
              <input-power typeInput="text" inputId="time" v-model.number="calculationUPSRuntime.result">часов</input-power>
            </div>
          </form>

          <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation>
        </section>
      </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import PowerCalcRecommendation from './PowerCalcRecommendation.vue'
import TitleSection from '@/components/sections/TitleSection.vue'
import FormSection from '@/components/sections/FormSection.vue'
import FormSectionWithCheckboxes from '@/components/sections/FormSectionWithCheckboxes.vue'
import PopupHelper from '@/components/UI/PopupHelper.vue'

export default Vue.extend({
  components: {
    PowerCalcRecommendation, TitleSection, 
    FormSection, FormSectionWithCheckboxes, 
    PopupHelper
  },

  data() {
    return {
      stateSwitch: {
        switchBatteryCapacity: false,
        switchBackupTime: false,
      },
       checkboxes: {
         interactiveUPSLine: false,
         correctSineUPS: false,
         smartUPS: false,
         gibridUPS: false,
         mpptUPS: false,
         selectAll: false
      },
      calculationUPS: {
        instrumentPower: '',
        powerUPSW: '',
        powerUPSVA: '',
        result: ''
      },
      calculationBattery: {
        powerUPS: '',
        inverterEfficiency: 0.8, 
        time: '',
        ratedBatteryVoltage:'',
        result: ''
      },
      calculationUPSRuntime: {
        load: '',
        inverterEfficiency: 0.8,
        ratedBatteryVoltage: '',
        batteryCapacity: '',
        result: ''
      },
    showModal: false
    }
  },
  
  methods: {
    selectAllCheckboxes():void {
        for (const key in (this as any).checkboxes) {
          if((this as any).checkboxes.selectAll) {
              (this as any).checkboxes[key] = true;
          } else {
            (this as any).checkboxes[key] = false;
          } 
        }
    },
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
    getResultCalculationBattery():void {
      let a:Number;
      let Ah:Number;
      let total:Number;
      if ((this as any).calculationBattery.powerUPS === '') {
        alert('Введите мощность ИБП')
      } else if ((this as any).calculationBattery.time === '') {
        alert('Введите значение Время работы')
      } else if ((this as any).calculationBattery.ratedBatteryVoltage === '') {
        alert('Введите Номинальное напряжение АКБ')
      } else {
        a = (this as any).calculationBattery.powerUPS / (this as any).calculationBattery.ratedBatteryVoltage;
        Ah = + a * (this as any).calculationBattery.time;
        if((this as any).calculationBattery.inverterEfficiency > 1){
          total = + Ah / ((this as any).calculationBattery.inverterEfficiency / 100)
        } else {
          total = + Ah / ((this as any).calculationBattery.inverterEfficiency)
        }
        (this as any).calculationBattery.result = total.toFixed(0);
      }
    }
  },
  
});
</script>

<style lang="scss">
.calc-body {
  &__inputs-wrapper {
    @include flex-container(
      $direction: column,
      $spacing: flex-start,
      $alignment: null
    );
    row-gap: 56px;
    margin-bottom: 56px;
    @media (max-width: 960px) {
      margin-bottom: 48px;
    }
  }

  &__source-power {
    border-bottom: 1px solid #8a8a8a;
    padding-top: 48px;
  }

  &__source-power:nth-last-child(-n + 2) {
    border: none;
    margin-bottom: 96px;
    @media (max-width: 960px) {
      margin-bottom: 56px;
    }
  }

  &__source-power-header-title {
    text-align: center;
    @include font($font-size: 20, $line-height: 24, $weight: 600);
    text-transform: uppercase;
    color: #2b2b2b;
    margin-bottom: 48px;
    @media (max-width: 960px) {
      @include font($font-size: 16, $line-height: 19, $weight: 700);
    }
  }

  &__source-form {
    @include flex-container(
      $direction: row,
      $spacing: space-between,
      $alignment: null
    );
    margin-bottom: 56px;
    @media (max-width: 960px) {
      flex-direction: column;
      row-gap: 49px;
      margin-bottom: 48px;
    }
  }

  &__checkbox {
    @include flex-container(
      $direction: row,
      $spacing: null,
      $alignment: center
    );
    column-gap: 16px;
  }

  &__need-power {
    @media (max-width: 960px) {
      margin-bottom: 16px;
    }
  }

  &__source-power-body {
    padding-bottom: 48px;
  }

  &__source-power-select {
    @include flex-container(
      $direction: column,
      $spacing: null,
      $alignment: null
    );
    row-gap: 24px;
  }

  &__source-power-inputs-enter {
    @include flex-container(
      $direction: column,
      $spacing: null,
      $alignment: left
    );
    row-gap: 56px;
    max-width: 678px;
    width: 100%;
    @media (max-width: 1250px) {
      max-width: 343px;
    }
    @media (max-width: 960px) {
      row-gap: 32px;
    }
  }

  &__data-input-section {
    max-width: 327px;
    width: 100%;
    @media (max-width: 960px) {
      max-width: 343px;
    }
  }

  &__subtitle {
    letter-spacing: 0.02em;
    @include font($font-size: 20, $line-height: 28, $weight: 400);
    color: #2b2b2b;
    &.orande-title {
      @include font($font-size: 20, $line-height: 30, $weight: 600);
      text-transform: uppercase;
      color: $color-main;
      margin-bottom: 24px;
    }
    &.source-power {
      margin-bottom: 24px;
      @media (max-width: 1250px) {
        max-width: 330px;
      }
      @media (max-width: 960px) {
        @include font($font-size: 16, $line-height: 22, $weight: 400);
      }
    }
  }

  &__data-input-general-wrapper {
    @include flex-container($direction: row, $spacing: null, $alignment: left);
    gap: 24px;
    flex-wrap: wrap;
  }

  &__recommended {
    text-align: center;
  }

  &__input-help {
    @include flex-container(
      $direction: row,
      $spacing: null,
      $alignment: center
    );
    column-gap: 16px;
    margin-bottom: 24px;
    &.switch {
      margin-bottom: 22px;
    }
  }

  &__form {
    margin-bottom: 56px;
    @media (max-width: 960px) {
      max-width: 343px;
    }
  }

  &__inputs-enter {
    @include flex-container(
      $direction: row,
      $spacing: null,
      $alignment: baseline
    );
    gap: 24px;
    flex-wrap: wrap;
    max-width: 1380px;
    width: 100%;
    @media (max-width: 960px) {
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>