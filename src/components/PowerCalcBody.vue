<template>
    <section class="calc-body">
        <section class="calc-body__source-power">
          
          <section class="calc-body__source-header">
            <h3 class="calc-body__source-power-header-title">Расчет источника бесперебойного питания (расчет ИБП)</h3>
          </section>

          <section class="calc-body__source-power-body">
            <form class="calc-body__source-form" action="">
              <section class="calc-body__source-power-select">
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='line-interactive'>ИБП линейно интерактивные</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='regular-sinusoid'>ИБП с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='smart'>Smart ИБП Online</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='hybrid'>ИБП гибридный MPPT с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='mppt'>ИБП MPPT с правильной синусоидой</input-checkbox>
                  <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </helper-button>
                </div>
    
                <div class="calc-body__checkbox">
                  <input-checkbox inputType='all'>Выбрать все</input-checkbox>
                </div>
              </section>
              
              <section class="calc-body__source-power-inputs-enter">

                <div>
                  <h3 class="calc-body__subtitle source-power">Суммарная мощность приборов, подключаемые к ИБП:</h3>
                  <input-power inputId='w'>W</input-power>
                </div>

                <div class="calc-body__need-power">
                  <h3 class="calc-body__subtitle source-power">	Необходимая мощность ИБП:</h3>
                  <div class="calc-body__data-input-general-wrapper">
                    <input-power inputId='w'>W</input-power>
                    <input-power inputId='va'>VA</input-power>
                  </div>
                </div>

                <button-orange/>

              </section>
            </form>
            <section class="calc-body__recommended">
              <h3 class="calc-body__subtitle orande-title">Рекомендуемые ИБП:</h3>
              <section class="calc-body__recommended-items">

              </section>
              <button-catalog/>
            </section>

          </section>

        </section>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
 
})
</script>

<style lang="scss">
    .calc-power {
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