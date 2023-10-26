<template>
  <AsyncButton :onClick="fetchUser" color="primary">
    Sign in with Microsoft
  </AsyncButton>
</template>

<script>
import AsyncButton from "./AsyncButton.vue";
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

export default {
  name: 'SigninButton',
  components: {
    AsyncButton
  },
  methods: {
    async fetchUser() {
      console.log('fetchUser called');
      try {
        this.isPending = true;
        await msalInstance.initialize();
        const authResult = await msalInstance.loginPopup({
          scopes: ["User.Read"]
        });
        msalInstance.setActiveAccount(authResult.account);
        console.log(authResult.account);
        this.$emit('authenticated', authResult.account);
      } catch (error) {
        console.log(error);
      } finally {
        this.isPending = false;
      }
    }
  }
};
</script>

<style scoped>
/* Add any styles here */
</style>
