<template>
  <div>
    <NavBar />
    <div class="top-up-game-home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Top-Up Games</h1>
          <PromoBanner />
          <p>Get ready to top up and enjoy your favorite games.</p>
          <router-link to="/top-up" class="cta-button">Top Up Now</router-link>
        </div>
      </section>

      <!-- Featured Games Section -->
      <section class="featured-games">
        <h2>Featured Games</h2>
        <div class="game-list">
          <!-- Display featured games here -->
          <GameCard />
        </div>
      </section>

      <!-- Promotions Section -->
      <section class="promotions">
        <h2>Promotions</h2>
        <div class="promotion-list">
          <!-- Display promotions here -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import { useMovieStore } from '../stores/movie'
// import { useGenreStore } from '../stores/genre';
import { mapState, mapWritableState, mapActions } from 'pinia'
// import GameCard from '../components/GameCard.vue'
// import PromoBanner from '../components/PromoBanner.vue'
// import NavBar from '../components/NavBar.vue'

export default {
  // components: { GameCard, NavBar, PromoBanner }
  // computed: {
  //   ...mapState(useMovieStore, ['movies']),
  //   ...mapState(useGenreStore, ['genres']),
  //   ...mapWritableState(useGenreStore, ['genre'])
  // },
  // methods: {
  //   ...mapActions(useMovieStore, ['getMovies']),
  //   next() {
  //     const currentPage = Number(this.$route.query.page) || 1
  //     const nextPage = currentPage + 1
  //     this.$router.push({ query: { ...this.$route.query, page: nextPage } })
  //   },
  //   prev() {
  //     const currentPage = Number(this.$route.query.page) || 1
  //     const prevPage = currentPage > 1 ? currentPage - 1 : 1
  //     this.$router.push({ query: { ...this.$route.query, page: prevPage } })
  //   },
  //   changeGenre() {
  //     const genreId = this.$route.query.filter
  //     const genreName = this.genres.find((genre) => genre.id == genreId).name
  //     this.genre = genreName
  //   }
  // },
  // async created() {
  //   if (this.$route.query) {
  //     this.getMovies(this.$route.query.filter, this.$route.query.page)
  //   } else {
  //     this.getMovies()
  //   }
  // },
  // mounted() {
  //   $('.set-bg').each(function () {
  //     var bg = $(this).data('setbg')
  //     $(this).css('background-image', 'url(' + bg + ')')
  //   })
  // },
  // updated() {
  //   $('.set-bg').each(function () {
  //     var bg = $(this).data('setbg')
  //     $(this).css('background-image', 'url(' + bg + ')')
  //   })
  // },
  // watch: {
  //   async '$route.query'() {
  //     const result = await this.getMovies(this.$route.query.filter, this.$route.query.page)
  //     if (result) {
  //       this.$router.push({ query: { ...this.$route.query, page: result } })
  //     }
  //     if (this.$route.query.filter) {
  //       const genreId = this.$route.query.filter
  //       const genreName = this.genres.find((genre) => genre.id == genreId).name
  //       this.genre = genreName
  //     }
  //   }
  // }
}
</script>
