<template>
  <div class="login-page">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="submitLogin">
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
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'
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
  },
  methods: {
    ...mapActions(useCounterStore, ['login']),
    async submitLogin() {
      const res = await this.login(this.loginForm)
      if (res.access_token) {
        localStorage.access_token = res.access_token
        this.isAuthenticated = true
        this.$router.push({ name: 'home' })
      }
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['isAuthenticated'])
  }
}
</script>
