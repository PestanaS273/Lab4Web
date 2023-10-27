<template>
    <div>
        <h1>User Page</h1>
        <div>
            <SigninButton>
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
