<template>
    <div class="calc-input">
        <div class="calc-input__wrapper">
            <input class="calc-input__data-input" 
                type="number" 
                :id="inputId"
                :disabled="isD"
                :value="value" 
                @input="updateName"
            >
            <span class="calc-input__units">
                <slot>Lorem</slot>
            </span>
            <div class="calc-input__input-error">
                <span class="calc-input__error-text">Ошибка: данные некорректны</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'input-power',
    props: {
        inputId: String,
        isD: {
            type: Boolean,
            default: false
        },
        value:[Number, String]
    },
    methods: {
        updateName(e) {
      this.$emit("input", e.target.value);
    }
    }
    
}
</script>

<style lang="scss">
    .calc-input {
        max-width: 327px;
        width: 100%;
        @media (max-width: 960px) {
            max-width: 343px;
        }
        &__wrapper {
            position: relative;
        }

        &__data-input {
            @include font($font-size: 16, $line-height: 16, $weight: 400);
            color: #2B2B2B;
            background: #FFFFFF;
            border: 1px solid #BDBDBD;
            border-radius: 8px;
            width: 100%;
            padding: 16px;
            height: 48px;
            transition: all .1s ease-in-out;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }
            &:focus {
            border-color: #8A8A8A;
            }
            &:disabled {
            border-color: #E9E9E9;
            color: #B4B6B8;
            }
        }

        &__input-error {
            transition: all .1s ease-in-out;
            position: absolute;
            bottom: -21px;
            left: 0;
            padding-top: 8px;
            opacity: 0;
        }

        &__wrapper.active &__input-error {
            opacity: 1;
        }

        &__wrapper.active &__data-input {
            border-color: #EB1717;
        }

        &__wrapper.active &__data-input-units {
            border-color: #EB1717;
        }

        &__error {
            @include font($font-size: 12, $line-height: 16, $weight: 400);
            color: #EB1717;
        }

        &__units {
            transition: all .1s ease-in-out;
            position: absolute;
            top: 0;
            right: 0;
            @include flex-container($direction: row, $spacing: center, $alignment: center);
            width: 87px;
            height: 100%;
            background: #F3F3F3;
            border: 1px solid #BDBDBD;
            border-radius: 8px;
            @include font($font-size: 16, $line-height: 16, $weight: 400);
            color: #2B2B2B;
            &.focus {
                border-color: #8A8A8A;
            }
            &.disabled {
                border-color: #F3F3F3;
                color: #8A8A8A;
            }
        }
    }
</style>