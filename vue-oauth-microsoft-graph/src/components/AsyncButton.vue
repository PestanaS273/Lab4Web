<template>
    <BaseButton
      :disabled="isPending"
      :color="color"
      @click="handleClick"
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
        isPending: false,
        delay: 2000
      }
    },
    methods: {
        async handleClick () {
            if (this.isPending) return; 

            this.isPending = true;

            await new Promise(resolve => setTimeout(resolve, this.delay));

            this.isPending = false;

            this.delay += 1000; 
            this.$emit('click');
        }
    }
  }
  </script>
  