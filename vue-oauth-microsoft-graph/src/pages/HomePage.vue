<template>
    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcome!</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <AsyncButton @click="handleButtonClick" :is-pending="isPending">
      Click Me
    </AsyncButton>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
</template>



<script>
import AsyncButton from '../components/AsyncButton.vue'

export default {
  name: 'HomePage',
  components: {
    AsyncButton
  },
  methods: {
    async handleButtonClick() {
      this.isPending = true
      this.clickCount += 1; 

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, this.clickCount * 1000); 
      })
      this.isPending = false
    }
  },
  data() {
    return {
        clickCount: 0,
        isPending: false
    }
  }
}
</script>