<template>
  <div class="register-page">
    <div class="register-form">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="registerForm.username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="registerForm.email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="registerForm.password" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">PhoneNumber: </label>
          <input type="phoneNumber" id="phoneNumber" v-model="registerForm.phoneNumber" required />
        </div>
        <div class="form-group">
          <label for="address">address: </label>
          <input type="address" id="address" v-model="registerForm.address" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
// import { useCustomerStore } from '../stores/customer'
import { mapActions, mapWritableState } from 'pinia'
// import $ from 'jquery'

export default {
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  }
  // computed: {
  //   ...mapWritableState(useCustomerStore, ['isAuthenticated'])
  // },
  // methods: {
  //   ...mapActions(useCustomerStore, ['register', 'googleLogin']),
  //   async submitRegister() {
  //     const res = await this.register(this.registerForm)
  //     if (res.access_token) {
  //       localStorage.access_token = res.access_token;
  //       this.isAuthenticated = true
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
  //       this.isAuthenticated = true
  //       this.$router.push({ name: 'home' });
  //       this.$toast.success('Successfully logged in!', {
  //         duration: 2000
  //       })
  //     } else {
  //       this.$toast.error(res.response.data.message, {
  //         duration: 2000
  //       })
  //     }
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
