<script>
import NavBar from '../components/NavBar.vue'
import TransactionList from '../components/TransactionList.vue'

import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  components: { NavBar, TransactionList },
  computed: {
    ...mapState(useCounterStore, ['games', 'qrcode'])
  },
  methods: {
    ...mapActions(useCounterStore, ['gameById', 'generateQrCode'])
  },

  async created() {
    this.gameById()
    await this.generateQrCode(window.location.href)
  }
}
</script>

<template>
  <div>
    <NavBar />
    <TransactionList v-for="game in games.Transactions" :key="game.id" :game="game" />
    <div class="col-lg-6 col-md-6">
      <ul>
        <div v-html="qrcode.qrcode" style="width: 10rem; height: 10rem"></div>
      </ul>
    </div>
  </div>
</template>
