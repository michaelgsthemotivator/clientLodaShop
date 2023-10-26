<template>
  <div>
    <NavBar />
    <h1>
      {{ histories }}
    </h1>
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
