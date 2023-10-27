<template>
    <button :class="['button', `button-${color}`, buttonClasses] " @click="onClick">

      <!-- The slot can be used to pass the button label from the parent -->
      <slot></slot> 
    </button>
  </template>
  
  <script>
  export default {
    name: 'BaseButton',
    props: {
      color: {
        type: String,
        default: 'primary',
        validator: function (value) {
          // The value must match one of these strings
          return ['primary', 'warn', 'danger'].includes(value)
        }
      }
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },

  }
  </script>
  
  <style scoped>
  .button {
    /* CSS properties common to all buttons */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  
  .button-primary {
    /* CSS properties specific to the primary color */
    background-color: #42b983;
  }
  
  .button-warn {
    /* CSS properties specific to the warn color */
    background-color: #f0ad4e;
  }
  
  .button-danger {
    /* CSS properties specific to the danger color */
    background-color: #d9534f;
  }
  </style>
  
