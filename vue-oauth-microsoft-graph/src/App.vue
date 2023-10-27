<!-- App.vue -->
<template>
  <BaseLayout>
    <template v-slot:header>
      
    </template>

    <router-view />
    <div>
    <BaseButton color="primary">Primary Button</BaseButton>
    <BaseButton color="warn">Warn Button</BaseButton>
    <BaseButton color="danger">Danger Button</BaseButton>
  </div>

    <template v-slot:footer>

    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'


export default {
  components: {
    BaseLayout,
    BaseButton,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
