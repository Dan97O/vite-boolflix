<script>
import { store } from '../store';
export default {
  name: 'inputSearch',
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div>
    <input type="text" v-model="this.store.searchMovies">
    <button @click="$emit('moviesShow')"> Click </button>
  </div>
  <ul v-for="movie in this.store.movies">
    <li>{{ movie.title }}</li>
    <li> {{ movie.original_title }}</li>
    <li> {{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>
  </ul>
</template>


<style lang="scss" scoped></style>