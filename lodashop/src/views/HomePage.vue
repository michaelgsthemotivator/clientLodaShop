<script>
import PromoBanner from '../components/PromoBanner.vue'
import GameCard from '../components/GameCard.vue'
import NavBar from '../components/NavBar.vue'
// import $ from 'jquery'

import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  components: { GameCard, NavBar, PromoBanner },
  computed: {
    ...mapState(useCounterStore, ['games'])
  },
  methods: {
    ...mapActions(useCounterStore, ['getGames']),
    async next() {
      const currentPage = Number(this.$route.query.page) || 1
      const nextPage = currentPage + 1
      this.$router.push({ query: { ...this.$route.query, page: nextPage } })
      await this.getGames(this.$route.query.filter, nextPage)
    },
    async prev() {
      const currentPage = Number(this.$route.query.page) || 1
      const prevPage = currentPage > 1 ? currentPage - 1 : 1
      this.$router.push({ query: { ...this.$route.query, page: prevPage } })
      this.getGames(this.$route.query.filter, prevPage)
    }
  },

  async created() {
    if (this.$route.query) {
      this.getGames(this.$route.query.filter, this.$route.query.page)
    } else {
      this.getGames()
    }
  }
}
</script>
<template>
  <div>
    <NavBar />
    <div class="top-up-game-home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to LodaShop</h1>

          <p>Get ready to top up and enjoy your favorite games.</p>
          <!-- <router-link to="/top-up" class="cta-button">Top Up Now</router-link> -->
        </div>
      </section>
      <PromoBanner />
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" @click.prevent="prev" href="">Previous</a></li>

          <li class="page-item"><a class="page-link" @click.prevent="next" href="">Next</a></li>
        </ul>
      </nav>
      <!-- Featured Games Section -->
      <section class="featured-games">
        <h2>Featured Games</h2>
        <div class="game-list">
          <!-- Display featured games here -->
          <GameCard v-for="game in games" :key="game.id" :game="game" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scooped>
.featured-games {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
