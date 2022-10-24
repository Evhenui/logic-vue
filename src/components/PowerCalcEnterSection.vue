<template>
  <section class="calc__source-power">
        <section class="calc__source-header">
          <h3 class="calc__source-power-header-title">
            Расчет емкости аккумуляторной батареи для источника бесперебойного
            питания
          </h3>
        </section>

        <section class="calc__source-power-body">
          <form class="calc__form" action="">
            <section class="calc__inputs-wrapper">
              <section class="calc__inputs-enter">
                <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Мощность ИБП:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                  </div>

                  <input-power inputId="w">W</input-power>
                </div>

                <div class="calc__data-input-section">
                  <div class="calc__input-help switch">
                    <h3 class="calc__subtitle">КПД инвертора:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                    <button-switch />
                  </div>

                  <input-power inputId="w">W</input-power>
                </div>

                <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Время работы:</h3>
                  </div>

                  <input-power inputId="time">часов</input-power>
                </div>

                <div class="calc__data-input-section">
                  <div class="calc__input-help">
                    <h3 class="calc__subtitle">Номинальное напряжение АКБ:</h3>
                  </div>

                  <input-power inputId="v">V</input-power>
                </div>
              </section>

              <button-orange />
            </section>

            <div class="calc__data-input-section">
              <h3 class="calc__subtitle source-power">
                Минимальная ёмкость АКБ:
              </h3>
              <input-power inputId="ah">Ah</input-power>
            </div>
          </form>

          <power-calc-recommendation
            >Рекомендуемые ИБП:</power-calc-recommendation
          >
        </section>
      </section>
</template>

<script>
export default {
    props: {
        titlePage: String,
        
    }
}
</script>

<style lang="scss">

</style>