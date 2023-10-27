<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">LodaShop</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/" class="dropdown-item">Home</router-link>
                <router-link to="/login" class="dropdown-item" v-if="!isAuthenticated"
                  >Login</router-link
                >
                <router-link to="/register" class="dropdown-item" v-if="!isAuthenticated"
                  >Register</router-link
                >
                <router-link to="/histories" class="dropdown-item" v-if="isAuthenticated"
                  >History</router-link
                >
                <a @click.prevent="logout" class="dropdown-item">Logout</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchTerm"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  components: { RouterLink },
  computed: {
    ...mapWritableState(useCounterStore, ['isAuthenticated']),
    ...mapState(useCounterStore, ['games'])
  },
  methods: {
    ...mapActions(useCounterStore, ['getGames']),
    logout() {
      localStorage.removeItem('access_token')
      this.isAuthenticated = false
      this.$router.push('/login')
    },
    search() {
      this.getGames(this.searchTerm)
    }
  }
}
</script>

<style scoped></style>
