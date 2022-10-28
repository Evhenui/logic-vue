<template>
    <section class="calc-enter-section">
        <form class="calc-enter-section__form" action="">
            <section class="calc-enter-section__source-power-select">
                <div class="calc-enter-section__checkbox">
                <input-checkbox>
                ИБП линейно интерактивные</input-checkbox
                >
                <helper-button
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
                </div>

                <div class="calc-enter-section__checkbox">
                <input-checkbox
                    >ИБП с правильной синусоидой</input-checkbox
                >
                <helper-button
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
                </div>

                <div class="calc-enter-section__checkbox">
                <input-checkbox
                    >Smart ИБП Online</input-checkbox
                >
                <helper-button
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
                </div>

                <div class="calc-enter-section__checkbox">
                <input-checkbox 
                    >ИБП гибридный MPPT с правильной синусоидой</input-checkbox
                >
                <helper-button
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
                </div>

                <div class="calc-enter-section__checkbox">
                <input-checkbox
                    >ИБП MPPT с правильной синусоидой</input-checkbox
                >
                <helper-button
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </helper-button>
                </div>

                <div class="calc-enter-section__checkbox" >
                <input-checkbox>Выбрать все</input-checkbox>
                <input-checkbox > Снять выделение</input-checkbox>
                </div>
            </section>

            <section class="calc-enter-section__source-power-inputs-enter">
                <div>
                <h3 class="calc-enter-section__subtitle source-power">Суммарная мощность приборов, подключаемые к ИБП:</h3>
                <input-power>W</input-power>
                </div>

                <div class="calc-enter-section__need-power">
                <h3 class="calc-enter-section__subtitle source-power">Необходимая мощность ИБП:</h3>
                <div class="calc-enter-section__data-input-general-wrapper">
                    <input-power>W</input-power>
                    <input-power>VA</input-power>
                </div>
                </div>

                <button-orange />
            </section>
        </form>
    </section>
</template>

<script lang="ts">

import InputPower from '@/components/UI/InputPower.vue'
import InputCheckbox from '@/components/UI/InputCheckbox.vue'
import HelperButton from '@/components/UI/HelperButton.vue'
import ButtonOrange from '@/components/UI/ButtonOrange.vue'

export default {
    components: {
        InputPower, InputCheckbox, HelperButton, ButtonOrange
    }
}
</script>

<style lang="scss">
.calc-enter-section {
    padding-bottom: 48px;
		&__form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 56px;
		}

		&__source-power-select {
            display: flex;
            flex-direction: column;
            row-gap: 24px;
		}

		&__checkbox {
            display: flex;
            flex-direction: row;
            align-items: center;
            -moz-column-gap: 16px;
            column-gap: 16px;
		}

		&__source-power-inputs-enter {
            display: flex;
            flex-direction: column;
            align-items: left;
            row-gap: 56px;
            max-width: 678px;
            width: 100%;
		}

		&__subtitle {
            margin-bottom: 24px;
            letter-spacing: 0.02em;
            font-size: 20px;
            line-height: 28px;
            font-weight: 400;
            color: #2b2b2b;
		}

		&__need-power {
		}

		&__data-input-general-wrapper {
            display: flex;
            flex-direction: row;
            align-items: left;
            gap: 24px;
            flex-wrap: wrap;
		}
}

</style>