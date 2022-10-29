<template>
   <button @click.prevent="resultData" class="button-orange">
    <slot>Рассчитать</slot>
   </button>
</template>

<script lang="ts">
export default {
    name: 'button-orange',
    methods: {
      resultData():void {
       (this as any).$emit('getResult')
      }
    }
}
</script>

<style lang='scss'>
  .button-orange {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      transition: all .1s ease-in-out;
      max-width: 150px;
      width: 100%;
      @include font($font-size: 18, $line-height: 24, $weight: 400);
      color:#FFFFFF;
      background: var(--color-primary-base);
      padding: 8px 0;
      text-align: center;
      border-radius: 6px;
      &:hover {
        background: #FF5B00;
      }
      &:active {
        background: #AC450B;
      }
      &:disabled {
        background: #8A8A8A;
      }
      @media (max-width: 960px) {
        max-width: 343px;
        width: 100%;
      }
  }
</style>