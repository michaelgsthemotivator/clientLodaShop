<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <router-link to="/">Your Logo</router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'pinia'
// import { useFavoriteStore } from '../stores/favorite'
import { RouterLink } from 'vue-router'

// export default {
//   components: { RouterLink },
//   props: ['movie'],
//   methods: {
//     ...mapActions(useFavoriteStore, ['createFavorite']),
//     async addToFavorite() {
//       const res = await this.createFavorite(this.movie.id)
//       if (!res) {
//         this.$toast.error('You already favorited this movie!', {
//           duration: 2000
//         })
//       } else {
//         this.$toast.success('Success add movie to favorites!', {
//           duration: 2000
//         })
//       }
//     }
//   }
// }
</script>

<style scoped>
.comment:hover {
  cursor: pointer;
}
</style>
