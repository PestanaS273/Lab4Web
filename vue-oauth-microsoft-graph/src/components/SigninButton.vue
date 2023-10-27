<template>
  <div>
    <AsyncButton @click="signIn">Sign In</AsyncButton>

      <div v-if="user">
          <p>Welcome {{ user.name }} !</p>

      </div>
    
  </div>
</template>

<script>
import {signInAndGetUser} from '../services/PublicClientApplication.js'
import AsyncButton from './AsyncButton.vue';

export default {
  components: {
      AsyncButton,
  },
  data() {
      return {
          user: null,

      };
  },
  methods: {
      async signIn(){
          try {
              const user = await signInAndGetUser();
              this.user = user;
          } catch (error) {
              console.error("Sign-in error:", error);
          }
      },
  },
};

</script>
<style scoped>
/* Add any styles here */
</style>
