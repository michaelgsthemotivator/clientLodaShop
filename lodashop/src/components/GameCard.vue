<template>
  <div>
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
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.comment:hover {
  cursor: pointer;
}
</style>
