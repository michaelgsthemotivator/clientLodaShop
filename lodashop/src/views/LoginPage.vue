<script>
import NavBar from '../components/NavBar.vue'
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'

export default {
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
  },
  components: { NavBar }
}
</script>
<template>
  <div>
    <NavBar />
    <div class="login-page">
      <div class="login-form container-fluid">
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
  </div>
</template>

<style scooped>
.login-page {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 85vh; /* 100% viewport height */
}

.login-form {
  text-align: center; /* Center the content within the login-form div */
}

.login-form-container {
  background-color: #fff; /* Set background color for the login form */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
