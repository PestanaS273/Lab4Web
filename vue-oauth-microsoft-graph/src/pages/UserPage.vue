<template>
    <div>
        <h1>User Page</h1>
        <div>
            <SigninButton @click="handleButtonClick" :is-pending="isPending">
            Click Me
            </SigninButton>
            <p>Welcome, {{ user.name }}!</p>
            <p>Email: {{ user.email }}</p>
            <p>Role: {{ user.role }}</p>
        </div>
    </div>
</template>

<script>

import SigninButton from '../components/SigninButton.vue'

export default {
  name: 'UserPage',
  components: {
    SigninButton
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
        isPending: false,user: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                role: 'user'
            }
    }
  }
}
</script>
