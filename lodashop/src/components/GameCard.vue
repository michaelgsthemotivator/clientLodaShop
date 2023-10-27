<template>
  <div>
    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="game.imageUrl" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ game.name }}</h5>

        <!-- <a href="#" class="btn btn-primary">Top Up</a> -->
        <router-link :to="'/topup/' + game.id" class="btn btn-primary">Top Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['game'] //ngelisten dari v-for <GameCard /> di home
}
</script>

<style scoped></style>
