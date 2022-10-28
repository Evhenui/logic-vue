<template>
    <section class="source-header">
        <h3 class="source-header__title">
            <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit.</slot>
        </h3>
    </section>
</template>

<script lang="ts">
export default {
    name: 'title-section'
}
</script>

<style lang="scss">
.source-header {
    margin-bottom: 48px;
    &__title {
        text-align: center;
        @include font($font-size: 20, $line-height: 24, $weight: 600);
        text-transform: uppercase;
        color: #2b2b2b;
        @media (max-width: 960px) {
            @include font($font-size: 16, $line-height: 19, $weight: 700);
        }
    }
}
</style>