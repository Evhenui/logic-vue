<template>
  <div class="calc">
    <div class="calc__wrapper">
      <power-calc-header>
        С помощью данного калькулятора можно ориентировочно рассчитать необходимую ёмкость аккумулятора для источника бесперебойного питания.
      </power-calc-header>
      <power-calc-main/>
      <power-calc-footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PowerCalcFooter from "./PowerCalcFooter.vue";
import PowerCalcHeader from "./PowerCalcHeader.vue";
import PowerCalcMain from "./PowerCalcMain.vue";

export default Vue.extend({
  components: {
    PowerCalcFooter,
    PowerCalcHeader,
    PowerCalcMain,
  },

});
</script>

<style lang="scss">
@import "./../assets/scss/style.scss";

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
