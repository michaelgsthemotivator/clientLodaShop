<script>
import NavBar from '../components/NavBar.vue'
import TransactionList from '../components/TransactionList.vue'

import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  components: { NavBar, TransactionList },
  computed: {
    ...mapState(useCounterStore, ['games', 'qrcode', 'transactions'])
  },
  methods: {
    ...mapActions(useCounterStore, ['gameById', 'generateQrCode', 'getTransactions'])
  },

  async created() {
    this.gameById(this.$route.params.id) //mengirim params menggunakan route, karena mengirim data

    this.getTransactions(this.$route.params.id)

    await this.generateQrCode(window.location.href)
  }
}
</script>

<template>
  <div>
    <NavBar />
    <TransactionList
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
    <div class="col-lg-6 col-md-6">
      <ul>
        <div v-html="qrcode.qrcode" style="width: 10rem; height: 10rem"></div>
      </ul>
    </div>
  </div>
</template>
