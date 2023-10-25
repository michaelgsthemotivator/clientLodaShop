<template>
  <div>
    <div class="card">
      <div class="card-header">Genshin Impact</div>
      <div class="card-body">
        <slot>asdfasdfa</slot>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Genshin Impact</div>
      <div class="card-body">
        <slot>asdfasdfa</slot>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Genshin Impact</div>
      <div class="card-body">
        <slot>asdfasdfa</slot>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Genshin Impact</div>
      <div class="card-body">
        <slot>asdfasdfa</slot>
      </div>
    </div>
  </div>
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
