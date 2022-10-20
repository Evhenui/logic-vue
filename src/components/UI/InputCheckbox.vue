<template>
    <div class="checkbox-calc">
        <input class="checkbox-calc__custom-checkbox" 
            type="checkbox" 
            :id='inputType' 
            :name='inputType'
            value="ok"
        >
        <label class="checkbox-calc__label" 
            :for='inputType'
        >
        <slot>
            lorem
        </slot>
        </label>
    </div>
</template>

<script>
export default {
    name: 'input-checkbox',
    props: {
        inputType: String
    }
}
</script>

<style lang="scss">
.checkbox-calc {
    &__custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &__label {
      @include font($font-size: 16, $line-height: 24, $weight: 400);
      display: inline-flex;
      align-items: center;
      user-select: none;
      position: relative;
      &::before {
        transition: all .1s ease-in-out;
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid $color-border-grey-light;
        border-radius: 50%;
        margin-right: 16px;
      }
      &::after {
        transition: all .1s ease-in-out;
        content: '';
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #FFFFFF;
      }
    }
    &__custom-checkbox:not(:disabled):not(:checked) + &__label:hover::before {
      border-color: $color-main-dark;
    }

    &__custom-checkbox:checked + &__label::before {
      border-color:$color-main;
      background-color: $color-main;
    }

    &__custom-checkbox:disabled + &__label::before {
      background-color: #e9ecef;
    }
}
</style>