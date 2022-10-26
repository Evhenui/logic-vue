<template>
    <div class="header-calc">
        <p class="header-calc__main-description">
            <slot>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt saepe eos enim aperiam doloremque necessitatibus voluptas, accusantium ea, odio non modi est facere culpa fugiat neque iure quis voluptatem.
            </slot>
        </p>        
    </div>
</template>

<script>
export default {
    name: 'header-calc-power'
}
</script>

<style lang="scss">
.header-calc {
    padding: 32px 24px;
    background: var(--color-blue-white);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    margin-bottom: 16px;
    &__main-description {
        @include font($font-size: 20, $line-height: 24, $weight: 600);
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--color-ink-base);
        max-width: 820px;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 960px) {
            @include font($font-size: 16, $line-height: 22, $weight: 400);
        }
    }
}
</style>