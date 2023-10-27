<template>
  <div class="dropdown-item">
    <a href="" @click.prevent="topupHandler"
      ><h3>{{ transaction.title }}</h3></a
    >
    <h6>Rp. {{ transaction.price }}</h6>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'
import { mapActions } from 'pinia'
export default {
  props: ['transaction'],
  //di transaction sudah ada data transaction bisa langsung dipanggil
  methods: {
    ...mapActions(useCounterStore, ['midtranstoken']),
    async topupHandler() {
      await this.midtranstoken(this.transaction.id)
      //setelah ini mau ngapain di actions topup yang ada di store ??
    }
  }
}
</script>

<style scoped></style>
