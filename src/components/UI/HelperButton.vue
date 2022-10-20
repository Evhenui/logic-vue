<template>
<div class="button-help">
    <img src="@/assets/icons/help-link.png" alt="help" width="16" height="16">
    <div class="button-help__main-wrapper">
        <div class="button-help__arrow">
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-4.37114e-07 9L15 0.339744L15 17.6603L-4.37114e-07 9Z" fill="#F3F3F3"/>
            </svg>
        </div>
        <div class="button-help__description-wrapper">
            <p class="button-help__description">
                <slot>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </slot>   
            </p>    
        </div>                     
    </div>
</div>
</template>

<script>
export default {
    name: 'helper-button'
}
</script>

<style lang="scss">
.button-help {
   position: relative;
   cursor: pointer;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   flex: 0 0 auto;
    &:hover &__main-wrapper {
        opacity: 1;
        z-index: 1;
    }
    &__main-wrapper {
     top: -20px;
     left: 23px;
     opacity: 0;
     z-index: -1;
     position: absolute;
     transition: all .2s ease-in-out; 
     @include flex-container($direction: row, $spacing: null, $alignment: center);
     @media (max-width: 960px) {
      top: -113px;
      left: -154px;
     }
    }
    &__arrow {
        @media (max-width: 960px) {
        display: none;
        }
    }
    &__description-wrapper {
     background: #F3F3F3;
     border-radius: 8px;
     padding: 8px;
     width: 267px;
     @media (max-width: 960px) {
      width: 170px;
     }
  }
  &__description {
    @include font($font-size: 12, $line-height: 16, $weight: 400);
    color: #2B2B2B;
  }
}
</style>