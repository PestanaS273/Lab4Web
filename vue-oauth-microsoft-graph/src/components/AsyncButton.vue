<template>
    <BaseButton
      :disabled="isPending"
      v-bind="$attrs"
      :color="color"
      @click.stop.prevent="handleClick"
    >
      <font-awesome-icon
        v-if="isPending"
        :icon="['fas', 'circle-notch']"
        pulse
      />
      <slot/>
    </BaseButton>
</template>
  
  <script>
  import BaseButton from './BaseButton.vue'
  
  export default {
    name: 'AsyncButton',
    components: { 
      BaseButton,
    },
  
    props: {
      color: {
        type: String,
        default: 'primary'
      }
    },
  
    data () {
      return {
        isPending: false
      }
    },
    onClick: {
      type: Function,
      required: true
    },
  
    methods: {
      handleClick() {
      if (typeof this.onClick === 'function') {
        const originalOnClick = this.onClick;
        this.isPending = true;
        originalOnClick().finally(() => {
          this.isPending = false;
        });
      }
    }
  }}
  </script>
  