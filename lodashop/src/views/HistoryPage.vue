<template>
  <div>
    <NavBar />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Description</th>
          <th scope="col">UserId</th>
          <th scope="col">TransactionId</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in this.histories" :key="index">
          <td>{{ record.id }}</td>
          <td>{{ record.description }}</td>
          <td>{{ record.UserId }}</td>
          <td>{{ record.TransactionId }}</td>
          <td>{{ record.createdAt }}</td>
          <td>{{ record.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  components: { NavBar },
  computed: {
    ...mapState(useCounterStore, ['histories'])
  },
  methods: {
    ...mapActions(useCounterStore, ['getHistories'])
  },

  async created() {
    this.getHistories()
  }
}
</script>
