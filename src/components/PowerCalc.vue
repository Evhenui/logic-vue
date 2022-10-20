<template>
  <div class="calc">
      <div class="calc__wrapper">        
        <power-calc-header>С помощью данного калькулятора можно ориентировочно рассчитать необходимую ёмкость аккумулятора для источника бесперебойного питания.</power-calc-header>

        <section class="calc__source-power">
          
          <section class="calc__source-header">
            <h3 class="calc__source-power-header-title">Расчет источника бесперебойного питания (расчет ИБП)</h3>
          </section>

          <section class="calc__source-power-body">
            <form class="calc__source-form" action="">
              <section class="calc__source-power-select">
                <div class="calc__checkbox">
                  <input-checkbox inputType='line-interactive'>ИБП линейно интерактивные</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc__checkbox">
                  <input-checkbox inputType='regular-sinusoid'>ИБП с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc__checkbox">
                  <input-checkbox inputType='smart'>Smart ИБП Online</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc__checkbox">
                  <input-checkbox inputType='hybrid'>ИБП гибридный MPPT с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc__checkbox">
                  <input-checkbox inputType='mppt'>ИБП MPPT с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc__checkbox">
                  <input-checkbox inputType='all'>Выбрать все</input-checkbox>
                </div>
              </section>
              
              <section class="calc__source-power-inputs-enter">

                <div>
                  <h3 class="calc__subtitle source-power">Суммарная мощность приборов, подключаемые к ИБП:</h3>
                  <input-power inputId='w'>W</input-power>
                </div>

                <div class="calc__need-power">
                  <h3 class="calc__subtitle source-power">	Необходимая мощность ИБП:</h3>
                  <div class="calc__data-input-general-wrapper">
                    <input-power inputId='w'>W</input-power>
                    <input-power inputId='va'>VA</input-power>
                  </div>
                </div>

                <button-orange/>

              </section>
            </form>
            <section class="calc__recommended">
              <h3 class="calc__subtitle orande-title">Рекомендуемые ИБП:</h3>
              <section class="calc__recommended-items">

              </section>
              <button-catalog/>
            </section>

          </section>

        </section>

        <section class="calc__source-power">

          <section class="calc__source-header">
            <h3 class="calc__source-power-header-title">Расчет емкости аккумуляторной батареи для источника бесперебойного питания</h3>
          </section>

          <section class="calc__source-power-body">

            <form class="calc__form" action="">

              <section class="calc__inputs-wrapper">
                <section class="calc__inputs-enter">
                  <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Мощность ИБП:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                  </div>
                  
                <input-power inputId='w'>W</input-power>
                </div>
                
                <div class="calc__data-input-section">
                  <div class="calc__input-help switch">
                    <h3 class="calc__subtitle">	КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                    <button-switch/>
                  </div>
                  
                  <input-power inputId='w'>W</input-power>
                </div>
  
                <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Время работы:</h3>
                  </div>
                  
                  <input-power inputId='time'>часов</input-power>
                </div>

               <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Номинальное напряжение АКБ:</h3>
                  </div>
                  
                  <input-power inputId='v'>V</input-power>
                </div>
                </section>

                <button-orange/>

              </section>                  

              <div class="calc__data-input-section">
                <h3 class="calc__subtitle source-power">Минимальная ёмкость АКБ:</h3>              
                 <input-power inputId='ah'>Ah</input-power>
              </div>

            </form>  
            
            <section class="calc__recommended">
              <h3 class="calc__subtitle orande-title">Рекомендуемые ИБП:</h3>
              <section class="calc__recommended-items">

              </section>
              <button-catalog/>
            </section>
            
          </section>
        </section>

        <section class="calc__source-power">

          <section class="calc__source-header">
            <h3 class="calc__source-power-header-title">Расчет емкости аккумуляторной батареи для источника бесперебойного питания</h3>
          </section>

          <section class="calc__source-power-body">

            <form class="calc__form" action="">

              <section class="calc__inputs-wrapper">
                <section class="calc__inputs-enter">
                  <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Нагрузка, W:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                  </div>
                  
                  <input-power inputId='w'>W</input-power>
                </div>
                
                <div class="calc__data-input-section">
                  <div class="calc__input-help switch">
                    <h3 class="calc__subtitle">КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                    <button-switch/>
                  </div>
                  
                  <input-power inputId='persent'>%</input-power>
                </div>
  
                <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Номинальное напряжение АКБ:</h3>
                  </div>
                  
               <input-power inputId='v'>V</input-power>
                </div>

               <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Ёмкость АКБ:</h3>
                  </div>
                  
                  <input-power inputId='ah'>Ah</input-power>
                </div>
                </section>

                <button-orange/>

              </section>                  

              <div class="calc__data-input-section">
                <h3 class="calc__subtitle source-power">Время работы ИБП:</h3>              
                <input-power inputId='time'>часов</input-power>
              </div>

            </form>  
            
            <section class="calc__recommended">
              <h3 class="calc__subtitle orande-title">Рекомендуемые ИБП:</h3>
              <section class="calc__recommended-items">

              </section>
             <button-catalog/>
            </section>
            
          </section>
        </section>

        <power-calc-footer/>

        
      </div>  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PowerCalcFooter from './PowerCalcFooter.vue';
import PowerCalcHeader from './PowerCalcHeader.vue'
import PowerCalcBody from './PowerCalcBody.vue'
export default Vue.extend({
  components: {PowerCalcFooter, PowerCalcHeader, PowerCalcBody },
  data () {
    return {
      activeButtonMore: false,
      valera: document.querySelector('[data-test]')
    }
  },
  methods: {

  }
 
})
</script>

<style lang="scss">
@import './../assets/scss/style.scss';

.calc {
   &__wrapper {
    @include width-pad-main();
    margin: 0 auto;
    padding: 64px 0 136px 0;
    @media (max-width: 1480px) {
      padding: 64px 32px 136px 32px;
    }
    @media (max-width: 960px) {
      padding: 48px 16px 136px 16px;
    }
  }

  &__inputs-wrapper {
    @include flex-container($direction: column, $spacing: flex-start, $alignment: null);
    row-gap: 56px;
    margin-bottom: 56px;
    @media (max-width: 960px) {
      margin-bottom: 48px;
    }
  }

  &__source-power {
    border-bottom: 1px solid #8A8A8A;
    padding-top: 48px;
  }

  &__source-power:nth-last-child(-n+2) {
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
     color: #2B2B2B;
     margin-bottom: 48px;
     @media (max-width: 960px) {
      @include font($font-size: 16, $line-height: 19, $weight: 700);
     }
  }

  &__source-form {
    @include flex-container($direction: row, $spacing: space-between, $alignment: null);
    margin-bottom: 56px;
    @media (max-width: 960px) {
      flex-direction: column;
      row-gap: 49px;
      margin-bottom: 48px;
    }
  }

  &__checkbox {
    @include flex-container($direction: row, $spacing: null, $alignment: center);
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
    @include flex-container($direction: column, $spacing: null, $alignment: null);
    row-gap: 24px;
  }

  &__source-power-inputs-enter {
    @include flex-container($direction: column, $spacing: null, $alignment: left);
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
    color: #2B2B2B;
    &.orande-title {
      @include font($font-size: 20, $line-height: 30, $weight: 600);
      text-transform: uppercase;
      color: #F36C21;
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
     @include flex-container($direction: row, $spacing: null, $alignment: center);
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
     @include flex-container($direction: row, $spacing: null, $alignment: baseline);
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
