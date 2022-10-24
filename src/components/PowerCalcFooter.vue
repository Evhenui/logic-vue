<template>
  <section class="calc-about-selected">
    <section class="calc-about-selected__header">
        <h1 class="calc-about-selected__item">Описание UPS 500VA + литиевая (LiFePO4) батарея 750W</h1>
        <h1 class="calc-about-selected__title">Комплект видеонаблюдения для квартиры на 2 камеры</h1>
        <p class="calc-about-selected__description head">Готовые комплекты видеонаблюдения на 2 камеры в одной коробке. Комплекты видеонаблюдения GreenVision бюджетное решение для квартиры, небольшого офиса или дачи.</p>
    <button 
        @click="active = !active"
        :class="active ? 'active' : ''" 
        class="calc-about-selected__button-more"   
    >
        <span class="calc-about-selected__button-title">Подробнее</span>
        <div class="calc-about-selected__button-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="calc-about-selected__arrow-state" d="M6 9L12 15L18 9" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </button>
    </section>
        <section class="calc-about-selected__body"
        :class="active ? 'active' : ''" 
        :style="active ? height='hightFooter': height=''"
        >
        <section class="calc-about-selected__section">
        <h3 class="calc-about-selected__offer under-list">Купить комплект видеонаблюдения на 2 камеры в Украине: почему это выгодно?</h3>
            <ul class="calc-about-selected__list">
            <li class="calc-about-selected__list-item"> 
                <span class="calc-about-selected__list-num">1.</span> 
                <span class="calc-about-selected__list-text">Стоимость комплекта на 15-20% (зависит от модели) ниже общих затрат, если вы решите приобретать оборудование для системы видеонаблюдения по отдельности.</span>
            </li>
            <li class="calc-about-selected__list-item"> 
                <span class="calc-about-selected__list-num">2.</span> 
                <span class="calc-about-selected__list-text">100% совместимость всех элементов видеонаблюдения, входящих в комплект, что существенно экономит вам время на поиски необходимого оборудования.</span>
            </li>
            <li class="calc-about-selected__list-item"> 
                <span class="calc-about-selected__list-num">3.</span> 
                <span class="calc-about-selected__list-text">Возможность установить систему видеонаблюдения своими руками. В комплектацию входят все материалы и приспособления, необходимые для подключения и монтажа.</span>
            </li>
            <li class="calc-about-selected__list-item"> 
                <span class="calc-about-selected__list-num">4.</span> 
                <span class="calc-about-selected__list-text">Простые и интуитивные настройки системы видеонаблюдения, встроенные в меню регистратора. Интерфейс доступен на нескольких языках.</span>
            </li>
            <li class="calc-about-selected__list-item"> 
                <span class="calc-about-selected__list-num">5.</span> 
                <span class="calc-about-selected__list-text">Бесплатное программное обеспечение и приложения для удаленного доступа. ПО и обновления к нему можно скачать на официальном сайте компании GreenVision</span>
            </li>
            </ul>
        </section>
        
        <section class="calc-about-selected__section necessary">
            <h1 class="calc-about-selected__title">Для чего нужны системы видеонаблюдения на 2 камеры?</h1>
            <p class="calc-about-selected__description">Две камеры видеонаблюдения для квартиры &ndash; это много или мало? Все зависит от объектов, которые вы планируете контролировать.&nbsp;</p>
            <p class="calc-about-selected__description">Установите одну камеру видеонаблюдения возле входной двери, обеспечив, таким образом, полный контроль безопасности входа в квартиру (дом, офис, небольшой магазин и т.д.)</p>
            <h3 class="calc-about-selected__offer">Другую камеру видеонаблюдения можно установить:</h3>
            <ul class="calc-about-selected__list">
            <li class="calc-about-selected__list-item bulleted-list"> 
                <span class="calc-about-selected__item-icon"></span> 
                <span class="calc-about-selected__list-text">в помещении, где хранятся материальные ценности;</span>
            </li>
            <li class="calc-about-selected__list-item bulleted-list"> 
                <span class="calc-about-selected__item-icon"></span> 
                <span class="calc-about-selected__list-text">в детской, если есть необходимость контроля работы няни</span>
            </li>
            <li class="calc-about-selected__list-item bulleted-list"> 
                <span class="calc-about-selected__item-icon"></span> 
                <span class="calc-about-selected__list-text">в коридоре, если нужно контролировать перемещение по квартире</span>
            </li>
            <li class="calc-about-selected__list-item bulleted-list"> 
                <span class="calc-about-selected__item-icon"></span> 
                <span class="calc-about-selected__list-text">или в любом другом месте, которое вы хотите держать под контролем</span>
            </li>
            </ul>
        </section>

        <section class="calc-about-selected__section functional">
            <h1 class="calc-about-selected__title">Функциональные возможности систем видеонаблюдения: видеорегистратор + 2 камеры</h1>
            <p class="calc-about-selected__description">Высокое качество изображения. (IP, гибридные,Wi-Fi) камеры, которые входят в комплект видеонаблюдения, имеют разрешение изображения (2,3,5)МП. Вы сможете просматривать видео и сохранять изображение с высокой степенью детализации.</p>          
        </section>

        </section>
  </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            active: false,
            hightFooter: 0
        }
    },
}
</script>

