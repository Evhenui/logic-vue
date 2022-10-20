<template>
     <button class="button-catalog">
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.83813 2.9162H1V9.75432H7.83813V2.9162Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5838 13.6618H11.7456V20.5H18.5838V13.6618Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.83813 13.6618H1V20.5H7.83813V13.6618Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.1646 1.49998L10.3293 6.33527L15.1646 11.1706L19.9999 6.33527L15.1646 1.49998Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="button-catalog__name">
          <slot>В каталог</slot>
        </span>
      </button>
</template>

<script>

export default {
    name: 'button-catalog'
}
</script>

<style lang="scss">
  .button-catalog {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 14.5px 0;
    max-width: 230px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 36px;
    margin: 0 auto;
    @include flex-container($direction: row, $spacing: center, $alignment: center);
    column-gap: 16px;
      &__name {
        @include font($font-size: 20, $line-height: 28, $weight: 400);
        letter-spacing: 0.02em;
        color: #2B2B2B;
      }
  } 
</style>