<template>
  <div class="login-page">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="loginForm.email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="loginForm.password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
// import { useCustomerStore } from '../stores/customer'
import { mapActions, mapWritableState } from 'pinia'
// import $ from 'jquery'
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  }
  // computed: {
  //   ...mapWritableState(useCustomerStore, ['isAuthenticated'])
  // },
  // methods: {
  //   ...mapActions(useCustomerStore, ['login', 'googleLogin', 'handleCredentialResponse']),
  //   async submitLogin() {
  //     const res = await this.login(this.loginForm)
  //     if (res.access_token) {
  //       localStorage.access_token = res.access_token;
  //       this.isAuthenticated = true;
  //       this.$router.push({ name: 'home' });
  //       this.$toast.success('Successfully logged in!', {
  //         duration: 2000
  //       })
  //     } else {
  //       this.$toast.error(res.response.data.message, {
  //         duration: 2000
  //       })
  //     }
  //   },
  //   async submitLoginGoogle(response) {
  //     const res = await this.googleLogin(response)
  //     if (res.access_token) {
  //       localStorage.access_token = res.access_token;
  //       this.isAuthenticated = true;
  //       this.$router.push({ name: 'home' });
  //       this.$toast.success('Successfully logged in!', {
  //         duration: 2000
  //       })
  //     } else {
  //       this.$toast.error(res.response.data.message, {
  //         duration: 2000
  //       })
  //     }
  //   },
  //   unavailable() {
  //     this.$toast.info('Sorry this feature isn\'t available right now');
  //   }
  // },
  // mounted() {
  //   $('.set-bg').each(function () {
  //     var bg = $(this).data('setbg');
  //     $(this).css('background-image', 'url(' + bg + ')');
  //   });
  // }
}
</script>