<style lang="scss">
    .calc-about-selected {
        background: #FFFFFF;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 32px;

        &.active &__button-more{
            display: none;
        }

        &__item {
            @include font($font-size: 20, $line-height: 24, $weight: 600);
            color: #F36C21;
            letter-spacing: 0.01em;
            margin-bottom: 20px;
            @media (max-width: 960px) {
            @include font($font-size: 18, $line-height: 22, $weight: 500);
            margin-bottom: 8px;
            }
        }

        &.active &__header {
            margin-bottom: 24px;
        }

        &__title {     
            @include font($font-size: 26, $line-height: 31, $weight: 700);
            color: #2B2B2B;
            letter-spacing: 0.01em;
            margin-bottom: 24px;
            @media (max-width: 960px) {
                @include font($font-size: 16, $line-height: 19, $weight: 700);
                color: #1F1F1F;
            }
        }

        &__button-more {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            display: none;
            @media (max-width: 960px) {
            display: flex;
            column-gap: 16px;
            }
            &.active {
                display: none;
            }
        }

        &__button-more-title {
            @include font($font-size: 16, $line-height: 22, $weight: 400);
            letter-spacing: 0.02em;
            color: #F36C21;
        }

        &__button-arrow {
            font-size: 0;
        }

        &__section {
            margin-bottom: 68px;
            &.necessary {
                margin-bottom: 48px;
            }
            &.functional {
                margin: 0;
            }
        }

        &__description {
            @include font($font-size: 16, $line-height: 19, $weight: 400);
            color: #2B2B2B;
            letter-spacing: 0.02em;
            margin-bottom: 16px;
            @media (max-width: 960px) {
                @include font($font-size: 16, $line-height: 22, $weight: 400);
                color: #1F1F1F;
            }
            &.head {
                margin-bottom: 24px;
                @media (max-width: 960px) {
                margin-bottom: 8px;
                }
            }
        }

        &__body {
            transition: all .2s ease-in-out;
            @media (max-width: 960px) {
                height: 0;
                overflow: hidden;
                &.active {
                    height: 910px;
                }
            }
        }

        &__offer {
            @include font($font-size: 20, $line-height: 24, $weight: 600);
            color: #2B2B2B;
            letter-spacing: 0.01em;
            margin-bottom: 16px;
            &.under-list {
                margin-bottom: 40px;
            }
        }

        &__list {
            @include flex-container($direction: column, $spacing: null, $alignment: flex-start);
            row-gap: 16px;
        }

        &__list-item {
            display: flex;
            column-gap: 8px;
            &.bulleted-list {
            align-items: center;
            }
        }

        &__list-text, &__list-num {
            @include font($font-size: 16, $line-height: 19, $weight: 400);
            color: #2B2B2B;
            letter-spacing: 0.02em;
        }

        &__list-num {
            line-height: 22px;
            color: #F36C21;
        }

        &__item-icon {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #F36C21;
            border-radius: 50%;
        }
    }
</style>